(() => {
	const menuButton = document.querySelector('#menu');
	const NAVBAR_MENU_CONTENT = document.querySelector('.navbar__menu__content');
	const MENU_ICON = document.querySelector('#menu-icon');

	menuButton.addEventListener('click', () => {
		const menuIcons = ['menu', 'close'];

		NAVBAR_MENU_CONTENT.classList.toggle('show');

		NAVBAR_MENU_CONTENT.classList.contains('show') ? (MENU_ICON.innerHTML = menuIcons[1]) : (MENU_ICON.innerHTML = menuIcons[0]);
	});
})();
