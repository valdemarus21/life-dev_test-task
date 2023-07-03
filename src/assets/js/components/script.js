const burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', () => {
	const dashBoard = document.querySelector('.dashboard');
	const mainContentBlock = document.querySelector('.main');
	dashBoard.classList.toggle('dashboard--active');
	if (dashBoard.classList.contains('dashboard--active')) {
		mainContentBlock.style.display = 'none';
	} else {
		mainContentBlock.style.display = 'flex';
	}
});
