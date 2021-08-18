
// open menu
const header = document.querySelector('.header'),
      burger = document.getElementById('burger'),
      menu = document.getElementById('menu'),
      burgerClose = document.getElementById('burger_close'),
      body = document.getElementsByTagName('body')[0];
burger.addEventListener('click', () => {
    menu.classList.add('active');
    body.style.overflow = 'hidden';
});
burgerClose.addEventListener('click', () => {
    menu.classList.remove('active');
    body.style = '';
});


document.addEventListener('DOMContentLoaded', () => {
    // aos
    AOS.init();
});

let scroll = 200;
window.addEventListener('scroll', () => {
    currentScroll = window.scrollY;
    if (currentScroll > scroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    scroll = currentScroll;
});


// slider Partners
const partnersSlider = new Swiper('.partners__slider', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    speed: 3000,
    loop: true,
    //allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            spaceBetween: 90
        },
        1200: {
            spaceBetween: 97
        }
    }
});

// slider Styles
const stylesSlider = new Swiper ('.styles__slider', {
    slidesPerView: 'auto',
    freeMode: true,
    grabCursor: true,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            freeMode: false,
            spaceBetween: 25
        },
        1700: {
            slidesPerView: 4,
            freeMode: false,
            spaceBetween: 27
        }
    }
});

//Slider Product

const productSlider = new Swiper ('.product__slider', {
    loop: true,
    navigation: {
        nextEl: ".product__next"
    },
    pagination: {
        el: ".product__pagination",
        type:"custom",
        renderCustom: function (swiper, current, total) {
            function numberAppend(d) {
                return (d < 10) ? '' + d.toString() : d.toString();
            }
            return numberAppend(current) + ' из ' + numberAppend(total); 
        } 
    }
})

//Accordion

const accordions = document.querySelectorAll('.catalog__category-wrap');

for(item of accordions) {
    item.addEventListener('click', function() {
        let parent = this.closest('.catalog__category-tab');
        if(parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            for(el of accordions) {
                el.closest('.catalog__category-tab').classList.remove('active');
            }
            parent.classList.add('active');
        }
    })
}

//Accordion F.A.Q

const faqAccordions = document.querySelectorAll('.faq__question-title');

for(question of faqAccordions) {
    question.addEventListener('click', function() {
        let parent = this.closest('.faq__question-item');
        if(parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            for(el of faqAccordions) {
                el.closest('.faq__question-item').classList.remove('active');
            }
            parent.classList.add('active')
        }
    })
 }


//Мой Пример Accordion F.A.Q

// const faqAccordions = document.querySelectorAll('.faq__question-item');

// for(question of faqAccordions) {
//     question.addEventListener('click', function() {
//         if(this.classList.contains('active')) {
//             this.classList.remove('active');
//         } else {
//             for(el of faqAccordions) {
//                 el.classList.remove('active');
//             }
//             this.classList.add('active')
//         }
//     })
// }


//Filter Button

const filterButton = document.querySelectorAll('.catalog__panel-filter');

for(item of filterButton) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

//Modal filter mobile
if (document.querySelector('.catalog__category')) {

    document.querySelector('.catalog__category-mobile').addEventListener('click', () => {
        document.querySelector('.catalog__category').style.display = 'block';
    });


    document.querySelector('.filter-cancel').addEventListener('click', filterClose);
    document.querySelector('.filter-success').addEventListener('click', filterClose);

    function filterClose() {
        document.querySelector('.catalog__category').style.display = 'none';
    }
}


//Modal Registration Page

const userOpen = document.getElementById('user-open');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const buttonReg = document.getElementById('button-reg');
const register = document.getElementById('register');
const newUser = document.getElementById('newuser');
const buttonHave = document.getElementById('button-have');
const comeback = document.getElementById('comeback');

userOpen.addEventListener('click', () => {
    register.style.display = 'block';
    newUser.style.display = 'none';
    comeback.style.display = 'none';
    modal.style.display = 'flex';
    setTimeout(function () {
        modal.classList.add('active');
    }, 100);
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    setTimeout(function () {
        modal.style.display = 'none';
    }, 500);
})

// Нажали на кнопку регистрации

buttonReg.addEventListener('click', () => {
    newUser.style.display = 'block';
    setTimeout(function () {
        newUser.classList.add('active');
    }, 100);
    if(newUser.style.display = 'block') {
        register.style.display = 'none'
    } else {
        newUser.style.display = 'none';
    }
})

// Нажали на кнопку уже есть акк

buttonHave.addEventListener('click', () => {
    comeback.style.display = 'block';
    setTimeout(function () {
        comeback.classList.add('active');
    }, 100);
    if(comeback.style.display = 'block') {
        register.style.display = 'none';
    } else {
        comeback.style.display = 'none';
    }
})

//Табы Карточка Товара

const deskButton = document.querySelectorAll('.product__description-title');
const testButton = document.querySelectorAll('.product__testimonials-title');
const testimonials = document.querySelector('.product__testimonials');
const description = document.querySelector('.product__description');
    //Описание
for(buttons of deskButton) {
    buttons.addEventListener('click', function() {
        description.style.display = 'block';
        testimonials.style.display = 'none';
    })
}
    //Отзывы
for(buttonsTest of testButton) {
    buttonsTest.addEventListener('click', function() {
        testimonials.style.display = 'block';
        description.style.display = 'none';
    })
}

//============================================================

// const productOption = document.querySelectorAll('.product__item-wrap');

// for (product of productOption) {
//     product.addEventListener('click', function () {
//         this.nextElementSibling.classList.add('active');
//         if(product.classList.contains('active')) {
//             product.classList.remove('active');
//         } else {
//             for(elem  of productOption) {
//                 this.classList.remove('active')
//             }
//             this.classList.add('active')
//         }
//     });
// }

//activ
// const productOption = document.querySelectorAll('.product__item-wrap');

//     for(product of productOption) {
//         product.addEventListener('click', function() {
//             let parent = this.closest('.product__items');
//             if(parent.classList.contains('active')) {
//                 parent.classList.remove('active');
//             } else {
//                 for(elem of productOption) {
//                     elem.closest('.product__items').classList.remove('active');
//                 }
//                 parent.classList.add('active')
//             }
//         })
//     }

    //==========================
    //Мой Пример Accordion F.A.Q

// const faqAccordions = document.querySelectorAll('.faq__question-item');

// for(question of faqAccordions) {
//     question.addEventListener('click', function() {
//         if(this.classList.contains('active')) {
//             this.classList.remove('active');
//         } else {
//             for(el of faqAccordions) {
//                 el.classList.remove('active');
//             }
//             this.classList.add('active')
//         }
//     })
// }

    const productOption = document.querySelectorAll('.product__item-wrap');

    for(product of productOption) {
        product.addEventListener('click', function() {
            let parent = this.closest('.product__button-wrap');
            if(this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                for(el of productOption) {
                    el.classList.remove('active');
                }
                this.classList.add('active')
            }
        })
        }

        //console.log(this.nextElementSibling);  Зачем нужен?

// this.nextElementSibling.style.display = 'block';
// console.log(this.nextElementSibling);

// for(question of faqAccordions) {
//     question.addEventListener('click', function() {
//         let parent = this.closest('.faq__question-item');
//         if(parent.classList.contains('active')) {
//             parent.classList.remove('active');
//         } else {
//             for(el of faqAccordions) {
//                 el.closest('.faq__question-item').classList.remove('active');
//             }
//             parent.classList.add('active')
//         }
//     })
//  }

//Кнопка Смотреть все Отзывы

// const filterButton = document.querySelectorAll('.catalog__panel-filter');

// for(item of filterButton) {
//     item.addEventListener('click', function() {
//         this.classList.toggle('active');
//     })
// }

const testiButton = document.querySelectorAll('.product__testimonials-button');

for(elem of testiButton) {
    elem.addEventListener('click', function() {
        this.classList.toggle('active');
    })
}