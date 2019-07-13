(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/antd/es/empty/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/es/empty/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/antd/es/empty/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./node_modules/antd/es/empty/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/es/empty/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/antd/es/empty/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/antd/es/select/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/select/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-select */ "./node_modules/rc-select/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/warning */ "./node_modules/antd/es/_util/warning.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var _util_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/es/_util/type.js");
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};










var SelectSizes = Object(_util_type__WEBPACK_IMPORTED_MODULE_8__["tuple"])('default', 'large', 'small');
var SelectPropTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  size: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"](SelectSizes),
  notFoundContent: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
  showSearch: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  optionLabelProp: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  choiceTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  id: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
}; // => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _this.saveSelect = function (node) {
      _this.rcSelect = node;
    };

    _this.renderSelect = function (_ref) {
      var _classNames;

      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          renderEmpty = _ref.renderEmpty;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          _a$className = _a.className,
          className = _a$className === void 0 ? '' : _a$className,
          size = _a.size,
          mode = _a.mode,
          getPopupContainer = _a.getPopupContainer,
          removeIcon = _a.removeIcon,
          clearIcon = _a.clearIcon,
          menuItemSelectedIcon = _a.menuItemSelectedIcon,
          showArrow = _a.showArrow,
          restProps = __rest(_a, ["prefixCls", "className", "size", "mode", "getPopupContainer", "removeIcon", "clearIcon", "menuItemSelectedIcon", "showArrow"]);

      var rest = Object(omit_js__WEBPACK_IMPORTED_MODULE_5__["default"])(restProps, ['inputIcon']);
      var prefixCls = getPrefixCls('select', customizePrefixCls);
      var cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-show-arrow"), showArrow), _classNames), className);
      var optionLabelProp = _this.props.optionLabelProp;

      if (_this.isCombobox()) {
        // children 带 dom 结构时，无法填入输入框
        optionLabelProp = optionLabelProp || 'value';
      }

      var modeConfig = {
        multiple: mode === 'multiple',
        tags: mode === 'tags',
        combobox: _this.isCombobox()
      };
      var finalRemoveIcon = removeIcon && (react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](removeIcon) ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](removeIcon, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(removeIcon.props.className, "".concat(prefixCls, "-remove-icon"))
      }) : removeIcon) || react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "close",
        className: "".concat(prefixCls, "-remove-icon")
      });
      var finalClearIcon = clearIcon && (react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](clearIcon) ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](clearIcon, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(clearIcon.props.className, "".concat(prefixCls, "-clear-icon"))
      }) : clearIcon) || react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "close-circle",
        theme: "filled",
        className: "".concat(prefixCls, "-clear-icon")
      });
      var finalMenuItemSelectedIcon = menuItemSelectedIcon && (react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](menuItemSelectedIcon) ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](menuItemSelectedIcon, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(menuItemSelectedIcon.props.className, "".concat(prefixCls, "-selected-icon"))
      }) : menuItemSelectedIcon) || react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "check",
        className: "".concat(prefixCls, "-selected-icon")
      });
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rc_select__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        inputIcon: _this.renderSuffixIcon(prefixCls),
        removeIcon: finalRemoveIcon,
        clearIcon: finalClearIcon,
        menuItemSelectedIcon: finalMenuItemSelectedIcon,
        showArrow: showArrow
      }, rest, modeConfig, {
        prefixCls: prefixCls,
        className: cls,
        optionLabelProp: optionLabelProp || 'children',
        notFoundContent: _this.getNotFoundContent(renderEmpty),
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        ref: _this.saveSelect
      }));
    };

    Object(_util_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(props.mode !== 'combobox', 'Select', 'The combobox mode is deprecated, ' + 'it will be removed in next major version, ' + 'please use AutoComplete instead');
    return _this;
  }

  _createClass(Select, [{
    key: "focus",
    value: function focus() {
      this.rcSelect.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcSelect.blur();
    }
  }, {
    key: "getNotFoundContent",
    value: function getNotFoundContent(renderEmpty) {
      var notFoundContent = this.props.notFoundContent;

      if (notFoundContent !== undefined) {
        return notFoundContent;
      }

      if (this.isCombobox()) {
        return null;
      }

      return renderEmpty('Select'); // if (this.isCombobox()) {
      //   // AutoComplete don't have notFoundContent defaultly
      //   return notFoundContent === undefined ? null : notFoundContent;
      // }
      // return renderEmpty('Select');
      // // return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
    }
  }, {
    key: "isCombobox",
    value: function isCombobox() {
      var mode = this.props.mode;
      return mode === 'combobox' || mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE;
    }
  }, {
    key: "renderSuffixIcon",
    value: function renderSuffixIcon(prefixCls) {
      var _this$props = this.props,
          loading = _this$props.loading,
          suffixIcon = _this$props.suffixIcon;

      if (suffixIcon) {
        return react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](suffixIcon) ? react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](suffixIcon, {
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(suffixIcon.props.className, "".concat(prefixCls, "-arrow-icon"))
        }) : suffixIcon;
      }

      if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          type: "loading"
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: "down",
        className: "".concat(prefixCls, "-arrow-icon")
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_config_provider__WEBPACK_IMPORTED_MODULE_4__["ConfigConsumer"], null, this.renderSelect);
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Select.Option = rc_select__WEBPACK_IMPORTED_MODULE_2__["Option"];
Select.OptGroup = rc_select__WEBPACK_IMPORTED_MODULE_2__["OptGroup"];
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
Select.defaultProps = {
  showSearch: false,
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom'
};
Select.propTypes = SelectPropTypes;

/***/ }),

/***/ "./node_modules/antd/es/select/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/es/select/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./node_modules/antd/es/select/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _empty_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../empty/style/css */ "./node_modules/antd/es/empty/style/css.js");

 // style dependencies



/***/ }),

/***/ "./node_modules/antd/es/select/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/es/select/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/antd/es/select/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/antd/es/empty/style/index.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/antd/es/empty/style/index.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-empty {\n  margin: 0 8px;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n}\n.ant-empty-image {\n  height: 100px;\n  margin-bottom: 8px;\n}\n.ant-empty-image img {\n  height: 100%;\n}\n.ant-empty-description {\n  margin: 0;\n}\n.ant-empty-footer {\n  margin-top: 16px;\n}\n.ant-empty-normal {\n  margin: 32px 0;\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-empty-normal .ant-empty-image {\n  height: 40px;\n}\n.ant-empty-small {\n  margin: 8px 0;\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-empty-small .ant-empty-image {\n  height: 35px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/antd/es/select/style/index.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/antd/es/select/style/index.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-select {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n          font-feature-settings: 'tnum';\n  position: relative;\n  display: inline-block;\n  outline: 0;\n}\n.ant-select ul,\n.ant-select ol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ant-select > ul > li > a {\n  padding: 0;\n  background-color: #fff;\n}\n.ant-select-arrow {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  top: 50%;\n  right: 11px;\n  margin-top: -6px;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 12px;\n  line-height: 1;\n  -webkit-transform-origin: 50% 50%;\n      -ms-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n.ant-select-arrow > * {\n  line-height: 1;\n}\n.ant-select-arrow svg {\n  display: inline-block;\n}\n.ant-select-arrow::before {\n  display: none;\n}\n.ant-select-arrow .ant-select-arrow-icon {\n  display: block;\n}\n.ant-select-arrow .ant-select-arrow-icon svg {\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n.ant-select-selection {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n  border: 1px solid #d9d9d9;\n  border-top-width: 1.02px;\n  border-radius: 4px;\n  outline: none;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ant-select-selection:hover {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n}\n.ant-select-focused .ant-select-selection,\n.ant-select-selection:focus,\n.ant-select-selection:active {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-select-selection__clear {\n  position: absolute;\n  top: 50%;\n  right: 11px;\n  z-index: 1;\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 12px;\n  font-style: normal;\n  line-height: 12px;\n  text-align: center;\n  text-transform: none;\n  background: #fff;\n  cursor: pointer;\n  opacity: 0;\n  -webkit-transition: color 0.3s ease, opacity 0.15s ease;\n  transition: color 0.3s ease, opacity 0.15s ease;\n  text-rendering: auto;\n}\n.ant-select-selection__clear::before {\n  display: block;\n}\n.ant-select-selection__clear:hover {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-select-selection:hover .ant-select-selection__clear {\n  opacity: 1;\n}\n.ant-select-selection-selected-value {\n  float: left;\n  max-width: 100%;\n  padding-right: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-select-no-arrow .ant-select-selection-selected-value {\n  padding-right: 0;\n}\n.ant-select-disabled {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-select-disabled .ant-select-selection {\n  background: #f5f5f5;\n  cursor: not-allowed;\n}\n.ant-select-disabled .ant-select-selection:hover,\n.ant-select-disabled .ant-select-selection:focus,\n.ant-select-disabled .ant-select-selection:active {\n  border-color: #d9d9d9;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.ant-select-disabled .ant-select-selection__clear {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n}\n.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice {\n  padding-right: 10px;\n  color: rgba(0, 0, 0, 0.33);\n  background: #f5f5f5;\n}\n.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice__remove {\n  display: none;\n}\n.ant-select-selection--single {\n  position: relative;\n  height: 32px;\n  cursor: pointer;\n}\n.ant-select-selection__rendered {\n  position: relative;\n  display: block;\n  margin-right: 11px;\n  margin-left: 11px;\n  line-height: 30px;\n}\n.ant-select-selection__rendered::after {\n  display: inline-block;\n  width: 0;\n  visibility: hidden;\n  pointer-events: none;\n  content: '.';\n}\n.ant-select-lg {\n  font-size: 16px;\n}\n.ant-select-lg .ant-select-selection--single {\n  height: 40px;\n}\n.ant-select-lg .ant-select-selection__rendered {\n  line-height: 38px;\n}\n.ant-select-lg .ant-select-selection--multiple {\n  min-height: 40px;\n}\n.ant-select-lg .ant-select-selection--multiple .ant-select-selection__rendered li {\n  height: 32px;\n  line-height: 32px;\n}\n.ant-select-lg .ant-select-selection--multiple .ant-select-selection__clear,\n.ant-select-lg .ant-select-selection--multiple .ant-select-arrow {\n  top: 20px;\n}\n.ant-select-sm .ant-select-selection--single {\n  height: 24px;\n}\n.ant-select-sm .ant-select-selection__rendered {\n  margin: 0 7px;\n  line-height: 22px;\n}\n.ant-select-sm .ant-select-selection--multiple {\n  min-height: 24px;\n}\n.ant-select-sm .ant-select-selection--multiple .ant-select-selection__rendered li {\n  height: 16px;\n  line-height: 14px;\n}\n.ant-select-sm .ant-select-selection--multiple .ant-select-selection__clear,\n.ant-select-sm .ant-select-selection--multiple .ant-select-arrow {\n  top: 12px;\n}\n.ant-select-sm .ant-select-selection__clear,\n.ant-select-sm .ant-select-arrow {\n  right: 8px;\n}\n.ant-select-disabled .ant-select-selection__choice__remove {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: default;\n}\n.ant-select-disabled .ant-select-selection__choice__remove:hover {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-select-search__field__wrap {\n  position: relative;\n  display: inline-block;\n}\n.ant-select-selection__placeholder,\n.ant-select-search__field__placeholder {\n  position: absolute;\n  top: 50%;\n  right: 9px;\n  left: 0;\n  max-width: 100%;\n  height: 20px;\n  margin-top: -10px;\n  overflow: hidden;\n  color: #bfbfbf;\n  line-height: 20px;\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n}\n.ant-select-search__field__placeholder {\n  left: 12px;\n}\n.ant-select-search__field__mirror {\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: pre;\n  opacity: 0;\n  pointer-events: none;\n}\n.ant-select-search--inline {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.ant-select-search--inline .ant-select-search__field__wrap {\n  width: 100%;\n  height: 100%;\n}\n.ant-select-search--inline .ant-select-search__field {\n  width: 100%;\n  height: 100%;\n  font-size: 100%;\n  line-height: 1;\n  background: transparent;\n  border-width: 0;\n  border-radius: 4px;\n  outline: 0;\n}\n.ant-select-search--inline > i {\n  float: right;\n}\n.ant-select-selection--multiple {\n  min-height: 32px;\n  padding-bottom: 3px;\n  cursor: text;\n  zoom: 1;\n}\n.ant-select-selection--multiple::before,\n.ant-select-selection--multiple::after {\n  content: '';\n  display: table;\n}\n.ant-select-selection--multiple::after {\n  clear: both;\n}\n.ant-select-selection--multiple .ant-select-search--inline {\n  position: static;\n  float: left;\n  width: auto;\n  max-width: 100%;\n  padding: 0;\n}\n.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field {\n  width: 0.75em;\n  max-width: 100%;\n}\n.ant-select-selection--multiple .ant-select-selection__rendered {\n  height: auto;\n  margin-bottom: -3px;\n  margin-left: 5px;\n}\n.ant-select-selection--multiple .ant-select-selection__placeholder {\n  margin-left: 6px;\n}\n.ant-select-selection--multiple > ul > li,\n.ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n  height: 24px;\n  margin-top: 3px;\n  line-height: 22px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice {\n  position: relative;\n  float: left;\n  max-width: 99%;\n  margin-right: 4px;\n  padding: 0 20px 0 10px;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fafafa;\n  border: 1px solid #e8e8e8;\n  border-radius: 2px;\n  cursor: default;\n  -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-select-selection--multiple .ant-select-selection__choice__disabled {\n  padding: 0 10px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__content {\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  -webkit-transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove {\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  right: 4px;\n  color: rgba(0, 0, 0, 0.45);\n  font-weight: bold;\n  line-height: inherit;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove > * {\n  line-height: 1;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove svg {\n  display: inline-block;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove::before {\n  display: none;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove .ant-select-selection--multiple .ant-select-selection__choice__remove-icon {\n  display: block;\n}\n:root .ant-select-selection--multiple .ant-select-selection__choice__remove {\n  font-size: 12px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove:hover {\n  color: rgba(0, 0, 0, 0.75);\n}\n.ant-select-selection--multiple .ant-select-selection__clear,\n.ant-select-selection--multiple .ant-select-arrow {\n  top: 16px;\n}\n.ant-select-allow-clear .ant-select-selection--single .ant-select-selection-selected-value {\n  padding-right: 16px;\n}\n.ant-select-allow-clear .ant-select-selection--multiple .ant-select-selection__rendered,\n.ant-select-show-arrow .ant-select-selection--multiple .ant-select-selection__rendered {\n  margin-right: 20px;\n}\n.ant-select-open .ant-select-arrow-icon svg {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.ant-select-open .ant-select-selection {\n  border-color: #40a9ff;\n  border-right-width: 1px !important;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-select-combobox .ant-select-arrow {\n  display: none;\n}\n.ant-select-combobox .ant-select-search--inline {\n  float: none;\n  width: 100%;\n  height: 100%;\n}\n.ant-select-combobox .ant-select-search__field__wrap {\n  width: 100%;\n  height: 100%;\n}\n.ant-select-combobox .ant-select-search__field {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), height 0s;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), height 0s;\n}\n.ant-select-combobox.ant-select-allow-clear .ant-select-selection:hover .ant-select-selection__rendered,\n.ant-select-combobox.ant-select-show-arrow .ant-select-selection:hover .ant-select-selection__rendered {\n  margin-right: 20px;\n}\n.ant-select-dropdown {\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  -webkit-font-feature-settings: 'tnum';\n          font-feature-settings: 'tnum';\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  z-index: 1050;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 14px;\n  font-variant: initial;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: none;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,\n.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {\n  -webkit-animation-name: antSlideUpIn;\n          animation-name: antSlideUpIn;\n}\n.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-topLeft,\n.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-topLeft {\n  -webkit-animation-name: antSlideDownIn;\n          animation-name: antSlideDownIn;\n}\n.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {\n  -webkit-animation-name: antSlideUpOut;\n          animation-name: antSlideUpOut;\n}\n.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-topLeft {\n  -webkit-animation-name: antSlideDownOut;\n          animation-name: antSlideDownOut;\n}\n.ant-select-dropdown-hidden {\n  display: none;\n}\n.ant-select-dropdown-menu {\n  max-height: 250px;\n  margin-bottom: 0;\n  padding-left: 0;\n  overflow: auto;\n  list-style: none;\n  outline: none;\n}\n.ant-select-dropdown-menu-item-group-list {\n  margin: 0;\n  padding: 0;\n}\n.ant-select-dropdown-menu-item-group-list > .ant-select-dropdown-menu-item {\n  padding-left: 20px;\n}\n.ant-select-dropdown-menu-item-group-title {\n  height: 32px;\n  padding: 0 12px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 12px;\n  line-height: 32px;\n}\n.ant-select-dropdown-menu-item-group-list .ant-select-dropdown-menu-item:first-child:not(:last-child),\n.ant-select-dropdown-menu-item-group:not(:last-child) .ant-select-dropdown-menu-item-group-list .ant-select-dropdown-menu-item:last-child {\n  border-radius: 0;\n}\n.ant-select-dropdown-menu-item {\n  position: relative;\n  display: block;\n  padding: 5px 12px;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: normal;\n  line-height: 22px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  -webkit-transition: background 0.3s ease;\n  transition: background 0.3s ease;\n}\n.ant-select-dropdown-menu-item:hover {\n  background-color: #e6f7ff;\n}\n.ant-select-dropdown-menu-item:first-child {\n  border-radius: 4px 4px 0 0;\n}\n.ant-select-dropdown-menu-item:last-child {\n  border-radius: 0 0 4px 4px;\n}\n.ant-select-dropdown-menu-item-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-select-dropdown-menu-item-disabled:hover {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ant-select-dropdown-menu-item-selected,\n.ant-select-dropdown-menu-item-selected:hover {\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: 600;\n  background-color: #fafafa;\n}\n.ant-select-dropdown-menu-item-active {\n  background-color: #e6f7ff;\n}\n.ant-select-dropdown-menu-item-divider {\n  height: 1px;\n  margin: 1px 0;\n  overflow: hidden;\n  line-height: 0;\n  background-color: #e8e8e8;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item {\n  padding-right: 32px;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon {\n  position: absolute;\n  top: 50%;\n  right: 12px;\n  color: transparent;\n  font-weight: bold;\n  font-size: 12px;\n  text-shadow: 0 0.1px 0, 0.1px 0 0, 0 -0.1px 0, -0.1px 0;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon {\n  color: rgba(0, 0, 0, 0.87);\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-disabled .ant-select-selected-icon {\n  display: none;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon {\n  display: inline-block;\n  color: #1890ff;\n}\n.ant-select-dropdown--empty.ant-select-dropdown--multiple .ant-select-dropdown-menu-item {\n  padding-right: 12px;\n}\n.ant-select-dropdown-container-open .ant-select-dropdown,\n.ant-select-dropdown-open .ant-select-dropdown {\n  display: block;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/rc-select/es/DropdownMenu.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-select/es/DropdownMenu.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownMenu; });
/* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-scroll-into-view */ "./node_modules/dom-scroll-into-view/lib/index.js");
/* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./node_modules/rc-select/es/util.js");
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}










var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    var _this;

    _classCallCheck(this, DropdownMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).call(this, props));
    _this.rafInstance = {
      cancel: function cancel() {
        return null;
      }
    };
    _this.lastVisible = false;

    _this.scrollActiveItemToView = function () {
      // scroll into view
      var itemComponent = Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this.firstActiveItem);
      var _this$props = _this.props,
          visible = _this$props.visible,
          firstActiveValue = _this$props.firstActiveValue;
      var value = _this.props.value;

      if (!itemComponent || !visible) {
        return;
      }

      var scrollIntoViewOpts = {
        onlyScrollIfNeeded: true
      };

      if ((!value || value.length === 0) && firstActiveValue) {
        scrollIntoViewOpts.alignWithTop = true;
      } // Delay to scroll since current frame item position is not ready when pre view is by filter
      // https://github.com/ant-design/ant-design/issues/11268#issuecomment-406634462


      _this.rafInstance = raf__WEBPACK_IMPORTED_MODULE_2___default()(function () {
        dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_0___default()(itemComponent, Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this.menuRef), scrollIntoViewOpts);
      });
    };

    _this.renderMenu = function () {
      var _this$props2 = _this.props,
          menuItems = _this$props2.menuItems,
          menuItemSelectedIcon = _this$props2.menuItemSelectedIcon,
          defaultActiveFirstOption = _this$props2.defaultActiveFirstOption,
          prefixCls = _this$props2.prefixCls,
          multiple = _this$props2.multiple,
          onMenuSelect = _this$props2.onMenuSelect,
          inputValue = _this$props2.inputValue,
          backfillValue = _this$props2.backfillValue,
          onMenuDeselect = _this$props2.onMenuDeselect,
          visible = _this$props2.visible;
      var firstActiveValue = _this.props.firstActiveValue;

      if (menuItems && menuItems.length) {
        var menuProps = {};

        if (multiple) {
          menuProps.onDeselect = onMenuDeselect;
          menuProps.onSelect = onMenuSelect;
        } else {
          menuProps.onClick = onMenuSelect;
        }

        var value = _this.props.value;
        var selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_7__["getSelectKeys"])(menuItems, value);
        var activeKeyProps = {};
        var defaultActiveFirst = defaultActiveFirstOption;
        var clonedMenuItems = menuItems;

        if (selectedKeys.length || firstActiveValue) {
          if (visible && !_this.lastVisible) {
            activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
          } else if (!visible) {
            // Do not trigger auto active since we already have selectedKeys
            if (selectedKeys[0]) {
              defaultActiveFirst = false;
            }

            activeKeyProps.activeKey = undefined;
          }

          var foundFirst = false; // set firstActiveItem via cloning menus
          // for scroll into view

          var clone = function clone(item) {
            var key = item.key;

            if (!foundFirst && selectedKeys.indexOf(key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
              foundFirst = true;
              return react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](item, {
                ref: function ref(_ref) {
                  _this.firstActiveItem = _ref;
                }
              });
            }

            return item;
          };

          clonedMenuItems = menuItems.map(function (item) {
            if (item.type.isMenuItemGroup) {
              var children = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__["default"])(item.props.children).map(clone);
              return react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](item, {}, children);
            }

            return clone(item);
          });
        } else {
          // Clear firstActiveItem when dropdown menu items was empty
          // Avoid `Unable to find node on an unmounted component`
          // https://github.com/ant-design/ant-design/issues/10774
          _this.firstActiveItem = null;
        } // clear activeKey when inputValue change


        var lastValue = value && value[value.length - 1];

        if (inputValue !== _this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
          activeKeyProps.activeKey = '';
        }

        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
          ref: _this.saveMenuRef,
          style: _this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirst,
          role: "listbox",
          itemIcon: multiple ? menuItemSelectedIcon : null
        }, activeKeyProps, {
          multiple: multiple
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: "".concat(prefixCls, "-menu")
        }), clonedMenuItems);
      }

      return null;
    };

    _this.lastInputValue = props.inputValue;
    _this.saveMenuRef = Object(_util__WEBPACK_IMPORTED_MODULE_7__["saveRef"])(_assertThisInitialized(_this), 'menuRef');
    return _this;
  }

  _createClass(DropdownMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollActiveItemToView();
      this.lastVisible = this.props.visible;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (!nextProps.visible) {
        this.lastVisible = false;
      } // freeze when hide


      return this.props.visible && !nextProps.visible || nextProps.visible || nextProps.inputValue !== this.props.inputValue;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var props = this.props;

      if (!prevProps.visible && props.visible) {
        this.scrollActiveItemToView();
      }

      this.lastVisible = props.visible;
      this.lastInputValue = props.inputValue;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rafInstance && this.rafInstance.cancel) {
        this.rafInstance.cancel();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var renderMenu = this.renderMenu();
      return renderMenu ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
        style: {
          overflow: 'auto',
          transform: 'translateZ(0)'
        },
        id: this.props.ariaId,
        onFocus: this.props.onPopupFocus,
        onMouseDown: _util__WEBPACK_IMPORTED_MODULE_7__["preventDefaultEvent"],
        onScroll: this.props.onPopupScroll
      }, renderMenu) : null;
    }
  }]);

  return DropdownMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = {
  ariaId: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  defaultActiveFirstOption: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  value: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
  dropdownMenuStyle: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  onPopupFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onPopupScroll: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onMenuDeSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onMenuSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  firstActiveValue: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  menuItemSelectedIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]])
};

/***/ }),

/***/ "./node_modules/rc-select/es/OptGroup.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-select/es/OptGroup.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OptGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}



var OptGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(OptGroup, _Component);

  function OptGroup() {
    _classCallCheck(this, OptGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(OptGroup).apply(this, arguments));
  }

  return OptGroup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


OptGroup.isSelectOptGroup = true;

/***/ }),

/***/ "./node_modules/rc-select/es/Option.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-select/es/Option.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Option; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}




var Option =
/*#__PURE__*/
function (_Component) {
  _inherits(Option, _Component);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Option.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]])
};
Option.isSelectOption = true;

/***/ }),

/***/ "./node_modules/rc-select/es/PropTypes.js":
/*!************************************************!*\
  !*** ./node_modules/rc-select/es/PropTypes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}



function propsValueType() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var props = args[0],
      propName = args[1],
      componentName = args[2],
      rest = args.slice(3);
  var basicType = prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]]);
  var labelInValueShape = prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"]({
    key: basicType.isRequired,
    label: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"]
  });

  if (props.labelInValue) {
    var validate = prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](labelInValueShape), labelInValueShape]);
    var error = validate.apply(void 0, [props, propName, componentName].concat(_toConsumableArray(rest)));

    if (error) {
      return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(componentName, "`, ") + "when you set `labelInValue` to `true`, `".concat(propName, "` should in ") + "shape of `{ key: string | number, label?: ReactNode }`.");
    }
  } else if ((props.mode === 'multiple' || props.mode === 'tags' || props.multiple || props.tags) && props[propName] === '') {
    return new Error("Invalid prop `".concat(propName, "` of type `string` supplied to `").concat(componentName, "`, ") + "expected `array` when `multiple` or `tags` is `true`.");
  } else {
    var _validate = prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](basicType), basicType]);

    return _validate.apply(void 0, [props, propName, componentName].concat(_toConsumableArray(rest)));
  }

  return null;
}

var SelectPropTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  defaultActiveFirstOption: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  filterOption: prop_types__WEBPACK_IMPORTED_MODULE_0__["any"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_0__["any"],
  showSearch: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  allowClear: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  tags: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  optionLabelProp: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  optionFilterProp: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  animation: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  choiceTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  open: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  defaultOpen: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  onSearch: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  onPopupScroll: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  onInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_0__["any"],
  onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  labelInValue: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  loading: prop_types__WEBPACK_IMPORTED_MODULE_0__["bool"],
  value: propsValueType,
  defaultValue: propsValueType,
  dropdownStyle: prop_types__WEBPACK_IMPORTED_MODULE_0__["object"],
  maxTagTextLength: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
  maxTagCount: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
  maxTagPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["node"], prop_types__WEBPACK_IMPORTED_MODULE_0__["func"]]),
  tokenSeparators: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]),
  getInputElement: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"],
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]),
  clearIcon: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"],
  inputIcon: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"],
  removeIcon: prop_types__WEBPACK_IMPORTED_MODULE_0__["node"],
  menuItemSelectedIcon: prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["func"], prop_types__WEBPACK_IMPORTED_MODULE_0__["node"]]),
  dropdownRender: prop_types__WEBPACK_IMPORTED_MODULE_0__["func"]
};
/* harmony default export */ __webpack_exports__["default"] = (SelectPropTypes);

/***/ }),

/***/ "./node_modules/rc-select/es/Select.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-select/es/Select.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component-classes */ "./node_modules/component-classes/index.js");
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(component_classes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Option */ "./node_modules/rc-select/es/Option.js");
/* harmony import */ var _PropTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PropTypes */ "./node_modules/rc-select/es/PropTypes.js");
/* harmony import */ var _SelectTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SelectTrigger */ "./node_modules/rc-select/es/SelectTrigger.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util */ "./node_modules/rc-select/es/util.js");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}















var SELECT_EMPTY_VALUE_KEY = 'RC_SELECT_EMPTY_VALUE_KEY';

var noop = function noop() {
  return null;
};

function chaining() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    } // tslint:disable-next-line:prefer-for-of


    for (var i = 0; i < fns.length; i++) {
      if (fns[i] && typeof fns[i] === 'function') {
        fns[i].apply(chaining, args);
      }
    }
  };
}

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));
    _this.inputRef = null;
    _this.inputMirrorRef = null;
    _this.topCtrlRef = null;
    _this.selectTriggerRef = null;
    _this.rootRef = null;
    _this.selectionRef = null;
    _this.dropdownContainer = null;
    _this.blurTimer = null;
    _this.focusTimer = null; // tslint:disable-next-line:variable-name

    _this._focused = false; // tslint:disable-next-line:variable-name

    _this._mouseDown = false; // tslint:disable-next-line:variable-name

    _this._options = []; // tslint:disable-next-line:variable-name

    _this._empty = false;

    _this.onInputChange = function (event) {
      var tokenSeparators = _this.props.tokenSeparators;
      var val = event.target.value;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(_this.props) && tokenSeparators.length && Object(_util__WEBPACK_IMPORTED_MODULE_13__["includesSeparators"])(val, tokenSeparators)) {
        var nextValue = _this.getValueByInput(val);

        if (nextValue !== undefined) {
          _this.fireChange(nextValue);
        }

        _this.setOpenState(false, true);

        _this.setInputValue('', false);

        return;
      }

      _this.setInputValue(val);

      _this.setState({
        open: true
      });

      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isCombobox"])(_this.props)) {
        _this.fireChange([val]);
      }
    };

    _this.onDropdownVisibleChange = function (open) {
      if (open && !_this._focused) {
        _this.clearBlurTime();

        _this.timeoutFocus();

        _this._focused = true;

        _this.updateFocusClassName();
      }

      _this.setOpenState(open);
    }; // combobox ignore


    _this.onKeyDown = function (event) {
      var open = _this.state.open;
      var disabled = _this.props.disabled;

      if (disabled) {
        return;
      }

      var keyCode = event.keyCode;

      if (open && !_this.getInputDOMNode()) {
        _this.onInputKeyDown(event);
      } else if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].ENTER || keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].DOWN) {
        if (!open) {
          _this.setOpenState(true);
        }

        event.preventDefault();
      } else if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].SPACE) {
        // Not block space if popup is shown
        if (!open) {
          _this.setOpenState(true);

          event.preventDefault();
        }
      }
    };

    _this.onInputKeyDown = function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          combobox = _this$props.combobox;

      if (disabled) {
        return;
      }

      var state = _this.state;

      var isRealOpen = _this.getRealOpenState(state); // magic code


      var keyCode = event.keyCode;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(_this.props) && !event.target.value && keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].BACKSPACE) {
        event.preventDefault();
        var value = state.value;

        if (value.length) {
          _this.removeSelected(value[value.length - 1]);
        }

        return;
      }

      if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].DOWN) {
        if (!state.open) {
          _this.openIfHasChildren();

          event.preventDefault();
          event.stopPropagation();
          return;
        }
      } else if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].ENTER && state.open) {
        // Aviod trigger form submit when select item
        // https://github.com/ant-design/ant-design/issues/10861
        // https://github.com/ant-design/ant-design/issues/14544
        if (isRealOpen || !combobox) {
          event.preventDefault();
        }
      } else if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].ESC) {
        if (state.open) {
          _this.setOpenState(false);

          event.preventDefault();
          event.stopPropagation();
        }

        return;
      }

      if (isRealOpen && _this.selectTriggerRef) {
        var menu = _this.selectTriggerRef.getInnerMenu();

        if (menu && menu.onKeyDown(event, _this.handleBackfill)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    _this.onMenuSelect = function (_ref) {
      var item = _ref.item;

      if (!item) {
        return;
      }

      var value = _this.state.value;
      var props = _this.props;
      var selectedValue = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(item);
      var lastValue = value[value.length - 1];

      _this.fireSelect(selectedValue);

      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(props)) {
        if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["findIndexInValueBySingleValue"])(value, selectedValue) !== -1) {
          return;
        }

        value = value.concat([selectedValue]);
      } else {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_13__["isCombobox"])(props) && lastValue !== undefined && lastValue === selectedValue && selectedValue !== _this.state.backfillValue) {
          _this.setOpenState(false, true);

          return;
        }

        value = [selectedValue];

        _this.setOpenState(false, true);
      }

      _this.fireChange(value);

      var inputValue = Object(_util__WEBPACK_IMPORTED_MODULE_13__["isCombobox"])(props) ? Object(_util__WEBPACK_IMPORTED_MODULE_13__["getPropValue"])(item, props.optionLabelProp) : '';

      if (props.autoClearSearchValue) {
        _this.setInputValue(inputValue, false);
      }
    };

    _this.onMenuDeselect = function (_ref2) {
      var item = _ref2.item,
          domEvent = _ref2.domEvent;

      if (domEvent.type === 'keydown' && domEvent.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].ENTER) {
        _this.removeSelected(Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(item));

        return;
      }

      if (domEvent.type === 'click') {
        _this.removeSelected(Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(item));
      }

      var props = _this.props;

      if (props.autoClearSearchValue) {
        _this.setInputValue('', false);
      }
    };

    _this.onArrowClick = function (e) {
      e.stopPropagation();
      e.preventDefault();

      if (!_this.props.disabled) {
        _this.setOpenState(!_this.state.open, !_this.state.open);
      }
    };

    _this.onPlaceholderClick = function () {
      if (_this.getInputDOMNode && _this.getInputDOMNode()) {
        _this.getInputDOMNode().focus();
      }
    };

    _this.onOuterFocus = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.clearBlurTime();

      if (!Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTagsOrCombobox"])(_this.props) && e.target === _this.getInputDOMNode()) {
        return;
      }

      if (_this._focused) {
        return;
      }

      _this._focused = true;

      _this.updateFocusClassName(); // only effect multiple or tag mode


      if (!Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(_this.props) || !_this._mouseDown) {
        _this.timeoutFocus();
      }
    };

    _this.onPopupFocus = function () {
      // fix ie scrollbar, focus element again
      _this.maybeFocus(true, true);
    };

    _this.onOuterBlur = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }

      _this.blurTimer = window.setTimeout(function () {
        _this._focused = false;

        _this.updateFocusClassName();

        var props = _this.props;
        var value = _this.state.value;
        var inputValue = _this.state.inputValue;

        if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isSingleMode"])(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
          var options = _this._options || [];

          if (options.length) {
            var firstOption = Object(_util__WEBPACK_IMPORTED_MODULE_13__["findFirstMenuItem"])(options);

            if (firstOption) {
              value = [Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(firstOption)];

              _this.fireChange(value);
            }
          }
        } else if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(props) && inputValue) {
          if (_this._mouseDown) {
            // need update dropmenu when not blur
            _this.setInputValue('');
          } else {
            // why not use setState?
            // https://github.com/ant-design/ant-design/issues/14262
            _this.state.inputValue = '';

            if (_this.getInputDOMNode && _this.getInputDOMNode()) {
              _this.getInputDOMNode().value = '';
            }
          }

          var tmpValue = _this.getValueByInput(inputValue);

          if (tmpValue !== undefined) {
            value = tmpValue;

            _this.fireChange(value);
          }
        } // if click the rest space of Select in multiple mode


        if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(props) && _this._mouseDown) {
          _this.maybeFocus(true, true);

          _this._mouseDown = false;
          return;
        }

        _this.setOpenState(false);

        if (props.onBlur) {
          props.onBlur(_this.getVLForOnChange(value));
        }
      }, 10);
    };

    _this.onClearSelection = function (event) {
      var props = _this.props;
      var state = _this.state;

      if (props.disabled) {
        return;
      }

      var inputValue = state.inputValue;
      var value = state.value;
      event.stopPropagation();

      if (inputValue || value.length) {
        if (value.length) {
          _this.fireChange([]);
        }

        _this.setOpenState(false, true);

        if (inputValue) {
          _this.setInputValue('');
        }
      }
    };

    _this.onChoiceAnimationLeave = function () {
      _this.forcePopupAlign();
    };

    _this.getOptionInfoBySingleValue = function (value, optionsInfo) {
      var info;
      optionsInfo = optionsInfo || _this.state.optionsInfo;

      if (optionsInfo[Object(_util__WEBPACK_IMPORTED_MODULE_13__["getMapKey"])(value)]) {
        info = optionsInfo[Object(_util__WEBPACK_IMPORTED_MODULE_13__["getMapKey"])(value)];
      }

      if (info) {
        return info;
      }

      var defaultLabel = value;

      if (_this.props.labelInValue) {
        var label = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getLabelFromPropsValue"])(_this.props.value, value);

        if (label !== undefined) {
          defaultLabel = label;
        }
      }

      var defaultInfo = {
        option: react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Option__WEBPACK_IMPORTED_MODULE_10__["default"], {
          value: value,
          key: value
        }, value),
        value: value,
        label: defaultLabel
      };
      return defaultInfo;
    };

    _this.getOptionBySingleValue = function (value) {
      var _this$getOptionInfoBy = _this.getOptionInfoBySingleValue(value),
          option = _this$getOptionInfoBy.option;

      return option;
    };

    _this.getOptionsBySingleValue = function (values) {
      return values.map(function (value) {
        return _this.getOptionBySingleValue(value);
      });
    };

    _this.getValueByLabel = function (label) {
      if (label === undefined) {
        return null;
      }

      var value = null;
      Object.keys(_this.state.optionsInfo).forEach(function (key) {
        var info = _this.state.optionsInfo[key];
        var disabled = info.disabled;

        if (disabled) {
          return;
        }

        var oldLable = Object(_util__WEBPACK_IMPORTED_MODULE_13__["toArray"])(info.label);

        if (oldLable && oldLable.join('') === label) {
          value = info.value;
        }
      });
      return value;
    };

    _this.getVLBySingleValue = function (value) {
      if (_this.props.labelInValue) {
        return {
          key: value,
          label: _this.getLabelBySingleValue(value)
        };
      }

      return value;
    };

    _this.getVLForOnChange = function (vlsS) {
      var vls = vlsS;

      if (vls !== undefined) {
        if (!_this.props.labelInValue) {
          vls = vls.map(function (v) {
            return v;
          });
        } else {
          vls = vls.map(function (vl) {
            return {
              key: vl,
              label: _this.getLabelBySingleValue(vl)
            };
          });
        }

        return Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(_this.props) ? vls : vls[0];
      }

      return vls;
    };

    _this.getLabelBySingleValue = function (value, optionsInfo) {
      var _this$getOptionInfoBy2 = _this.getOptionInfoBySingleValue(value, optionsInfo),
          label = _this$getOptionInfoBy2.label;

      return label;
    };

    _this.getDropdownContainer = function () {
      if (!_this.dropdownContainer) {
        _this.dropdownContainer = document.createElement('div');
        document.body.appendChild(_this.dropdownContainer);
      }

      return _this.dropdownContainer;
    };

    _this.getPlaceholderElement = function () {
      var props = _this.props;
      var state = _this.state;
      var hidden = false;

      if (state.inputValue) {
        hidden = true;
      }

      var value = state.value;

      if (value.length) {
        hidden = true;
      }

      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isCombobox"])(props) && value.length === 1 && state.value && !state.value[0]) {
        hidden = false;
      }

      var placeholder = props.placeholder;

      if (placeholder) {
        return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", _extends({
          onMouseDown: _util__WEBPACK_IMPORTED_MODULE_13__["preventDefaultEvent"],
          style: _extends({
            display: hidden ? 'none' : 'block'
          }, _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_STYLE"])
        }, _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_ATTRIBUTE"], {
          onClick: _this.onPlaceholderClick,
          className: "".concat(props.prefixCls, "-selection__placeholder")
        }), placeholder);
      }

      return null;
    };

    _this.getInputElement = function () {
      var props = _this.props;
      var defaultInput = react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("input", {
        id: props.id,
        autoComplete: "off"
      }); // tslint:disable-next-line:typedef-whitespace

      var inputElement = props.getInputElement ? props.getInputElement() : defaultInput;
      var inputCls = classnames__WEBPACK_IMPORTED_MODULE_0___default()(inputElement.props.className, _defineProperty({}, "".concat(props.prefixCls, "-search__field"), true)); // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
      // Add space to the end of the inputValue as the width measurement tolerance

      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: "".concat(props.prefixCls, "-search__field__wrap")
      }, react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](inputElement, {
        ref: _this.saveInputRef,
        onChange: _this.onInputChange,
        onKeyDown: chaining(_this.onInputKeyDown, inputElement.props.onKeyDown, _this.props.onInputKeyDown),
        value: _this.state.inputValue,
        disabled: props.disabled,
        className: inputCls
      }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
        ref: _this.saveInputMirrorRef,
        className: "".concat(props.prefixCls, "-search__field__mirror")
      }, _this.state.inputValue, "\xA0"));
    };

    _this.getInputDOMNode = function () {
      return _this.topCtrlRef ? _this.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : _this.inputRef;
    };

    _this.getInputMirrorDOMNode = function () {
      return _this.inputMirrorRef;
    };

    _this.getPopupDOMNode = function () {
      if (_this.selectTriggerRef) {
        return _this.selectTriggerRef.getPopupDOMNode();
      }
    };

    _this.getPopupMenuComponent = function () {
      if (_this.selectTriggerRef) {
        return _this.selectTriggerRef.getInnerMenu();
      }
    };

    _this.setOpenState = function (open, needFocus) {
      var props = _this.props;
      var state = _this.state;

      if (state.open === open) {
        _this.maybeFocus(open, !!needFocus);

        return;
      }

      if (_this.props.onDropdownVisibleChange) {
        _this.props.onDropdownVisibleChange(open);
      }

      var nextState = {
        open: open,
        backfillValue: ''
      }; // clear search input value when open is false in singleMode.

      if (!open && Object(_util__WEBPACK_IMPORTED_MODULE_13__["isSingleMode"])(props) && props.showSearch) {
        _this.setInputValue('', false);
      }

      if (!open) {
        _this.maybeFocus(open, !!needFocus);
      }

      _this.setState(_extends({
        open: open
      }, nextState), function () {
        if (open) {
          _this.maybeFocus(open, !!needFocus);
        }
      });
    };

    _this.setInputValue = function (inputValue) {
      var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (inputValue !== _this.state.inputValue) {
        _this.setState({
          inputValue: inputValue
        }, _this.forcePopupAlign);

        if (fireSearch && _this.props.onSearch) {
          _this.props.onSearch(inputValue);
        }
      }
    };

    _this.getValueByInput = function (str) {
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          tokenSeparators = _this$props2.tokenSeparators;
      var nextValue = _this.state.value;
      var hasNewValue = false;
      Object(_util__WEBPACK_IMPORTED_MODULE_13__["splitBySeparators"])(str, tokenSeparators).forEach(function (label) {
        var selectedValue = [label];

        if (multiple) {
          var value = _this.getValueByLabel(label);

          if (value && Object(_util__WEBPACK_IMPORTED_MODULE_13__["findIndexInValueBySingleValue"])(nextValue, value) === -1) {
            nextValue = nextValue.concat(value);
            hasNewValue = true;

            _this.fireSelect(value);
          }
        } else if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["findIndexInValueBySingleValue"])(nextValue, label) === -1) {
          nextValue = nextValue.concat(selectedValue);
          hasNewValue = true;

          _this.fireSelect(label);
        }
      });
      return hasNewValue ? nextValue : undefined;
    };

    _this.getRealOpenState = function (state) {
      // tslint:disable-next-line:variable-name
      var _open = _this.props.open;

      if (typeof _open === 'boolean') {
        return _open;
      }

      var open = (state || _this.state).open;
      var options = _this._options || [];

      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTagsOrCombobox"])(_this.props) || !_this.props.showSearch) {
        if (open && !options.length) {
          open = false;
        }
      }

      return open;
    };

    _this.markMouseDown = function () {
      _this._mouseDown = true;
    };

    _this.markMouseLeave = function () {
      _this._mouseDown = false;
    };

    _this.handleBackfill = function (item) {
      if (!_this.props.backfill || !(Object(_util__WEBPACK_IMPORTED_MODULE_13__["isSingleMode"])(_this.props) || Object(_util__WEBPACK_IMPORTED_MODULE_13__["isCombobox"])(_this.props))) {
        return;
      }

      var key = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(item);

      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isCombobox"])(_this.props)) {
        _this.setInputValue(key, false);
      }

      _this.setState({
        value: [key],
        backfillValue: key
      });
    };

    _this.filterOption = function (input, child) {
      var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util__WEBPACK_IMPORTED_MODULE_13__["defaultFilterFn"];
      var value = _this.state.value;
      var lastValue = value[value.length - 1];

      if (!input || lastValue && lastValue === _this.state.backfillValue) {
        return true;
      }

      var filterFn = _this.props.filterOption;

      if ('filterOption' in _this.props) {
        if (filterFn === true) {
          filterFn = defaultFilter.bind(_assertThisInitialized(_this));
        }
      } else {
        filterFn = defaultFilter.bind(_assertThisInitialized(_this));
      }

      if (!filterFn) {
        return true;
      } else if (typeof filterFn === 'function') {
        return filterFn.call(_assertThisInitialized(_this), input, child);
      } else if (child.props.disabled) {
        return false;
      }

      return true;
    };

    _this.timeoutFocus = function () {
      if (_this.focusTimer) {
        _this.clearFocusTime();
      }

      _this.focusTimer = window.setTimeout(function () {
        if (_this.props.onFocus) {
          _this.props.onFocus();
        }
      }, 10);
    };

    _this.clearFocusTime = function () {
      if (_this.focusTimer) {
        clearTimeout(_this.focusTimer);
        _this.focusTimer = null;
      }
    };

    _this.clearBlurTime = function () {
      if (_this.blurTimer) {
        clearTimeout(_this.blurTimer);
        _this.blurTimer = null;
      }
    };

    _this.updateFocusClassName = function () {
      var rootRef = _this.rootRef;
      var props = _this.props; // avoid setState and its side effect

      if (_this._focused) {
        component_classes__WEBPACK_IMPORTED_MODULE_1___default()(rootRef).add("".concat(props.prefixCls, "-focused"));
      } else {
        component_classes__WEBPACK_IMPORTED_MODULE_1___default()(rootRef).remove("".concat(props.prefixCls, "-focused"));
      }
    };

    _this.maybeFocus = function (open, needFocus) {
      if (needFocus || open) {
        var input = _this.getInputDOMNode();

        var _document = document,
            activeElement = _document.activeElement;

        if (input && (open || Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTagsOrCombobox"])(_this.props))) {
          if (activeElement !== input) {
            input.focus();
            _this._focused = true;
          }
        } else if (activeElement !== _this.selectionRef && _this.selectionRef) {
          _this.selectionRef.focus();

          _this._focused = true;
        }
      }
    };

    _this.removeSelected = function (selectedKey, e) {
      var props = _this.props;

      if (props.disabled || _this.isChildDisabled(selectedKey)) {
        return;
      } // Do not trigger Trigger popup


      if (e && e.stopPropagation) {
        e.stopPropagation();
      }

      var oldValue = _this.state.value;
      var value = oldValue.filter(function (singleValue) {
        return singleValue !== selectedKey;
      });
      var canMultiple = Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(props);

      if (canMultiple) {
        var event = selectedKey;

        if (props.labelInValue) {
          event = {
            key: selectedKey,
            label: _this.getLabelBySingleValue(selectedKey)
          };
        }

        if (props.onDeselect) {
          props.onDeselect(event, _this.getOptionBySingleValue(selectedKey));
        }
      }

      _this.fireChange(value);
    };

    _this.openIfHasChildren = function () {
      var props = _this.props;

      if (react__WEBPACK_IMPORTED_MODULE_6__["Children"].count(props.children) || Object(_util__WEBPACK_IMPORTED_MODULE_13__["isSingleMode"])(props)) {
        _this.setOpenState(true);
      }
    };

    _this.fireSelect = function (value) {
      if (_this.props.onSelect) {
        _this.props.onSelect(_this.getVLBySingleValue(value), _this.getOptionBySingleValue(value));
      }
    };

    _this.fireChange = function (value) {
      var props = _this.props;

      if (!('value' in props)) {
        _this.setState({
          value: value
        }, _this.forcePopupAlign);
      }

      var vls = _this.getVLForOnChange(value);

      var options = _this.getOptionsBySingleValue(value);

      if (props.onChange) {
        props.onChange(vls, Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(_this.props) ? options : options[0]);
      }
    };

    _this.isChildDisabled = function (key) {
      return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.props.children).some(function (child) {
        var childValue = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(child);
        return childValue === key && child.props && child.props.disabled;
      });
    };

    _this.forcePopupAlign = function () {
      if (!_this.state.open) {
        return;
      }

      if (_this.selectTriggerRef && _this.selectTriggerRef.triggerRef) {
        _this.selectTriggerRef.triggerRef.forcePopupAlign();
      }
    };

    _this.renderFilterOptions = function () {
      var inputValue = _this.state.inputValue;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          tags = _this$props3.tags,
          notFoundContent = _this$props3.notFoundContent;
      var menuItems = [];
      var childrenKeys = [];
      var empty = false;

      var options = _this.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);

      if (tags) {
        // tags value must be string
        var value = _this.state.value;
        value = value.filter(function (singleValue) {
          return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
        }); // sort by length

        value.sort(function (val1, val2) {
          return val1.length - val2.length;
        });
        value.forEach(function (singleValue) {
          var key = singleValue;
          var menuItem = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_3__["Item"], {
            style: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_STYLE"],
            role: "option",
            attribute: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_ATTRIBUTE"],
            value: key,
            key: key
          }, key);
          options.push(menuItem);
          menuItems.push(menuItem);
        }); // ref: https://github.com/ant-design/ant-design/issues/14090

        if (inputValue && menuItems.every(function (option) {
          return Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(option) !== inputValue;
        })) {
          options.unshift(react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_3__["Item"], {
            style: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_STYLE"],
            role: "option",
            attribute: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_ATTRIBUTE"],
            value: inputValue,
            key: inputValue
          }, inputValue));
        }
      }

      if (!options.length && notFoundContent) {
        empty = true;
        options = [react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_3__["Item"], {
          style: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_STYLE"],
          attribute: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_ATTRIBUTE"],
          disabled: true,
          role: "option",
          value: "NOT_FOUND",
          key: "NOT_FOUND"
        }, notFoundContent)];
      }

      return {
        empty: empty,
        options: options
      };
    };

    _this.renderFilterOptionsFromChildren = function (children, childrenKeys, menuItems) {
      var sel = [];
      var props = _this.props;
      var inputValue = _this.state.inputValue;
      var tags = props.tags;
      react__WEBPACK_IMPORTED_MODULE_6__["Children"].forEach(children, function (child) {
        if (!child) {
          return;
        }

        var type = child.type;

        if (type.isSelectOptGroup) {
          var label = child.props.label;
          var key = child.key;

          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          } // Match option group label


          if (inputValue && _this.filterOption(inputValue, child)) {
            var innerItems = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_4__["default"])(child.props.children).map(function (subChild) {
              var childValueSub = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(subChild) || subChild.key;
              return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_3__["Item"], _extends({
                key: childValueSub,
                value: childValueSub
              }, subChild.props));
            });
            sel.push(react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_3__["ItemGroup"], {
              key: key,
              title: label
            }, innerItems)); // Not match
          } else {
            var _innerItems = _this.renderFilterOptionsFromChildren(child.props.children, childrenKeys, menuItems);

            if (_innerItems.length) {
              sel.push(react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_3__["ItemGroup"], {
                key: key,
                title: label
              }, _innerItems));
            }
          }

          return;
        }

        warning__WEBPACK_IMPORTED_MODULE_9___default()(type.isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + "instead of `".concat(type.name || type.displayName || child.type, "`."));
        var childValue = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(child);
        Object(_util__WEBPACK_IMPORTED_MODULE_13__["validateOptionValue"])(childValue, _this.props);

        if (_this.filterOption(inputValue, child)) {
          var menuItem = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_3__["Item"], _extends({
            style: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_STYLE"],
            attribute: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_ATTRIBUTE"],
            value: childValue,
            key: childValue,
            role: "option"
          }, child.props));
          sel.push(menuItem);
          menuItems.push(menuItem);
        }

        if (tags) {
          childrenKeys.push(childValue);
        }
      });
      return sel;
    };

    _this.renderTopControlNode = function () {
      var _this$state = _this.state,
          open = _this$state.open,
          inputValue = _this$state.inputValue;
      var value = _this.state.value;
      var props = _this.props;
      var choiceTransitionName = props.choiceTransitionName,
          prefixCls = props.prefixCls,
          maxTagTextLength = props.maxTagTextLength,
          maxTagCount = props.maxTagCount,
          showSearch = props.showSearch,
          removeIcon = props.removeIcon;
      var maxTagPlaceholder = props.maxTagPlaceholder;
      var className = "".concat(prefixCls, "-selection__rendered"); // search input is inside topControlNode in single, multiple & combobox. 2016/04/13

      var innerNode = null;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isSingleMode"])(props)) {
        var selectedValue = null;

        if (value.length) {
          var showSelectedValue = false;
          var opacity = 1;

          if (!showSearch) {
            showSelectedValue = true;
          } else if (open) {
            showSelectedValue = !inputValue;

            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }

          var singleValue = value[0];

          var _this$getOptionInfoBy3 = _this.getOptionInfoBySingleValue(singleValue),
              label = _this$getOptionInfoBy3.label,
              title = _this$getOptionInfoBy3.title;

          selectedValue = react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
            key: "value",
            className: "".concat(prefixCls, "-selection-selected-value"),
            title: Object(_util__WEBPACK_IMPORTED_MODULE_13__["toTitle"])(title || label),
            style: {
              display: showSelectedValue ? 'block' : 'none',
              opacity: opacity
            }
          }, label);
        }

        if (!showSearch) {
          innerNode = [selectedValue];
        } else {
          innerNode = [selectedValue, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
            className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline"),
            key: "input",
            style: {
              display: open ? 'block' : 'none'
            }
          }, _this.getInputElement())];
        }
      } else {
        var selectedValueNodes = [];
        var limitedCountValue = value;
        var maxTagPlaceholderEl;

        if (maxTagCount !== undefined && value.length > maxTagCount) {
          limitedCountValue = limitedCountValue.slice(0, maxTagCount);

          var omittedValues = _this.getVLForOnChange(value.slice(maxTagCount, value.length));

          var content = "+ ".concat(value.length - maxTagCount, " ...");

          if (maxTagPlaceholder) {
            content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
          }

          maxTagPlaceholderEl = react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("li", _extends({
            style: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_STYLE"]
          }, _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_ATTRIBUTE"], {
            role: "presentation",
            onMouseDown: _util__WEBPACK_IMPORTED_MODULE_13__["preventDefaultEvent"],
            className: "".concat(prefixCls, "-selection__choice ").concat(prefixCls, "-selection__choice__disabled"),
            key: "maxTagPlaceholder",
            title: Object(_util__WEBPACK_IMPORTED_MODULE_13__["toTitle"])(content)
          }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
            className: "".concat(prefixCls, "-selection__choice__content")
          }, content));
        }

        if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(props)) {
          selectedValueNodes = limitedCountValue.map(function (singleValue) {
            var info = _this.getOptionInfoBySingleValue(singleValue);

            var content = info.label;
            var title = info.title || content;

            if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
              content = "".concat(content.slice(0, maxTagTextLength), "...");
            }

            var disabled = _this.isChildDisabled(singleValue);

            var choiceClassName = disabled ? "".concat(prefixCls, "-selection__choice ").concat(prefixCls, "-selection__choice__disabled") : "".concat(prefixCls, "-selection__choice");
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("li", _extends({
              style: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_STYLE"]
            }, _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_ATTRIBUTE"], {
              onMouseDown: _util__WEBPACK_IMPORTED_MODULE_13__["preventDefaultEvent"],
              className: choiceClassName,
              role: "presentation",
              key: singleValue || SELECT_EMPTY_VALUE_KEY,
              title: Object(_util__WEBPACK_IMPORTED_MODULE_13__["toTitle"])(title)
            }), react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
              className: "".concat(prefixCls, "-selection__choice__content")
            }, content), disabled ? null : react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
              onClick: function onClick(event) {
                _this.removeSelected(singleValue, event);
              },
              className: "".concat(prefixCls, "-selection__choice__remove")
            }, removeIcon || react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("i", {
              className: "".concat(prefixCls, "-selection__choice__remove-icon")
            }, "\xD7")));
          });
        }

        if (maxTagPlaceholderEl) {
          selectedValueNodes.push(maxTagPlaceholderEl);
        }

        selectedValueNodes.push(react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("li", {
          className: "".concat(prefixCls, "-search ").concat(prefixCls, "-search--inline"),
          key: "__input"
        }, _this.getInputElement()));

        if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(props) && choiceTransitionName) {
          innerNode = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
            onLeave: _this.onChoiceAnimationLeave,
            component: "ul",
            transitionName: choiceTransitionName
          }, selectedValueNodes);
        } else {
          innerNode = react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("ul", null, selectedValueNodes);
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        className: className,
        ref: _this.saveTopCtrlRef
      }, _this.getPlaceholderElement(), innerNode);
    };

    var optionsInfo = Select.getOptionsInfoFromProps(props);

    if (props.tags && typeof props.filterOption !== 'function') {
      var isDisabledExist = Object.keys(optionsInfo).some(function (key) {
        return optionsInfo[key].disabled;
      });
      warning__WEBPACK_IMPORTED_MODULE_9___default()(!isDisabledExist, 'Please avoid setting option to disabled in tags mode since user can always type text as tag.');
    }

    _this.state = {
      value: Select.getValueFromProps(props, true),
      inputValue: props.combobox ? Select.getInputValueForCombobox(props, optionsInfo, true) : '',
      open: props.defaultOpen,
      optionsInfo: optionsInfo,
      backfillValue: '',
      // a flag for aviod redundant getOptionsInfoFromProps call
      skipBuildOptionsInfo: true,
      ariaId: ''
    };
    _this.saveInputRef = Object(_util__WEBPACK_IMPORTED_MODULE_13__["saveRef"])(_assertThisInitialized(_this), 'inputRef');
    _this.saveInputMirrorRef = Object(_util__WEBPACK_IMPORTED_MODULE_13__["saveRef"])(_assertThisInitialized(_this), 'inputMirrorRef');
    _this.saveTopCtrlRef = Object(_util__WEBPACK_IMPORTED_MODULE_13__["saveRef"])(_assertThisInitialized(_this), 'topCtrlRef');
    _this.saveSelectTriggerRef = Object(_util__WEBPACK_IMPORTED_MODULE_13__["saveRef"])(_assertThisInitialized(_this), 'selectTriggerRef');
    _this.saveRootRef = Object(_util__WEBPACK_IMPORTED_MODULE_13__["saveRef"])(_assertThisInitialized(_this), 'rootRef');
    _this.saveSelectionRef = Object(_util__WEBPACK_IMPORTED_MODULE_13__["saveRef"])(_assertThisInitialized(_this), 'selectionRef');
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // when defaultOpen is true, we should auto focus search input
      // https://github.com/ant-design/ant-design/issues/14254
      if (this.props.autoFocus || this.state.open) {
        this.focus();
      }

      this.setState({
        ariaId: Object(_util__WEBPACK_IMPORTED_MODULE_13__["generateUUID"])()
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(this.props)) {
        var inputNode = this.getInputDOMNode();
        var mirrorNode = this.getInputMirrorDOMNode();

        if (inputNode && inputNode.value && mirrorNode) {
          inputNode.style.width = '';
          inputNode.style.width = "".concat(mirrorNode.clientWidth, "px");
        } else if (inputNode) {
          inputNode.style.width = '';
        }
      }

      this.forcePopupAlign();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearFocusTime();
      this.clearBlurTime();

      if (this.dropdownContainer) {
        react_dom__WEBPACK_IMPORTED_MODULE_7__["unmountComponentAtNode"](this.dropdownContainer);
        document.body.removeChild(this.dropdownContainer);
        this.dropdownContainer = null;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isSingleMode"])(this.props) && this.selectionRef) {
        this.selectionRef.focus();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isSingleMode"])(this.props) && this.selectionRef) {
        this.selectionRef.blur();
      } else if (this.getInputDOMNode()) {
        this.getInputDOMNode().blur();
      }
    }
  }, {
    key: "renderArrow",
    value: function renderArrow(multiple) {
      // showArrow : Set to true if not multiple by default but keep set value.
      var _this$props4 = this.props,
          _this$props4$showArro = _this$props4.showArrow,
          showArrow = _this$props4$showArro === void 0 ? !multiple : _this$props4$showArro,
          loading = _this$props4.loading,
          inputIcon = _this$props4.inputIcon,
          prefixCls = _this$props4.prefixCls;

      if (!showArrow && !loading) {
        return null;
      } // if loading  have loading icon


      var defaultIcon = loading ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("i", {
        className: "".concat(prefixCls, "-arrow-loading")
      }) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("i", {
        className: "".concat(prefixCls, "-arrow-icon")
      });
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", _extends({
        key: "arrow",
        className: "".concat(prefixCls, "-arrow"),
        style: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_STYLE"]
      }, _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_ATTRIBUTE"], {
        onClick: this.onArrowClick
      }), inputIcon || defaultIcon);
    }
  }, {
    key: "renderClear",
    value: function renderClear() {
      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          allowClear = _this$props5.allowClear,
          clearIcon = _this$props5.clearIcon;
      var inputValue = this.state.inputValue;
      var value = this.state.value;
      var clear = react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", _extends({
        key: "clear",
        className: "".concat(prefixCls, "-selection__clear"),
        onMouseDown: _util__WEBPACK_IMPORTED_MODULE_13__["preventDefaultEvent"],
        style: _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_STYLE"]
      }, _util__WEBPACK_IMPORTED_MODULE_13__["UNSELECTABLE_ATTRIBUTE"], {
        onClick: this.onClearSelection
      }), clearIcon || react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("i", {
        className: "".concat(prefixCls, "-selection__clear-icon")
      }, "\xD7"));

      if (!allowClear) {
        return null;
      }

      if (Object(_util__WEBPACK_IMPORTED_MODULE_13__["isCombobox"])(this.props)) {
        if (inputValue) {
          return clear;
        }

        return null;
      }

      if (inputValue || value.length) {
        return clear;
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _rootCls;

      var props = this.props;
      var multiple = Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTags"])(props); // Default set showArrow to true if not set (not set directly in defaultProps to handle multiple case)

      var _props$showArrow = props.showArrow,
          showArrow = _props$showArrow === void 0 ? true : _props$showArrow;
      var state = this.state;
      var className = props.className,
          disabled = props.disabled,
          prefixCls = props.prefixCls,
          loading = props.loading;
      var ctrlNode = this.renderTopControlNode();
      var _this$state2 = this.state,
          open = _this$state2.open,
          ariaId = _this$state2.ariaId;

      if (open) {
        var filterOptions = this.renderFilterOptions();
        this._empty = filterOptions.empty;
        this._options = filterOptions.options;
      }

      var realOpen = this.getRealOpenState();
      var empty = this._empty;
      var options = this._options || [];
      var dataOrAriaAttributeProps = {};
      Object.keys(props).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(props, key) && (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')) {
          dataOrAriaAttributeProps[key] = props[key];
        }
      }); // for (const key in props) {
      //   if (
      //     Object.prototype.hasOwnProperty.call(props, key) &&
      //     (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role')
      //   ) {
      //     dataOrAriaAttributeProps[key] = props[key];
      //   }
      // }

      var extraSelectionProps = _extends({}, dataOrAriaAttributeProps);

      if (!Object(_util__WEBPACK_IMPORTED_MODULE_13__["isMultipleOrTagsOrCombobox"])(props)) {
        extraSelectionProps = _extends({}, extraSelectionProps, {
          onKeyDown: this.onKeyDown,
          tabIndex: props.disabled ? -1 : props.tabIndex
        });
      }

      var rootCls = (_rootCls = {}, _defineProperty(_rootCls, className, !!className), _defineProperty(_rootCls, prefixCls, 1), _defineProperty(_rootCls, "".concat(prefixCls, "-open"), open), _defineProperty(_rootCls, "".concat(prefixCls, "-focused"), open || !!this._focused), _defineProperty(_rootCls, "".concat(prefixCls, "-combobox"), Object(_util__WEBPACK_IMPORTED_MODULE_13__["isCombobox"])(props)), _defineProperty(_rootCls, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_rootCls, "".concat(prefixCls, "-enabled"), !disabled), _defineProperty(_rootCls, "".concat(prefixCls, "-allow-clear"), !!props.allowClear), _defineProperty(_rootCls, "".concat(prefixCls, "-no-arrow"), !showArrow), _defineProperty(_rootCls, "".concat(prefixCls, "-loading"), !!loading), _rootCls);
      return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_SelectTrigger__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onPopupFocus: this.onPopupFocus,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        prefixCls: props.prefixCls,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        empty: empty,
        multiple: multiple,
        disabled: disabled,
        visible: realOpen,
        inputValue: state.inputValue,
        value: state.value,
        backfillValue: state.backfillValue,
        firstActiveValue: props.firstActiveValue,
        onDropdownVisibleChange: this.onDropdownVisibleChange,
        getPopupContainer: props.getPopupContainer,
        onMenuSelect: this.onMenuSelect,
        onMenuDeselect: this.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        showAction: props.showAction,
        ref: this.saveSelectTriggerRef,
        menuItemSelectedIcon: props.menuItemSelectedIcon,
        dropdownRender: props.dropdownRender,
        ariaId: ariaId
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
        id: props.id,
        style: props.style,
        ref: this.saveRootRef,
        onBlur: this.onOuterBlur,
        onFocus: this.onOuterFocus,
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(rootCls),
        onMouseDown: this.markMouseDown,
        onMouseUp: this.markMouseLeave,
        onMouseOut: this.markMouseLeave
      }, react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", _extends({
        ref: this.saveSelectionRef,
        key: "selection",
        className: "".concat(prefixCls, "-selection\n            ").concat(prefixCls, "-selection--").concat(multiple ? 'multiple' : 'single'),
        role: "combobox",
        "aria-autocomplete": "list",
        "aria-haspopup": "true",
        "aria-controls": ariaId,
        "aria-expanded": realOpen
      }, extraSelectionProps), ctrlNode, this.renderClear(), this.renderArrow(!!multiple))));
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Select.propTypes = _PropTypes__WEBPACK_IMPORTED_MODULE_11__["default"];
Select.defaultProps = {
  prefixCls: 'rc-select',
  defaultOpen: false,
  labelInValue: false,
  defaultActiveFirstOption: true,
  showSearch: true,
  allowClear: false,
  placeholder: '',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onSelect: noop,
  onSearch: noop,
  onDeselect: noop,
  onInputKeyDown: noop,
  dropdownMatchSelectWidth: true,
  dropdownStyle: {},
  dropdownMenuStyle: {},
  optionFilterProp: 'value',
  optionLabelProp: 'value',
  notFoundContent: 'Not Found',
  backfill: false,
  showAction: ['click'],
  tokenSeparators: [],
  autoClearSearchValue: true,
  tabIndex: 0,
  dropdownRender: function dropdownRender(menu) {
    return menu;
  }
};

Select.getDerivedStateFromProps = function (nextProps, prevState) {
  var optionsInfo = prevState.skipBuildOptionsInfo ? prevState.optionsInfo : Select.getOptionsInfoFromProps(nextProps, prevState);
  var newState = {
    optionsInfo: optionsInfo,
    skipBuildOptionsInfo: false
  };

  if ('open' in nextProps) {
    newState.open = nextProps.open;
  }

  if ('value' in nextProps) {
    var value = Select.getValueFromProps(nextProps);
    newState.value = value;

    if (nextProps.combobox) {
      newState.inputValue = Select.getInputValueForCombobox(nextProps, optionsInfo);
    }
  }

  return newState;
};

Select.getOptionsFromChildren = function (children) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  react__WEBPACK_IMPORTED_MODULE_6__["Children"].forEach(children, function (child) {
    if (!child) {
      return;
    }

    var type = child.type;

    if (type.isSelectOptGroup) {
      Select.getOptionsFromChildren(child.props.children, options);
    } else {
      options.push(child);
    }
  });
  return options;
};

Select.getInputValueForCombobox = function (props, optionsInfo, useDefaultValue) {
  var value = [];

  if ('value' in props && !useDefaultValue) {
    value = Object(_util__WEBPACK_IMPORTED_MODULE_13__["toArray"])(props.value);
  }

  if ('defaultValue' in props && useDefaultValue) {
    value = Object(_util__WEBPACK_IMPORTED_MODULE_13__["toArray"])(props.defaultValue);
  }

  if (value.length) {
    value = value[0];
  } else {
    return '';
  }

  var label = value;

  if (props.labelInValue) {
    label = value.label;
  } else if (optionsInfo[Object(_util__WEBPACK_IMPORTED_MODULE_13__["getMapKey"])(value)]) {
    label = optionsInfo[Object(_util__WEBPACK_IMPORTED_MODULE_13__["getMapKey"])(value)].label;
  }

  if (label === undefined) {
    label = '';
  }

  return label;
};

Select.getLabelFromOption = function (props, option) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_13__["getPropValue"])(option, props.optionLabelProp);
};

Select.getOptionsInfoFromProps = function (props, preState) {
  var options = Select.getOptionsFromChildren(props.children);
  var optionsInfo = {};
  options.forEach(function (option) {
    var singleValue = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getValuePropValue"])(option);
    optionsInfo[Object(_util__WEBPACK_IMPORTED_MODULE_13__["getMapKey"])(singleValue)] = {
      option: option,
      value: singleValue,
      label: Select.getLabelFromOption(props, option),
      title: option.props.title,
      disabled: option.props.disabled
    };
  });

  if (preState) {
    // keep option info in pre state value.
    var oldOptionsInfo = preState.optionsInfo;
    var value = preState.value;

    if (value) {
      value.forEach(function (v) {
        var key = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getMapKey"])(v);

        if (!optionsInfo[key] && oldOptionsInfo[key] !== undefined) {
          optionsInfo[key] = oldOptionsInfo[key];
        }
      });
    }
  }

  return optionsInfo;
};

Select.getValueFromProps = function (props, useDefaultValue) {
  var value = [];

  if ('value' in props && !useDefaultValue) {
    value = Object(_util__WEBPACK_IMPORTED_MODULE_13__["toArray"])(props.value);
  }

  if ('defaultValue' in props && useDefaultValue) {
    value = Object(_util__WEBPACK_IMPORTED_MODULE_13__["toArray"])(props.defaultValue);
  }

  if (props.labelInValue) {
    value = value.map(function (v) {
      return v.key;
    });
  }

  return value;
};

Select.displayName = 'Select';
Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__["polyfill"])(Select);
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./node_modules/rc-select/es/SelectTrigger.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-select/es/SelectTrigger.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectTrigger; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownMenu */ "./node_modules/rc-select/es/DropdownMenu.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./node_modules/rc-select/es/util.js");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};








rc_trigger__WEBPACK_IMPORTED_MODULE_2__["default"].displayName = 'Trigger';
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectTrigger, _React$Component);

  function SelectTrigger(props) {
    var _this;

    _classCallCheck(this, SelectTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectTrigger).call(this, props));
    _this.dropdownMenuRef = null;

    _this.setDropdownWidth = function () {
      var dom = react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"](_assertThisInitialized(_this));
      var width = dom.offsetWidth;

      if (width !== _this.state.dropdownWidth) {
        _this.setState({
          dropdownWidth: width
        });
      }
    };

    _this.getInnerMenu = function () {
      return _this.dropdownMenuRef && _this.dropdownMenuRef.menuRef;
    };

    _this.getPopupDOMNode = function () {
      return _this.triggerRef.getPopupDomNode();
    };

    _this.getDropdownElement = function (newProps) {
      var props = _this.props;
      var dropdownRender = props.dropdownRender,
          ariaId = props.ariaId;
      var menuNode = react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_DropdownMenu__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
        ref: _this.saveDropdownMenuRef
      }, newProps, {
        ariaId: ariaId,
        prefixCls: _this.getDropdownPrefixCls(),
        onMenuSelect: props.onMenuSelect,
        onMenuDeselect: props.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        value: props.value,
        backfillValue: props.backfillValue,
        firstActiveValue: props.firstActiveValue,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        menuItemSelectedIcon: props.menuItemSelectedIcon
      }));

      if (dropdownRender) {
        return dropdownRender(menuNode, props);
      }

      return null;
    };

    _this.getDropdownTransitionName = function () {
      var props = _this.props;
      var transitionName = props.transitionName;

      if (!transitionName && props.animation) {
        transitionName = "".concat(_this.getDropdownPrefixCls(), "-").concat(props.animation);
      }

      return transitionName;
    };

    _this.getDropdownPrefixCls = function () {
      return "".concat(_this.props.prefixCls, "-dropdown");
    };

    _this.saveDropdownMenuRef = Object(_util__WEBPACK_IMPORTED_MODULE_6__["saveRef"])(_assertThisInitialized(_this), 'dropdownMenuRef');
    _this.saveTriggerRef = Object(_util__WEBPACK_IMPORTED_MODULE_6__["saveRef"])(_assertThisInitialized(_this), 'triggerRef');
    _this.state = {
      dropdownWidth: 0
    };
    return _this;
  }

  _createClass(SelectTrigger, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDropdownWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setDropdownWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _popupClassName;

      var _a = this.props,
          onPopupFocus = _a.onPopupFocus,
          empty = _a.empty,
          props = __rest(_a, ["onPopupFocus", "empty"]);

      var multiple = props.multiple,
          visible = props.visible,
          inputValue = props.inputValue,
          dropdownAlign = props.dropdownAlign,
          disabled = props.disabled,
          showSearch = props.showSearch,
          dropdownClassName = props.dropdownClassName,
          dropdownStyle = props.dropdownStyle,
          dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
      var dropdownPrefixCls = this.getDropdownPrefixCls();
      var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, dropdownClassName, !!dropdownClassName), _defineProperty(_popupClassName, "".concat(dropdownPrefixCls, "--").concat(multiple ? 'multiple' : 'single'), 1), _defineProperty(_popupClassName, "".concat(dropdownPrefixCls, "--empty"), empty), _popupClassName);
      var popupElement = this.getDropdownElement({
        menuItems: props.options,
        onPopupFocus: onPopupFocus,
        multiple: multiple,
        inputValue: inputValue,
        visible: visible
      });
      var hideAction;

      if (disabled) {
        hideAction = [];
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_6__["isSingleMode"])(props) && !showSearch) {
        hideAction = ['click'];
      } else {
        hideAction = ['blur'];
      }

      var popupStyle = _extends({}, dropdownStyle);

      var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';

      if (this.state.dropdownWidth) {
        popupStyle[widthProp] = "".concat(this.state.dropdownWidth, "px");
      }

      return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_trigger__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
        showAction: disabled ? [] : this.props.showAction,
        hideAction: hideAction,
        ref: this.saveTriggerRef,
        popupPlacement: "bottomLeft",
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: classnames__WEBPACK_IMPORTED_MODULE_0___default()(popupClassName),
        popupStyle: popupStyle
      }), props.children);
    }
  }]);

  return SelectTrigger;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);


SelectTrigger.defaultProps = {
  dropdownRender: function dropdownRender(menu) {
    return menu;
  }
};
SelectTrigger.propTypes = {
  onPopupFocus: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  onPopupScroll: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  dropdownMatchSelectWidth: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  dropdownAlign: prop_types__WEBPACK_IMPORTED_MODULE_1__["object"],
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  showSearch: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  dropdownClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  filterOption: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
  options: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  popupClassName: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["any"],
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"](prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]),
  menuItemSelectedIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]]),
  dropdownRender: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  ariaId: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
SelectTrigger.displayName = 'SelectTrigger';

/***/ }),

/***/ "./node_modules/rc-select/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-select/es/index.js ***!
  \********************************************/
/*! exports provided: Option, OptGroup, SelectPropTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OptGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptGroup */ "./node_modules/rc-select/es/OptGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return _OptGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option */ "./node_modules/rc-select/es/Option.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _Option__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropTypes */ "./node_modules/rc-select/es/PropTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectPropTypes", function() { return _PropTypes__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Select */ "./node_modules/rc-select/es/Select.js");




_Select__WEBPACK_IMPORTED_MODULE_3__["default"].Option = _Option__WEBPACK_IMPORTED_MODULE_1__["default"];
_Select__WEBPACK_IMPORTED_MODULE_3__["default"].OptGroup = _OptGroup__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (_Select__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./node_modules/rc-select/es/util.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-select/es/util.js ***!
  \*******************************************/
/*! exports provided: toTitle, getValuePropValue, getPropValue, isMultiple, isCombobox, isMultipleOrTags, isMultipleOrTagsOrCombobox, isSingleMode, toArray, getMapKey, preventDefaultEvent, findIndexInValueBySingleValue, getLabelFromPropsValue, getSelectKeys, UNSELECTABLE_STYLE, UNSELECTABLE_ATTRIBUTE, findFirstMenuItem, includesSeparators, splitBySeparators, defaultFilterFn, validateOptionValue, saveRef, generateUUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTitle", function() { return toTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValuePropValue", function() { return getValuePropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropValue", function() { return getPropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiple", function() { return isMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCombobox", function() { return isCombobox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultipleOrTags", function() { return isMultipleOrTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultipleOrTagsOrCombobox", function() { return isMultipleOrTagsOrCombobox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSingleMode", function() { return isSingleMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMapKey", function() { return getMapKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefaultEvent", function() { return preventDefaultEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexInValueBySingleValue", function() { return findIndexInValueBySingleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelFromPropsValue", function() { return getLabelFromPropsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectKeys", function() { return getSelectKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECTABLE_STYLE", function() { return UNSELECTABLE_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECTABLE_ATTRIBUTE", function() { return UNSELECTABLE_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFirstMenuItem", function() { return findFirstMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includesSeparators", function() { return includesSeparators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitBySeparators", function() { return splitBySeparators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFilterFn", function() { return defaultFilterFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateOptionValue", function() { return validateOptionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRef", function() { return saveRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUUID", function() { return generateUUID; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function toTitle(title) {
  if (typeof title === 'string') {
    return title;
  }

  return '';
}
function getValuePropValue(child) {
  if (!child) {
    return null;
  }

  var props = child.props;

  if ('value' in props) {
    return props.value;
  }

  if (child.key) {
    return child.key;
  }

  if (child.type && child.type.isSelectOptGroup && props.label) {
    return props.label;
  }

  throw new Error("Need at least a key or a value or a label (only for OptGroup) for ".concat(child));
}
function getPropValue(child, prop) {
  if (prop === 'value') {
    return getValuePropValue(child);
  }

  return child.props[prop];
}
function isMultiple(props) {
  return props.multiple;
}
function isCombobox(props) {
  return props.combobox;
}
function isMultipleOrTags(props) {
  return props.multiple || props.tags;
}
function isMultipleOrTagsOrCombobox(props) {
  return isMultipleOrTags(props) || isCombobox(props);
}
function isSingleMode(props) {
  return !isMultipleOrTagsOrCombobox(props);
}
function toArray(value) {
  var ret = value;

  if (value === undefined) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  }

  return ret;
}
function getMapKey(value) {
  return "".concat(typeof value, "-").concat(value);
}
function preventDefaultEvent(e) {
  e.preventDefault();
}
function findIndexInValueBySingleValue(value, singleValue) {
  var index = -1;

  if (value) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === singleValue) {
        index = i;
        break;
      }
    }
  }

  return index;
}
function getLabelFromPropsValue(value, key) {
  var label;
  value = toArray(value);

  if (value) {
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < value.length; i++) {
      if (value[i].key === key) {
        label = value[i].label;
        break;
      }
    }
  }

  return label;
}
function getSelectKeys(menuItems, value) {
  if (value === null || value === undefined) {
    return [];
  }

  var selectedKeys = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(menuItems, function (item) {
    var type = item.type;

    if (type.isMenuItemGroup) {
      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
    } else {
      var itemValue = getValuePropValue(item);
      var itemKey = item.key;

      if (findIndexInValueBySingleValue(value, itemValue) !== -1 && itemKey) {
        selectedKeys.push(itemKey);
      }
    }
  });
  return selectedKeys;
}
var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};
var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'on'
};
function findFirstMenuItem(children) {
  // tslint:disable-next-line:prefer-for-of
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.type.isMenuItemGroup) {
      var found = findFirstMenuItem(child.props.children);

      if (found) {
        return found;
      }
    } else if (!child.props.disabled) {
      return child;
    }
  }

  return null;
}
function includesSeparators(str, separators) {
  // tslint:disable-next-line:prefer-for-of
  for (var i = 0; i < separators.length; ++i) {
    if (str.lastIndexOf(separators[i]) > 0) {
      return true;
    }
  }

  return false;
}
function splitBySeparators(str, separators) {
  var reg = new RegExp("[".concat(separators.join(), "]"));
  return str.split(reg).filter(function (token) {
    return token;
  });
}
function defaultFilterFn(input, child) {
  if (child.props.disabled) {
    return false;
  }

  var value = toArray(getPropValue(child, this.props.optionFilterProp)).join('');
  return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
}
function validateOptionValue(value, props) {
  if (isSingleMode(props) || isMultiple(props)) {
    return;
  }

  if (typeof value !== 'string') {
    throw new Error("Invalid `value` of type `".concat(typeof value, "` supplied to Option, ") + "expected `string` when `tags/combobox` is `true`.");
  }
}
function saveRef(instance, name) {
  return function (node) {
    instance[name] = node;
  };
}
function generateUUID() {
  if (false) {}

  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line:no-bitwise
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16); // tslint:disable-next-line:no-bitwise

    return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
  });
  return uuid;
}

/***/ }),

/***/ "./node_modules/rc-util/es/Children/toArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/Children/toArray.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function toArray(children) {
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

/***/ })

}]);