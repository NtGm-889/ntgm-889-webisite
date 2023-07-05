function botTest() {
	let text;
	let question = prompt("Bot test:\nWhat is the name of his main character?");
		switch(question) {
			case "Enty":
			case "enty":
			case "ENTY":
				text = "Acceptable.";
				location.replace("mailto:contactntgm889@gmail.com?subject=Feedbaque")
			break;
			case "Enty Atyne":
			case "enty atyne":
			case "ENTY ATYNE":
				text = "Correct.";
				location.replace("mailto:contactntgm889@gmail.com?subject=Feedbaque")
			break;
			default:
				text = "INCORRECT. TRY AGAIN.";
		}
	document.getElementById("wrong").innerHTML = text;
}