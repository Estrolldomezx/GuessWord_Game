var alphabet = new Array(
  "ก",
  "ข",
  "ฃ",
  "ค",
  "ฅ",
  "ฆ",
  "ง",
  "จ",
);
let answer = "";
let index = alphabet;
let indexVowel = myVowel;
let answer2 =index;
let maxWrong = 4;
let mistakes = 0;
let guessed = [];
let wordStatus = null;
let countWin = 0;
var myPix = new Array(
  ก = "/img/255/ก.PNG",
  ข = "/img/255/ข.PNG",
  ฃ = "/img/255/ฃ.PNG",
  ค = "/img/255/ค.PNG",
  ฅ = "/img/255/ฅ.PNG",
  ฆ = "/img/255/ฆ.PNG",
  ง = "/img/255/ง.PNG",
  จ = "/img/255/จ.PNG",
  );
var myVowel = new Array(
  อะ = "/vowel/255/อะ.PNG",
  อา = "/vowel/255/อา.PNG",
  อิ = "/vowel/255/อิ.PNG",
  อี = "/vowel/255/อี.PNG",
  อึ = "/vowel/255/อึ.PNG",
  อื = "/vowel/255/อือ.PNG",
  อุ = "/vowel/255/อุ.PNG",
  อู = "/vowel/255/อู.PNG",
  เอ = "/vowel/255/เอ.PNG",
  แอ = "/vowel/255/แอ.PNG",
);

function setColorRed(){
  document.getElementById("pic").style.backgroundColor = 'red';
  //document.getElementById("pic2").style.backgroundColor = 'red';
}

function setColorDefault(){
  document.getElementById("pic").style.backgroundColor = '#17A2B8';
  //document.getElementById("pic2").style.backgroundColor = '#17A2B8';
}

function ShowImage(){
  answer = alphabet[Math.floor(Math.random() * alphabet.length)];
  index = alphabet.indexOf(answer);
  answer2 = index;
  // var vowel = myVowel[Math.floor(Math.random() * myVowel.length)];
  // indexVowel = myVowel.indexOf(vowel);
  // randomVowel = indexVowel; //randomVowel = answer2
  // var showVowel = myVowel[randomVowel];
  var randomImg = myPix[answer2];


  console.log(answer2);
  console.log(randomImg);
  // console.log(showVowel);
  // console.log(indexVowel);

   if(indexVowel === 0 || indexVowel === 1){
    document.getElementById("pic").src = randomImg;
    // document.getElementById("pic2").src = showVowel;
  } 
  else if(indexVowel === 8 || indexVowel === 9){
    // document.getElementById("pic").src = showVowel;
    document.getElementById("pic2").src = randomImg;
  }
  else{
    document.getElementById("pic").src = randomImg;
    // document.getElementById("pic2").src = showVowel;
  }

}



function generateButtons() { //สร้างปุ่ม แป้นพิมพ์ตัวเลือก
  let buttonsHTML = 'กขฃคฅฆงจ'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) { //เหตุการณ์ขณะทาย
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    setColorDefault();
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    setColorRed();
    mistakes++;
    updateMistakes();
    checkIfGameLost();
  }
}


function checkIfGameWon() { //เช็คว่าตอบถูกมั้ย

  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'ถูกต้อง!!!';
    countWin++;
    console.log("win count is " + countWin)
  }

}

function checkIfGameLost() { //เช็คว่าตอบผิดหมดแล้วไหม
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'คำตอบที่ถูกต้อง คือ: ' + answer;
    document.getElementById('keyboard').innerHTML = 'ตอบผิด!!!';
    countWin = 0;
    console.log("reset win count to " + countWin)
  }
}

function guessedWord() { // ทายคำที่กดมา ว่าถูกไหม
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() { //เพิ่มค่าทายผิด
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() { //event ปุ่มรีเซ็ต
  mistakes = 0;
  guessed = [];
  document.getElementById('pic').src = "ก.PNG";
  ShowImage();
  guessedWord();
  updateMistakes();
  generateButtons();
  setColorDefault();
}

document.getElementById('maxWrong').innerHTML = maxWrong;
ShowImage();
generateButtons();
guessedWord();
setColorDefault();