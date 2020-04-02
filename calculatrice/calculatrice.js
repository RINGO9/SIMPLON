document.getElementById('additionner').onclick = function addition() {
var val1 = Number(document.getElementById('nombre1').value)	; 
var val2 = Number(document.getElementById('nombre2').value)	;
var resultat = val1+val2;
document.getElementById('resultat').value = resultat;
}

document.getElementById('multiplier').onclick = function multiplication() {
var val1 = Number(document.getElementById('nombre1').value)	; 
var val2 = Number(document.getElementById('nombre2').value)	;
var resultat = val1*val2;
document.getElementById('resultat').value = resultat;
}

document.getElementById('soustraire').onclick = function soustraction() {
var val1 = Number(document.getElementById('nombre1').value)	; 
var val2 = Number(document.getElementById('nombre2').value)	;
var resultat = val1-val2;
document.getElementById('resultat').value = resultat;
}

document.getElementById('diviser').onclick = function division() {
var val1 = Number(document.getElementById('nombre1').value)	; 
var val2 = Number(document.getElementById('nombre2').value)	;
var resultat = val1/val2;
document.getElementById('resultat').value = resultat;
}
