'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    
    console.log('current class name: ' + className);

});

let my_element = document.createElement('h1');
let my_span = document.createElement('span');

my_span.innerText = 'This is my World';

my_element.appendChild(my_span);

my_element.classList.add('costume_class');

document.body.appendChild(my_element);