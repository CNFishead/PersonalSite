$("h1.clickMeButton").on("click", function(){
  $("img.opening-page").fadeOut();
  $("h1.clickMeButton").fadeOut();
});

$(".owl-carousel").owlCarousel({
   responsiveClass: true,
   dots: true,
   dotsContainer: false,
      loop: true,
      autoWidth: false,
     autoplay:true,
     nav:true,
     smartSpeed:1000,
     items:5,
     responsive: {
       0: {
          items:1,
          center: true

          },

       768: {
            items:1,
            center: false
            },

       992: {
            items:2,
            center: true
            },

       1200: {
             items:3,
             center: true
             },
                  },

 });

 // set height of all cards to max height
 const cards = Array.from(document.querySelectorAll('.card'));
 const cardHeights = cards.map(card => card.offsetHeight);
 const maxCardHeight = Math.max(...cardHeights);
 cards.forEach(card => {
   card.style.height = maxCardHeight + 'px';
 });
