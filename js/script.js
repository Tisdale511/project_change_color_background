const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'blue', 'yellow', 'orange', 'green', 'purple']

body.style.backgroundColor = 'violet'

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length, 10)
    body.style.backgroundColor = colors[colorIndex]
}

button.addEventListener('click', changeBackground)

