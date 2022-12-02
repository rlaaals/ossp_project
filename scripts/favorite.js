var springCodi = document.getElementById("springCodi");
var summerCodi = document.getElementById("summerCodi");
var autumnCodi = document.getElementById("autumnCodi");
var winterCodi = document.getElementById("winterCodi");

function springFavorite(){
    springCodi.style.display = "block";
    summerCodi.style.display = "none";
    autumnCodi.style.display = "none";
    winterCodi.style.display = "none";
}
function summerFavorite(){
    summerCodi.style.display = "block";
    springCodi.style.display = "none";
    autumnCodi.style.display = "none";
    winterCodi.style.display = "none";
}
function autumnFavorite(){
    autumnCodi.style.display = "block";
    summerCodi.style.display = "none";
    springCodi.style.display = "none";
    winterCodi.style.display = "none";
}
function winterFavorite(){
    winterCodi.style.display = "block";
    summerCodi.style.display = "none";
    autumnCodi.style.display = "none";
    springCodi.style.display = "none";
}
