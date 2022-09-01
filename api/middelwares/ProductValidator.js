import joi from "joi";

const createSchemaProduct = joi.object({
    name: joi.string().required(),
    description:joi.string().required() ,
    specification:joi.string().required() ,
    unit_price:joi.number().integer(),
    stock:joi.number().integer(),
    img: joi.string().required() ,
    category:joi.string().required() ,
    quantity_sold:joi.number().integer(),
    state: joi.boolean().required(),
    comment:joi.array().items(joi.string()),
})

export default async (req, res, next) => {
    try {
      console.log(req.body);
      await createSchemaProduct.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        msg: "There was an error  while trying to validate",
        error,
      });
    }
  };