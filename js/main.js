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
  });
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
    },
    policy_checkbox: "required"
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
    },
    policy_checkbox: "Заполните поле"
  },
    errorClass: "invalid",

     submitHandler: function(form) {
      $.ajax({
        type: "GET",
        url: "../src/send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут')
          $(form)[0].reset();
          modal.removeClass('.modal--visible');
          ym(64448002, 'reachGoal', 'request');
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
    },
    control__policy: {
      required: true
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
    control__policy: {
      required: "Обязательное поле"
    }
  },
    errorClass: "invalid",

       submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "../src/send_control.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          ym(64448002, 'reachGoal', 'callback');
          return true;
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
    footer_userQuestion: "required",
    footer__policy: {
      required: true
    }
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
    footer_userQuestion: "Пожалуйста, уточните, что вас интересует",
    footer__policy: "Заполните поле"
  },
    errorClass: "invalid",

       submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "../src/send_footer.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут')
          $(form)[0].reset();
          ym(64448002, 'reachGoal', 'callback');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    }  
});
// Маска для телефона

$('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___) ___-__-__"});


  // создание яндекс карты
 ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [60.005036, 30.210280],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pasha-img.jpg',
            // Размеры метки.
            iconImageSize: [32, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark);
}); 

ymaps.ready(function () {
  var myMap = new ymaps.Map('map__mobile', {
          center: [60.005036, 30.210280],
          zoom: 9
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Наш офис',
          balloonContent: 'Вход со двора'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pasha-img.jpg',
          // Размеры метки.
          iconImageSize: [32, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38]
      });
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects
      .add(myPlacemark);
});


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
      height: '4',
      width: '100%',
      videoId: '9kl30htP1iw',
      events: {
        'onReady': videoPlay,
      }
    });
  });

  function videoPlay(event) {
    event.target.playVideo();
  }

});
 });
