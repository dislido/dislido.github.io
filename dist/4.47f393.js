(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{302:function(e,t,n){"use strict";var a=n(1);const r=" - DisLido HomePage";function o(e){Object(a.useEffect)(()=>{const t=document.title;return document.title=`${e}${r}`,()=>{document.title=t}},[])}n.d(t,"a",function(){return o})},310:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(1);function r(e={}){const[t,n]=Object(a.useState)(!1),[r,o]=Object(a.useState)(e),[l,c]=Object(a.useState)({}),i=()=>{n(!1),c({})};return{modalProps:{visible:t,onCancel:i,onOk:i,...r,...l},openModal:(e={})=>{c(e),n(!0)},closeModal:i,setBaseProps:o}}},311:function(e,t,n){"use strict";n(316);var a=n(313),r=n(1),o=n.n(r),l=n(0),c=n.n(l);n(312);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const s=o.a.memo(e=>{const{backgroundImage:t,bodyStyle:n,text:r,...l}=e;return o.a.createElement(a.a,i({hoverable:!0,bodyStyle:{height:"100%",background:"#F7F7F7 no-repeat center / contain",backgroundImage:t&&`url('${t}')`,...n}},l),o.a.createElement("div",{className:"imagecard"},o.a.createElement("h3",null,r)))});s.propTypes={backgroundImage:c.a.string,bodyStyle:c.a.object,text:c.a.string},s.defaultProps={backgroundImage:null,bodyStyle:{},text:null},t.a=s},312:function(e,t,n){},327:function(e,t,n){e.exports=n(20)(13)},367:function(e,t,n){e.exports=n.p+"src/page/azurlane/img/myinf.png"},368:function(e,t,n){},369:function(e,t,n){},370:function(e,t,n){},371:function(e,t,n){e.exports=n.p+"src/page/azurlane/img/pixeldrawer.jpg"},376:function(e,t,n){"use strict";n.r(t);n(304);var a=n(307),r=(n(306),n(308)),o=(n(229),n(27)),l=n(1),c=n.n(l),i=n(15),s=n(0),u=n.n(s),p=n(40),f=n(302),m=(n(326),n(331)),d=n(367),b=n.n(d);function y(){return c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement(m.a.Panel,{header:"狗牌"},c.a.createElement("img",{src:b.a,alt:"狗牌20181202"}))))}n(328);var v=n(332),g=n(311),h=n(310),E=(n(44),n(368),n(230),n(16)),O=n(224),C=n(10),k=n(50),w=n(49),j=n(42),P=n(9);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},z=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=T(t).call(this,e),(n=!r||"object"!==S(r)&&"function"!=typeof r?$(a):r).onConfirm=function(e){n.setVisible(!1,e);var t=n.props.onConfirm;t&&t.call($(n),e)},n.onCancel=function(e){n.setVisible(!1,e);var t=n.props.onCancel;t&&t.call($(n),e)},n.onVisibleChange=function(e){n.props.disabled||n.setVisible(e)},n.saveTooltip=function(e){n.tooltip=e},n.renderOverlay=function(e,t){var a=n.props,r=a.okButtonProps,o=a.cancelButtonProps,c=a.title,i=a.cancelText,s=a.okText,u=a.okType,p=a.icon;return l.createElement("div",null,l.createElement("div",{className:"".concat(e,"-inner-content")},l.createElement("div",{className:"".concat(e,"-message")},p,l.createElement("div",{className:"".concat(e,"-message-title")},c)),l.createElement("div",{className:"".concat(e,"-buttons")},l.createElement(k.a,x({onClick:n.onCancel,size:"small"},o),i||t.cancelText),l.createElement(k.a,x({onClick:n.onConfirm,type:u,size:"small"},r),s||t.okText))))},n.renderConfirm=function(e){var t=e.getPrefixCls,a=n.props,r=a.prefixCls,o=a.placement,c=I(a,["prefixCls","placement"]),i=t("popover",r),s=l.createElement(w.a,{componentName:"Popconfirm",defaultLocale:j.a.Popconfirm},function(e){return n.renderOverlay(i,e)});return l.createElement(O.a,x({},c,{prefixCls:i,placement:o,onVisibleChange:n.onVisibleChange,visible:n.state.visible,overlay:s,ref:n.saveTooltip}))},n.state={visible:e.visible},n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,l["Component"]),n=t,r=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(a=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var n=this.props;"visible"in n||this.setState({visible:e});var a=n.onVisibleChange;a&&a(e,t)}},{key:"render",value:function(){return l.createElement(P.a,null,this.renderConfirm)}}])&&N(n.prototype,a),r&&N(n,r),t}();z.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:l.createElement(C.a,{type:"exclamation-circle",theme:"filled"}),disabled:!1},Object(E.polyfill)(z);var L=z,_=(n(309),n(315));n(369);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function G(e){return c.a.createElement(_.a,F({disabled:!0,className:"inputgroup-addon"},e))}n(370);const D=["#ffffff","#322829","#ffd370","#75fcad","#7184fd","#ff6f96","#fcd7c7"];function R(){const e=[];for(let t=0;t<22;t++){const t=new Array(37);t.fill(null),e.push(t)}return e}var B=n(371),M=n.n(B);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const q={PixelDrawer:function(){const[e,t]=Object(l.useState)(R()),[n,a]=Object(l.useState)("#bdadad"),{currentColor:r,setCurrentColor:o,colorList:i,addColor:s,deleteColor:u,isColorSaved:p}=function(){const[e,t]=Object(l.useState)("#ffffff"),[n,a]=Object(l.useState)(D);return{currentColor:e,setCurrentColor:t,colorList:n,addColor:()=>{!e||n.includes(e)||n.length>=37||(n.push(e),a([...n]))},deleteColor:()=>{e&&(n.splice(n.indexOf(e),1),a([...n]))},isColorSaved:n.includes(e)}}(),f=n=>{const[a,o]=n.target.dataset.pos.split(" "),l=[];e.forEach(e=>l.push(e)),l[o][a]=r,t(l)};return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(_.a.Group,{className:"margin8"},c.a.createElement(G,{value:"当前颜色：",style:{width:94}}),c.a.createElement(_.a,{type:"color",value:r,onChange:e=>o(e.target.value),style:{width:60},className:r?"":"input-color-eraser"}),null!==r&&c.a.createElement(_.a,{type:"button",style:{width:108},value:p?"从调色板删除":"添加到调色板",onClick:p?u:s}),c.a.createElement(L,{title:"确认清空画布？",onConfirm:()=>t(R())},c.a.createElement(_.a,{type:"button",style:{width:80},value:"清空画布"}))),c.a.createElement(_.a.Group,{className:"margin8"},c.a.createElement(G,{value:"背景颜色：",style:{width:94}}),c.a.createElement(_.a,{type:"color",value:n,onChange:e=>a(e.target.value),style:{width:60}})),c.a.createElement(_.a.Group,{className:"margin8"},c.a.createElement(G,{value:"调色板：",size:"small",style:{width:72}}),c.a.createElement(_.a,{type:"button",size:"small",onClick:()=>o(null),style:{width:24,paddingLeft:4},value:"⌧"}),i.map(e=>c.a.createElement(_.a,{type:"button",size:"small",key:e,onClick:()=>o(e),style:{width:24,backgroundColor:e}})))),c.a.createElement("div",{className:"pixel-drawer",style:{backgroundColor:n}},e.map((e,t)=>c.a.createElement("div",{key:t},e.map((e,n)=>c.a.createElement("button",{key:n,type:"button","data-pos":`${n} ${t}`,onClick:f,style:{backgroundColor:e}}))))))},STGGame:function(){const[e,t]=Object(l.useState)({}),{loadFinished:a}=e;return Object(l.useEffect)(()=>{n.e(10).then(n.bind(null,375)).then(e=>{t(e.default)})},[]),a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("p",null,"控制台")),c.a.createElement("canvas",{width:"800",height:"480"})):c.a.createElement("h2",null,"Loading...")}};var A=function(){const{modalProps:e,openModal:t}=Object(h.a)(),[n,a]=Object(l.useState)(""),r=q[n],o=(e,n,r)=>{a(e),t({title:n,...r})};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cardset cardset-default",style:{paddingTop:"8px"}},c.a.createElement(g.a,{text:"像素画",backgroundImage:M.a,onClick:()=>o("PixelDrawer","像素画",{width:641})}),c.a.createElement(g.a,{text:"测试游戏(WIP)",onClick:()=>o("STGGame","测试游戏",{width:1e3})})),c.a.createElement(v.a,J({footer:null,destroyOnClose:!0,maskClosable:!1},e),r&&c.a.createElement(r,null)))};function H({match:e}){Object(f.a)("碧蓝航线");const t=c.a.createElement(i.Switch,null,c.a.createElement(i.Route,{path:`${e.url}/games`,component:A}),c.a.createElement(i.Route,{path:`${e.url}`,component:y}));return c.a.createElement(a.a,{type:"flex",gutter:16},c.a.createElement(r.a,{span:2},c.a.createElement(o.b,{defaultSelectedKeys:[Object(p.a)(t)],style:{height:"100%"}},c.a.createElement(o.b.Item,{key:`${e.url}`},c.a.createElement(i.Link,Object(p.b)(`${e.url}`),"首页")),c.a.createElement(o.b.Item,{key:`${e.url}/games`},c.a.createElement(i.Link,Object(p.b)(`${e.url}/games`),"小游戏")))),c.a.createElement(r.a,{span:22},t))}H.propTypes={match:u.a.shape({url:u.a.string}).isRequired};t.default=H}}]);