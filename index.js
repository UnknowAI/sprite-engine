const electron = require('electron');
const {app, BrowserWindow} = electron;

const debug = true;

app.on('ready', () => {
    let window = new BrowserWindow({width: 1200, height: 675, resizable: false, frame: false, maximizable: false, center: true});
    window.loadURL(`file://${__dirname}/src/index.html`);
    if(debug)
        window.webContents.openDevTools();
});

app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });