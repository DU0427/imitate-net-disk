function folderbtn(){
    var evt =document.createEvent("MouseEvents");
    evt.initEvent("click",true,true);
    document.getElementById("uploadfolder").dispatchEvent(evt);
}
function filebtn(){
    var evt =document.createEvent("MouseEvents");
    evt.initEvent("click",true,true);
    document.getElementById("uploadfile").dispatchEvent(evt);
}