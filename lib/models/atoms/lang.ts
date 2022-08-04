export type Spanish = {
  name: "Spanish" | "Español" | "Spagnolo";
  iso: "es-ES";
  code: "es";
};

export type English = {
  name: "English" | "Inglés" | "Inglese";
  iso: "en-US";
  code: "en";
};

export type Italian = {
  name: "Italian" | "Italiano";
  iso: "it-IT";
  code: "it";
};
export type LanguageLevel = "Beginner" | "Intermediate" | "Advanced" | "Native";
export type Language = Spanish | English | Italian;
