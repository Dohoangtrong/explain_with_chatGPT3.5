
chrome.contextMenus.create({
    id: 'highlightAndGetData',
    title: 'Translate',
    contexts: ['selection']
})

chrome.contextMenus.onClicked.addListener(function(info,tab){
    if (info.menuItemId === "highlightAndGetData"){
        chrome.tabs.query({active: true, currentWindow: false}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {text: info.selectionText});
        });
    }
});
