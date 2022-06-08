
//----------------------------------------- MENU DE NAVEGAÇÃO -----------------------------------------//
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu); // referenciando o botão do menu //
        this.navList = document.querySelector(navList); // referenciando a lista de itens //
        this.navLinks = document.querySelectorAll(navLinks);  // referenciando os links da lista //
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);  // referenciando a classe para abrir a tela de opções do menu //
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => { // anima os links individualmente //
            link.style.animation 
                ? (link.style.animation = "")  // retira a animação do estilo do link caso exista //
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`); // cria a animação de estilo do link //
        });
    }

    handleClick() { // fazendo this se referenciar a classe //
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick); // adiciona um evento de clique no botão do menu //
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent(); // executa caso exista no documento //
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar( // variavel da barra de navegação //
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

//----------------------------------------- MENU DE NAVEGAÇÃO -----------------------------------------//


