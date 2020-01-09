import electron, { app } from "electron";

let mainWindow: electron.BrowserWindow;

app.on("ready", () => {
  mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
  });
});
