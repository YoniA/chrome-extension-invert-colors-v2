chrome.runtime.onInstalled.addListener(() => {
	chrome.action.setBadgeText({
		text: 'DAY',
	});
});


chrome.history.onVisited.addListener(result => {
	console.log(result);
});

chrome.tabs.onActivated.addListener(
	(activeInfo, tabId) => {
		console.log(activeInfo);
		console.log(tabId);
	});


// on clicking the extension icon
chrome.action.onClicked.addListener(async (tab) => {

	const prevState = await chrome.action.getBadgeText({
		tabId: tab.id
	});

	const nextState = prevState === 'DAY' ? 'DARK' : 'DAY';

	// Set the action badge to the next state
	await chrome.action.setBadgeText({
		tabId: tab.id,
		text: nextState,
	});

	if (nextState === 'DARK') {
		chrome.scripting.executeScript({
			target: {
				tabId: tab.id
			},
			files: ['local-storage-set-dark.js', 'toggle.js']
		});

	} else if (nextState === 'DAY') {
		chrome.scripting.executeScript({
			target: {
				tabId: tab.id
			},
			files: ['local-storage-set-day.js', 'toggle.js']
		});
	}

});