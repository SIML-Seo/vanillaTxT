const saveButton = document.getElementById("saveBtn");
const loadButton = document.getElementById("loadBtn");
const saveCon = document.getElementById("save-container");

let dataModifyFlag = [];

function save() {
    let TxTData = tabCon.querySelector(":scope > .selected > textarea").value;
    console.log("Save Data : " + TxTData);
    let title = prompt("저장하기")
    if(saveChecking(title) === 0){
        console.log("Failed Save!")
        return alert("이미 저장되어 있는 데이터가 있습니다.")
    }
    console.log("COMPLETE SAVE!");
    const saveTabData = tapInfo(TxTData);
    tabs.push(saveTabData);
    saveTab(saveTabData, title);
    let p = document.createElement("p");
    p.innerText = title;
    p.addEventListener("click", function(){showData(p.innerText)});
    saveCon.appendChild(p);
    tabLi.querySelector(":scope > .selected").innerText = title;
}

function saveChecking(title){
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) === title){
            return 0;
        }
    }
}

function indicator(){
    let TxTData = tabCon.querySelector(":scope > .selected > textarea").value;
    if(TxTData !== dataModifyFlag){
        alert("글이 수정되었습니다. 저장하세요.")
        return 0;
    }
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
    if(handleTab(savedTab) === "1"){
        tabLi.querySelector(":scope > .selected").innerText = title;
        dataModifyFlag = TxTData;
        console.log("COMPLETE LOAD!")
    }
}



saveButton.addEventListener("click", save)
loadButton.addEventListener("click", clickloadBtn)