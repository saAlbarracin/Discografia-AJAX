const express = require('express');
const router = express.Router();

// importar el controlador

const discografia = require('../controllers/discografia');



module.exports = function() {
    
    router.get('/', discografia.discografiaHome);
    
    // Ruta para los discos
    router.get('/discos', discografia.busquedaDiscos);
    return router;
}

