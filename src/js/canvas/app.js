const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor : 0x000000,
 // forceCanvas : true
});

document.getElementById("canvas").appendChild(app.view);

export default app;