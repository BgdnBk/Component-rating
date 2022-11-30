let selectRatingEl = document.querySelector(".text__block");

function changeRating() {
  let value = localStorage.getItem("value");

  let res = selectRatingEl.insertAdjacentHTML(
    "afterbegin",
    `<p class="select__rating">You selected ${value} out of 5</p>`
  );

  return res;
}

changeRating();
