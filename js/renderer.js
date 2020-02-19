const {
    ipcRenderer
} = require('electron')
document.getElementById('maxbt').addEventListener('click', () => {
    console.log('hello vscode!')
    ipcRenderer.send('window-max');

})
document.getElementById('minbt').addEventListener('click', () => {
    console.log('hello vscode!')
    ipcRenderer.send('window-min');

})
document.getElementById('closebt').addEventListener('click', () => {
    console.log('hello vscode!')
    ipcRenderer.send('window-close');

})