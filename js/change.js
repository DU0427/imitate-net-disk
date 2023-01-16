var nav = document.querySelectorAll(".nav-file");
// 设置点击选中的板块背景颜色
// 当左侧导航栏内发生点击事件
function setActive(){
    nav.forEach((item)=>{
        item.classList.remove('active');
    })
    this.classList.add('active');

}
nav.forEach((item)=>{
    item.addEventListener('click',setActive);
})
// 点击对应的li选项板块时触发绑定点击事件的函数 执行以下函数 
// 以下函数使点击选项板块 对应的右侧内容板块的display设置为block显示出来 将除了自己以外的板块的display都设置为none
function photo(){
    var file = document.getElementById("file1");
    var photobox = document.getElementById("photo1");
    var Favorites = document.getElementById("Favorites1");
    var lockbox = document.getElementById("lockbox1");
    var subscribe = document.getElementById("subscribe1");
    var recyclebin = document.getElementById("recycle-bin1");
    recyclebin.style.display="none"
    photobox.style.display="block";
    file.style.display="none";
    Favorites.style.display="none";
    lockbox.style.display="none";
    subscribe.style.display="none"


     
}

function file(){
    var file = document.getElementById("file1");
    var photobox = document.getElementById("photo1");
    var Favorites = document.getElementById("Favorites1");
    var lockbox = document.getElementById("lockbox1");
    var subscribe = document.getElementById("subscribe1");
    var recyclebin = document.getElementById("recycle-bin1");
    file.style.display="block";
    recyclebin.style.display="none"
    photobox.style.display="none";
    Favorites.style.display="none"
    lockbox.style.display="none";
    subscribe.style.display="none"
}


function Favorites(){
    var file = document.getElementById("file1");
    var photobox = document.getElementById("photo1");
    var Favorites = document.getElementById("Favorites1");
    var lockbox = document.getElementById("lockbox1");
    var subscribe = document.getElementById("subscribe1");
    var recyclebin = document.getElementById("recycle-bin1");
    Favorites.style.display="block"
    recyclebin.style.display="none"
    file.style.display="none";
    photobox.style.display="none";
    lockbox.style.display="none";
    subscribe.style.display="none"


}
function lockbox(){
    var file = document.getElementById("file1");
    var photobox = document.getElementById("photo1");
    var Favorites = document.getElementById("Favorites1");
    var lockbox = document.getElementById("lockbox1");
    var subscribe = document.getElementById("subscribe1");
    var recyclebin = document.getElementById("recycle-bin1");
    lockbox.style.display="block";
    recyclebin.style.display="none"
    Favorites.style.display="none"
    file.style.display="none";
    photobox.style.display="none";
    subscribe.style.display="none"


}

function subscribe(){
    var file = document.getElementById("file1");
    var photobox = document.getElementById("photo1");
    var Favorites = document.getElementById("Favorites1");
    var lockbox = document.getElementById("lockbox1");
    var subscribe = document.getElementById("subscribe1");
    var recyclebin = document.getElementById("recycle-bin1");
    subscribe.style.display="block"
    recyclebin.style.display="none"
    lockbox.style.display="none";
    Favorites.style.display="none"
    file.style.display="none";
    photobox.style.display="none";
}

function recyclebin(){
    var file = document.getElementById("file1");
    var photobox = document.getElementById("photo1");
    var Favorites = document.getElementById("Favorites1");
    var lockbox = document.getElementById("lockbox1");
    var subscribe = document.getElementById("subscribe1");
    var recyclebin = document.getElementById("recycle-bin1");
    recyclebin.style.display="block"
    subscribe.style.display="none"
    lockbox.style.display="none";
    Favorites.style.display="none"
    file.style.display="none";
    photobox.style.display="none";
}

