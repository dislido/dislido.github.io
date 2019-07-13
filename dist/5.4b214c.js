(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/page/kancolle/calcular/calcular.less":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/page/kancolle/calcular/calcular.less ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "[data-stylefield=\"aapb\"] .input-label {\n  width: 4em;\n  display: inline-block;\n}\n[data-stylefield=\"aapb\"] .input-item {\n  margin: 8px 0;\n}\n[data-stylefield=\"aapb\"] .select-type {\n  min-width: 85px;\n}\n", ""]);



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

/***/ "./src/page/kancolle/calcular/aapb/equipinput.jsx":
/*!********************************************************!*\
  !*** ./src/page/kancolle/calcular/aapb/equipinput.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_input_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/input/style/css */ "./node_modules/antd/es/input/style/css.js");
/* harmony import */ var antd_es_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/input */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var antd_es_input_number_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/input-number/style/css */ "./node_modules/antd/es/input-number/style/css.js");
/* harmony import */ var antd_es_input_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/input-number */ "./node_modules/antd/es/input-number/index.js");
/* harmony import */ var antd_es_select_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/select/style/css */ "./node_modules/antd/es/select/style/css.js");
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/select */ "./node_modules/antd/es/select/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/util/hooks */ "./src/util/hooks/index.js");









const {
  useState,
  useEffect
} = react__WEBPACK_IMPORTED_MODULE_6___default.a;

function calcStar(star, type) {
  if (type === '6' || type === '106') return 4 * star ** 0.5;
  if (type === '4') return 3 * star ** 0.5;
  return 0;
}

function calcResult(type, value, star) {
  return type % 100 * value + calcStar(star, type);
}

function EquipInput({
  constP2 = false,
  onChange
}) {
  const [type, setType] = useState(constP2 ? '106' : '0');
  const [AA, setAA] = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_8__["useNumberState"])(constP2 ? 8 : 0);
  const [star, setStar] = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_8__["useNumberState"])(0);
  const result = calcResult(type, AA, star);

  const setEquipType = eType => {
    if (eType === '106') setAA(8);
    setType(eType);
  };

  useEffect(() => {
    onChange(result, type === '106');
  }, [result, type === '106']);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__["default"].Group, {
    compact: true
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: type,
    onChange: setEquipType,
    className: "select-type",
    disabled: constP2
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_5__["default"].Option, {
    value: "0"
  }, "\u65E0"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_5__["default"].Option, {
    value: "6"
  }, "\u673A\u67AA"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_5__["default"].Option, {
    value: "4"
  }, "\u9AD8\u89D2\u70AE"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_5__["default"].Option, {
    value: "3"
  }, "\u7535\u63A2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_select__WEBPACK_IMPORTED_MODULE_5__["default"].Option, {
    value: "106"
  }, "\u55B72")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_input_number__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: type === '106' || type === '0' || constP2,
    value: AA,
    min: 0,
    style: {
      width: '40%'
    },
    onChange: setAA
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_input_number__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: type === '0',
    formatter: e => `★${e === '10' ? 'max' : e}`,
    min: 0,
    max: 10,
    value: star,
    onChange: setStar,
    style: {
      width: '20%'
    }
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: result,
    disabled: true,
    title: "\u63D0\u4F9B\u7684\u52A0\u6743\u5BF9\u7A7A\u503C",
    style: {
      width: '40px'
    }
  }));
}

EquipInput.propTypes = {
  constP2: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired
};
EquipInput.defaultProps = {
  constP2: false
};
/* harmony default export */ __webpack_exports__["default"] = (EquipInput);

/***/ }),

/***/ "./src/page/kancolle/calcular/aapb/index.jsx":
/*!***************************************************!*\
  !*** ./src/page/kancolle/calcular/aapb/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AAPB; });
/* harmony import */ var antd_es_input_number_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/input-number/style/css */ "./node_modules/antd/es/input-number/style/css.js");
/* harmony import */ var antd_es_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/input-number */ "./node_modules/antd/es/input-number/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/util/hooks */ "./src/util/hooks/index.js");
/* harmony import */ var _equipinput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./equipinput */ "./src/page/kancolle/calcular/aapb/equipinput.jsx");
/* harmony import */ var _calcular_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calcular.less */ "./src/page/kancolle/calcular/calcular.less");
/* harmony import */ var _calcular_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_calcular_less__WEBPACK_IMPORTED_MODULE_5__);






function AAPB() {
  const [lucky, setLucky] = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_3__["useNumberState"])(0);
  const [AA, setAA] = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_3__["useNumberState"])(0);
  const [equipsWeightedAA, setEquipsWeightedAA] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([0, 0, 0, 0, 0, 0]);
  const [equipsIsP2, setEquipsIsP2] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([true, false, false, false, false, false]);

  const handleEquipChange = index => (weightedAA, isP2 = false) => {
    equipsWeightedAA[index] = weightedAA;
    equipsIsP2[index] = isP2;
    setEquipsWeightedAA(equipsWeightedAA);
    setEquipsIsP2(equipsIsP2);
  };

  const totalWeightedAA = (equipsWeightedAA.reduce((p, c) => p + c, 0) + lucky + AA).toFixed(2);
  const extraP2Bonus = (equipsIsP2.filter(it => it).length - 1) * 15;
  const rate = (totalWeightedAA / 2.82 + extraP2Bonus).toFixed(2);
  const result = `对空喷进弹幕发动率：${totalWeightedAA}/282+${extraP2Bonus}%=${rate}%`;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "data-stylefield": "aapb"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "input-label"
  }, "\u8FD0\uFF1A"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_input_number__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: '40%'
    },
    min: 0,
    value: lucky,
    onChange: setLucky
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "input-item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "input-label"
  }, "\u88F8\u5BF9\u7A7A\uFF1A"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_input_number__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      width: '40%'
    },
    min: 0,
    value: AA,
    onChange: setAA
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_equipinput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: handleEquipChange(0),
    constP2: true
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_equipinput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: handleEquipChange(1)
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_equipinput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: handleEquipChange(2)
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_equipinput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: handleEquipChange(3)
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_equipinput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: handleEquipChange(4)
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_equipinput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: handleEquipChange(5)
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, result));
}

/***/ }),

/***/ "./src/page/kancolle/calcular/calcular.jsx":
/*!*************************************************!*\
  !*** ./src/page/kancolle/calcular/calcular.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calcular; });
/* harmony import */ var antd_es_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/modal/style/css */ "./node_modules/antd/es/modal/style/css.js");
/* harmony import */ var antd_es_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/modal */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_kancolle_calcular_aapb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/page/kancolle/calcular/aapb */ "./src/page/kancolle/calcular/aapb/index.jsx");
/* harmony import */ var _util_hooks_hooks4antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/hooks/hooks4antd */ "./src/util/hooks/hooks4antd.js");
/* harmony import */ var _component_imagecard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/imagecard */ "./src/component/imagecard.jsx");
/* harmony import */ var _img_aa1230_card_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/aa1230-card.png */ "./src/page/kancolle/calcular/img/aa1230-card.png");
/* harmony import */ var _img_aa1230_card_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_aa1230_card_png__WEBPACK_IMPORTED_MODULE_6__);



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const calcComponents = {
  AAPB: _page_kancolle_calcular_aapb__WEBPACK_IMPORTED_MODULE_3__["default"]
};
function Calcular() {
  const {
    modalProps,
    openModal
  } = Object(_util_hooks_hooks4antd__WEBPACK_IMPORTED_MODULE_4__["useModal"])();
  const [calcComponentName, setCalcComponent] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const CalcComponent = calcComponents[calcComponentName];

  const openCalcModal = (compName, title) => {
    setCalcComponent(compName);
    openModal({
      title
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "cardset cardset-default",
    style: {
      paddingTop: '8px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_component_imagecard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: () => openCalcModal('AAPB', '对空喷进弹幕发动率计算'),
    backgroundImage: _img_aa1230_card_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    text: "\u5BF9\u7A7A\u55B7\u8FDB\u5F39\u5E55\u53D1\u52A8\u7387\u8BA1\u7B97"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_modal__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    footer: null,
    destroyOnClose: true,
    maskClosable: true
  }, modalProps), CalcComponent && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CalcComponent, null)));
}

/***/ }),

/***/ "./src/page/kancolle/calcular/calcular.less":
/*!**************************************************!*\
  !*** ./src/page/kancolle/calcular/calcular.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./calcular.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/page/kancolle/calcular/calcular.less");

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

/***/ "./src/page/kancolle/calcular/img/aa1230-card.png":
/*!********************************************************!*\
  !*** ./src/page/kancolle/calcular/img/aa1230-card.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/page/kancolle/calcular/img/aa1230-card.png";

/***/ }),

/***/ "./src/page/kancolle/calcular/index.js":
/*!*********************************************!*\
  !*** ./src/page/kancolle/calcular/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcular */ "./src/page/kancolle/calcular/calcular.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_calcular__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/page/kancolle/img/myinf.png":
/*!*****************************************!*\
  !*** ./src/page/kancolle/img/myinf.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/page/kancolle/img/myinf.png";

/***/ }),

/***/ "./src/page/kancolle/index.js":
/*!************************************!*\
  !*** ./src/page/kancolle/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kancolle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kancolle */ "./src/page/kancolle/kancolle.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_kancolle__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/page/kancolle/kancolle.jsx":
/*!****************************************!*\
  !*** ./src/page/kancolle/kancolle.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _mainpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainpage */ "./src/page/kancolle/mainpage.jsx");
/* harmony import */ var _calcular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calcular */ "./src/page/kancolle/calcular/index.js");
/* harmony import */ var _util_hooks_use_title_effect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/util/hooks/use-title-effect */ "./src/util/hooks/use-title-effect.js");














function Kancolle({
  match
}) {
  Object(_util_hooks_use_title_effect__WEBPACK_IMPORTED_MODULE_12__["default"])('砍口垒');
  const routerSwitch = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: `${match.url}/calculuar`,
    component: _calcular__WEBPACK_IMPORTED_MODULE_11__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: `${match.url}`,
    component: _mainpage__WEBPACK_IMPORTED_MODULE_10__["default"]
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
    key: `${match.url}/calculuar`
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], Object(_util__WEBPACK_IMPORTED_MODULE_9__["linkProps"])(`${match.url}/calculuar`), "\u8BA1\u7B97\u5668")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    span: 22
  }, routerSwitch));
}

Kancolle.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Kancolle);

/***/ }),

/***/ "./src/page/kancolle/mainpage.jsx":
/*!****************************************!*\
  !*** ./src/page/kancolle/mainpage.jsx ***!
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
/* harmony import */ var _img_myinf_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/myinf.png */ "./src/page/kancolle/img/myinf.png");
/* harmony import */ var _img_myinf_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_myinf_png__WEBPACK_IMPORTED_MODULE_3__);




function Mainpage() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_collapse__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_collapse__WEBPACK_IMPORTED_MODULE_1__["default"].Panel, {
    header: "\u72D7\u724C"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _img_myinf_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "\u72D7\u724C20181212"
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

/***/ "./src/util/hooks/index.js":
/*!*********************************!*\
  !*** ./src/util/hooks/index.js ***!
  \*********************************/
/*! exports provided: useNumberState, tmp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNumberState", function() { return useNumberState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tmp", function() { return tmp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useNumberState(init) {
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(init);

  const setState = val => setValue(+val || 0);

  return [value, setState];
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