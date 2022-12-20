const btn = document.querySelector(".dark-mode");
const darkBtn = document.querySelector(".fa-moon");

btn.addEventListener("click", () => {
  btn.classList.toggle("dark-mode");
  if (darkBtn.classList.contains("fa-moon")) {
    darkBtn.classList.remove("fa-moon");
    darkBtn.classList.add("fa-sun");
    document.querySelector(".dm").style.color = "white";
  } else {
    darkBtn.classList.remove("fa-sun");
    darkBtn.classList.add("fa-moon");
  }
});
