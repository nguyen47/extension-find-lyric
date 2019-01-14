chrome.extension.onMessage.addListener(function(
  message,
  messageSender,
  sendResponse
) {
  console.log(message);
  if (message.status === "success") {
    for (let i = 0; i < message.result.length; i++) {
      console.log(message.result[i].title);
      const title = document.getElementById("title");
      const titleFound = "<h1>" + message.result[i].title + "</h1>";
      title.innerHTML += titleFound;
    }
  }
});
