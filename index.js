// Write your code here!

let element = document.createElement('div')

document.body.appendChild(element)

let ul = document.createElement('ul')

for (let i = 0; i < 3; i++){
    let li = document.createElement('li')
    li.innerHTML = (i + 1).toString()
    ul.appendChild(li)
}

element.appendChild(ul)

let element2 = document.querySelector("li");
element2.innerHTML = "Hello, DOM!"

element.style.backgroundColor = '#27647B';
element.style.textAlign = 'center';
ul.style.textAlign = 'left';

element.className = 'dog'
element.className = 'pet-listing dog'

element.classList.remove("this-is-fine");
element.classList.add("the-room-is-on-fire");

ul.removeChild(ul.querySelector('li:nth-child(2)'))
ul.remove()


body.removeChild(body.querySelector('main#main'))





