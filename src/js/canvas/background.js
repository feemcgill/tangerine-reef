import app from './app.js';
import {debounce, getWindowSize, backgroundSize} from './helpers.js';

const theBackground = function(){
  const backgroundContainer = new PIXI.Sprite();
  const backgroundTexture = PIXI.Texture.fromImage('img/ACTD-bg.jpg')
  const backgroundSprite = new PIXI.Sprite(backgroundTexture);
  backgroundContainer.addChild(backgroundSprite);

  // RESIZE
  function reSizeIt() {
    const bgSize = backgroundSize(app.renderer.width, app.renderer.height, backgroundTexture.orig.width, backgroundTexture.orig.height);
    backgroundSprite.scale.set(bgSize.scale);
    backgroundSprite.anchor.set(0.5);
    backgroundSprite.x = app.renderer.width / 2;
    backgroundSprite.y = app.renderer.height / 2;
  }
  
  setTimeout(() => {
    reSizeIt();
  }, 300);

  window.addEventListener("resize",debounce(function(e){
    reSizeIt();
  }));  
    
  return backgroundContainer;
}

export default theBackground;