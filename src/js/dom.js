import {debounce, getWindowSize} from './canvas/helpers.js'

let vidContainer;
let iframe;
let player;
let mainContainer;


const hideVideo = function() {
  vidContainer.hide();
  TweenMax.to(iframe, 0.2, {scale: 0});
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

const showInfoScreen = function(){
  mainContainer.addClass('info-screen');
}

const closeInfoScreen = function() {
  mainContainer.removeClass('info-screen');
}

const updatePushState = function(data) {
  history.pushState(data ,null, null);  
}

window.onpopstate = function(event) {
  if (event.state) {
    if (event.state.screen == 'home') {
      if (vidContainer.hasClass('playing')) {
        hideVideo()
      }
      if (mainContainer.hasClass('info-screen')){
        closeInfoScreen();
      }
    }
    if (event.state.screen == 'video') {
      launchVideo();
    }   
    if (event.state.screen == 'info') {
      showInfoScreen();
    }       
  }

};


const deCloak = function() {
  TweenMax.to($('.cloak'), 1.2, {alpha: 0, onComplete: function(){
    $('.cloak').remove();
  }});
}



$('document').ready(function(){
  vidContainer = $('.video-container');
  iframe = document.querySelector('iframe');
  player = new Vimeo.Player(iframe);
  mainContainer = $('.main-container');



  vidContainer.hide();
  TweenMax.set(iframe, {scale: 0});


  
  history.replaceState( {
    screen: 'home',
    function: 'init'
  } ,null, null);
  //hideVideo();

  // player.on('pause', function() {
  //   hideVideo();
  //   console.log('pause');
  // });

  player.on('ended', function() {
    hideVideo();
  });


  $('.video-close').click(function(e){
    e.preventDefault();
    hideVideo();
    const pushData = {
      screen: 'home',
      function: 'video close'
    }
    updatePushState(pushData);      
  });
  $('.close-info').click(function(e){
    e.preventDefault();
    closeInfoScreen();
    const pushData = {
      screen: 'home',
      function: 'info close'
    }
    updatePushState(pushData);    
  });
  $('.mobile-links-open').click(function(e){
    e.preventDefault();

    $('.tangerine-links').show();
  });
  $('.mobile-links-close').click(function(e){
    e.preventDefault();
    $('.tangerine-links').hide();
  });
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { // escape key maps to keycode `27`
     hideVideo();
 }
});

window.addEventListener("resize",debounce(function(e){
  const w = getWindowSize();
  if (w.width > 700) {
    $('.tangerine-links').show();
  }
}));  

export {hideVideo, launchVideo, deCloak, showInfoScreen, updatePushState};