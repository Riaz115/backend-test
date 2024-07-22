//yeah ish main hum ny 2 arrow function ish liye bnaye hain k hum phly main schema get kr lain controllers wali file main
//we wala jo hum ny idhr hi isi middle ware waly folder k andr bnaya hai zod ki help sy phr hum isy req.body ki help sy
//parseAsync bna lain gy aur req.body ko ish k equal kr k next kr dain gy aur apna error check kr lain gy let see

// requirng
const CheckContactValidation = (schema) => async (req, res, next) => {
  try {
    const myFinalData = await schema.parseAsync(req.body);
    req.body = myFinalData;
    console.log(myFinalData);
    next();
  } catch (err) {
    console.log(err);
    const myError = err.errors[0].message;
    res.status(500).json({ msg: myError });
  }
};

//exporting
module.exports = CheckContactValidation;
