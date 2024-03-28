// Function to add messages to chat
function addMessageToChat(sender, message) {
  const chatOutput = document.getElementById("chatOutput");
  chatOutput.innerHTML += `<strong>${sender}:</strong> ${message}<br>`;
  chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the latest message
}

// Function to send messages and get AI response
function sendMessage() {
  const userInputField = document.getElementById("userInput");
  const userInput = userInputField.value.trim();
  if (userInput === "") return;

  addMessageToChat("You", userInput);

  fetch("https://c213-173-71-125-62.ngrok-free.app/complete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: userInput }),
  })
    .then((response) => response.text())
    .then((textData) => addMessageToChat("AI Helper", textData));

  userInputField.value = ""; // Clear the input field
}

// Wait for the DOM to be fully loaded before attaching event handlers
document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("sendButton");
  sendButton.addEventListener("click", sendMessage);
});
