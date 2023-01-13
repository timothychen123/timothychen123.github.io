function listen(eventType, selector, callback) {
  document.querySelector(selector).addEventListener(eventType, callback);
}

/*async function updateContentScript(changeText) {
  // Sends a message to the content script with an object that has the
  // current value of the checkbox and a boolean (whether to add a block)
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.runtime.sendMessage(changeText);
  // You can do something with response from the content script here
  console.log(response);
}*/

async function sendMessageToContentScript() {
  chrome.runtime.sendMessage("message");
  // You can do something with response from the content script here
  console.log("sending message");
}

listen("click", "#open-options", (e) =>
  sendMessageToContentScript()
);

