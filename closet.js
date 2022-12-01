
/* adding the cloth to DIYbox */

function addToDIYBox(){
    let DIYbox = document.querySelector(".DIY-box");

    let div = document.createElement("div");
    div.className = "card cloth";
    div.id = "clothBox";

    let ImgSrc = document.querySelector("#clothImage").src;
    let DIYimg = document.createElement("img");
    DIYimg.className = "card-img-top";
    DIYimg.id = "DIYclothImage";  
    DIYimg.src = ImgSrc; 

    div.appendChild(DIYimg);

    let cardBodydiv = document.createElement("div");
    cardBodydiv.className = "card-body";
    cardBodydiv.id = "clothBoxBody";

    div.appendChild(cardBodydiv);

    let colDiv = document.createElement("div");
    colDiv.className = "col text-center"

    cardBodydiv.appendChild(colDiv);

    let Deletebtn = document.createElement("button");
    Deletebtn.className = "Deletebtn";
    Deletebtn.innerHTML = 'Delete';

    colDiv.appendChild(Deletebtn);

    /* Delete button in the DIYbox */

    Deletebtn.addEventListener("click", () => {
        div.remove();
    })

    DIYbox.appendChild(div);
}

function addToFavoriteBox(){
    let codiBox = document.createElement("div");
    codiBox.className = "codiBox";
    
    let oneCodi = document.createElement("div");
    oneCodi.className = "oneCodi";

    codiBox.appendChild(oneCodi);

    let FavoriteImg1 = document.createElement("img");
    let FavoriteImg2 = document.createElement("img");
    let FavoriteImg3 = document.createElement("img");
    let FavoriteImg4 = document.createElement("img");
    let FavoriteImg5 = document.createElement("img");

    oneCodi.appendChild(FavoriteImg1);
    oneCodi.appendChild(FavoriteImg2);
    oneCodi.appendChild(FavoriteImg3);
    oneCodi.appendChild(FavoriteImg4);
    oneCodi.appendChild(FavoriteImg5);

}

