"use strict";

function enviarWhats(event: Event): void {
    event.preventDefault();

    const nomeInput = document.getElementById("nome") as HTMLInputElement | null;
    const mensagemInput = document.getElementById("mensagem") as HTMLInputElement | null;

    if (!nomeInput || !mensagemInput) {
        console.error("Campos não encontrados no DOM");
        return;
    }

    const nome: string = nomeInput.value;
    const mensagem: string = mensagemInput.value;

    const telefone: string = "5589994677751";
    const texto: string = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada: string = encodeURIComponent(texto);

    const url: string = `https://wa.me/${telefone}/?text=${msgFormatada}`;
    window.open(url, "_blank");
}
