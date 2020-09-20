export default {
  name: "imageArray",
  type: "object",
  title: "Bilder",
  fields: [
    {
      title: "Lägg till bild",
      name: "mage",
      type: "image",
    },
    {
      title: "Alt text till bild",
      name: "imageAlt",
      type: "string",
      validation: (Rule) =>
        Rule.error(
          "Du måste fylla i en alternativ text till bilden för tillgängligheten på hemsidan."
        ).required(),
      description:
        "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    },
  ],
};
