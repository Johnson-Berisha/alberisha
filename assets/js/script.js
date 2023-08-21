// scroll
var slideBottom = {
    distance: '10%',
    origin: 'left',
    opacity: 0,
    duration: 1500,
    delay: 250
  };

  var slide2 = {
    distance: '50%',
    origin: 'top',
    opacity: 0,
    duration: 1500,
    delay: 250
  };

  var slide3 = {
    distance: '50%',
    origin: 'right',
    opacity: 0,
    duration: 1500,
    delay: 200
  };
  var slide4 = {
    distance: '200%',
    origin: 'bottom',
    opacity: 0,
    duration: 1500,
    delay: 200
  };

  ScrollReveal().reveal('.projectbtns', slide4);
  ScrollReveal().reveal('.herodesc', slideBottom);

//   ScrollReveal().reveal('.reasonstext', slide2);
  ScrollReveal().reveal('.header', slide2, {delay: 0});

  ScrollReveal().reveal('.card1', {distance: '10%',
  origin: 'left',
  opacity: 0,
  duration: 1500,
  delay: 50});
  ScrollReveal().reveal('.card2', {distance: '10%',
  origin: 'right',
  opacity: 0,
  duration: 1500,
  delay: 100});
  ScrollReveal().reveal('.card3', {distance: '10%',
  origin: 'left',
  opacity: 0,
  duration: 1500,
  delay: 150});
  ScrollReveal().reveal('.card4', {distance: '10%',
  origin: 'right',
  opacity: 0,
  duration: 1500,
  delay: 200});
  ScrollReveal().reveal('.aboutphoto', slideBottom);
  ScrollReveal().reveal('.abouttext', slide3);
  ScrollReveal().reveal('.servicecardinfo', slide3);
  ScrollReveal().reveal('.statcards', slideBottom);
  ScrollReveal().reveal('.stattext', slide3);
  ScrollReveal().reveal('.projectstitle');
  ScrollReveal().reveal('.projectcard1');
  ScrollReveal().reveal('.projectcard3');
  ScrollReveal().reveal('.projectcard2');
  ScrollReveal().reveal('.projectcard4');
  ScrollReveal().reveal('.contacttext', slide2);
  ScrollReveal().reveal('input', slide2);
  ScrollReveal().reveal('textarea', slide3);
  ScrollReveal().reveal('button', slide4);


  // projects

  let activeIndex = 0;

const groups = document.getElementsByClassName("page");



const goNext = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentGroup.dataset.status = "after";
  
  nextGroup.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });

}



const goBack = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentGroup.dataset.status = "before";
  
  nextGroup.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });


}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("page");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex-1].className += " active";
}

// slider

class Slider {
  constructor(options) {
    this.sections = document.querySelectorAll(options.section);
    this.navigation = document.querySelector(options.dots);

    this.navigation.addEventListener('click', this.scrollToSection.bind(this));
    window.addEventListener('scroll', this.setDotStatus.bind(this));
  }

  removeDotStyles() {
    const dots = this.navigation;
    const is_active = dots.querySelector('.is-active');

    if (is_active != null) {
      is_active.classList.remove('is-active');
    }
  }

  setDotStatus() {
    const scroll_position = window.scrollY;
    const dots = Array.from(this.navigation.children);

    this.sections.forEach((section, index) => {
      const half_window = window.innerHeight / 2;
      const section_top = section.offsetTop;

      if (scroll_position > section_top - half_window && scroll_position < section_top + half_window) {
        this.removeDotStyles();
        dots[index].classList.add('is-active');
      }
    })
  }

  scrollToSection(e) {
    const dots = Array.from(this.navigation.children);
    const window_height = window.innerHeight;

    dots.forEach((dot, index) => {
      if (dot == e.target) {

        window.scrollTo({
          top: window_height * index,
          behavior: 'smooth',
        });
      }
    });
  }
}

new Slider({
  section: '.section',
  dots: '#js-dots',
});

// dark mode

function darkMode() {
  const reasons = document.querySelector('.reasons');
  const shapeFill = document.querySelector('.shape-fill1');
  const about = document.querySelector('.aboutus'); 
  const shapeFill2 = document.querySelector('.shape-fill2');
  const shapeFill3 = document.querySelector('.shape-fill3');
  const shapeFill4 = document.querySelector('.shape-fill4');
  const services = document.querySelector('.services');
  const stats = document.querySelector('.stats');
  const projects = document.querySelector('.projects');
  const contact = document.querySelector('.contact');
  const stext = document.querySelector('.servicestitle');
  const stattd = document.querySelector('.stattextdesc');
  const ptext = document.querySelector('.projectstitle');
  const ctitle = document.querySelector('.contacttitle');
  const cinfo = document.querySelector('.contactdesc');
  const card = document.querySelector('.rcard1');
  const card2 = document.querySelector('.rcard2');
  const cardt1 = document.querySelector('.cardt1');
  const cardt2 = document.querySelector('.cardt2');
  const cardd1 = document.querySelector('.cardd1');
  const cardd2 = document.querySelector('.cardd2');
  const scard1 = document.querySelector('.scard1');
  const scard2 = document.querySelector('.scard2');
  const cid = document.querySelector('.servicecardinfo');
  const cid2 = document.querySelector('.cardinfodesc');

  reasons.classList.toggle('dark');
  shapeFill.classList.toggle('dark-svg');
  shapeFill2.classList.toggle('dark-svg');
  shapeFill3.classList.toggle('dark-svg');
  shapeFill4.classList.toggle('dark-svg');
  about.classList.toggle('dark');
  stats.classList.toggle('dark');
  contact.classList.toggle('dark');
  services.classList.toggle('dark-light');
  projects.classList.toggle('dark-light');
  stext.classList.toggle('dark-text');
  stattd.classList.toggle('dark-text');
  ptext.classList.toggle('dark-text');
  ctitle.classList.toggle('dark-text');
  cinfo.classList.toggle('dark-text');
  cardt1.classList.toggle('dark-text');
  cardt2.classList.toggle('dark-text');
  cardd1.classList.toggle('dark-text');
  cardd2.classList.toggle('dark-text');
  card.classList.toggle('dark-elem');
  card2.classList.toggle('dark-elem');
  scard1.classList.toggle('dark-elem2');
  scard2.classList.toggle('dark-elem2');
  cid.classList.toggle('dark-elem2');
  cid2.classList.toggle('dark-elem2');
}

// preloader

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector("body").classList.add("loaded");
  }, 1500)
});

// nav
const nav = document.querySelector('.menu');

function openNav() {
  nav.classList.toggle('open');
}
