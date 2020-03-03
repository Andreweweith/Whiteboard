const electron = require('electron');
const app = electron.app;
const path = require('path');
const isDev = require('electron-is-dev');
//require('electron-reload');
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow(w, h) {

    mainWindow = new BrowserWindow({
        width: w,
        height: h,
        //frame: false,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://$\{path.join(__dirname, '../build/index.html')}`
    );

    mainWindow.on('closed', () => {
        mainWindow = null
    });
}

app.on('ready', () => {
    const screen = electron.screen;
    const display = screen.getPrimaryDisplay();
    const area = display.workArea;

    createWindow(area.width, area.height);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if(mainWindow == null) {
        createWindow()
    }
});
