document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.header__navigation');
  
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('show'); // Переключение класса "show"
    });
  
    // Закрытие меню при клике вне его области
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.header__burger') && !event.target.closest('.header__navigation')) {
        mobileMenu.classList.remove('show');
      }
    });



    $('.reviews__').slick({
        slidesToShow: 1,            // Показывать 1 изображения на экране
        slidesToScroll: 1,  
        arrows: true,
        prevArrow: $('.reviews__card-to-left'),
        nextArrow: $('.reviews__card-to-right')        // Прокручивать по одному изображению     
    })

        
    


});
  