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
    //const fileInput = document.getElementById("#chooseFile");
    //const selectedFile = [...fileInput.files];
    //const fileReader = new FileReader();
    //fileReader.readAsDataURL(selectedFile[0]);
    //console.log(fileReader.result);
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
    saveClothes();

    
    location.href='closet.html';
}

//closet.html select codi season
const AddFavoriteSeason = (target) => {
    saveCodiSeason = target.options[target.selectedIndex].text;
}

//codi.html
let codiList = document.querySelector("#codi-list");
let codibutton = document.querySelector("#codiSeasonChoose");
let saveCodiSeason;
let codiHasCap = 0;
//codi.html
function clickCodiSpring (event){
    let springselect = document.getElementById("codi-button-spring");
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
        if (i.Season == saveCodiSeason){
            makeCodiArray1.push(i);
        }
    }
    let makeCodiArray2 = [];
    let choose = [];
    for (let i = 0; i < 4 + codiHasCap; i++){
        for (var j in makeCodiArray1){
            if (j.Position == Position[i]){
                makeCodiArray2.push(j);
            }
        }
        const randomValue = makeCodiArray2[Math.floor(Math.random() * makeCodiArray2.length)];
        choose[i] = makeCodiArray2[randomValue];
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
    if (codiHasCap == 1){
        let codiImg5 = document.querySelector("#codiCloth5").src;
        codi.clothNum.push(codiImg5);
    }
    //console.log(codi.Season);
    //console.log(codi.clothNum);
    saveCodis();
}