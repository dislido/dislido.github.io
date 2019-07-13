(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/page/wip/wip.less":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/page/wip/wip.less ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "[data-stylefield=\"wip\"] .toggleMenuBtn {\n  width: 71px;\n  height: 71px;\n  border: 1px #E8E8E8 solid;\n  border-right-width: 0;\n  background-color: white;\n  line-height: 69px;\n  text-align: center;\n  font-size: 24px;\n  cursor: pointer;\n}\n[data-stylefield=\"wip\"] .leftmenu {\n  transition: all 0.5s linear;\n  width: 100px;\n  margin-right: 3px;\n}\n[data-stylefield=\"wip\"] .leftmenu.fold {\n  transform: translateX(-100%) scaleX(0);\n  width: 0;\n}\n[data-stylefield=\"wip-unicode\"] .unicodeChar {\n  margin: 0;\n  text-align: center;\n  display: inline-block;\n  width: 17px;\n  border-right: 1px #DDD solid;\n}\n[data-stylefield=\"wip-unicode\"] .left {\n  display: inline-block;\n  width: 100px;\n  border-right: 1px #DDD solid;\n}\n", ""]);



/***/ }),

/***/ "./src/page/wip/index.js":
/*!*******************************!*\
  !*** ./src/page/wip/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wip */ "./src/page/wip/wip.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_wip__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/page/wip/unicode.jsx":
/*!**********************************!*\
  !*** ./src/page/wip/unicode.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Unicode; });
/* harmony import */ var antd_es_pagination_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/pagination/style/css */ "./node_modules/antd/es/pagination/style/css.js");
/* harmony import */ var antd_es_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/pagination */ "./node_modules/antd/es/pagination/index.js");
/* harmony import */ var antd_es_list_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/list/style/css */ "./node_modules/antd/es/list/style/css.js");
/* harmony import */ var antd_es_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/list */ "./node_modules/antd/es/list/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const LINE_LENGTH = 50;
const LINES_PER_PAGE = 20;
const linesArray = [...'1'.repeat(LINES_PER_PAGE)];

function getChars(from, num) {
  const codePoints = [];

  for (let i = from, j = num; j--; i++) {
    codePoints.push(i);
  }

  return String.fromCodePoint(...codePoints);
}

function getPage(page) {
  const p = (page - 1) * LINES_PER_PAGE;
  return linesArray.map((value, index) => ({
    line: `${(p + index) * LINE_LENGTH + 1}-${(p + index) * LINE_LENGTH + LINE_LENGTH}`,
    str: getChars((p + index) * LINE_LENGTH + 1, LINE_LENGTH)
  }));
}

function Unicode() {
  const [listData, setListData] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(getPage(1));

  const onPageChange = page => setListData(getPage(page));

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    "data-stylefield": "wip-unicode"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "small",
    dataSource: listData,
    renderItem: item => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: item.line
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("b", {
      className: "left"
    }, item.line, ":"), [...item.str].map(it => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "unicodeChar",
      key: it.codePointAt(0)
    }, it)))
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_pagination__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showQuickJumper: true,
    total: 65535,
    defaultPageSize: 1000,
    onChange: onPageChange
  }));
}

/***/ }),

/***/ "./src/page/wip/wip.jsx":
/*!******************************!*\
  !*** ./src/page/wip/wip.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_es_menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/antd/es/menu/style/css.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/menu */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var antd_es_card_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/card/style/css */ "./node_modules/antd/es/card/style/css.js");
/* harmony import */ var antd_es_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/card */ "./node_modules/antd/es/card/index.js");
/* harmony import */ var antd_es_icon_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/icon/style/css */ "./node_modules/antd/es/icon/style/css.js");
/* harmony import */ var antd_es_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/icon */ "./node_modules/antd/es/icon/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/util */ "./src/util/index.js");
/* harmony import */ var _util_hooks_use_title_effect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/util/hooks/use-title-effect */ "./src/util/hooks/use-title-effect.js");
/* harmony import */ var _ywwuyi_game__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ywwuyi-game */ "./src/page/wip/ywwuyi-game.jsx");
/* harmony import */ var _unicode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./unicode */ "./src/page/wip/unicode.jsx");
/* harmony import */ var _wip_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wip.less */ "./src/page/wip/wip.less");
/* harmony import */ var _wip_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wip_less__WEBPACK_IMPORTED_MODULE_13__);















function WIP({
  match
}) {
  Object(_util_hooks_use_title_effect__WEBPACK_IMPORTED_MODULE_10__["default"])('实验室');
  const [menuFold, setMenuFold] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const routerSwitch = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: `${match.url}/ywwuyi-game`,
    component: _ywwuyi_game__WEBPACK_IMPORTED_MODULE_11__["default"]
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Route"], {
    path: `${match.url}/unicode`,
    component: _unicode__WEBPACK_IMPORTED_MODULE_12__["default"]
  }));

  const handleToggleMenu = () => setMenuFold(!menuFold);

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    "data-stylefield": "wip"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      display: 'flex'
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "toggleMenuBtn",
    onClick: handleToggleMenu,
    role: "button",
    tabIndex: 0
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: menuFold ? 'menu-fold' : 'menu-unfold'
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      flexGrow: '1'
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    style: {
      marginBottom: '0'
    }
  }, "\u8FD9\u91CC\u5B58\u653E\u6B63\u5728\u5236\u4F5C\u6216\u7814\u7A76\u4E2D\u7684\u529F\u80FD"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      display: 'flex'
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    defaultSelectedKeys: [Object(_util__WEBPACK_IMPORTED_MODULE_9__["getDefaultSelectedKey"])(routerSwitch)],
    className: ['leftmenu', menuFold ? 'fold' : ''].join(' ')
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    key: `${match.url}/ywwuyi-game`
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], Object(_util__WEBPACK_IMPORTED_MODULE_9__["linkProps"])(`${match.url}/ywwuyi-game`), "\u4E22\u4EBA\u6E38\u620F")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_es_menu__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
    key: `${match.url}/unicode`
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], Object(_util__WEBPACK_IMPORTED_MODULE_9__["linkProps"])(`${match.url}/unicode`), "unicode"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      flexGrow: 1,
      padding: '5px'
    }
  }, routerSwitch)));
}

WIP.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    url: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WIP);

/***/ }),

/***/ "./src/page/wip/wip.less":
/*!*******************************!*\
  !*** ./src/page/wip/wip.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./wip.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/page/wip/wip.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/page/wip/ywwuyi-game.jsx":
/*!**************************************!*\
  !*** ./src/page/wip/ywwuyi-game.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YwwuyiGame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function YwwuyiGame() {
  const [left, setLeft] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['人', '鸡', '狗', '鱼', '鸭子', '米']);
  const [boat, setBoat] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [right, setRight] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [boatPos, setBoatPos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [err, setErr] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const setAreas = (l, b, r) => {
    setLeft(l);
    setBoat(b);
    setRight(r);
  };

  function check() {
    return [left, boat, right].map((area, index) => {
      if (!area.includes('人')) {
        if (area.includes('鸡') && area.includes('狗')) {
          return '鸡会打狗';
        }

        if (area.includes('鱼') && area.includes('狗')) {
          return '狗会摸鱼';
        }
      }

      if (!area.includes('鸭子') && area.includes('人') && area.includes('米')) {
        return '人会吃米';
      }

      if (index !== 1 && area.includes('狗') && area.includes('鸭子') && !area.includes('人') && !area.includes('鸡')) {
        return '狗和鸭子会打架';
      }

      if (index === 1 && area.includes('人')) {
        if (area.includes('狗') || area.includes('鸭子')) return '人会被丢下去';
      }

      return null;
    }).filter(it => it !== null);
  }

  function move(from, to, index) {
    if (to === 1 && boat.length === 2) return;
    if (!boatPos && from === 2) return;
    if (boatPos && from === 0) return;
    const areas = [left, boat, right];
    areas[to].push(areas[from].splice(index, 1)[0]);
    setAreas(left, boat, right);
    setErr(null);
    const checkResult = check();

    if (checkResult.length) {
      areas[from].push(areas[to].pop());
      setAreas(left, boat, right);
      setErr(checkResult.join(' '));
    }
  }

  function moveBoat() {
    setBoatPos(!boatPos);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: 50,
      border: '#000 1px solid'
    }
  }, left.map((it, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: it,
    onClick: () => move(0, 1, index),
    style: {
      width: '50px',
      backgroundColor: '#DDD'
    }
  }, it))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: 80,
      border: '#000 1px solid',
      textAlign: boatPos ? 'right' : 'left'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u8239", boat.some(it => ['人', '鸡', '狗', '鸭子'].includes(it)) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: moveBoat
  }, "\u5F00\u8239")), boat.map((it, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: it,
    onClick: () => move(1, boatPos ? 2 : 0, index),
    style: {
      width: '50px',
      backgroundColor: '#DDD',
      display: 'inline-block'
    }
  }, it))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: 50,
      border: '#000 1px solid'
    }
  }, right.map((it, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: it,
    onClick: () => move(2, 1, index),
    style: {
      width: '50px',
      backgroundColor: '#DDD'
    }
  }, it))), err && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, err));
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