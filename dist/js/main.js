 $(document).ready(function () {
   var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
      modal.removeClass('modal--visible');
  });

  $(document).mouseup(function (e) {
    if (modal.has(e.target).length === 0){
        modal.removeClass('modal--visible');
    }
  });
  
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 25 + bullets.width() + 25);
  bullets.css('left', prev.width() + 25)


  // активация анимаций wow
  new WOW().init();

  // Валидация формы

  $(".modal__form").validate({
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 16
      },
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно, заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно быть больше пятнадцати символов"
      },
      userPhone: {
        required: "Телефон обязателен, заполните поле",
        minlength: "Введите корректный телефон вида +7(000)000-00-00"
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите корректный email name@domain.com"
      }
    },
      errorClass: "invalid",

      submitHandler: function(form) {
        $.ajax({
          type: "GET",
          url: "send.php",
          data: $(form).serialize(),
          success: function () {
            alert('Форма отправлена, мы свяжемся с вами через 10 минут')
            $(form)[0].reset();
            modal.removeClass('modal--visible');
          },
          error: function(response) {
            console.error('Ошибка запроса ' + response);
          }
        });
      } 
  });

  $(".control__form").validate({
    rules: {
      // simple rule, converted to {required:true}
      control_userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      control_userPhone: {
        required: true,
        minlength: 16
      },
      // compound rule
      control_userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      control_userName: {
        required: "Имя обязательно, заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно быть больше пятнадцати символов"
      },
      control_userPhone: {
        required: "Телефон обязателен, заполните поле",
        minlength: "Введите корректный телефон вида +7(000)000-00-00"
      },
    },
      errorClass: "invalid",

        submitHandler: function(form) {
          $.ajax({
            type: "GET",
            url: "send_control.php",
            data: $(form).serialize(),
            success: function () {
              alert('Форма отправлена, мы свяжемся с вами через 10 минут')
              $(form)[0].reset();
            },
            error: function(response) {
              console.error('Ошибка запроса ' + response);
          }
        });
      } 
  });

  $(".footer__form").validate({
    rules: {
      // simple rule, converted to {required:true}
      footer_userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      footer_userPhone: {
        required: true,
        minlength: 16
      },
      // compound rule
      footer_userQuestion: "required"
    },
    messages: {
      footer_userName: {
        required: "Имя обязательно, заполните поле",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не должно быть больше пятнадцати символов"
      },
      footer_userPhone: {
        required: "Телефон обязателен, заполните поле",
        minlength: "Введите корректный телефон вида +7(000)000-00-00"
      },
      footer_userQuestion: "Пожалуйста, уточните, что вас интересует"
    },
      errorClass: "invalid",

        submitHandler: function(form) {
          $.ajax({
            type: "GET",
            url: "send_footer.php",
            data: $(form).serialize(),
            success: function () {
              alert('Форма отправлена, мы свяжемся с вами через 10 минут')
              $(form)[0].reset();
            },
            error: function(response) {
              console.error('Ошибка запроса ' + response);
          }
      });
    } 
  });
  // Маска для телефона

  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___) ___-__-__"});

  $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
    e.preventDefault();
    var t = 800;
    var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
    $('html,body').animate({ scrollTop: $(d).offset().top }, t);
  });

  $(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 100) {
        $('#scroll_top').show();  
      } else {
        $('#scroll_top').hide();
      }
    });
  
    $('#scroll_top').click(function(){
      $('html, body').animate({scrollTop: 0}, 600);
      return false;
    });

    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '390',
        width: '100%',
        videoId: '9kl30htP1iw',
        events: {
          'onReady': videoPlay,
        }
      });
    })

    function videoPlay(event) {
      event.target.playVideo();
    }

  });
});