/* document.addEventListener("DOMContentLoaded", function(event) { 
   const modal = document.querySelector('.modal');
   const modalButton = document.querySelectorAll('[data-toggle = modal]');
   const closeBtn = document.querySelector('.modal__close');
   const switchModal = () => {
    modal.classList.toggle('modal--visible');
   }

   //adding modal--visible for click
  modalButton.forEach (element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.classList.remove('modal--visible');
  }
  });

  window.onkeydown = function( event ) {
    if ( event.keyCode == 27 ) {
      modal.classList.remove('modal--visible');
    }
};

}); */

// 
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
});

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
    userPhone: "required",
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
    userPhone: "Телефон обязателен, заполните поле",
    userEmail: {
      required: "Обязательно укажите email",
      email: "Введите корректный email name@domain.com"
    }
  },
    errorClass: "invalid",

 /*    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут')
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    } */
});

$(".control__form").validate({
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
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
    userPhone: "Телефон обязателен, заполните поле",
    userEmail: {
      required: "Обязательно укажите email",
      email: "Введите корректный email name@domain.com"
    }
  },
    errorClass: "invalid",

 /*    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут')
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    } */
});

$(".footer__form").validate({
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
    // compound rule
    userEmail: {
      required: true,
      email: true
    },
    userQuestion: "required"
  },
  messages: {
    userName: {
      required: "Имя обязательно, заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не должно быть больше пятнадцати символов"
    },
    userPhone: "Телефон обязателен, заполните поле",
    userEmail: {
      required: "Обязательно укажите email",
      email: "Введите корректный email в формате name@domain.com"
    },
    userQuestion: "Пожалуйста, уточните, что вас интересует"
  },
    errorClass: "invalid",

/*     submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут')
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        }
      });
    } */
});
// Маска для телефона

$('[type=tel]').mask('+7(000)00-00-000', {placeholder: "+7(___) __-__-___"});


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
        .add(myPlacemark)
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
      .add(myPlacemark)
}); 
});