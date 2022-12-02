let idx = 0; 
let imgSrcList = [];

/* adding the cloth to DIYbox */

function addToDIYBox(ImgId){
    let DIYbox = document.querySelector(".DIY-box");

    let div = document.createElement("div");
    div.className = "card cloth";
    div.id = "clothBox";

    let ImgSrc = document.querySelector("#"+ImgId).src;
    let DIYimg = document.createElement("img");
    DIYimg.className = "card-img-top";
    DIYimg.id = "DIYclothImage";  
    DIYimg.src = ImgSrc;
    imgSrcList.push(DIYimg.src); 

    div.appendChild(DIYimg);

    let cardBodydiv = document.createElement("div");
    cardBodydiv.className = "card-body";
    cardBodydiv.id = "clothBoxBody";

    div.appendChild(cardBodydiv);

    let colDiv = document.createElement("div");
    colDiv.className = "text-center"

    cardBodydiv.appendChild(colDiv);

    let Deletebtn = document.createElement("button");
    //Deletebtn.id = DIYimg.id 
    Deletebtn.className = "Deletebtn";
    Deletebtn.innerHTML = 'Delete';

    colDiv.appendChild(Deletebtn);

    /* Delete button in the DIYbox */

    Deletebtn.addEventListener("click", () => {
        div.remove();
    })

    DIYbox.appendChild(div);
    //idx++;
}



function addToFavoriteBox(){
    let favoriteBox = document.querySelector(".favoritebox");
    console.log("favoriteBox");

    let codiBox = document.createElement("div");
    codiBox.className = "codiBox";

    favoriteBox.appendChild(codiBox);
    
    let oneCodi = document.createElement("div");
    oneCodi.className = "oneCodi";

    codiBox.appendChild(oneCodi);

    let FavoriteDeletebtn = document.createElement("input");
    FavoriteDeletebtn.className = "deleteButton";
    FavoriteDeletebtn.type = "button";
    FavoriteDeletebtn.value = "DELETE";

    codiBox.appendChild(FavoriteDeletebtn);

    let FavoriteImg1 = document.createElement("img");
    FavoriteImg1.src = imgSrcList[0];
    let FavoriteImg2 = document.createElement("img");
    FavoriteImg2.src = imgSrcList[1];
    let FavoriteImg3 = document.createElement("img");
    FavoriteImg3.src = imgSrcList[2];
    let FavoriteImg4 = document.createElement("img");
    FavoriteImg4.src = imgSrcList[3];
    let FavoriteImg5 = document.createElement("img");
    FavoriteImg5.src = imgSrcList[4];

    oneCodi.appendChild(FavoriteImg1);
    oneCodi.appendChild(FavoriteImg2);
    oneCodi.appendChild(FavoriteImg3);
    oneCodi.appendChild(FavoriteImg4);
    oneCodi.appendChild(FavoriteImg5);


}

let choosetype = document.getElementById("choosetype");
let selectText;
let selectValue;
const chageLangSelect = (target) => {
    value = target.value;
    text =  target.options[target.selectedIndex].text;
    
    console.log(value, text)
}
