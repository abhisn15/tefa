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