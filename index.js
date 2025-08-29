
//Дропдаун меню
const shop = document.querySelectorAll('[data-shop]')
const shopDropdown = document.querySelector('[data-shop-dropdown]')

const collections = document.querySelectorAll('[data-collections]')
const collectionsDropdown = document.querySelector('[data-collections-dropdown]')


const more = document.querySelectorAll('[data-more]')
const moreDropdown = document.querySelector('[data-more-dropdown]')

shop.forEach((shop)=>{
    shop.addEventListener('click', ()=>{
        shopDropdown.classList.toggle('visible')
    })
})

collections.forEach((collections)=>{
    collections.addEventListener('click', ()=>{
        collectionsDropdown.classList.toggle('visible')
    })
})

more.forEach((more)=>{
    more.addEventListener('click', ()=>{
        moreDropdown.classList.toggle('visible')
    })
})
//Бургер меню

const burger = document.querySelector('.navigation__burger')
const mobileNav = document.querySelector('.mobile-nav')
const navButtons = document.querySelector('.navigation__buttons')

burger.addEventListener('click', ()=>{
    mobileNav.classList.toggle('visible')
    navButtons.classList.toggle('invisible')
})

//Поиск
const searchBtn = document.querySelector('.navigation__search-button')
const searchArea = document.querySelector('.search')

searchBtn.addEventListener('click', ()=>{
    searchArea.classList.toggle('visible')
})

searchArea.addEventListener('click', (e)=>{
    if (e.target === searchArea){
        searchArea.classList.toggle('visible')
    }

})

//Корзина
const cartBtn = document.querySelector('.navigation__cart-button')
const cart = document.querySelector('.cart')
const closeCartBtn = document.querySelector('[data-close-cart]')

cartBtn.addEventListener('click', ()=>{
    cart.classList.toggle('visible')
})

closeCartBtn.addEventListener('click', ()=>{
    cart.classList.toggle('visible')
})

cart.addEventListener('click', (e)=>{
    if (e.target === cart){
        cart.classList.toggle('visible')
    }
})