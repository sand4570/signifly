import "./sass/style.scss";

//-----------change on scroll----------------
window.onscroll = function () {
	navScroll();
};

function navScroll() {
	if (document.documentElement.scrollTop > 0) {
		document.querySelector("nav").classList.add("scrolled");
		document.querySelector("h1").classList.add("animate");
		document.querySelector("#heading p").classList.add("animate");
		document.querySelector("#h1_second").classList.add("animate");
	} else {
		document.querySelector("nav").classList.remove("scrolled");
		document.querySelector("h1").classList.remove("animate");
		document.querySelector("#heading p").classList.remove("animate");
		document.querySelector("#h1_second").classList.remove("animate");
	}

	if (document.documentElement.scrollTop > 200) {
		document.querySelector("#button_wrapper").classList.add("button_animate");
	} else {
		document.querySelector("#button_wrapper").classList.remove("button_animate");
	}
}
