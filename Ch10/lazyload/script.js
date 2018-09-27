  setTimeout(() => {
    var elem = document.querySelector('.image');
    elem.style.backgroundImage = 'url(https://images.unsplash.com/photo-1510141365970-ac1f0f80b1a5';
    elem.classList.add('image-displayed');
  }, Math.random() * 2000 + 500);