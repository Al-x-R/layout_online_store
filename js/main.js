$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnPrev">' +
            '<img src="images/left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnNext">' +
            '<img src="images/right.svg" alt=""></button>'
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

    })

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active')
    })

    $('.product-slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnPrev">' +
            '<img src="images/left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnNext">' +
            '<img src="images/right-black.svg" alt=""></button>'
    })
});

// const tabNav = document.querySelectorAll('.search__tabs-item')
// const tabContent = document.querySelectorAll('.search__content-item')
//
// tabNav.forEach(item => {
//     item.addEventListener('click', selectTab)
// })
//
// function selectTab() {
//     let tabName;
//     tabNav.forEach(item => {
//         item.classList.remove('tabs-content--active')
//     })
//     this.classList.add('tabs-content--active')
//     tabName = this.getAttribute('href')
//     selectTabContent(tabName)
// }
//
// function selectTabContent(tabName) {
//     tabContent.forEach(item => {
//         item.classList.contains(tabName) ?
//             item.classList.add('tabs-content--active') :
//             item.classList.remove('tabs-content--active')
//     })
// }

