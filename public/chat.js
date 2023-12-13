const socket = io('http://localhost:5000')
var usuario = null;

socket.on('update_message', (mensagens)=>{
    atualizarMensagens(mensagens)
})

function atualizarMensagens(mensagens){
    const div_mensagens = document.querySelector("#mensagens");

    let lista_msg = '<ul>'
    mensagens.forEach((mensagem)=>{
        lista_msg += `<li>${mensagem.user}: ${mensagem.msg}</li>`
    })
    lista_msg += '</ul>'

    div_mensagens.innerHTML = lista_msg
}

function enviarMensagem(){
    const textoMsg = document.querySelector('#Texto')
    usuario =  document.querySelector('#User').value

    if(!usuario){
        alert('Escreva o nome do usuário!')
        return
    }else{
    let MensagemData = textoMsg.value
    User.parentNode.removeChild(User)
    socket.emit('new_message', {user: usuario, msg: MensagemData})
    }

}