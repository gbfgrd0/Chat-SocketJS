const express = require('express');
const socketIo = require('socket.io');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(5000, ()=>{
    console.log("Servidor está rodando")
})

let mensagens = [];
const io = socketIo(server);

io.on('connection', (socket)=>{
    console.log("Nova conexão!")

    socket.on('new_message', (data)=>{
        mensagens.push(data)
    })

    io.emit('update_message', mensagens)
    console.log(mensagens)
});