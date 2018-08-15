
import app from './app.js';
import {map,debounce, backgroundSize} from './helpers.js';

export default (config) => {


  let displacementSprite = new PIXI.Sprite(config.texture);
  
  //displacementSprite.scale.set(0.2);
  var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  
  config.container.addChild(displacementSprite);
  displacementSprite.alpha = 0.1;


  config.displacedElement.filters = [displacementFilter];
  // displacementFilter.scale.x = 100;
  // displacementFilter.scale.y = 100;
  // displacementSprite.anchor.set(0.5);
  // displacementSprite.position.set(app.renderer.width / 2, app.renderer.height / 2);


  
  config.container.interactive = true;
  
  config.container
      .on('mousemove', onPointerMove)
      .on('touchmove', onPointerMove);
  
  function onPointerMove(eventData) {
      //displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);
      var mx = eventData.data.global.x;
      var my = eventData.data.global.y;

      var moverX = map(mx, 0, app.renderer.width, 20, -20);
      var moverY = map(my, 0, app.renderer.height, 20, -20);

      TweenMax.to(displacementSprite, 2, {
        x:(app.renderer.width/2) + moverX,
				y:(app.renderer.height/2) + moverY,		
			}); 
  }  

  function resize(){
    const bgSize = backgroundSize(app.renderer.width, app.renderer.height, config.texture.orig.width, config.texture.orig.height);
    displacementSprite.scale.set(bgSize.scale);
    displacementSprite.anchor.set(0.5);
    displacementSprite.x = app.renderer.width / 2;
    displacementSprite.y = app.renderer.height / 2;
  }
  resize();

  window.addEventListener("resize",debounce(function(e){
    resize();
  }));  


}



