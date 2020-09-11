export default {
  name: "eventInformation",
  type: "document",
  title: "Evenemang - inledande text",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Rubrik",
      description: "Rubriken som syns högst upp på sidan",
    },
    {
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      title: "Beskrivning",
      description: "En inledande text till sidan och dess innehåll.",
    },
  ],
};
