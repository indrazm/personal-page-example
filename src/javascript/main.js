import Typed from "typed.js";
import confetti from "canvas-confetti";

const emailForm = document.getElementById("form");

new Typed("#heading", {
  strings: ["Hey There!", "I am a Product Designer.", "Software Engineer.", "and an Indie maker."],
  typeSpeed: 78,
  backSpeed: 50,
  loop: true,
  cursorChar: "_",
});

emailForm.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    emailForm.value = "";
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });
    confetti({ particleCount: 400, spread: 320 });
    canvas.remove();
  }
});
