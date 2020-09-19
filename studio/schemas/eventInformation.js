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
      title: "Beskrivning",
      description:
        "En inledande text till sidan och dess innehåll. I listan till vänster här under kan du välja Rubrik eller Text",
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
