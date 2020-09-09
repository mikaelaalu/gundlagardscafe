export default {
  name: "duration",
  type: "object",
  title: "Test",
  fieldsets: [{ name: "dayAndTime", title: "Datum och tid för evenemenag" }],
  fields: [
    {
      title: "Börjar",
      name: "startingTime",
      type: "datetime",
      options: {
        dateFormat: "DD MMMM",
        dateTime: "HH:mm",
        timeStep: 5,
      },
      fieldset: "dayAndTime",
    },
    {
      title: "Slutar",
      name: "endingTime",
      type: "datetime",
      options: {
        dateFormat: "DD MMMM",
        dateTime: "HH:mm",
        timeStep: 5,
      },
      fieldset: "dayAndTime",
    },
  ],
};
