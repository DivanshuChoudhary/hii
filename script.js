const btn = document.getElementById("btn");
const copyBtn = document.getElementById("copy-btn");
const colorBox = document.querySelector(".color-box");
const colorCode = document.getElementById("color-code");
const history = document.getElementById("history");

btn.addEventListener("click", () => {

    const randomColor =
        "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;

    const colorItem = document.createElement("div");

    colorItem.classList.add("history-color");
    colorItem.style.backgroundColor = randomColor;

    history.prepend(colorItem);

    colorItem.addEventListener("click", () => {

        colorBox.style.backgroundColor = randomColor;
        document.body.style.backgroundColor = randomColor;
        colorCode.textContent = randomColor;

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