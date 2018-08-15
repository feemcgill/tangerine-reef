
import {getWindowSize, debounce} from './helpers.js';
import app from './app.js';
import theBackground from './background.js';
import theLogo from './logo.js';
import theCmLogo from './cm-logo.js';
import displacement from './displace.js';
import thePlayButton from './playbutton.js';
import {deCloak} from '../dom.js';

//or
const loader = new PIXI.loaders.Loader(); // you can also create your own if you want


// Chainable `add` to enqueue a resource
loader.add('bg', 'img/ACTR-bg.jpg')
  .add('displacer', 'img/sg-worms-bg.jpg')
  .add('logo', 'img/Treef_logo-white.png')
  .add('logo_bg', 'img/fade.jpg')
  .add('playbutton_bg', 'img/creature.jpg')
  .add('playbutton', 'img/play3.png')
  .add('cm_logo_bg', 'img/cm-logo-bg2.jpg')
  .add('cm_logo', 'img/cm-logo.png')
  .add('playbutton_shadow', 'img/play3-shadow.png');


loader.load((loader, resources) => {
    // resources is an object where the key is the name of the resource loaded and the value is the resource object.
    // They have a couple default properties:
    // - `url`: The URL that the resource was loaded from
    // - `error`: The error that happened when trying to load (if any)
    // - `data`: The raw data that was loaded
    // also may contain other properties based on the middleware that runs.

  const bigStage = new PIXI.Container();
  app.stage.addChild(bigStage);

  const background = theBackground();
  bigStage.addChild(background);

  const playbutton = thePlayButton();
  bigStage.addChild(playbutton);
  playbutton.anchor.set(0.5);
  
  const logo = theLogo();
  bigStage.addChild(logo);


  const cmLogo = theCmLogo();
  bigStage.addChild(cmLogo);


  let displaceTex = PIXI.Texture.fromImage('img/sg-worms-bg.jpg');
  displacement({
    texture: displaceTex,
    displacedElement: background,
    container: bigStage
  });

  bigStage.interactive = true;
  // bigStage.on('touchmove', function(){
  //   alert('asdfasdf');
  // });
  // RESIZE
  function reSizeIt() {
    // Get new size
    const size = getWindowSize();
    const w = size.width;
    const h = size.height;
    
    // Scale renderer
    app.renderer.view.style.width = w + "px";    
    app.renderer.view.style.height = h + "px";      
    app.renderer.resize(w,h);
  }

  function sizeAndPosition(){
    if (app.renderer.width < 700) {
      // small
      logo.x = -60;
      logo.scale.set(0.5);

      cmLogo.x = app.renderer.width - 140;
      cmLogo.scale.set(0.3);
    } else {
      // large

      logo.x = 0;
      logo.scale.set(0.7);

      cmLogo.x = app.renderer.width - 500;
      cmLogo.scale.set(0.8);
    }
  }
  sizeAndPosition();

  window.addEventListener("resize",function(e){
    reSizeIt();
  });
  
  window.addEventListener("resize",debounce(function(e){
    sizeAndPosition();
  }));  
    

  deCloak();
});