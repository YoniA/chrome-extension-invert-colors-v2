(function togglePageBackgroundColor() {
  console.log("Running toggle IIFE");
	let darkModeActive = JSON.parse(localStorage.getItem('ChromeExtensionDarkModeActive'));

	if (document.location.protocol === "file:") {
		// invert pdf
		const pdfElement = document.querySelector('embed[type="application/pdf"]');
		if (pdfElement) {
			pdfElement.style.filter = darkModeActive ? "invert(88%)" : "invert(0)";
		}
	} else {

    //document.body.style.backgroundColor = darkModeActive ? "#1A1A1A" : "white";
    //alert(`darkModeActive: ${darkModeActive}`);


		if(window.getComputedStyle(document.body).backgroundColor === 'rgb(255, 255, 255)') {
      alert("white background");
      document.body.style.backgroundColor = "#1A1A1A";
    } else if(window.getComputedStyle(document.body).backgroundColor === 'rgba(0, 0, 0, 0)') {
      // transparent background
      alert("transparent background");
      document.body.style.backgroundColor = darkModeActive ? "#1A1A1A" : "white !important";
      document.body.style.filter = darkModeActive ? "invert(90%)" : "invert(0)";

      // invert back images 
      const imgElementes = document.querySelectorAll('img');
      imgElementes.forEach(imgElem => imgElem.style.filter = darkModeActive ? "invert(100%)" : "invert(0)");

      // invert back links (set to blue when inverted)
      const links = document.body.querySelectorAll('a');
      links.forEach(link => link.style.color = darkModeActive ? '#f29102' : '#0d6efd');
    } else {
      alert("non white background");
      // invert regular page
      document.body.style.filter = darkModeActive ? "invert(90%)" : "invert(0)";
      
      // invert back images 
      const imgElementes = document.querySelectorAll('img');
      imgElementes.forEach(imgElem => imgElem.style.filter = darkModeActive ? "invert(100%)" : "invert(0)");

      // invert back links (set to blue when inverted)
      const links = document.body.querySelectorAll('a');
      links.forEach(link => link.style.color = darkModeActive ? '#f29102' : '#0d6efd');
    }


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
