const faqs = document.querySelectorAll(".FAQ-QA");

faqs.forEach(faq => {
     faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
     });
});


// For animation while sliding "benefits section"
AOS.init({
   offset: 220,
   duration: 1000,
});

// Trending course section starts
var swiper = new Swiper (".review-slider",{
   spaceBetween: 30,
   loop: true,

   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },

   breakpoints: {
      640: {
         slidesPerView: 1,
         
      },

      768: {
         slidesPerView:2,
      },
      1024:{
         slidesPerView:3,
      }
   }
})
// Trending course section ends

//testimonials section starts
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    margin: 10,
    nav: true,

    responsive: {
       0:{
          items:1
       },
       600: {
          items:1
       },
       1000: {
          items:1
       }
    }
});
//testimonials section ends