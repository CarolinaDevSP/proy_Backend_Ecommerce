import mongoose from "mongoose";

const schemaCategory = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    }
  });
  
  module.exports = mongoose.model("Category", schemaCategory)