// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');


const userValidator = [
    body("name")
        .notEmpty().withMessage('Deve preencher o nome').bail()
        .isLength({ min: 3, max: 200 }).withMessage('Deve preencher a senha')
   
]



module.exports = userValidator;



/* app.post(
  '/user',
  // username must be an email
  body('username').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      username: req.body.username,
      password: req.body.password,
    }).then(user => res.json(user));
  },
); */