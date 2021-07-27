const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = require('./api/router')
const errorHandler = require('./api/middleware/errorHandler');
const morgan = require('morgan');
require('dotenv').config();



app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if(req.method === 'OPTIONS'){
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE');
      return res.status(200).json({});
  }
  next();
});

app.use(router);

app.use(errorHandler);

//Iniciando o Servidor (Aplicação):
//==============================================================
module.exports = app.listen(3003, () => {
  console.log('Iniciando Payment Service na porta: 8001');
})