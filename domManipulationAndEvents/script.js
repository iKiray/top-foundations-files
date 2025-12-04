const container = document.querySelector("#container");


const redPara = document.createElement("p");
redPara.textContent = "Hey I'm Red";
redPara.style.color = "red";
container.appendChild(redPara)

const blueHead = document.createElement("h3");
blueHead.textContent = "I'm a blue h3!";
blueHead.style.color = "blue";
container.appendChild(blueHead);
