const express =require('express');
const dotenv=require('dotenv')

const productRoute = require('./routes/product')
dotenv.config({ path: './config/config.env' });

const connectDb=require('./config/db')

connectDb()

const app= express();

app.use(express.json());

app.listen(5050, console.log(`server is running ${process.env.NODE_ENV}`));

//mount a route
app.use('api/v1/products',productRoute);
