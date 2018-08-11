
import {getWindowSize, debounce} from './helpers.js';
import app from './app.js';
import theBackground from './background.js';
import theLogo from './logo.js';
import displacement from './displace.js';

const bigStage = new PIXI.Container();
app.stage.addChild(bigStage);


const background = theBackground();
bigStage.addChild(background);

const logo = theLogo();
bigStage.addChild(logo);
// TICKER
app.ticker.add(() => {
  //background.rotation += 0.001;
});


let displaceTex = PIXI.Texture.fromImage('img/pool-water.jpg');

displacement({
  texture: displaceTex,
  displacedElement: background,
  container: app.stage
});


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


window.addEventListener("resize",debounce(function(e){
  reSizeIt();
}));