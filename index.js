const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
// console.log(app.log)
// Menu.setApplicationMenu(null);

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "src", "preload.js"),
      // Enable nodeIntegration if necessary (use with caution)
      // nodeIntegration: true,
      contextIsolation: true, // Recommended for security
      // Expose specific APIs using contextBridge (if needed)
    },
    width: 1000,
    height: 700,
    show: false,
  });
  mainWindow.loadFile("src/index.html");
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  // Create a new session
  const ses = mainWindow.webContents.session;

  // Intercept requests
    ses.webRequest.onBeforeRequest((details, callback) => {
    const url = details.url;
    
    // List of blocked URLs
    // const blockedUrls = ['6sense.com', 'amplitude.com', '*.6sc.co'];
    const blockedUrls = [
      'https://app.vyond.com/v2/subscription',
      'https://app.vyond.com/v2/security',
      'https://app.vyond.com/v2/groups/list',
      'https://app.vyond.com/v2/users/list',
      'https://app.vyond.com/v2/profile', 
      'amplitude.com'
    ];

    // Check if the URL is blocked
    if (blockedUrls.some(blockedUrl => url.includes(blockedUrl))) {
      // Block the request
      callback({ cancel: true });
    } else {
      // Allow the request
      callback({});
    }
  });
 
  mainWindow.webContents.openDevTools();

  // Load your initial URL
  /* mainWindow.loadURL("https://www.vyond.com/login").then(() => {
    const currentURL = mainWindow.webContents.getURL()
    console.log(currentURL)}) */
};

ipcMain.handle("new-window", () => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "src", "preload1.js"),
      // Enable nodeIntegration if necessary (use with caution)
      // nodeIntegration: true,
      contextIsolation: true, // Recommended for security
      // Expose specific APIs using contextBridge (if needed)
    },
    width: 400,
    height: 300,
    show: false,
    parent: mainWindow,
    modal: true
  });

  childWindow.loadURL("https://www.vyond.com/login").then(() => {
    const currentURL = mainWindow.webContents.getURL();
    console.log(currentURL);
  });

  childWindow.on("ready-to-show", () => {
    childWindow.show();
  });
  
});

app.whenReady().then(() => {
  createWindow();
});

// Quit when all windows are closed, except on macOS
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Re-create main window when activated, if none exists
app.on("activate", () => {
  if (!mainWindow) {
    createWindow();
  }
});
