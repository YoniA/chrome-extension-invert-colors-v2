(function togglePageBackgroundColor() {
	let darkModeActive = JSON.parse(localStorage.getItem('ChromeExtensionDarkModeActive'));

	const isPdf = document.location.pathname.endsWith('.pdf') ||
		document.contentType === 'application/pdf';

	const styleId = '_invert-ext-style';
	const existingStyle = document.getElementById(styleId);

	if (darkModeActive) {
		if (!existingStyle) {
			const style = document.createElement('style');
			style.id = styleId;
			const invertPct = isPdf ? '88%' : '90%';
			style.textContent = [
				`html { filter: invert(${invertPct}) !important; background-color: white !important; }`,
				`img:not(.mw-invert):not(.skin-invert), video, iframe { filter: invert(100%) !important; }`,
			].join('\n');
			document.head.appendChild(style);
		}
	} else {
		existingStyle?.remove();
		// clear any inline styles left by older versions
		document.documentElement.style.filter = '';
		document.documentElement.style.backgroundColor = '';
	}

	// sync badge text with current state (needed when running as a content script on navigation)
	try {
		chrome.runtime.sendMessage({ darkModeActive: !!darkModeActive });
	} catch (e) {
		// not available in all execution contexts (e.g. executeScript), safe to ignore
	}
})();
