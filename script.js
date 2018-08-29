// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = 'sine';
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.start();

var toggleButton = document.getElementById("play");
console.log(toggleButton);

toggleButton.onclick = function() {
    if (toggleButton.id === "play") {
        oscillator.connect(audioCtx.destination);
        toggleButton.id = "stop";
        toggleButton.innerHTML = "Stop tone";
    } else {
        oscillator.disconnect(audioCtx.destination);
        toggleButton.innerHTML = "Play tone";
        toggleButton.id = "play";
    }
}