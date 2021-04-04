const { app, BrowserWindow, ipcMain, globalShortcut, dialog } = require('electron')

let win;
function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule:true,
            contextIsolation: false,
        }
    })

    //load the index.html from a url
    win.loadURL('http://localhost:3000');

    // Open the DevTools.
    // win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(()=>{
    globalShortcut.register('CommandOrControl+O', () => {
        openFolder();
    })
    createWindow();
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.

    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

ipcMain.on('minimizeApp', (event, arg) => {
    win.minimize();
})

ipcMain.on('maximizeApp', (event, arg) => {
    win.setFullScreen(!win.isFullScreen());
})

ipcMain.on('exitApp', (event, arg) => {
    app.quit();
})

ipcMain.on('openFolder', (event, arg) => {
    openFolder();
})

function openFolder(){
    dialog.showOpenDialog({ properties: ['openDirectory'] }).then((file)=>{
        win.webContents.send('directory-opened', file);
    })
}
