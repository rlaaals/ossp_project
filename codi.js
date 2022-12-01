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
let file;
let value;
let text;
let season;

//옷들을 모아놓은 array 저장
function saveClothes(){
    localStorage.setItem("clothes", JSON.stringify(clothes));
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

/* add.html save the checkbox value into variable called season */ 
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
    //location.href='closet.html';
}

