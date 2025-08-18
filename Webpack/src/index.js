import "./styles.css";
import { greeting } from "./greetings.js";
import odinImage from "./gojo.jpeg";

console.log(greeting);

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
