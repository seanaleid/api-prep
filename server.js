const express = require('express')
const helmet = require('helmet')
const morgan=require('morgan')
const cors =require('cors')

const server=express();
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

const charactersRouter = require('./routers/charactersRouter')
const showsRouter = require('./routers/showsRouter');

server.get('/', (req,res)=> {
    res.send('Testing');

})

server.use('/api/shows', showsRouter)
server.use('/api/characters', charactersRouter)


module.exports=server;


