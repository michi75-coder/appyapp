import type { ImageMetadata } from "astro";

import type { AppSlug, Language } from "../i18n";

const images = import.meta.glob<ImageMetadata>("../assets/**/*.{webp,png}", {
  eager: true,
  import: "default",
});

const imageAt = (relativePath: string) => {
  const image = images[`../assets/${relativePath}`];
  if (!image) {
    throw new Error(`Missing image: ${relativePath}`);
  }
  return image;
};

type AppInfo = {
  name: string;
  appStoreUrl: string;
  playStoreUrl: string;
  icon: ImageMetadata;
  /** The store pictures, in the stores' order: captions included, made for the gallery. */
  storeShots: string[];
};

export const apps: Record<AppSlug, AppInfo> = {
  sunory: {
    name: "Sunory",
    appStoreUrl: "https://apps.apple.com/app/id6822782301",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ncoulon.sunory",
    icon: imageAt("sunory/icon.png"),
    storeShots: ["01-coast", "02-apartment", "03-mountain", "04-village", "05-sun", "06-compass"],
  },
  aquashot: {
    name: "AquaShot",
    appStoreUrl: "https://apps.apple.com/app/id6817750017",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ncoulon.aquashot",
    icon: imageAt("aquashot/icon.png"),
    storeShots: [
      "1-home",
      "2-evening",
      "3-weight",
      "4-history",
      "5-trophies",
      "6-card",
      "7-routine",
      "8-beverage",
      "9-health",
      "10-sleep",
    ],
  },
};

/** A raw screen of the app, as the phone shows it. */
export const screenImage = (app: AppSlug, language: Language, screen: string) =>
  imageAt(`${app}/screens/${language}/${screen}.webp`);

export const storeShotImage = (app: AppSlug, language: Language, shot: string) =>
  imageAt(`${app}/store/${language}/${shot}.webp`);

export const sunoryPhoto = imageAt("sunory/coast-photo.webp");
