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
          name: "dateOfEvent",
          type: "datetime",
          title: "Datum",
          description: "Lägg till startdatum på eventet",
          options: {
            dateFormat: "DD MMMM",
            dateTime: "HH:mm",
            timeStep: 5,
          },
        },
      ],
    },
    // {
    //   title: "Datum",
    //   name: "eventDate",
    //   type: "array",
    //   of: [
    //     {
    //       title: "Lägg till datum",
    //       name: "timeSpan",
    //       type: "duration",
    //     },
    //   ],
    // },
  ],
};
