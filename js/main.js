const ratingEl = document.querySelector(".table__circle");
const buttonEl = document.querySelector(".submit");

ratingEl.addEventListener("click", (e) => {
  let target = e.target.value;
  if (!target) {
    alert("select rating");
    buttonEl.disabled = !e.target.checked;
  } else {
    console.log("This is rating listner", target);
    localStorage.setItem("value", target);
  }
});

buttonEl.addEventListener("click", () => {
  window.location.href = "thanks.html";
  console.log("This is button listner");
});
