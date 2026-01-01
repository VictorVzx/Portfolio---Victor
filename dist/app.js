"use strict";
// Função de Envio do WhatsApp (Sua função original)
function enviarWhats(event) {
    event.preventDefault();
    const nomeInput = document.getElementById("nome");
    const mensagemInput = document.getElementById("mensagem"); // Alterado para TextArea pois reflete seu HTML
    if (!nomeInput || !mensagemInput) {
        console.error("Campos não encontrados no DOM");
        return;
    }
    const nome = nomeInput.value.trim();
    const mensagem = mensagemInput.value.trim();
    const telefone = "5589994677751";
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}/?text=${msgFormatada}`;
    window.open(url, "_blank");
}
// --- Lógica da Sidebar ---
const menuToggle = document.getElementById('mobile-menu');
const menuList = document.getElementById('menu-list');
const menuLinks = document.querySelectorAll('.menu-link');
// Abre e fecha o menu
const toggleMenu = () => {
    menuToggle === null || menuToggle === void 0 ? void 0 : menuToggle.classList.toggle('is-active');
    menuList === null || menuList === void 0 ? void 0 : menuList.classList.toggle('active');
};
menuToggle === null || menuToggle === void 0 ? void 0 : menuToggle.addEventListener('click', toggleMenu);
// Fecha o menu ao clicar em qualquer link (Início, Sobre, etc)
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuList === null || menuList === void 0 ? void 0 : menuList.classList.contains('active')) {
            toggleMenu();
        }
    });
});
