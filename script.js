const goods = [];
const selectedGoods = [];
let isGoodsImported = false;

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

function creatingListOfGoods(){
    const kofola2l = new good("Kofola 2L",130,30); goods.push(kofola2l);
    const kofola15l = new good("Kofola 1.5l",90,25); goods.push(kofola15l);
    const jablka = new good("Jablka",300,7); goods.push(jablka);
    const hrusky = new good("Hrusky",180,10); goods.push(hrusky);
}

function importGoods(){
    let table = document.getElementById("table-goods");
    for(let i = 0; i < goods.length; i++){
        let row = table.insertRow(-1);
        let cellID = row.insertCell(0);
        cellID.innerHTML = i;
        let cellName = row.insertCell(1);
        cellName.innerHTML = goods[i].name;
        let cellNumberOfAvaiablePieces = row.insertCell(2);
        cellNumberOfAvaiablePieces.innerHTML = goods[i].numberOfAvaiablePieces;
        let cellPricePerPiece = row.insertCell(3);
        cellPricePerPiece.innerHTML = goods[i].pricePerPiece;
    }
    isGoodsImported = true
}

function resetGoods(){
    window.location.reload();
}

function reset(){
    if(isGoodsImported) resetGoods();
    else{
        creatingListOfGoods();
        importGoods();
    }
}