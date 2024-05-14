import { app, shell, BrowserWindow, ipcMain } from "electron";
import { join } from "path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import icon from "../../resources/icon.png?asset";
import startServer from "../renderer/src/server"; // Asegúrate de que la ruta y la exportación son correctas.
require("electron-reload")(__dirname);
function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === "linux" ? { icon } : undefined),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: true, // Habilitar sandbox
      nodeIntegration: false,
      contextIsolation: true, // Recomendado para usar con sandbox
    },
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL);
  } else {
    mainWindow.maximize();
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

// deepcode ignore PromiseNotCaughtNode: <please specify a reason of ignoring this>
app.whenReady().then(() => {
  electronApp.setAppUserModelId("com.electron");
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // Escuchar el evento para iniciar el servidor
  ipcMain.on('start-server', () => {
    startServer(); // Función que inicia tu servidor Express
  });

  // IPC para actualizar la configuración
  ipcMain.handle("update-config", async (_event, key: string, value: any) => {
    if (key === "SERVER") {

      return { success: true, SERVER: value };
    }
    return { success: false, message: "Clave de configuración no válida" };
  });

  // IPC para consultar la configuración
  ipcMain.handle("get-config", async (_event, key: string) => {
    if (key === "SERVER") {

      return { success: true, SERVER: true };
    }
    return { success: false, message: "Clave de configuración no válida" };
  });
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
