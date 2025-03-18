document.querySelector(".hamburger").addEventListener("click", function () {
	const navMenu = document.getElementById("navMenu");
	navMenu.classList.toggle("active");

	// Toggle hamburger icon between bars and X
	const hamburgerIcon = this.querySelector("i");
	if (hamburgerIcon.classList.contains("fa-bars")) {
		hamburgerIcon.classList.remove("fa-bars");
		hamburgerIcon.classList.add("fa-xmark");
	} else {
		hamburgerIcon.classList.remove("fa-xmark");
		hamburgerIcon.classList.add("fa-bars");
	}
});
