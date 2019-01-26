

function clickListener(tab) {
    console.log("hola que tal");
    browser.tabs.executeScript(null, {
      file: "rickandroll.js"
    });
}

browser.browserAction.onClicked.addListener(clickListener);
