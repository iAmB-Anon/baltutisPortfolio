(function ($) {

  'use strict';

  // bootstrap dropdown hover

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Stellar
  $(window).stellar();


  $('nav .dropdown').hover(function () {
    var $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    var $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });


  $('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  });



  // home slider
  $('.home-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // owl carousel
  var majorCarousel = $('.js-carousel-1');
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: false,
    stagePadding: 0,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    dots: false,
    autoplayHoverPause: false,
    items: 3,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // cusotm owl navigation events
  $('.custom-next').click(function (event) {
    event.preventDefault();
    // majorCarousel.trigger('owl.next');
    majorCarousel.trigger('next.owl.carousel');

  })
  $('.custom-prev').click(function (event) {
    event.preventDefault();
    // majorCarousel.trigger('owl.prev');
    majorCarousel.trigger('prev.owl.carousel');
  })

  // owl carousel
  var major2Carousel = $('.js-carousel-2');
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    autoplayHoverPause: true,
    items: 4,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: true,
        loop: false
      }
    }
  });




  var contentWayPoint = function () {
    var i = 0;
    $('.element-animate').waypoint(function (direction) {

      if (direction === 'down' && !$(this.element).hasClass('element-animated')) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function () {

          $('body .element-animate.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn element-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft element-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight element-animated');
              } else {
                el.addClass('fadeInUp element-animated');
              }
              el.removeClass('item-animate');
            }, k * 100);
          });

        }, 100);

      }

    }, { offset: '95%' });
  };
  contentWayPoint();



})(jQuery);

$(document).ready(function () {
  function setModalContent(cardId) {
    var $card = $("<div>")
    $card.addClass('card').addClass('col-12');
    var html;
    switch (cardId) {
      case "#hangmanCard":
        html = `<img class="card-img-top rounded-top" src="images/Hangman-Portfolio.png" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Hangman Game</h5>
          <p class="card-text">"Game is set to to give the player 10 guesses until hangman is fully drawn and the game is over. Guess the word
            correctly and you win!"</p>
          <a href="https://baltu008.github.io/Hangman/" class="btn btn-primary" id="hangmanBtn">See Project</a>`;
        break;
      case "#crystalCard":
        html = `<img class="card-img-top rounded-top" src="images/crystalGame.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Crystals Game</h5>
        <p class="card-text">"A random number is generated. It is the players job to reach that number using other randomly generated numbers
          hidden inside the crystals."</p>
        <a href="https://baltu008.github.io/week-4-game/" class="btn btn-primary" id="crystalBtn">See Project</a>`
        break;
      case "#starWarsCard":
        html = `<img class="card-img-top rounded-top" src="images/starWarsGame.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Star Wars Trivia</h5>
        <p class="card-text">"You have 10 seconds to guess the correct Star Wars answer! Press start to move onto the next question."
        </p>
        <a href="https://baltu008.github.io/TriviaGame/" class="btn btn-primary" id="starWarsBtn">See Project</a>`
        break;
      case "#gifCard":
        html = `<img class="card-img-top rounded-top" src="images/gifTastic.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">GifTastic</h5>
        <p class="card-text">"Click on any button to show gifs of that animal. Also, add new gif animal buttons for more gifs!"</p>
        <a href="https://baltu008.github.io/GifTastic/" class="btn btn-primary" id="gifTasticBtn">See Project</a>`
        break;
      case "#trainCard":
        html = `<img class="card-img-top rounded-top" src="images/trainScheduler.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Train Scheduler</h5>
        <p class="card-text">"This program grabs information from the firebase database for multiple train arrival times."</p>
        <a href="https://baltu008.github.io/TrainScheduler/" class="btn btn-primary" id="trainScheduler">See Project</a>`
        break;
      case "#nutritionCard":
        html = `<img class="card-img-top rounded-top" src="images/nutritionProject.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Dine or Dash</h5>
        <p class="card-text">"Everyone has looked into their fridge at some point and had something there that they had no idea what to do
          with. We wanted to make an easy way to find recipes, or if you aren’t feeling up to cooking you can use the
          dash function to find a restaurant near you."</p>
        <a href="https://baltu008.github.io/nutritionProject/" class="btn btn-primary" id="nutritionProject">See Project</a>`
        break;
    }
    $card.append(html)
    $("#exampleModal .row").html($card)
  }
  $('#hangmanInvoke').on("click", function (event) {
    setModalContent('#hangmanCard')
  })

  $('#crystalInvoke').on("click", function (event) {
    setModalContent('#crystalCard')
  })

  $('#starWarsInvoke').on("click", function (event) {
    setModalContent('#starWarsCard')
  })
  $('#gifInvoke').on("click", function (event) {
    setModalContent('#gifCard')
  })
  $('#trainInvoke').on("click", function (event) {
    setModalContent('#trainCard')
  })
  $('#nutritionInvoke').on("click", function (event) {
    setModalContent('#nutritionCard')
  })
})