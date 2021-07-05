function timeToDeg() {
	const now = new Date();
	const sec = now.getSeconds();
	const min = now.getMinutes();
	const hours = now.getHours();

	return {
		sec: sec * 6 + 90,
		min: min * 6 + 90,
		hours: hours * 30 + 90
	}
} 

(function() {
	const minHand = document.querySelector('.min-hand');
	const secHand = document.querySelector('.sec-hand');
	const hourHand = document.querySelector('.hour-hand');

	setInterval(() => {
		const timeInDeg = timeToDeg();

		secHand.style.transform = `rotate(${timeInDeg.sec}deg)`;
		minHand.style.transform = `rotate(${timeInDeg.min}deg)`;
		hourHand.style.transform = `rotate(${timeInDeg.hours}deg)`;
	}, 1000);
})()