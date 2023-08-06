const express = require('express');
const morgan = require('morgan');
const server = express();
const productRouter = require('./routes/product');
const mongoose = require('mongoose');
const {Schema} = mongoose;
const cors = require('cors')

server.use(cors())
//db connection

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mobikart');
    console.log('db connected');
}



//middlewares
server.use(express.json());
server.use(morgan('default'));
server.use('/api',productRouter.router)





server.listen(8000,()=>{
    console.log('server started');
});
