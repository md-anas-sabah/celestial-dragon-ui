function handleCopyTextFromParagraph() {
  const paragraph = document.getElementById("clipboard-area");
  paragraph.appendChild(area);

  area.value = paragraph.innerText;
  area.select();
  document.execCommand("copy");

  paragraph.removeChild(area);
}

