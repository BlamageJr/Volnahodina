const now = new Date()

//Test pamÏti

localStorage.test = 2
console.log(localStorage.test)
delete localStorage.test

//nastavenÌ promÏnn˝ch

let uzivatel = 'string'
let trida = 'string'
let jmeno = 'string'

//Funkce: é·k / UËitel

function zakFnck() {
localStorage.setItem(uzivatel, "zak")
console.log(localStorage.getItem(uzivatel, "zak"))
}


function ucitelFckn() {
localStorage.setItem(uzivatel, "ucitel")
console.log(localStorage.getItem(uzivatel, "ucitel"))
}


//Funkce: UËitelÈ

function jmenoFnck() {
localStorage.setItem(jmeno, document.getElementById("jmenoInp").value)

console.log(localStorage.getItem(uzivatel, jmeno))


if (localStorage.getItem(jmeno) == "Jana Soukupov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Jitka ÿeËÌnsk·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Radka Kr·lov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Renata Vold·nov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Jana Broûov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Wadûiha Rahimi") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "V·clav Kulich") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "ZdeÚka Z˝kov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Martina Talpov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Kate¯ina Daneöov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Hana Doleûalov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Tom·ö Kousek") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Ji¯ina äichov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Lenka äù·stkov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Veronika JenÌkov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "David Pol·nka") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Monika Trachtov·") {
	window.open("rozvrh.html")
} else if (localStorage.getItem(jmeno) == "Sylva Lys·") {
	window.open("rozvrh.html")
} else {
	document.getElementById("errorStr").innerHTML = "ChybnÈ JmÈno"
}


}






//Funkce: T¯Ìdy

function tridaFnck() {

localStorage.setItem(trida, document.getElementById("tridaInp").value)

console.log(localStorage.getItem(uzivatel, trida))


if (localStorage.getItem(trida) == "6.A") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "6.B") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "6.C") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "6.D") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "6.E") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "7.A") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "7.B") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "7.C") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "7.D") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "8.A") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "8.B") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "8.C") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "8.D") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.A") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.B") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.C") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.D") {
window.location.href = "rozvrh.html"
} else if (localStorage.getItem(trida) == "9.E") {
window.location.href = "rozvrh.html"
} else {
	document.getElementById("errorStr").innerHTML = "Chybn· t¯Ìda"
}

}

