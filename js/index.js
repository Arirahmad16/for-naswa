const title = document.querySelector(".title");
const rawText = "i have a<br>something wa";

title.innerHTML = "";

const lines = rawText.split("<br>");

lines.forEach((lineText, i) => {
  const lineDiv = document.createElement("div");
  lineDiv.classList.add("line");
  if (i === 1) lineDiv.classList.add("left"); // baris ke-2 rata kiri

  let index = 0;

  function appendChar() {
    if (index < lineText.length) {
      const span = document.createElement("span");
      const char = lineText[index];
      if (char === " ") {
        span.style.width = "1rem";
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = char;
      }
      lineDiv.appendChild(span);
      index++;
      setTimeout(appendChar, 80);
    }
  }
  appendChar();

  title.appendChild(lineDiv);
});
