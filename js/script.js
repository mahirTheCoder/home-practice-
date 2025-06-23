// ---------------- slider plugin 


$('.popularSlider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-regular both nr fa-circle-right"></i>',
  nextArrow: '<i class="fa-regular both pr fa-circle-left"></i>',
  autoplaySpeed: 2000,
});


// ----------------counter plugin 

$('.counter').counterUp({
    delay: 10,
    time: 1000,
});


// ------------aos animations 

 AOS.init();