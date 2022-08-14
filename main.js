const { app, BrowserWindow } = require('electron');
const path = require('path');

if (!app.requestSingleInstanceLock()) { return app.quit(); }

let win;

app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (win) {
        if (win.isMinimized()) win.restore();
        win.focus();
    }
});


function createWindow() {
    win = new BrowserWindow({
        show: false,
        autoHideMenuBar: true,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.on('closed', function () {
        win = null;
    });

    win.on('close', function (e) {
        app.quit();
    });

    win.loadFile(path.resolve(app.getAppPath(), "public/main/index.html"));
    win.maximize();

    win.webContents.openDevTools();

    // Initialize @electron/remote so that we can use it from renderer process
    require('@electron/remote/main').initialize();
    require("@electron/remote/main").enable(win.webContents);
    win.show();
}

app.whenReady().then(createWindow);
