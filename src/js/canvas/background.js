import app from './app.js';
import {debounce, getWindowSize} from './helpers.js';


const theBackground = function(){
  const backgroundContainer = new PIXI.Sprite();
  const backgroundSprite = new PIXI.Sprite.fromImage('img/ACTD-bg.jpg');
  backgroundContainer.addChild(backgroundSprite);

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

export default theBackground;