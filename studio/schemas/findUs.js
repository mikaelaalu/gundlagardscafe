export default {
  name: "findUs",
  type: "document",
  title: "Hitta hit",
  fields: [
    {
      name: "titleFindUs",
      type: "string",
      title: "Hitta hit",
      description: "Titel högst upp på sidan",
    },
    {
      title: "Hitta hit information",
      name: "findUsText",
      type: "array",
      description: "I listan till vänster kan du välja Rubrik eller Text",
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
