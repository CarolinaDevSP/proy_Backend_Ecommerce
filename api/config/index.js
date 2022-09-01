import dotenv from 'dotenv';

dotenv.config();

export default {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    uri: process.env.URI || 'mongodb://localhost/ecommerce',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  }
};
