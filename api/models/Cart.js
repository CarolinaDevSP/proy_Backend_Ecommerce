import mongoose from "mongoose";

const schemaCart = new mongoose.Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    articles:[
        {
            unidades: {
                type: Number,
                required: true,
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            }
        }
    ],
    total: {
        type: Number,
        required: true,
        default:0,
    },
    paymentDate: {
        type: Date,
        required: true,
        default: null,
    },


  });
  
  module.exports = mongoose.model("Cart", schemaCart)