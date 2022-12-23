const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	block = document.querySelector('.menu__block'),
	clossElem = document.querySelector('.menu__close'), 
	link = document.querySelector('.menu__list')
hamburger.addEventListener('click', () => {
	menu.classList.add('active'),
	block.classList.add('active');
});

clossElem.addEventListener('click', () => {
	block.classList.remove('active'),
	menu.classList.remove('active');	
});

link.addEventListener('click', () => {
	block.classList.remove('active'),
	menu.classList.remove('active');
})


const procents = document.querySelectorAll('.use__statistic-progress'),
	lines = document.querySelectorAll('.use__statistic-color')

	procents.forEach((item, i) =>{
		lines[i].style.width = item.innerHTML;
	});


	$(document).ready(function(){

	function validateForms (form) {
		$(form).validate({
			debug: true,
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				text: {
					required: true,
					minlength: 10
				},
				policy: 'required'
			},
			messages: {
				name: {
					required: 'Введите ваше имя',
					minlength: 'Пожалйста, укажите не менее {0} символов'
				},
				email: {
					required: 'Введите свою почту',
					email: 'Некорректный адресс еллектроной почты'
				},
				text: {
					required: 'Введите текст сообщения',
					minlength: 'Минимум {0} символов'
				}
			}
		});
	};

	validateForms('#contact_form');


	$('form').submit(function(e) {

		if(!$(this).valid()) {
			return;
		}

		$.ajax({
			type:'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize()
		}).done(function () {
			$(this).find('input').val('');


			$('form').trigger('reset')
		});
		return false;
	});

})