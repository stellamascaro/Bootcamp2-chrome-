const pingBtn = document.getElementById('ping');
const statusEl = document.getElementById('status');
const saveBtn = document.getElementById('saveNote');
const noteEl = document.getElementById('note');
const openOptions = document.getElementById('openOptions');


(async () => {
const data = await chrome.storage.local.get(['quickNote']);
if (data.quickNote) noteEl.value = data.quickNote;
})();


pingBtn.addEventListener('click', async () => {
try {
const res = await chrome.runtime.sendMessage({ type: 'PING' });
statusEl.textContent = `Background respondeu: ${res.time}`;
} catch (err) {
statusEl.textContent = 'Erro: sem resposta do background';
}
});


saveBtn.addEventListener('click', async () => {
const value = noteEl.value || '';
await chrome.storage.local.set({ quickNote: value });
statusEl.textContent = 'Nota salva ✔';
});


openOptions.addEventListener('click', (e) => {
e.preventDefault();
if (chrome.runtime.openOptionsPage) chrome.runtime.openOptionsPage();
});
