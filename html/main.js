let send = document.getElementById('send');
let p = document.getElementById('p');
let em = document.getElementById('em');
let text = document.getElementById('text')
let microphone = document.getElementById('microphone')
/*sed.addEventListener('click',()=>{})*/
let speech=new SpeechSynthesisUtterance();

text.addEventListener('click', () => {
  if (em.classList.contains('fa-face-smile')) {
    em.classList.remove('fa-face-smile');
    em.classList.add('fa-paper-plane');
    send.addEventListener('click', sent)
  }
  /*else {
     em.classList.add('fa-face-smile');
     em.classList.remove('fa-paper-plane');

     send.removeEventListener('click', sent)
   }*/
})

function sent() {
speech.text=text.value;
  speech.lang='en';
  window.speechSynthesis.speak(speech)
  
  
  
  let txt = document.createElement('p');
  txt.className = 'm-3 bg-info text-light rounded p-1';

  if (text.value) {
      let text = document.getElementById('text')

    txt.textContent = text.value;
    p.appendChild(txt)
  }
  text.value = ''
}

function close() {
  window.open('../index.html')
}

