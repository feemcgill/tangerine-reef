import app from './app.js';
import {debounce, getWindowSize, map} from './helpers.js';
import {launchVideo} from '../dom.js';

const thePlayButton = function(){

  const creatureContainer = new PIXI.Sprite();
  const backgroundContainer = new PIXI.Container();
  creatureContainer.addChild(backgroundContainer);

  let backgroundGraphics;
  function createBackground() {
    backgroundGraphics = new PIXI.Graphics();
    backgroundGraphics.beginFill(0x000000);
    backgroundGraphics.drawRect(0,0,app.renderer.width, app.renderer.height);
    backgroundGraphics.endFill();
    backgroundGraphics.alpha = 0;
    backgroundContainer.addChild(backgroundGraphics);    
  }
  createBackground();



  const playButtonContainer = new PIXI.Sprite();
  creatureContainer.addChild(playButtonContainer);

  const playButtonShadow = new PIXI.Sprite.fromImage('img/play3-shadow.png');
  playButtonContainer.addChild(playButtonShadow);
  playButtonShadow.anchor.set(0.5);
  playButtonShadow.scale.set(0.7);

  const playButton = new PIXI.Sprite.fromImage('img/play3.png');
  playButtonContainer.addChild(playButton);
  playButton.anchor.set(0.5);
  playButton.scale.set(0.7);

  const creatureSprite = new PIXI.Sprite.fromImage('img/creature.jpg');
  creatureContainer.addChild(creatureSprite);
  creatureSprite.anchor.set(0.5);
  creatureSprite.scale.set(0.8);





  creatureSprite.mask = playButton;

  playButton.interactive = true;
  playButton.buttonMode = true;
  playButton
      .on('mousemove', onPointerMove)
      .on('touchmove', onPointerMove)
      .on('mouseover', scaleButtonUp)
      .on('mouseout', scaleButtonDown)
      .on('tap', launchVideo)
      .on('click', launchVideo);
  
  function scaleButtonUp(){
    TweenMax.to(playButton.scale, 5, {x: 0.9, y:0.9});
    TweenMax.to(backgroundGraphics, 5, {alpha: 1});
  }

  function scaleButtonDown(){
    TweenMax.to(playButton.scale, 1, {x: 0.7, y:0.7});
    TweenMax.to(backgroundGraphics, 5, {alpha: 0});

  }  

  function onPointerMove(eventData) {
      var mx = eventData.data.originalEvent.clientX;
      var my = eventData.data.originalEvent.clientY;

      var moverX = map(mx, 0, app.renderer.width, 56, -56);
      var moverY = map(my, 0, app.renderer.height, 56, -56);


      var mover2X = map(mx, 0, app.renderer.width, -32, 32);
      var mover2Y = map(my, 0, app.renderer.height, -32, 32);
      
      
      TweenMax.to(creatureSprite, 2, {
				x:(app.renderer.width / 2) + moverX,
        y:(app.renderer.height / 2) + moverY,	
			})

      TweenMax.to(playButtonContainer, 2, {
				x:(app.renderer.width / 2) + mover2X,
        y:(app.renderer.height / 2) + mover2Y,	
			})      
  }  
  
  setTimeout(() => {
    sizeIt();
  }, 300);

  // RESIZE
  function sizeIt() {
    if (backgroundGraphics) {
      backgroundGraphics.destroy();
    }     
    createBackground();
    creatureSprite.x = app.renderer.width / 2;
    creatureSprite.y = app.renderer.height / 2;  
    playButtonContainer.x = app.renderer.width / 2;
    playButtonContainer.y = app.renderer.height / 2;
  }

  window.addEventListener("resize",debounce(function(e){
    sizeIt();
  }));  
    
  return creatureContainer;
}

export default thePlayButton;