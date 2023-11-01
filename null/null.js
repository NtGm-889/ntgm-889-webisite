var x = 0;
function nyllChange() {
	if (x == 0) {
		document.body.style.backgroundColor = "#f00";
		x += 1;
		var audio = new Audio('https://cdn.discordapp.com/attachments/1091916597586837547/1169179246544027659/nyll-note1.ogg');
		audio.play();
		return;
	}
	else if (x == 1) {
		document.body.style.backgroundColor = "#0f0";
		x += 1;
		var audio = new Audio('https://cdn.discordapp.com/attachments/1091916597586837547/1169179259617677382/nyll-note2.ogg');
		audio.play();
		return;
	}
	else if (x == 2) {
		document.body.style.backgroundColor = "#00f"; // https://www.youtube.com/watch?v=SV2AsMDgRNI
		x += 1;
		var audio = new Audio('https://cdn.discordapp.com/attachments/1091916597586837547/1169179277590286386/nyll-note3.ogg');
		audio.play();
		return;
	}
	else if (x == 3) {
		document.body.style.backgroundColor = "#ff0";
		x -= 3;
		var audio = new Audio('https://cdn.discordapp.com/attachments/1091916597586837547/1169179291418890280/nyll-note4.ogg');
		audio.play();
		return;
	}
}