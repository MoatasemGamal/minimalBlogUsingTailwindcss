import "./style.css";

let dialogs = [...document.getElementsByTagName("dialog")];
dialogs.forEach((dialog) => {
	dialog.addEventListener("click", (event) => {
		if (event.target === dialog) {
			dialog.close();
		}
	});
});

// Function to apply theme and scheme classes
function applyTheme(scheme, theme) {
	const html = document.documentElement;

	// Remove all existing classes from <html>
	html.classList.remove("dark-theme", "light-theme", "accent-purple-theme", "accent-yellow-theme", "accent-blue-theme", "dark");
	let darkEnable = "light";
	if (scheme == "dark") darkEnable = "dark";
	// Add new classes based on user selection
	html.classList.add(`${scheme}-theme`, `accent-${theme}-theme`, `${darkEnable}`);

	// Save preferences to localStorage
	localStorage.setItem("scheme", scheme);
	localStorage.setItem("theme", theme);

	// Update the outline for the buttons in the dialog
	updateDialogOutline(scheme, theme);
}

// Function to update button outlines based on selected scheme and theme
function updateDialogOutline(scheme, theme) {
	const schemeButtons = document.querySelectorAll("#themeDialog .scheme-button");
	const themeButtons = document.querySelectorAll("#themeDialog .theme-button");

	// Remove 'outline' from all buttons first
	schemeButtons.forEach((button) => button.classList.remove("outline"));
	themeButtons.forEach((button) => button.classList.remove("outline"));

	// Add 'outline' to the selected buttons
	document.querySelector(`#themeDialog .scheme-button[data-scheme="${scheme}"]`).classList.add("outline");
	document.querySelector(`#themeDialog .theme-button[data-theme="${theme}"]`).classList.add("outline");
}

// Load saved preferences from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
	const savedScheme = localStorage.getItem("scheme") || "light"; // Default to light
	const savedTheme = localStorage.getItem("theme") || "blue"; // Default to blue
	applyTheme(savedScheme, savedTheme);
});

// Event listeners for buttons
document.getElementById("themeDialog").addEventListener("click", (event) => {
	const button = event.target;

	// If the clicked element is a button
	if (button.tagName === "BUTTON") {
		const schemeButtons = ["Dark", "Light"];
		const themeButtons = ["Blue", "Purple", "Yellow"];

		// Handle scheme change
		if (schemeButtons.includes(button.textContent)) {
			const selectedScheme = button.textContent.toLowerCase();
			applyTheme(selectedScheme, localStorage.getItem("theme") || "blue");
		}

		// Handle theme change
		if (themeButtons.includes(button.textContent)) {
			const selectedTheme = button.textContent.toLowerCase();
			applyTheme(localStorage.getItem("scheme") || "light", selectedTheme);
		}
	}
});
