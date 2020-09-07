export default {
  name: "menu",
  type: "document",
  title: "Meny",
  fields: [
    {
      title: "Meny text",
      name: "menuText",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
