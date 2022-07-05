"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      try {
        await strapi.plugins["email"].services.email.send({
          to: "support@crazyimagine.com",
          from: "support@crazyimagine.com",
          subject: "You have a new postulation!",
          text: `Name: ${data.firstName} ${data.lastName}
          Email: ${data.email},
          Phone: ${data.phone},
          ${data.linkedin ? `Linkedin: ${data.linkedin}` : ""},
          ${data.website ? `Website: ${data.website}` : ""}
          ${result.curriculum[0]?.url ? `PDF: ${result.curriculum[0].url}` : ""}
          How did you hear about Crazy Imagine?
          ${data.reference}
           `,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
