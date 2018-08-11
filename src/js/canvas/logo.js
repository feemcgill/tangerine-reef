import app from './app.js';
import {debounce, getWindowSize, map} from './helpers.js';


const theLogo = function(){
  const backgroundContainer = new PIXI.Sprite();
  const backgroundSprite = new PIXI.Sprite.fromImage('img/sg-worms.jpg');
  backgroundContainer.addChild(backgroundSprite);

  const logoSprite = new PIXI.Sprite.fromImage('img/Treef_logo-white.png');
  logoSprite.anchor.set(0.5);
  backgroundContainer.addChild(logoSprite);

  backgroundSprite.mask = logoSprite;

  logoSprite.x = app.renderer.width / 2;
  logoSprite.y = app.renderer.height / 5;

  logoSprite.interactive = true;
  
  logoSprite
      .on('mousemove', onPointerMove)
      .on('touchmove', onPointerMove);
  
  function onPointerMove(eventData) {
      //logoSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);
      var mx = eventData.data.originalEvent.clientX;
      var my = eventData.data.originalEvent.clientY;

      var moverX = map(mx, 0, app.renderer.width, 80, -80);
      var moverY = map(my, 0, app.renderer.height, 40, -40);
      TweenMax.to(logoSprite, 2, {
				x:(app.renderer.width/2) + moverX,
        y:(app.renderer.height/5) + moverY,
	
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