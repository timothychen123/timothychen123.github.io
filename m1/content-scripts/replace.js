// Add a message listener that sets the value of "replace"
chrome.runtime.onMessage.addListener((request) => {
  /*const newFont = message.font;

  document.body.style.fontFamily = newFont;*/

  /*function (font) {
    document.body.style.fontFamily = font.value;
  }*/
  changeText();
});

// Checks the current value of replace and run walk nodes
function changeText() {
  alert("hello!")
  document.body.style.fontFamily = "monospace";
}