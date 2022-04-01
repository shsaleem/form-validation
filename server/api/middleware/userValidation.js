import { check, validationResult } from "express-validator";

const validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()[0].msg,
    });
  }
  next();
};

const userValidation = [
  check("name")
    .matches(/^[a-zA-Z][A-Za-z0-9_@./#&+-]{3,15}$/)
    .withMessage(
      "Name should between 2 to 16 characters and should start with alphabet"
    ),
  check("surname")
    .matches(/^[a-zA-Z][A-Za-z0-9_@./#&+-]{3,15}$/)
    .withMessage(
      "Surname should between 2 to 16 characters and should start with alphabet"
    ),
  check("email").isEmail().withMessage("Email is not valid"),
  check("confirmEmail")
    .isEmail()
    .custom((value, { req }) => {
      if (value !== req.body.email) {
        throw new Error("Emails does not match");
      }
      return true;
    }),
  check("passport")
    .isAlphanumeric()
    .withMessage("Passport number should be alphanumeric"),
  check("password")
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    })
    .withMessage(
      "Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  check("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password does not match.");
    }
    return true;
  }),
];

export { userValidation, validation };
