document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const openBtn = document.getElementById("open");
    const resetBtn = document.getElementById("reset");
  
    openBtn.addEventListener("click", function () {
      envelope.classList.remove("close");
      envelope.classList.add("open");
    });
  
    resetBtn.addEventListener("click", function () {
      envelope.classList.remove("open");
      envelope.classList.add("close");
    });
  });
  