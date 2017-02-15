chrome.browserAction.onClicked.addListener(function() {
	chrome.windows.getAll( { populate: true }, getWindows);
});

function getWindows(windows) {
    var gmTabs = [];
    for (var i = 0; i < windows.length; i++) {
        for (var j = 0; j < windows[i].tabs.length; j++) {
            if (windows[i].tabs[j].url.includes("//play.google.com/music"))
                gmTabs.push(windows[i].tabs[j]);
        }
    }

    if (gmTabs.length) {
		chrome.tabs.executeScript(gmTabs[0].id, { file: "action-play.js" }, playPause);
	} else {
		chrome.tabs.create({ url: "https://play.google.com/music/listen" });
	}  
}

function playPause(result) {
    var iconPath;
    var iconText;
    if (result == "play") {
        iconPath = "images/pause.png";
        iconText = "Pause";
    } else {
        iconPath = "images/play.png";
        iconText = "Play";
    }
    chrome.browserAction.setIcon({ path: iconPath });
    chrome.browserAction.setTitle({ title: iconText });
}