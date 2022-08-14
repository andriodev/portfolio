const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	block = document.querySelector('.menu__block'),
	clossElem = document.querySelector('.menu__close')
hamburger.addEventListener('click', () => {
	menu.classList.add('active'),
	block.classList.add('active');
});

clossElem.addEventListener('click', () => {
	block.classList.add('active'),
	menu.classList.remove('active');	
});