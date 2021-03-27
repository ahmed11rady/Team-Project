const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.containerr');

open.addEventListener('click', ()=> container.classList.add('show-nav'));

close.addEventListener('click', ()=> container.classList.remove('show-nav'));


const a = document.querySelectorAll('nav ul li a');
const ul = document.querySelector('nav ul');
//a.addEventListener('click',() => container.classList.remove('show-nav'))

a.forEach(a => {
    a.addEventListener('click', () => {
        container.classList.remove('show-nav')
    })
})


//for (rady if ul) 
//    console.log(rady)
//
//console.log(a);
//console.log(ul)
//let ar = Array.from(ul);
//console.log(ar);
//ar.forEach( a => a.addEventListener('click',() => container.classList.remove('show-nav')))