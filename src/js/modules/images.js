import calcScroll from './calcScroll';
import {modifyBody} from './calcScroll';

const images = () => {
  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img'),
    scroll = calcScroll();

  imgPopup.classList.add('popup');
  workSection.append(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  if(document.body.clientWidth <= 768) {
    bigImage.classList.add('col-xs-10');
  }

  imgPopup.append(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();
    imgPopup.querySelector('img').style.objectFit = 'contain';
    if (document.body.clientWidth >= 768) {
      imgPopup.querySelector('img').style.width = '500px';
      imgPopup.querySelector('img').style.height = '500px';
    }
    
    let target = e.target;
    
    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      modifyBody('hidden', scroll);
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      modifyBody('', 0);
    }
  });
};

export default images;