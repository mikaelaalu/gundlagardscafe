export default {
  name: "icons",
  type: "object",
  title: "Ikoner",
  fields: [
    {
      title: "Namn på ikon",
      name: "titleIcon",
      type: "string",
      description: "Namnsätt ikonen, kommer ej att vara synligt på hemsidan",
    },
    {
      title: "Lägg till ikon",
      name: "iconImage",
      type: "image",
    },
    {
      title: "Alt text till bild",
      name: "iconAlt",
      type: "string",
      description:
        "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    },
  ],
};
