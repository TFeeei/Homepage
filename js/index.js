var oBlog = document.getElementById("blog");
oBlog.onclick = function () {
    alert("構築中.....");
}

var oWorks = document.getElementById("works");
oWorks.onclick = function () {
    alert("構築中.....");
}

var oContact = document.getElementById("contact");
oContact.onclick = function () {
    alert("構築中.....");
}


var oMenu = document.getElementById("menu");
var oMainContent = document.getElementById("main-content");
var oMenuNav = document.getElementById("menu-nav")

var flag = true; // メニューナビ開いていない状態
oMenu.onclick = function () {
    if (flag == true) {
        oMenuNav.style.visibility = "visible";
        oMainContent.classList.add("blur");
        flag = false;
    } else {
        hiddenBlur();
    }
}

function hiddenBlur() {

    oMenuNav.style.visibility = "hidden";
    oMainContent.classList.remove("blur");
    flag = true;
}

var oBack = document.getElementById("back")
oBack.onclick = function () {
    if (flag == false) {
        hiddenBlur()
    }
}


// マウスホバーする　動画
var oNavContents = document.getElementsByClassName('nav-content');
var oLines = document.getElementsByClassName('line');

oNavContents[0].onmouseover = function () {

    linearMove(oLines[0], 'width', 10, 140)
}

oNavContents[1].onmouseover = function () {

    linearMove(oLines[1], 'width', 10, 70)
}

oNavContents[2].onmouseover = function () {

    linearMove(oLines[2], 'width', 10, 87.5)
}

oNavContents[3].onmouseover = function () {

    linearMove(oLines[3], 'width', 10, 122.5)
}

for (let i = 0; i < oNavContents.length; i++) {
    oNavContents[i].onmouseout = function () {
        linearMove(oLines[i], 'width', -10, 0)
    }
}

function linearMove(el, attr, space, target) {
    clearInterval(el.timer);
    el.timer = setInterval(function () {
        var currentStyle = parseInt(getStyle(el, attr));
        if (Math.abs(target - currentStyle) <= Math.abs(space)) {
            el.style[attr] = target + 'px';
            clearInterval(el.timer);
        } else {
            el.style[attr] = currentStyle + space + 'px';
        }
    }, 20)
}

function getStyle(el, attr) {
    if (el.currentStyle) { // IE
        return el.currentStyle[attr]
    } else {
        return getComputedStyle(el)[attr]
    }
}
