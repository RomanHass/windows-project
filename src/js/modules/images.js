const images = () => {
  const imgPopup = document.createElement('div'),
    workSection = document.querySelector('.works'),
    bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  workSection.append(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  imgPopup.append(bigImage);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    document.body.style.overflow = 'hidden';
    imgPopup.querySelector('img').style.width = '700px';
    imgPopup.querySelector('img').style.height = '500px';
    imgPopup.querySelector('img').style.objectFit = 'contain';

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

export default images;