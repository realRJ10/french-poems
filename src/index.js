function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Here lies the poem...",
    autoStart: true,
    delay: 1,
  });
}

let poemForm = document.querySelector("#poem-gen-form");
poemForm.addEventListener("submit", generatePoem);
