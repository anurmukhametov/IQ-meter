const iqLabel = document.getElementById("iqLabel");
const input = document.getElementById("input");
const JENYA = "JENYA";
const ROMA = "ROMA";
const CHAGER = "CHAGER";

const highIqSrc = "https://c.tenor.com/hk1_kLT1i5kAAAAd/brain-meme.gif";
const lowIqSrc =
	"https://c.tenor.com/dGeybdsH81QAAAAd/guy-singing-opera-opera.gif";

const div = document.createElement("div");
div.classList.add("gif-container");
div.id = "gif-container";

const gif = document.createElement("img");
gif.classList.add("gif");
gif.alt = "gif";

function isKyr(str) {
	return /[а-я]/i.test(str);
}

function calculateId() {
	if (input.value === "") {
		iqLabel.textContent =
			"Your IQ is 0 because you didn't enter your name!";
		removeGif();
	} else if (isKyr(input.value)) {
		iqLabel.textContent = "Please enter your name in Latin letters!";
		removeGif();
	} else if (input.value.length > 15) {
		iqLabel.textContent = "Sorry your name is too looooong";
		removeGif();
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
		if (result >= 100) {
			addGif(highIqSrc);
		} else {
			addGif(lowIqSrc);
		}
	}
}

function addGif(scr) {
	gif.src = scr;
	div.appendChild(gif);
	document.body.appendChild(div);
}

function removeGif() {
	const gif = document.getElementById("gif-container");
	if (gif) gif.remove();
}
