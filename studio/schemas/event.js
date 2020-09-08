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
      title: "Schedule",
      name: "schedule",
      type: "schedule", // defined in objects
    },
    {
      title: "Datum",
      name: "eventDates",
      type: "array",
      of: [
        {
          type: "datetime",
          title: "Lägg till datum",
          options: {
            dateFormat: "DD MMMM",
            dateTime: "HH:mm",
            timeStep: 5,
          },
        },
      ],
    },
  ],
};
