
import {getWindowSize, debounce} from './helpers.js';
import app from './app.js';
import theBackground from './background.js';
import theLogo from './logo.js';
import displacement from './displace.js';
import thePlayButton from './playbutton.js';


const bigStage = new PIXI.Container();
app.stage.addChild(bigStage);


const background = theBackground();
bigStage.addChild(background);



const playbutton = thePlayButton();
bigStage.addChild(playbutton);
playbutton.anchor.set(0.5);
// playbutton.x = app.renderer.width / 2;
// playbutton.y = app.renderer.height / 2;




const logo = theLogo();
bigStage.addChild(logo);
// logo.x = 0;
// logo.y = 0;



app.ticker.add(() => {
  //background.rotation += 0.001;
});


let displaceTex = PIXI.Texture.fromImage('img/sg-worms-bg.jpg');

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


window.addEventListener("resize",function(e){
  reSizeIt();
});