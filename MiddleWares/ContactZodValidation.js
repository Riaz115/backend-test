//requiring
const { z } = require("zod");

//craating
const Contact = z.object({
  name: z
    .string()
    .min(3, { myError: "name should be minimum three letters" })
    .max(255, { myError: "name shuould be less than 255 letters" })
    .trim(),
  email: z
    .string()
    .min(3, { myError: "name should be minimum three letters" })
    .email({ myError: "invalid email please enter valid email" })
    .max(255, { myError: "name shuould be less than 255 letters" })
    .trim(),
  msg: z.string().trim(),
});

//exporting
module.exports = Contact;
