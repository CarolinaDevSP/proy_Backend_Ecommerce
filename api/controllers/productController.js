import Product from '../models/Product.js';

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    return res.json({
      //status code 200
      msg: 'Producto creado',
      data: {
        product: newProduct,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear Producto',
      error,
    });
  }
};

const getAllProducts = async (_, res) => {
  try {
    const products = await Product.find();
    return res.json({
      msg: 'Productos encontrados',
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar Productos',
      error,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);

    /*
    if(!product){
      return res.status(400).json({
        msg: 'no existe el producto'
      })
    }
    */

    return res.json({
      msg: 'Producto encontrado',
      data: {
        product,
      },
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar Producto por id',
      error,
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(
      id, req.body,
      {
        new: true,
      }
    );

    return res.json({
      msg: 'Producto actualizado por id',
      data: {
        product: updatedProduct
      }
    })
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar',
      error
    })
  }
};


const deleteProductById = async(req, res) => {
  try {
    const id= req.params.id;
    await Product.findByIdAndDelete(id);
    return res.json({
      msg: 'mensaje eliminado'
    })
  } catch (error) {
    return res.status (500).json({
      msg: 'error al borrar Producto por id',
      error,
    })
    
  }
};

export { getAllProducts, createProduct, getProductById, updateProductById, deleteProductById };