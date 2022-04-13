/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Camera.js":
/*!**********************************!*\
  !*** ./src/Components/Camera.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n//isntância uma camera como perspectiva(campo de visão = 75º, razão de aspecto, plano porximo, plano distânte) \r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (camera);\n\n//# sourceURL=webpack://trabalho_cg/./src/Components/Camera.js?");

/***/ }),

/***/ "./src/Components/Lights.js":
/*!**********************************!*\
  !*** ./src/Components/Lights.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight( 0x404040 );\r\nconst directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight( 0xffffff, 0.5 );\r\n\r\nlight.add(directionalLight)\r\ndirectionalLight.position.set(1,2,3);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (light);\n\n//# sourceURL=webpack://trabalho_cg/./src/Components/Lights.js?");

/***/ }),

/***/ "./src/Components/Renderer.js":
/*!************************************!*\
  !*** ./src/Components/Renderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n//renderizador \r\n//antialias refere-se a pixelização\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({antialias: true});\r\n//definimos o tamanho da renderização\r\nrenderer.setSize( window.innerWidth, window.innerHeight );\r\n//adicionamos o elemento renderizador ao nosso documento HTML. Este é um elemento <canvas> que o renderizador usa para exibir a cena para nós.\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);\n\n//# sourceURL=webpack://trabalho_cg/./src/Components/Renderer.js?");

/***/ }),

/***/ "./src/Components/Scene.js":
/*!*********************************!*\
  !*** ./src/Components/Scene.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n//Instância uma sena no Three.js\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scene);\n\n//# sourceURL=webpack://trabalho_cg/./src/Components/Scene.js?");

/***/ }),

/***/ "./src/Geometry/Box.js":
/*!*****************************!*\
  !*** ./src/Geometry/Box.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n//instânciamos uma caixa\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry( 1, 1, 1 );\r\n//especifica o material, podemos trocar tabem o matiral o cubo, MeshaBasicMaterial para phog\r\n//phong precisa de luz para visualizar \r\n//wireframe -> definimos de a geometria é um aramado ou não \r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );\r\n//instãncia o cube através dos parametros a cima\r\nconst cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cube);\n\n//# sourceURL=webpack://trabalho_cg/./src/Geometry/Box.js?");

/***/ }),

/***/ "./src/Geometry/NewBall.js":
/*!*********************************!*\
  !*** ./src/Geometry/NewBall.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst points = [];\r\n\r\nlet n = 50;\r\nlet m = 50;\r\n\r\nfor (let i = 0; i < m; i++) {\r\n  \r\n  for (let j = 0; j < n; j++) {\r\n    \r\n    let s = i / n;\r\n    let t = j / (m - 1.0);\r\n    \r\n    let theta = 2.0 * Math.PI * s;\r\n    let y = 2.0 * t - 1.0;\r\n    let r = Math.sqrt(1 - Math.pow(y,2));\r\n    let x = r * Math.cos(theta);\r\n    let z = r * Math.sin(theta);\r\n    \r\n\r\n    points.push( new three__WEBPACK_IMPORTED_MODULE_0__.Vector3 (x, y, z));\r\n\r\n  }\r\n  \r\n}\r\n\r\n//criando a nossa geometria\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );\r\n//material\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial( {color: 0x00ff00, wireframe: true} );\r\n//nuvem de pontos\r\nconst cloudBall = new three__WEBPACK_IMPORTED_MODULE_0__.Points( geometry, material );\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudBall);\n\n//# sourceURL=webpack://trabalho_cg/./src/Geometry/NewBall.js?");

/***/ }),

/***/ "./src/Geometry/NewCone.js":
/*!*********************************!*\
  !*** ./src/Geometry/NewCone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst points = [];\r\n\r\nlet n = 50;\r\nlet m = 50;\r\n\r\nfor (let i = 0; i < m; i++) {\r\n  \r\n  for (let j = 0; j < n; j++) {\r\n    \r\n    let s = i / n;\r\n    let t = j / (m - 1.0);\r\n    \r\n    let theta = 2.0 * Math.PI * s;\r\n    let r = 1.0 - t;\r\n    let x = r * Math.cos(theta);\r\n    let y = r * Math.sin(theta);\r\n    let z = 2.0 * t - 1.0;\r\n\r\n    points.push( new three__WEBPACK_IMPORTED_MODULE_0__.Vector3 (x, y, z));\r\n\r\n  }\r\n  \r\n}\r\n\r\n//criando a nossa geometria\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );\r\n//material\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial( {color: 0x00ff00, wireframe: true} );\r\n//nuvem de pontos\r\nconst cloudCone = new three__WEBPACK_IMPORTED_MODULE_0__.Points( geometry, material );\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudCone);\n\n//# sourceURL=webpack://trabalho_cg/./src/Geometry/NewCone.js?");

/***/ }),

/***/ "./src/Geometry/NewCylinder.js":
/*!*************************************!*\
  !*** ./src/Geometry/NewCylinder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst points = [];\r\n\r\nlet n = 50;\r\nlet m = 50;\r\n\r\nfor (let i = 0; i < m; i++) {\r\n  \r\n  for (let j = 0; j < n; j++) {\r\n    \r\n    let s = i / n;\r\n    let t = j / (m - 1.0);\r\n    \r\n    let theta = 2.0 * Math.PI * s;\r\n    let x = Math.cos(theta);\r\n    let y = Math.sin(theta);\r\n    let z = 2.0 * t - 1.0;\r\n\r\n    points.push( new three__WEBPACK_IMPORTED_MODULE_0__.Vector3 (x, y, z));\r\n\r\n  }\r\n  \r\n}\r\n\r\n//criando a nossa geometria\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );\r\n//material\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial( {color: 0x00ff00, wireframe: true} );\r\n//nuvem de pontos\r\nconst cloudCylinder = new three__WEBPACK_IMPORTED_MODULE_0__.Points( geometry, material );\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudCylinder);\n\n//# sourceURL=webpack://trabalho_cg/./src/Geometry/NewCylinder.js?");

/***/ }),

/***/ "./src/Geometry/NewGeometry.js":
/*!*************************************!*\
  !*** ./src/Geometry/NewGeometry.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst points = [];\r\n\r\nlet n = 50;\r\nlet m = 50;\r\n\r\nfor (let i = 0; i < m; i++) {\r\n  \r\n  for (let j = 0; j < n; j++) {\r\n    \r\n    let s = i / (n - 1.0);\r\n    let t = j / (m - 1.0);\r\n    \r\n    let x = 2.0 * s - 1.0;\r\n    let y = 2.0 * t - 1.0;\r\n\r\n    points.push( new three__WEBPACK_IMPORTED_MODULE_0__.Vector3 (x, y, 0.0));\r\n\r\n  }\r\n  \r\n}\r\n\r\n//criando a nossa geometria\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry().setFromPoints( points );\r\n//material\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial( {color: 0x00ff00, wireframe: true} );\r\n//nuvem de pontos\r\nconst cloud = new three__WEBPACK_IMPORTED_MODULE_0__.Points( geometry, material );\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloud);\n\n//# sourceURL=webpack://trabalho_cg/./src/Geometry/NewGeometry.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Geometry_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Geometry/Box */ \"./src/Geometry/Box.js\");\n/* harmony import */ var _Geometry_NewGeometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Geometry/NewGeometry */ \"./src/Geometry/NewGeometry.js\");\n/* harmony import */ var _Geometry_NewCylinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Geometry/NewCylinder */ \"./src/Geometry/NewCylinder.js\");\n/* harmony import */ var _Geometry_NewCone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Geometry/NewCone */ \"./src/Geometry/NewCone.js\");\n/* harmony import */ var _Geometry_NewBall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Geometry/NewBall */ \"./src/Geometry/NewBall.js\");\n/* harmony import */ var _Components_Scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Scene */ \"./src/Components/Scene.js\");\n/* harmony import */ var _Components_Camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Camera */ \"./src/Components/Camera.js\");\n/* harmony import */ var _Components_Renderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Renderer */ \"./src/Components/Renderer.js\");\n/* harmony import */ var _Components_Lights__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Lights */ \"./src/Components/Lights.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import resize from \"./Components/Resize\";\r\n\r\n\r\n\r\n//encorporar a geometrya\r\n_Components_Scene__WEBPACK_IMPORTED_MODULE_5__[\"default\"].add(_Geometry_NewBall__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n\r\n//incorporar o elemento light\r\n_Components_Scene__WEBPACK_IMPORTED_MODULE_5__[\"default\"].add(_Components_Lights__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\r\n\r\n//por padrão a posição é setada com zero, movemos o observador para o ponto z = 5\r\n_Components_Camera__WEBPACK_IMPORTED_MODULE_6__[\"default\"].position.z = 5\r\n\r\n//outra forma de setar a posição é utilizando o Vector3\r\n// camera.position.set(1,2,5);\r\n//lookAt -> Converte o vetor do espaço local deste objeto para o espaço mundial.\r\n//camera.lookAt(box.position);\r\n\r\nfunction animate() {\r\n\trequestAnimationFrame( animate );\r\n  // cloud.geometry.rotateY(0.01);\r\n  _Geometry_NewBall__WEBPACK_IMPORTED_MODULE_4__[\"default\"].geometry.rotateY(0.01);\r\n\t_Components_Renderer__WEBPACK_IMPORTED_MODULE_7__[\"default\"].render( _Components_Scene__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _Components_Camera__WEBPACK_IMPORTED_MODULE_6__[\"default\"] );\r\n}\r\nanimate();\r\n// //incorporando o resize, redimensionar a figura de acordo com a tela\r\n// resize.start(renderer);\r\n\r\n// //iremos setar em um determinado intervalo por minuto\r\n// setInterval(() => {\r\n//   //renderizando a sena\r\n//   renderer.render(scene, camera)\r\n// }, 1000/30);\r\n\n\n//# sourceURL=webpack://trabalho_cg/./src/index.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;