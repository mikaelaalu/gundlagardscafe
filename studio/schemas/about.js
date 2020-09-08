export default {
  name: "about",
  type: "document",
  title: "Om oss",
  fields: [
    {
      name: "titleAbout",
      type: "string",
      title: "Om oss",
    },
    {
      title: "Info om oss",
      name: "findUsText",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Bild",
      name: "image",
      type: "image",
      description: "Bild om oss",
    },
    {
      title: "Alt text till bild",
      name: "imageAlt",
      type: "string",
      description:
        "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    },
  ],
};
