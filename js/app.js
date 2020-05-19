'use strict'

var keyValue,
   cal = '';

var displayMath = function (cal) {
   var el = document.getElementById('screen')
   el.style.color = '#50d330';
   el.textContent = cal
}

var displayWarning = function (exception) {
   var el = document.getElementById('screen')
   el.append(' Formato Inválido')
   el.style.color = '#ff1515';
   console.log('Exception thrown: ' + exception)
}