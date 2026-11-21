const { app, BrowserWindow } = require('electron');
const path = require('path');

// Windows 任务栏图标分组与显示
if (process.platform === 'win32') {
  app.setAppUserModelId('com.escape.cs2commandgenerator');
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1320,
    height: 880,
    minWidth: 980,
    minHeight: 700,
    autoHideMenuBar: true,
    title: 'CS2 指令生成器',
    backgroundColor: '#060d0f',
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
