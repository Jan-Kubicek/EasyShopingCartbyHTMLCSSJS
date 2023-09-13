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
        const numberOfRowsInShoppingCart = document.getElementById("table-goods-body").rows.length;
        for (let i = 0; i < numberOfRowsInShoppingCart; i++){
            for (const row of document.getElementById("table-goods-body").rows) {
                document.getElementById("table-goods-body").deleteRow(row);
            }
        }
    }else{
        creatingListOfGoods();
    }
    const table = document.getElementById("table-goods-body");
    for(let i = 0; i < goods.length; i++){
        const row = table.insertRow(-1);
        const cellID = row.insertCell(0);
        cellID.innerHTML = i;
        const cellName = row.insertCell(1);
        cellName.innerHTML = goods[i].name;
        const cellNumberOfAvaiablePieces = row.insertCell(2);
        cellNumberOfAvaiablePieces.innerHTML = goods[i].numberOfAvaiablePieces;
        const cellPricePerPiece = row.insertCell(3);
        cellPricePerPiece.innerHTML = goods[i].pricePerPiece;
    }
    isGoodsImported = true;
}

function addGoods(){
    if(isSelectedGoodsAdded) {
        const numberOfRowsInShoppingCart = document.getElementById("table-shoppingCart-body").rows.length;
        for (let i = 0; i < numberOfRowsInShoppingCart; i++){
            for (const row of document.getElementById("table-shoppingCart-body").rows) {
                document.getElementById("table-shoppingCart-body").deleteRow(row);
            }
        }
    }
        const table = document.getElementById("table-shoppingCart-body");
        const idOfGood = Number(document.getElementById("idOfGoodsType").value);
        if( idOfGood > goods.length ) {
            alert("You cannot buy nothing");
            return;
        }
        const numberOfPieces = Number(document.getElementById("numberOfPieces").value);
        if( idOfGood < 0 || numberOfPieces <= 0){
            alert("You cannot buy nothing");
            return;
        }
        if(goods[idOfGood].numberOfAvaiablePieces == 0){
            alert("You cannot buy more goods than how many is available right now");
            return;
        }
        if(numberOfPieces > goods[idOfGood].numberOfAvaiablePieces) {
            numberOfPieces = goods[idOfGood].numberOfAvaiablePieces;
            goods[idOfGood].numberOfAvaiablePieces = 0;
            alert("You cannot buy more goods than how many is available right now");
            reset();
        }else{
            let available = goods[idOfGood].numberOfAvaiablePieces;
            available -= Number(numberOfPieces);
            goods[idOfGood].numberOfAvaiablePieces = available;
            reset();
        }
        const selectedGood = Object.assign({},goods[idOfGood]); //*Making copy of object
        const priceForAllPieces = numberOfPieces * selectedGood.pricePerPiece;
        selectedGood.pricePerPiece = priceForAllPieces;
        selectedGood.numberOfAvaiablePieces = numberOfPieces;
        selectedGoods.push(selectedGood);
        for(let i = 0; i < selectedGoods.length; i++){
            const row = table.insertRow(-1);
            const cellID = row.insertCell(0);
            cellID.innerHTML = i;
            const cellName = row.insertCell(1);
            cellName.innerHTML = selectedGoods[i].name;
            const cellNumberOfAvaiablePieces = row.insertCell(2);
            cellNumberOfAvaiablePieces.innerHTML = selectedGoods[i].numberOfAvaiablePieces;
            const cellPricePerPiece = row.insertCell(3);
            cellPricePerPiece.innerHTML = selectedGoods[i].pricePerPiece;
        }
        ++ idOfSelectedPieces;
        isSelectedGoodsAdded = true;
}

function reset(){
    importGoods();
}

function removeAllGoods(){
    const numberOfRowsInShoppingCart = document.getElementById("table-shoppingCart-body").rows.length;
    if(numberOfRowsInShoppingCart > 0){
        for (let i = 0; i < numberOfRowsInShoppingCart; i++){
            for (const row of document.getElementById("table-shoppingCart-body").rows) {
                document.getElementById("table-shoppingCart-body").deleteRow(row);
            }
        }
        selectedGoods.length = 0; //* Making selectedGoods Empty by setting length
        alert("All goods was successfully deleted from your shopping cart");
    }  else{
        alert("No goods is in your shopping Cart there is no need to delete any goods!");
    }
}