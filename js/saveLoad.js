const saveButton = document.getElementById("saveBtn");
const loadButton = document.getElementById("loadBtn");
const saveAsButton = document.getElementById("saveAsBtn")
const saveCon = document.getElementById("save-container");

let dataModifyFlag = "";

function save() {
    let TxTData = tabCon.querySelector(":scope > .selected > textarea").value;
    console.log("Save Data : " + TxTData);
    let selectTitle = tabLi.querySelector(":scope > .selected").innerText
    let title = "";
    if(saveChecking(title, selectTitle) === 2){
        title = prompt("저장하기")
        if(saveChecking(title, selectTitle) === 0){
            console.log("Failed Save!")
            return alert("이미 저장되어 있는 데이터가 있습니다.")
        }
        let p = document.createElement("p");
        p.innerText = title;
        p.addEventListener("click", function(){showData(p.innerText)});
        saveCon.appendChild(p);
    }else{
        title = selectTitle;
    }
    console.log("COMPLETE SAVE!");
    const saveTabData = tabInfo(TxTData);
    tabs.push(saveTabData);
    saveTab(saveTabData, title);
    tabLi.querySelector(":scope > .selected").innerText = title;
    dataModifyFlag = TxTData;
}

function saveChecking(title, selectTitle){
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) === title){
            return 0;
        }
        if(localStorage.key(i) === selectTitle){
            return 1;
        }
    }
    return 2;
}

function saveAs(){
    let TxTData = tabCon.querySelector(":scope > .selected > textarea").value;
    console.log("Save Data : " + TxTData);
    let title = "";
    let selectTitle = "";
    if(saveChecking(title, selectTitle) === 2){
        title = prompt("다른 이름으로 저장하기")
        if(saveChecking(title, selectTitle) === 0){
            console.log("Failed Save!")
            return alert("이미 저장되어 있는 데이터가 있습니다.")
        }
        let p = document.createElement("p");
        p.innerText = title;
        p.addEventListener("click", function(){showData(p.innerText)});
        saveCon.appendChild(p);
    }
    console.log("COMPLETE SAVE!");
    const saveTabData = tabInfo(TxTData);
    tabs.push(saveTabData);
    saveTab(saveTabData, title);
    handleTab(saveTabData, title);
}

function indicator(){
    let TxTData = tabCon.querySelector(":scope > .selected > textarea").value;
    console.log("indiTxTData : " + TxTData);
    console.log("dataModifyFlag : " + dataModifyFlag);
    if(tabLi.querySelector(":scope > .selected").innerText === "OO"){
        return 1;
    }else if(TxTData !== dataModifyFlag){
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
    if(handleTab(savedTab) === 1){
        tabLi.querySelector(":scope > .selected").innerText = title;
        let tabLis = tabLi.querySelectorAll(":scope > .notselected")
        for(let i = 0; i < tabLis.length; i++){
            if(tabLis[i].innerText === title){
                let id = tabLis[i].id;
                let tmpLiId = document.getElementById(id);
                tmpLiId.remove();
                let tmpDivId2 = document.getElementById(id)
                tmpDivId2.remove();
            };
        }
        dataModifyFlag = TxTData;
        console.log("COMPLETE LOAD!")
    }
}



saveButton.addEventListener("click", save)
loadButton.addEventListener("click", clickloadBtn)
saveAsButton.addEventListener("click", saveAs)