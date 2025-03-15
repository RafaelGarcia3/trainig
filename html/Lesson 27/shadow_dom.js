//To create a simple element in the shadow DOM
const host = document.querySelector("#host");

//Creates a shadow DOM root in the host element. 
//Open means that the shadow DOM can be accessed from JS usign shadowRoot property
const shadow = host.attachShadow({ mode: "open" });

const span = document.createElement("span");
span.textContent = "I'm in the shadow DOM";

//Appends the span element to the shadow DOM of the host
shadow.appendChild(span);


//To access to the Shadow DOM elements
const upper = document.querySelector("button#upper");
upper.addEventListener("click", () => {
  const spans = Array.from(host.shadowRoot.querySelectorAll("span"));
  for (const span of spans) {
    span.textContent = span.textContent.toUpperCase();
  }
});

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
