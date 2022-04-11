const generateBtn = document.getElementById("generate-btn");
console.log(generateBtn);

generateBtn.addEventListener("click", function () {
	const userName = document.getElementById("user-name-input").value;
	console.log(userName);

	const tripKms = document.getElementById("kms-input").value;
	console.log(tripKms);

	const userAge = document.getElementById("age-select").value;
	console.log(userAge);

	if (isNaN(tripKms)) {
		alert("kms numero");
	}

	const defaultPrice = 0.21 * tripKms;

	// OFFER - FINAL PRICE
	let offer;
	let finalPrice;

	if (userAge === "under-18") {
		offer = "Under 18";
		finalPrice = defaultPrice * 0.8;
	} else if (userAge === "over-18") {
		offer = "Nessuna";
		finalPrice = defaultPrice;
	} else if (userAge === "over-65") {
		offer = "Silver";
		finalPrice = defaultPrice * 0.6;
	}

	// SHOW AND POPULATE TICKET
	const ticket = document.getElementById("ticket");
	ticket.classList.remove("d-none");

	const userNameOutput = document.querySelector(".user-details h4");
	userNameOutput.innerHTML += userName;

	const offerOutput = document.getElementById("offer-details");
	offerOutput.innerHTML = offer;

	const carriageNumber = Math.floor(Math.random() * 9 + 1);
	document.getElementById("carriage-details").innerHTML = carriageNumber;

	const cpCode = Math.floor(Math.random() * (99999 - 90000)) + 90000;
	document.getElementById("cp-code-details").innerHTML = cpCode;

	const priceOutput = document.getElementById("ticket-price-details");
	priceOutput.innerHTML += finalPrice.toFixed(2);
});

//CANCEL BUTTON
const cancelBtn = document.getElementById("cancel-btn");

cancelBtn.addEventListener("click", function () {
	window.location.reload();

	//I COMANDI SEGUENTI PULISCONO INPUT E OUTPUT SOLO IN APPARENZA
	// document.getElementById("user-name-input").value = "";
	// document.getElementById("kms-input").value = "";
	// document.getElementById("age-select").value = "";

	// document.getElementById("ticket").className = "d-none";

	// document.getElementById("user-name").innerHTML = "";
	// document.getElementById("offer-details").innerHTML = "";
	// document.getElementById("carriage-details").innerHTML = "";
	// document.getElementById("cp-code-details").innerHTML = "";
	// document.getElementById("ticket-price-details").innerHTML = "";
});
