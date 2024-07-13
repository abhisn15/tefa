// Observer for header scroll effect
const heroElement = document.querySelector("section.hero");
const headerElement = document.querySelector("header");

const heroObserver = new IntersectionObserver(
	function (entries) {
		const [entry] = entries;
		if (!entry.isIntersecting) {
			headerElement.classList.add("scrolled");
		} else {
			headerElement.classList.remove("scrolled");
		}
	},
	{ threshold: 0.9 },
);

heroObserver.observe(heroElement);

// Animation Scroll
const btnScrollToTop = document.querySelector(".btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
	if (window.pageYOffset > 100) {
		btnScrollToTop.classList.add("active");
	} else {
		btnScrollToTop.classList.remove("active");
	}
});

// Loading screen
document.addEventListener("DOMContentLoaded", function () {
	const loadingScreen = document.getElementById("loading-screen");
	const content = document.getElementById("content");
	const page = document.querySelector("html");

	// Add the class to prevent scrolling
	page.classList.add("overflow-hidden");

	// Simulate loading for demonstration purposes
	setTimeout(function () {
		loadingScreen.classList.add("hidden-opacity");
		setTimeout(function () {
			loadingScreen.style.display = "none";
			content.classList.remove("hidden");
			content.classList.add("visible");

			// Remove the class to allow scrolling
			page.classList.remove("overflow-hidden");
		}, 1000); // 1000 milliseconds = 1 second to match the transition duration
	}, 2000); // 2000 milliseconds = 2 seconds
});
