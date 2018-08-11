$('document').ready(function(){
  const vidContainer = $('.video-container');
  const iframe = document.querySelector('iframe');
  const player = new Vimeo.Player(iframe);
  const mainContainer = $('.main-container');

  function hideVideo() {
    vidContainer.hide();
    TweenMax.set(iframe, {scale: 0});
    vidContainer.removeClass('playing');
    player.pause();
  }


  hideVideo();



  function launchVideo() {
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