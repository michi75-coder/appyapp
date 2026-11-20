export const fr = {
  lang: "fr",
  otherLanguageLabel: "English",
  otherLanguageShort: "EN",
  nav: { home: "Accueil", sunory: "Sunory", aquashot: "AquaShot" },
  stores: { appStoreSmall: "Télécharger dans", playSmall: "Disponible sur" },
  footer: {
    contact: "Une question, une idée ? Écris-nous :",
    supportQuestion: "Une question qui n'est pas ici ? Écris-nous :",
    support: "Assistance",
    madeIn: "Conçu et développé en France.",
  },
  home: {
    title: "Appyapp, des apps utiles qui respectent ta vie privée",
    description:
      "Appyapp conçoit des apps soignées pour le quotidien : Sunory pour suivre le soleil, AquaShot pour boire assez d'eau.",
    heroTitle: "Des apps utiles, qui respectent ta vie privée.",
    heroText: "Appyapp conçoit des apps soignées pour le quotidien.",
    scrollCue: "Fais défiler pour suivre le soleil",
    bridge: "Et quand le soleil tape, pense à boire.",
    discover: "Découvrir",
    closingTitle: "Faites avec soin.",
    closingText: "Chaque app d'Appyapp fait une chose, et la fait bien.",
  },
  sunory: {
    title: "Sunory, la course du soleil où que tu sois",
    description:
      "Sunory te montre où et quand le soleil passera, où que tu sois : cadran du jour, Vue 3D sur ta caméra, carte avec l'ombre des bâtiments, heures de soleil d'un balcon sur toute l'année.",
    tagline: "Suivre le soleil",
    lead: "Le soleil où que tu sois, heure par heure, tous les jours de l'année.",
    detail:
      "Sunory tient compte des immeubles et du relief pour compter tes vraies heures de soleil. Pratique pour choisir un appartement, placer un potager, profiter d'une terrasse ou préparer une photo.",
    price:
      "Le cadran du jour est gratuit. Le reste se débloque en un achat unique, sans abonnement. Sur iPhone, tu peux tout essayer gratuitement pendant 7 jours.",
    steps: [
      {
        screen: "sun",
        title: "Le cadran du jour",
        text: "Le soleil de maintenant, et toute sa journée sur un arc : fais glisser le doigt pour le suivre d'heure en heure.",
        points: [
          "Lever, coucher et midi solaire",
          "Les heures dorées du matin et du soir",
          "Hauteur et direction à chaque instant",
        ],
      },
      {
        screen: "coast",
        title: "La course du soleil sur ta caméra",
        text: "Lève ton téléphone vers l'horizon : la course du soleil se dessine sur l'image de la caméra, avec les heures.",
        points: [
          "Tu vois d'avance s'il passera derrière la montagne ou l'immeuble d'en face",
          "Pour aujourd'hui ou n'importe quel jour de l'année",
          "Pratique pour préparer une photo au coucher",
        ],
      },
      {
        screen: "apartment",
        title: "Tes vraies heures de soleil",
        text: "Fais le tour de l'horizon depuis ta fenêtre ou ton balcon : Sunory garde la ligne des toits, des arbres et du relief.",
        points: [
          "Les heures de soleil direct, jour par jour",
          "Le bilan de toute l'année, à partager en image",
          "Tes lieux restent sur ton téléphone",
        ],
      },
      {
        screen: "compass",
        title: "La carte et l'ombre des bâtiments",
        text: "Incline la carte : l'arc du soleil s'élève en 3D au-dessus de la ville, et l'ombre des immeubles tourne au fil des heures.",
        points: [
          "Fais glisser l'heure pour voir les ombres bouger",
          "Touche un point : au soleil ou à l'ombre, et pour combien de temps",
          "En relief ou en vue satellite",
        ],
      },
    ],
    featuresTitle: "Ce que fait Sunory",
    features: [
      {
        title: "Le cadran du jour",
        text: "Le soleil de maintenant, son lever, son coucher, l'heure dorée et le midi solaire. Fais glisser le doigt sur l'arc pour le suivre au fil de la journée. Gratuit.",
      },
      {
        title: "La Vue 3D",
        text: "Lève ton téléphone : la course du soleil se dessine sur l'image de la caméra, avec les heures. Tu vois tout de suite s'il passera derrière la montagne ou l'immeuble d'en face.",
      },
      {
        title: "La carte du soleil",
        text: "Incline la carte : l'arc du soleil s'élève en 3D au-dessus de la ville. Fais glisser l'heure et regarde l'ombre des bâtiments tourner. Touche un point pour savoir combien de temps il reste au soleil.",
      },
      {
        title: "Les relevés d'horizon",
        text: "Garde l'horizon d'un balcon, d'un jardin ou d'une fenêtre. Sunory en tire les heures de soleil direct, jour par jour sur toute l'année, en un bilan à partager.",
      },
      {
        title: "Les rappels",
        text: "Une alerte avant l'heure dorée, le lever ou le coucher, le jour que tu choisis.",
      },
      {
        title: "La boussole",
        text: "Les directions du lever, du coucher et du soleil à l'heure choisie, autour de toi.",
      },
    ],
    trustTitle: "Des calculs vérifiés",
    trustText:
      "La position du soleil vient des algorithmes de la NOAA et de Jean Meeus, vérifiés contre l'algorithme de référence SPA du NREL. Tout se calcule sur ton téléphone.",
    privacyTitle: "Ta vie privée",
    privacyText:
      "Aucun compte, aucune publicité. Ta position sert au calcul, sans être enregistrée ni envoyée. Seules sortent du téléphone les demandes d'images de la carte, à Mapbox, et des rapports d'erreur sans donnée personnelle.",
    galleryTitle: "En images",
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "Faut-il une connexion internet ?",
        answer:
          "Non pour les calculs : ils se font sur ton téléphone. Seule la carte a besoin d'internet pour charger ses images.",
      },
      {
        question: "Est-ce un abonnement ?",
        answer: "Non. Le cadran du jour est gratuit, et le reste se débloque en un achat unique, valable pour toujours.",
      },
      {
        question: "Les ombres des bâtiments marchent-elles partout ?",
        answer:
          "Elles s'appuient sur la hauteur des bâtiments des cartes Mapbox, issue d'OpenStreetMap : très complète dans les villes, plus inégale à la campagne.",
      },
      {
        question: "Sur quels appareils ?",
        answer: "iPhone et téléphones Android.",
      },
      {
        question: "Dans quelles langues ?",
        answer: "Français, anglais, allemand, espagnol, italien et portugais.",
      },
    ],
    legal: "Conditions et confidentialité",
    legalUrl: "https://michi75-coder.github.io/sunory-legal/",
    supportUrl: "https://michi75-coder.github.io/sunory-legal/support.html",
  },
  aquashot: {
    title: "AquaShot, boire assez d'eau, simplement",
    description:
      "AquaShot calcule ton objectif d'eau du jour et le montre dans un verre qui se remplit à chaque gorgée. Routine, rappels, trophées. Gratuit, sans pub.",
    tagline: "Boire assez d'eau",
    lead: "Ton objectif d'eau du jour, dans un verre qui se remplit à chaque gorgée.",
    detail:
      "Il suit ton poids, tes séances de sport et tes soirées. Tes boissons habituelles s'ajoutent toutes seules, et un rappel te relance quand il faut.",
    price: "Gratuit, sans pub.",
    steps: [
      {
        screen: "home-addwater",
        title: "Un verre vivant",
        text: "Chaque gorgée remplit le verre, et l'eau ondule quand tu penches le téléphone.",
        points: [
          "Un verre d'eau ajouté en un geste",
          "Café, thé, jus : chaque boisson compte",
          "Le widget sur l'écran d'accueil de l'iPhone",
        ],
      },
      {
        screen: "myday",
        title: "Un objectif fait pour toi",
        text: "Ton objectif se calcule selon ton poids, puis s'ajuste à ta journée.",
        points: [
          "Plus d'eau après le sport, avec Apple Santé sur iPhone",
          "Après une soirée, l'eau à reboire au ml près",
          "Ta journée gorgée par gorgée",
        ],
      },
      {
        screen: "planification-dashboard",
        title: "Ta routine compte toute seule",
        text: "Les boissons de tous les jours s'ajoutent toutes seules, au moment que tu choisis.",
        points: [
          "Le café du matin, le thé de l'après-midi",
          "Un rappel pour chaque verre prévu",
          "La juste quantité à boire avant de dormir",
        ],
      },
      {
        screen: "rewards",
        title: "Des trophées pour tenir",
        text: "Atteins ton objectif jour après jour, et décroche des trophées.",
        points: [
          "Des séries de jours d'affilée",
          "Semaine parfaite, soirée compensée, séance validée",
          "Une carte à partager",
        ],
      },
    ],
    featuresTitle: "Ce que fait AquaShot",
    features: [
      {
        title: "Un verre vivant",
        text: "Ton eau du jour dans un verre qui se remplit à chaque gorgée. Penche ton téléphone, l'eau suit le mouvement.",
      },
      {
        title: "Un objectif sur mesure",
        text: "Calculé selon ton poids, ajusté après tes séances de sport (avec Apple Santé sur iPhone) et après les soirées.",
      },
      {
        title: "Ma routine",
        text: "Les boissons que tu prends tous les jours s'ajoutent toutes seules, au moment choisi.",
      },
      {
        title: "L'historique et les séries",
        text: "Tes sept derniers jours d'un coup d'œil, et les jours d'affilée où tu as atteint ton objectif.",
      },
      {
        title: "Les trophées",
        text: "Semaine parfaite, soirée compensée, séance validée : des trophées à gagner avec de l'eau, puis à partager.",
      },
      {
        title: "Avant de dormir",
        text: "La juste quantité à boire avant de te coucher, et un minuteur pour te faire signe.",
      },
    ],
    privacyTitle: "Ta vie privée",
    privacyText: "Aucun compte, aucune publicité. Tes données ne sont ni collectées ni revendues.",
    galleryTitle: "En images",
    faqTitle: "Questions fréquentes",
    faq: [
      {
        question: "AquaShot est-il vraiment gratuit ?",
        answer: "Oui, et sans publicité.",
      },
      {
        question: "Faut-il Apple Santé ?",
        answer: "Non, c'est une option sur iPhone pour compter tes séances de sport dans ton objectif.",
      },
      {
        question: "Sur quels appareils ?",
        answer: "iPhone et téléphones Android. Le widget de l'écran d'accueil est sur iPhone.",
      },
      {
        question: "Dans quelles langues ?",
        answer: "Français, anglais, allemand, espagnol, italien et portugais.",
      },
    ],
    legal: "Conditions et confidentialité",
    legalUrl: "https://michi75-coder.github.io/aqua-shot-legal/",
  },
};

export type Dictionary = typeof fr;
