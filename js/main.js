const LogoLink = document.querySelector('.logo');

const theme = () => {
  document.body.classList.toggle('dark');
  LogoLink.innerHTML = '';
  if (document.body.classList == 'dark') {
    const LogoImgDark = document.createElement('img');
    LogoImgDark.setAttribute('src', './images/logo-dark.svg');
    LogoLink.appendChild(LogoImgDark);
  } else if (document.body.classList == '') {
    const LogoImg = document.createElement('img');
    LogoImg.setAttribute('src', './images/logo.svg');
    LogoLink.appendChild(LogoImg);
  }
};

const menu = () => {
  document.body.classList.add('menu-open');
};

const closeMenu = () => {
  document.body.classList.remove('menu-open');
};

// let Globe = document.querySelector('canvas');

// if (window.innerWidth <= 1024) {
//   Globe.removeAttribute('width');
//   Globe.removeAttribute('height');
//   Globe.setAttribute('width', '476px');
//   Globe.setAttribute('height', '476px');
//   console.log(window);
// }
