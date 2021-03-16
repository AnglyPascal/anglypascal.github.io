const burgerMenu = document.getElementById('burger-menu');
const sidebar = document.getElementById('sidebar');
let cnt = 0;

burgerMenu.addEventListener('click',()=>{
  console.log('clicked');
  cnt ^= 1;
  if(cnt&1){
    sidebar.classList.remove('animation-out');
    sidebar.classList.add('animation-in');
  }else {
    sidebar.classList.remove('animation-in');
    sidebar.classList.add('animation-out');
  }
});