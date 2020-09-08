// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Object types
import schedule from "./objects/schedule";
import bio from "./objects/bioPortableText";

// Document types
import menu from "./menu";
import openingHours from "./openingHours";
import findUs from "./findUs";
import event from "./event";
import eventInformation from "./eventInformation";
import footer from "./footer";
import about from "./about";
import frontPage from "./frontPage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* objects */
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    schedule,
    bio,

    /* Your types here! */
    frontPage,
    menu,
    about,
    openingHours,
    findUs,
    event,
    eventInformation,
    footer,
  ]),
});
