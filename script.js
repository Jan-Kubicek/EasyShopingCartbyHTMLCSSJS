const goods = [];
const selectedGoods = [];


function good(name, numberOfAvaiablePieces, pricePerPiece){
    this.name = name; 
    this.numberOfAvaiablePieces = numberOfAvaiablePieces;
    this.pricePerPiece = pricePerPiece;
}

function receipt(){
    let mena ;
    let sum ;
    aler(/* return receipt sum + mena type + all selectedGoods + sum of selectedGoods */);
}

function importGoods(){
    let table = document.getElementById("table-goods");
    let row = table.insertRow(-1);
    let cellID = row.insertCell(0);
    cellID.innerHTML = "ID";
    let cellName = row.insertCell(1);
    cellName.innerHTML = "Name";
    let cellNumberOfAvaiablePieces = row.insertCell(2);
    cellNumberOfAvaiablePieces.innerHTML = "Number";
    let cellPricePerPiece = row.insertCell(3);
    cellPricePerPiece.innerHTML = "5$";
}

function reset(){
    importGoods();
}