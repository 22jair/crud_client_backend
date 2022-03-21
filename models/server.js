const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{

  constructor(){
    this.app = express();
    this.port = process.env.PORT || 5000;
   
    // Connection to DB
    this.connectDb();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  async connectDb(){
    await dbConnection();
  }

  middlewares(){
    // CORS
    this.app.use( cors() );    
    this.app.use( express.json() );
  }

  routes(){    
    // PATH
    const client = '/api/client';

    // ROUTES
    this.app.use( client , require('../routes/client'));
  }

  listen(){    
    this.app.listen(this.port, () => {
      console.log('Server on port', this.port);
    })
  }

}

module.exports = Server;