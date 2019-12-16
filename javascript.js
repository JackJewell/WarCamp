let points = 0;
let numCommand = 0;
let numInfantry = 0;
let numRanged = 0;
let numCavalry = 0;

function startup(){
    $("#modeSelect").attr("style","display: none");
    $("#modeSelect").attr("style","display: none");
}

function begin(){
    $("#startPage").attr("style","display: none");
    $("#modeSelect").attr("style","display: block");
}

function listMode(){
    $("#modeSelect").attr("style","display: none");
    $("#listMode").attr("style","display: block");
}

function listBuilder(){
    $("#listModeSelect").attr("style","display: none");
    $("#factionSelect").attr("style","display: block");
}

function factionBuilder(){
    $("#factionSelect").attr("style","display: none");
    $("#list").attr("style","display: block");
}

function unitDisplay(unitType){
    let unitTypeId = "#"+unitType.id+"Units";
    $(unitTypeId).attr("style","display: block");
}

function unitHide(unitType){
    let unitTypeId = "#"+unitType.id+"Units";
    $(unitTypeId).attr("style","display: none");
}

function pointCounter(buttonId,typeOfCall){
    pointsAdder = parseInt(buttonId.value);
    console.log(pointsAdder);
    if(pointsAdder>0){
         points = points+pointsAdder;
    }else if(points>0){
        points = points+pointsAdder;
    }else{

    }
   
    pointsText = "Points: "+points;
    $("#points").text(pointsText);

    if(typeOfCall===1){
        let counterId = "#" + buttonId.id + "Counter";
        let numUnits = $(counterId).val();
        if(pointsAdder>1){
        numUnits++; 
        }else if(numUnits>0){
            numUnits--;
        }else{

        }
        $(counterId).val(numUnits);
        $(counterId).text("#: "+numUnits);
        listAdder(buttonId.id,pointsAdder);
    }else{

    }
}

function listAdder(unitId,pointsData){
    let listType;
    if(unitId === "duke"||unitId === "count"||unitId === "knightCap"){
        listType = "commandUnitList";
        numCommand++;
    }else if (unitId === "peasant"||unitId === "militia"||unitId === "sergeants"||unitId === "heavy"||unitId === "footKnight"){
        listType = "infantryUnitList";
        numInfantry++;
    }else if (unitId === "archers"||unitId === "crossbowmen"){
        listType = "rangedUnitList";
        numRanged++;
    }else{
        listType = "cavalryUnitList";
        numCavalry++;
    }

    let itemId;
    let listIdVar = "#"+listType;
    let newItem = $("<li></li>");
    newItem.text(unitId);
    switch(listType){
        case "commandUnitList":
            itemId = listType+numCommand;
            break;
        case "infantryUnitList":
            itemId = listType+numCommand;
            break;
        case "rangedUnitList":
            itemId = listType+numCommand;
            break;
        case "cavalryUnitList":
            itemId = listType+numCommand;
            break;
        default:
            break;
    }
    newItem.attr("id",itemId);
    $(listIdVar).append(newItem);
    let negPoints = pointsData*-1;

    let newButton = $("<button></button>");
    newButton.text("X");
    newButton.attr("onclick","itemRemove(this)");
    newButton.attr("data-id",itemId);
    newButton.attr("data-unitType",unitId);
    newButton.attr("value",negPoints);
    $("#"+itemId).append(newButton);
}

function itemRemove(item){
    console.log(item);
    let removeId = item.getAttribute("data-id");
    let counterRemoveId = item.getAttribute("data-unitType")+"Counter";
    console.log(counterRemoveId);
    let counterNum = $("#"+counterRemoveId).val();
    counterNum--;
    $("#"+counterRemoveId).val(counterNum);
    $("#"+counterRemoveId).text("#: "+counterNum);
    console.log(removeId);
    $("#"+removeId).remove();
    pointCounter(item,0);
}