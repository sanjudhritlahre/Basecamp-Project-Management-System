import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required!")
      .isEmail()
      .withMessage("Email is Invalid!"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is also required!")
      .toLowerCase()
      .withMessage("Username must be in lowercase.")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters."),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is also required!"),
    body("fullName").optional().trim(),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").optional().isEmail().withMessage("Email is Invalid!"),
    body("password").notEmpty().withMessage("Password is required!"),
  ];
};

export { userRegisterValidator, userLoginValidator };
