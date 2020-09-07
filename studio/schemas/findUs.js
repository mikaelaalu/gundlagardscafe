export default {
  name: "findUs",
  type: "document",
  title: "Hitta hit",
  fields: [
    {
      name: "titleFindUs",
      type: "string",
      title: "Hitta hit",
    },
    {
      title: "Hitta hit info",
      name: "findUsText",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
