// Write your code here!

main.remove()
let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)

const F = document.getElementsByTagName('h1')[0]
F.id = "victory"
newHeader.textContent = "Cesar is the champion"