window.onload = () => {
  const sound = document.getElementById("bloomSound");
  sound.volume = 1;
  sound.muted = false;
  sound.loop = true;

  sound.play().catch((e) => {
    console.log("Autoplay suara gagal, browser mungkin butuh interaksi:", e);
  });

  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const text = "I found love, and it's spelled: <br>Naswa Aulia Putri";
    const titleElement = document.getElementById("title");
    let index = 0;

    function appendTitle() {
      if (index < text.length) {
        if (text.startsWith("<br>", index)) {
          titleElement.innerHTML += "<br>";
          index += 4; // loncat 4 karakter <br>
        } else {
          titleElement.innerHTML += text[index];
          index++;
        }
        setTimeout(appendTitle, 80);
      }
    }
    appendTitle();

    clearTimeout(c);
  }, 1000);
};
