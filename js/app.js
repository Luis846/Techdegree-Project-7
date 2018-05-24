const startGame = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");
const Phrase = document.getElementById("phrase");
const qwerts = document.getElementById("qwerty");
const qbtns = document.querySelectorAll("#qwerty button");
let letterFound = false;
let win = false;
let losses = 0;
let wins = 0;
let missed = 0;
const phrases = ["take every chance", "drop every fear", "best dreams happen when your awake",
         "patience is key", "fortune sides with him who dares"];


function getRandomPhrase(phrases){
let randomNumber = Math.floor(Math.random() * phrases.length);
let randomPhrase = phrases[randomNumber];
let splitP = randomPhrase.split("");
return splitP;
}
function addPhraseToDisplay(splitP){
let word = 0;
    for (let i = 0; i < splitP.length; i++) {
    if (splitP[i] != " ") {
let li = document.createElement("li");
let phraseLetter = document.createTextNode(splitP[i]);
    Phrase.children[0].appendChild(li);
    li.classList.add("letter");
    li.appendChild(phraseLetter);
}
else if(splitP[i] == " "){
        word++;
        let li = document.createElement("li");
        Phrase.children[0].appendChild(li);
        li.classList.add("space");
if(word == 3 || word == 4){
        let linebr = document.createElement("br");
        Phrase.children[0].appendChild(linebr);
}
}
}
}
function checkLetter(playerguess){
let li = document.querySelectorAll(".letter");
let letterFound = false;
for (let t = 0; t < li.length; t++) {
     let phletter = li[t].innerHTML;
if (phletter === playerguess) {
    letterFound = true;
    li[t].classList.add("show");
}
}
if (letterFound == false) {
    let chance = document.querySelectorAll("#scoreboard li img");
    chance[missed].src = "images/lostHeart.png";
    missed++;
    }
return letterFound;
  }

function checkWin(){
  let message = document.querySelector("#overlay h2");
  let li = document.querySelectorAll(".letter");
  let found = document.querySelectorAll(".letter.show");
if(missed === 5){
  let Btn = startGame.innerHTML = "Give up?";
  let Msg = message.innerHTML = "yeeaaahhhh.......no.";
             overlay.style.display = "flex";
             overlay.classList.remove("win");
             overlay.classList.add("lose");
             win = false;
}else if (found.length === li.length) {
  let Btn = startGame.innerHTML = " ";
  let Msg = message.innerHTML = "Nice One.";
            overlay.style.display = "flex";
            overlay.classList.remove("lose");
            overlay.classList.add("win");
            win = true;
}
}
for (let i = 0; i < qbtns.length; i += 1) {
qbtns[i].addEventListener("click", function (lpick) {
    let playerLetter = this.innerHTML;
    let check = checkLetter(playerLetter);
    this.disabled = true;
if (check == true) {
    this.style.backgroundColor = "#00d5fb";
}
else if(check == false){
    this.style.backgroundColor = "#ff0000";
}
checkWin();
});
}
startGame.addEventListener("click", () => {
for (let i = 0; i < qbtns.length; i++) {
      qbtns[i].style.backgroundColor = "#D2D2D2";
      qbtns[i].disabled = false;
}
overlay.style.display    = "none";
    let splitP = getRandomPhrase(phrases);
addPhraseToDisplay(splitP);
  });
