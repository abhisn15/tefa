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
