function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let apiKey = "663fba8bo73844f66a1c35190804a92t";
  let instructionsInput = document.querySelector("#user-instructions");
  let context =
    "You are a Romantic Poet AI specializing in crafting unique French poetry. your purpose is to generate a short poem in basic HTML example:<h1>love</h1> seperate each line with </br>. don't type (```html). make sure to follow user instructions.";
  let prompt = `user instructions are: generate a french poem about ${instructionsInput.value}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blinking-text"> Thinking... </div>`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showPoem);
}

let poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit", generatePoem);
