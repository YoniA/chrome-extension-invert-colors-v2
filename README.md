# Invert Colors — Chrome Extension

Invert page colors to reduce eye strain in low light conditions.

Click the extension icon to toggle dark mode on any page. The badge shows the current state: **DAY** or **DARK**.

## Features

### Per-domain state persistence
Dark mode state is remembered per domain. Once you enable it on a site, every page you navigate to within that domain will automatically stay in dark mode — no need to re-toggle on each page.

### Images and videos preserved
Images and videos are counter-inverted so they appear in their original colors, while the rest of the page is darkened.

### Automatic local PDF support
PDF files opened from the filesystem (`file://`) are automatically opened in dark mode by default. The state is remembered, so toggling it once applies to all local PDFs.


## Installation

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked** and select the project folder
5. For local PDF support, also enable **Allow access to file URLs** on the extension card

## Usage

- Click the extension icon to toggle dark mode on the current page
- The badge reflects the current state: **DAY** or **DARK**
- Navigate freely within a site — dark mode follows you across pages
- To disable for a domain, click the icon again on any page within that domain
