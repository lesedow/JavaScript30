function playAudio(event) {

	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

	if (!audio) return;

	audio.play();
	audio.currentTime = 0;
	changeKeyStyle(key);
}

function checkTransition(event) {
	if (event.propertyName !== 'color' && event.propertyName !== "background-color") return

	this.classList.remove('playing');
}

function changeKeyStyle(key) {
	key.classList.add('playing');
	key.addEventListener('transitionend', checkTransition);
}

window.addEventListener('keydown', playAudio);