import mongoose from "mongoose";

const schemaOrder = new mongoose.Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    idCart: {
        type: Schema.Types.ObjectId,
        ref: "Cart",
        required: true,
    },
    name: String,
    price: Number,
    quantity: Number,
    status: {
        type: String,
        default: "Not Processed",
        enum: ["Not Processed", "Processing", "Shipped", "Delivered", "Cancelled"]
      },
    fecha: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    metodoPago: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }


 })
    
    module.exports = mongoose.model("Orden de Compra", schemaOrder)