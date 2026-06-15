const menuBtn = document.querySelector('.menu-btn');

const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {

if(navMenu.style.display === 'flex'){

navMenu.style.display = 'none';

}else{

navMenu.style.display = 'flex';

navMenu.style.flexDirection = 'column';

navMenu.style.position = 'absolute';

navMenu.style.top = '80px';

navMenu.style.right = '20px';

navMenu.style.padding = '20px';

navMenu.style.background = '#1e293b';

}

});