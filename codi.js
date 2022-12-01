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
function loadFile(input) {
    var selectFile = input.files[0];	//선택된 파일 가져오기
    file = URL.createObjectURL(selectFile);
    document.querySelector(".uploadImage").src = file;

};

let addbutton = document.querySelector(".addButton");
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
    //Season: ,
    Position: value,
};


