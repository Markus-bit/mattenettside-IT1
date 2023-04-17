var fraEl = document.getElementById("idFra")
var tilEl = document.getElementById("idTil")
var resEl = document.getElementById("idRes")

var funksjon = []
var derivert = []




function verdiFinnesIkke(arrayen,verdi) {
    var finnesIkke = true
    for (var i=0; i<arrayen.length; i++) {
        if (arrayen[i] === verdi) {
            finnesIkke = false
        }
    }
    return finnesIkke
}

function plukkTilfeldig(fraArray,hvorMange) {
    var nyArray = []
    for (var i=0; nyArray.length<hvorMange; i++) {
        var tilfeldig = Math.floor(Math.random()*fraArray.length)
        if (verdiFinnesIkke(nyArray,fraArray[tilfeldig])) {
            nyArray.push(fraArray[tilfeldig])
        }
    }
    return nyArray
}




for (var a=0; a<funksjoner.length; a++) {
    if (verdiFinnesIkke(derivert,funksjoner[a].derivert)) {
        funksjon.push(funksjoner[a].funksjon)
        derivert.push(funksjoner[a].derivert)            
    }

}

var funksjonkopi = plukkTilfeldig(funksjon,funksjon.length)
var derivertkopi = plukkTilfeldig(derivert,derivert.length)

var funksjonEl=[] // array for alle html-boksene med funksjone ord
var derivertEl=[] // array for alle html-boksene med deriverte ord
var poeng = 0

var tekstn = ""
var tekstf = ""

for (var i=0; i<funksjon.length; i++) {
    tekstn += "<li id='idN" + i + "' draggable='true'>" + funksjonkopi[i] + "</li>"
    tekstf += "<li id='idF" + i + "'>" + derivertkopi[i] + "</li>"
}

fraEl.innerHTML = tekstn
tilEl.innerHTML = tekstf

for (i=0; i<funksjon.length; i++) {
    var funksjonid = "idN" + i
    funksjonEl.push(document.getElementById(funksjonid))
    var derivertid = "idF" + i
    derivertEl.push(document.getElementById(derivertid))
    
    funksjonEl[i].addEventListener("dragstart",drafunk)
    derivertEl[i].addEventListener("dragover",klarfunk)
    derivertEl[i].addEventListener("dragleave",blurfunk)
    derivertEl[i].addEventListener("drop",slippfunk)
}


function drafunk(event) {
    event.dataTransfer.setData("text", event.target.innerHTML)
    event.target.style.backgroundColor = "#ffffff"
}

function klarfunk(event) {
    event.preventDefault() //tillater slipp
    event.target.style.borderWidth = "3px"
}

function blurfunk(event) {
    event.target.style.borderWidth = "1px"
}

function slippfunk(event) {
    event.preventDefault()
    var derivertord = event.target.innerHTML
    var derivertindeks = derivert.indexOf(derivertord)
    var funksjonord = event.dataTransfer.getData("text")
    var funksjonindeks = funksjon.indexOf(funksjonord)
    var funksjonkopiindeks = funksjonkopi.indexOf(funksjonord)
    var derivertkopiindeks = derivertkopi.indexOf(derivertord)
    if (funksjonindeks === derivertindeks) {
        poeng ++
        resEl.innerHTML = "Riktig +1, totalt " + poeng + " poeng" 
        funksjonEl[funksjonkopiindeks].style.display = "none"
        derivertEl[derivertkopiindeks].style.display = "none"
    }
    else {
        poeng --
        resEl.innerHTML = "Feil -1, totalt " + poeng + " poeng"
        funksjonEl[funksjonkopiindeks].style.fontWeight = "bold"
        derivertEl[derivertkopiindeks].style.borderWidth = "1px"
        derivertEl[derivertkopiindeks].style.fontWeight = "bold"
    }
}