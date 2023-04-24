// función para traducir el texto introducido
function traducir() {
  // obtener el texto introducido
  var texto = document.getElementById("texto").value;
  // obtener la opción de traducción seleccionada
  var traduccion = document.querySelector(
    'input[name="traduccion"]:checked'
  ).value;
  // variable para almacenar el resultado de la traducción
  var resultado = "";
  // traducción de Morse a texto
  if (traduccion === "morse2texto") {
    // tabla de caracteres Morse a texto
    var morseATexto = {
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
    // traducción de cada letra o número en el texto Morse
    resultado = texto
      .split(" ")
      .map(function (codigo) {
        return morseATexto[codigo];
      })
      .join("");
  }
  // traducción de texto a Morse
  else if (traduccion === "texto2morse") {
    // tabla de caracteres texto a Morse
    var textoAMorse = {
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
      " ": " ",
    };
    // traducción de cada letra en el texto
    resultado = texto
      .toUpperCase()
      .split("")
      .map(function (letra) {
        return textoAMorse[letra] || " ";
      })
      .join(" ");
  }
  // mostrar el resultado de la traducción
  document.getElementById("resultado").innerHTML = resultado;
}

//CODIGO PARA COPIAR Y ESCUCHAR EL RESULTADO
function copiarResultado() {
  const resultado = document.querySelector("#resultado").textContent;
  navigator.clipboard.writeText(resultado).then(() => {
    const btnCopiar = document.querySelector("#copiar");
    btnCopiar.textContent = "Copiado ✔️";
    setTimeout(() => {
      btnCopiar.textContent = "Copiar";
    }, 3000);
  });
}
