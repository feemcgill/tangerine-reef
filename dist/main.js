/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./js/dom.js */ \"./src/js/dom.js\");\n\n__webpack_require__(/*! ./js/canvas/scene.js */ \"./src/js/canvas/scene.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/canvas/app.js":
/*!******************************!*\
  !*** ./src/js/canvas/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar app = new PIXI.Application({\n  width: window.innerWidth,\n  height: window.innerHeight,\n  backgroundColor: 0x000000\n  // forceCanvas : true\n});\n\ndocument.getElementById(\"canvas\").appendChild(app.view);\n\nexports.default = app;\n\n//# sourceURL=webpack:///./src/js/canvas/app.js?");

/***/ }),

/***/ "./src/js/canvas/background.js":
/*!*************************************!*\
  !*** ./src/js/canvas/background.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar theBackground = function theBackground() {\n  var backgroundContainer = new PIXI.Sprite();\n  var backgroundTexture = PIXI.Texture.fromImage('img/ACTR-bg.jpg');\n  var backgroundSprite = new PIXI.Sprite(backgroundTexture);\n  backgroundContainer.addChild(backgroundSprite);\n\n  // RESIZE\n  function reSizeIt() {\n    var bgSize = (0, _helpers.backgroundSize)(_app2.default.renderer.width, _app2.default.renderer.height, backgroundTexture.orig.width, backgroundTexture.orig.height);\n    backgroundSprite.scale.set(bgSize.scale);\n    backgroundSprite.anchor.set(0.5);\n    backgroundSprite.x = _app2.default.renderer.width / 2;\n    backgroundSprite.y = _app2.default.renderer.height / 2;\n  }\n\n  setTimeout(function () {\n    reSizeIt();\n  }, 300);\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    reSizeIt();\n  }));\n\n  return backgroundContainer;\n};\n\nexports.default = theBackground;\n\n//# sourceURL=webpack:///./src/js/canvas/background.js?");

/***/ }),

/***/ "./src/js/canvas/cm-logo.js":
/*!**********************************!*\
  !*** ./src/js/canvas/cm-logo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nvar _dom = __webpack_require__(/*! ../dom.js */ \"./src/js/dom.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar theCmLogo = function theCmLogo() {\n  var backgroundContainer = new PIXI.Container();\n  var backgroundSprite = new PIXI.Sprite.fromImage('img/cm-logo-bg2.jpg');\n  backgroundContainer.addChild(backgroundSprite);\n  //backgroundSprite.anchor.set(0.5);\n  // backgroundSprite.x = app.renderer.width / 2;\n  //backgroundSprite.y = app.renderer.height / 5;\n\n\n  var logoSprite = new PIXI.Sprite.fromImage('img/cm-logo.png');\n  logoSprite.anchor.set(0.5);\n  logoSprite.scale.set(0.5);\n  backgroundContainer.addChild(logoSprite);\n\n  backgroundSprite.mask = logoSprite;\n\n  logoSprite.interactive = true;\n  logoSprite.buttonmode = true;\n  logoSprite.on('mousemove', onPointerMove).on('touchmove', onPointerMove).on('tap', _dom.showInfoScreen).on('click', _dom.showInfoScreen);\n\n  function onPointerMove(eventData) {\n    //logoSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);\n    var mx = eventData.data.global.x;\n    var my = eventData.data.global.y;\n\n    var moverX = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, -60, 60);\n    var moverY = (0, _helpers.map)(my, 0, _app2.default.renderer.height, -30, 30);\n    TweenMax.to(logoSprite, 2, {\n      x: backgroundSprite.width / 2 + moverX,\n      y: backgroundSprite.height / 2 + moverY\n    });\n  }\n\n  _app2.default.ticker.add(function (delta) {\n    logoSprite.rotation += 0.0005 * delta;\n  });\n\n  // RESIZE\n  function sizeIt() {\n    console.log('pos');\n    logoSprite.x = backgroundSprite.width / 2;\n    logoSprite.y = backgroundSprite.height / 2;\n  }\n  sizeIt();\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    sizeIt();\n  }));\n\n  return backgroundContainer;\n};\n\nexports.default = theCmLogo;\n\n//# sourceURL=webpack:///./src/js/canvas/cm-logo.js?");

/***/ }),

/***/ "./src/js/canvas/displace.js":
/*!***********************************!*\
  !*** ./src/js/canvas/displace.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (config) {\n\n  var displacementSprite = new PIXI.Sprite(config.texture);\n\n  //displacementSprite.scale.set(0.2);\n  var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);\n\n  config.container.addChild(displacementSprite);\n  displacementSprite.alpha = 0.1;\n\n  config.displacedElement.filters = [displacementFilter];\n  // displacementFilter.scale.x = 100;\n  // displacementFilter.scale.y = 100;\n  // displacementSprite.anchor.set(0.5);\n  // displacementSprite.position.set(app.renderer.width / 2, app.renderer.height / 2);\n\n\n  config.container.interactive = true;\n\n  config.container.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\n  function onPointerMove(eventData) {\n    //displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);\n    var mx = eventData.data.global.x;\n    var my = eventData.data.global.y;\n\n    var moverX = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, 20, -20);\n    var moverY = (0, _helpers.map)(my, 0, _app2.default.renderer.height, 20, -20);\n\n    TweenMax.to(displacementSprite, 2, {\n      x: _app2.default.renderer.width / 2 + moverX,\n      y: _app2.default.renderer.height / 2 + moverY\n    });\n  }\n\n  function resize() {\n    var bgSize = (0, _helpers.backgroundSize)(_app2.default.renderer.width, _app2.default.renderer.height, config.texture.orig.width, config.texture.orig.height);\n    displacementSprite.scale.set(bgSize.scale);\n    displacementSprite.anchor.set(0.5);\n    displacementSprite.x = _app2.default.renderer.width / 2;\n    displacementSprite.y = _app2.default.renderer.height / 2;\n  }\n  resize();\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    resize();\n  }));\n};\n\n//# sourceURL=webpack:///./src/js/canvas/displace.js?");

/***/ }),

/***/ "./src/js/canvas/helpers.js":
/*!**********************************!*\
  !*** ./src/js/canvas/helpers.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar shuffleArray = function shuffleArray(array) {\n    var currentIndex = array.length,\n        temporaryValue,\n        randomIndex;\n\n    while (0 !== currentIndex) {\n\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1;\n\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n};\n\nfunction getWindowSize() {\n    var wWidth = window.innerWidth;\n    var wHeight = window.innerHeight;\n    var data = {\n        width: wWidth,\n        height: wHeight\n    };\n    return data;\n}\n\nvar debounce = function debounce(func) {\n    var timer;\n    return function (event) {\n        if (timer) clearTimeout(timer);\n        timer = setTimeout(func, 100, event);\n    };\n};\n\nvar map = function map(the_numb, in_min, in_max, out_min, out_max) {\n    return (the_numb - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;\n};\n\nvar boxRatio = function boxRatio(w, h) {\n    return w / h;\n};\n\nvar backgroundSize = function backgroundSize(containerW, containerH, imgW, imgH) {\n    var newDims = {\n        w: null,\n        h: null,\n        scale: null\n    };\n    var imgRatio = imgW / imgH;\n    if (containerW / imgRatio < containerH) {\n        // Image is 100% wide and shorter than container\n        // new dims must be contaier heigh\n        newDims.h = containerH;\n        newDims.w = containerH * imgRatio;\n    } else {\n        // Image is 100% wide and taller than container\n        newDims.w = containerW;\n        newDims.h = containerW / imgRatio;\n    }\n    newDims.scale = newDims.w / imgW;\n    return newDims;\n};\n\nexports.shuffleArray = shuffleArray;\nexports.getWindowSize = getWindowSize;\nexports.debounce = debounce;\nexports.map = map;\nexports.boxRatio = boxRatio;\nexports.backgroundSize = backgroundSize;\n\n//# sourceURL=webpack:///./src/js/canvas/helpers.js?");

/***/ }),

/***/ "./src/js/canvas/logo.js":
/*!*******************************!*\
  !*** ./src/js/canvas/logo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar theLogo = function theLogo() {\n  var backgroundContainer = new PIXI.Container();\n  var backgroundSprite = new PIXI.Sprite.fromImage('img/fade.jpg');\n  backgroundContainer.addChild(backgroundSprite);\n  //backgroundSprite.anchor.set(0.5);\n  // backgroundSprite.x = app.renderer.width / 2;\n  //backgroundSprite.y = app.renderer.height / 5;\n\n\n  var logoSprite = new PIXI.Sprite.fromImage('img/Treef_logo-white.png');\n  logoSprite.anchor.set(0.5);\n  backgroundContainer.addChild(logoSprite);\n  logoSprite.scale.set(0.5);\n\n  logoSprite.x = 0;\n  logoSprite.y = 0;\n\n  setTimeout(function () {\n    logoSprite.x = backgroundSprite.width / 2;\n    logoSprite.y = backgroundSprite.height / 2;\n  }, 300);\n  backgroundSprite.mask = logoSprite;\n\n  logoSprite.interactive = true;\n\n  logoSprite.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\n  function onPointerMove(eventData) {\n    //logoSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);\n    var mx = eventData.data.global.x;\n    var my = eventData.data.global.y;\n\n    var moverX = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, 80, -80);\n    var moverY = (0, _helpers.map)(my, 0, _app2.default.renderer.height, 40, -40);\n    TweenMax.to(logoSprite, 2, {\n      x: backgroundSprite.width / 2 + moverX,\n      y: backgroundSprite.height / 2 + moverY\n    });\n  }\n\n  // RESIZE\n  function reSizeIt() {\n    // const size = getWindowSize();\n    // const w = size.width;\n  }\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    //reSizeIt();\n  }));\n\n  return backgroundContainer;\n};\n\nexports.default = theLogo;\n\n//# sourceURL=webpack:///./src/js/canvas/logo.js?");

/***/ }),

/***/ "./src/js/canvas/playbutton.js":
/*!*************************************!*\
  !*** ./src/js/canvas/playbutton.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nvar _dom = __webpack_require__(/*! ../dom.js */ \"./src/js/dom.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar thePlayButton = function thePlayButton() {\n\n  var creatureContainer = new PIXI.Sprite();\n  var backgroundContainer = new PIXI.Container();\n  creatureContainer.addChild(backgroundContainer);\n\n  var backgroundGraphics = void 0;\n  function createBackground() {\n    backgroundGraphics = new PIXI.Graphics();\n    backgroundGraphics.beginFill(0x000000);\n    backgroundGraphics.drawRect(0, 0, _app2.default.renderer.width, _app2.default.renderer.height);\n    backgroundGraphics.endFill();\n    backgroundGraphics.alpha = 0;\n    backgroundContainer.addChild(backgroundGraphics);\n  }\n  createBackground();\n\n  var playButtonContainer = new PIXI.Sprite();\n  creatureContainer.addChild(playButtonContainer);\n\n  var playButtonShadow = new PIXI.Sprite.fromImage('img/play3-shadow.png');\n  playButtonContainer.addChild(playButtonShadow);\n  playButtonShadow.anchor.set(0.5);\n  playButtonShadow.scale.set(0.7);\n\n  var playButton = new PIXI.Sprite.fromImage('img/play3.png');\n  playButtonContainer.addChild(playButton);\n  playButton.anchor.set(0.5);\n  playButton.scale.set(0.7);\n\n  var creatureSprite = new PIXI.Sprite.fromImage('img/creature.jpg');\n  creatureContainer.addChild(creatureSprite);\n  creatureSprite.anchor.set(0.5);\n  creatureSprite.scale.set(0.8);\n\n  creatureSprite.mask = playButton;\n\n  playButton.interactive = true;\n  playButton.buttonMode = true;\n  playButton.on('mousemove', onPointerMove).on('touchmove', onPointerMove).on('mouseover', scaleButtonUp).on('mouseout', scaleButtonDown)\n  //.on('tap', launchVideo)\n  .on('touchstart', scaleButtonUp).on('touchend', function () {\n    scaleButtonDown();\n    (0, _dom.launchVideo)();\n  }).on('touchendoutside', function () {\n    scaleButtonDown();\n    (0, _dom.hideVideo)();\n  }).on('click', _dom.launchVideo);\n\n  function scaleButtonUp() {\n    TweenMax.to(playButton.scale, 5, { x: 0.9, y: 0.9 });\n    TweenMax.to(backgroundGraphics, 5, { alpha: 1 });\n  }\n\n  function scaleButtonDown() {\n    TweenMax.to(playButton.scale, 1, { x: 0.7, y: 0.7 });\n    TweenMax.to(backgroundGraphics, 5, { alpha: 0 });\n  }\n\n  function onPointerMove(eventData) {\n    var mx = eventData.data.global.x;\n    var my = eventData.data.global.y;\n\n    var moverX = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, 56, -56);\n    var moverY = (0, _helpers.map)(my, 0, _app2.default.renderer.height, 56, -56);\n\n    var mover2X = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, -32, 32);\n    var mover2Y = (0, _helpers.map)(my, 0, _app2.default.renderer.height, -32, 32);\n\n    TweenMax.to(creatureSprite, 2, {\n      x: _app2.default.renderer.width / 2 + moverX,\n      y: _app2.default.renderer.height / 2 + moverY\n    });\n\n    TweenMax.to(playButtonContainer, 2, {\n      x: _app2.default.renderer.width / 2 + mover2X,\n      y: _app2.default.renderer.height / 2 + mover2Y\n    });\n  }\n\n  setTimeout(function () {\n    sizeIt();\n  }, 300);\n\n  // RESIZE\n  function sizeIt() {\n    if (backgroundGraphics) {\n      backgroundGraphics.destroy();\n    }\n    createBackground();\n    creatureSprite.x = _app2.default.renderer.width / 2;\n    creatureSprite.y = _app2.default.renderer.height / 2;\n    playButtonContainer.x = _app2.default.renderer.width / 2;\n    playButtonContainer.y = _app2.default.renderer.height / 2;\n  }\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    sizeIt();\n  }));\n\n  return creatureContainer;\n};\n\nexports.default = thePlayButton;\n\n//# sourceURL=webpack:///./src/js/canvas/playbutton.js?");

/***/ }),

/***/ "./src/js/canvas/scene.js":
/*!********************************!*\
  !*** ./src/js/canvas/scene.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _background = __webpack_require__(/*! ./background.js */ \"./src/js/canvas/background.js\");\n\nvar _background2 = _interopRequireDefault(_background);\n\nvar _logo = __webpack_require__(/*! ./logo.js */ \"./src/js/canvas/logo.js\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nvar _cmLogo = __webpack_require__(/*! ./cm-logo.js */ \"./src/js/canvas/cm-logo.js\");\n\nvar _cmLogo2 = _interopRequireDefault(_cmLogo);\n\nvar _displace = __webpack_require__(/*! ./displace.js */ \"./src/js/canvas/displace.js\");\n\nvar _displace2 = _interopRequireDefault(_displace);\n\nvar _playbutton = __webpack_require__(/*! ./playbutton.js */ \"./src/js/canvas/playbutton.js\");\n\nvar _playbutton2 = _interopRequireDefault(_playbutton);\n\nvar _dom = __webpack_require__(/*! ../dom.js */ \"./src/js/dom.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//or\nvar loader = new PIXI.loaders.Loader(); // you can also create your own if you want\n\n\n// Chainable `add` to enqueue a resource\nloader.add('bg', 'img/ACTR-bg.jpg').add('displacer', 'img/sg-worms-bg.jpg').add('logo', 'img/Treef_logo-white.png').add('logo_bg', 'img/fade.jpg').add('playbutton_bg', 'img/creature.jpg').add('playbutton', 'img/play3.png').add('cm_logo_bg', 'img/cm-logo-bg2.jpg').add('cm_logo', 'img/cm-logo.png').add('playbutton_shadow', 'img/play3-shadow.png');\n\nloader.load(function (loader, resources) {\n  // resources is an object where the key is the name of the resource loaded and the value is the resource object.\n  // They have a couple default properties:\n  // - `url`: The URL that the resource was loaded from\n  // - `error`: The error that happened when trying to load (if any)\n  // - `data`: The raw data that was loaded\n  // also may contain other properties based on the middleware that runs.\n\n  var bigStage = new PIXI.Container();\n  _app2.default.stage.addChild(bigStage);\n\n  var background = (0, _background2.default)();\n  bigStage.addChild(background);\n\n  var playbutton = (0, _playbutton2.default)();\n  bigStage.addChild(playbutton);\n  playbutton.anchor.set(0.5);\n\n  var logo = (0, _logo2.default)();\n  bigStage.addChild(logo);\n\n  var cmLogo = (0, _cmLogo2.default)();\n  bigStage.addChild(cmLogo);\n\n  var displaceTex = PIXI.Texture.fromImage('img/sg-worms-bg.jpg');\n  (0, _displace2.default)({\n    texture: displaceTex,\n    displacedElement: background,\n    container: bigStage\n  });\n\n  bigStage.interactive = true;\n  // bigStage.on('touchmove', function(){\n  //   alert('asdfasdf');\n  // });\n  // RESIZE\n  function reSizeIt() {\n    // Get new size\n    var size = (0, _helpers.getWindowSize)();\n    var w = size.width;\n    var h = size.height;\n\n    // Scale renderer\n    _app2.default.renderer.view.style.width = w + \"px\";\n    _app2.default.renderer.view.style.height = h + \"px\";\n    _app2.default.renderer.resize(w, h);\n  }\n\n  function sizeAndPosition() {\n    if (_app2.default.renderer.width < 700) {\n      // small\n      logo.x = -60;\n      logo.scale.set(0.5);\n\n      cmLogo.x = _app2.default.renderer.width - 140;\n      cmLogo.scale.set(0.3);\n    } else {\n      // large\n\n      logo.x = 0;\n      logo.scale.set(0.7);\n\n      cmLogo.x = _app2.default.renderer.width - 500;\n      cmLogo.scale.set(0.8);\n    }\n  }\n  sizeAndPosition();\n\n  window.addEventListener(\"resize\", function (e) {\n    reSizeIt();\n  });\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    sizeAndPosition();\n  }));\n\n  (0, _dom.deCloak)();\n});\n\n//# sourceURL=webpack:///./src/js/canvas/scene.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar vidContainer = void 0;\nvar iframe = void 0;\nvar player = void 0;\nvar mainContainer = void 0;\n\nvar hideVideo = function hideVideo() {\n  vidContainer.hide();\n  TweenMax.set(iframe, { scale: 0 });\n  vidContainer.removeClass('playing');\n  player.pause();\n};\n\nvar launchVideo = function launchVideo() {\n  vidContainer.show();\n  setTimeout(function () {\n    vidContainer.addClass('playing');\n  }, 100);\n  TweenMax.to(iframe, 4, { scale: 1,\n    onComplete: function onComplete() {}\n  });\n  player.play();\n};\n\nvar deCloak = function deCloak() {\n  TweenMax.to($('.cloak'), 1.2, { alpha: 0, onComplete: function onComplete() {\n      $('.cloak').remove();\n    } });\n};\n\nvar showInfoScreen = function showInfoScreen() {\n  mainContainer.addClass('info-screen');\n};\n\n$('document').ready(function () {\n  vidContainer = $('.video-container');\n  iframe = document.querySelector('iframe');\n  player = new Vimeo.Player(iframe);\n  mainContainer = $('.main-container');\n\n  hideVideo();\n\n  // player.on('pause', function() {\n  //   hideVideo();\n  //   console.log('pause');\n  // });\n\n  player.on('ended', function () {\n    hideVideo();\n  });\n\n  $('.play-button').click(function (e) {\n    e.preventDefault();\n    launchVideo();\n  });\n  $('.video-close').click(function (e) {\n    e.preventDefault();\n    hideVideo();\n  });\n  $('.info-button').click(function (e) {\n    e.preventDefault();\n  });\n  $('.close-info').click(function (e) {\n    e.preventDefault();\n    mainContainer.removeClass('info-screen');\n  });\n});\n\n$(document).keyup(function (e) {\n  if (e.keyCode == 27) {\n    // escape key maps to keycode `27`\n    hideVideo();\n  }\n});\n\nexports.hideVideo = hideVideo;\nexports.launchVideo = launchVideo;\nexports.deCloak = deCloak;\nexports.showInfoScreen = showInfoScreen;\n\n//# sourceURL=webpack:///./src/js/dom.js?");

/***/ })

/******/ });