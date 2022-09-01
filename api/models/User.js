import mongoose from "mongoose";

const schemaUser = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: [
    {
        street: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        nro_ext: {
            type: String,
            required: true,
        },
        nro_int: {
            type: String,
        },
        between_streets: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        zip_code: {
            type: Number,
            required: true,
        },
        references: {
            type: String,
            required: true,
        },
    }
],
  role: {
    type: String,
    enum: ['Administrator', 'Seller', 'Client'],
    default: 'Administrator',
    required: true,

  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerificate: {
    type:Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("User", schemaUser);

