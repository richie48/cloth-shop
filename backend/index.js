const express =require('express');
const dotenv=require('dotenv')
dotenv.config({ path: './config/config.env' });

const connectDb=require('./config/db')

connectDb()


const app= express();

app.listen(5050, console.log(`server is running ${process.env.NODE_ENV}`));