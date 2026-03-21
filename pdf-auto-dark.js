(function() {
	// Default to dark mode if no preference has been stored yet
	if (localStorage.getItem('ChromeExtensionDarkModeActive') === null) {
		localStorage.setItem('ChromeExtensionDarkModeActive', 'true');
	}

	const darkModeActive = JSON.parse(localStorage.getItem('ChromeExtensionDarkModeActive'));
	document.documentElement.style.filter = darkModeActive ? "invert(88%)" : "";
})();
