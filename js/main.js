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

import createGlobe from 'https://cdn.skypack.dev/cobe'

let phi = 0
let canvas = document.getElementById("cobe")

const globe = createGlobe(canvas, {
  devicePixelRatio: 2,
  width: 1200,
  height: 1200,
  phi: 0,
  theta: 0,
  dark: 0,
  diffuse: 1.2,
  scale: 1,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [1, 1, 1],
  markerColor: [1, 0.5, 1],
  glowColor: [1, 1, 1],
  offset: [0, 0],
  markers: [
    { location: [37.7595, -122.4367], size: 0.03 },
    { location: [40.7128, -74.006], size: 0.1 },
  ],
  onRender: (state) => {
    // Called on every animation frame.
    // state will be an empty object, return updated params.
    state.phi = phi
    phi += 0.01
  },
})
