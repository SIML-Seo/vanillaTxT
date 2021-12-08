const tabButton = document.getElementById("tabBtn");
const tabCon = document.getElementById("tab-container");
const tabLi = document.getElementById("tab-li");


let tabs = [];
let tab = "";

const STORE_KEY = "TXT";

function saveTab(tabs){
    localStorage.setItem(STORE_KEY, JSON.stringify(tabs));
}

function deleteTab(event){
    const div = event.target.parentElement;
    const li = document.getElementById(div.id);
    div.remove();
    li.remove();
    const firstTab = tabCon.firstElementChild.id;
    changeTab(firstTab);
    tabs = tabs.filter((tab) => tab.id !== parseInt(div.id));
    saveTab(tabs);
}

function handleTab(newTab){
    handleTab_li(newTab);
    handleTab_div(newTab);   
}

function handleTab_li(newTab){
    let tabLiChild = tabLi.querySelectorAll(":scope > li");
    for(let i = 0; i < tabLiChild.length; i++){
        tabLiChild[i].className = "notselected";
    }
    const li = document.createElement("li");
    li.className = "selected";
    li.id = newTab.id;
    li.innerText = "OO"
    li.setAttribute("onclick", "changeTab(this.id)");
    tabLi.appendChild(li);
}

function handleTab_div(newTab){
    let tabConChild = tabCon.querySelectorAll(":scope > div");
    for(let i = 0; i < tabConChild.length; i++){
        tabConChild[i].className = "notselected";
    }
    const div = document.createElement("div");
    div.id = newTab.id;
    div.className = "selected"
    const span = document.createElement("span");
    span.innerText = newTab.text;
    span.id = "tabSpan"
    const button = document.createElement("button");
    button.innerText= "X";
    const textarea = document.createElement("textarea");
    button.addEventListener("click", deleteTab);
    div.appendChild(span);
    div.appendChild(button);
    div.appendChild(textarea);
    tabCon.appendChild(div);
}

function changeTab(id){
    let tabLiChild = tabLi.querySelectorAll(":scope > li");
    for(let i = 0; i < tabLiChild.length; i++){
        tabLiChild[i].className = "notselected";
    }
    let clickTab = document.getElementById(id)
    if(clickTab){
        clickTab.className = "selected";
        clickTab.id = "tmp";
        changePage(id);
        clickTab.id = id;
    }
}

function changePage(id){
    let tabConChild = tabCon.querySelectorAll(":scope > div");
    for(let i = 0; i < tabConChild.length; i++){
        tabConChild[i].className = "notselected";
    }
    let clickPage = document.getElementById(id)
    clickPage.className = "selected";
}

function clickTabBtn(){
    const value = "";
    const newTab = {
        text : value,
        id : Date.now()
    }
    tabs.push(newTab);
    handleTab(newTab);
    saveTab(tabs);
}

tabButton.addEventListener("click", clickTabBtn);
