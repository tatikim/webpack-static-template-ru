import '../scss/style.scss'

console.log('It works!')

const openBtn = document.querySelector('.burger')
const aside = document.querySelector('.aside__menu')
const closeBtn = document.querySelector('.header__left')
 

if (openBtn && aside) {
  openBtn.addEventListener('click', () => {
    aside.classList.add('aside__menu--active')
  })
}

if (closeBtn && aside) {
  closeBtn.addEventListener('click', () => {
    aside.classList.remove('aside__menu--active')
  })
}

let swipers = []

function initSwipers() {
  if (window.innerWidth <= 767) {
    if (swipers.length === 0) {
      document.querySelectorAll('.swiper').forEach((el) => {
        const instance = new Swiper(el, {
          slidesPerView: 'auto',
          spaceBetween: 16,
          touchEventsTarget: 'wrapper',
          pagination: {
            el: el.querySelector('.swiper-pagination'),
            clickable: true
          }
        })
        swipers.push(instance)
      })
    }
  } else {
    swipers.forEach((swiper) => swiper.destroy(true, true))
    swipers = []
  }
}

initSwipers()
window.addEventListener('resize', initSwipers)

// показать все
function init() {
document.querySelectorAll('.toggle-block').forEach(block => {
  const showBtn = block.querySelector('.showBtn');
  const hideBtn = block.querySelector('.hideBtn');
  const items = block.querySelectorAll('.text-open');

  showBtn.addEventListener('click', () => {
    items.forEach(el => el.classList.add('show-all'));

    showBtn.classList.add('hidden');
    hideBtn.classList.remove('hidden');
  });

  hideBtn.addEventListener('click', () => {
    items.forEach(el => el.classList.remove('show-all'));

    hideBtn.classList.add('hidden');
    showBtn.classList.remove('hidden');
  });
});
}

document.addEventListener('DOMContentLoaded', init);