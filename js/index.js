// 光标聚集
function show(){
    document.getElementById("sys").focus();
}
// 顶部悬浮
window.onscroll = function(){
    var Fnav = document.getElementById("Fnav");
    var boxTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(boxTop>=80){
        Fnav.style.position = "fixed";
        Fnav.style.top = 0;
    }
    else{
        Fnav.style.position = "absolute";
        Fnav.style.top = "80px";
    }

    var fix=this.document.getElementsByClassName("fix");
    var go = document.getElementById("gogo");
    var boxTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(boxTop>=250){
        go.style.display = "block";
        fix[0].style.cssText=`
            position: fixed;
            bottom: 110px;
            left: 93%;
        `;
    }
    else{
        go.style.display = "none";
        fix[0].style.cssText=`
            position: fixed;
            left: 93%;
            bottom: 50px;
        `;
    }
}
// 回到顶部
function gotop(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}

// 保存cookie
var welcomeBox=document.getElementById("welcomeBox");
var nav2=document.getElementById("nav2");
var btnLogout=document.getElementById("btnLogout");
function showUser(){
    let username=getCookie("username");
    if(username!=null){
        welcomeBox.firstElementChild.innerHTML = username;
        welcomeBox.style.display ="block";
        nav2.style.display ="none";
    }else{
        welcomeBox.style.display ="none";
        nav2.style.display ="block";
    }
}

window.onload=function(){
    showUser();
    btnLogout.onclick=function(){
        removeCookie("username");
        showUser();
    }
}
