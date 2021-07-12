class CoolTransition {
	createTransition(panel) {
		panel.addEventListener('click', this.toggleOpen);
		panel.addEventListener('transitionend', this.transition);
	}

	toggleOpen() {
		this.classList.toggle('open');
	}

	transition(e) {
		if (!e.propertyName.includes('flex')) return;
		this.classList.toggle('open-active');
	}
}

const panels = document.querySelectorAll('.panel');
const cool = new CoolTransition();

panels.forEach(panel => {
	cool.createTransition(panel);
});