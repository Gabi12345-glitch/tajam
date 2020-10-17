document.querySelector(".header_burger-inner").onclick = function () {
  document
    .querySelector(".header_burger")
    .classList.toggle("header_burger-active");

    document
    .querySelector(".header_burger_menu").classList.toggle("header_burger_menu_active");
    document.querySelector(".overlay_bg_all").classList.toggle("overlay_bg_all_active");
};




$('.owl-carousel').owlCarousel({
  loop:true,
  margin:5,
  nav:true,
  items: 4,
  center: true,
  dots: false,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
})

