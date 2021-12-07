const TxT = document.getElementById("TxT");
const tabButton = document.getElementById("tabBtn");
const tabCon = document.getElementById("tab-container");

let tabs = [];

function deleteTab(event){
    const div = event.target.parentElement;
    div.remove();

}

function handleTab(newTab){
    const div = document.createElement("div");
    div.id = newTab.id;
    const span = document.createElement("span");
    span.innerText = newTab.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTab);
    div.appendChild(span);
    div.appendChild(button);
    tabCon.appendChild(div);
}

function clickTab(){
    const value = TxT.value;
    const newTab = {
        text : value,
        id : Date.now()
    }
    tabs.push(newTab);
    handleTab(newTab);
    TxT.value = "";
}

tabButton.addEventListener("click", clickTab);