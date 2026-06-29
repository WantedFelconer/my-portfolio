const locationElement = document.getElementById("location");

if (locationElement) {
  locationElement.innerHTML =
    "<strong>Current Page:</strong> " + window.location.href;
}

const modifiedElement = document.getElementById("modified");

if (modifiedElement) {
  modifiedElement.innerHTML =
    "<strong>Last Modified:</strong> " + document.lastModified;
}

const toggleButton = document.createElement("button");

toggleButton.innerHTML = "🌙";

toggleButton.id = "themeToggle";

document.body.appendChild(toggleButton);

toggleButton.style.position = "fixed";
toggleButton.style.right = "20px";
toggleButton.style.bottom = "20px";
toggleButton.style.width = "55px";
toggleButton.style.height = "55px";
toggleButton.style.borderRadius = "50%";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
toggleButton.style.fontSize = "22px";
toggleButton.style.background = "#3B82F6";
toggleButton.style.color = "white";
toggleButton.style.boxShadow = "0 8px 25px rgba(0,0,0,.3)";
toggleButton.style.zIndex = "9999";

let darkMode = true;

toggleButton.addEventListener("click", () => {
  if (darkMode) {
    document.body.style.background = "#F8FAFC";
    document.body.style.color = "#111827";

    document
      .querySelectorAll(".card,.project,blockquote")
      .forEach((element) => {
        element.style.background = "#ffffff";
        element.style.color = "#111827";
      });

    document.querySelector("header").style.background = "rgba(255,255,255,.85)";

    toggleButton.innerHTML = "☀️";

    darkMode = false;
  } else {
    location.reload();
  }
});

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.left = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.background = "#2563EB";
topButton.style.color = "white";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 25px rgba(0,0,0,.3)";
topButton.style.zIndex = "9999";

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

const progressBar = document.createElement("div");

progressBar.id = "progressBar";

document.body.appendChild(progressBar);

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#3B82F6";
progressBar.style.zIndex = "99999";

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + "%";
});

const revealElements = document.querySelectorAll("section");

function reveal() {
  revealElements.forEach((section) => {
    const top = section.getBoundingClientRect().top;

    const visible = 150;

    if (top < window.innerHeight - visible) {
      section.style.opacity = "1";

      section.style.transform = "translateY(0px)";
    }
  });
}

revealElements.forEach((section) => {
  section.style.opacity = "0";

  section.style.transform = "translateY(40px)";

  section.style.transition = "all .8s ease";
});

window.addEventListener("scroll", reveal);

reveal();

const heroHeading = document.querySelector("#hero h3");

const words = [
  "Computer Science Student",

  "Flutter Developer",

  "AI Enthusiast",

  "Full Stack Developer",
];

let wordIndex = 0;

function changeText() {
  heroHeading.textContent = words[wordIndex];

  wordIndex++;

  if (wordIndex >= words.length) {
    wordIndex = 0;
  }
}

setInterval(changeText, 2500);

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "white";

    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#60A5FA";
    }
  });
});
