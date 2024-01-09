var audio = new Audio();

document.addEventListener("keydown", playSound);

function playSound(evt) {
    var key;
    switch (evt.keyCode) {
        case 87: // W key
            audio.src = 'sounds/crash.mp3';
            key = 'w';
            break;
        case 65: // A key
            audio.src = 'sounds/tom-1.mp3';
            key = 'a';
            break;
        case 83: // S key
            audio.src = 'sounds/tom-2.mp3';
            key = 's';
            break;
        case 68: // D key
            audio.src = 'sounds/kick.mp3';
            key = 'd';
            break;
        case 74: // J key
            audio.src = 'sounds/tom-3.mp3';
            key = 'j';
            break;
        case 75: // K key
            audio.src = 'sounds/tom-4.mp3';
            key = 'k';
            break;
        case 76: // L key
            audio.src = 'sounds/snare.mp3';
            key = 'l';
            break;
    }
    audio.play();
    addAnimation(key)
}

function addAnimation(key) {

    var element = document.getElementById(key);
    element.classList.add("pressed");

    setTimeout(function() {
        element.classList.remove("pressed");
    }, 500);

}