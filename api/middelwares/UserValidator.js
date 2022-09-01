import joi from "joi"

let options = ['Administrator', 'Seller', 'Client'];
const createUserSchema = joi.object({
  name: joi.string().required(),
  lastName: joi.string().required(),
  phone: joi.string().required(),
  address: joi.array().items(joi.object({
    
  })),
  role: joi.string().valid(...options).default('Administrator').required(),
  email: joi.string().required(),
  password: joi.string().required().min(8).$_match(/[!@#$%^&*(),.?":{}|<>]/),
  //password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  isActive: joi.boolean().default(true).required()
})

export default async (req, res, next) => {
  try {
    await createUserSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validacion',
      error
    })
  }

}