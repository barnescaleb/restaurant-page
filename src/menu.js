export function menu() {

    const contentDiv = document.querySelector("#content");

    // Removes existing DOM children if there
    contentDiv.replaceChildren();

    // DOM Header
    const header = document.createElement("h1");
    header.textContent = "H00MAN Menu";
    header.classList.add("landing-page");
    contentDiv.appendChild(header); 

}