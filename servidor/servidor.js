const express = require ('express');
const http =  require ('http');
const app = express();
const servidor = http.createServer(app);

const socketio = require ('socket.io');
const io = socketio(servidor);

io.on('connection', socket =>{
    socket.on('conect',()=>{
        console.log("usuario conectado")
    });

    socket.on('mensaje',(nombre, mensaje)=>{
        io.emit('mensajes',{nombre,mensaje})
    });

    socket.on('desconect',()=>{
        io.emit('mensajes', {servidor:'servidor', mensaje: "usuario ha abandonado el chat"})
    })
} )


servidor.listen(3000, ()=> console.log("servidor en puerto 3000"));