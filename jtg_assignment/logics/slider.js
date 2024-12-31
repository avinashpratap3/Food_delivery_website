const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    slidesPerView:3,
    // breakpoints:{
    //     0:{
    //         slidesperview: 1
    //     },
    //     768:{
    //         slidesperview: 2
    //     },
    //     1024:{
    //         slidesperview: 3
    //     },
    // }
  });