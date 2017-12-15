import $ from 'jquery';
import slick from 'slick-carousel';
import scrollreveal from 'scrollreveal';
import {fancybox} from '@fancyapps/fancybox';
import formvalidator from 'jquery-form-validator';

window.sr = scrollreveal({ reset: true });

if (sr.isSupported()) {
  document.documentElement.classList.add('sr');
}
export default (function() {
  const galleryItem = $('.js-fancybox');
  galleryItem.fancybox();
})();



$('.js-btn-nav').click(function(event) {
  event.stopPropagation();
  $('.js-header').toggleClass('is-open');

  if(!$('.js-header').is(e.target) && $('.js-header').has(e.target).length === 0) {
    $('.js-header').removeClass('is-open');
  }
});

$(window).scroll(function() {
  if ( $(window).scrollTop() > 0) {
    $('body').addClass('is-fixed');
  } else{
    $('body').removeClass('is-fixed');
  }
});



$(document).ready(function() {

// Cache selectors
  var lastId,
    topMenu = $('.js-scrollspy-menu'),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find('a'),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
      var item = $($(this).attr('href'));
      if (item.length) { return item; }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e) {
    var href = $(this).attr('href'),
      offsetTop = href === '#' ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 100);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function() {
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function() {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : '';

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass('is-current')
        .end().filter("[href='#"+id+"']").parent().addClass('is-current');
    }
  });


  sr.reveal('.js-reveal', {
    container: '.js-reveal-container',
    opacity: 1,
    scale: 1,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    mobile: true,
    distance: '0px',
    delay: 50,
    useDelay: 'always'
  }, 71);

  sr.reveal('.js-reveal-00', {
    duration: 900,
    origin: 'top',
    rotate: { x: 0, y: 25, z: 0 },
  });

  sr.reveal('.js-reveal-01', {
    origin: 'right',
    duration: 800,
    rotate: { x: 0, y: -45, z: 0 }
  });

  sr.reveal('.js-reveal-02', {
    origin: 'left',
    rotate: { x: 0, y: 20, z: 0 }
  });

  sr.reveal('.js-reveal-03', {
    origin: 'bottom',
    rotate: { x: 0, y: 20, z: 0 }
  });

  sr.reveal('.js-reveal-04', {
    origin: 'bottom',
    rotate: { x: -35, y: 0, z: 0 }
  });

  $.validate({
    lang: 'ru'
  });

  $('.js-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick'
      },
      {
        breakpoint: 657,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true
        }
      }]
  });

  $('.js-scroll-to').on('click', function(e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
  });

  $('textarea, input').each(function() {
    var placeholder = $(this).attr('placeholder');

    $(this).focus(function() {
      $(this).attr('placeholder', '');
    });
    $(this).blur(function() {
      $(this).attr('placeholder', placeholder);
    });
  });

});
