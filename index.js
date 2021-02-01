const  {app, BrowserWindow, ipcMain} = require('electron');
const fetch=require('node-fetch')
function createWindow(){
    const mainWindow = new BrowserWindow(
        {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration:true
        }
            
        });
    mainWindow.loadURL('file://'+__dirname+'/index.html');

}
const secret_key='76af1a3f38801d921a64bfef256ec04a'

app.on('ready', createWindow);

ipcMain.handle('fetchData',async (event,args)=>{

    var data_recivec=null;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${args}&appid=${secret_key}`)
    .then(response=> response.json())
    .then((data)=>{
        data_recivec=data;
    });
    console.log(data_recivec)
    return data_recivec;
})



app.on('window-all-closed',()=>{
    if (process.platform !=="darwin") {
        app.quit()
        console.warn("window closed")
    } 
})

app.on('activate',()=>{
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
})