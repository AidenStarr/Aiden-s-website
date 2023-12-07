

let ModelName = "XYZ"
// the varables we are gonna be using for the functions these go first
let duration =  0

// this function is used to change the cost by using the duration and the model name 
function recalculate(){
    // getting the cost variable
    let costlabel = document.getElementById("calculated-cost")
    if(ModelName == "XYZ"){
        // using the model name to change the cost
        costlabel.innerHTML = duration * 100
    }else{
        costlabel.innerHTML = duration * 213
    }
}






function changeModel(){
    if (ModelName === "XYZ" ){
        ModelName = "CPRG"
    }else{
        ModelName = "XYZ"
    }
    
    // alert(ModelName)
    let modelText = document.getElementById("model-text")
    modelText.innerHTML = "Model " + ModelName
    recalculate();
}

let modelButton = document.getElementById('model-button')
modelButton.addEventListener("click", changeModel);





function change_duration(){
    // alert('Tewst')
    duration = parseInt(prompt("Put in your new duration"))
    let durationText = document.getElementById("duration-text")
    durationText.innerHTML = duration
    recalculate()
}

let changeduration = document.getElementById("duration-button")
changeduration.addEventListener("click", change_duration);

