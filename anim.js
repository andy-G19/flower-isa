// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Amo lo que veo y lo que ocultas", time: 14 },
  { text: "Amo lo que muestras o insinuas", time: 18 },
  { text: "Amo lo que eres o imagino", time: 22 },
  { text: "Te amo en lo ajeno y lo que es mío", time: 25 },
  { text: "Amo lo que entregas, lo que escondes", time: 30 },
  { text: "Amo tus preguntas, tus respuestas", time: 34 },
  { text: "Yo amo tus dudas why certezas", time: 38 },
  { text: "Te amo en lo simple y lo compleja", time: 41 },
  { text: "Amo lo que dices, lo que callas", time: 47 },
  { text: "Amo tus recuerdos, tus olvidos", time: 52 },
  { text: "Amo tus olores, tus fragancias", time: 56 },
  { text: "Te amo en el beso y la distancia", time: 60 },
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 64 },
  { text: "Te amo por amor sin doble filo", time: 68 },
  { text: "Te amo y si pudiera no amarte", time: 72 },
  { text: "Sé que te amaría aun lo mismo", time: 76 },
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 79 },
  { text: "Te amo por amor a dar lo mío", time: 83 },
  { text: "Te amo con orgullo de quererte", time: 88 },
  { text: "Porque para amarte yo he nacido", time: 92 },
  { text: "Amo lo que seas y lo que puedas", time: 99 },
  { text: "Amo lo que afirmas, lo que niegas", time: 103 },
  { text: "Amo lo que dices, lo que piensas,", time: 107 },
  { text: "Te amo en lo que mides y lo que pesas", time: 111 },
  { text: "Amo lo que atrapas, lo que dejas", time: 115 },
  { text: "Amo tu alegría y tus tristezas", time: 119 },
  { text: "Te amo en la carne y en el alma", time: 123 },
  { text: "Te amo en tus crisis y en tus calmas", time: 126},
  { text: "Amo lo que pides y regalas", time: 134},
  { text: "Amo tus caricias, tus ofensas", time: 140},
  { text: "Amo tus instantes y lo eterno", time: 143},
  { text: "Te amo en tu cielo y en tu infierno...", time: 146},
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 151 },
  { text: "Te amo por amor sin doble filo", time: 154 },
  { text: "Te amo y si pudiera no amarte", time: 159 },
  { text: "Sé que te amaría aun lo mismo", time: 162 },
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 167 },
  { text: "Te amo por amor a dar lo mío", time: 171 },
  { text: "Te amo con orgullo de quererte", time: 174 },
  { text: "Porque para amarte yo he nacido", time: 180 },
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