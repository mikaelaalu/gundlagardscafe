export default {
  name: "menu",
  type: "document",
  title: "Meny",
  fields: [
    {
      name: "titleMenu",
      type: "string",
      title: "Meny",
    },
    {
      title: "Meny text",
      name: "menuText",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
