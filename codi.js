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
        image: file,
        Season: season,
        Position: text,
    };
    console.log(cloth.Position, cloth.Season, cloth.image);
    clothes.push(cloth);
    saveClothes();
    location.href='closet.html';
}

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