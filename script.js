const radiBtns = document.querySelectorAll(".radio-btn");
const cardCenter = document.querySelector(".card-center");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const copycard1 = card1.cloneNode(true);
const copycard2 = card2.cloneNode(true);
const copycard3 = card3.cloneNode(true);

radiBtns.forEach((element) => {
  element.addEventListener("click", function (e) {
    cardCenter.removeChild(cardCenter.firstElementChild);

    switch (element.value) {
      case "1":
        cardCenter.appendChild(copycard1);
        break;
      case "2":
        cardCenter.appendChild(copycard2);
        break;
      case "3":
        cardCenter.appendChild(copycard3);
        break;
      default:
        break;
    }
  });
});