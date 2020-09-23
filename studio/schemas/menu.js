export default {
  name: "menu",
  type: "document",
  title: "Meny",
  fields: [
    {
      name: "titleMenu",
      type: "string",
      title: "Meny",
      description: "Titeln på sidan",
    },
    {
      title: "Beskrivande text om menyn",
      name: "menuText",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Text", value: "normal" }],
        },
      ],
    },
    {
      title: "Bild",
      name: "image",
      type: "image",
      description: "En bild som representerar menyn",
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
