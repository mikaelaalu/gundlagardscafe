export default {
  name: "eventInformation",
  type: "document",
  title: "Evenemang - inledande text",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Rubrik",
      description: "Titlen på sidan",
    },
    {
      name: "description",
      type: "array",
      title: "Beskrivning",
      description: "En inledande text till sidan och dess innehåll.",
      of: [
        {
          type: "block",
          styles: [
            { title: "Text", value: "normal" },
            { title: "Rubrik", value: "h3" },
          ],
        },
      ],
    },
  ],
};
