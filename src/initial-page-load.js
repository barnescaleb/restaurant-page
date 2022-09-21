export function initialPageLoad() {

    const contentDiv = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "The Dog Barn Cafe";
    header.classList.add("landing-page");
    contentDiv.appendChild(header);

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/imgs/restaurant-bar-coffee-shop.jpeg";
    topImage.alt = "Image of Restaurant";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page");
    para1.textContent = "Enjoy your time at this upscale coffee restaurant with your floofy friend";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page");
    para2.textContent = "Please make sure to clean up after your pet before you leave the cafe";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para3.classList.add("landing-page");
    para3.textContent = "Thanks, Owner";
    contentDiv.appendChild(para3);

}