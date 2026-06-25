const btn = document.getElementById("btn");
const colorBox = document.querySelector(".color-box");
const colorCode = document.getElementById("color-code");

btn.addEventListener("click", () => {

    const randomColor =
        "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    colorBox.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;

});