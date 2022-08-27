myButton = document.getElementById("myBtn");


function scrollFunctionBTT() {
	if (document.documentElement.scrollTop > 90) {
		myBtn.style.display = "block";
	} else {
		myBtn.style.display = "none";
	}
}


function topFunction() {
	document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", scrollFunctionBTT)



document.getElementById("click-1").onclick = function () {
	window.open("https://www.behance.net/gallery/149889645/Easy-Exchange-App-Case-Study", "_blank")
};

document.getElementById("click-2").onclick = function () {
	window.open("https://www.behance.net/gallery/147615285/Cultural-Website-UX-Project", "_blank")
};

document.getElementById("click-3").onclick = function () {
	window.open("https://www.behance.net/gallery/145796659/Road-Optimization-Product-Design-Case-Study", "_blank")
};

document.getElementById("click-4").onclick = function () {
	window.open("https://www.behance.net/gallery/124389011/UIUX-Design-Mobile-App-%28-House-Buying-Application%29", "_blank")
};



//Modal



var modal = document.getElementById("myModal");


var btn = document.getElementById("click-5");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}