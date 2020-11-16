!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(N,o)&&N[o]&&d.push(N[o][0]),N[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(Q&&Q(t);d.length;)d.shift()();return Z.push.apply(Z,c||[]),n()}function n(){for(var e,t=0;t<Z.length;t++){for(var n=Z[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==N[a]&&(r=!1)}r&&(Z.splice(t--,1),e=P(P.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--b&&0===_&&C()}(e,t),r&&r(e,t)};var o,a=!0,i="327049b771b1777df142",c={},l=[],d=[];function s(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,f){case"idle":(m={})[t]=e[t],p("ready");break;case"ready":M(t);break;case"prepare":case"check":case"dispose":case"apply":(g=g||[]).push(t)}},check:H,apply:j,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:c[t]};return o=void 0,n}var u=[],f="idle";function p(e){f=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var h,m,v,g,b=0,_=0,y={},x={},w={};function O(e){return+e+""===e?+e:e}function H(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=P.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p(k()?"ready":"idle"),null;x={},y={},w=e.c,v=e.h,p("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in m={},N)E(n);return"prepare"===f&&0===_&&0===b&&C(),t}));var t}function E(e){w[e]?(x[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):y[e]=!0}function C(){p("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return j(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(O(n));e.resolve(t)}}function j(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");return function t(n){var r,a,d,s,u;function f(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((s=G[a])&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var c=0;c<s.parents.length;c++){var l=s.parents[c],d=G[l];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([l]),moduleId:a,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[a]?(n[l]||(n[l]=[]),h(n[l],[a])):(delete n[l],t.push(l),r.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}k();var b={},_=[],y={},x=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var H in m)if(Object.prototype.hasOwnProperty.call(m,H)){var E;u=O(H),E=m[H]?f(u):{type:"disposed",moduleId:H};var C=!1,j=!1,M=!1,Z="";switch(E.chain&&(Z="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(C=new Error("Aborted because of self decline: "+E.moduleId+Z));break;case"declined":n.onDeclined&&n.onDeclined(E),n.ignoreDeclined||(C=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+Z));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(E),n.ignoreUnaccepted||(C=new Error("Aborted because "+u+" is not accepted"+Z));break;case"accepted":n.onAccepted&&n.onAccepted(E),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(E),M=!0;break;default:throw new Error("Unexception type "+E.type)}if(C)return p("abort"),Promise.reject(C);if(j)for(u in y[u]=m[u],h(_,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,u)&&(b[u]||(b[u]=[]),h(b[u],E.outdatedDependencies[u]));M&&(h(_,[E.moduleId]),y[u]=x)}var D,F=[];for(a=0;a<_.length;a++)u=_[a],G[u]&&G[u].hot._selfAccepted&&y[u]!==x&&!G[u].hot._selfInvalidated&&F.push({module:u,parents:G[u].parents.slice(),errorHandler:G[u].hot._selfAccepted});p("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete N[e]}(e)}));var B,Q,T=_.slice();for(;T.length>0;)if(u=T.pop(),s=G[u]){var A={},I=s.hot._disposeHandlers;for(d=0;d<I.length;d++)(r=I[d])(A);for(c[u]=A,s.hot.active=!1,delete G[u],delete b[u],d=0;d<s.children.length;d++){var U=G[s.children[d]];U&&((D=U.parents.indexOf(u))>=0&&U.parents.splice(D,1))}}for(u in b)if(Object.prototype.hasOwnProperty.call(b,u)&&(s=G[u]))for(Q=b[u],d=0;d<Q.length;d++)B=Q[d],(D=s.children.indexOf(B))>=0&&s.children.splice(D,1);p("apply"),void 0!==v&&(i=v,v=void 0);for(u in m=void 0,y)Object.prototype.hasOwnProperty.call(y,u)&&(e[u]=y[u]);var V=null;for(u in b)if(Object.prototype.hasOwnProperty.call(b,u)&&(s=G[u])){Q=b[u];var W=[];for(a=0;a<Q.length;a++)if(B=Q[a],r=s.hot._acceptedDependencies[B]){if(-1!==W.indexOf(r))continue;W.push(r)}for(a=0;a<W.length;a++){r=W[a];try{r(Q)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:Q[a],error:e}),n.ignoreErrored||V||(V=e)}}}for(a=0;a<F.length;a++){var Y=F[a];u=Y.module,l=Y.parents,o=u;try{P(u)}catch(e){if("function"==typeof Y.errorHandler)try{Y.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,originalError:e}),n.ignoreErrored||V||(V=t),V||(V=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||V||(V=e)}}if(V)return p("fail"),Promise.reject(V);if(g)return t(n).then((function(e){return _.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(_)}))}(t=t||{})}function k(){if(g)return m||(m={}),g.forEach(M),g=void 0,!0}function M(t){Object.prototype.hasOwnProperty.call(m,t)||(m[t]=e[t])}var G={},N={0:0},Z=[];function P(t){if(G[t])return G[t].exports;var n=G[t]={i:t,l:!1,exports:{},hot:s(t),parents:(d=l,l=[],d),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=G[e];if(!t)return P;var n=function(n){return t.hot.active?(G[n]?-1===G[n].parents.indexOf(e)&&G[n].parents.push(e):(l=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),P(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var a in P)Object.prototype.hasOwnProperty.call(P,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&p("prepare"),_++,P.e(e).then(t,(function(e){throw t(),e}));function t(){_--,"prepare"===f&&(y[e]||E(e),0===_&&0===b&&C())}},n.t=function(e,t){return 1&t&&(e=n(e)),P.t(e,-2&t)},n}(t)),n.l=!0,n.exports}P.m=e,P.c=G,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="/",P.h=function(){return i};var D=window.webpackJsonp=window.webpackJsonp||[],F=D.push.bind(D);D.push=t,D=D.slice();for(var B=0;B<D.length;B++)t(D[B]);var Q=F;Z.push([21,1]),n()}([,,function(e,t,n){var r=n(3),o=n(9);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(9,(function(){"string"==typeof(o=(o=n(9)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},,function(e,t,n){var r=n(3),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(7,(function(){"string"==typeof(o=(o=n(7)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){var r=n(3),o=n(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(8,(function(){"string"==typeof(o=(o=n(8)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){var r=n(3),o=n(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(10,(function(){"string"==typeof(o=(o=n(10)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"._2aK8J_bxbFDHBejYU8GrlL:before{background-color:#6fc3df}._3vEtEopXHZC2qhHbHbXA2N:before{background-color:#8d82c4}._2gZCOIvE6Fht900lGQA4H7:before{background-color:#ec8d81}._26iJsWI5rAZ1lvXbIZ4cTL:before{background-color:#87c5a4}._3dWiFPhMcFpZHCVnZz-G7A{position:fixed;width:100vw;z-index:99}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU{align-items:center;background:#242a43;display:flex;justify-content:space-between;padding:10px 20px;width:100%}@media (min-width: 1024px){._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU{padding:10px 100px}}@media (min-width: 744px) and (max-width: 1023px){._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU{padding:10px 60px}}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU .WrC8im6U1W8HSvTXs8Ze0{cursor:pointer;height:60px}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU ._2LznZM-6tm1rtn2McFbGuB{cursor:pointer;font-size:18px;font-weight:600;text-transform:uppercase;transition:0.25s ease-in-out;color:#e3f6ff}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU ._2LznZM-6tm1rtn2McFbGuB:hover{color:#5fcbff}\n",""]),o.locals={blueBG:"_2aK8J_bxbFDHBejYU8GrlL",purpleBG:"_3vEtEopXHZC2qhHbHbXA2N",orangeBG:"_2gZCOIvE6Fht900lGQA4H7",greenBG:"_26iJsWI5rAZ1lvXbIZ4cTL",wrapper:"_3dWiFPhMcFpZHCVnZz-G7A",container:"I5XjlpZ4THqJYl7qQC4ZU",headerLogo:"WrC8im6U1W8HSvTXs8Ze0",menu:"_2LznZM-6tm1rtn2McFbGuB"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,'.HGLi4VSgR9VDdJwRFJfVF:before{background-color:#6fc3df}._31CY0AFTf7e41_I40S5Bi7:before{background-color:#8d82c4}._1VVwBKUydxGxQiaLBEQ-JV:before{background-color:#ec8d81}._3Y7yAXh7EuocQc0Q1874FN:before{background-color:#87c5a4}.BVVjprH_QGHyByUFWv9OM{align-items:center;display:flex;justify-content:center;flex-wrap:wrap;max-width:1024px;width:100%}.BVVjprH_QGHyByUFWv9OM ._3vpRUYoEfpiLXWU0RADEdg{border-right:2px solid #e4e4e4}.BVVjprH_QGHyByUFWv9OM ._3PemxnZPzP_cxrFqDjAd_m{align-items:center;display:flex;justify-content:center;border-bottom:2px solid #e4e4e4;flex-direction:column;padding:30px 10px;width:50%}.BVVjprH_QGHyByUFWv9OM ._3PemxnZPzP_cxrFqDjAd_m img{height:60px;margin-bottom:20px;width:60px}.BVVjprH_QGHyByUFWv9OM ._3PemxnZPzP_cxrFqDjAd_m ._3h0DD7AqNbyLHx-inRJmmV{font-family:"Poppins";font-size:30px;letter-spacing:2px;margin-bottom:10px;text-transform:uppercase}\n',""]),o.locals={blueBG:"HGLi4VSgR9VDdJwRFJfVF",purpleBG:"_31CY0AFTf7e41_I40S5Bi7",orangeBG:"_1VVwBKUydxGxQiaLBEQ-JV",greenBG:"_3Y7yAXh7EuocQc0Q1874FN",wrapper:"BVVjprH_QGHyByUFWv9OM",isOdd:"_3vpRUYoEfpiLXWU0RADEdg",itemDetails:"_3PemxnZPzP_cxrFqDjAd_m",title:"_3h0DD7AqNbyLHx-inRJmmV"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,'._2TfMUPFQs3za7j9GFiEXIm:before{background-color:#6fc3df}._1jvZvCsvuVx1Vcz1RtnjcH:before{background-color:#8d82c4}._3TJOo9NQ3RJQryfsZRFjcG:before{background-color:#ec8d81}._2_9-g4-bvrIHQKEHStkV0L:before{background-color:#87c5a4}.N995OopC4BOda3l6bwent{align-items:center;display:flex;justify-content:center;background:url("https://pixelarity.com/items/demos/lens/light/images/fulls/04.jpg");background-size:cover;background-attachment:fixed;background-repeat:no-repeat;flex-direction:column;padding:80px 20px}@media (min-width: 1024px){.N995OopC4BOda3l6bwent{padding:80px 100px}}@media (min-width: 744px) and (max-width: 1023px){.N995OopC4BOda3l6bwent{padding:80px 60px}}.N995OopC4BOda3l6bwent ._3PHd92s2uflpDHeKPOUYYc{align-items:center;display:flex;justify-content:center;flex-direction:column;height:50vh;width:100%}.N995OopC4BOda3l6bwent ._3PHd92s2uflpDHeKPOUYYc>:first-child{border-bottom:1px solid #00adff;border-top:1px solid #00adff;color:white;font-size:44px;line-height:50px;padding:20px;margin-bottom:30px;text-align:center;text-transform:uppercase;width:fit-content}.N995OopC4BOda3l6bwent ._3PHd92s2uflpDHeKPOUYYc>:last-child{font-family:"Poppins";font-size:20px;letter-spacing:1px}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY{align-items:center;display:flex;justify-content:center;background-color:white;max-width:1024px;padding:10px 0;text-align:center;width:100%}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY>:not(:last-child){border-right:2px solid #e4e4e4}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0{align-items:center;display:flex;justify-content:center;flex-direction:column;width:100%}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0:hover{color:#00adff;cursor:pointer}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0>span{font-size:24px;padding:5px;text-transform:uppercase;transition:0.3s ease}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0>div{width:0;height:1px}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0 ._3-IFCfunCHNZgeVdl8prvk{border:1px solid #00adff;transition:0.3s ease;width:50px}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._2BF4m23O5U_GUw1R0OQZRJ{color:#00adff}.N995OopC4BOda3l6bwent ._17WULEHQOTuoNL3aY0af76{background-color:white;max-width:1024px;padding:30px 0px;width:100%}\n',""]),o.locals={blueBG:"_2TfMUPFQs3za7j9GFiEXIm",purpleBG:"_1jvZvCsvuVx1Vcz1RtnjcH",orangeBG:"_3TJOo9NQ3RJQryfsZRFjcG",greenBG:"_2_9-g4-bvrIHQKEHStkV0L",wrapper:"N995OopC4BOda3l6bwent",banner:"_3PHd92s2uflpDHeKPOUYYc",infoMenu:"_1EmCTo3H8WrrOC5Mx6TSGY",infoDetail:"_1AsFQShaOL4dcfHDTcLrV0",showUnderline:"_3-IFCfunCHNZgeVdl8prvk",selected:"_2BF4m23O5U_GUw1R0OQZRJ",infoDetails:"_17WULEHQOTuoNL3aY0af76"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"._182LUbEvXp2O1YtDpaKz5G:before{background-color:#6fc3df}._3volIAORSXk6r2xBMhQvFm:before{background-color:#8d82c4}.UK5Z6keCGjEAQRs9MrWsh:before{background-color:#ec8d81}._1nP43wcZeTjsN-3IbYWhNu:before{background-color:#87c5a4}._1NxHcyD_YENzOpQJfo9aCt{align-items:center;display:flex;justify-content:center;background-color:#05060a;border-top:1px solid #151a2b;flex-direction:column;padding:30px 0 60px}._1NxHcyD_YENzOpQJfo9aCt ._2WSZJEr33czITMJQd9N5iu img{cursor:pointer;filter:invert(0.55) sepia(1) saturate(9) hue-rotate(180deg);height:25px;width:25px}._1NxHcyD_YENzOpQJfo9aCt ._2WSZJEr33czITMJQd9N5iu>:not(:last-child){margin-right:25px}._1NxHcyD_YENzOpQJfo9aCt ._2_P6ZAr99WO3YWvMgLsZW6{color:#e3f6ff;letter-spacing:1px;padding-top:20px;text-transform:uppercase}\n",""]),o.locals={blueBG:"_182LUbEvXp2O1YtDpaKz5G",purpleBG:"_3volIAORSXk6r2xBMhQvFm",orangeBG:"UK5Z6keCGjEAQRs9MrWsh",greenBG:"_1nP43wcZeTjsN-3IbYWhNu",wrapper:"_1NxHcyD_YENzOpQJfo9aCt",imgContainer:"_2WSZJEr33czITMJQd9N5iu",myName:"_2_P6ZAr99WO3YWvMgLsZW6"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"",""]),t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,'html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body{margin:0;padding:0;font-family:"Concert One", "Poppins";background-color:#ffffff}\n',""]),t.default=o},,,function(e,t,n){var r=n(3),o=n(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(11,(function(){"string"==typeof(o=(o=n(11)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},,,,,function(e,t,n){var r=n(3),o=n(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var c=o.locals;e.hot.accept(12,(function(){"string"==typeof(o=(o=n(12)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(c,o.locals)?(c=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(14),i=n.n(a),c="assets/jcg_header.a5ec7dd01cba2067863a8b4489f132e1.png",l="assets/jcg_header_hover.7aad785f516d8b28d61d83d8ef416dbb.png",d="assets/guitar.e1918d7d69067fc4cd954701529942f8.svg",s="assets/working.90a0aec1cb7318dfe5cb0f8652236055.svg",u="assets/linkedin.7defd339fd92d3e5fa034b24a5f10ed6.svg",f="assets/github.e0df113a06b1885368036a2a16d99697.svg",p="assets/email.2c9fdd96dc9689b6338372f203f31401.svg",h=n(4),m=n.n(h),v=function(){var e=Object(r.useState)(c),t=e[0],n=e[1],a=function(e){return function(){return n(e?l:c)}};return o.a.createElement("div",{className:m.a.wrapper},o.a.createElement("div",{className:m.a.container},o.a.createElement("img",{src:t,alt:"John Christopher Gonzaga",className:m.a.headerLogo,onMouseEnter:a(!0),onMouseLeave:a(!1),onClick:function(){return window.open("https://jcgonzaga01.github.io/","_self")}}),o.a.createElement("div",{className:m.a.menu,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}},"Home")))},g=[{icon:d,title:"Hobbies",details:["Playing Guitar","Playing Guitar","Playing Guitar","Playing Guitar","Playing Guitar"]},{icon:s,title:"Fun Facts",details:["Kahit anu na muna","Kahit anu na muna","Kahit anu na muna","Kahit anu na muna","Kahit anu na muna"]}],b=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.join(" ")},_=n(5),y=n.n(_),x=function(){return o.a.createElement("div",{className:y.a.wrapper},g.map((function(e,t){var n=(t+1)%2;return o.a.createElement("div",{key:t+"-"+e.title,className:b(y.a.itemDetails,n&&y.a.isOdd)},o.a.createElement("img",{src:e.icon,alt:e.title}),o.a.createElement("div",{className:y.a.title},e.title),o.a.createElement("div",null,e.details.map((function(e,t){return o.a.createElement("li",{key:t+"-"+e},e)}))))})))},w="Information page",O="Skills, Fun Facts, Hobbies, and more...",H=[{key:"aboutMe",value:"About Me"},{key:"skills",value:"Skills"}],E=n(2),C=n.n(E),j=function(){var e=Object(r.useState)("aboutMe"),t=e[0],n=e[1];return o.a.createElement("div",{className:C.a.wrapper},o.a.createElement("div",{className:C.a.banner},o.a.createElement("div",null,w),o.a.createElement("div",null,O)),o.a.createElement("div",{className:C.a.infoMenu},H.map((function(e,r){return o.a.createElement("div",{key:r+"-"+e.key,className:C.a.infoDetail,title:e.key,onClick:(a=e.key,function(){return n(a)})},o.a.createElement("span",{className:b(t===e.key&&C.a.selected)},e.value),o.a.createElement("div",{className:b(t===e.key&&C.a.showUnderline)}));var a}))),o.a.createElement("div",{className:C.a.infoDetails},o.a.createElement(x,null)))},k=n(6),M=n.n(k),G=function(){return o.a.createElement("div",{className:M.a.wrapper},o.a.createElement("div",{className:M.a.imgContainer},o.a.createElement("img",{src:f,alt:"Github",onClick:function(){return window.open("https://github.com/JCGonzaga01")}}),o.a.createElement("img",{src:u,alt:"LinkedIn",onClick:function(){return window.open("https://www.linkedin.com/in/jc-gonzaga/")}}),o.a.createElement("img",{src:p,alt:"Email",onClick:function(){return window.open("mailto:gonzaga.jc1993@gmail.com")}})),o.a.createElement("div",{className:M.a.myName},"© John Christopher Gonzaga"))},N=n(15),Z=n.n(N),P=function(){return o.a.createElement("div",{className:Z.a.wrapper},o.a.createElement(v,null),o.a.createElement(j,null),o.a.createElement(G,null))},D=(n(20),o.a.createElement(r.Suspense,{fallback:"Loading..."},o.a.createElement(P,null)));i.a.render(D,document.getElementById("root"))}]);