var closet = document.getElementById("closet");
var favorite = document.getElementById("favorite");
var codi = document.getElementById("codi");
var add = document.getElementById("add");

function closetBlock(){
    closet.style.display = "block";
    favorite.style.display = "none";
    codi.style.display = "none";
    add.style.display = "none";
}

function favoriteBlock(){
    favorite.style.display = "block";
    closet.style.display = "none";
    codi.style.display = "none";
    add.style.display = "none";
}
function codiBlock(){
    codi.style.display = "block";
    favorite.style.display = "none";
    closet.style.display = "none";
    add.style.display = "none";
}
function addBlock(){
    add.style.display = "block";
    favorite.style.display = "none";
    codi.style.display = "none";
    closet.style.display = "none";
}