const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordLength = 15;

function generateRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generateSecondRandomCharacter() {
  let randomCharSecond = Math.floor(Math.random() * characters.length);
  return characters[randomCharSecond];
}

function generatePassword() {
  let randomPassword = "";
  let randomSecondPassword = "";
  let firstDivEl = document.getElementById("first-password");
  let secondDivEl = document.getElementById("second-password");
  for (let i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + generateRandomCharacter();
    randomSecondPassword =
      randomSecondPassword + generateSecondRandomCharacter();
    firstDivEl.textContent = randomPassword;
    secondDivEl.textContent = randomSecondPassword;
  }
}
