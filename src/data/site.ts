export const CONTACT_EMAIL = "appyapp.contact@gmail.com";

/** A mail to Appyapp, its subject naming the app, so that support questions sort themselves. */
export const contactMailto = (subject?: string) =>
  subject ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}` : `mailto:${CONTACT_EMAIL}`;
