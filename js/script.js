// 轮播 banner
var banner = document.getElementById("banner");
var slideBox = document.getElementById("slideBox");
var banner_img = slideBox.getElementsByTagName("div");

var klayout = document.getElementById("klayout");
var prev = klayout.getElementsByClassName("prevBtn");
var next = klayout.getElementsByClassName("nextBtn");

var dot = document.getElementsByClassName("dot");
var dotList = dot[0].getElementsByTagName("div");


console.log(dotList);

var index = 0;
function switchImg(){
    for (var i = 0; i < banner_img.length; i++){
        banner_img[i].className="banner-img";
        dotList[i].className = "";
    }
    banner_img[index].className="banner-img show";
    dotList[index].className="on";
}

function nextIndex(){
    index++;
    if(index>=banner_img.length){
        index=0;
    }
    switchImg();
}

next[0].onclick = function (){
    nextIndex();
};

function prevIndex(){
    index--;
    if(index < 0){
        index = banner_img.length - 1;
    }
    switchImg();
}

for (var i = 0; i < dotList.length; i++){
    dotList[i].num = i;
    dotList[i].onmouseover = function (){
        index = this.num;
        switchImg();
    };
};

var timer = null;
timer = setInterval(nextIndex,2000);

prev[0].onclick = function(){
    prevIndex();
}

// 垂直导航
var navMenu = document.getElementById("nav-menu");
var menuItem = document.getElementById("menu-items");
var aLis = menuItem.getElementsByTagName("li");

var closeMenu = document.getElementsByClassName("close-menu");
console.log(closeMenu);

var menuContent = document.getElementById("menu-content");
var menuContentBox = menuContent.getElementsByClassName("menu-content-box");

var inx = 0 ;

for (var i = 0; i < aLis.length; i++){
    aLis[i].num = i;
    inx = aLis[i].num;
    closeMenu[i].onclick = function(){
        for (var i = 0; i < menuContentBox.length; i++) {
            menuContentBox[i].className = "menu-content-box";
            navMenu.style.width = "200px";
        }
    }
    aLis[i].onmouseover = function (){
        for(var i = 0; i < aLis.length; i++){
            menuContentBox[i].className = "menu-content-box";
        }
        navMenu.style.width = "450px";
        menuContentBox[this.num].className = "menu-content-box show-menu";
    }
    
}

// 倒计时
var endTime = 3600;

var h = document.getElementById("h");
var m = document.getElementById("m");
var s = document.getElementById("s");

setInterval(function run(){
    h.innerHTML = parseInt(endTime / 3600).toString().padStart(2,'0');
    m.innerHTML = parseInt(endTime / 60 % 60).toString().padStart(2,'0');
    s.innerHTML = parseInt(endTime  % 60).toString().padStart(2,'0');
    endTime--;
},1000);

// 选项卡

var selectItem = document.getElementById("select-item");
var selectContent = document.getElementById("select-content");

var spanLis = selectItem.getElementsByTagName("span");
var contentLis = selectContent.getElementsByClassName("sContent");

for (let i = 0; i < spanLis.length; i++) {
    spanLis[i].onclick = function (){
        for (let j = 0; j < spanLis.length; j++) {
            spanLis[j].className = "";
            contentLis[j].className = "sContent";
            
        }
        spanLis[i].className = "select-this";
        contentLis[i].className = "sContent select-content-show";
    }
}