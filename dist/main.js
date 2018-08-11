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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar theBackground = function theBackground() {\n  var backgroundContainer = new PIXI.Sprite();\n  var backgroundSprite = new PIXI.Sprite.fromImage('img/ACTD-bg.jpg');\n  backgroundContainer.addChild(backgroundSprite);\n\n  // RESIZE\n  function reSizeIt() {\n    // const size = getWindowSize();\n    // const w = size.width;\n  }\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    //reSizeIt();\n  }));\n\n  return backgroundContainer;\n};\n\nexports.default = theBackground;\n\n//# sourceURL=webpack:///./src/js/canvas/background.js?");

/***/ }),

/***/ "./src/js/canvas/displace.js":
/*!***********************************!*\
  !*** ./src/js/canvas/displace.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (config) {\n\n    var displacementSprite = new PIXI.Sprite(config.texture);\n\n    //displacementSprite.scale.set(0.2);\n    var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);\n\n    config.container.addChild(displacementSprite);\n    displacementSprite.alpha = 0.1;\n\n    config.displacedElement.filters = [displacementFilter];\n    // displacementFilter.scale.x = 100;\n    // displacementFilter.scale.y = 100;\n    displacementSprite.anchor.set(0.5);\n    displacementSprite.position.set(_app2.default.renderer.width / 2, _app2.default.renderer.height / 2);\n\n    config.container.interactive = true;\n\n    config.container.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\n    function onPointerMove(eventData) {\n        //displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);\n        var mx = eventData.data.originalEvent.clientX;\n        var my = eventData.data.originalEvent.clientY;\n\n        var moverX = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, 20, -20);\n        var moverY = (0, _helpers.map)(my, 0, _app2.default.renderer.height, 20, -20);\n\n        TweenMax.to(displacementSprite, 2, {\n            x: _app2.default.renderer.width / 2 + moverX,\n            y: _app2.default.renderer.height / 2 + moverY\n        });\n    }\n};\n\n//# sourceURL=webpack:///./src/js/canvas/displace.js?");

/***/ }),

/***/ "./src/js/canvas/helpers.js":
/*!**********************************!*\
  !*** ./src/js/canvas/helpers.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar shuffleArray = function shuffleArray(array) {\n    var currentIndex = array.length,\n        temporaryValue,\n        randomIndex;\n\n    while (0 !== currentIndex) {\n\n        randomIndex = Math.floor(Math.random() * currentIndex);\n        currentIndex -= 1;\n\n        temporaryValue = array[currentIndex];\n        array[currentIndex] = array[randomIndex];\n        array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n};\n\nfunction getWindowSize() {\n    var wWidth = window.innerWidth;\n    var wHeight = window.innerHeight;\n    var data = {\n        width: wWidth,\n        height: wHeight\n    };\n    return data;\n}\n\nvar debounce = function debounce(func) {\n    var timer;\n    return function (event) {\n        if (timer) clearTimeout(timer);\n        timer = setTimeout(func, 100, event);\n    };\n};\n\nvar map = function map(the_numb, in_min, in_max, out_min, out_max) {\n    return (the_numb - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;\n};\n\nexports.shuffleArray = shuffleArray;\nexports.getWindowSize = getWindowSize;\nexports.debounce = debounce;\nexports.map = map;\n\n//# sourceURL=webpack:///./src/js/canvas/helpers.js?");

/***/ }),

/***/ "./src/js/canvas/logo.js":
/*!*******************************!*\
  !*** ./src/js/canvas/logo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar theLogo = function theLogo() {\n  var backgroundContainer = new PIXI.Sprite();\n  var backgroundSprite = new PIXI.Sprite.fromImage('img/sg-worms.jpg');\n  backgroundContainer.addChild(backgroundSprite);\n\n  var logoSprite = new PIXI.Sprite.fromImage('img/Treef_logo-white.png');\n  logoSprite.anchor.set(0.5);\n  backgroundContainer.addChild(logoSprite);\n\n  backgroundSprite.mask = logoSprite;\n\n  logoSprite.x = _app2.default.renderer.width / 2;\n  logoSprite.y = _app2.default.renderer.height / 5;\n\n  logoSprite.interactive = true;\n\n  logoSprite.on('mousemove', onPointerMove).on('touchmove', onPointerMove);\n\n  function onPointerMove(eventData) {\n    //logoSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);\n    var mx = eventData.data.originalEvent.clientX;\n    var my = eventData.data.originalEvent.clientY;\n\n    var moverX = (0, _helpers.map)(mx, 0, _app2.default.renderer.width, 80, -80);\n    var moverY = (0, _helpers.map)(my, 0, _app2.default.renderer.height, 40, -40);\n    TweenMax.to(logoSprite, 2, {\n      x: _app2.default.renderer.width / 2 + moverX,\n      y: _app2.default.renderer.height / 5 + moverY\n\n    });\n  }\n\n  // RESIZE\n  function reSizeIt() {\n    // const size = getWindowSize();\n    // const w = size.width;\n  }\n\n  window.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n    //reSizeIt();\n  }));\n\n  return backgroundContainer;\n};\n\nexports.default = theLogo;\n\n//# sourceURL=webpack:///./src/js/canvas/logo.js?");

/***/ }),

/***/ "./src/js/canvas/scene.js":
/*!********************************!*\
  !*** ./src/js/canvas/scene.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _helpers = __webpack_require__(/*! ./helpers.js */ \"./src/js/canvas/helpers.js\");\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/canvas/app.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _background = __webpack_require__(/*! ./background.js */ \"./src/js/canvas/background.js\");\n\nvar _background2 = _interopRequireDefault(_background);\n\nvar _logo = __webpack_require__(/*! ./logo.js */ \"./src/js/canvas/logo.js\");\n\nvar _logo2 = _interopRequireDefault(_logo);\n\nvar _displace = __webpack_require__(/*! ./displace.js */ \"./src/js/canvas/displace.js\");\n\nvar _displace2 = _interopRequireDefault(_displace);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar bigStage = new PIXI.Container();\n_app2.default.stage.addChild(bigStage);\n\nvar background = (0, _background2.default)();\nbigStage.addChild(background);\n\nvar logo = (0, _logo2.default)();\nbigStage.addChild(logo);\n// TICKER\n_app2.default.ticker.add(function () {\n  //background.rotation += 0.001;\n});\n\nvar displaceTex = PIXI.Texture.fromImage('img/pool-water.jpg');\n\n(0, _displace2.default)({\n  texture: displaceTex,\n  displacedElement: background,\n  container: _app2.default.stage\n});\n\n// RESIZE\nfunction reSizeIt() {\n  // Get new size\n  var size = (0, _helpers.getWindowSize)();\n  var w = size.width;\n  var h = size.height;\n\n  // Scale renderer\n  _app2.default.renderer.view.style.width = w + \"px\";\n  _app2.default.renderer.view.style.height = h + \"px\";\n  _app2.default.renderer.resize(w, h);\n}\n\nwindow.addEventListener(\"resize\", (0, _helpers.debounce)(function (e) {\n  reSizeIt();\n}));\n\n//# sourceURL=webpack:///./src/js/canvas/scene.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$('document').ready(function () {\n  var vidContainer = $('.video-container');\n  var iframe = document.querySelector('iframe');\n  var player = new Vimeo.Player(iframe);\n  var mainContainer = $('.main-container');\n\n  function hideVideo() {\n    vidContainer.hide();\n    TweenMax.set(iframe, { scale: 0 });\n    vidContainer.removeClass('playing');\n    player.pause();\n  }\n\n  hideVideo();\n\n  function launchVideo() {\n    vidContainer.show();\n    setTimeout(function () {\n      vidContainer.addClass('playing');\n    }, 100);\n    TweenMax.to(iframe, 4, { scale: 1,\n      onComplete: function onComplete() {}\n    });\n    player.play();\n  }\n\n  // player.on('pause', function() {\n  //   hideVideo();\n  //   console.log('pause');\n  // });\n\n  player.on('ended', function () {\n    hideVideo();\n  });\n\n  $('.play-button').click(function (e) {\n    e.preventDefault();\n    launchVideo();\n  });\n  $('.video-close').click(function (e) {\n    e.preventDefault();\n    hideVideo();\n  });\n  $('.info-button').click(function (e) {\n    e.preventDefault();\n    mainContainer.addClass('info-screen');\n  });\n  $('.close-info').click(function (e) {\n    e.preventDefault();\n    mainContainer.removeClass('info-screen');\n  });\n});\n\n//# sourceURL=webpack:///./src/js/dom.js?");

/***/ })

/******/ });