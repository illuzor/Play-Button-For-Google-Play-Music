var result = "Play";

var button = document.querySelector('[data-id="play-pause"]')
if (button.getAttribute("aria-disabled") != "true") {
    button.click()
    if (!button.getAttribute("class").includes("playing"))
        result = "Pause";
}
result;
