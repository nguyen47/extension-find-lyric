console.log("Background Work");

// Install context Menu
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: "Find Lyric",
    type: "normal",
    contexts: ["selection"]
  });
});

// When click on the context menu
chrome.contextMenus.onClicked.addListener(async (item, tab) => {
  console.log(item.selectionText);
  // Call API (Use musixmatch or something like that)
  const url = `https://api.audd.io/findLyrics/?q=${
    item.selectionText
  }&api_token=09601058daab48134182e99feb3facfe`;
  const result = await fetch(url);
  const response = await result.json();
  console.log(response);
  chrome.runtime.sendMessage(response);
});
