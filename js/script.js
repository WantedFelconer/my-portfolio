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
      .querySelectorAll(".card, .project, blockquote")
      .forEach((element) => {
        element.style.background = "#ffffff";
        element.style.color = "#111827";
      });

    const header = document.querySelector("header");
    if (header) {
      header.style.background = "rgba(255,255,255,.85)";
    }

    toggleButton.innerHTML = "☀️";
    darkMode = false;
  } else {
    location.reload();
  }
});
