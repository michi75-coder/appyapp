import type { Dictionary } from "./fr";

export const en: Dictionary = {
  lang: "en",
  otherLanguageLabel: "Français",
  otherLanguageShort: "FR",
  nav: { home: "Home", sunory: "Sunory", aquashot: "AquaShot" },
  stores: { appStoreSmall: "Download on the", playSmall: "Get it on" },
  footer: {
    contact: "A question, an idea? Write to us:",
    madeIn: "Designed and built in France.",
  },
  home: {
    title: "Appyapp, useful apps that respect your privacy",
    description:
      "Appyapp makes small, carefully built apps for everyday life: Sunory to follow the sun, AquaShot to drink enough water.",
    heroTitle: "Useful apps that respect your privacy.",
    heroText: "Appyapp makes small, carefully built apps for everyday life.",
    scrollCue: "Scroll to follow the sun",
    bridge: "And when the sun beats down, remember to drink.",
    discover: "Discover",
    closingTitle: "Made with care, one at a time.",
    closingText:
      "Each Appyapp app does one thing and does it well. No account to create, no ads: you download it and use it.",
  },
  sunory: {
    title: "Sunory, the sun's path at your place",
    description:
      "Sunory shows you where and when the sun will reach your place: today's sun dial, a 3D view on your camera, a map with building shadows, a balcony's hours of sun over the whole year.",
    tagline: "Follow the sun",
    lead: "The sun at your place, hour by hour, every day of the year.",
    detail:
      "Sunory takes buildings and terrain into account to count your real hours of sun. Handy for choosing a flat, placing a vegetable patch, enjoying a terrace or planning a photo.",
    price:
      "Today's sun dial is free. The rest unlocks with a one-time purchase, no subscription. On iPhone, you can try everything free for 7 days.",
    steps: [
      {
        screen: "sun",
        title: "Today's sun dial",
        text: "Sunrise, sunset, golden hour, the sun's height and direction, at a glance. Free, for good.",
      },
      {
        screen: "coast",
        title: "The sun's path on your camera",
        text: "Point at the horizon: the 3D view draws the sun's path over the picture, hour by hour.",
      },
      {
        screen: "apartment",
        title: "Your real hours of sun",
        text: "Scan the horizon from your window. Buildings and trees included, Sunory counts the direct sun, day after day.",
      },
      {
        screen: "compass",
        title: "The map and building shadows",
        text: "The sun's path in 3D above the city, and the shadows of buildings turning as the hours go by.",
      },
    ],
    featuresTitle: "What Sunory does",
    features: [
      {
        title: "Today's sun dial",
        text: "The sun right now, its rise, its set, golden hour and solar noon. Slide your finger along the arc to follow it through the day. Free.",
      },
      {
        title: "The 3D view",
        text: "Raise your phone: the sun's path is drawn over the camera picture, with the hours. You see at once whether it will pass behind the mountain or the building across the street.",
      },
      {
        title: "The sun map",
        text: "Tilt the map: the sun's arc rises in 3D above the city. Slide the time and watch the shadows of buildings turn. Tap a spot to see how long it stays in the sun.",
      },
      {
        title: "Horizon scans",
        text: "Save the horizon of a balcony, a garden or a window. Sunory works out its hours of direct sun, day by day over the whole year, in a report you can share.",
      },
      {
        title: "Reminders",
        text: "A heads-up before golden hour, sunrise or sunset, on the day you choose.",
      },
      {
        title: "The compass",
        text: "The directions of sunrise, sunset and the sun at the chosen time, all around you.",
      },
    ],
    trustTitle: "Checked calculations",
    trustText:
      "The sun's position comes from the NOAA and Jean Meeus algorithms, checked against NREL's reference SPA algorithm. Everything is calculated on your phone.",
    privacyTitle: "Your privacy",
    privacyText:
      "No account, no ads. Your location is used for the calculation, never saved or sent. The only things that leave your phone are the map's image requests, to Mapbox, and error reports with no personal data.",
    galleryTitle: "In pictures",
    faqTitle: "Questions",
    faq: [
      {
        question: "Does it need an internet connection?",
        answer: "Not for the calculations: they run on your phone. Only the map needs internet to load its images.",
      },
      {
        question: "Is it a subscription?",
        answer: "No. Today's sun dial is free, and the rest unlocks with a one-time purchase, yours for good.",
      },
      {
        question: "Do building shadows work everywhere?",
        answer:
          "They rely on the building heights of Mapbox's maps, from OpenStreetMap: very complete in cities, patchier in the countryside.",
      },
      {
        question: "Which devices?",
        answer: "iPhone and Android phones.",
      },
      {
        question: "Which languages?",
        answer: "English, French, German, Spanish, Italian and Portuguese.",
      },
    ],
    legal: "Terms and privacy",
    support: "Support",
    legalUrl: "https://michi75-coder.github.io/sunory-legal/en/",
    supportUrl: "https://michi75-coder.github.io/sunory-legal/en/support.html",
  },
  aquashot: {
    title: "AquaShot, drink enough water, simply",
    description:
      "AquaShot works out your daily water goal and shows it in a glass that fills with every sip. Routine, reminders, trophies. Free, no ads.",
    tagline: "Drink enough water",
    lead: "Your daily water goal, in a glass that fills with every sip.",
    detail:
      "It follows your weight, your workouts and your nights out. Your usual drinks log themselves, and a reminder nudges you when needed.",
    price: "Free, no ads.",
    steps: [
      {
        screen: "home-addwater",
        title: "A living glass",
        text: "Every sip fills the glass. Tilt your phone: the water ripples and follows along.",
      },
      {
        screen: "myday",
        title: "A goal made for you",
        text: "Set from your weight, adjusted after workouts and nights out.",
      },
      {
        screen: "planification-dashboard",
        title: "Your routine logs itself",
        text: "Morning coffee, afternoon tea: they are added at the right time.",
      },
      {
        screen: "rewards",
        title: "Trophies to keep you going",
        text: "Streaks to earn, and to share.",
      },
    ],
    featuresTitle: "What AquaShot does",
    features: [
      {
        title: "A living glass",
        text: "Your water for the day in a glass that fills with every sip. Tilt your phone, the water follows along.",
      },
      {
        title: "A goal made to measure",
        text: "Set from your weight, adjusted after your workouts (with Apple Health on iPhone) and after nights out.",
      },
      {
        title: "My routine",
        text: "The drinks you have every day log themselves, at the time you choose.",
      },
      {
        title: "History and streaks",
        text: "Your last seven days at a glance, and how many days in a row you reached your goal.",
      },
      {
        title: "Trophies",
        text: "Perfect week, evening made up for, workout done: trophies to earn with water, then share.",
      },
      {
        title: "Before bed",
        text: "The right amount to drink before you sleep, and a timer to give you a nudge.",
      },
    ],
    privacyTitle: "Your privacy",
    privacyText: "No account, no ads. Your data is never collected or sold.",
    galleryTitle: "In pictures",
    faqTitle: "Questions",
    faq: [
      {
        question: "Is AquaShot really free?",
        answer: "Yes, and with no ads.",
      },
      {
        question: "Do I need Apple Health?",
        answer: "No, it's an option on iPhone to count your workouts in your goal.",
      },
      {
        question: "Which devices?",
        answer: "iPhone and Android phones. The home screen widget is on iPhone.",
      },
      {
        question: "Which languages?",
        answer: "English, French, German, Spanish, Italian and Portuguese.",
      },
    ],
    legal: "Terms and privacy",
    legalUrl: "https://michi75-coder.github.io/aqua-shot-legal/en/",
  },
};
