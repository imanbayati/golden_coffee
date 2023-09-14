const $ = document
const html = $.querySelector('html')
const darkIcon = $.querySelector('#dark-icon')
const changeThemeMobile = $.querySelector('#change-theme-mobile')
const moonBtnMobile = $.querySelector('#moon-icon-mobile')
const sunBtnMobile = $.querySelector('#sun-icon-mobile')
const toggleMenuIcon = $.querySelector('#toggle-menu-icon')
const bodyOverlay = $.querySelector('.body-overlay')
const closeBtn = $.querySelector('#close-btn')
const menuBox = $.querySelector('#menu-box')
const body = $.querySelector('body')
const logoTopMobile = $.querySelector('#logo-top-mobile')
const shoppingIconMobile = $.querySelector('#shopping-icon-mobile')
const closeShoppingPageIcon = $.querySelector('#close-shopping-page-icon')
const shoppingPage = $.querySelector('#shopping-page')
const mainSubMenu = $.querySelector('#main-sub-menu')
const subMenu = $.querySelector('#sub-menu')





toggleMenuIcon.addEventListener('click', () => {
    menuBox.style.right = '0'
    logoTopMobile.style.display = 'none'
    bodyOverlay.classList.replace('hide' , 'show')
})

mainSubMenu.addEventListener('click' , () =>{
    if(subMenu.className.includes('hidden')){
        subMenu.classList.add('block')
        subMenu.classList.remove('hidden')

    }else{
        subMenu.classList.add('hidden')
        subMenu.classList.remove('block')
  
    }
})

closeBtn.addEventListener('click' , () => {
    menuBox.style.right = '-256px'
    logoTopMobile.style.display = 'inline-block'
    bodyOverlay.classList.replace('show' , 'hide')

})

shoppingIconMobile.addEventListener('click' , () => {
    shoppingPage.classList.replace('-left-64' , 'left-0')
    logoTopMobile.style.display = 'none'
    bodyOverlay.classList.replace('hide' , 'show')

})

closeShoppingPageIcon.addEventListener('click' , () => {
    shoppingPage.classList.replace('left-0' , '-left-64')
    logoTopMobile.style.display = 'inline-block'
    bodyOverlay.classList.replace('show' , 'hide')

})













darkIcon.addEventListener('click' , () => {
    html.classList.toggle('dark')
    if(html.className.includes('dark')){
        localStorage.setItem('theme' , 'dark')
        }else{
        localStorage.setItem('theme' , 'light')
        }
})

changeThemeMobile.addEventListener('click' , () => {
    if (html.className.includes('dark')){
        html.classList.remove('dark')
        localStorage.setItem('theme' , 'light')
    }else{
        html.classList.add('dark')
        localStorage.setItem('theme' , 'dark')
    }
})


window.addEventListener('load' , () => {
    if(localStorage.getItem('theme') === 'dark'){
        html.classList.add('dark')
    }else{
        html.classList.remove('dark')
    }
  })


  const swiper = new Swiper('.swiper', {

    autoplay: {
        delay: 3000,
      },

    navigation: {
          nextEl: ".swiper-button-next-custome",
          prevEl: ".swiper-button-prev-custome",
        },
        
    breakpoints: {
          300: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
  });
