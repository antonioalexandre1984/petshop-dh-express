// ...rest of the initial code omitted for simplicity.
const { body } = require('express-validator');


const userValidator = [
    body("name")
        .notEmpty().withMessage('Deve preencher o nome').bail()
        .isLength({ min: 3, max: 200 }).withMessage('Deve preencher o nome com no mínimo 3 caracteres'),
    
          body("email")
          .notEmpty().withMessage('Deve preencher o email').bail()
          .isEmail().withMessage('Insira um e-mail válido'),
   
            body("password")
            .notEmpty().withMessage('Deve preencher a senha').bail()
            .isLength({ min: 3 }).withMessage('A senha deve ter no mínimo 3 caracteres'),
              
              body('password_Confirmation').custom((value, { req }) => {
              if (value !== req.body.password) {
               throw new Error('Password confirmation does not match password');
    }
    // Indicates the success of this synchronous custom validator
    return true;
  }),
]



module.exports = userValidator;