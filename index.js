const server=require('./server')
const PORT = 8000;

server.listen(PORT, () =>{
    console.log(`\n** Server is listening on ${PORT} ***\n`);
});