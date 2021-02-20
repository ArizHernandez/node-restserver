const { response, request } = require('express');

const usuariosGet =  ( req = request, res = response ) => {

  const { q, nombre = 'no name', apiKey, page = 1, limit } = req.query;

  res.json({
    message: 'get API',
    q,
    nombre,
    apiKey,
    page,
    limit
  });

}

const usuariosPost = ( req, res = response ) => {

  const { nombre, edad } = req.body;

  res.status(201).json({
    message: 'post API',
    nombre,
    edad
  });
  
}

const usuariosPut = ( req, res = response ) => {

  const { id } = req.params;

  res.status(400).json({
    message: 'put API',
    id
  });

}


const usuariosDelete = ( req, res = response ) => {
  res.json({
    message: 'delete API'
  });
}

const usuariosPatch = ( req, res = response ) => {
  res.json({
    message: 'patch API'
  });
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch
}