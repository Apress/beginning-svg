var capsText = anime({
  targets: '.capsText',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 1000,
  complete: function(anim) {
    $(".capsText").css("fill", "#1a1a1a");
  },
  autoplay: true
});

var redText = anime({
  targets: '.redText',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 1000,
  complete: function(anim) {
    $(".redText").css("fill", "#881b30");
  },
  autoplay: true
});

var lineDrawing = anime({
  targets: 'lineDrawing',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 1000,
  complete: function(anim) {
    $(".lineDrawing").css("fill", "#627c55");
  },
  autoplay: true
});

var swirls = anime({
  targets: '.swirls',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 1000,
  complete: function(anim) {
    $(".swirls").css("fill", "#a09830");
  },
  autoplay: true
});