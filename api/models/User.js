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
        calle: {
            type: String,
            required: [true, 'El título es obligatorio'],
        },
        localidad: {
            type: String,
            required: [true, 'El comentario es obligatorio'],
        },
        nro_externo: {
            type: String,
            required: [true, 'El comentario es obligatorio'],
        },
        nro_interno: {
            type: String,
            required: [true, 'El comentario es obligatorio'],
        },
        entre_calles: {
            type: String,
            required: [true, 'El comentario es obligatorio'],
        },
        city: {
            type: String,
            required: [true, 'El comentario es obligatorio'],
        },
        country: {
            type: String,
            required: [true, 'El comentario es obligatorio'],
        },
        zip_code: {
            type: Number,
            required: [true, 'El rating es obligatorio'],
        },
        references: {
            type: String,
            required: [true, 'El comentario es obligatorio'],
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
  birthDate: Date,
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

