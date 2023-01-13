chrome.runtime.onMessage.addListener((message) => {
  changeText();
});

/*function walkNodes(node, replacements) {
  let child, next;

  // We use a switch statement to decide what to do based on the node type.
  // See: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  switch (node.nodeType) {
    case 1: // Element - you could check for specific kinds of elements here
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        changeText();
        child = next;
      }
      break;
    case 3: // Text node
      changeText();
      break;
  }
}*/

function changeText() {
  document.documentElement.style.setProperty('font', "Courier, monospace");
  console.log("hello")
}