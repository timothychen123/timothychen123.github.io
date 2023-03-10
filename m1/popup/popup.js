async function sendMessageToContentScript(message) {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, message);

  console.log(response);
}

const messageButton = document.getElementById("open-options");
const fontInput = document.getElementById("input-font");

const sendMessage = (e) => {
  sendMessageToContentScript({ font: fontInput.value });
};

// Add an event listener to the message button that will send a message
// to the content script when the button is clicked.
messageButton.addEventListener("click", sendMessage);

