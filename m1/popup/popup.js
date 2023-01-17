/*const addBlockButton = document.getElementById("open-options");

// Add event listeners to the checkbox and button
addBlockButton.addEventListener("click", (e) => updateContentScript(true));*/

/*async function updateContentScript() {
  // Sends a message to the content script with an object that has the
  // current value of the checkbox and a boolean (whether to add a block)
  const message = { message: "Change the text" };
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  const response = await chrome.tabs.sendMessage(tab.id, message);
  // You can do something with response from the content script here
  console.log(response);
}

const messageButton = document.getElementById("open-options");
const fontPicker = document.getElementById("input-font");

const sendMessage = (e) => {
  updateContentScript({ font: fontPicker.value })
};

messageButton.addEventListener("click", (e) => updateContentScript(true));*/


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

