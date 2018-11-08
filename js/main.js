$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


var sp = document.querySelector('.search-open');
            var searchbar = document.querySelector('.search-inline');
            var shclose = document.querySelector('.search-close');
            function changeClass() {
                searchbar.classList.add('search-visible');
            }
            function closesearch() {
                searchbar.classList.remove('search-visible');
            }
            sp.addEventListener('click', changeClass);
            shclose.addEventListener('click', closesearch);