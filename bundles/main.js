!function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],m=0,f=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);f.length;)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/stars-match-react/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=i;u.push([0,1]),n()}({0:function(e,t,n){e.exports=n("4qhl")},"4qhl":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),u=n("i8i4"),o=n("J4zp"),c=n.n(o),i={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,n){return e+n}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var n=[[]],r=[],a=0;a<e.length;a++)for(var u=0,o=n.length;u<o;u++){var c=n[u].concat(e[a]),l=i.sum(c);l<=t&&(n.push(c),r.push(l))}return r[i.random(0,r.length-1)]}},l=i,s=function(e){return a.a.createElement(a.a.Fragment,null,l.range(1,e.count).map((function(e){return a.a.createElement("div",{key:e,className:"star"})})))},m={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},f=function(e){return a.a.createElement("button",{className:"number",style:{backgroundColor:m[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)},d=function(e){return a.a.createElement("div",{className:"game-done"},a.a.createElement("div",{className:"message",style:{color:"lost"===e.gameStatus?"red":"green"}},"lost"===e.gameStatus?"Game Over":"Nice"),a.a.createElement("button",{onClick:e.onClick},"Play Again"))},p=function(e){var t=function(){var e=Object(r.useState)(l.random(1,9)),t=c()(e,2),n=t[0],a=t[1],u=Object(r.useState)(l.range(1,9)),o=c()(u,2),i=o[0],s=o[1],m=Object(r.useState)([]),f=c()(m,2),d=f[0],p=f[1],v=Object(r.useState)(10),g=c()(v,2),b=g[0],h=g[1];Object(r.useEffect)((function(){if(b>0&&i.length>0){var e=setTimeout((function(){return h(b-1)}),1e3);return function(){return clearTimeout(e)}}}));return{stars:n,availableNums:i,candidateNums:d,secondsLeft:b,setGameState:function(e){if(l.sum(e)!==n)p(e);else{var t=i.filter((function(t){return!e.includes(t)}));a(l.randomSumIn(t,9)),s(t),p([])}}}}(),n=t.stars,u=t.availableNums,o=t.candidateNums,i=t.secondsLeft,m=t.setGameState,p=l.sum(o)>n,v=0===u.length?"won":0===i?"lost":"active",g=function(e){return u.includes(e)?o.includes(e)?p?"wrong":"candidate":"available":"used"},b=function(e,t){if("used"!==t&&0!==i){var n="available"===t?o.concat(e):o.filter((function(t){return t!==e}));m(n)}};return a.a.createElement("div",{className:"game"},a.a.createElement("div",{className:"help"},"Pick 1 or more numbers that sum to the number of stars"),a.a.createElement("div",{className:"body"},a.a.createElement("div",{className:"left"},"active"!==v?a.a.createElement(d,{onClick:e.startNewGame,gameStatus:v}):a.a.createElement(s,{count:n})),a.a.createElement("div",{className:"right"},l.range(1,9).map((function(e){return a.a.createElement(f,{key:e,status:g(e),number:e,onClick:b})})))),a.a.createElement("div",{className:"timer"},"Time Remaining: ",i))},v=function(){var e=Object(r.useState)(1),t=c()(e,2),n=t[0],u=t[1];return a.a.createElement(p,{key:n,startNewGame:function(){return u(n+1)}})};function g(){return a.a.createElement(v,null)}n("VxdY");u.hydrate(r.createElement(g,{initialData:window.__R_DATA.initialData}),document.getElementById("root"))},VxdY:function(e,t,n){}});