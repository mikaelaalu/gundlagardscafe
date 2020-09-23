export default {
  name: "icon",
  type: "document",
  title: "Ikoner",
  preview: {
    select: {
      title: "title",
    },
  },
  fields: [
    {
      title: "Titel på dokument",
      name: "title",
      type: "string",
    },
    {
      title: "Ikoner",
      name: "iconArray",
      type: "array",
      of: [
        {
          title: "Lägg till ikon",
          name: "iconObject",
          type: "icons",
        },
      ],
    },
  ],
};
