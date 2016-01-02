	

	jQuery(function ($) {

		expromptum();
		
		// Формат телефона
		$(document).on('click', function () {
			$(".tel-number").each(function(){
				$(this).mask("+7 (999) 999-99-99");
			});
			
			$('.tel-number-without7').each(function(){
				$(this).mask("(999) 999-99-99");
			});
		});
		
	
		// Переключение блоков "Я рекламодатель/Я владелец"
		$(".vladelec-img-block").hide();
		$('#vladelec-btn').on('click', function() {
			$(".reklampdatel-img-block").hide();
			$(".vladelec-img-block").show();
			});
		$('#reklampdatel-btn').on('click', function() {
			$(".vladelec-img-block").hide();
			$(".reklampdatel-img-block").show();
			});
	
								
		// Плавный скроллинг
		$('a.scroll[href^="#"], a.scroll[href^="."]').click( function(){ 
			var scroll_el = $(this).attr('href'); 
			if ($(scroll_el).length != 0) { 
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 750);
			}
			return false;
		});
					
					
					
		// Загрузка 1 файла
		$(".file-upload input[type=file]").change(function(){
			 var filename = $(this).val().replace(/.*\\/, "");
			 $("#filename").html(filename);
		});
				
		
		
		// разрешаем закрыть слайдер если просмотрены все слайды		
		$('#modal_how_it_work').on('fotorama:show', function (e, fotorama) {
			if(fotorama.activeIndex+1 == fotorama.size) {
				$('.close-modal--how-it-work').attr('data-dismiss', 'modal').removeAttr("disabled");
				}
		});

		
		
		// Показ цвета, выбранного по умолчанию в colorpicker
		$('select[name="ts_color"]').simplecolorpicker({
			theme: 'glyphicons'
			});
		$('select[name="ts_color"]').simplecolorpicker('selectColor', '#dc2127');
				
		
					
		// открытие <select> c круглыми уголками
		setInterval(function(){
			var curVal = $(".select-box > input").val();
			var prevVal  = $(".select-box > input").data("prevVal") || null;

			if (prevVal !== curVal) {
				if ($('.select-box > select').css('display') == 'block') {
					$('.select-box > input').addClass("sticky-bottom");
					$('.select-box > .show_on_blured_and_invalid').hide();
					} else { 
						$('.select-box > input').removeClass("sticky-bottom");
						}
			}
						
				if ($('.select-box > select').css('display') == 'block') { 
					$('.select-box > input').addClass("sticky-bottom");
				} else {
					$('.select-box > input').removeClass("sticky-bottom");
					}	
		}, 100);
					
				
		
		
		// Конструктор брендирования из раздела Реклама
		$(function() {
			var sum_brend = 0
			$('#ts_detal_kapot').on('click', function() {
				var sum1 = 3000;
				if($(this).is(":checked")) { $('.kapot').removeClass('hide'); sum_brend += sum1;}
				else { $('.kapot').addClass('hide'); sum_brend -= sum1;}
				$('.sum-brand').html(sum_brend);
				});
				
			$('#ts_detal_perdveri').on('click', function() {
				var sum2 = 2000;
				if($(this).is(":checked")) { $('.per-dveri').removeClass('hide'); sum_brend += sum2;}
				else {$('.per-dveri').addClass('hide'); sum_brend -= sum2;}
				$('.sum-brand').html(sum_brend);
				});
					
			$('#ts_detal_zaddveri').on('click', function() {
				var sum3 = 1000;
				if($(this).is(":checked")) { $('.zad-dveri').removeClass('hide'); sum_brend += sum3;}
				else {$('.zad-dveri').addClass('hide'); sum_brend -= sum3;}
				$('.sum-brand').html(sum_brend);
				});
			
					
			$('#ts_srok_vladelca_undefaind').on('click', function() {
				if($(this).is(":checked")) { $('#ts_srok_vladelca').attr('disabled', 'disabled');}
				else {$('#ts_srok_vladelca').removeAttr('disabled');}
				});
				
		});
		
		
		
		
		//	$("#captcha-modal").modal();
		//	$("#register-modal").modal();	
				
		// После отправки запроса восстановления пароля - открыть окно с подтверждением
		$('#restore-password-modal').on('hidden.bs.modal', function (e) {
			$("#restore-password-success-modal").modal({
				show: true
				});
		});
			
		// После формы регистрации - открыть окно с вводом СМС-кода 
		$('#register-modal').on('hidden.bs.modal', function (e) {
			$("#modal_smscode_form").modal({
				show: true
				});
		});	
		
		
	
				
		// Очистка input через добавление Х		
		(function ($) {
			var input_class = 'input-with-x',
				input_class_x = input_class + '__x',
				input_class_x_over = input_class + '__x-over',
				input_selector = '.' + input_class,
				input_selector_x = '.' + input_class_x,
				input_selector_x_over = '.' + input_class_x_over,
				event_main = input_class + '-init',
				event_names = [event_main, 'focus drop paste keydown keypress input change'].join(' '),
				btn_width = 13,
				btn_height = 13,
				btn_margin = 7;

			function tog(v) {
				return v ? 'addClass' : 'removeClass';
			}

			$(document).on(event_names, input_selector, function () {
				$(this)[tog(this.value)](input_class_x);
			});

			$(document).on('mousemove', input_selector_x, function (e) {
				var input = $(this),
					input_width = this.offsetWidth,
					input_height = this.offsetHeight,
					input_border_bottom = parseFloat(input.css('borderBottomWidth')),
					input_border_right = parseFloat(input.css('borderRightWidth')),
					input_border_left = parseFloat(input.css('borderLeftWidth')),
					input_border_top = parseFloat(input.css('borderTopWidth')),
					input_border_hr = input_border_left + input_border_right,
					input_border_vr = input_border_top + input_border_bottom,
					client_rect = this.getBoundingClientRect(),
					input_cursor_pos_x = e.clientX - client_rect.left,
					input_cursor_pos_y = e.clientY - client_rect.top,
					is_over_cross = true;

				is_over_cross = is_over_cross && (input_cursor_pos_x >= input_width - input_border_hr - btn_margin - btn_width);
				is_over_cross = is_over_cross && (input_cursor_pos_x <= input_width - input_border_hr - btn_margin);
				is_over_cross = is_over_cross && (input_cursor_pos_y >= (input_height - input_border_vr - btn_height) / 2);
				is_over_cross = is_over_cross && (input_cursor_pos_y <= (input_height - input_border_vr - btn_height) / 2 + btn_height);

				$(this)[tog(is_over_cross)](input_class_x_over);
			});

			$(document).on('click', input_selector_x_over, function () {
				$(this).removeClass([input_class_x, input_class_x_over].join(' ')).val('').trigger('input');
			});

			$(document).on('click', input_selector_x_over, function () {
				$(this).removeClass([input_class_x, input_class_x_over].join(' ')).val('').trigger('input');
			});

		})(jQuery);
				
		
				
		
		// Установки для timepicker
		$(document).on('click', function () {
			$('.timepicker-input-start').each(function(){
				$(this).timepicker({
					template: 'dropdown',
					showInputs: false,
					showMeridian: false,
					maxHours: 24,
					minuteStep: 15,
					showSeconds: false,
					defaultTime: '9:00'
					});
			});
			$('.timepicker-input-end').each(function(){
				$(this).timepicker({
					template: 'dropdown',
					showInputs: false,
					showMeridian: false,
					maxHours: 24,
					minuteStep: 15,
					showSeconds: false,
					defaultTime: '10:00'
					});
			});
		});	
		
		
		
		// Установки для datepicker	
		$('.date-select').daterangepicker({
			"singleDatePicker": true,
			"showDropdowns": true,
			"autoApply": true,
			"linkedCalendars": false,
			"drops": "up",
			"locale": {
				"format": "DD-MM-YYYY",
				"separator": " ; ",
				"applyLabel": "Apply",
				"cancelLabel": "Cancel",
				"fromLabel": "From",
				"toLabel": "To",
				"customRangeLabel": "Custom",
				"daysOfWeek": ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
				"monthNames": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
				"firstDay": 1
			}
		});
				
		$('.date-select-person').daterangepicker({
			"singleDatePicker": true,
			"minDate": moment().subtract('years', 60),
			"maxDate": moment().subtract('years', 18),
			"startDate": "01/01/1980",
			"showDropdowns": true,
			"autoApply": true,
			"linkedCalendars": false,
			"drops": "up",
			"locale": {
				"format": "DD-MM-YYYY",
				"separator": " ; ",
				"applyLabel": "Apply",
				"cancelLabel": "Cancel",
				"fromLabel": "From",
				"toLabel": "To",
				"customRangeLabel": "Custom",
				"daysOfWeek": ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
				"monthNames": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
				"firstDay": 1
			}
		});
				
				
				
				
			
	
	
	});



		
		// Блок с картой		
		var myMap;
		ymaps.ready(init);

			function init () {
				myMap = new ymaps.Map('map', {
					center: [59.95, 30.2],
					zoom: 10
				}, {
					searchControlProvider: 'yandex#search'
				});

				document.getElementById('destroyButton').onclick = function () {
					myMap.destroy();
				};
			}