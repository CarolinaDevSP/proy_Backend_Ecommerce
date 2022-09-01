import bcrypt from 'bcrypt'
import User from '../models/User.js';
import jwt from 'jwt-simple'
import config from '../config/index.js';

const register = async(req,res) =>{
 try {
    /**
     * hacer midd de validacion
     * encriptamos el pss
     * guardar usuario nuevo con pass encriptado
     */
    const encryptedPass = await bcrypt.hash(req.body.password, 4)
    req.body.password = encryptedPass;
    const user = await User.create(req.body);
    user.password = undefined;
    return res.json({
        msg: 'usuario creado',
        data: { user },

    })

 } catch (error) {
    if(error.code === 11000){
        return res.staus(400),json({
            msg:'ya existe un usuario registrado con ese correo'
        })
        
    }
    return res.status(500).json({
        msg:'ocurrio un error al registrar usuarios',
        error
    })
 }
}

const login = async (req, res) => {
    /**
     * 1.- Validar que venga pass y correo CON UN MIDD✅
     * 2.- Buscar un usuario con ese correo ✅
     * 3.- COMPARAR contraseñas con bcrypt ✅
     * 4.- Si todo coincide crear token y regresarlo
     * 5.- si no coincide regresar un 401 ✅
     */
    try {
      const user = await User.findOne({
        email: req.body.email,
      });
  
      if (!user) {
        return res.status(404).json({
          msg: 'Usuario no encontrado',
        });
      }
  
      const passCorrect = await bcrypt.compare(req.body.password, user.password);
      if (!passCorrect) {
        return res.status(401).json({
          msg: 'Credenciales inválidas',
        });
      }
//TODO: crear token y regresarlo

const expirationDate = new Date();
expirationDate.setMinutes(expirationDate.getMinutes() + 3);

const payload = {
  userId: user.id,
  expirationDate,
};

const token = jwt.encode(payload, config.jwt.secret);

return res.json({
  msg: 'Login correcto',
  data: { token },
});
} catch (error) {
return res.status(500).json({
  msg: 'Error al hacer login',
});
}
};
  
  export { login, register };