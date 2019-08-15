function showHideSection(section){
	var x = document.getElementById(section);
	if (x.style.display === "none") {
		x.style.display = "block";
		document.getElementById("show/hide").innerHTML = "Hide BIO"
	}else{
		x.style.display = "none";
		document.getElementById("show/hide").innerHTML = "Show BIO"
	}
