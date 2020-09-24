export default {
  name: "catering",
  type: "document",
  title: "Catering/Event",
  fields: [
    {
      name: "titleCatering",
      type: "string",
      title: "Boka event/catering",
      description: "Titlen på sidan",
    },
    {
      title: "Info om bokning av catering/event",
      name: "cateringInfo",
      type: "array",
      of: [{ type: "block", styles: [{ title: "Text", value: "normal" }] }],
    },
  ],
};
