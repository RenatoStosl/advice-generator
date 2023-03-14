const adviceId = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");
const botao = document.querySelector(".btn");

function newAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;
      adviceId.innerHTML = `advice #${dataId}`;
      advice.innerHTML = dataAdvice;
    });
}

botao.addEventListener("click", () => {
  newAdvice();
});
