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

function payment(){
    const currency = document.getElementById("meny").value;
    let sum = 0; //in czk
    for (const selectedGood of selectedGoods) {
        sum += selectedGood.pricePerPiece;
    }
    switch(currency){
        case "CZK":
            sum *= 1;
            break;
        case "EUR":
            sum *= 0.041;
            break;
        case "PLN":
            sum *= 0.19;
            break;
        case "USD":
            sum *= 0.044;
            break;
        case "YEN":
            sum *= 6.49;
            break;
        case "RUB":
            sum *= 4.24;
            break;    
    }
    //* mám cenu 
    //TODO zobrazit seznam zakoupených produktů => vymazat košík
    //TODO doplnit další věci do košíku
    alert(`You need to pay: ${sum}in currency :${currency}`);
}

function creatingListOfGoods(){
    const kofola2l = new good("Kofola 2L",130,30); goods.push(kofola2l);
    const kofola15l = new good("Kofola 1.5l",90,25); goods.push(kofola15l);
    const jablka = new good("Jablka",300,7); goods.push(jablka);
    const hrusky = new good("Hrusky",180,10); goods.push(hrusky);
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
    }   let isThere = false;
        let add = true;
        const table = document.getElementById("table-shoppingCart-body");
        const idOfGood = Number(document.getElementById("idOfGoodsType").value);
        if( idOfGood > goods.length ) {
            alert("You cannot buy nothing");
            add = false;
            return;
        }
        const numberOfPieces = Number(document.getElementById("numberOfPieces").value);
        if( idOfGood < 0 || numberOfPieces <= 0){
            alert("You cannot buy nothing");
            add = false;
            return;
        }
        if(goods[idOfGood].numberOfAvaiablePieces == 0){
            alert("You cannot buy more goods than how many is available right now");
            add = false;
            return;
        }
        if(numberOfPieces > goods[idOfGood].numberOfAvaiablePieces) {
            alert("You cannot buy more goods than how many is available right now");
            add = false;
            return;
        }
        let available = goods[idOfGood].numberOfAvaiablePieces;
        available -= Number(numberOfPieces);
        goods[idOfGood].numberOfAvaiablePieces = available;
        reset();
        const selectedGood = Object.assign({},goods[idOfGood]); //*Making copy of object
        const priceForAllPieces = numberOfPieces * selectedGood.pricePerPiece;
        selectedGood.pricePerPiece = priceForAllPieces;
        selectedGood.numberOfAvaiablePieces = numberOfPieces;
        for(let i = 0; i < selectedGoods.length; i++){
            const name = selectedGood.name;
            if(selectedGoods[i].name == name){
                isThere = true;
            }
        }
        if(isThere){
            for(let i = 0; i < selectedGoods.length; i++){
                const name = selectedGood.name;
                if(name == selectedGoods[i].name){
                    selectedGoods[i].numberOfAvaiablePieces += numberOfPieces;
                    selectedGoods[i].pricePerPiece += priceForAllPieces;
                    add = true;
                }
            }
        }
        else{
            selectedGoods.push(selectedGood);
            add = true;
        }
        if(!add){return;}
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
        document.getElementById("idOfGoodsType").value = "";
        document.getElementById("numberOfPieces").value ="";
}

function reset(){
    importGoods();
}

function removeOneRow(){ 
    const indexOfRow = Number(document.getElementById("idOfRemovingRow").value);   
    const numberOfSelectedPieces = Number(selectedGoods[indexOfRow].numberOfAvaiablePieces);
    const name = selectedGoods[indexOfRow].name;
    for (const goodElement of goods) {
        if(name == goodElement.name){
            goodElement.numberOfAvaiablePieces += numberOfSelectedPieces;
        }
    }
    selectedGoods.splice(indexOfRow,1);
    const numberOfRowsInShoppingCart = document.getElementById("table-shoppingCart-body").rows.length;
    for (let i = 0; i < numberOfRowsInShoppingCart; i++){
        for (const row of document.getElementById("table-shoppingCart-body").rows) {
            document.getElementById("table-shoppingCart-body").deleteRow(row);
        }
    }
    const table = document.getElementById("table-shoppingCart-body");
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
    document.getElementById("idOfRemovingRow").value = "";
    reset();
}

function removeAllGoods(){
    for (const selectedGood of selectedGoods) {
        const name = selectedGood.name;
        for (const goodElement of goods) {
            if(name == goodElement.name){
                const selectedPieces = selectedGood.numberOfAvaiablePieces;
                goodElement.numberOfAvaiablePieces += selectedPieces;
            }
        }
    }
    reset();
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