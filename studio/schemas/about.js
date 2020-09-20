export default {
  name: "about",
  type: "document",
  title: "Om oss",
  fields: [
    {
      name: "titleAbout",
      type: "string",
      title: "Om oss",
    },
    {
      title: "Info om oss",
      name: "aboutText",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Text", value: "normal" }],
        },
      ],
    },
    {
      title: "Bilder",
      name: "imageArray",
      type: "array",
      of: [
        {
          title: "Lägg till bild(er)",
          name: "images",
          type: "imageArray",
        },
      ],
    },
    // {
    //   title: "Bilder",
    //   name: "eventDate",
    //   type: "array",
    //   of: [
    //     {
    //       title: "Lägg till bild",
    //       name: "image",
    //       type: "image",
    //     },
    //     {
    //       title: "Alt text till bild",
    //       name: "imageAlt",
    //       type: "string",
    //       validation: (Rule) =>
    //         Rule.error(
    //           "Du måste fylla i en alternativ text till bilden för tillgängligheten på hemsidan."
    //         ).required(),
    //       description:
    //         "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    //     },
    //   ],
    // },
    {
      title: "Bild",
      name: "image",
      type: "image",
      description: "Bild om oss",
    },
    {
      title: "Alt text till bild",
      name: "imageAlt",
      type: "string",
      validation: (Rule) =>
        Rule.error(
          "Du måste fylla i en alternativ text till bilden för tillgängligheten på hemsidan."
        ).required(),
      description:
        "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    },

    // {
    //   title: "Bild till desktop",
    //   name: "imageOneDesktop",
    //   type: "image",
    //   description: "Bild om oss",
    // },
    // {
    //   title: "Alt text till bild",
    //   name: "imageAltOneDesktop",
    //   type: "string",
    //   validation: (Rule) =>
    //     Rule.error(
    //       "Du måste fylla i en alternativ text till bilden för tillgängligheten på hemsidan."
    //     ).required(),
    //   description:
    //     "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    // },
    // {
    //   title: "Bild till desktop",
    //   name: "imageTwoDesktop",
    //   type: "image",
    //   description: "Bild om oss",
    // },
    // {
    //   title: "Alt text till bild",
    //   name: "imageAltTwoDesktop",
    //   type: "string",
    //   validation: (Rule) =>
    //     Rule.error(
    //       "Du måste fylla i en alternativ text till bilden för tillgängligheten på hemsidan."
    //     ).required(),
    //   description:
    //     "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    // },
    // {
    //   title: "Bild till desktop",
    //   name: "imageThreeDesktop",
    //   type: "image",
    //   description: "Bild om oss",
    // },
    // {
    //   title: "Alt text till bild",
    //   name: "imageAltThreeDesktop",
    //   type: "string",
    //   validation: (Rule) =>
    //     Rule.error(
    //       "Du måste fylla i en alternativ text till bilden för tillgängligheten på hemsidan."
    //     ).required(),
    //   description:
    //     "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    // },
    // {
    //   title: "Bild till desktop",
    //   name: "imageFourDesktop",
    //   type: "image",
    //   description: "Bild om oss",
    // },
    // {
    //   title: "Alt text till bild",
    //   name: "imageAltFourDesktop",
    //   type: "string",
    //   validation: (Rule) =>
    //     Rule.error(
    //       "Du måste fylla i en alternativ text till bilden för tillgängligheten på hemsidan."
    //     ).required(),
    //   description:
    //     "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    // },
    // {
    //   title: "Bild till desktop",
    //   name: "imageFiveDesktop",
    //   type: "image",
    //   description: "Bild om oss",
    // },
    // {
    //   title: "Alt text till bild",
    //   name: "imageAltFiveDesktop",
    //   type: "string",
    //   validation: (Rule) =>
    //     Rule.error(
    //       "Du måste fylla i en alternativ text till bilden för tillgängligheten på hemsidan."
    //     ).required(),
    //   description:
    //     "En kort beskrivning av bilden så att även den som inte kan se bilden får den väsentliga informationen från bilden.",
    // },
  ],
};
