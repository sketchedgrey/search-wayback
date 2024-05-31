browser.contextMenus.create({
  id: "search-wayback",
  title: "Search on Wayback Machine",
  contexts: ["link"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "search-wayback") {
    const url = `https://web.archive.org/web/*/${info.linkUrl}`;
    browser.tabs.create({ url });
  }
});
