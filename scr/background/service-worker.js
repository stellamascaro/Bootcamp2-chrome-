chrome.runtime.onInstalled.addListener(() => {
console.log('Bootcamp Helper: instalado');
chrome.storage.local.set({ installsAt: Date.now() });
});


chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
if (msg && msg.type === 'PING') {
sendResponse({ ok: true, time: new Date().toISOString() });
}
});


chrome.alarms.onAlarm.addListener((alarm) => {
console.log('Alarm fired', alarm);
});
