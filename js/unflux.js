$(function() {

  $('.article-wrapper .article-title .inside .at-illust').after('<div class="img-mask" style="top: 60%;width: 100%;height: 100%;position: absolute;left: 0px;background-color: white;z-index: -1;pointer-events: none;">a</div>');

//SLIDER TESTIMONIALS
$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});



//MENU
//burger menu
$('.site-banner .inside').before("<div class='test-menu-res'>Menu</div>");

  $('.test-menu-res').click(function() {
    $(this).toggleClass(" test-menu-res--active");
    $('header .main-navigation, .quicklinks').toggle()
  });


//Déplacement des éléments
resizeWindow();
$(window).bind('resize', function() {
  resizeWindow()
});

function resizeWindow() {
  if (window.innerWidth > 1024) {
      // $('.lang-switcher').after($('.cxp-searchform'));
      $('.global-search-form').insertAfter('.site-banner .lang-switcher');
      $('.mn-menu-item-758179').prependTo('.site-banner .mn-menu-lvl1');

  } else if (window.innerWidth < 1024) {
      $('.global-search-form').prependTo('.site-banner');
      // $('.top-header .date-salon').prependTo('.site-banner');
      // $('#cxpmClientAccountWidget').prependTo('.site-banner');
      $('.mn-menu-item-758179').prependTo('.site-banner');
  }
}

//PULSE LANDING
$('<div class="pulse pulse-1"></div><div class="pulse pulse-2"></div><div class="pulse pulse-3"></div><div class="pulse pulse-4"></div>').insertBefore('.article-focus.landing .af-title');



});
