import mongoose from "mongoose";

const schemaProduct = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    specification: {
        type: String,
        required: true,
    },
    unit_price: {
        type: Number,
        required: true,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    img: {
        name: {
            type:String,
            required:true
        },
        description:{
            type: String,
            required:false
        },
        url: {
            type: String,
            required:true
        },
    },
    category: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    quantity_sold: {
        type: Number,
        default: 0
    },
    state: {
        type: Boolean,
        default: true
    },
    comment: [
        {
            description: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                enums: [1, 2, 3, 4, 5],
                required: true,
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            fecha: {
                type: Date,
                required: true,
            },
        }
    ]
});


export default mongoose.model("Product", schemaProduct);
