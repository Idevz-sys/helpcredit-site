// Obtenha todos os links do menu
const menuLinks = document.querySelectorAll('.menu a');

// Função para atualizar a classe 'active' nos links
const updateActiveLink = () => {
    menuLinks.forEach(link => {
        const target = link.getAttribute('href');
        if (target === window.location.hash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Atualize os links quando a âncora da URL mudar
window.addEventListener('hashchange', updateActiveLink);

// Atualize os links no carregamento da página
window.addEventListener('load', updateActiveLink);