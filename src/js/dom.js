let vidContainer;
let iframe;
let player;
let mainContainer;


const hideVideo = function() {
  vidContainer.hide();
  TweenMax.set(iframe, {scale: 0});
  vidContainer.removeClass('playing');
  player.pause();
}

const launchVideo = function() {
  vidContainer.show();
  setTimeout(function(){
    vidContainer.addClass('playing');
  },100)
  TweenMax.to(iframe, 4, {scale: 1,
    onComplete: function() {
    }
  });
  player.play();
}

$('document').ready(function(){
  vidContainer = $('.video-container');
  iframe = document.querySelector('iframe');
  player = new Vimeo.Player(iframe);
  mainContainer = $('.main-container');



  hideVideo();

  // player.on('pause', function() {
  //   hideVideo();
  //   console.log('pause');
  // });

  player.on('ended', function() {
    hideVideo();
  });

  $('.play-button').click(function(e){
    e.preventDefault();
    launchVideo();
  });
  $('.video-close').click(function(e){
    e.preventDefault();
    hideVideo();
  });
  $('.info-button').click(function(e){
    e.preventDefault();
    mainContainer.addClass('info-screen');
  });
  $('.close-info').click(function(e){
    e.preventDefault();
    mainContainer.removeClass('info-screen');
  });  
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // escape key maps to keycode `27`
     hideVideo();
 }
});

export {hideVideo, launchVideo};