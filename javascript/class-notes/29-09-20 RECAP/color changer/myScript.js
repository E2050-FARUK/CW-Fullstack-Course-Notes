// Change The Colors!

const colors = [
    {
      name: "red",
      motto: "Rose Red",
    },
    {
      name: "blue",
      motto: "Ocean Blue",
    },
    {
      name: "gray",
      motto: "Smoke Gray",
    },
    {
      name: "green",
      motto: "Grass Green",
    },
    {
      name: "purple",
      motto: "Deep Purple",
    },
  ];

const randomColorButton = document.querySelector("#randomColorButton");
const setColorButton = document.querySelector("#setColorButton");


randomColorButton.addEventListener("click", changeColors);
setColorButton.addEventListener("click", setColors);

function changeColors() {
    const randomIndex = Math.floor(Math.random()*colors.length);
    document.querySelector("#colorName").innerHTML = colors[randomIndex].name;
    document.querySelector("#colorDesc").innerHTML = colors[randomIndex].motto;


    document.querySelector("body").style.backgroundColor = colors[randomIndex].name;
}

function setColors() {
    const userInput = document.querySelector(".colorInput");

    const colorData = userInput.value.split(":");
    const colorObject = {
        name : colorData[0],
        motto : colorData[1],
    };

    // if(userInput.value == "") {
    //   alert("Please enter color name and description!");
    // }

    const searchedColorIndex = colors.findIndex(
        (myColor) => myColor.name === colorObject.name
    );

    if(searchedColorIndex === -1) {
        document.querySelector("body").style.backgroundColor = colorObject.name;
        document.querySelector("#colorName").textContent = colorObject.name;
        document.querySelector("#colorDesc").textContent = colorObject.motto;

        colors.push(colorObject);
        userInput.value = "";
        userInput.focus();
    } else {
        alert("Renk zaten mevcut");
    }
  
}

