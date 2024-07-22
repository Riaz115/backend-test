//requiring
const { z } = require("zod");

//craating
const User = z.object({
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
  phone: z
    .string()
    .min(11, { myError: "name should be minimum eleven letters" })
    .max(255, { myError: "name shuould be less than 255 letters" })
    .trim(),
  password: z
    .string()
    .min(6, { myError: "name should be minimum six letters" })
    .max(255, { myError: "name shuould be less than 255 letters" })
    .trim(),
});

//exporting
module.exports = User;
