const TxT = document.getElementById("TxT");
const tabButton = document.getElementById("tabBtn");
const tabCon = document.getElementById("tab-container");
let tabConChild = tabCon.querySelectorAll(":scope > *");

let tabs = [];
let tab = "";

const STORE_KEY = "TXT";

function saveTab(tabs){
    localStorage.setItem(STORE_KEY, JSON.stringify(tabs));
}

function deleteTab(event){
    const div = event.target.parentElement;
    div.remove();
    tabs = tabs.filter((tab) => tab.id !== parseInt(div.id));
    saveTab(tabs);
}

function handleTab(newTab){
    const div = document.createElement("div");
    div.id = newTab.id;
    const span = document.createElement("span");
    span.innerText = newTab.text;
    span.id = "tabSpan"
    const button = document.createElement("button");
    button.innerText= "X";
    button.addEventListener("click", deleteTab);
    div.appendChild(span);
    div.appendChild(button);
    tabCon.appendChild(div);
}

function clickTabBtn(){
    const value = "";
    // const value = TxT.value;
    const newTab = {
        text : value,
        id : Date.now()
    }
    tabs.push(newTab);
    handleTab(newTab);
    TxT.value = "";
    saveTab(tabs);
}

function clickTab(){
    console.log("AAAA")
    let content = document.getElementById("tabSpan").innerText;
    TxT.value = content;

    // TxT.addEventListener("input", function(event){
    //     console.log(event.target.value)
    //     content = event.target.value;
    // });
}

function insertCont(){
    let content = document.getElementById("tabSpan");
    console.log(TxT.value)
    content.innerText = TxT.value
}

tabButton.addEventListener("click", clickTabBtn);
tabConChild.addEventListener("click", clickTab);
TxT.addEventListener("input", insertCont);