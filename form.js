function wins_slider(argument) {
	var value = argument.currentTarget.value;
	document.getElementById('wins').innerHTML = value + " win" + (value==1?"":"s");
	update_total();
}

function update_total() {
	var total = 0;
	var multiplier = 1.0;

	var wins = document.getElementById('wins_amount').value;
	wins = +wins;

	var valuePerGame = 10;
	if (document.getElementById('9_more_special').checked) {
		valuePerGame += 5;
	}
	if (document.getElementById('stream_special').checked) {
		valuePerGame += 2;
	}

	total += wins * valuePerGame;
	if (wins >= 5) {
		if (wins < 10) {
			total -= 5;
		} else {
			total -= ((wins - (wins % 5)) / 5) * valuePerGame;
		}
	}

	// Does not work, bug?
	//var mode ≃ document.querySelector("input[name=wins_mode]:checked").value;
	
	if (document.querySelector("input[name=wins_mode]:checked").value == "duo") {
		multiplier += 0.4;
	} else if (document.querySelector("input[name=wins_mode]:checked").value == "squad") {
		multiplier += 0.8;
	}

	if (document.getElementById('coupon').value.trim().toLowerCase() == "fortnite1") {
		multiplier -= 0.1;
	}

	document.getElementById('total').innerHTML = "$" + (total * multiplier).toFixed(2);
}