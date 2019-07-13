(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/page/home/home.jsx":
/*!********************************!*\
  !*** ./src/page/home/home.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var antd_es_menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/antd/es/menu/style/css.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/menu */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_hooks_use_title_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/util/hooks/use-title-effect */ "./src/util/hooks/use-title-effect.js");




function Home() {
  Object(_util_hooks_use_title_effect__WEBPACK_IMPORTED_MODULE_3__["default"])('首页');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_1__["default"], null), "\u660E\u660E\u662F\u9996\u9875\u5374\u4E00\u884C\u4EE3\u7801\u90FD\u6CA1\u5199");
}

/***/ }),

/***/ "./src/page/home/index.js":
/*!********************************!*\
  !*** ./src/page/home/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/page/home/home.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_home__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/util/config.js":
/*!****************************!*\
  !*** ./src/util/config.js ***!
  \****************************/
/*! exports provided: titleSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleSuffix", function() { return titleSuffix; });
const titleSuffix = ' - DisLido HomePage';

/***/ }),

/***/ "./src/util/hooks/use-title-effect.js":
/*!********************************************!*\
  !*** ./src/util/hooks/use-title-effect.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTitleEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/util/config */ "./src/util/config.js");


function useTitleEffect(title) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const prevTitle = document.title;
    document.title = `${title}${_util_config__WEBPACK_IMPORTED_MODULE_1__["titleSuffix"]}`;
    return () => {
      document.title = prevTitle;
    };
  }, []);
}

/***/ })

}]);