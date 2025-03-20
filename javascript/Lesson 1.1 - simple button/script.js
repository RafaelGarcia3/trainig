//This function createa a paragrpah and append it to the page.
function createParagraph() {
    const paragraph = document.createElement("p");
    paragraph.textContent = "You clicked the button!";
    document.body.appendChild(paragraph);
}

//Selects all buttons on the document
const buttons = document.querySelectorAll("button");

//Event listener for when users click
for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}
