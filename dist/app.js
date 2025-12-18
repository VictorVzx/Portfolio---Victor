"use strict";
function enviarWhats(event) {
    event.preventDefault();
    const nomeInput = document.getElementById("nome");
    const mensagemInput = document.getElementById("mensagem");
    if (!nomeInput || !mensagemInput) {
        console.error("Campos não encontrados no DOM");
        return;
    }
    const nome = nomeInput.value;
    const mensagem = mensagemInput.value;
    const telefone = "5589994677751";
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;
    window.open(url, "_blank");
}
