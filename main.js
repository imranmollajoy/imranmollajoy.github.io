const joy = document.getElementById("hero-joy");
const projectsText = document.getElementById("projects-text");
const j1 = document.getElementById("job1");
const j2 = document.getElementById("job2");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const spacing = Math.min(scrollY / 2, 1500);
  joy.style.letterSpacing = spacing + "px";

  if (scrollY < 50) {
    j1.textContent = "app developer";
    j2.textContent = "graphic designer";
  } else if (scrollY > 50 && scrollY < 100) {
    j1.textContent = "wpp developer";
    j2.textContent = "wraphic designer";
  } else if (scrollY > 100 && scrollY < 150) {
    j1.textContent = "wep developer";
    j2.textContent = "weaphic designer";
  } else if (scrollY > 150 && scrollY < 200) {
    j1.textContent = "web developer";
    j2.textContent = "webphic designer";
  } else if (scrollY > 200 && scrollY < 250) {
    j2.textContent = "webshic designer";
  } else if (scrollY > 250 && scrollY < 300) {
    j2.textContent = "websiic designer";
  } else if (scrollY > 300 && scrollY < 350) {
    j2.textContent = "websitc designer";
  } else if (scrollY > 350 && scrollY < 400) {
    j2.textContent = "website designer";
  }
});
