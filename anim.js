// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Amo lo que veo y lo que ocultas", time: 15 },
  { text: "Amo lo que muestras o insinuas", time: 19 },
  { text: "Amo lo que eres o imagino", time: 23.5 },
  { text: "Te amo en lo ajeno y lo que es mío", time: 26.5 },
  { text: "Amo lo que entregas, lo que escondes", time: 31 },
  { text: "Amo tus preguntas, tus respuestas", time: 35 },
  { text: "Yo amo tus dudas why certezas", time: 39.5 },
  { text: "Te amo en lo simple y lo compleja", time: 42.5 },
  { text: "Amo lo que dices, lo que callas", time: 48.5 },
  { text: "Amo tus recuerdos, tus olvidos", time: 53.5 },
  { text: "Amo tus olores, tus fragancias", time: 57.5 },
  { text: "Te amo en el beso y la distancia", time: 61 },
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 65.5 },
  { text: "Te amo por amor sin doble filo", time: 69.5 },
  { text: "Te amo y si pudiera no amarte", time: 73.5 },
  { text: "Sé que te amaría aun lo mismo", time: 77 },
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 80 },
  { text: "Te amo por amor a dar lo mío", time: 84 },
  { text: "Te amo con orgullo de quererte", time: 89 },
  { text: "Porque para amarte yo he nacido", time: 93 },
  { text: "Amo lo que seas y lo que puedas", time: 100 },
  { text: "Amo lo que afirmas, lo que niegas", time: 104.5 },
  { text: "Amo lo que dices, lo que piensas,", time: 108 },
  { text: "Te amo en lo que mides y lo que pesas", time: 112 },
  { text: "Amo lo que atrapas, lo que dejas", time: 116 },
  { text: "Amo tu alegría y tus tristezas", time: 120 },
  { text: "Te amo en la carne y en el alma", time: 124 },
  { text: "Te amo en tus crisis y en tus calmas", time: 127},
  { text: "Amo lo que pides y regalas", time: 135},
  { text: "Amo tus caricias, tus ofensas", time: 141},
  { text: "Amo tus instantes y lo eterno", time: 144.5},
  { text: "Te amo en tu cielo y en tu infierno...", time: 147.5},
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 152 },
  { text: "Te amo por amor sin doble filo", time: 155.5 },
  { text: "Te amo y si pudiera no amarte", time: 160 },
  { text: "Sé que te amaría aun lo mismo", time: 163.5 },
  { text: "Y amo lo que amas... ¡ Yo te amo!", time: 168 },
  { text: "Te amo por amor a dar lo mío", time: 172 },
  { text: "Te amo con orgullo de quererte", time: 175 },
  { text: "Porque para amarte yo he nacido", time: 181 },
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