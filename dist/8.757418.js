(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{302:function(e,t,n){"use strict";var l=n(1);const a=" - DisLido HomePage";function c(e){Object(l.useEffect)(()=>{const t=document.title;return document.title=`${e}${a}`,()=>{document.title=t}},[])}n.d(t,"a",function(){return c})},354:function(e,t,n){},378:function(e,t,n){"use strict";n.r(t);n(229);var l=n(27),a=(n(316),n(313)),c=(n(232),n(10)),i=n(1),r=n.n(i),u=n(0),o=n.n(u),s=n(15),d=n(40),m=n(302);function p(){const[e,t]=Object(i.useState)(["人","鸡","狗","鱼","鸭子","米"]),[n,l]=Object(i.useState)([]),[a,c]=Object(i.useState)([]),[u,o]=Object(i.useState)(!1),[s,d]=Object(i.useState)(""),m=(e,n,a)=>{t(e),l(n),c(a)};function p(t,l,c){if(1===l&&2===n.length)return;if(!u&&2===t)return;if(u&&0===t)return;const i=[e,n,a];i[l].push(i[t].splice(c,1)[0]),m(e,n,a),d(null);const r=[e,n,a].map((e,t)=>{if(!e.includes("人")){if(e.includes("鸡")&&e.includes("狗"))return"鸡会打狗";if(e.includes("鱼")&&e.includes("狗"))return"狗会摸鱼"}return!e.includes("鸭子")&&e.includes("人")&&e.includes("米")?"人会吃米":1!==t&&e.includes("狗")&&e.includes("鸭子")&&!e.includes("人")&&!e.includes("鸡")?"狗和鸭子会打架":1===t&&e.includes("人")&&(e.includes("狗")||e.includes("鸭子"))?"人会被丢下去":null}).filter(e=>null!==e);r.length&&(i[t].push(i[l].pop()),m(e,n,a),d(r.join(" ")))}return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:50,border:"#000 1px solid"}},e.map((e,t)=>r.a.createElement("div",{key:e,onClick:()=>p(0,1,t),style:{width:"50px",backgroundColor:"#DDD"}},e))),r.a.createElement("div",{style:{width:80,border:"#000 1px solid",textAlign:u?"right":"left"}},r.a.createElement("div",null,"船",n.some(e=>["人","鸡","狗","鸭子"].includes(e))&&r.a.createElement("button",{type:"button",onClick:function(){o(!u)}},"开船")),n.map((e,t)=>r.a.createElement("div",{key:e,onClick:()=>p(1,u?2:0,t),style:{width:"50px",backgroundColor:"#DDD",display:"inline-block"}},e))),r.a.createElement("div",{style:{width:50,border:"#000 1px solid"}},a.map((e,t)=>r.a.createElement("div",{key:e,onClick:()=>p(2,1,t),style:{width:"50px",backgroundColor:"#DDD"}},e))),s&&r.a.createElement("p",null,s))}n(317);var f=n(330),y=(n(373),n(372));const E=50,b=20,w=[..."1".repeat(b)];function h(e,t){const n=[];for(let l=e,a=t;a--;l++)n.push(l);return String.fromCodePoint(...n)}function k(e){const t=(e-1)*b;return w.map((e,n)=>({line:`${(t+n)*E+1}-${(t+n)*E+E}`,str:h((t+n)*E+1,E)}))}function g(){const[e,t]=Object(i.useState)(k(1));return r.a.createElement("div",{"data-stylefield":"wip-unicode"},r.a.createElement(y.a,{size:"small",dataSource:e,renderItem:e=>r.a.createElement("div",{key:e.line},r.a.createElement("b",{className:"left"},e.line,":"),[...e.str].map(e=>r.a.createElement("span",{className:"unicodeChar",key:e.codePointAt(0)},e)))}),r.a.createElement(f.a,{showQuickJumper:!0,total:65535,defaultPageSize:1e3,onChange:e=>t(k(e))}))}n(354);function v({match:e}){Object(m.a)("实验室");const[t,n]=Object(i.useState)(!1),u=r.a.createElement(s.Switch,null,r.a.createElement(s.Route,{path:`${e.url}/ywwuyi-game`,component:p}),r.a.createElement(s.Route,{path:`${e.url}/unicode`,component:g}));return r.a.createElement("div",{"data-stylefield":"wip"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:"toggleMenuBtn",onClick:()=>n(!t),role:"button",tabIndex:0},r.a.createElement(c.a,{type:t?"menu-fold":"menu-unfold"})),r.a.createElement(a.a,{style:{flexGrow:"1"}},r.a.createElement("p",{style:{marginBottom:"0"}},"这里存放正在制作或研究中的功能"))),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(l.b,{defaultSelectedKeys:[Object(d.a)(u)],className:["leftmenu",t?"fold":""].join(" ")},r.a.createElement(l.b.Item,{key:`${e.url}/ywwuyi-game`},r.a.createElement(s.Link,Object(d.b)(`${e.url}/ywwuyi-game`),"丢人游戏")),r.a.createElement(l.b.Item,{key:`${e.url}/unicode`},r.a.createElement(s.Link,Object(d.b)(`${e.url}/unicode`),"unicode"))),r.a.createElement("div",{style:{flexGrow:1,padding:"5px"}},u)))}v.propTypes={match:o.a.shape({url:o.a.string}).isRequired};var j=v;t.default=j}}]);