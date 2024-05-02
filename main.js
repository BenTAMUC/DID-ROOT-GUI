const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
let homeWindow;

const createWindowHome = () => {
  homeWindow = new BrowserWindow({
    title: 'DID:ROOT',
    width: 1200,
    height: 700,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  homeWindow.loadFile(path.join(__dirname, './renderer/home.html'));

}

app.whenReady().then(() => {
  createWindowHome();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindowHome();
    }
  });
});

app.on('window-all-closed', async () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})