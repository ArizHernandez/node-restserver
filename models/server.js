require('dotenv').config();

const express = require('express');
const cors = require('cors');

class Server{

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/users'; 

    //Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares(){
    
    // CORS
    this.app.use( cors() );

    // Lectura y parceo de middleware
    this.app.use( express.json() );

    // Direcctorio público
    this.app.use( express.static('public') );

  }

  routes(){

    this.app.use( this.usuariosPath, require('../routes/user.routes') );

  }

  listen(){
    this.app.listen( this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`);
    });
  }

}

module.exports = Server;