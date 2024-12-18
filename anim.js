// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Amo lo que veo y lo que ocultas", time: 13 },
  { text: "Amo lo que muestras o insinuas", time: 17 },
  { text: "Amo lo que eres o imagino", time: 21 },
  { text: "Te amo en lo ajeno y lo que es mío", time: 24 },
  { text: "Amo lo que entregas, lo que escondes", time: 29 },
  { text: "Amo tus preguntas, tus respuestas", time: 33 },
  { text: "Yo amo tus dudas why certezas", time: 37 },
  { text: "Te amo en lo simple y lo compleja", time: 40 },
  { text: "Amo lo que dices, lo que callas", time: 46 },
  { text: "Amo tus recuerdos, tus olvidos", time: 51 },
  { text: "Amo tus olores, tus fragancias", time: 55 },
  { text: "Te amo en el beso y la distancia", time: 59 },
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 63 },
  { text: "Te amo por amor sin doble filo", time: 67 },
  { text: "Te amo y si pudiera no amarte", time: 71 },
  { text: "Sé que te amaría aun lo mismo", time: 75 },
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 78 },
  { text: "Te amo por amor a dar lo mío", time: 82 },
  { text: "Te amo con orgullo de quererte", time: 87 },
  { text: "Porque para amarte yo he nacido", time: 91 },
  { text: "Amo lo que seas y lo que puedas", time: 98 },
  { text: "Amo lo que afirmas, lo que niegas", time: 102 },
  { text: "Amo lo que dices, lo que piensas,", time: 106 },
  { text: "Te amo en lo que mides y lo que pesas", time: 110 },
  { text: "Amo lo que atrapas, lo que dejas", time: 114 },
  { text: "Amo tu alegría y tus tristezas", time: 118 },
  { text: "Te amo en la carne y en el alma", time: 122 },
  { text: "Te amo en tus crisis y en tus calmas", time: 125},
  { text: "Amo lo que pides y regalas", time: 133},
  { text: "Amo tus caricias, tus ofensas", time: 139},
  { text: "Amo tus instantes y lo eterno", time: 142},
  { text: "Te amo en tu cielo y en tu infierno...", time: 145},
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 150 },
  { text: "Te amo por amor sin doble filo", time: 153 },
  { text: "Te amo y si pudiera no amarte", time: 158 },
  { text: "Sé que te amaría aun lo mismo", time: 161 },
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 166 },
  { text: "Te amo por amor a dar lo mío", time: 170 },
  { text: "Te amo con orgullo de quererte", time: 173 },
  { text: "Porque para amarte yo he nacido", time: 179 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);