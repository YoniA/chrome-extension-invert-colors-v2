(function togglePageBackgroundColor() {
	let darkModeActive = JSON.parse(localStorage.getItem('ChromeExtensionDarkModeActive'));

	if (document.location.protocol === "file:") {
		// invert pdf
		const pdfElement = document.querySelector('embed[type="application/pdf"]');
		if (pdfElement) {
			pdfElement.style.filter = darkModeActive ? "invert(88%)" : "invert(0)";
		}
	} else {

    function isGray(rgb) {
      const rgbValues = rgb.match(/\d+/g).map(Number);
      return rgbValues[0] === rgbValues[1] && rgbValues[1] === rgbValues[2];
    }

    const bodyBgColor = window.getComputedStyle(document.body).backgroundColor; 

		if(isGray(bodyBgColor)) {
      // grayscale background
      document.body.style.backgroundColor = "#1A1A1A";
      document.body.style.filter = darkModeActive ? "invert(90%)" : "invert(0)";

      // invert back images 
      const imgElementes = document.querySelectorAll('img');
      imgElementes.forEach(imgElem => imgElem.style.filter = darkModeActive ? "invert(100%)" : "invert(0)");

      // invert back links (set to blue when inverted)
      const links = document.body.querySelectorAll('a');
      links.forEach(link => link.style.color = darkModeActive ? '#f29102' : '#0d6efd');
    } else {
      // non grayscale background
      // invert regular page
      document.body.style.filter = darkModeActive ? "invert(90%)" : "invert(0)";
      
      // invert back images 
      const imgElementes = document.querySelectorAll('img');
      imgElementes.forEach(imgElem => imgElem.style.filter = darkModeActive ? "invert(100%)" : "invert(0)");

      // invert back links (set to blue when inverted)
      const links = document.body.querySelectorAll('a');
      links.forEach(link => link.style.color = darkModeActive ? '#f29102' : '#0d6efd');
    }
	}
})();
