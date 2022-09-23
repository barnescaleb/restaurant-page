export function dog() {

    const contentDiv = document.querySelector("#content");

    // Removes existing DOM 
    contentDiv.replaceChildren();

    // Appends Header
    const header = document.createElement("h1");
    header.textContent = "FL00FER Menu";
    header.classList.add("landing-page");
    contentDiv.appendChild(header); 

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/imgs/husky.jpeg";
    topImage.alt = "Image of Dog & Cup";
    contentDiv.appendChild(topImage);
}