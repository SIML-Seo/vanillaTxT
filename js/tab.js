const tabButton = document.getElementById("tabBtn");
const tabCon = document.getElementById("tab-container");
const tabLi = document.getElementById("tab-li");

let tabs = [];
let tmpTxTData = "";
let flag = 0;

const STORE_KEY = "TXT";

function saveTab(tab, title){
    localStorage.setItem((!title) ? STORE_KEY : title, JSON.stringify(tab));
    // localStorage.setItem((!title) ? STORE_KEY : title, JSON.stringify(tabs));
}

function deleteTab(event){
    const div = event.target.parentElement;
    const li = document.getElementById(div.id);
    div.remove();
    li.remove();
    const firstTab = tabCon.firstElementChild.id;
    changeTab(firstTab);
    // tabs = tabs.filter((tab) => tab.id !== parseInt(div.id));
    // saveTab(tabs);
}

function handleTab(newTab){
    if(handleTab_li(newTab) === 0){
        return alert("이미 불러온 데이터입니다.");
    }
    handleTab_div(newTab);   
}

function handleTab_li(newTab){
    let tabLiChild = tabLi.querySelectorAll(":scope > li");
    for(let i = 0; i < tabLiChild.length; i++){
        if(tabLiChild[i].id == newTab.id){
            return 0;
        }
    }
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
    // const span = document.createElement("span");
    // span.innerText = newTab.text;
    // span.id = "tabSpan"
    const button = document.createElement("button");
    button.innerText= "X";
    const textarea = document.createElement("textarea");
    textarea.innerText = newTab.text;
    button.addEventListener("click", deleteTab);
    // div.appendChild(span);
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

function newTab(TxTData){
    const value = TxTData;
    const newTab = {
        text : value,
        id : Date.now()
    }
    return newTab
}

function clickTabBtn(TxTData){
    const newTab1 = newTab(TxTData);
    // tabs.push(newTab1);
    handleTab(newTab1);
    saveTab(newTab1); 
}

tabButton.addEventListener("click", function(){clickTabBtn(tmpTxTData)});
