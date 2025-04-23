import { enemyList } from "./enemies.js"

const divTOTEM = document.querySelector(".totem")
const divBOARD = document.querySelector(".board")
const divENEMIES = document.querySelector(".events")
const divPLACEMENT = document.querySelector(".placement")
const divHAND = document.querySelector(".player")
const divWEAPONS = document.querySelector(".weapons")
const divBACKPACK = document.querySelector(".backpack")
const divHEALTH = document.querySelector(".health")

let manoJohn = document.createElement("div")
manoJohn.classList.add("card")
manoJohn.innerHTML = enemyList[0].generateCard()

let manoJohn2 = document.createElement("div")
manoJohn2.classList.add("card")
manoJohn2.innerHTML = enemyList[0].generateCard()

let manoJohn3 = document.createElement("div")
manoJohn3.classList.add("card")
manoJohn3.innerHTML = enemyList[0].generateCard()

let manoJohn4 = document.createElement("div")
manoJohn4.classList.add("card")
manoJohn4.innerHTML = enemyList[0].generateCard()

let manoJohn5 = document.createElement("div")
manoJohn5.classList.add("card")
manoJohn5.innerHTML = enemyList[0].generateCard()

divPLACEMENT.appendChild(manoJohn)
divPLACEMENT.appendChild(manoJohn2)
divPLACEMENT.appendChild(manoJohn3)
divPLACEMENT.appendChild(manoJohn4)
divPLACEMENT.appendChild(manoJohn5)