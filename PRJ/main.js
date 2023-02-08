AOS.init();
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 900,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });



  $('.Newsletters').isotope({
    // options
    itemSelector: '.Articals',
    layoutMode: 'fitRows'
  });

    $(".artical-menu a").click(function () {
        $(".artical-menu a").removeClass("active");
        $(this).addClass("active");     
    });
        
 