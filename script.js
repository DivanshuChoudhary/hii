const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copy-btn");
const themeBtn = document.getElementById("theme-btn");

const colorBox = document.querySelector(".color-box");
const colorCode = document.getElementById("color-code");
const history = document.getElementById("history");
const toast = document.getElementById("toast");


// Load Saved Theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀️ Light Mode";

}


// Generate Random Gradient

btn.addEventListener("click", () => {

    const color1 =
        "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    const color2 =
        "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    const gradient =
        `linear-gradient(45deg, ${color1}, ${color2})`;

    colorBox.style.background = gradient;
    document.body.style.background = gradient;

    colorCode.textContent =
        `${color1} → ${color2}`;

    const colorItem = document.createElement("div");

    colorItem.classList.add("history-color");
    colorItem.style.background = gradient;

    history.prepend(colorItem);

    // Keep only last 5 colors

    if (history.children.length > 5) {
        history.removeChild(history.lastElementChild);
    }

    // Reuse old color

    colorItem.addEventListener("click", () => {

        colorBox.style.background = gradient;
        document.body.style.background = gradient;

        colorCode.textContent =
            `${color1} → ${color2}`;

    });

});


// Copy Color Code

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(
        colorCode.textContent
    );

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

});


// Dark Mode Toggle

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

    }

});


// Spacebar Shortcut

document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {

        event.preventDefault();

        btn.click();

    }

});