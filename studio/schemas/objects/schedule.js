export default {
  name: "schedule",
  type: "object",
  title: "Schedule",
  fields: [
    {
      name: "from",
      type: "datetime",
      title: "From",
      options: {
        dateFormat: "DD MMMM",
        dateTime: "HH:mm",
        timeStep: 5,
      },
    },
    {
      name: "to",
      type: "datetime",
      title: "To",
      options: {
        dateFormat: "DD MMMM",
        dateTime: "HH:mm",
        timeStep: 5,
      },
    },
  ],
};
