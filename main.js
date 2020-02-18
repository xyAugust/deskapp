const {
  app,
  BrowserWindow,
  dialog,
  ipcMain
} = require('electron')

function createWindow() {
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    transparent: true,
    frame: false,

    webPreferences: {
      nodeIntegration: true
    }
  })
  // win.setIgnoreMouseEvents(true)
  // and load the index.html of the app.
  win.loadFile('myvs.html')

  // 打开开发者工具
  // win.webContents.openDevTools()


  // 监听窗口变化
  win.on('maximize', () => {
    console.log('maximize')
    // dialog.showMessageBox({
    //   type: 'info',
    //   title: '提示信息',
    //   message: '内容',
    //   buttons: ['ok', 'no']

    // }, function (index) {

    //   console.log(index)
    // })
  })

  // 监听窗口变化
  win.on('minimize', () => {})

  // 监听渲染进程发出的事件
  ipcMain.on('window-min', function () {
    win.minimize()
  })

  // 监听渲染进程发出的事件
  ipcMain.on('window-max', function () {
    if (win.isMaximized()) {
      win.restore()
    } else {
      win.maximize()
    }
  })

  // 监听渲染进程发出的事件
  ipcMain.on('window-close', function () {
    win.close()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. 也可以拆分成几个文件，然后用 require 导入。