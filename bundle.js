/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const gen = document.querySelector('#generate')\r\nconst img = document.querySelector('img');\r\nconst input = document.querySelector('#input')\r\nconst form = document.querySelector('#form')\r\nconst button = document.querySelector('#submit')\r\n\r\n\r\nfunction genGif(){\r\n  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=fpAHxNRZhZCBWtvfpolNwzvYTyJ8ApPs&s=${input.value}`, {mode: 'cors'})\r\n  .then(function(response) {\r\n      return response.json();\r\n    })\r\n    .then(function(response) {\r\n      img.src = response.data.images.original.url;\r\n    });\r\n}\r\n\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault()\r\n})\r\n\r\ngen.addEventListener('click', genGif)\r\nbutton.addEventListener('click', genGif)\n\n//# sourceURL=webpack://gif-generator/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;