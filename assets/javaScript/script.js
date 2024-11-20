let yearFooter = document.getElementById("year")
let parag = document.createElement("p")
let theDate = new Date()

parag.textContent = `Copyright © ${theDate.getFullYear()}`
yearFooter.appendChild(parag)