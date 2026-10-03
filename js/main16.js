'use strict';

const classes = ['first', 'second', 'third', 'fourth'];

document.querySelector('#p1').style.backgroundColor = "gold";
document.querySelector('#p2').style.cssText = "background-color:gold; color: blue; font-size: 2rem;";
document.querySelector('#p3').classList.add('third');
document.querySelector('#p4').classList.add('fourth', 'border');
document.querySelector('#p1 button').style.cssText = "background-color:gold; color: blue;";
document.querySelector('#p2 button').onclick = function() {
    document.querySelector('#p1').style.display = "none";
};
document.querySelector('#p3 button').onclick = function() {
    document.querySelector('#p1').style.display = "block";
};
document.querySelector('#p4 button').onclick = function() {
    document.body.classList.toggle('dark-theme');
};