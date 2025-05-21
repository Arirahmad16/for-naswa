window.onload = () => {
  const sound = document.getElementById("bloomSound");
  sound.volume = 1;
  sound.muted = false;
  sound.loop = true; // <-- supaya looping otomatis

  sound.play().catch((e) => {
    console.log("Autoplay suara gagal, browser mungkin butuh interaksi:", e);
  });

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = "I Love U".split("");
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      } else {
        const naswaElement = document.createElement("div");
        naswaElement.textContent = "NASWA";
        naswaElement.style.marginTop = "10px";
        titleElement.parentNode.insertBefore(
          naswaElement,
          titleElement.nextSibling
        );
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
