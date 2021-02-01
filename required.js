const {ipcRenderer}=require('electron')


function display_data(data){
    document.getElementById('status').innerHTML=JSON.stringify(data,undefined, 2);
}

async function getStatus(id){
    var data =document.getElementById(id).value;
    var data_recived=null;
    if (id=='cityName'){
        data_recived= await ipcRenderer.invoke('fetchData',data);
        display_data(data_recived)
    }
    else if(id=='areaCode'){
        data_recived= await ipcRenderer.invoke('fetchData',data);
        display_data(data_recived)
    }
    else if (id=='countryName'){
        data_recived= await ipcRenderer.invoke('fetchData',data);
        display_data(data_recived)
    }
}