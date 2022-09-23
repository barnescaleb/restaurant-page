export function contact() {

    const contentDiv = document.querySelector("#content");

    // Removes existing DOM 
    contentDiv.replaceChildren();

    // Appends Header
    const header = document.createElement("h1");
    header.textContent = "Floofer Menu";
    header.classList.add("landing-page");
    contentDiv.appendChild(header); 
}