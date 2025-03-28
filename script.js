const textarea = document.getElementById("mdText");
const preview = document.getElementById("resultArea");
const resetBtn = document.getElementById("btnReset");

textarea.addEventListener("keyup", function () {
  let text = textarea.value;

  let converted = text
    .replace(/^#\s(.+)/gm, '<h1>$1</h1>')
    .replace(/^##\s(.+)/gm, '<h2>$1</h2>')
    .replace(/^###\s(.+)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>')
    .replace(/^\- (.+)/gm, '<ul><li>$1</li></ul>')
    .replace(/\n/g, '<br>');

  // remove multiple <ul> tags
  converted = converted.replace(/<\/ul><ul>/g, '');

  preview.innerHTML = converted;
});

resetBtn.onclick = () => {
  textarea.value = "";
  preview.innerHTML = "";
};
