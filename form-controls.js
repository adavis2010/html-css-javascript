console.log("Ready");
function button_click(){
    let inCtrl= document.getElementById("inp");
    let inValue=inCtrl.value;
    let outCtrl= document.getElementById("put");
    outCtrl.value = inValue;
}