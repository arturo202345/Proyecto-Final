let attempts;
let correctAnswer;
let correctCount;

function initializeGame() {
  attempts = 3;
  correctCount = 0;
  document.getElementById('result').textContent = '';
  generateQuestion();
}

function generateQuestion() {
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let operation = num1 >= num2 ? '-' : '+';
  
  if (operation === '+') {
    correctAnswer = num1 + num2;
  } else {
    correctAnswer = num1 - num2;
  }
  
  document.getElementById('question').textContent = num1 + ' ' + operation + ' ' + num2 + ' = ?';
  
  let options = [correctAnswer, correctAnswer + 1 + Math.floor(Math.random() * 5), correctAnswer - 1 - Math.floor(Math.random() * 5)];
  options.sort(() => Math.random() - 0.5);
  
  document.getElementById('option1').textContent = options[0];
  document.getElementById('option2').textContent = options[1];
  document.getElementById('option3').textContent = options[2];
}

function checkAnswer(userAnswer) {
  if (userAnswer == correctAnswer) {
    document.getElementById('result').textContent = '¡Correcto!';
    document.getElementById('result').style.color = 'green'; 
    correctCount++;
    if (correctCount === 5) {
      endGame('¡Felicidades, ganaste!¿Quieres jugar de nuevo?', 'ganaste');
    } else {
      generateQuestion();
    }
  } else {
    attempts--;
    
    if (attempts > 0) {
      document.getElementById('result').textContent = 'Incorrecto. Te quedan ' + attempts + ' intentos.';
      document.getElementById('result').style.color = 'red'; 
    } else {
      endGame('Lo sentimos, perdiste.¿Quieres intentarlo de nuevo?', 'perdiste');
    }
  }
}

function restartGame() {
  document.getElementById('endgame').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  initializeGame();
}

function endGame(message, resultado) {
  document.getElementById('game').style.display = 'none';
  
  let audio;
  if (resultado == 'ganaste') {
    audio = new Audio('sonidos/success-fanfare-trumpets-6185.mp3'); 
  } else {
    audio = new Audio('sonidos/videogame-death-sound-43894.mp3'); 
  }
  audio.play();
  
  let img = document.createElement('img');
  img.src = resultado == 'ganaste' ? 'https://media1.tenor.com/images/5b7aca0fe26f4e6d16d063d725dfb250/tenor.gif?itemid=17080357' : 'https://media0.giphy.com/media/gS4cudi4w33rRMx4Sp/giphy.gif?cid=790b76111d3314f8d3b84dc1e8d6eb43bc52bd1a24da8553&rid=giphy.gif&ct=ts';
  img.alt = message;
  
  let endgameMessage = document.getElementById('endgameMessage');
  endgameMessage.textContent = '';
  endgameMessage.appendChild(img);
  endgameMessage.appendChild(document.createTextNode(' ' + message));
  
  // Agrega un espacio en blanco para separar el mensaje de los botones
  endgameMessage.appendChild(document.createElement('br'));
  
  // Agrega un botón para reiniciar el juego
  let restartButton = document.createElement('button');
  restartButton.textContent = 'Sí';
  restartButton.onclick = restartGame; 
  endgameMessage.appendChild(restartButton);

  
  let noButton = document.createElement('button');
  noButton.textContent = 'No';
  noButton.onclick = function() {
    window.location.href = "inicio.html"; 
  };
  endgameMessage.appendChild(noButton);

  document.getElementById('endgame').style.display = 'block';
}

let loaderWidth = 0;
function start() {
  let loader = document.getElementById('loader'); 
  let id = setInterval(frame, 30);
  function frame() {
    if (loaderWidth >= 100) {
      clearInterval(id);
      window.location.href = "juego.html"; 
    } else {
      loaderWidth++; 
      loader.style.width = loaderWidth + '%'; 
    }
  }
}

function goHome() {
  window.location.href = "/pages/JuegoNumeros.html"; // cambia a tu menu arturo
}
initializeGame();