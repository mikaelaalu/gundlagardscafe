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
      title: "Beskrivning",
      name: "description",
      type: "array",
      description: "Beskrivning av evenemang",
      of: [
        {
          type: "block",
          styles: [{ title: "Text", value: "normal" }],
        },
      ],
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
