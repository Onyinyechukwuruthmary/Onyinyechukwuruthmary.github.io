// Simple interaction example

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn");

  button.addEventListener("click", function () {
    alert("You are being redirected to LinkedIn!");
  });
});
// MAKE FUNCTION GLOBAL (THIS IS THE FIX)
window.sendMessage = function () {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (!input || !chatBox) {
    console.log("Chatbot elements not found");
    return;
  }

  let text = input.value.trim().toLowerCase();
  if (text === "") return;

  addMessage(text, "user");

  let response = getResponse(text);

  setTimeout(() => {
    addMessage(response, "bot");
  }, 300);

  input.value = "";
};

// ADD MESSAGE
function addMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");

  let msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.textContent = text;

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}
