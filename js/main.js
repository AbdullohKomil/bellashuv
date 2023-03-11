let LogoLink = document.querySelector('.logo');
let LogoLink1 = document.querySelector('.logo1');


const theme = () => {
  document.body.classList.toggle('dark');
  LogoLink.innerHTML = '';
  LogoLink1.innerHTML = ''
  if (document.body.classList == 'dark') {
    const LogoImgDark = document.createElement('img');
    LogoImgDark.setAttribute('src', './images/logo-dark.svg');
    LogoLink.appendChild(LogoImgDark);
    LogoLink1.appendChild(LogoImgDark);
  } else if (document.body.classList != 'dark') {
    const LogoImg = document.createElement('img');
    LogoImg.setAttribute('src', './images/logo.svg');
    LogoLink.appendChild(LogoImg);
    LogoLink1.appendChild(LogoImg);
  }
};

const menu = () => {
  document.body.classList.add('menu-open');
};

const closeMenu = () => {
  document.body.classList.remove('menu-open');
};



const repleceBtn = document.querySelector('.projects__bottom__link');

repleceBtn.addEventListener('click', () => {
  location.replace('portfolio.html')
})
