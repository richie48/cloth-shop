const express =require('express');
const dotenv=require('dotenv')
const morgan=require('morgan')

const productRoute = require('./routes/product')
const userRoute = require('./routes/user')

const errorHandler=require('./middlewares/errorHandler')
const connectDb=require('./config/db')


dotenv.config({ path: './config/config.env' });

connectDb()

const app= express();

//body parser
app.use(express.json());

server=app.listen(5000, console.log(`server is running on port ${process.env.NODE_ENV}`));

//used a 3rd party middleware.
if (process.env.NODE_ENV==='development'){
  // app.use(morgan('dev'))
  app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }))
}

//Handling promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`error:${err.message}`);
    server.close(() => process.exit(1));
  });

//mount a route
app.use('/api/v1/products',productRoute);
app.use('/api/v1/users',userRoute)

//has to come after the mounting of my routes.
app.use(errorHandler)
