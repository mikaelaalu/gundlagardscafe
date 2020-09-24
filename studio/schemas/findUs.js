export default {
  name: "findUs",
  type: "document",
  title: "Hitta hit",
  fields: [
    {
      name: "titleFindUs",
      type: "string",
      title: "Hitta hit",
      description: "Titel på sidan",
    },
    {
      title: "Hitta hit information",
      name: "findUsText",
      type: "array",
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
