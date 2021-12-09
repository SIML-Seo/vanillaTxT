const saveButton = document.getElementById("saveBtn");
const loadButton = document.getElementById("loadBtn");
const saveCon = document.getElementById("save-container");

let flag = 0;

function save() {
    let TxTData = tabCon.querySelector(":scope > .selected > textarea").value;
    console.log("Save Data : " + TxTData);
    let title = prompt("저장하기")
    console.log("COMPLETE SAVE!");
    if(saveChecking(title) === 0){
        return alert("이미 저장되어 있는 데이터가 있습니다.")
    }
    const saveTabData = newTab(TxTData);
    tabs.push(saveTabData);
    saveTab(saveTabData, title);
    let p = document.createElement("p");
    p.innerText = title;
    p.addEventListener("click", function(){showData(p.innerText)});
    saveCon.appendChild(p);
}

function saveChecking(title){
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) === title){
            return 0;
        }
    }
}

function indicator(){
    
}

function clickloadBtn() {
    saveCon.className = "selected"
}

function showData(title){
    loadData(title);
    saveCon.className = "notselected"
}

function loadData(title){
    console.log("title : " + title)
    let TxTData = JSON.parse(localStorage.getItem(title)).text;
    console.log("TxTData : " + TxTData);
    let savedTab = tabs.find((tab) => tab.text === TxTData);
    console.log("savedTab : " + savedTab);
    handleTab(savedTab);
}



saveButton.addEventListener("click", save)
loadButton.addEventListener("click", clickloadBtn)