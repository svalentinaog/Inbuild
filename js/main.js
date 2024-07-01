// Buscador

const searchForm = document.getElementById('search-form');
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    searchForm.classList.toggle('expanded');
    searchForm.classList.toggle('collapsed');

    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
    }
});

searchInput.addEventListener('input', () => {
    console.log(searchInput.value);
});


// Ir arriba

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    const handleScroll = () => {
        if (window.scrollY > 100) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    scrollToTopButton.addEventListener('click', scrollToTop);
});


// Menu de navegacion

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
});
