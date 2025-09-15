for (const a of document.querySelectorAll('a')) {
a.style.outline = '2px dashed #ec0089';
}


chrome.runtime.sendMessage({ type: 'CONTENT_LOADED', url: location.href });
