function estrarreNumero() {
    
    let numeroCasuale = Math.floor(Math.random() * 76) + 1;
    document.getElementById('result').innerHTML = "Numero Estratto: " + numeroCasuale;
  }
  window.onload = function() {
    estrarreNumero();
  }


  var numeriTombola = document.querySelectorAll('#tombola li');
  for (var i = 0; i < numeriTombola.length; i++) {
    numeriTombola[i].classList.remove('highlight');
  }
  
  // Evidenzia la cella corrispondente al numero estratto
  var cellaCorrispondente = document.getElementById('numero-' + numeroCasuale);
  if (cellaCorrispondente) {
    cellaCorrispondente.classList.add('highlight');
  }
