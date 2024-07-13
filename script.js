const heroElement = document.querySelector("section.hero");
const headerElement = document.querySelector("header");

const heroObserver = new IntersectionObserver(
	(entries) => {
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

  btnScrollToTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
  });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      btnScrollToTop.classList.add("active");
    } else {
      btnScrollToTop.classList.remove("active");
    }
		})

		document.addEventListener("DOMContentLoaded", () => {
			const loadingScreen = document.getElementById("loading-screen");
			const content = document.getElementById("content");
			const page = document.querySelector("html");

			// Add the class to prevent scrolling
			page.classList.add("overflow-hidden");

			// Simulate loading for demonstration purposes
			setTimeout(() => {
				loadingScreen.classList.add("hidden-opacity");
				page.classList.remove("overflow-hidden");
				setTimeout(() => {
					loadingScreen.style.display = "none";
					content.classList.remove("hidden");
					content.classList.add("visible");
				}, 1000); // 1000 milliseconds = 1 second to match the transition duration
			}, 2000); // 2000 milliseconds = 2 seconds
		});
