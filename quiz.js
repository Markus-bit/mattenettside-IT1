function clearAll(){
    localStorage.setItem("Poeng", 0)
    localStorage.setItem("Oppgave1Poeng", 0)
    localStorage.setItem("Oppgave2Poeng", 0)
    localStorage.setItem("Oppgave3Poeng", 0)
    localStorage.setItem("MultOppgaver", 1)
    localStorage.setItem("MultGjort", undefined)
    clearMultGjort()
    console.log("ClearAll")
    Poeng()
}

function Poeng(){
    if (localStorage.getItem("Poeng") === null){
        localStorage.setItem("Poeng", "0")
    }
    document.getElementById("SpanPoints").innerHTML = localStorage.getItem("Poeng")
}

Poeng()


var SpmEl = document.getElementById("Spm");
var AltEl = document.getElementById("Alt");
var ButtEl = document.getElementById("Butt");
var ButtEl2 = document.getElementById("sendPoeng")
var FasitEl = document.getElementById("Fasit")
var inputEL2 = document.getElementById("inputNavn")


var Spms = [" Hva er lg 10<sup>2<sup>", "ln x<sup>2</sup> + ln x = 12. Hva er x", " Skriv x<sup>2<sup>3</sup></sup> på enklest mulig måte", "Hva er ln 1<sup>e<sup>",
 "Finn grenseverdien til (x+5)/(2x) når x går mot 1", "Finn grenseverdien til (2x<sup>2</sup> - 4x)/(3x -6) når x går mot 2",
"Hva er 3x<sup>2</sup> derivert?","Hva er 2x derivert?","Hva er lnx derivert?", "Skriv 1<sup>6<sup>5</sup></sup> på en enklere måte",
]

var Alts = [
    ["e", "2", "0"],
    ["e<sup>4<sup>", "4", "e"],
    ["x<sup>8</sup>", "x<sup>5</sup>", "x<sup>6</sup>"],
    ["0", "e", "1"],
    ["2", "3", "1"],
    ["3", "3/4", "4/3"],
    ["3x","6x","5x"],
    ["2x","3","2"],
    ["x<sup>e</sup>","e/x","1/x"],
    ["1","65","30"],
]

var Fasits = [1, 0, 2, 0, 1, 2, 1, 2, 2, 0]

var Svar = []

i = 0

Mult()


var MultGjort = [] //Lager en tom array

function clearMultGjort(){
    MultGjort = [] //Lager en tom array
    var a = 0
    while (a < Spms.length){ //Kjører denne loopen like mange ganger som det er spørsmål
        MultGjort.push(0) //Legger til VERDIEN 0 bakerst i den tomme Arrayen
        a++
    }
    localStorage.setItem("MultGjort", JSON.stringify(MultGjort)) //lagrer den nye arrayen
}

if (localStorage.getItem("MultGjort") == undefined){ //Sjekker om det er en definert liste for dette allerede
    clearMultGjort()
} else{
    MultGjort = JSON.parse(localStorage.getItem("MultGjort"))
}

function Mult(){

    //Gjør at man ikke kan kjøre denne loopen etter oppgave 3 (2)

    if (i > 0){ //Så lenge du går fra første oppgave, med andre ord, ikke første gangen

        var Sjekkbokser = document.getElementsByClassName("AtlasClass"); //Henter inn alternativene fra en klasse kalt "AltClass" og gir dem variabelnavnet: "sjekkbokser"  

        var Fasit = Fasits[i - 1] //Setter Fasiten til oppgavens fasit fra "Fasits[i]" hvor i er oppgavetallet. ps. -1 fordi den legger på en av seg selv, jeg vet ikke hvorfor 

        if (Sjekkbokser[Fasit].checked == true){ //Hvis riktig alternativ er valgt:
            console.log("Yessss")
            if (JSON.parse(localStorage.getItem("MultGjort"))[i - 1] == 0){
                localStorage.setItem("Poeng", Number(localStorage.getItem("Poeng")) + 1) //Legger til 1 poeng
                MultGjort[i - 1] = 1
                localStorage.setItem("MultGjort", JSON.stringify(MultGjort))
            }
            Poeng() //Viser poengene
            console.log(localStorage.getItem("Poeng"))
        }

    }

    SpmEl.innerHTML = "" //Sørger for å fjerne oppgave teksten før man skriver ny
    AltEl.innerHTML = "" //Sørger for å fjerne alternativene før man skriver nye

    if (i < Spms.length){ //Bytter ut oppgaven med neste oppgave så lenge det er en neste oppgave
        
        console.log("Oppgave:", i) //Skriver til konsollen hvilken oppgave man er på

        SpmEl.innerHTML = Spms[i] //Skriver den første oppgaveteksten til tilsvarende oppgave

        AltNr = 0 //Sørger for at man begynner å skrive alternativene fra første (0.) alternativ
        while (Alts[i].length > AltNr){ //kjører denne loopen like mange ganger som det er svar alternativer til denne oppgaven
            //console.log("Oppgave", [i], "Alternativ", [AltNr]) //Skriver til konsollen hvilken oppgave man er på og hvilket av alternativene den skriver ut nå
            AltEl.innerHTML += "<input class='AtlasClass' type=radio name='" + Alts[i][AltNr] + "'><label for='" + Alts[i][AltNr] + "'>" + Alts[i][AltNr] + "</label><br>"; //lager svar alternativene med navn: oppgavenummer alternativ nummer
            AltNr += 1 //Bytter til neste svar alternaitiv
        }
        
        i++ //Bytter til neste oppgave
    }else{
        ButtEl.style.display = "none";
        ButtEl2.style.display = "block";
        inputEL2.style.display = "block";
        console.log("Ferdig") //Skriver meldingen "Ferdig" når det ikke er flere oppgaver
        
    }

}


function hrefLeaderboard() {
    window.location = ("leaderboard.html")
}