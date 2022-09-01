import joi from "joi";

const createSchemaCategory = joi.object({
    name: joi.string().required(),
})

export default async (req, res, next) => {
    try {
      console.log(req.body);
      await createSchemaCategory.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        msg: "There was an error  while trying to validate",
        error,
      });
    }
  };