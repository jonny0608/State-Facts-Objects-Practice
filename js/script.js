let stateList = document.getElementById("state-list");

stateList.onchange = function () {
    let selected = this.value;
    document.getElementById("info-abbreviation").textContent = stateData[selected].abbr;
    //Abbreviation 
    document.getElementById("info-capitol").textContent = stateData[selected].capitol;
    //State Capitol
    document.getElementById("info-pop").textContent = stateData[selected].population;
    //Population
    document.getElementById("info-statehood").textContent = stateData[selected].statehood;
    //statehood
    document.getElementById("info-mammal").textContent = stateData[selected].mammal;
    //mammal
    document.getElementById("info-bird").textContent = stateData[selected].bird;
    //State Bird
    document.getElementById("info-tree").textContent = stateData[selected].tree;
    //native tree
    document.getElementById("info-flower").textContent = stateData[selected].flower;
    //native flower
    document.getElementById("info-nickname").textContent = stateData[selected].nickname;
    //nickname
    document.getElementById("info-pic").textContent = stateData[selected].img
}
