export default {
  name: "event",
  type: "document",
  title: "Evenemang",
  fields: [
    {
      title: "Titel till evenemang",
      name: "title",
      type: "string",
    },
    {
      title: "Bild på evenemang",
      name: "image",
      type: "image",
      description: "Välj en bild som representerar eventet",
    },
    {
      title: "Alt text till bild",
      name: "imageAlt",
      type: "string",
      description:
        "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    },
    {
      title: "Datum",
      name: "eventDate",
      type: "array",
      of: [
        {
          title: "Lägg till datum",
          name: "timeSpan",
          type: "duration",
        },
      ],
    },
  ],
};
