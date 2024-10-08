AOS.init();

// getFullYear
const getYear = document.getElementById('getYear');
const d = new Date();
let year = d.getFullYear()
getYear.innerHTML = year;

// Observer for header scroll effect
const heroElement = document.querySelector("section.hero");
const headerElement = document.querySelector("header");
const logoElement = document.getElementById('logo');

const heroObserver = new IntersectionObserver(
	function (entries) {
		const [entry] = entries;
		if (!entry.isIntersecting) {
			headerElement.classList.add("scrolled");
			logoElement.src = "./assets/logo.svg"; // Kembalikan ke logo asli saat tidak di-scroll
		} else {
			headerElement.classList.remove("scrolled");
			logoElement.src = "./assets/logo-putih.svg"; // Ganti href dengan src
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
		page.classList.remove("overflow-hidden");
		setTimeout(function () {
			loadingScreen.style.display = "none";
			content.classList.remove("hidden");
			content.classList.add("visible");

			// Remove the class to allow scrolling
		}, 1000); // 1000 milliseconds = 1 second to match the transition duration
	}, 2000); // 2000 milliseconds = 2 seconds
});

document.addEventListener("DOMContentLoaded", function () {
	const favicon = document.getElementById("favicon");

	function updateFavicon() {
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			// Jika dark mode
			favicon.href = "./assets/logo-putih.svg";
		} else {
			// Jika light mode
			favicon.href = "./assets/logo.svg";
		}
	}

	// Panggil fungsi saat halaman dimuat
	updateFavicon();

	// Pantau perubahan pada preferensi warna
	if (window.matchMedia) {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", updateFavicon);
	}
});
document.addEventListener("DOMContentLoaded", function () {
	var original = document.querySelector(".logos-slide");
	var clone = original.cloneNode(true);
});

  // Ambil semua elemen tab
  const tabs = document.querySelectorAll(".tabs h3");
  const contents = document.querySelectorAll(".tab-content > div");

  // Fungsi untuk menghilangkan kelas active
  function removeActiveClass() {
    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));
  }

  // Menambahkan event listener untuk setiap tab
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      removeActiveClass(); // Menghilangkan kelas active dari semua tab dan konten
      tab.classList.add("active"); // Menambahkan kelas active pada tab yang diklik
      contents[index].classList.add("active"); // Menampilkan konten yang sesuai dengan tab
    });
	});
	
  // Ambil semua elemen tab
  const tabe = document.querySelectorAll(".tabe h3");
  const konten = document.querySelectorAll(".tab-contents > div");

  // Fungsi untuk menghilangkan kelas active
  function menghapusClassActivet() {
    tabe.forEach(teb => teb.classList.remove("activet"));
    konten.forEach(kontens => kontens.classList.remove("activet"));
  }

  // Menambahkan event listener untuk setiap tab
  tabe.forEach((teb, index) => {
    teb.addEventListener("click", () => {
      menghapusClassActivet(); // Menghilangkan kelas active dari semua tab dan konten
      teb.classList.add("activet"); // Menambahkan kelas active pada tab yang diklik
      konten[index].classList.add("activet"); // Menampilkan konten yang sesuai dengan tab
    });
  });