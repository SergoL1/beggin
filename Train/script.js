'use strict';

const box = document.getElementById('box'),
btns = document.getElementsByTagName('button'),
circles = document.getElementsByClassName('circle'),
hearts = document.querySelectorAll('.heart'),
oneHeart = document.querySelector('.heart'),
wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[2].style.borderRadius = '100%';

box.style.cssText = 'background-color: red; width: 300px;';

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'pink';
// }
hearts.forEach(item=>{
item.style.backgroundColor = 'pink';
});

const div =document.createElement('div');

div.classList.add('black');
wrapper.append(div);

div.innerHTML = 'Hello World!';