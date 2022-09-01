import joi from "joi";

const createSchemaCart = joi.object({
    idCar: joi.string().required(),
    idProduct: joi.string().required(),
    articles: joi.array().items(joi.string()),
    total:  joi.number().integer(),

})

export default async (req, res, next) => {
    try {
      console.log(req.body);
      await createSchemaCart.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        msg: "There was an error  while trying to validate",
        error,
      });
    }
  };