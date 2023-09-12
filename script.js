const goods = [];
const selectedGoods = [];
let isGoodsImported = false;
let isSelectedGoodsAdded = false;
let idOfSelectedPieces = 0;

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
    const kofola2l2 = new good("Kofola 2L",130,30); goods.push(kofola2l2);
    const kofola15l2 = new good("Kofola 1.5l",90,25); goods.push(kofola15l2);
    const jablka2 = new good("Jablka",300,7); goods.push(jablka2);
    const hrusky2 = new good("Hrusky",180,10); goods.push(hrusky2);
    const kofola2l3 = new good("Kofola 2L",130,30); goods.push(kofola2l3);
    const kofola15l3 = new good("Kofola 1.5l",90,25); goods.push(kofola15l3);
    const jablka3 = new good("Jablka",300,7); goods.push(jablka3);
    const hrusky3 = new good("Hrusky",180,10); goods.push(hrusky3);
    const kofola2l4 = new good("Kofola 2L",130,30); goods.push(kofola2l4);
    const kofola15l4 = new good("Kofola 1.5l",90,25); goods.push(kofola15l4);
    const jablka5 = new good("Jablka",300,7); goods.push(jablka5);
    const hrusky5 = new good("Hrusky",180,10); goods.push(hrusky5);
}

function importGoods(){
    if(isGoodsImported){
        var numberOfRowsInShoppingCart = document.getElementById("table-goods").rows.length;
        for (let i = 2; i < numberOfRowsInShoppingCart; i++){
            for(let j = 0; i < numberOfRowsInShoppingCart ; j++){
                document.getElementById("table-goods").deleteRow(i);
            }
        }
    }else{
        creatingListOfGoods();
    }
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
    isGoodsImported = true;
}

function addGoods(){
    if(isSelectedGoodsAdded) {
        var numberOfRowsInShoppingCart = document.getElementById("table-shoppingCart").rows.length;
        for (let i = 2; i < numberOfRowsInShoppingCart; i++){
            document.getElementById("table-shoppingCart").deleteRow(2);
        }
    }
        let table = document.getElementById("table-shoppingCart");
        let idOfGood = Number(document.getElementById("idOfGoodsType").value);
        if( idOfGood > goods.length ) {
            alert(err);
        }
        let numberOfPieces = Number(document.getElementById("numberOfPieces").value);
        if( idOfGood < 0 || numberOfPieces <= 0){
            alert("You cannot buy nothing");
            return;
        }
        const selectedGood = goods[idOfGood];
        selectedGoods.push(selectedGood);
        selectedGood.numberOfAvaiablePieces = numberOfPieces;
        for(let i = 0; i < selectedGoods.length; i++){
            let row = table.insertRow(-1);
            let cellID = row.insertCell(0);
            cellID.innerHTML = i;
            let cellName = row.insertCell(1);
            cellName.innerHTML = selectedGoods[i].name;
            let cellNumberOfAvaiablePieces = row.insertCell(2);
            cellNumberOfAvaiablePieces.innerHTML = selectedGoods[i].numberOfAvaiablePieces;
            let cellPricePerPiece = row.insertCell(3);
            cellPricePerPiece.innerHTML = selectedGoods[i].pricePerPiece;
        }
        ++ idOfSelectedPieces;
        isSelectedGoodsAdded = true;
}

function reset(){
    importGoods();
}