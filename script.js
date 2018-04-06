chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "master.html";
    chrome.tabs.create({ url: newURL });
});