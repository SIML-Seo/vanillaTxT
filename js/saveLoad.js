import * as TAB from "./tab.js";

const saveButton = document.getElementById("saveBtn");
const loadButton = document.getElementById("loadBtn");
const tabCon2 = document.getElementById("tab-container");
const saveCon = document.getElementById("save-container");

function save() {
    let TxTData = tabCon2.querySelector(":scope > .selected > textarea").value;
    console.log(TxTData);
    let title = prompt("저장하기")
    console.log("SAVE!")
    localStorage.setItem(title, TxTData);
    let p = document.createElement("p")
    p.innerText = title;
    p.addEventListener("click", showData(p.innerText));
    saveCon.appendChild(p);
}

function clickloadBtn() {
    saveCon.className = "selected"
}

function showData(title){
    //p 선택시 새로운 탭 생성하기, 로드창 닫기
    TxTData = localStorage.getItem(title);
}

saveButton.addEventListener("click", save)
loadButton.addEventListener("click", clickloadBtn)