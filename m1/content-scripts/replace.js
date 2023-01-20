// Add a message listener that sets the value of "replace"
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const newFont = message.font;

  document.body.style.fontFamily = newFont;
});