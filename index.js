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
          // margin: 150,
          center: true

          },

       768: {
            items:1,
            // margin:200,
            center: false
            },

       992: {
            items:2,
            // margin: 35,
            center: true
            },

       1200: {
             items:3,
             // margin:250,
             center: true
             },

                  },
 });
