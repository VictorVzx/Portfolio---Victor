"use strict";

// Função de Envio do WhatsApp (Sua função original)
function enviarWhats(event: Event): void {
    event.preventDefault();

    const nomeInput = document.getElementById("nome") as HTMLInputElement | null;
    const mensagemInput = document.getElementById("mensagem") as HTMLTextAreaElement | null; // Alterado para TextArea pois reflete seu HTML

    if (!nomeInput || !mensagemInput) {
        console.error("Campos não encontrados no DOM");
        return;
    }

    const nome: string = nomeInput.value.trim();
    const mensagem: string = mensagemInput.value.trim();

    const telefone: string = "5589994677751";
    const texto: string = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada: string = encodeURIComponent(texto);

    const url: string = `https://wa.me/${telefone}/?text=${msgFormatada}`;
    window.open(url, "_blank");
}


// --- Lógica da Sidebar ---
const menuToggle = document.getElementById('mobile-menu');
const menuList = document.getElementById('menu-list');
const menuLinks = document.querySelectorAll('.menu-link');

// Abre e fecha o menu
const toggleMenu = () => {
    menuToggle?.classList.toggle('is-active');
    menuList?.classList.toggle('active');
};

menuToggle?.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em qualquer link (Início, Sobre, etc)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuList?.classList.contains('active')) {
            toggleMenu();
        }
    });
});