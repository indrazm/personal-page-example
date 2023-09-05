import Typed from "typed.js";
import confetti from "canvas-confetti";

const emailForm = document.getElementById("form");

const typed = new Typed("#heading", {
  strings: ["Hey There!", "I am a Product Designer.", "Software Engineer.", "and Fullstack Indiemaker."],
  typeSpeed: 78,
  backSpeed: 50,
  loop: true,
  cursorChar: "_",
});

emailForm.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    confetti.create(canvas, {
      resize: true,
      useWorker: true,
    });
    confetti({ particleCount: 200, spread: 200 });
    canvas.remove();
  }
});
