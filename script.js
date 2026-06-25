const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copy-btn");
const themeBtn = document.getElementById("theme-btn");

const colorBox = document.querySelector(".color-box");
const colorCode = document.getElementById("color-code");
const history = document.getElementById("history");

btn.addEventListener("click", () => {

   const color1 =
    "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

const color2 =
    "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

colorBox.style.background =
    `linear-gradient(45deg, ${color1}, ${color2})`;

document.body.style.background =
    `linear-gradient(45deg, ${color1}, ${color2})`;

colorCode.textContent =
    `${color1} → ${color2}`;

    const colorItem = document.createElement("div");

    colorItem.classList.add("history-color");
    colorItem.style.background =
    `linear-gradient(45deg, ${color1}, ${color2})`;
    history.prepend(colorItem);

    colorItem.addEventListener("click", () => {
colorBox.style.background =
    `linear-gradient(45deg, ${color1}, ${color2})`;

document.body.style.background =
    `linear-gradient(45deg, ${color1}, ${color2})`;

colorCode.textContent =
    `${color1} → ${color2}`;
    });

});

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(colorCode.textContent);

    alert(`Copied: ${colorCode.textContent}`);

});

history.prepend(colorItem);

if (history.children.length > 5) {
    history.removeChild(history.lastElementChild);
}

colorItem.addEventListener("click", () => {

    colorBox.style.backgroundColor = randomColor;
    document.body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;

});

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.textContent = "☀️ Light Mode";
    }else{
        themeBtn.textContent = "🌙 Dark Mode";
    }

});