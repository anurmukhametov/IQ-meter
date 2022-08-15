const iqLabel = document.getElementById("iqLabel");
const input = document.getElementById("input");
const JENYA = "JENYA";
const ROMA = "ROMA";
const CHAGER = "CHAGER";
var isKyr = function (str) {
	return /[а-я]/i.test(str);
};
function calculateId() {
	if (input.value === "") {
		iqLabel.textContent =
			"Your IQ is 0 because you didn't enter your name!";
	} else if (isKyr(input.value)) {
		iqLabel.textContent = "Please enter your name in Latin letters!";
	} else if (input.value.length > 15) {
		iqLabel.textContent = "Sorry your name is too looooong";
	} else {
		let result;
		switch (input.value.toUpperCase()) {
			case JENYA:
				result = 0;
				break;
			case ROMA:
				result = Number.MAX_SAFE_INTEGER;
				break;
			case CHAGER:
				result = "WATERMELON";
				break;
			default:
				result = Math.floor(Math.random() * 200);
				break;
		}
		iqLabel.textContent = `${input.value} IQ: ${result}`;
	}
}
