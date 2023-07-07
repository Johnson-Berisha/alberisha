// scroll
var slideBottom = {
    distance: '10%',
    origin: 'left',
    opacity: 0,
    reset: true,
    duration: 1500,
    delay: 250
  };

  var slide2 = {
    distance: '50%',
    origin: 'top',
    opacity: 0,
    reset: true,
    duration: 1500,
    delay: 250
  };

  var slide3 = {
    distance: '50%',
    origin: 'right',
    opacity: 0,
    reset: true,
    duration: 1500,
    delay: 200
  };
  
  ScrollReveal().reveal('.herodesc', slideBottom);

//   ScrollReveal().reveal('.reasonstext', slide2);
  ScrollReveal().reveal('.header', slide2, {delay: 0});

  ScrollReveal().reveal('.card1', {distance: '10%',
  origin: 'left',
  opacity: 0,
  reset: true,
  duration: 1500,
  delay: 50});
  ScrollReveal().reveal('.card2', {distance: '10%',
  origin: 'right',
  opacity: 0,
  reset: true,
  duration: 1500,
  delay: 100});
  ScrollReveal().reveal('.card3', {distance: '10%',
  origin: 'left',
  opacity: 0,
  reset: true,
  duration: 1500,
  delay: 150});
  ScrollReveal().reveal('.card4', {distance: '10%',
  origin: 'right',
  opacity: 0,
  reset: true,
  duration: 1500,
  delay: 200});
  ScrollReveal().reveal('.aboutphoto', slideBottom);
  ScrollReveal().reveal('.abouttext', slide3);
  ScrollReveal().reveal('.servicecardinfo', slide3);
  ScrollReveal().reveal('.statcards', slideBottom);
  ScrollReveal().reveal('.stattext', slide3);
