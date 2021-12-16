const express =require('express');
const dotenv=require('dotenv')

const productRoute = require('./routes/product')
const userRoute = require('./routes/user')
dotenv.config({ path: './config/config.env' });

const connectDb=require('./config/db')

connectDb()

const app= express();

app.use(express.json());

server=app.listen(5000, console.log(`server is running on port ${process.env.NODE_ENV}`));

//Handling promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`error:${err.message}`);
    server.close(() => process.exit(1));
  });

//mount a route
app.use('/api/v1/products',productRoute);
app.use('/api/v1/users',userRoute)

