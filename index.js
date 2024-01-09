var audio = new Audio(); // Create a single Audio object

document.addEventListener("keydown", playSound);

function playSound(evt) {
    switch (evt.keyCode) {
        case 87: // W key
            audio.src = 'sounds/crash.mp3';
            break;
        case 65: // A key
            audio.src = 'sounds/tom-1.mp3';
            break;
        case 83: // S key
            audio.src = 'sounds/tom-2.mp3';
            break;
        case 68: // D key
            audio.src = 'sounds/kick.mp3';
            break;
        case 74: // J key
            audio.src = 'sounds/tom-3.mp3';
            break;
        case 75: // K key
            audio.src = 'sounds/tom-4.mp3';
            break;
        case 76: // L key
            audio.src = 'sounds/snare.mp3';
            break;
    }
    audio.play(); // Play the audio
}