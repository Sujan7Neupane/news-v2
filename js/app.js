const ham = document.querySelector('#bar');
const menu = document.querySelector('#slide-menu');
const layer = document.querySelector('#layer');
const smenu = document.querySelector('#menu');
const larrow = document.querySelector('#left-arrow');
const searchBtn = document.querySelector('#search');
const search = document.querySelector('#search-wrap');
const updateCloseBtn = document.querySelector('#updateClose');
const update = document.querySelector('#update');
const navUpdateBtn = document.querySelector('#navUpdateBtn');
const trendingClose = document.querySelector('#trendingClose');
const trendingHidden = document.querySelector('#trendingHidden');
const navTrendingBtn = document.querySelector('#navTrendingBtn');

// Slide Menu
ham.addEventListener('click', () => {
  menu.classList.add('slide-show');
  smenu.classList.add('menu-show');
})
layer.addEventListener('click', () => {
  menu.classList.remove('slide-show');
  smenu.classList.remove('menu-show');
})
larrow.addEventListener('click', () => {
  menu.classList.remove('slide-show');
  smenu.classList.remove('menu-show');
})

// Search Bar
searchBtn.addEventListener('click', () => {
  search.classList.toggle('search-show')

  if (update.classList.contains('update-show'))
    update.classList.remove('update-show')

  if (trendingHidden.classList.contains('trending-show'))
    trendingHidden.classList.remove('trending-show')

})

//Update bar
navUpdateBtn.addEventListener('click', () => {
  update.classList.toggle('update-show')

  if (search.classList.contains('search-show'))
    search.classList.remove('search-show')


  if (trendingHidden.classList.contains('trending-show'))
    trendingHidden.classList.remove('trending-show')
})

updateCloseBtn.addEventListener('click', () => {
  update.classList.remove('update-show')
})
//Trending Bar
navTrendingBtn.addEventListener('click', () => {
  trendingHidden.classList.toggle('trending-show')

  if (search.classList.contains('search-show'))
    search.classList.remove('search-show')

  if (update.classList.contains('update-show'))
    update.classList.remove('update-show')
})

trendingClose.addEventListener('click', () => {
  trendingHidden.classList.remove('trending-show')
})

$(document).ready(function () {
  $(".owl-carousel").owlCarousel(
    {
      loop: true,
      margin: 20,
      items: 4,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 2,
        },
        991: {
          items: 4,
        }

      }
    }
  );
});

// Dark Mode 
const themeBtn = document.querySelector('#theme');
const root = document.querySelector(':root');
let theme = root.getAttribute('color-scheme');
localStorage.getItem('theme') ? root.setAttribute('color-scheme', $(localStorage.getItem('theme'))) : null;
root.setAttribute('color-scheme', localStorage.getItem('theme'))
if (theme == 'dark')
  themeBtn.innerHTML = `<i class='fas fa-sun'></i>`
else
  themeBtn.innerHTML = `<i class='fas fa-moon'></i>`

themeBtn.addEventListener('click', () => {
  let theme = root.getAttribute('color-scheme');
  if (theme == 'dark') {
    root.setAttribute('color-scheme', 'light')
    themeBtn.innerHTML = `<i class='fas fa-moon'></i>`
    localStorage.setItem('theme', 'light')
  }
  else {
    root.setAttribute('color-scheme', 'dark')
    localStorage.setItem('theme', 'dark')
    themeBtn.innerHTML = `<i class='fas fa-sun'></i>`
  }
  setTimeout(
    ()=> {
      
      themeBtn.parentElement.classList.add('theme-animation')
    },50
  )
      themeBtn.parentElement.classList.remove('theme-animation')
    

})
