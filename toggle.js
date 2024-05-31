(function togglePageBackgroundColor() {

	let darkModeActive = JSON.parse(localStorage.getItem('ChromeExtensionDarkModeActive'));

	if (document.location.protocol === "file:") {
		// invert pdf
		const pdfElement = document.querySelector('embed[type="application/pdf"]');
		if (pdfElement) {
			pdfElement.style.filter = darkModeActive ? "invert(88%)" : "invert(0)";
		}
	} else {
		// invert regular page
		document.body.style.filter = darkModeActive ? "invert(90%)" : "invert(0)";

		// invert back images 
		const imgElementes = document.querySelectorAll('img');
		imgElementes.forEach(imgElem => imgElem.style.filter = darkModeActive ? "invert(100%)" : "invert(0)");

		// invert back links (set to blue when inverted)
		const links = document.body.querySelectorAll('a');
		links.forEach(link => link.style.color = darkModeActive ? '#f29102' : '#0d6efd');

		// invert background color of transparent elements
		// const elements = document.querySelectorAll('body, main');
		// elements.forEach(elem => {
		//   if(window.getComputedStyle(elem).backgroundColor === 'rgba(0, 0, 0, 0)') {
		//     console.log(elem.className + ": " + window.getComputedStyle(elem).backgroundColor);
		//     elem.style.backgroundColor = darkModeActive ? '#212121' : 'rgba(0, 0, 0, 0)';
		//     elem.style.color = darkModeActive ? 'white' : 'black';

		//   }
		// });


		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, async function (tabs) {
			var currTab = tabs[0];
			if (currTab) {
				await chrome.action.setBadgeText({
					tabId: currTab,
					text: "foo"
				});
			}
		});


	}
})();