let btn = document.getElementById('btn');
let btn2 = document.getElementById('hide');
let bar = document.querySelectorAll('#bar li');
let offcanvas = document.getElementById('offcanvas');

function clik() {
  window.open('/html/chatBox.html')
}
function click() {

  bar.forEach((list) => {
    list.classList.remove('active');
    this.classList.add('active');
  })
}
bar.forEach((item) => {
  item.addEventListener('click', click)
})
/*
if (btn2.click) {

  btn2.onclick = () => {

    offcanvas.style.transform = "translateX(-400px)";
    offcanvas.style.display = "none";
  }
  if (btn.click) {
      offcanvas.style.display = "block";

  }

}
/* (btn.click) else{
btn.onclick=()=>{
  let offcanvas=document.getElementById('offcanvas');
  offcanvas.style.transform="translateX(400px)";
} 
}*/