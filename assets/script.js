const morseATexto = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

const textoAMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

function traducir() {
  const texto = document.getElementById("texto").value;
  const opcion = document.querySelector(
    'input[name="traduccion"]:checked'
  ).value;
  let resultado = "";

  if (opcion === "morse2texto") {
    const palabras = texto.split(" ");
    for (let i = 0; i < palabras.length; i++) {
      const caracteres = palabras[i].split(" ");
      for (let j = 0; j < caracteres.length; j++) {
        resultado += morseATexto[caracteres[j]];
      }
      resultado += " ";
    }
  } else if (opcion === "texto2morse") {
    const caracteres = texto.toUpperCase().split("");
    //correction1
    for (let i = 0; i < caracteres.length; i++) {
      resultado += textoAMorse[caracteres[i]] + " ";
    }
  }

  document.getElementById("resultado").innerHTML = resultado;
}
