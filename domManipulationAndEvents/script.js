const container = document.querySelector("#container");


const redPara = document.createElement("p");
redPara.textContent = "Hey I'm Red";
redPara.style.color = "red";
container.appendChild(redPara)

const blueHead = document.createElement("h3");
blueHead.textContent = "I'm a blue h3!";
blueHead.style.color = "blue";
container.appendChild(blueHead);

const div = document.createElement("div");
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";

const head = document.createElement("h1");
head.textContent = "I'm in a div";
div.appendChild(head);

const para = document.createElement("p");
para.textContent = "ME TOO!";
div.appendChild(para);

container.appendChild(div);
