const corners = document.querySelectorAll(".corner");
const popup = document.getElementById("popup");
const main = document.getElementById("main");
let activecorner = null;

corners.forEach(corner => {
  corner.addEventListener("click", (e) => {
    e.stopPropagation();
    activecorner = corner;

    const rect = corner.getBoundingClientRect();
    const boxrect = main.getBoundingClientRect();
    const top = rect.top - boxrect.top;
    const left = rect.left - boxrect.left;

    popup.style.top = top + "px";
    popup.style.left = left + "px";
    popup.style.display = "flex";
  });
});

document.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const choice = btn.dataset.choice;
    const letter = activecorner.dataset.corner;
    applyRules(letter, choice);
    popup.style.display = "none";
  });
});

function applyRules(letter, choice) {

  if (letter === "A" && choice === "TRUE") {
    setColors({ A: "green", E: "red", I: "green", O: "red" });
  } else if (letter === "A" && choice === "FALSE") {
    setColors({ A: "red", E: "orange", I: "orange", O: "red" });
  }

  else if (letter === "E" && choice === "TRUE") {
    setColors({ E: "green", I: "red", O: "green", A: "red" });
  } else if (letter === "E" && choice === "FALSE") {
    setColors({ E: "red", I: "green", O: "orange", A: "orange" });
  }

  else if (letter === "I" && choice === "TRUE") {
    setColors({ I: "green", O: "orange", A: "orange", E: "red" });
  } else if (letter === "I" && choice === "FALSE") {
    setColors({ I: "red", O: "green", A: "red", E: "green" });
  }

  else if (letter === "O" && choice === "TRUE") {
    setColors({ O: "green", A: "red", E: "orange", I: "orange" });
  } else if (letter === "O" && choice === "FALSE") {
    setColors({ O: "red", A: "green", E: "red", I: "green" });
  }
}

function setColors(map) {
  for (const key in map) {
    document.getElementById(key).style.backgroundColor = map[key];
  }
}
