type RGB = [number, number, number];

const SKY_STOPS: { at: number; top: RGB; bottom: RGB }[] = [
  { at: 0, top: [36, 31, 61], bottom: [217, 137, 122] },
  { at: 0.45, top: [59, 110, 150], bottom: [185, 215, 230] },
  { at: 0.78, top: [35, 37, 63], bottom: [231, 168, 102] },
  { at: 1, top: [15, 23, 36], bottom: [26, 36, 54] },
];
const SUN_TRAVEL_END = 0.9;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const mix = (from: number, to: number, share: number) => from + (to - from) * share;
const mixColor = (from: RGB, to: RGB, share: number) =>
  `rgb(${from.map((channel, channelIndex) => Math.round(mix(channel, to[channelIndex] ?? channel, share))).join(",")})`;

const skyAt = (progress: number) => {
  const nextIndex = SKY_STOPS.findIndex((stop) => stop.at >= progress);
  const next = SKY_STOPS[Math.max(1, nextIndex)] ?? SKY_STOPS[SKY_STOPS.length - 1];
  const previous = SKY_STOPS[Math.max(0, SKY_STOPS.indexOf(next) - 1)] ?? next;
  const share = next.at === previous.at ? 0 : clamp01((progress - previous.at) / (next.at - previous.at));
  const bottom = previous.bottom.map((channel, channelIndex) => mix(channel, next.bottom[channelIndex] ?? channel, share)) as RGB;
  return {
    top: mixColor(previous.top, next.top, share),
    bottom: mixColor(bottom, bottom, 0),
    ground: mixColor(bottom, [15, 23, 36], 0.62),
  };
};

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** How far the page has scrolled through a tall scene, 0 when it reaches the top, 1 at its end. */
const sceneProgress = (scene: HTMLElement) => {
  const box = scene.getBoundingClientRect();
  const runway = box.height - window.innerHeight;
  return runway <= 0 ? 0 : clamp01(-box.top / runway);
};

const SKY_WIDTH = 1600;
const SKY_HEIGHT = 1000;
const HORIZON_Y = 760;

/**
 * The SVG covers the screen ("slice"), so a phone held upright only shows its middle: the arc is
 * redrawn inside the part that shows, from one edge to the other, its top below the visible sky.
 */
const fitSunArc = (scene: HTMLElement) => {
  const stage = scene.querySelector<HTMLElement>(".sky-stage");
  if (!stage) {
    return;
  }
  const scale = Math.max(stage.clientWidth / SKY_WIDTH, stage.clientHeight / SKY_HEIGHT);
  const visibleWidth = stage.clientWidth / scale;
  const visibleTop = SKY_HEIGHT - stage.clientHeight / scale;
  const arcStart = SKY_WIDTH / 2 - visibleWidth / 2 + visibleWidth * 0.06;
  const arcEnd = SKY_WIDTH / 2 + visibleWidth / 2 - visibleWidth * 0.06;
  const peakY = visibleTop + (HORIZON_Y - visibleTop) * 0.22;
  // The middle of a cubic with both handles at `handleY` sits at a quarter base, three quarters handle.
  const handleY = (peakY - 0.25 * HORIZON_Y) / 0.75;
  const handleInset = (arcEnd - arcStart) * 0.2;
  const path = `M ${arcStart} ${HORIZON_Y} C ${arcStart + handleInset} ${handleY}, ${arcEnd - handleInset} ${handleY}, ${arcEnd} ${HORIZON_Y}`;
  for (const arcPath of scene.querySelectorAll<SVGPathElement>("[data-sun-arc], [data-sun-travelled]")) {
    arcPath.setAttribute("d", path);
  }
  scene.dataset.peak = String(peakY);
};

const drawSkyHero = (scene: HTMLElement, progress: number) => {
  const arc = scene.querySelector<SVGPathElement>("[data-sun-arc]");
  const travelled = scene.querySelector<SVGPathElement>("[data-sun-travelled]");
  const sun = scene.querySelector<SVGGElement>("[data-sun]");
  if (!arc || !travelled || !sun) {
    return;
  }
  const arcLength = arc.getTotalLength();
  const travelShare = clamp01(progress / SUN_TRAVEL_END);
  const sunPoint = arc.getPointAtLength(travelShare * arcLength);
  const horizonY = HORIZON_Y;
  const peakY = Number(scene.dataset.peak ?? 250);
  // Past the end of the arc, the sun goes on down behind the horizon.
  const setDepth = clamp01((progress - SUN_TRAVEL_END) / (1 - SUN_TRAVEL_END)) * 120;
  const sunY = sunPoint.y + setDepth;
  sun.setAttribute("transform", `translate(${sunPoint.x} ${sunY})`);
  travelled.style.strokeDasharray = `${arcLength}`;
  travelled.style.strokeDashoffset = `${arcLength * (1 - travelShare)}`;

  const elevationShare = clamp01((horizonY - sunY) / (horizonY - peakY));
  scene.style.setProperty("--sun-height", elevationShare.toFixed(3));
  const sky = skyAt(progress);
  scene.style.setProperty("--sky-top", sky.top);
  scene.style.setProperty("--sky-bottom", sky.bottom);
  // The ground takes some of the sky's light, so that the buildings' shadows show on it by day.
  scene.style.setProperty("--ground-top", sky.ground);

  // Each building's shadow falls away from the sun, the longer the lower the sun.
  const shadowReach = elevationShare <= 0.02 ? 0 : Math.min(9, 0.9 / elevationShare);
  for (const shadow of scene.querySelectorAll<SVGPolygonElement>("[data-shadow]")) {
    const left = Number(shadow.dataset.left);
    const width = Number(shadow.dataset.width);
    const height = Number(shadow.dataset.height);
    const centre = left + width / 2;
    const awayFromSun = centre >= sunPoint.x ? 1 : -1;
    const reach = awayFromSun * height * shadowReach * 0.35;
    const depth = Math.min(46, 10 + height * 0.12);
    shadow.setAttribute(
      "points",
      `${left},${horizonY} ${left + width},${horizonY} ${left + width + reach},${horizonY + depth} ${left + reach},${horizonY + depth}`,
    );
    shadow.style.opacity = String(elevationShare <= 0.02 ? 0 : 0.55);
  }
};

const startScenes = () => {
  const scenes = [...document.querySelectorAll<HTMLElement>("[data-scene]")];
  if (scenes.length === 0) {
    return;
  }
  let isFramePending = false;
  const drawScenes = () => {
    isFramePending = false;
    for (const scene of scenes) {
      const progress = sceneProgress(scene);
      scene.style.setProperty("--p", progress.toFixed(4));
      if (scene.dataset.scene === "sky") {
        drawSkyHero(scene, progress);
      }
    }
  };
  const requestDraw = () => {
    if (!isFramePending) {
      isFramePending = true;
      requestAnimationFrame(drawScenes);
    }
  };
  const fitAndDraw = () => {
    for (const scene of scenes) {
      if (scene.dataset.scene === "sky") {
        fitSunArc(scene);
      }
    }
    requestDraw();
  };
  window.addEventListener("scroll", requestDraw, { passive: true });
  window.addEventListener("resize", fitAndDraw);
  fitAndDraw();
};

/** A chapter's phone shows the screen of the step being read. */
const startChapters = () => {
  for (const chapter of document.querySelectorAll<HTMLElement>("[data-chapter]")) {
    const steps = [...chapter.querySelectorAll<HTMLElement>("[data-step]")];
    // Only the sticky phone swaps its screens: on a phone, each step has a phone of its own.
    const screens = [...chapter.querySelectorAll<HTMLElement>(".chapter-phone-column [data-screen]")];
    const showStep = (step: HTMLElement) => {
      for (const otherStep of steps) {
        otherStep.classList.toggle("is-current", otherStep === step);
      }
      for (const screen of screens) {
        screen.classList.toggle("is-shown", screen.dataset.screen === step.dataset.step);
      }
    };
    const handleIntersections = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          showStep(entry.target as HTMLElement);
        }
      }
    };
    const observer = new IntersectionObserver(handleIntersections, { rootMargin: "-45% 0px -45% 0px" });
    for (const step of steps) {
      observer.observe(step);
    }
    if (steps[0]) {
      showStep(steps[0]);
    }
  }
};

const startGalleries = () => {
  for (const gallery of document.querySelectorAll<HTMLElement>("[data-gallery]")) {
    const track = gallery.querySelector<HTMLElement>("[data-gallery-track]");
    if (!track) {
      continue;
    }
    const scrollByPage = (direction: number) => {
      track.scrollBy({
        left: direction * track.clientWidth * 0.8,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    };
    const handlePrevious = () => scrollByPage(-1);
    const handleNext = () => scrollByPage(1);
    gallery.querySelector("[data-gallery-previous]")?.addEventListener("click", handlePrevious);
    gallery.querySelector("[data-gallery-next]")?.addEventListener("click", handleNext);
  }
};

const startHeader = () => {
  const header = document.querySelector<HTMLElement>(".site-header");
  if (!header) {
    return;
  }
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
};

const startLanguageLinks = () => {
  const rememberLanguage = (event: Event) => {
    const language = (event.currentTarget as HTMLElement).dataset.language;
    try {
      if (language) {
        localStorage.setItem("appyapp-language", language);
      }
    } catch {
      // Storage unavailable: the choice lasts for this visit.
    }
  };
  for (const link of document.querySelectorAll<HTMLElement>("[data-language]")) {
    link.addEventListener("click", rememberLanguage);
  }
};

export const startPage = () => {
  startHeader();
  startLanguageLinks();
  startScenes();
  startChapters();
  startGalleries();
};
