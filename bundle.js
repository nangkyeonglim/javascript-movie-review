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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/common.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/search_button.png */ \"./images/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n.item-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n/* 무비 리스트 */\\n\\n.item-list,\\n.skeleton-list {\\n  display: grid;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(4, 180px);\\n  grid-column-gap: 160px;\\n  grid-row-gap: 48px;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 180px;\\n  height: 270px;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n}\\n\\n.item-score {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.star {\\n  width: 28px;\\n  height: 28x;\\n  margin-right: 4px;\\n  transform: translateY(5px);\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \\\"loading\\\";\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 45px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: #f33f3f;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\n\\n/* 헤더 */\\n\\nheader {\\n  width: 100%;\\n  min-width: 1200px;\\n  height: 72px;\\n  background-color: #222;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n  width: 320px;\\n}\\n\\nheader .search-box input {\\n  border: 0;\\n  width: 280px;\\n}\\n\\nheader .search-box .search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n#mobile-search-button {\\n  display: none;\\n  background: #ffffff;\\n  border: 1px solid #d0d5dd;\\n\\n  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);\\n  border-radius: 8px;\\n  width: 36px;\\n  height: 34px;\\n}\\n\\n#mobile-search-button > img {\\n  width: 14px;\\n}\\n\\n/* 기타 */\\n\\n.hidden {\\n  display: none !important;\\n}\\n\\n.show {\\n  display: block !important;\\n}\\n\\n.load-error {\\n  background-color: #aaa;\\n}\\n\\n.error-container {\\n  margin-top: 4rem;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 1.4rem;\\n}\\n\\n.error-container > p {\\n  margin-top: 0.6rem;\\n}\\n\\n.not-search {\\n  margin-top: 10rem;\\n  text-align: center;\\n  font-size: 2rem;\\n  font-weight: 800;\\n}\\n\\nmovie-list:has(.not-search) {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#logo-button {\\n  background: transparent;\\n  border: none;\\n}\\n\\nmovie-item {\\n  cursor: pointer;\\n}\\n\\n/* 모달 */\\n\\n.modal {\\n  width: 80%;\\n  height: 60%;\\n  max-height: 460px;\\n\\n  padding: 0;\\n  max-width: 1000px;\\n  border-color: #212122;\\n  border-radius: 12px;\\n}\\n\\n.modal-backdrop {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  left: 0;\\n\\n  background: rgba(0, 0, 0, 0.35);\\n}\\n\\n.modal-container {\\n  position: fixed;\\n  width: 80%;\\n  height: 60%;\\n  max-width: 1000px;\\n  max-height: 460px;\\n\\n  border-radius: 10px;\\n  background-color: #212122;\\n  color: white;\\n}\\n\\n.modal-container img {\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n/* 무비 디테일 */\\nmovie-detail {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.detail-header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  height: 60px;\\n  padding: 18px 64px 18px;\\n\\n  border-bottom: 1px solid rgba(241, 241, 241, 0.25);\\n}\\n\\n.detail-header > h2 {\\n  font-weight: 600;\\n  font-size: 20px;\\n  line-height: 24px;\\n  display: -webkit-box;\\n\\n  padding-top: 8px;\\n\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  -webkit-line-clamp: 1;\\n  -webkit-box-orient: vertical;\\n}\\n\\n#close-button {\\n  position: absolute;\\n  top: 12px;\\n  right: 32px;\\n  font-size: 20px;\\n\\n  border: none;\\n  border-radius: 50%;\\n\\n  color: white;\\n  background-color: #383839;\\n\\n  padding: 5px 10px;\\n}\\n\\n.detail-content {\\n  display: flex;\\n  height: calc(100% - 60px);\\n  padding: 36px 32px 48px 32px;\\n}\\n\\n.detail-description {\\n  display: flex;\\n  flex-direction: column;\\n  margin-left: 32px;\\n  line-height: 18px;\\n}\\n\\n.detail-genre-vote {\\n  margin-bottom: 16px;\\n  display: flex;\\n  align-items: center;\\n  flex: 0 0 34px;\\n}\\n\\n.detail-genre-vote span {\\n  line-height: 34px;\\n}\\n\\n#detail-genre {\\n  margin-right: 18px;\\n}\\n\\n.detail-overview {\\n  flex: 1;\\n  overflow: auto;\\n  margin-bottom: 20px;\\n}\\n\\n.detail-overview::-webkit-scrollbar {\\n  -webkit-appearance: none;\\n  width: 7px;\\n}\\n\\n#purchased-lotto-container::-webkit-scrollbar-thumb {\\n  border-radius: 4px;\\n  background-color: rgba(0, 0, 0, 0.3);\\n}\\n\\n#purchased-lotto-container::-webkit-scrollbar-track {\\n  background-color: rgba(0, 0, 0, 0.1);\\n}\\n\\n.detail-score {\\n  display: flex;\\n  align-items: center;\\n  background-color: #383839;\\n  width: fit-content;\\n  min-width: 310px;\\n  padding: 16px;\\n  border-radius: 16px;\\n\\n  flex: 0 0 36px;\\n}\\n\\n.detail-score img {\\n  margin: 0;\\n  cursor: pointer;\\n  transform: translateY(-1.5px);\\n}\\n\\n#detail-score-image {\\n  display: flex;\\n  align-items: center;\\n  margin: 0;\\n}\\n\\n#detail-score-title {\\n  margin-right: 10px;\\n}\\n\\n#detail-score-description {\\n  margin-left: 8px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul,\\nli {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media screen and (min-width: 1024px) and (max-width: 1279px) {\\n  header {\\n    min-width: 920px;\\n  }\\n\\n  .item-view {\\n    width: 920px;\\n  }\\n\\n  .item-list,\\n  .skeleton-list {\\n    grid-template-columns: repeat(4, 182px);\\n    grid-column-gap: 64px;\\n    grid-row-gap: 64px;\\n  }\\n}\\n\\n@media screen and (min-width: 768px) and (max-width: 1023px) {\\n  header {\\n    min-width: 674px;\\n  }\\n\\n  .item-view {\\n    width: 674px;\\n  }\\n\\n  .item-list,\\n  .skeleton-list {\\n    grid-template-columns: repeat(3, 182px);\\n    grid-column-gap: 64px;\\n    grid-row-gap: 56px;\\n  }\\n}\\n\\n@media screen and (min-width: 390px) and (max-width: 767px) {\\n  header {\\n    min-width: 316px;\\n  }\\n\\n  header > .search-box {\\n    width: 176px;\\n  }\\n\\n  header .search-box input {\\n    width: 142px;\\n  }\\n\\n  search-box {\\n    display: none;\\n  }\\n\\n  #mobile-search-button {\\n    display: block;\\n  }\\n}\\n\\n@media screen and (max-width: 389px) {\\n  header {\\n    min-width: 280px;\\n  }\\n\\n  header > .search-box {\\n    width: 150px;\\n    min-width: 150px;\\n  }\\n\\n  header .search-box input {\\n    width: 116px;\\n  }\\n\\n  search-box {\\n    display: none;\\n  }\\n\\n  #mobile-search-button {\\n    display: block;\\n  }\\n}\\n\\n@media screen and (min-width: 360px) and (max-width: 767px) {\\n  .item-view {\\n    width: 316px;\\n  }\\n\\n  .item-list,\\n  .skeleton-list {\\n    grid-template-columns: repeat(2, 140px);\\n    grid-column-gap: 36px;\\n    grid-row-gap: 58px;\\n  }\\n\\n  .item-thumbnail {\\n    width: 140px;\\n    height: 220px;\\n  }\\n}\\n\\n@media screen and (max-width: 359px) {\\n  .item-view {\\n    width: 280px;\\n  }\\n\\n  header img {\\n    width: 80px;\\n  }\\n\\n  .item-list,\\n  .skeleton-list {\\n    grid-template-columns: repeat(1, 182px);\\n    justify-content: center;\\n  }\\n}\\n\\n@media screen and (max-width: 767px) {\\n  .modal {\\n    width: 100%;\\n    background: transparent;\\n    border: none;\\n  }\\n\\n  .modal-container {\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n\\n    border-radius: 10px;\\n    background-color: #212122;\\n    color: white;\\n  }\\n\\n  .detail-content > img {\\n    display: none;\\n  }\\n\\n  .detail-description {\\n    margin: 0;\\n  }\\n\\n  .item-view h2 {\\n    font-size: 1.5rem;\\n    text-align: center;\\n  }\\n\\n  .detail-score {\\n    flex-direction: column;\\n    align-items: flex-start;\\n    min-width: 170px;\\n    align-self: center;\\n    width: 100%;\\n  }\\n\\n  .detail-header > h2 {\\n    font-size: 18px;\\n  }\\n\\n  #detail-score-title {\\n    margin: 0 0 6px 2px;\\n  }\\n\\n  #detail-score-description {\\n    margin: 6px 0 0 2px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/responsive.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/common.css?");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/reset.css?");

/***/ }),

/***/ "./src/css/responsive.css":
/*!********************************!*\
  !*** ./src/css/responsive.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/responsive.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./images/index.ts":
/*!*************************!*\
  !*** ./images/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddSkeleton\": () => (/* reexport default export from named module */ _add_skeleton_png__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   \"ErrorNoAvailable\": () => (/* reexport default export from named module */ _error_no_available_png__WEBPACK_IMPORTED_MODULE_6__),\n/* harmony export */   \"ErrorUnresponsive\": () => (/* reexport default export from named module */ _error_unresponsive_png__WEBPACK_IMPORTED_MODULE_5__),\n/* harmony export */   \"Logo\": () => (/* reexport default export from named module */ _logo_png__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"Search\": () => (/* reexport default export from named module */ _search_button_png__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   \"StarFilled\": () => (/* reexport default export from named module */ _star_filled_png__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   \"StartEmpty\": () => (/* reexport default export from named module */ _star_empty_png__WEBPACK_IMPORTED_MODULE_2__)\n/* harmony export */ });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./images/logo.png\");\n/* harmony import */ var _search_button_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_button.png */ \"./images/search_button.png\");\n/* harmony import */ var _star_empty_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star_empty.png */ \"./images/star_empty.png\");\n/* harmony import */ var _star_filled_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star_filled.png */ \"./images/star_filled.png\");\n/* harmony import */ var _add_skeleton_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add_skeleton.png */ \"./images/add_skeleton.png\");\n/* harmony import */ var _error_unresponsive_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error_unresponsive.png */ \"./images/error_unresponsive.png\");\n/* harmony import */ var _error_no_available_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error_no_available.png */ \"./images/error_no_available.png\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./images/index.ts?");

/***/ }),

/***/ "./src/api/fetch.ts":
/*!**************************!*\
  !*** ./src/api/fetch.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchWithValidation\": () => (/* binding */ fetchWithValidation)\n/* harmony export */ });\n/* harmony import */ var _fetchError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchError */ \"./src/api/fetchError.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst fetchWithValidation = (url) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const response = yield fetch(url);\n        if (!response.ok) {\n            const statusCode = response.status;\n            if (statusCode >= 400 && statusCode < 500)\n                throw new _fetchError__WEBPACK_IMPORTED_MODULE_0__.ServerError(getErrorMessage(statusCode), statusCode);\n            if (statusCode >= 500 && statusCode < 600)\n                throw new _fetchError__WEBPACK_IMPORTED_MODULE_0__.ServerError(getErrorMessage(statusCode), statusCode);\n            throw new _fetchError__WEBPACK_IMPORTED_MODULE_0__.ServerError(\"예기치 못한 에러가 발생하였습니다.\", statusCode);\n        }\n        const result = yield response.json();\n        if (typeof result !== \"object\")\n            throw new _fetchError__WEBPACK_IMPORTED_MODULE_0__.ServerResponseTypeError(\"서버 응답 오류가 발생하였습니다.\");\n        return result;\n    }\n    catch (error) {\n        if (error instanceof _fetchError__WEBPACK_IMPORTED_MODULE_0__.ServerResponseTypeError ||\n            error instanceof _fetchError__WEBPACK_IMPORTED_MODULE_0__.ServerError)\n            throw error;\n        if (error instanceof TypeError)\n            throw new _fetchError__WEBPACK_IMPORTED_MODULE_0__.NetworkError(\"네트워크 오류가 발생하였습니다.\");\n        throw new Error(\"예기치 못한 오류가 발생하였습니다.\");\n    }\n});\nconst getErrorMessage = (status) => {\n    switch (true) {\n        case status === 401:\n            return \"접근 권한이 없습니다.\";\n        case status === 404:\n            return \"요청한 리소스를 찾을 수 없습니다.\";\n        case status >= 400 && status < 500:\n            return \"클라이언트 오류가 발생하였습니다\";\n        case status >= 500 && status < 600:\n            return \"서버 오류가 발생하였습니다.\";\n        default:\n            return \"알 수 없는 오류가 발생했습니다.\";\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/fetch.ts?");

/***/ }),

/***/ "./src/api/fetchError.ts":
/*!*******************************!*\
  !*** ./src/api/fetchError.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NetworkError\": () => (/* binding */ NetworkError),\n/* harmony export */   \"ServerError\": () => (/* binding */ ServerError),\n/* harmony export */   \"ServerResponseTypeError\": () => (/* binding */ ServerResponseTypeError)\n/* harmony export */ });\nclass ServerResponseTypeError extends Error {\n    constructor(message) {\n        super(message);\n        this.name = \"ServerResponseTypeError\";\n    }\n}\nclass ServerError extends Error {\n    constructor(message, status) {\n        super(message);\n        this.name = \"ServerError\";\n        this.status = status;\n    }\n}\nclass NetworkError extends Error {\n    constructor(message) {\n        super(message);\n        this.name = \"NetworkError\";\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/fetchError.ts?");

/***/ }),

/***/ "./src/api/movieFetch.ts":
/*!*******************************!*\
  !*** ./src/api/movieFetch.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMostPopularMovies\": () => (/* binding */ getMostPopularMovies),\n/* harmony export */   \"getMovieGenres\": () => (/* binding */ getMovieGenres),\n/* harmony export */   \"getSearchMovies\": () => (/* binding */ getSearchMovies)\n/* harmony export */ });\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ \"./src/api/fetch.ts\");\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url */ \"./src/api/url.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst getMostPopularMovies = (pageNumber) => __awaiter(void 0, void 0, void 0, function* () {\n    const fetchURL = `${_url__WEBPACK_IMPORTED_MODULE_1__.URL.GET_POPULAR_MOVIES}&page=${pageNumber}`;\n    const result = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.fetchWithValidation)(fetchURL);\n    return result;\n});\nconst getSearchMovies = (query, pageNumber) => __awaiter(void 0, void 0, void 0, function* () {\n    const fetchURL = `${_url__WEBPACK_IMPORTED_MODULE_1__.URL.GET_SEARCH_MOVIES}&page=${pageNumber}&query=${query}`;\n    const result = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.fetchWithValidation)(fetchURL);\n    return result;\n});\nconst getMovieGenres = () => __awaiter(void 0, void 0, void 0, function* () {\n    const fetchURL = `${_url__WEBPACK_IMPORTED_MODULE_1__.URL.GET_MOVIE_GENRES}`;\n    const result = yield (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.fetchWithValidation)(fetchURL);\n    return result;\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/movieFetch.ts?");

/***/ }),

/***/ "./src/api/url.ts":
/*!************************!*\
  !*** ./src/api/url.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"URL\": () => (/* binding */ URL)\n/* harmony export */ });\nconst API_KEY = \"08c92921d3a623ab199d8e064d6359e5\";\nconst BASE_URL = \"https://api.themoviedb.org\";\nconst URL = {\n    GET_POPULAR_MOVIES: `${BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=ko-KR`,\n    GET_SEARCH_MOVIES: `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=ko-KR&include_adult=false`,\n    GET_MOVIE_GENRES: `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=ko-KR`,\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/api/url.ts?");

/***/ }),

/***/ "./src/components/common/CustomModal.ts":
/*!**********************************************!*\
  !*** ./src/components/common/CustomModal.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\nclass CustomModal extends HTMLElement {\n    constructor() {\n        super();\n        this.render();\n        this.addEvent();\n        this.modal = this.querySelector(\".modal\");\n    }\n    render() {\n        this.innerHTML = `\n      <dialog class=\"modal\">\n        <div class=\"modal-backdrop\"></div>\n        <div class=\"modal-container\">\n          <button id=\"close-button\">X</button>\n          <movie-detail></movie-detail>\n        </div>\n      </dialog>`;\n    }\n    addEvent() {\n        var _a, _b;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\".modal-backdrop\", this)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => this.closeModal());\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"#close-button\", this)) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", () => this.closeModal());\n    }\n    openModal() {\n        this.modal.showModal();\n    }\n    closeModal() {\n        this.modal.close();\n    }\n}\ncustomElements.define(\"custom-modal\", CustomModal);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomModal);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/common/CustomModal.ts?");

/***/ }),

/***/ "./src/components/common/ObservedArea.ts":
/*!***********************************************!*\
  !*** ./src/components/common/ObservedArea.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\nclass ObservedArea extends HTMLElement {\n    constructor() {\n        super();\n        this.observer = this.createObserver();\n    }\n    connectedCallback() {\n        this.render();\n        this.startObserving((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\".scroll-area\"));\n    }\n    render() {\n        this.innerHTML = `<div class=\"scroll-area\"></div>`;\n    }\n    createObserver() {\n        const observer = new IntersectionObserver((entries) => {\n            entries.forEach((entry) => {\n                if (entry.isIntersecting)\n                    this.handleIntersect();\n            });\n        });\n        return observer;\n    }\n    startObserving(element) {\n        this.observer.observe(element);\n    }\n    endObserving(element) {\n        this.observer.unobserve(element);\n    }\n    handleIntersect() {\n        const container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"movie-list-container\");\n        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.dispatchCustomEvent)(container, {\n            eventType: \"fetchMovieData\",\n            data: container.getAttribute(\"type\"),\n        });\n    }\n}\ncustomElements.define(\"observed-area\", ObservedArea);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ObservedArea);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/common/ObservedArea.ts?");

/***/ }),

/***/ "./src/components/header/MovieHeader.ts":
/*!**********************************************!*\
  !*** ./src/components/header/MovieHeader.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images */ \"./images/index.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\n\nclass MovieHeader extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        this.render();\n        this.addEvent();\n    }\n    render() {\n        this.innerHTML = `\n        <header>\n          <a href=\"\">\n            <img src=\"${_images__WEBPACK_IMPORTED_MODULE_0__.Logo}\" alt=\"MovieList\" />\n          </a>\n          <search-box class=\"search-box\"></search-box>\n          <button id=\"mobile-search-button\">\n            <img src=\"${_images__WEBPACK_IMPORTED_MODULE_0__.Search}\" alt=\"search\" />\n          </button>\n        </header>\n      `;\n    }\n    addEvent() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"#mobile-search-button\", this)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => this.showMobileSearchInput());\n    }\n    showMobileSearchInput() {\n        var _a, _b;\n        const searchBox = this.querySelector(\"#search-input\");\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"#mobile-search-button\", this)) === null || _a === void 0 ? void 0 : _a.classList.add(\"hidden\");\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-box\")) === null || _b === void 0 ? void 0 : _b.classList.add(\"show\");\n        searchBox === null || searchBox === void 0 ? void 0 : searchBox.focus();\n    }\n    hideMobileSearchInput() {\n        var _a, _b;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"#mobile-search-button\", this)) === null || _a === void 0 ? void 0 : _a.classList.remove(\"hidden\");\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"search-box\")) === null || _b === void 0 ? void 0 : _b.classList.add(\"hidden\");\n    }\n}\ncustomElements.define(\"movie-header\", MovieHeader);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/header/MovieHeader.ts?");

/***/ }),

/***/ "./src/components/header/SearchBox.ts":
/*!********************************************!*\
  !*** ./src/components/header/SearchBox.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\nclass SearchBox extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        this.render();\n        this.addEvent();\n    }\n    render() {\n        this.innerHTML = `\n      <form id=\"search-form\">\n        <input id=\"search-input\" type=\"text\" placeholder=\"검색\" />\n        <button class=\"search-button\">검색</button>\n      </form>\n    `;\n    }\n    addEvent() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"form\", this)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"submit\", (event) => {\n            this.onSubmitForm(event);\n        });\n    }\n    onSubmitForm(event) {\n        event.preventDefault();\n        const form = event.target;\n        const input = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"input[type='text']\", form);\n        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.dispatchCustomEvent)(this, {\n            eventType: \"searchMovieData\",\n            data: input.value,\n        });\n        form.reset();\n    }\n}\ncustomElements.define(\"search-box\", SearchBox);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/header/SearchBox.ts?");

/***/ }),

/***/ "./src/components/movie/MovieDetail.ts":
/*!*********************************************!*\
  !*** ./src/components/movie/MovieDetail.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images */ \"./images/index.ts\");\n\nclass MovieDetail extends HTMLElement {\n    constructor() {\n        super();\n        this.innerHTML = \"\";\n    }\n    render(movie, movieScore = \"0\") {\n        this.innerHTML = `\n      <div class=\"detail-header\">\n        <h2>${movie.title}</h2>\n      </div>\n      <div class=\"detail-content\">\n        <img src=\"https://image.tmdb.org/t/p/original/${movie.poster_path}\" />\n        <div class=\"detail-description\">\n          <div class=\"detail-genre-vote\">\n            <span id=\"detail-genre\">${movie.genres.join(\", \")}</span>\n            <span>\n              <img src=\"${_images__WEBPACK_IMPORTED_MODULE_0__.StarFilled}\" class=\"star\" alt=\"별점\" />\n              </span>\n            <span>\n              ${movie.vote_average}\n            </span>\n          </div>\n          <p class=\"detail-overview\">${movie.overview !== \"\"\n            ? movie.overview\n            : \"줄거리가 준비되지 않았습니다.\"}</p>\n          <movie-score class=\"detail-score\" movie-id=\"${movie.id}\" movie-score=\"${movieScore}\"/>\n         </div>\n      </div>\n    `;\n    }\n}\ncustomElements.define(\"movie-detail\", MovieDetail);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieDetail);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movie/MovieDetail.ts?");

/***/ }),

/***/ "./src/components/movie/MovieItem.ts":
/*!*******************************************!*\
  !*** ./src/components/movie/MovieItem.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images */ \"./images/index.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\n\nclass MovieItem extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        this.render();\n        this.addEvent();\n    }\n    render() {\n        const posterPath = this.getAttribute(\"poster-path\");\n        const title = this.getAttribute(\"title\");\n        const voteAverage = this.getAttribute(\"vote_average\");\n        this.innerHTML = `\n        <div class=\"item-card\">\n          <img\n            class=\"item-thumbnail skeleton\"\n            src=\"${posterPath !== \"null\"\n            ? `https://image.tmdb.org/t/p/original/${posterPath}`\n            : `${_images__WEBPACK_IMPORTED_MODULE_0__.AddSkeleton}`}\"\n            loading=\"lazy\"\n            alt=\"${title}\"\n          />\n          <p class=\"item-title\">${title}</p>\n          <p class=\"item-score\"><img src=\"${_images__WEBPACK_IMPORTED_MODULE_0__.StarFilled}\" class=\"star\" alt=\"별점\" />${voteAverage}</p>\n        </div>\n    `;\n    }\n    addEvent() {\n        var _a, _b;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\".item-thumbnail\", this)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"load\", () => this.removeSkeletonUI());\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\".item-thumbnail\", this)) === null || _b === void 0 ? void 0 : _b.addEventListener(\"error\", () => this.handleImageLoadError());\n        this.addEventListener(\"click\", () => this.onClickMovieDetail());\n    }\n    removeSkeletonUI() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\".item-thumbnail\", this)) === null || _a === void 0 ? void 0 : _a.classList.remove(\"skeleton\");\n    }\n    handleImageLoadError() {\n        const targetImage = this.querySelector(\".item-thumbnail\");\n        if (targetImage) {\n            targetImage.classList.remove(\"skeleton\");\n            targetImage.classList.add(\"load-error\");\n        }\n    }\n    onClickMovieDetail() {\n        const target = document.querySelector(\"movie-list-container\");\n        if (target)\n            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.dispatchCustomEvent)(target, {\n                eventType: \"clickMovieDetail\",\n                data: this.getAttribute(\"movieID\"),\n            });\n    }\n}\ncustomElements.define(\"movie-item\", MovieItem);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movie/MovieItem.ts?");

/***/ }),

/***/ "./src/components/movie/MovieList.ts":
/*!*******************************************!*\
  !*** ./src/components/movie/MovieList.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MovieList extends HTMLElement {\n    constructor() {\n        super();\n    }\n    render(movies) {\n        if (movies.length === 0) {\n            this.innerHTML = `<p class=\"not-search\">해당 검색 결과가 없습니다</p>`;\n            return;\n        }\n        this.insertAdjacentHTML(\"beforeend\", `${movies\n            .map((movie) => `\n            <movie-item\n              movieID=\"${movie.id}\"\n              poster-path=\"${movie.poster_path}\"\n              title=\"${movie.title}\"\n              vote_average=\"${movie.vote_average}\"\n            ></movie-item>`)\n            .join(\"\")}\n        `);\n    }\n}\ncustomElements.define(\"movie-list\", MovieList);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieList);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movie/MovieList.ts?");

/***/ }),

/***/ "./src/components/movie/MovieListContainer.ts":
/*!****************************************************!*\
  !*** ./src/components/movie/MovieListContainer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\nclass MovieListContainer extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render(query) {\n        const type = this.getAttribute(\"type\");\n        this.innerHTML = `\n      <h2>\n        ${type === \"popular\" ? \"지금 인기있는 영화\" : `\"${query}\" 검색 결과`}\n      </h2>\n      <movie-list class=\"item-list hidden\"></movie-list>\n      <ul class=\"skeleton-list\">\n        ${`<li>\n          <a href=\"#\">\n            <div class=\"item-card\">\n              <div class=\"item-thumbnail skeleton\"></div>\n              <div class=\"item-title skeleton\"></div>\n              <div class=\"item-score skeleton\"></div>\n            </div>\n          </a>\n        </li>`.repeat(20)}\n      </ul>\n      <observed-area></observed-area>\n    `;\n    }\n    changeTitle(query) {\n        this.setAttribute(\"type\", \"search\");\n        this.render(query);\n    }\n    displayErrorUI(errorMessage) {\n        this.innerHTML = `\n    <div class=\"error-container\">\n      <p>${errorMessage}</p>\n      <p>페이지를 새로 고침하거나 네트워크 상태를 확인 후 나중에 다시 시도해주세요.</p>\n    </div>\n    `;\n    }\n    hideSkeletonUI() {\n        var _a, _b;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\".skeleton-list\", this)) === null || _a === void 0 ? void 0 : _a.classList.add(\"hidden\");\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\"movie-list\", this)) === null || _b === void 0 ? void 0 : _b.classList.remove(\"hidden\");\n    }\n    showSkeletonUI() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.$)(\".skeleton-list\", this)) === null || _a === void 0 ? void 0 : _a.classList.remove(\"hidden\");\n    }\n}\ncustomElements.define(\"movie-list-container\", MovieListContainer);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieListContainer);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movie/MovieListContainer.ts?");

/***/ }),

/***/ "./src/components/movie/MovieScore.ts":
/*!********************************************!*\
  !*** ./src/components/movie/MovieScore.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images */ \"./images/index.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ \"./src/utils/dom.ts\");\n\n\nclass MovieScore extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        this.render();\n        this.addEvent();\n    }\n    render() {\n        var _a;\n        const movieScore = (_a = Number(this.getAttribute(\"movie-score\"))) !== null && _a !== void 0 ? _a : 0;\n        const scores = [2, 4, 6, 8, 10];\n        this.innerHTML = `\n        <div id=\"detail-score-title\">내 별점</div> \n        <div id=\"detail-score-image\">\n          ${scores\n            .map((score) => {\n            return `\n                <img class=\"star\" src=\"${movieScore < score ? _images__WEBPACK_IMPORTED_MODULE_0__.StartEmpty : _images__WEBPACK_IMPORTED_MODULE_0__.StarFilled}\" class=\"star\" alt=\"별점 ${score}\" data-score=\"${score}\"/>`;\n        })\n            .join(\"\")}    \n        </div>\n        <div id=\"detail-score-description\">\n          ${this.getScoreMessage(movieScore)}\n        </div>\n     `;\n    }\n    addEvent() {\n        var _a;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"#detail-score-image\", this)) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", (event) => this.onClickScoreImage(event));\n    }\n    onClickScoreImage(event) {\n        if (event.target instanceof HTMLImageElement) {\n            const score = event.target.dataset.score;\n            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.dispatchCustomEvent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.$)(\"movie-detail\"), {\n                eventType: \"setMovieScore\",\n                data: {\n                    movieId: this.getAttribute(\"movie-id\"),\n                    score,\n                },\n            });\n            this.setAttribute(\"movie-score\", score);\n            this.render();\n            this.addEvent();\n        }\n    }\n    getScoreMessage(score) {\n        switch (score) {\n            case 0:\n                return \"별점 매기기\";\n            case 2:\n                return \"2 최악이예요\";\n            case 4:\n                return \"4 별로예요\";\n            case 6:\n                return \"6 보통이에요\";\n            case 8:\n                return \"8 재미있어요\";\n            case 10:\n                return \"10 명작이에요\";\n        }\n    }\n}\ncustomElements.define(\"movie-score\", MovieScore);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieScore);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movie/MovieScore.ts?");

/***/ }),

/***/ "./src/domain/movieHandler.ts":
/*!************************************!*\
  !*** ./src/domain/movieHandler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieHandler = {\n    movies: [],\n    genres: [],\n    setGenres(genres) {\n        this.genres = genres;\n    },\n    addMovies(movies) {\n        const newMovies = movies.map((movie) => {\n            return {\n                id: movie.id,\n                title: movie.title,\n                vote_average: Number(movie.vote_average.toFixed(1)),\n                poster_path: movie.poster_path,\n                overview: movie.overview,\n                genre_ids: movie.genre_ids,\n                genres: movie.genre_ids.map((genreID) => {\n                    const genre = this.genres.find((genre) => genre.id === genreID);\n                    return genre ? genre.name : \"\";\n                }),\n            };\n        });\n        this.movies = [...this.movies, ...newMovies];\n        return newMovies;\n    },\n    getMovie(movieID) {\n        return this.movies.find((genre) => genre.id === movieID);\n    },\n    initializeMovies() {\n        this.movies = [];\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieHandler);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/movieHandler.ts?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/common.css */ \"./src/css/common.css\");\n/* harmony import */ var _css_responsive_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/responsive.css */ \"./src/css/responsive.css\");\n/* harmony import */ var _components_header_MovieHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/MovieHeader */ \"./src/components/header/MovieHeader.ts\");\n/* harmony import */ var _components_header_SearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/SearchBox */ \"./src/components/header/SearchBox.ts\");\n/* harmony import */ var _components_movie_MovieItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/movie/MovieItem */ \"./src/components/movie/MovieItem.ts\");\n/* harmony import */ var _components_movie_MovieList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movie/MovieList */ \"./src/components/movie/MovieList.ts\");\n/* harmony import */ var _components_movie_MovieListContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movie/MovieListContainer */ \"./src/components/movie/MovieListContainer.ts\");\n/* harmony import */ var _components_common_CustomModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/common/CustomModal */ \"./src/components/common/CustomModal.ts\");\n/* harmony import */ var _components_movie_MovieDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/movie/MovieDetail */ \"./src/components/movie/MovieDetail.ts\");\n/* harmony import */ var _components_movie_MovieScore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movie/MovieScore */ \"./src/components/movie/MovieScore.ts\");\n/* harmony import */ var _components_common_ObservedArea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/common/ObservedArea */ \"./src/components/common/ObservedArea.ts\");\n/* harmony import */ var _movieApp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movieApp */ \"./src/movieApp.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n_movieApp__WEBPACK_IMPORTED_MODULE_12__[\"default\"].init();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.js?");

/***/ }),

/***/ "./src/movieApp.ts":
/*!*************************!*\
  !*** ./src/movieApp.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api_movieFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/movieFetch */ \"./src/api/movieFetch.ts\");\n/* harmony import */ var _domain_movieHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/movieHandler */ \"./src/domain/movieHandler.ts\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dom */ \"./src/utils/dom.ts\");\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/localStorage */ \"./src/utils/localStorage.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nconst movieApp = {\n    currentPageNumber: 1,\n    query: \"\",\n    $container: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-list-container\"),\n    init() {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.addEvent();\n            yield this.setMovieGenres();\n            yield this.getPopularMovieData();\n        });\n    },\n    addEvent() {\n        var _a, _b, _c, _d;\n        (_a = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-list-container\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"fetchMovieData\", ({ detail }) => detail === \"popular\"\n            ? this.getPopularMovieData()\n            : this.getSearchMovieData());\n        (_b = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"search-box\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"searchMovieData\", ({ detail }) => this.searchMovieData(detail));\n        (_c = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-list-container\")) === null || _c === void 0 ? void 0 : _c.addEventListener(\"clickMovieDetail\", ({ detail }) => this.renderModal(detail));\n        (_d = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-detail\")) === null || _d === void 0 ? void 0 : _d.addEventListener(\"setMovieScore\", ({ detail }) => this.setMovieScore(detail));\n    },\n    renderModal(movieID) {\n        var _a;\n        const modal = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"custom-modal\");\n        const movieDetail = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-detail\");\n        const moviesScore = (_a = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage)(\"moviesScore\")) !== null && _a !== void 0 ? _a : [];\n        const foundMovie = moviesScore.find((movie) => movie.movieId === movieID);\n        movieDetail.render(_domain_movieHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getMovie(Number(movieID)), foundMovie === null || foundMovie === void 0 ? void 0 : foundMovie.score);\n        modal.openModal();\n    },\n    setMovieScore({ movieId, score }) {\n        var _a;\n        if (score === \"0\")\n            return;\n        const moviesScore = (_a = (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage)(\"moviesScore\")) !== null && _a !== void 0 ? _a : [];\n        const foundMovie = moviesScore.find((movie) => movie.movieId === movieId);\n        if (foundMovie) {\n            foundMovie.score = score;\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)(\"moviesScore\", [...moviesScore]);\n        }\n        else {\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)(\"moviesScore\", [...moviesScore, { movieId, score }]);\n        }\n    },\n    setMovieGenres() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const genres = yield (0,_api_movieFetch__WEBPACK_IMPORTED_MODULE_0__.getMovieGenres)();\n            _domain_movieHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setGenres(genres.genres);\n        });\n    },\n    renderMovieList(movies) {\n        const movieList = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"movie-list\");\n        const observedArea = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"observed-area\");\n        if (!movies)\n            return;\n        const newMovies = _domain_movieHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addMovies(movies.results);\n        if (movies.results.length < 20)\n            observedArea.endObserving((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\".scroll-area\"));\n        this.$container.hideSkeletonUI();\n        movieList.render(newMovies);\n    },\n    searchMovieData(query) {\n        this.currentPageNumber = 1;\n        this.query = query;\n        this.$container.changeTitle(query);\n        _domain_movieHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeMovies();\n        this.getSearchMovieData();\n    },\n    fetchMovieData(fetchFunction) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this.$container.showSkeletonUI();\n            try {\n                const movies = yield fetchFunction();\n                return movies;\n            }\n            catch (error) {\n                if (error instanceof Error) {\n                    const errorMessage = error.message;\n                    this.$container.displayErrorUI(errorMessage);\n                }\n            }\n        });\n    },\n    getPopularMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const observedArea = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\"observed-area\");\n            const movies = yield this.fetchMovieData(() => (0,_api_movieFetch__WEBPACK_IMPORTED_MODULE_0__.getMostPopularMovies)(this.currentPageNumber++));\n            if (this.currentPageNumber > 500)\n                observedArea.endObserving((0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.$)(\".scroll-area\"));\n            this.renderMovieList(movies);\n        });\n    },\n    getSearchMovieData() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const movies = yield this.fetchMovieData(() => (0,_api_movieFetch__WEBPACK_IMPORTED_MODULE_0__.getSearchMovies)(this.query, this.currentPageNumber++));\n            this.renderMovieList(movies);\n        });\n    },\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieApp);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/movieApp.ts?");

/***/ }),

/***/ "./src/utils/dom.ts":
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"dispatchCustomEvent\": () => (/* binding */ dispatchCustomEvent)\n/* harmony export */ });\nconst $ = (selector, target = document) => target.querySelector(selector);\nconst dispatchCustomEvent = ($target, { eventType, data = null }) => {\n    const customEvent = new CustomEvent(eventType, { detail: data });\n    $target.dispatchEvent(customEvent);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/dom.ts?");

/***/ }),

/***/ "./src/utils/localStorage.ts":
/*!***********************************!*\
  !*** ./src/utils/localStorage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\nconst getLocalStorage = (key) => {\n    const item = localStorage.getItem(key);\n    return item ? JSON.parse(item) : null;\n};\nconst setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/localStorage.ts?");

/***/ }),

/***/ "./images/add_skeleton.png":
/*!*********************************!*\
  !*** ./images/add_skeleton.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da3e03a95b7922e70c82.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/add_skeleton.png?");

/***/ }),

/***/ "./images/error_no_available.png":
/*!***************************************!*\
  !*** ./images/error_no_available.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb2e5d627155a7356dd0.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/error_no_available.png?");

/***/ }),

/***/ "./images/error_unresponsive.png":
/*!***************************************!*\
  !*** ./images/error_unresponsive.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"271360de1c7dad0fd2ad.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/error_unresponsive.png?");

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAUCAYAAACtZULwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbESURBVHgB7VmLcRs3EF2c6Jl4Ro5PFYSqIEwD4rECswPLFUiuQHIFtisQU0GkCnSsIHQFpiswY8mTzIgi8vYAULjFHu8oeWwn4zdDicQB2MX+sWeuiuLUEs1/LssJvhdEVCyJJj2iQ/IwRIvdsnxDAn8XRX8ZzdPQtPZb4Go4tPFv8DbfnU736YH4CDn0rH1fGzTm1ZOyPG16/qVob4MeWXvCCoEgnhtr+5BGv7daXVKWnYRJ1jE82SvLRbz4hmiANSctNOb4fBfK/j/DO14//PZONovn9NYPjelba/OmzTBxgH9lPIYNC/qB7wJwvFM43vP1gDEl/o7iOT03bmawghGHdGrwVKMoG3N/pf8SEFrFyIK+DhbfkPYazrMRvr2ih40zdcUO6J6wRZF/RthZiT04l2khiMOU3ONxWc6b9v6HKJdzcdhJPPZTg8BDSLRRWAQWFV9EMyPSWRs4/WHPSRvtSCZ9Evw3ySWc9UbMh77yWGZMr1J2daj23FvEP66LYiDDPjMkBJSgKgJB69rawq9JwDXC9XA4X8EbuHDkMQj/GOuOxF4jFEGlXI+9/4j5Na5u2L8lugTP/TD+WYS6T0VxiFB4tLR24NcluKaq0Ct7xrxoMjYNS1GgxbQr47L27NrRzU3DHppcrojG4PnMpHMHMU2ml1WHwhcwv48vbyvGdnY+kLA8ViKKtLVyV4pXg4kpbQALEwq7pA65nunxIa4PDl77oXNlWiEHPI9yvKQWXB0cnDA96hatChakv708GLd3Msnb5ga5VLLcEpnbweZLt8nT6NlMTu5FgjCKUKyypkasPXoksMYcs1CX2t5K2tlRDAB7/E4bwAYCgz+krZnb/jwSVYRsiYYaasVYR1TKZpdnj7PxndmYdwmBWMFKDs82KJsVphyqKlygjBf8QWR46UOuxNhf+0oxXsTRJsyVNLRQH4MNRPJW8WHMiCOej3ojSvOsRn8rWMWbuWAOdPmD378ptIMuFng+V7auxsPHhpzNm+PHS1Z2sBj2UpkHVs5rwp25EAyWlprBhmLTsfNd33gIgFHMfKhfY60IThM+1wfIKyGiR61zYltSS+AtHTRvhZHMETovpEc9Am83D6isrZKjUVfMH0+n83hMoV0ZCXI3p7dzRIj3cT0SbljxHqEaJ1jQfBkxjWKm7AkmMu/NvjiTTCeRQB4qGVQUAR7mTXTJKVWGzrEfD3z1xXMt10ve+klRBMGiEHsmxrR8nl5JtwDkPOulw2PQ/hP/uRibZm7OKeR1Sg/AOoxXlVtU7e65SlMt0lb3yNdb5KVGL/GeVntu6nm7kGtu76kI685YiM+DQrYGL+dSecT0xzD01xzpWD9csd/4M25zEwhw1bjLT68UookCOb9pYS9rUXZX7LXcYRGWL2q/wUvIm/Dqmidyatm7h1C+Np5MpyOWf0O9EqPgSpyrd45itCVcNY4QXjXtZVhVirTMVe2yCk4u+xKmY17rUPCUcmDnrlAqxKMLuicyY87xmbR9bLuCOoHlX70Y4UIQ9YJx93BVZhwlYdiX2xaHrqmCoufTcMhhPBebzpTigb2n3vVCMUDt0BhPmH3kOld1RNUmwvI5mD6rPYaSdyjFTYd87den3SwYyq5vXLTho9Ld6wr5AoMBxR+H7+zBK/fCifsNsbzy3qZ6QXnPEWqDRcYCdW+91pO0Io20e2xLcebnzBsM501tcLUaQrn1IaK/wncO8+gizWx858c+CO9JN69rCPedP8lvEiZRNKUNIXjiUvFurpyvXM+l3HT1S15gUGU8eyGd+Yg5u+KwLTqIZkMdxPxDTmeQy4cwtvFFCAsLB2SiG8OF7VAENRkOGHofhcLc6h2smodadwUbRPQ5teRiTucQbvWGzRF4e7oWlrsRFHKab/bkyp79SpbOcEtqgBZV8O77DLqIHSivDFrMW8VrrdWi0yFFt6YQxgdstf59tgQfpqANyDrkLW84pdzLV+n9pnXsdctUWKz8IzGWK3M6gT2vgbeasDTe2AM/Pqxrqp1lDLpjwUuCWO6VcetXw3i+Q/U+W78Lt4Xo1uIsYIkumdmuoFlwV02GY+9NjQUf02jrmn0J3rjrx18aunudwHxuE4XWQBEXyx0yedPGf893vt5h4TE316F9zh9rQXKIRj5vfG8d52vj2p9ljaeIAa+0/YhOboU1+tYf59ApH0C7ivEYd5Swxy+k86R2zRD23mVRsRfzzrzBQ0dc2Xve+rJBI3ibxEbI1yc+F9YP457Cyp/fCLnEtNEFG/u1z+wdXel43P7k16wlUuKF75zVZEJOtmPjzvBU9jb+BXYRlENrCf86AAAAAElFTkSuQmCC\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/logo.png?");

/***/ }),

/***/ "./images/search_button.png":
/*!**********************************!*\
  !*** ./images/search_button.png ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgBzVi9btRAEJ51iPBBkByJSKHC6RBNjo4O5wly6eg4niC0VFwq6KJUpMvdGyQdVDgdVCQNPxVLFwRILiLOUYjNzHrv8K5373x/1n2RldvZ8e7nndmd2WEwIrzVez6krAEsXcdmAIx5kKae6GQsAkg4JA7H1jHqHEZnXzhMAFZWEYk18d8TQWqkGdIT/KA9JNqGMTCUIBIL8N8BPj5MBo7PzqhEF2wdnud77vKdl/hzn5owOWiMhntrxXOvLX2I4ygu85JxBYWfof+gadYt74XYdwQJC+HyD48iHon38KPAdevYV8f3N8HuDhyfjTL+yYzkAN6B2aRtyMzEoQTkWC3IfHcskgpBuQIfDeQ4XDlb0c9PJzAGrB9NG6h7sdGzgAmO0qrVXkCRXAfi+MG45AhilXAMNP2h0kGukM1pRX8F5TFyoA1wGP34vAVTBM7ThqLJydShST+/gvqXcLjoPoVpI46fQeZ/eRzY1AVBuXq+1jfQN8aFGBP9WRP7kgMYCaKzbmvy9qQhahCkP3c0sWmnA5M77JsmX5slQULZeR0R+FWEsyZHkHOEijBNdS5k4iTQlI6gKlA0yoMVI5eDf3c1pbHPu5GR/A01SaCr4Ao6viKJ4+oIXl5ypU25pQann2xKzOJosaEwl8aF4MCcw8nS9P8QCUNFKMylcSGQiVXh4g0fqgLljiq4rkImPlYlVwFUBcpm8kjgu65CB7W6axnbhKqQZd05JKGu4ojUXkUgw9BMIecIFCFjOhdwjCGnmHrNAi2lhQHCFGJ7x4yeWTS9lfu6A08NcvXU7CVN90y6+YyaMgs/1yfS9Gkf3JZ7D8fVWzPp5w9qPXv2caBdmDau10xFgB2bev/iHp//4nipXsafD3P9dffmSt1dXHpb9qJtgygEeKuv0WaPlQ6WYlnk6yvbe2qo63Zb4iqoDtAgk0yys4U/Z2ZtFjqT4uGsTF8YrLqLex5NHLMDZQjCcJKErPRBq43pmVL6oFDppMGQ0kdpktbqlpisVmvh9t+GaYKJ44TjB+6WIWmtbtGmwI3zxl26TfGRzsRJsxyOzxZuiP34/Pd7Oa5+B2mgnOO8pz3BaAVMup7qAX44Qnw6prqgsZqRob+SpQnmBvXlTfAROIkvrgz5EnCWvpGPnpYpAQ8jOTLBWWAQybkgSDCSRIsswJwAN8aJYeOczQ1BQo4klpCFcZ//A7Fbfxk02LswAAAAAElFTkSuQmCC\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/search_button.png?");

/***/ }),

/***/ "./images/star_empty.png":
/*!*******************************!*\
  !*** ./images/star_empty.png ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAWJAAAFiQFtaJ36AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFRSURBVHgB7VXLcYMwEF2YMHAkFQQqCOnAqSRuITc4RTlBGUklaQFXEKWCcAMukLcZlCFYsiXsm/1mmNVv39PuSoLoIlGW5ZY/coRnuxDkied5n9wexzEtikLa+vpkD6EaEHshB1hFMo9CwSUa20jEcsAlmqOR6KJQsI3GWxIOwxD7vp+hm8HewW5AFhv8JTZQw+cLayVs3fd9LYRotCJVVfFuEzoPZJ7nqeq4nK7V+BNBSh7x1XQiwLFjLq0IFxD5PEmIBcCxWR6GvdOFosVhGH6goBmtEFgWXSuyUkh2XfegE2D4BpEGAg3ZY2cSMIowDtwNHe4PTRrTFUXRNzkA6bp1Shfqoa3FlEKpmwuCICEDtCLTs/KPHOl7bds2ne7T+zGfOW50g/x+gVh130D+PEsFW/5DCliBdU/TeEIuIkyM3f5a0ys7jSuxLa+lK86BH/9mrrgdLO0kAAAAAElFTkSuQmCC\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/star_empty.png?");

/***/ }),

/***/ "./images/star_filled.png":
/*!********************************!*\
  !*** ./images/star_filled.png ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAWJAAAFiQFtaJ36AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAExSURBVHgB7ZUxUsMwEEW/0mBmKMwJsE+AU0KV3CQ3wdwETpKKoXVOgDgBVHQg/mrsGcdeTdbGHXmNV6Pdv9qVJQH/ivCCXXjFbkqMszpSuODnrR2W7g7eEreClYC6N3qAEVMFg9V3mKqwVXC8+g5TFScrSKy+42QVbiT2g5xmxZmK9d1wvKGdJ+I95xr6vEf7m/YVGrfG5ygBxWWVBZbBs7JSDPtfNJN+gi03s8HfOUStluM92LPXF9jH/s8Vz7BR92CBJCNxNcHMJJ7i66G4oG6y29LRjZ2TBBw08WSCNiiHFYfb9JSmLS3K8IEpZLg2t4jOeu9DFPDq3Jd+SFcJoUoRfsRlPJ1yXp6VqGpKgn7/n0SYR7+WFsjl5u7jq1YOEhWwIpcen8e6vUkX8z2j8gtlP186j77vhwAAAABJRU5ErkJggg==\";\n\n//# sourceURL=webpack://javascript-movie-review/./images/star_filled.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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