(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/component/imagecard.less":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/component/imagecard.less ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".imagecard {\n  position: absolute;\n  bottom: 0;\n}\n.imagecard h3 {\n  color: white;\n  text-shadow: black 0 0 3px;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/component/inputgroup-addon.less":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/component/inputgroup-addon.less ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".inputgroup-addon {\n  color: black;\n  cursor: auto;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/page/azurlane/games/pixeldrawer.less":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/page/azurlane/games/pixeldrawer.less ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".pixel-drawer {\n  border: #80707070 solid;\n  border-width: 1px 0 0 1px;\n  line-height: 0;\n}\n.pixel-drawer div {\n  height: 16px;\n}\n.pixel-drawer div button {\n  width: 16px;\n  height: 16px;\n  background-color: rgba(233, 233, 233, 0);\n  border: #80707070 solid;\n  border-width: 0 1px 1px 0;\n}\ninput.input-color-eraser::-webkit-color-swatch {\n  display: none;\n}\ninput.input-color-eraser::after {\n  content: '⌧';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-top: 4px;\n  text-align: center;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-is/index.js from dll-reference vendor_726cb7 ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor_726cb7 */ "dll-reference vendor_726cb7"))("./node_modules/react-is/index.js");

/***/ }),

/***/ "./src/component/imagecard.jsx":
/*!*************************************!*\
  !*** ./src/component/imagecard.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/card/style/css */ "./node_modules/antd/es/card/style/css.js");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/card */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imagecard_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imagecard.less */ "./src/component/imagecard.less");
/* harmony import */ var _imagecard_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imagecard_less__WEBPACK_IMPORTED_MODULE_4__);



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const ImageCard = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(props => {
  const {
    backgroundImage,
    bodyStyle,
    text,
    ...cardProps
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    hoverable: true,
    bodyStyle: {
      height: '100%',
      background: '#F7F7F7 no-repeat center / contain',
      backgroundImage: backgroundImage && `url('${backgroundImage}')`,
      ...bodyStyle
    }
  }, cardProps), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "imagecard"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, text)));
});
ImageCard.propTypes = {
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  bodyStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  text: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
ImageCard.defaultProps = {
  backgroundImage: null,
  bodyStyle: {},
  text: null
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCard);

/***/ }),

/***/ "./src/component/imagecard.less":
/*!**************************************!*\
  !*** ./src/component/imagecard.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./imagecard.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/component/imagecard.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/component/inputgroup-addon.jsx":
/*!********************************************!*\
  !*** ./src/component/inputgroup-addon.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputGroupAddon; });
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inputgroup_addon_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputgroup-addon.less */ "./src/component/inputgroup-addon.less");
/* harmony import */ var _inputgroup_addon_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inputgroup_addon_less__WEBPACK_IMPORTED_MODULE_3__);



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function InputGroupAddon(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    disabled: true,
    className: "inputgroup-addon"
  }, props));
}

/***/ }),

/***/ "./src/component/inputgroup-addon.less":
/*!*********************************************!*\
  !*** ./src/component/inputgroup-addon.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./inputgroup-addon.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/component/inputgroup-addon.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/page/azurlane/azurlane.jsx":
/*!****************************************!*\
  !*** ./src/page/azurlane/azurlane.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Azurlane; });
/* harmony import */ var antd_es_row_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/row/style/css */ "./node_modules/antd/es/row/style/css.js");
/* harmony import */ var antd_es_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/row */ "./node_modules/antd/es/row/index.js");
/* harmony import */ var antd_es_col_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/col/style/css */ "./node_modules/antd/es/col/style/css.js");
/* harmony import */ var antd_es_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/col */ "./node_modules/antd/es/col/index.js");
/* harmony import */ var antd_es_menu_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/antd/es/menu/style/css.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/menu */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/util */ "./src/util/index.js");
/* harmony import */ var _util_hooks_use_title_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/util/hooks/use-title-effect */ "./src/util/hooks/use-title-effect.js");
/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mainpage */ "./src/page/azurlane/mainpage.jsx");
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./games */ "./src/page/azurlane/games/index.js");













function Azurlane({
  match
}) {
  Object(_util_hooks_use_title_effect__WEBPACK_IMPORTED_MODULE_10__["default"])('碧蓝航线');
  const routerSwitch = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: `${match.url}/games`,
    component: _games__WEBPACK_IMPORTED_MODULE_12__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: `${match.url}`,
    component: _mainpage__WEBPACK_IMPORTED_MODULE_11__["default"]
  }));
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_row__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "flex",
    gutter: 16
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    span: 2
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    defaultSelectedKeys: [Object(_util__WEBPACK_IMPORTED_MODULE_9__["getDefaultSelectedKey"])(routerSwitch)],
    style: {
      height: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    key: `${match.url}`
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], Object(_util__WEBPACK_IMPORTED_MODULE_9__["linkProps"])(`${match.url}`), "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    key: `${match.url}/games`
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], Object(_util__WEBPACK_IMPORTED_MODULE_9__["linkProps"])(`${match.url}/games`), "\u5C0F\u6E38\u620F")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    span: 22
  }, routerSwitch));
}
Azurlane.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  }).isRequired
};

/***/ }),

/***/ "./src/page/azurlane/games/games.jsx":
/*!*******************************************!*\
  !*** ./src/page/azurlane/games/games.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Games; });
/* harmony import */ var antd_es_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/antd/es/modal/style/css.js");
/* harmony import */ var antd_es_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/modal */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_imagecard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/imagecard */ "./src/component/imagecard.jsx");
/* harmony import */ var _util_hooks_hooks4antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/hooks/hooks4antd */ "./src/util/hooks/hooks4antd.js");
/* harmony import */ var _pixeldrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pixeldrawer */ "./src/page/azurlane/games/pixeldrawer.jsx");
/* harmony import */ var _img_pixeldrawer_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/pixeldrawer.jpg */ "./src/page/azurlane/img/pixeldrawer.jpg");
/* harmony import */ var _img_pixeldrawer_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_pixeldrawer_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stggame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stggame */ "./src/page/azurlane/games/stggame/index.js");



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const gameComponents = {
  PixelDrawer: _pixeldrawer__WEBPACK_IMPORTED_MODULE_5__["default"],
  STGGame: _stggame__WEBPACK_IMPORTED_MODULE_7__["default"]
};
function Games() {
  const {
    modalProps,
    openModal
  } = Object(_util_hooks_hooks4antd__WEBPACK_IMPORTED_MODULE_4__["useModal"])();
  const [gameComponentName, setGameComponent] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const GameComponent = gameComponents[gameComponentName];

  const openGameModal = (compName, title, extraModalProps) => {
    setGameComponent(compName);
    openModal({
      title,
      ...extraModalProps
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "cardset cardset-default",
    style: {
      paddingTop: '8px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_component_imagecard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "\u50CF\u7D20\u753B",
    backgroundImage: _img_pixeldrawer_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    onClick: () => openGameModal('PixelDrawer', '像素画', {
      width: 641
    })
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_component_imagecard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "\u6D4B\u8BD5\u6E38\u620F(WIP)",
    onClick: () => openGameModal('STGGame', '测试游戏', {
      width: 1000
    })
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_modal__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    footer: null,
    destroyOnClose: true,
    maskClosable: false
  }, modalProps), GameComponent && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GameComponent, null)));
}

/***/ }),

/***/ "./src/page/azurlane/games/index.js":
/*!******************************************!*\
  !*** ./src/page/azurlane/games/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _games__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./games */ "./src/page/azurlane/games/games.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_games__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/page/azurlane/games/pixeldrawer.jsx":
/*!*************************************************!*\
  !*** ./src/page/azurlane/games/pixeldrawer.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PixelDrawer; });
/* harmony import */ var antd_es_popconfirm_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/popconfirm/style/css */ "./node_modules/antd/es/popconfirm/style/css.js");
/* harmony import */ var antd_es_popconfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/popconfirm */ "./node_modules/antd/es/popconfirm/index.js");
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_inputgroup_addon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/inputgroup-addon */ "./src/component/inputgroup-addon.jsx");
/* harmony import */ var _pixeldrawer_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pixeldrawer.less */ "./src/page/azurlane/games/pixeldrawer.less");
/* harmony import */ var _pixeldrawer_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pixeldrawer_less__WEBPACK_IMPORTED_MODULE_6__);







const defaultColors = ['#ffffff', '#322829', '#ffd370', '#75fcad', '#7184fd', '#ff6f96', '#fcd7c7'];

function initCanvas() {
  const init = [];

  for (let i = 0; i < 22; i++) {
    const line = new Array(37);
    line.fill(null);
    init.push(line);
  }

  return init;
}

function useColor() {
  const [currentColor, setCurrentColor] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('#ffffff');
  const [colorList, setColorList] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(defaultColors);
  return {
    currentColor,
    setCurrentColor,
    colorList,
    addColor: () => {
      if (!currentColor || colorList.includes(currentColor) || colorList.length >= 37) return;
      colorList.push(currentColor);
      setColorList(colorList);
    },
    deleteColor: () => {
      if (!currentColor) return;
      colorList.splice(colorList.indexOf(currentColor), 1);
      setColorList(colorList);
    },
    isColorSaved: colorList.includes(currentColor)
  };
}

function PixelDrawer() {
  const [lines, setLines] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initCanvas());
  const [backgroundColor, setBackgroundColor] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('#bdadad');
  const {
    currentColor,
    setCurrentColor,
    colorList,
    addColor,
    deleteColor,
    isColorSaved
  } = useColor();

  const draw = e => {
    const [x, y] = e.target.dataset.pos.split(' ');
    const newLines = [];
    lines.forEach(l => newLines.push(l));
    newLines[y][x] = currentColor;
    setLines(newLines);
  };

  const clearCanvas = () => setLines(initCanvas());

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"].Group, {
    className: "margin8"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_component_inputgroup_addon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "\u5F53\u524D\u989C\u8272\uFF1A",
    style: {
      width: 94
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "color",
    value: currentColor,
    onChange: e => setCurrentColor(e.target.value),
    style: {
      width: 60
    },
    className: currentColor ? '' : 'input-color-eraser'
  }), currentColor !== null && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "button",
    style: {
      width: 108
    },
    value: isColorSaved ? '从调色板删除' : '添加到调色板',
    onClick: isColorSaved ? deleteColor : addColor
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_popconfirm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u786E\u8BA4\u6E05\u7A7A\u753B\u5E03\uFF1F",
    onConfirm: clearCanvas
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "button",
    style: {
      width: 80
    },
    value: "\u6E05\u7A7A\u753B\u5E03"
  }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"].Group, {
    className: "margin8"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_component_inputgroup_addon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "\u80CC\u666F\u989C\u8272\uFF1A",
    style: {
      width: 94
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "color",
    value: backgroundColor,
    onChange: e => setBackgroundColor(e.target.value),
    style: {
      width: 60
    }
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"].Group, {
    className: "margin8"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_component_inputgroup_addon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: "\u8C03\u8272\u677F\uFF1A",
    size: "small",
    style: {
      width: 72
    }
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "button",
    size: "small",
    onClick: () => setCurrentColor(null),
    style: {
      width: 24,
      paddingLeft: 4
    },
    value: "\u2327"
  }), colorList.map(color => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "button",
    size: "small",
    key: color,
    onClick: () => setCurrentColor(color),
    style: {
      width: 24,
      backgroundColor: color
    }
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "pixel-drawer",
    style: {
      backgroundColor
    }
  }, lines.map((l, y) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    key: y
  }, l.map((pixel, x) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    key: x,
    type: "button",
    "data-pos": `${x} ${y}`,
    onClick: draw,
    style: {
      backgroundColor: pixel
    }
  }))))));
}

/***/ }),

/***/ "./src/page/azurlane/games/pixeldrawer.less":
/*!**************************************************!*\
  !*** ./src/page/azurlane/games/pixeldrawer.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./pixeldrawer.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/page/azurlane/games/pixeldrawer.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/page/azurlane/games/stggame/index.js":
/*!**************************************************!*\
  !*** ./src/page/azurlane/games/stggame/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stggame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stggame */ "./src/page/azurlane/games/stggame/stggame.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_stggame__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/page/azurlane/games/stggame/stggame.jsx":
/*!*****************************************************!*\
  !*** ./src/page/azurlane/games/stggame/stggame.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return STGGame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function STGGame() {
  const [gameCtrler, setGameCtrler] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    loadFinished
  } = gameCtrler;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./game */ "./src/page/azurlane/games/stggame/game.js")).then(game => {
      setGameCtrler(game.default);
    });
  }, []);

  if (!loadFinished) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Loading...");
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u63A7\u5236\u53F0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    width: "800",
    height: "480"
  }));
}

/***/ }),

/***/ "./src/page/azurlane/img/myinf.png":
/*!*****************************************!*\
  !*** ./src/page/azurlane/img/myinf.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/page/azurlane/img/myinf.png";

/***/ }),

/***/ "./src/page/azurlane/img/pixeldrawer.jpg":
/*!***********************************************!*\
  !*** ./src/page/azurlane/img/pixeldrawer.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/page/azurlane/img/pixeldrawer.jpg";

/***/ }),

/***/ "./src/page/azurlane/index.js":
/*!************************************!*\
  !*** ./src/page/azurlane/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _azurlane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./azurlane */ "./src/page/azurlane/azurlane.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_azurlane__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/page/azurlane/mainpage.jsx":
/*!****************************************!*\
  !*** ./src/page/azurlane/mainpage.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mainpage; });
/* harmony import */ var antd_es_collapse_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/collapse/style/css */ "./node_modules/antd/es/collapse/style/css.js");
/* harmony import */ var antd_es_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/collapse */ "./node_modules/antd/es/collapse/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_myinf_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/myinf.png */ "./src/page/azurlane/img/myinf.png");
/* harmony import */ var _img_myinf_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_myinf_png__WEBPACK_IMPORTED_MODULE_3__);




function Mainpage() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_collapse__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_collapse__WEBPACK_IMPORTED_MODULE_1__["default"].Panel, {
    header: "\u72D7\u724C"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _img_myinf_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "\u72D7\u724C20181202"
  }))));
}

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

/***/ "./src/util/hooks/hooks4antd.js":
/*!**************************************!*\
  !*** ./src/util/hooks/hooks4antd.js ***!
  \**************************************/
/*! exports provided: useModal, tmp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useModal", function() { return useModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tmp", function() { return tmp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useModal(baseProps = {}) {
  const [visible, setVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [bProps, setBaseProps] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(baseProps);
  const [aProps, setAssignProps] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const openModal = (assignProps = {}) => {
    setAssignProps(assignProps);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setAssignProps({});
  };

  return {
    modalProps: {
      visible,
      onCancel: closeModal,
      onOk: closeModal,
      ...bProps,
      ...aProps
    },
    openModal,
    closeModal,
    setBaseProps
  };
}
function tmp() {}

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