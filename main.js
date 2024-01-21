let send = document.getElementById('send');
let p = document.getElementById('p');
let em = document.getElementById('em');
let text = document.getElementById('text')


/*sed.addEventListener('click',()=>{

})*/
text.addEventListener('click', () => {
  if (em.classList.contains('fa-face-smile')) {
    em.classList.remove('fa-face-smile');
    em.classList.add('fa-paper-plane');
    send.addEventListener('click', sent)

  } /*else {
    em.classList.add('fa-face-smile');
    em.classList.remove('fa-paper-plane');

    send.removeEventListener('click', sent)
  }*/
})

function sent() {
  let txt = document.createElement('p');
  txt.className ='m-3 bg-info text-light rounded p-1';
  


if (text.value) {
  txt.textContent = text.value;
    p.appendChild(txt)

}
text.value=''

}

