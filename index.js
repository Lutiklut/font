const linkLangs = document.querySelectorAll('.lang');
linkLangs.forEach(linkLang => {
    linkLang.addEventListener('click', () => {
        leaveActive(linkLangs, 'lang--active')
        linkLang.classList.add('lang--active');
    })
});

function leaveActive(arr, act) {
    arr.forEach(elem => {
        elem.classList.remove(act)
    })
}
const btns = document.querySelectorAll('.next__btn--hidden');
const btnSvgs = document.querySelectorAll('.arrow');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        leaveActive(btnSvgs, 'arrow--active')
        btn.querySelector(".arrow").classList.add('arrow--active');
    })
});

const rowBtns = document.querySelectorAll('.next__btn--style');
rowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        leaveActive(rowBtns, 'next__btn--active')
        btn.classList.add('next__btn--active');
    })
});

window.onscroll = function () { scrollFunction() };
let links = Array.from(document.querySelector('.header__wrapper').getElementsByTagName("a"));
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        if (window.innerWidth <= 1024) {
            document.querySelector('.header__wrapper').style.background = "black";
            links.forEach(link => { link.style.color = '#2d2d42' })

        }
        else {
            document.querySelector('.header__wrapper').style.background = "white";
            // document.querySelector('.header__wrapper').querySelector(".lang--active").style.borderColor = "#2d2d42"
            links.forEach(link => { link.style.color = 'black' })
            console.log(links)
        }
    } else {

        document.querySelector('.header__wrapper').style.background = "transparent";
        if (window.innerWidth >= 1024) {
            links.forEach(link => { link.style.color = '#f4f4f7' })
            // document.querySelector('.header__wrapper').querySelector(".lang--active").style.borderColor = "#f4f4f7"
            // document.querySelector('.header__wrapper').querySelector(".lang").style.borderColor = "transparent"
        }
    }
}

const openBurger = document.querySelector('.opacity');
const burgerBtn = document.querySelector('.burger__btn')
burgerBtn.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    const openTrue = document.querySelector('.burger__btn.active')
    if (openTrue) {
        openBurger.classList.add('open-burger');
    }
    else {
        openBurger.classList.remove('open-burger')
    }
})

const burgerMenu = document.querySelector('.burger__menu__link');
const burgerLink = burgerMenu.querySelectorAll('.link');
burgerLink.forEach(link => {
    link.addEventListener('click', (e) => {
        leaveActive(burgerLink, 'link--active')
        link.classList.add('link--active');

    })
})



