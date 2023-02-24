const { app, BrowserWindow } = require('electron');
const config = require('./config.js');
const { is } = require('electron-util');

let window;

// Детали окна браузера
function createWindow() {
  window = new BrowserWindow({
    width: 800,
    heigh: 600,
    webPreferences: {
      /* nodeIntegration: true */
      nodeIntegration: false
    }
  });

  // Загрузка HTML файла
  /* window.loadFile('index.html'); */
  /* window.loadURL('http://localhost:1234'); */
  if (is.development) {
    window.loadURL(config.LOCAL_WEB_URL);
  } else {
    window.loadURL(config.PRODUCTION_WEB_URL);
  }

  // Если в режиме dev показать devtools
  if (is.development) {
    window.webContents.openDevTools();
  }

  // При закрытии окна сбрасываем объект
  window.on('closed', () => {
    window = null;
  });
}

// Когда Electron готов, создаем окно приложения
app.on('ready', createWindow);
