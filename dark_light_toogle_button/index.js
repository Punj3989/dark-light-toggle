const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check localStorage for theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode"); // ✅ Add the correct class
    toggleButton.textContent = "☀︎ Light Mode"; // ✅ Correct text assignment
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☾ Dark Mode"; // ✅ Correct emoji and text
        localStorage.setItem("theme", "dark"); // ✅ Save preference
    } else {
        toggleButton.textContent = "☀︎ Light Mode";
        localStorage.setItem("theme", "light");
    }
});
