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
    
}

function unitDisplay(unitType){
    let unitTypeId = "#"+unitType.id+"Units";
    $(unitTypeId).attr("style","display: block");
}

function unitHide(unitType){
    let unitTypeId = "#"+unitType.id+"Units";
    $(unitTypeId).attr("style","display: none");
}

function buildList(){
    $("#factionSelect").attr("style","display: none");
    $("#list").attr("style","display: block");
    katerianList.forEach(function(returnedVar){
        let type = returnedVar.type;
        let posVar = returnedVar.position;
        let title = returnedVar.title;
        let points = returnedVar.points;
        let idVar = returnedVar.name;
        let outDiv = $("<div></div>");
        let outDivId = idVar+"Out";
        outDiv.attr("id", outDivId);

        switch(type){
            case "command":
                $("#commandUnits").append(outDiv);
                break;
            case "infantry":
                $("#infantryUnits").append(outDiv);
                break;
            case "ranged":
                $("#rangedUnits").append(outDiv);
                break;
            case "cavalry":
                $("#cavalryUnits").append(outDiv);
                break;
            default:
                break;
        }
        let headerVar = $("<h3></h3>");
        headerVar.text(title+": "+points);

        let counterVar = $("<h4></h4>");
        counterVar.attr("id", idVar+"Counter");
        counterVar.attr("value",0);
        counterVar.text("#: 0");

        let buttonVar = $("<button></button>");
        buttonVar.text("+");
        buttonVar.attr("id",idVar);
        buttonVar.attr("type","button");
        buttonVar.attr("class","btn crownBtn");
        buttonVar.attr("data-unitType",type);
        buttonVar.attr("data-unitPosition",posVar);
        buttonVar.attr("onclick",'pointCounter(this,1)');
        buttonVar.attr("value",points);

        $("#"+outDivId).append(headerVar);
        $("#"+outDivId).append(counterVar);
        $("#"+outDivId).append(buttonVar);
    });
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
        let unitClass = buttonId.getAttribute("data-unitType")
        let unitPosition = buttonId.getAttribute("data-unitPosition")
        listAdder(buttonId.id,unitClass,pointsAdder,unitPosition);
    }else{

    }
}

function listAdder(unitId,unitClassVar,pointsData,posNum){
    let listType;
    if(unitClassVar === "command"){
        listType = "commandUnitList";
        numCommand++;
    }else if (unitClassVar === "infantry"){
        listType = "infantryUnitList";
        numInfantry++;
    }else if (unitClassVar === "ranged"){
        listType = "rangedUnitList";
        numRanged++;
    }else{
        listType = "cavalryUnitList";
        numCavalry++;
    }

    let itemId;
    let listIdVar = "#"+listType;
    let newItem = $("<div></div>");
    switch(listType){
        case "commandUnitList":
            itemId = listType+numCommand;
            break;
        case "infantryUnitList":
            itemId = listType+numInfantry;
            break;
        case "rangedUnitList":
            itemId = listType+numRanged;
            break;
        case "cavalryUnitList":
            itemId = listType+numCavalry;
            break;
        default:
            break;
    }
    newItem.attr("class","crownBtn unitBtn");
    newItem.attr("id",itemId);
    $(listIdVar).append(newItem);
    let negPoints = pointsData*-1;
    let unitTitle = katerianList[posNum].title;
    let newText = $("<p></p>");
    newText.text(unitTitle);
    newText.attr("class","unitCld unitName");
    $("#"+itemId).append(newText);

    let newButton = $("<button></button>");
    newButton.text("X");
    newButton.attr("onclick","itemRemove(this)");
    newButton.attr("data-id",itemId);
    newButton.attr("class","crownBtn unitCld unitClsr");
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

let katerianList = [
    duke = {
        position: 0,
       name: "duke",
       title: "Duke",
       points: 55,
       type: "command",
       stats:{
           meleeSkill: "2",
           rangedSkill: "0",
           range: "1",
           armorValue: "0",
           manpower: "0",
           bravery: "3",
           leadership: "11"
       },
       traits: ["Katerian Empire","Command","[Subfaction]"],
       abilities: [
           "Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
           "Fight for Your Land!: Once per turn, choose a friendly unit that is within 6 inches of this one. If that unit is destroyed or breaks, it may make an attack roll before being removed from the board."
       ],
       card: "duke.png",
       orders: {
           name: "holdTheLine",
           title: "Hold the Line!",
           description: "Choose a friendly unit, this unit makes a 3 inch move toward it. Increase that unit's armor profile by 1(to a max of 5) until the end of the round." ,
           card: "holdTheLine.png"
       }
   },

    count = {
        position: 1,
       name: "count",
       title: "Count",
       points: 40,
       type: "command",
       stats : {
           meleeSkill: "1",
           rangedSkill: "0",
           range: "1",
           armorValue: "0",
           manpower: "0",
           bravery: "2",
           leadership: "8"
       },
       traits : ["Katerian Empire","Command","[Subfaction]"],
       abilities : [
           "Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
       ],
       card: "count.png",
       orders: {
           name: "holdTheLine",
           title: "Hold the Line!",
           description: "Choose a friendly unit, this unit makes a 3 inch move toward it. Increase that unit's armor profile by 1(to a max of 5) until the end of the round." ,
           card: "holdTheLine.png"
       }
   },

    knightCap = {
        position: 2,
       name: "knightCap",
       title: "Knight-Captain",
       points: 30,
       type: "command",
       stats: {
           meleeSkill: "1",
           rangedSkill: "0",
           range: "1",
           armorValue: "0",
           manpower: "0",
           bravery: "1",
           leadership: "6"
       },
       traits: ["Katerian Empire","Command","[Subfaction]"],
       abilities: [
           "Commander: This Unit is attached to another Unit for the duration of the Battle. That unit adds the Values, Abilities and Unique Orders of this one to itself.",
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
       ],
       card: "knightCap.png",
       orders: {
           name: "holdTheLine",
           title: "Hold the Line!",
           description: "Choose a friendly unit, this unit makes a 3 inch move toward it. Increase that unit's armor profile by 1(to a max of 5) until the end of the round." ,
           card: "holdTheLine.png"
       }
   },

    peasant = {
        position: 3,
       name: "peasant",
       title: "Peasant Mob",
       points: 50,
       type: "infantry",
       stats: {
           meleeSkill: "2",
           rangedSkill: "0",
           range: "1",
           armorValue: "0",
           manpower: "150",
           bravery: "2",
           leadership: "0"
       },
       weaponry: [
           "Spears"
       ],
       traits: ["Katerian Empire","infantry","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
       ],
       card: "peasant.png",
       orders: {
       }
       
   },

    militia = {
        position: 4,
       name: "militia",
       title: "Militia",
       points: 75,
       type: "infantry",
       stats: {
           meleeSkill: "3",
           rangedSkill: "0",
           range: "1",
           armorValue: "1",
           manpower: "150",
           bravery: "3",
           leadership: "0"
       },
       weaponry: [
           "Spears",
           "Two-handed Axes",
           "Halberds"
       ],
       traits: ["Katerian Empire","infantry","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
       ],
       card: "militia.png",
       orders: {
       }
   },

    sergeants = {
        position: 5,
       name: "sergeants",
       title: "Sergeants",
       points: 90,
       type: "infantry",
       stats: {
           meleeSkill: "4",
           rangedSkill: "0",
           range: "1",
           armorValue: "2",
           manpower: "150",
           bravery: "4",
           leadership: "0"
       },
       weaponry: [
           "Spears",
           "Two-handed Axes",
           "Halberds",
           "Swords and Shields",
           "Pikes"
       ],
       traits: ["Katerian Empire","infantry","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
       ],
       card: "sergeants.png",
       orders: {
           name: "keepCalm",
           title:"Keep calm!",
           description: "This unit loses its next movement order. It may remove a Fear Token from itself and one friendly unit within 2 inches." ,
           card: "keepCalm.png"
       }
       
   },

    heavyInf = {
        position: 6,
       name: "heavyInf",
       title: "Heavy Infantry",
       points: 110,
       type: "infantry",
       stats: {
           meleeSkill: "4",
           rangedSkill: "0",
           range: "1",
           armorValue: "4",
           manpower: "150",
           bravery: "6",
           leadership: "0"
       },
       weaponry: [
           "Halberds",
           "Pikes",
           "Polaxes"
       ],
       traits: ["Katerian Empire","infantry","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
       ],
       card: "heavyInf.png",
       orders: {
           name: "breakThem",
           title: "Break them!",
           description: "This unit makes a charge attack towards an enemy unit of your choice. If it is successful, the enemy unit aquires a Fear Token." ,
           card: "breakThem.png"
       }
       
   },

    footKnights = {
        position: 7,
       name: "footKnights",
       title: "Foot Knights",
       points: 130,
       type: "infantry",
       stats: {
           meleeSkill: "6",
           rangedSkill: "0",
           range: "1",
           armorValue: "5",
           manpower: "150",
           bravery: "6",
           leadership: "0"
       },
       weaponry: [
           "Polaxes",
           "Longswords"
       ],
       traits: ["Katerian Empire","infantry","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
       ],
       card: "footKnights.png",
       orders: {
           name: "rally",
           title: "Rally!",
           description: "This unit makes a charge action towards an enemy unit of your choice, If it is successful, this unit and all other friendly units within 3 inches of it's starting position may remove one Fear Token." ,
           card: "rally.png"
       }
       
   },

    archers = {
        position: 8,
       name: "archers",
       title: "Archers",
       points: 120,
       type: "ranged",
       stats: {
           meleeSkill: "1",
           rangedSkill: "2",
           range: "12",
           armorValue: "0",
           manpower: "100",
           bravery: "3",
           leadership: "0"
       },
       weaponry: [
           "Bodkins",
           "Broadheads"
       ],
       traits: ["Katerian Empire","ranged","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
       ],
       card: "archers.png",
       orders: {
       }
       
   },

    crossbowmen = {
        position: 9,
       name: "crossbowmen",
       title: "Crossbowmen",
       points: 100,
       type: "ranged",
       stats: {
           meleeSkill: "1",
           rangedSkill: "3",
           range: "8",
           armorValue: "1",
           manpower: "100",
           bravery: "3",
           leadership: "0"
       },
       weaponry: [
           "Bodkins",
           "Broadheads"
       ],
       traits: ["Katerian Empire","ranged","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
       ],
       card: "crossbowmen.png",
       orders: {
       }
       
   },

    scoutCav = {
        position: 10,
       name: "scoutCav",
       title: "Scout Cavalry",
       points: 70,
       type: "cavalry",
       stats: {
           meleeSkill: "3",
           rangedSkill: "0",
           range: "1",
           armorValue: "2",
           manpower: "75",
           bravery: "3",
           leadership: "0"
       },
       weaponry: [
           "Spears",
           "Longswords"
       ],
       traits: ["Katerian Empire","cavalry","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile.",
           "Disengage!: Once per round, if this unit takes damage you may immediately issue a move order as if it was the movement phase."
       ],
       card: "scoutCav.png",
       orders: {
       }
       
   },

    mountedSerg = {
        position: 11,
       name: "mountedSerg",
       title: "Mounted Sergeants",
       points: 120,
       type: "cavalry",
       stats: {
           meleeSkill: "4",
           rangedSkill: "0",
           range: "1",
           armorValue: "3",
           manpower: "75",
           bravery: "4",
           leadership: "0"
       },
       weaponry: [
           "Spears",
           "Longswords",
           "Lances"
       ],
       traits: ["Katerian Empire","cavalry","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."
       ],
       card: "mountedSerg.png",
       orders: {
       }
       
   },

    mountedKnights = {
        position: 12,
       name: "mountedKnights",
       title: "Mounted Knights",
       points: 160,
       type: "cavalry",
       stats: {
           meleeSkill: "6",
           rangedSkill: "0",
           range: "1",
           armorValue: "4",
           manpower: "75",
           bravery: "6",
           leadership: "0"
       },
       weaponry: [
           "Longswords",
           "Lances"
       ],
       traits: ["Katerian Empire","cavalry","[Subfaction]"],
       abilities: [
           "Lockstep: When another unit with the 'Katerian Empire' keyword is within 1 inch of either flank of this unit, both of them get +1 to their melee skill profile."
       ],
       card: "mountedKnights.png",
       orders: {
           name: "rally",
           title: "Rally!",
           description: "This unit makes a charge action towards an enemy unit of your choice, If it is successful, this unit and all other friendly units within 3 inches of it's starting position may remove one Fear Token." ,
           card: "rally.png"
       }
       
   },

    movementOrders = [
       type = "orders",
       oneInchStr ={
           name: "oneInchStr",
           title: "1 Inch Straight Move",
           description: "Make a 1 inch straight move",
           card: "oneInchStr.png"
       },
       twoInchStr ={
           name: "twoInchStr",
           title: "2 Inch Straight Move",
           description: "Make a 2 inch straight move",
           card: "twoInchStr.png"
       },
       threeInchStr ={
           name: "threeInchStr",
           title: "3 Inch Straight Move",
           description: "Make a 3 inch straight move",
           card: "threeInchStr.png"
       },
       fourInchStr ={
           name: "fourInchStr",
           title: "4 Inch Straight Move",
           description: "Make a 4 inch straight move",
           card: "fourInchStr.png"
       },
       twoInchHalfWheel ={
           name: "twoInchHalfWheel",
           title: "2 Inch Half-Wheel",
           description: "Make a 2 Inch Half-Wheel",
           card: "twoInchHalfWheel.png"
       },
       threeInchHalfWheel ={
           name: "threeInchHalfWheel",
           title: "3 Inch Half-Wheel",
           description: "Make a 3 Inch Half-Wheel",
           card: "threeInchHalfWheel.png"
       },
       twoInchWheel ={
           name: "twoInchWheel",
           title: "2 Inch Wheel",
           description: "Make a 2 Inch Wheel",
           card: "twoInchWheel.png"
       },
       threeInchWheel ={
           name: "threeInchWheel",
           title: "3 Inch Wheel",
           description: "Make a 3 Inch Wheel",
           card: "threeInchWheel.png"
       },
       holdPosition ={
           name: "holdPosition",
           title: "Hold Position!",
           description: "This Unit does not move",
           card: "holdPosition.png"
       },
       formWedge ={
           name: "formWedge",
           title: "Form Wedge!",
           description: "This Unit changes to a Wedge Formation",
           card: "formWedge.png"
       },
       formColumn ={
           name: "formColumn",
           title: "Form Column!",
           description: "This Unit changes to a Column Formation",
           card: "formColumn.png"
       }
   ],

    combatOrders = [
       type = "orders",
       charge = {
           name: "charge",
           title: "Charge!",
           description: "Select a unit to charge at, then make a 3 inch straight move. If this unit ends within 1 inch of the charged unit, the charge succeeds, add 2 to the unit's melee skill profile, then immediately make an attack action. If this unit does not end its move within 1 inch of the charged unit, the charge has failed.",
           card: "charge.png"
       },
       disengage = {
           name: "disengage",
           title: "Disengage!",
           description: "This Unit disengages with the Unit it is currently Engaged with. It makes a 3 inch straight move away from the other Unit.",
           card: "disengage.png"
       },
       carryOn = {
           name: "carryOn",
           title: "Carry On!",
           description: "This Unit does nothing.",
           card: "carryOn.png"
       },
       attack = {
           name: "attack",
           title: "Attack!",
           description: "This Unit makes an attack action against a unit it is engaged with.",
           card: "attack.png"
       },
       loftTheBanner = {
           name: "loftTheBanner",
           title: "Loft the Banner!",
           description: "This Unit's Bravery Score is improved by 1 until the end of the round.",
           card: "loftTheBanner.png"
       },
   ],

    infantryOrders = {
       movement: [
           rightFace ={
               name: "rightFace",
               title: "Right Face!",
               description: "This Unit changes its facing to 90 degrees of the right of its current facing.",
               card: "rightFace.png"
           },
           leftFace ={
               name: "leftFace",
               title: "Left Face!",
               description: "This Unit changes its facing to 90 degrees of the left of its current facing.",
               card: "leftFace.png"
           },
           aboutFace ={
               name: "aboutFace",
               title: "About Face!",
               description: "This Unit changes its facing to 180 degrees of its current facing.",
               card: "aboutFace.png"
           },
           formSquare ={
               name: "formSquare",
               title: "Form Square!",
               description: "This Unit changes to a Square Formation",
               card: "formSquare.png"
           }
       ],
       combat: [
           brace = {
               name: "brace",
               title: "Brace!",
               description: "Any units that attack this one must re-roll all 6s. This Unit cannot be issued a Movement Order next turn.",
               card: "brace.png"
           }
       ]
   },

    rangedOrders = {
       type: "orders",
       movement: [
           rightFace ={
               name: "rightFace",
               title: "Right Face!",
               description: "This Unit changes its facing to 90 degrees of the right of its current facing.",
               card: "rightFace.png"
           },
           leftFace ={
               name: "leftFace",
               title: "Left Face!",
               description: "This Unit changes its facing to 90 degrees of the left of its current facing.",
               card: "leftFace.png"
           },
           aboutFace ={
               name: "aboutFace",
               title: "About Face!",
               description: "This Unit changes its facing to 180 degrees of its current facing.",
               card: "aboutFace.png"
           },
           formSquare ={
               name: "formSquare",
               title: "Form Square!",
               description: "This Unit changes to a Square Formation",
               card: "formSquare.png"
           }
       ],
       combat: [
           volley = {
               name: "volley",
               title: "Volley!",
               description: "If this unit did not move during the movement phase, add 4 to its ranged skill profile for this round, then select a Hostile Unit within Range and make a Ranged attack targeting them.",
               card: "volley.png"
           },
           loose = {
               name: "loose",
               title: "Loose at Will!",
               description: "This Unit makes a Ranged attack targeting a Unit of its choice within Range.",
               card: "loose.png"
           }
       ]
   },

    cavalryOrders = {
       type: "orders",
       movement: [
           fiveInchStr ={
               name: "fiveInchStr",
               title: "5 Inch Straight Move",
               description: "Make a 5 inch straight move",
               card: "fiveInchStr.png"
           },
           sixInchStr ={
               name: "sixInchStr",
               title: "6 Inch Straight Move",
               description: "Make a 6 inch straight move",
               card: "sixInchStr.png"
           },
           fourInchHalfWheel ={
               name: "fourInchHalfWheel",
               title: "4 Inch Half-Wheel",
               description: "Make a 4 Inch Half-Wheel",
               card: "fourInchHalfWheel.png"
           },
           fiveInchHalfWheel ={
               name: "fiveInchHalfWheel",
               title: "5 Inch Half-Wheel",
               description: "Make a 5 Inch Half-Wheel",
               card: "fiveInchHalfWheel.png"
           },
           fourInchWheel ={
               name: "fourInchWheel",
               title: "4 Inch Wheel",
               description: "Make a 4 Inch Wheel",
               card: "fourInchWheel.png"
           },
           fiveInchWheel ={
               name: "fiveInchWheel",
               title: "5 Inch Wheel",
               description: "Make a 5 Inch Wheel",
               card: "fiveInchWheel.png"
           }
       ],
       combat: [
           soundCharge ={
               name: "soundCharge",
               title: "Sound the Charge!",
               description: "This unit makes a charge action towards a Hostile Unit of your choice, if the charge is not successful, immediately make another charge action towards the same Hostile Unit.",
               card: "soundCharge.png"
           }
       ]
   },

    weapons = [
       type = "equipment",
       swordShield = {
           name: "swordShield",
           title:"Sword and Shields",
           ability: [
               parry ={ 
                   name: "parry",
                   title: "Parry",
                   description: "Attacking enemy units must reroll all 6s for melee damage."
               }
           ],
           order: {
               name: "lockShields",
               title: "Lock Shields!",
               description: "Make a brace action and then an attack action.",
               card: "lockShields.png"
           }
       },
       axe = {
           name: "axe",
           title:"Two-Handed Axes",
           ability: [
               hackingBlows = { 
                   name: "hackingBlows",
                   title: "Hacking Blows",
                   description: "When this unit attacks another unit, that unit recieves a Fear Token on a 1 or a 2."
               }
           ],
           order: {
               name: "pushBack",
               title: "Push them back!",
               description: "This Unit makes an attack action. If this Units deals more than 30 damage to the attacked Unit, both it, and the attacked Unit make a straight 2 inch move to the attacking Unit's forward direction.",
               card: "pushBack.png"
           }
       },
       polaxe = {
           name: "polaxe",
           title:"Polaxes",
           ability: [
               hackingBlows ={ 
                   name: "hackingBlows",
                   title: "Hacking Blows",
                   description: "When this unit attacks another unit, that unit recieves a Fear Token on a 1 or a 2."
               },
               rend ={ 
                   name: "rend",
                   title: "Rend",
                   description: "Whenever this unit attacks an enemy unit, reduce that unit's armor value profile by 1 for the rest of the round."
               },
               stickThem ={ 
                   name: "stickThem",
                   title: "Stick Them!",
                   description: "Reroll all 1s for melee damage"
               }
           ],
           order: {
               name: "changeStance",
               title: "Change Stance!",
               description: "This Unit's current active Weapon Ability is deactivated. Choose a new Weapon Ability from the Polaxe list, it becomes active.",
               card: "changeStance.png"
           }
       },
       spear = {
           name: "spear",
           title:"Spears",
           ability: [
               rend ={ 
                   name: "rend",
                   title: "Rend",
                   description: "Whenever this unit attacks an enemy unit, reduce that unit's armor value profile by 1 for the rest of the round."
               }
           ],
           order: {
               name: "readySpears",
               title: "Ready Spears!",
               description: "If this unit is successfully charged this round, it increases its armor value profile by 1(to a max of 5).",
               card: "readySpears.png"
           }
       },
       halberd = {
           name: "halberd",
           title:"Halberds",
           ability: [
               swingingBlades ={ 
                   name: "swingingBlades",
                   title: "Swinging Blades",
                   description: "This unit may add 1(to a max of 5) to its armor value profile."
               }
           ],
           order: {
               name: "carveThem",
               title: "Carve Them!",
               description: "Make an attack action against a hostile unit, that unit's melee skill profile is lowered by 1 until the end of this round.",
               card: "carveThem.png"
           }
       },
       pike = {
           name: "pike",
           title: "Pikes",
           ability: [
               longReach ={ 
                   name: "longReach",
                   title: "Long Reach",
                   description: "This Unit may make a Melee attack at ranges greater than 1 inch. This Unit's Range is increased to 3 inches."
               }
           ],
           order: {
               name: "pikesOut",
               title: "Pikes Out!",
               description: "Until the beginning of the next round, if this unit is charged by another unit with the 'Cavalry' keyword they may immediately make an attack roll against the charging unit. The damage is dealt before the charge is resolved.",
               card: "pikesOut.png"
           }
       },
       longsword = {
           name: "longsword",
           title: "Longswords",
           ability: [
               duelists ={ 
                   name: "duelists",
                   title: "Duelists",
                   description: "This unit may add 1 to its melee skill profile."
               }
           ],
           order: {
               name: "withdraw",
               title: "Withdraw!",
               description: "This Unit makes an attack action and then a disengage action.",
               card: "withdraw.png"
           }
       },
       lance = {
           name: "lance",
           title: "Lances",
           ability: [
               couched ={ 
                   name: "couched",
                   title: "Couched",
                   description: "When This unit makes a Charge Action, add 2 to its melee skill profile."
               }
           ],
           order: {
               name: "drawSidearms",
               title: "Draw Sidearms!",
               description: "This Unit unequips this weapon and equips another.",
               card: "drawSidearms.png"
           }
       },
       bodkin = {
           name: "bodkin",
           title: "Bodkins",
           ability: [
               rend ={ 
                   name: "rend",
                   title: "Rend",
                   description: "Whenever this unit attacks an enemy unit, reduce that unit's armor value profile by 1 for the rest of the round."
               }
           ],
           order: {
               name: "changeAmmunition",
               title: "Change Ammunition!",
               description: "This Unit unequips this ammunition and equips another.",
               card: "changeAmmunition.png"
           }
       },
       broadhead = {
           name: "broadhead",
           title: "Broadhead",
           ability: [
               deepCuts ={ 
                   name: "deepCuts",
                   title: "Deep Cuts",
                   description: "This unit may add 1 to its ranged skill profile."
               }
           ],
           order: {
               name: "changeAmmunition",
               title: "Change Ammunition!",
               description: "This Unit unequips this ammunition and equips another.",
               card: "changeAmmunition.png"
           }
       },
   ] 
];