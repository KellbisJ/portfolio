(() => {
	// navbar logic
	const menuButton = document.querySelector('#menu');
	const navbarMenuContent = document.querySelector('.navbar__menu__content');
	const menuIcon = document.querySelector('#menu-icon');

	let menuNavbarShowed = false;

	const menuIcons = ['fa fa-bars', 'fa-solid fa-x'];

	const toggleMenu = () => {
		navbarMenuContent.classList.toggle('show');

		navbarMenuContent.classList.contains('show')
			? ((menuIcon.classList = menuIcons[1]), (menuNavbarShowed = true))
			: ((menuIcon.classList = menuIcons[0]), (menuNavbarShowed = false));
	};

	const handleBodyClick = (event) => {
		if (menuNavbarShowed && !navbarMenuContent.contains(event.target) && !menuButton.contains(event.target)) {
			navbarMenuContent.classList.remove('show');
			menuNavbarShowed = false;
			menuIcon.classList = menuIcons[0];
		}
	};

	menuButton.addEventListener('click', toggleMenu);
	document.body.addEventListener('click', handleBodyClick);

	navbarMenuContent.addEventListener('click', (event) => {
		event.stopPropagation();
	}); // navbar logic

	// copy email logic

	const emailAddress = 'kellbisdevsw@gmail.com';

	const copyElement = document.getElementById('copyElement');
	const mailIcon = document.getElementById('mailIcon');
	const emailInput = document.getElementById('emailInput');
	const copyText = document.getElementById('copyText');

	const copyAddres = async () => {
		try {
			await navigator.clipboard.writeText(emailInput.value);
			copyElement.classList.add('copy-success');
			copyText.classList.remove('hidden');
			setTimeout(() => {
				copyElement.classList.remove('copy-success');
				copyText.classList.add('hidden');
			}, 1700);
		} catch (err) {
			console.error(`err copying text: ${err}`);
			fallbackCopyAddress();
		}
	};

	const fallbackCopyAddress = () => {
		emailInput.select();
		document.execCommand('copy');
		copyElement.classList.add('copy-success');
		copyText.classList.remove('hidden');
		setTimeout(() => {
			copyElement.classList.remove('copy-success');
			copyText.classList.add('hidden');
		}, 1700);
	};

	const openMailTo = () => {
		window.location.href = `mailto:${emailAddress}`;
	};

	copyElement.addEventListener('click', copyAddres);
	mailIcon.addEventListener('click', openMailTo); // copy email logic
})();
