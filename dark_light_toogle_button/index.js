const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check localStorage for theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("");
        toggleButton.textContent = "☀︎";
    toggleButton.textContent = " Light Mode";
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "⏾ Dark Mode";
        localStorage.setItem("theme", "dark"); // Save preference
    } else {
        toggleButton.textContent = "☀︎ Light Mode";
        localStorage.setItem("theme", "light"); // Save preference
    }
});
