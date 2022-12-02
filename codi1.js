const Season = {
    Spring:1,
    Summer:2,
    Autumn:3,
    Winter:4,
};

const Position = {
    Outer:11,
    Top:12,
    Bottom:13,
    Shoes:14,
    Cap:15,
};

let clothes = [];
let codies = [];
let file;
let value;
let text;
let season;
let clothNum = [];

//폴더 경로
let directoryName = "./images/"
let imageName;
let imageRoute;

//옷들을 모아놓은 array 저장
function saveClothes(){
    localStorage.setItem("clothes", JSON.stringify(clothes));
}
function saveCodis() {
    localStorage.setItem("codies", JSON.stringify(codies))
}
//add.html 파일에서 이미지 선택해서 가져오기
function loadFile(input) {
    var selectFile = input.files[0];	//선택된 파일 가져오기
    imageName = selectFile.name;
    imageRoute = directoryName + imageName;
    console.log(imageRoute);
    file = URL.createObjectURL(selectFile);
    document.querySelector(".uploadImage").src = file;
};
//add.html addbutton
let addbutton = document.querySelector(".addButton");
//add.html choose position
let choosetype = document.getElementById("choosetype");
let selectText;
let selectValue;
const chageLangSelect = (target) => {
    value = target.value;
    text =  target.options[target.selectedIndex].text;
    
    console.log(value, text)
}

let cloth = {
    image: file,
    Season: season,
    Position: value,
};

/* save the checkbox value into variable called season */ 

function getCheckboxValue(event)  {
    season = '';
    if(event.target.checked)  {
      season = event.target.value;
      console.log(season);
    }else {
      season = '';
    }
}

/* add.html allow user to check only one box */ 
function checkOnlyOne(element){
    const checkboxes = document.getElementsByName("season");
    
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
}

//add.html add버튼 눌렀을 때 옷 변수 만들기
function AddCloth(event){
    
    let cloth = {
        image: imageRoute,
        Season: season,
        Position: text,
    };
    console.log(cloth.Position, cloth.Season, cloth.image);
    clothes.push(cloth);
    console.log(clothes);
    saveClothes();

    addToList();
    closetBlock();
    
}
function loadCloths() {
    console.log("load");
    let lastCloths = localStorage.getItem("clothes");
    let lastCodies = localStorage.getItem("codies");
    clothes = []
    codies = []
    if (!lastCloths) {
        console.log("hi");
        return;
    }
    else{
        clothes = JSON.parse(lastCloths);
        codies = JSON.parse(lastCodies);
        console.log(clothes)
        addToList();
        addToListCodies();
    }
    
}

function addToList (){
    for (var clo in clothes){
        let findElement = clothes[clo].Season + " " + clothes[clo].Position;
        console.log(findElement);
        let springselect = document.getElementById(findElement);
        console.log("important!!");
        console.log(clothes[clo].image);

        let makeDiv = document.createElement("div");
        makeDiv.className = "clothBox"
        springselect.appendChild(makeDiv);
        
        let makeImage = document.createElement("img");
        makeImage.src = clothes[clo].image;
        makeImage.className = "clothImage";
        makeImage.alt = "Cloth image";
        makeDiv.appendChild(makeImage);

        let makeDiv2 = document.createElement("div");
        makeDiv2.className = "clothBoxBody"
        makeDiv.appendChild(makeDiv2);


        let makeButton1 = document.createElement("button");
        makeButton1.className = "Deletebtn";
        makeButton1.textContent = "Delete";
        makeButton1.addEventListener("click", ()=>{
            makeDiv.remove();
        });
        makeDiv2.appendChild(makeButton1);
    }
    
}

function addToListCodies (){
    console.log("HI");
    for (var cod in codies){
        let findElement = codies[cod].Season + "One";
        console.log(findElement);
        let springselect = document.getElementById(findElement);
        console.log("important!!");
        console.log(codies[cod].clothNum[0]);

        let makeDiv = document.createElement("div");
        makeDiv.className = "codiBox"
        springselect.appendChild(makeDiv);
        
        let makeDiv2 = document.createElement("div");
        makeDiv2.className = "oneCodi";
        makeDiv.appendChild(makeDiv2);

        let makeImg1 = document.createElement("img");
        makeImg1.src = codies[cod].clothNum[0];
        makeDiv2.appendChild(makeImg1);

        let makeImg2 = document.createElement("img");
        makeImg2.src = codies[cod].clothNum[1];
        makeDiv2.appendChild(makeImg2);

        let makeImg3 = document.createElement("img");
        makeImg3.src = codies[cod].clothNum[2];
        makeDiv2.appendChild(makeImg3);

        let makeImg4 = document.createElement("img");
        makeImg4.src = codies[cod].clothNum[3];
        makeDiv2.appendChild(makeImg4);

        let makeImg5 = document.createElement("img");
        makeImg5.src = codies[cod].clothNum[4];
        makeDiv2.appendChild(makeImg5);

        let makeButton1 = document.createElement("button");
        makeButton1.className = "deleteButton";
        makeButton1.textContent = "Delete";
        makeButton1.addEventListener("click", ()=>{
            makeDiv.remove();
        });
        makeDiv.appendChild(makeButton1);
        
    }
}
window.addEventListener("load", () => {
    loadCloths();
});


//codi.html
let codiList = document.querySelector("#codi-list");
let codibutton = document.querySelector("#codiSeasonChoose");
let saveCodiSeason;
let codiHasCap = 0;
//codi.html
function clickCodiSpring (event){
    let springselect = document.getElementById();
    let summerselect = document.getElementById("codi-button-summer");
    let autumnselect = document.getElementById("codi-button-autumn");
    let winterselect = document.getElementById("codi-button-winter");
    springselect.style.backgroundColor = "#32b6a2";
    summerselect.style.backgroundColor = "#9fd4f5";
    autumnselect.style.backgroundColor = "#eaca7e";
    winterselect.style.backgroundColor = "#a8c8dc";
    saveCodiSeason = springselect.innerText;
    console.log(saveCodiSeason)
}
function clickCodiSummer (event){
    let springselect = document.getElementById("codi-button-spring");
    let summerselect = document.getElementById("codi-button-summer");
    let autumnselect = document.getElementById("codi-button-autumn");
    let winterselect = document.getElementById("codi-button-winter");
    springselect.style.backgroundColor = "#eaadde";
    summerselect.style.backgroundColor = "#32b6a2";
    autumnselect.style.backgroundColor = "#eaca7e";
    winterselect.style.backgroundColor = "#a8c8dc";
    saveCodiSeason = summerselect.innerText;
}
function clickCodiAutumn (event){
    let springselect = document.getElementById("codi-button-spring");
    let summerselect = document.getElementById("codi-button-summer");
    let autumnselect = document.getElementById("codi-button-autumn");
    let winterselect = document.getElementById("codi-button-winter");
    springselect.style.backgroundColor = "#eaadde";
    summerselect.style.backgroundColor = "#9fd4f5";
    autumnselect.style.backgroundColor = "#32b6a2";
    winterselect.style.backgroundColor = "#a8c8dc";
    saveCodiSeason = autumnselect.innerText;
}
function clickCodiWinter (event){
    let springselect = document.getElementById("codi-button-spring");
    let summerselect = document.getElementById("codi-button-summer");
    let autumnselect = document.getElementById("codi-button-autumn");
    let winterselect = document.getElementById("codi-button-winter");
    springselect.style.backgroundColor = "#eaadde";
    summerselect.style.backgroundColor = "#9fd4f5";
    autumnselect.style.backgroundColor = "#eaca7e";
    winterselect.style.backgroundColor = "#32b6a2";
    saveCodiSeason = winterselect.innerText;
}
function clickCodiYes (event){
    let codiYes = document.getElementById("codi-button-yes");
    let codiNo = document.querySelector("#codi-button-no");
    codiYes.style.backgroundColor = "#32b6a2";
    codiNo.style.backgroundColor = "#0a0a23";
    codiHasCap = 1;
}
function clickCodiNo (event){
    let codiYes = document.getElementById("codi-button-yes");
    let codiNo = document.querySelector("#codi-button-no");
    codiYes.style.backgroundColor = "#0a0a23";
    codiNo.style.backgroundColor = "#32b6a2";
    codiHasCap = 0;
}

//codi.html make random codi
function MakeCodi (event){
    let makeCodiArray1 = [];
    for (var i in clothes){
        if (clothes[i].Season == saveCodiSeason){
            makeCodiArray1.push(clothes[i]);
        }
    }
    //console.log(clothes)
    //console.log(makeCodiArray1);
    let makeCodiArray2 = [];
    let choose = [];
    for (let i = 0; i < 5; i++){
        makeCodiArray2 = [];
        for (var j in makeCodiArray1){
            let whatIsPosition;
            if (i == 0) whatIsPosition = "Outer";
            if (i == 1) whatIsPosition = "Top";
            if (i == 2) whatIsPosition = "Bottom";
            if (i == 3) whatIsPosition = "Shoes";
            if (i == 4) whatIsPosition = "Cap";
            //console.log(clothes[j].position, whatIsPosition)
            if (clothes[j].Position == whatIsPosition){
                makeCodiArray2.push(clothes[j]);
            }
        }
        //console.log(makeCodiArray2)
        const randomValue = makeCodiArray2[Math.floor(Math.random() * makeCodiArray2.length)];
        console.log(randomValue)
        choose[i] = randomValue;
        console.log(choose)
    }
    let codiCloth1 = document.querySelector("#codiCloth1");
    let codiCloth2 = document.querySelector("#codiCloth2");
    let codiCloth3 = document.querySelector("#codiCloth3");
    let codiCloth4 = document.querySelector("#codiCloth4");
    let codiCloth5 = document.querySelector("#codiCloth5");

    codiCloth1.src = choose[0].image;
    codiCloth2.src = choose[1].image;
    codiCloth3.src = choose[2].image;
    codiCloth4.src = choose[3].image;
    console.log(choose[3].image);
    if (codiHasCap == 1){
        codiCloth5.src = choose[4].image;
    }
    if (codiHasCap == 0){
        codiCloth5.src = "./images/grayBackground.png";
    }
}

//codi.html add favorite 버튼 눌렀을 때 코디 변수 만들기
function AddCodi(event){
    let codi = {
        Season: saveCodiSeason,
        clothNum:[],
    };
    let codiImg1 = document.querySelector("#codiCloth1").src;
    codi.clothNum.push(codiImg1);
    let codiImg2 = document.querySelector("#codiCloth2").src;
    codi.clothNum.push(codiImg2);
    let codiImg3 = document.querySelector("#codiCloth3").src;
    codi.clothNum.push(codiImg3);
    let codiImg4 = document.querySelector("#codiCloth4").src;
    codi.clothNum.push(codiImg4);
    
        let codiImg5 = document.querySelector("#codiCloth5").src;
        codi.clothNum.push(codiImg5);
    
    console.log(codi);
    codies.push(codi);
    //console.log(codi.clothNum);
    saveCodis();
    addToListCodies();
    closetBlock();
}

function deleteCloth(){
    let curdiv = document.querySelector("#clothBox");
    curdiv.remove();
}