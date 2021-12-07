const saveButton = document.getElementById("saveBtn");
const loadButton = document.getElementById("loadBtn");

function save() {
    let TxTData = document.getElementById("TxT").value;
    localStorage.setItem("saveTxT", TxTData);
    console.log("SAVE!")
}
function load() {
    let TxTData = localStorage.getItem("saveTxT");
    document.getElementById("TxT").value = TxTData;
    console.log("LOAD!")
}

saveButton.addEventListener("click", save)
loadButton.addEventListener("click", load)