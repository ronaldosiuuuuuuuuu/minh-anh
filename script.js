const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt");

yesBtn.addEventListener("click", () => {
  question.innerHTML =
    "á à còn em số 2, số 3 nữa chứ gìiiiiii=))<br>Dỗiiiii anh tệ quáaa😒";

  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnE1N2RhcWZ4ZDB5N3liM3k3czYydjR1ZnViNWVwYm4yYmk4bDV1ciZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/q4YtFJ9Inq3UQDlPEF/giphy.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("touchstart", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
