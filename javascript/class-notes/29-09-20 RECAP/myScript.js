const colors = ["red", "blue", "gray", "green", "purple"];

const randomColorButton = document.querySelector("#randomColorButton");
const addColorButton = document.querySelector("#setColorButton");

addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColors);
// buttonElement.addEventListener("click", () => changeColors());
// buttonElement.addEventListener("click", function () {
//   changeColors();
// });

// 1) Arrayden rastgele element seçmek
function changeColors() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    
    document.querySelector("#colorName").innerText = colors[randomIndex];
    document.querySelector("body").style.backgroundColor = colors[randomIndex];
}

// 1) Kullanıcının girdiği stringi renk listesine eklemek ve arkaplanı o renk ile renklendirmek 
function addColor() {
    const userInput = document.querySelector(".colorInput");

    document.querySelector("body").style.backgroundColor = userInput.nodeValue;
}