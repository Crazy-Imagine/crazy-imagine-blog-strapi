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
          text: `Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone},
          Address: ${data.address}, City: ${data.city}, State: ${data.state},
          Zip: ${data.zip}
          ${data.website ? `Website: ${data.website}` : ""}
          ${result.curriculum[0]?.url ? `PDF: ${result.curriculum[0].url}` : ""}
           `,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
