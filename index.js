const express=require('express');
const app=express();

const server=require('http').Server(app);
const io=require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function(socket){
    console.log('nuevo cliente conectado');
    socket.emit('mensaje', 'Bienvenido');
})

setInterval(function(){
    io.emit('mensaje', 'hola les escribo a todos');
}, 3000)

server.listen(8080, function(){
    console.log('servidor iniciado en http://localhost:8080');
});