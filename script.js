const iqLabel = document.getElementById("iqLabel");
const input = document.getElementById("input");
const JENYA = "JENYA";
const ROMA = "ROMA";
const CHAGER = "CHAGER";

const div = document.createElement("div");
div.classList.add("gif-container");
div.id = "gif-container";
const gif = document.createElement("img");
gif.src = "https://c.tenor.com/D0MsEp72YkUAAAAd/sueta-oper.gif";
gif.classList.add("gif");
gif.alt = "sueta";
div.appendChild(gif);

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
				addSueta();
				iqLabel.textContent = `${input.value} IQ: ${result}`;
				return;
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
	removeSueta();
}

function addSueta() {
	document.body.appendChild(div);
}

function removeSueta() {
	const sueta = document.getElementById("gif-container");
	if (sueta) sueta.remove();
}
