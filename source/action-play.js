var result = "none";

if (document.querySelectorAll('[data-id="play-pause"]').length) {
    var button = document.querySelectorAll('[data-id="play-pause"]')[0];

    if (button.getAttribute("aria-disabled") != "true") {
        button.click()
        if (button.getAttribute("class").includes(" playing"))
            result = "pause";
        else
            result = "play";
    }
}

result;