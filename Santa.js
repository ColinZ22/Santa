function getNewImage() {
    // Appends a time stamp to the end of the link to force the browser to fetch a new image
    var timestamp = new Date().getTime();
    var image = document.getElementById("PersonImage");
    image.src="https://thispersondoesnotexist.com/image?" + timestamp;
    showLoading();
    //Continue to show the loading screen for 1.5 seconds before revealing the result
    setTimeout(revealResult, 1500);
}

function showLoading() {
    // Show the loading screen and hide the result
    document.getElementById("loader").style.display = "block";
    document.getElementById("result").style.display = "none";
}

function revealResult() {
    // Hide the loading screen and show the result
    document.getElementById("loader").style.display = "none";
    // Randomly choose between believer and denier
    if (Math.random() > 0.5) {
        document.getElementById("type").innerHTML = "Believer";
        document.getElementById("result").style.backgroundColor = "#34A65F";
    } else {
        document.getElementById("type").innerHTML = "Denier";
        document.getElementById("result").style.backgroundColor = "#DB241B";
    }
    result.style.display = "block";
}
