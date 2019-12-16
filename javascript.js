let points = 0;

function pointCounter(buttonId){
    pointsAdder = parseInt(buttonId.value);
    points = points+pointsAdder;
    pointsText = "Points: "+points;
    $("#points").text(pointsText);

    let counterId = "#" + buttonId.id + "Counter";
    let numUnits = $(counterId).val();
    if(pointsAdder>1){
       numUnits++; 
    }else{
        numUnits--;
    }
    $(counterId).val(numUnits);
    $(counterId).text("#: "+numUnits);
}