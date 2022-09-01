import joi from "joi";

const createSchemaOrder = joi.object({
    idUser: joi.string().required(),
    idCar: joi.string().required(),
    name: joi.string().required(),
    price:  joi.number().integer(),
    quantity: joi.number().integer(),
    status:joi.string().required(),
    fecha: joi.date(),
    user: joi.string().required(),
    metodoPago: joi.string().required(),
    total: joi.number().integer(),
})
 
export default async (req, res, next) => {
    try {
      console.log(req.body);
      await createSchemaOrder.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        msg: "There was an error  while trying to validate",
        error,
      });
    }
  };