function stopAll() {
    chrome.tabs.executeScript({
        file: '/core/stopall.js'
    });
}
document.getElementById('bitcoin').addEventListener('click', () => {
    chrome.tabs.executeScript({
    file: '/core/bitcoin.js'
});
window.close();
});

document.getElementById('ethereum').addEventListener('click', () => {
    chrome.tabs.executeScript({
    file: '/core/ethereum.js'
});
window.close();
});

document.getElementById('ripple').addEventListener('click', () => {
    chrome.tabs.executeScript({
    file: '/core/ripple.js'
});
window.close();
});

document.getElementById('bitcoin_cash').addEventListener('click', () => {
    chrome.tabs.executeScript({
    file: '/core/bitcoin_cash.js'
});
window.close();
});

document.getElementById('litecoin').addEventListener('click', () => {
    chrome.tabs.executeScript({
    file: '/core/litecoin.js'
});
window.close();
});

document.getElementById('dollars').addEventListener('click', () => {
    chrome.tabs.executeScript({
    file: '/core/dollars.js'
});
window.close();
});