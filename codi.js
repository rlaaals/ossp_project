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
    
    let lastTasks = localStorage.getItem("tasks");
    if (!lastTasks) {
        console.log("hi");
    }
    addToList();
    closetBlock();
    
}
function loadCloths() {
    console.log("load");
    let lastTasks = localStorage.getItem("tasks");
    if (!lastTasks) {
        console.log("hi");
        return;
    }
    else{
        tasks = JSON.parse(lastTasks);
        tasks.forEach(addToList);
    }
    
}

function addToList (){
    for (var clo in clothes){
        let findElement = clo.season + " " + clo.text;
    
        let springselect = document.getElementById("Spring Outer");
        console.log("important!!");
        console.log(clo);
        console.log(clo.image);

        let makeDiv = document.createElement("div");
        makeDiv.className = "card cloth clothBox"
        springselect.appendChild(makeDiv);
        
        let makeImage = document.createElement("img");
        makeImage.src = clothes[clo].image;
        makeImage.class = "card-img-top clothImage";
        makeImage.id = "";
        makeImage.alt = "Cloth image";
        makeDiv.appendChild(makeImage);

        let makeDiv2 = document.createElement("div");
        makeDiv2.className = "card-body"
        makeDiv2.className = "clothBoxBody"
        makeDiv.appendChild(makeDiv2);

        let makeDiv3 = document.createElement("div");
        makeDiv3.className = "col";
        makeDiv2.appendChild(makeDiv3);

        let makeButton = document.createElement("button");
        makeButton.className = "Selectbtn";
        makeDiv3.appendChild(makeButton);

        let makeButton1 = document.createElement("button");
        makeButton1.className = "Deletebtn";
        makeDiv3.appendChild(makeButton1);
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
    let codiSpring = document.querySelector("#codi-button-spring");
    saveCodiSeason = codiSpring.innerText;
}
function clickCodiSummer (event){
    let codiSummer = document.querySelector("#codi-button-summer");
    saveCodiSeason = codiSummer.innerText;
}
function clickCodiAutumn (event){
    let codiAutumn = document.querySelector("#codi-button-autumn");
    saveCodiSeason = codiAutumn.innerText;
}
function clickCodiWinter (event){
    let codiWinter = document.querySelector("#codi-button-winter");
    saveCodiSeason = codiWinter.innerText;
}
function clickCodiYes (event){
    let codiYes = document.querySelector("#codi-button-yes");
    codiHasCap = 1;
}
function clickCodiNo (event){
    let codiYes = document.querySelector("#codi-button-no");
    codiHasCap = 0;
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
    if (codiHasCap == 1){
        let codiImg5 = document.querySelector("#codiCloth5").src;
        codi.clothNum.push(codiImg5);
    }
    //console.log(codi.Season);
    //console.log(codi.clothNum);
    saveCodis();
}