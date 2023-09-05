//console.log('Hola, Mundo');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Pato <br> feo';
h1.innerText = 'Pato <br> feo';
// console.log(h1.getAttribute('pantalla'));
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'verde');

 h1.classList.add('rojo');
 h1.classList.remove('verde')

//document.createElement();

console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);
pid.append(img);
//pid.replaceWith(img);
