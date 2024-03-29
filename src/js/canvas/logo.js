import app from './app.js';
import {debounce, getWindowSize, map} from './helpers.js';


const theLogo = function(){
  const backgroundContainer = new PIXI.Container();
  const backgroundSprite = new PIXI.Sprite.fromImage('img/fade.jpg');
  backgroundContainer.addChild(backgroundSprite);
  //backgroundSprite.anchor.set(0.5);
  // backgroundSprite.x = app.renderer.width / 2;
  //backgroundSprite.y = app.renderer.height / 5;


  const logoSprite = new PIXI.Sprite.fromImage('img/Treef_logo-white.png');
  logoSprite.anchor.set(0.5);
  backgroundContainer.addChild(logoSprite);
  logoSprite.scale.set(0.5);

  logoSprite.x = 0;
  logoSprite.y = 0;

  setTimeout(() => {
    logoSprite.x = backgroundSprite.width / 2;
    logoSprite.y = backgroundSprite.height / 2;    
  }, 300);
  backgroundSprite.mask = logoSprite;



  logoSprite.interactive = true;
  
  logoSprite
      .on('mousemove', onPointerMove)
      .on('touchmove', onPointerMove);
  
  function onPointerMove(eventData) {
      //logoSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);
      var mx = eventData.data.global.x;
      var my = eventData.data.global.y;

      var moverX = map(mx, 0, app.renderer.width, 80, -80);
      var moverY = map(my, 0, app.renderer.height, 40, -40);
      TweenMax.to(logoSprite, 2, {
				x:(backgroundSprite.width/2) + moverX,
        y:(backgroundSprite.height/2) + moverY,	
			})

  }  



  // RESIZE
  function reSizeIt() {
    // const size = getWindowSize();
    // const w = size.width;
  }

  window.addEventListener("resize",debounce(function(e){
    //reSizeIt();
  }));  
    
  return backgroundContainer;
}

export default theLogo;