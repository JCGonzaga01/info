!function(e){function t(t){for(var r,a,o=t[0],i=t[1],l=t[2],s=0,c=[];s<o.length;s++)a=o[s],Object.prototype.hasOwnProperty.call(j,a)&&j[a]&&c.push(j[a][0]),j[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(Z&&Z(t);c.length;)c.shift()();return T.push.apply(T,l||[]),n()}function n(){for(var e,t=0;t<T.length;t++){for(var n=T[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==j[o]&&(r=!1)}r&&(T.splice(t--,1),e=L(L.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--b&&0===y&&O()}(e,t),r&&r(e,t)};var a,o=!0,i="e57242155f4618509141",l={},s=[],c=[];function d(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:a!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[t]=e[t],u("ready");break;case"ready":H(t);break;case"prepare":case"check":case"dispose":case"apply":(_=_||[]).push(t)}},check:E,apply:I,status:function(e){if(!e)return p;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:l[t]};return a=void 0,n}var f=[],p="idle";function u(e){p=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var m,h,g,_,b=0,y=0,v={},x={},w={};function C(e){return+e+""===e?+e:e}function E(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,u("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=L.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return u(N()?"ready":"idle"),null;x={},v={},w=e.c,g=e.h,u("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},j)k(n);return"prepare"===p&&0===y&&0===b&&O(),t}));var t}function k(e){w[e]?(x[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function O(){u("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then((function(){return I(o)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(C(n));e.resolve(t)}}function I(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var r,o,c,d,f;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var a=r.pop(),o=a.id,i=a.chain;if((d=G[o])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var l=0;l<d.parents.length;l++){var s=d.parents[l],c=G[s];if(c){if(c.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([s]),moduleId:o,parentId:s};-1===t.indexOf(s)&&(c.hot._acceptedDependencies[o]?(n[s]||(n[s]=[]),m(n[s],[o])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}N();var b={},y=[],v={},x=function(){console.warn("[HMR] unexpected require("+k.moduleId+") to disposed module")};for(var E in h)if(Object.prototype.hasOwnProperty.call(h,E)){var k;f=C(E),k=h[E]?p(f):{type:"disposed",moduleId:E};var O=!1,I=!1,H=!1,T="";switch(k.chain&&(T="\nUpdate propagation: "+k.chain.join(" -> ")),k.type){case"self-declined":n.onDeclined&&n.onDeclined(k),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+k.moduleId+T));break;case"declined":n.onDeclined&&n.onDeclined(k),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+k.moduleId+" in "+k.parentId+T));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(k),n.ignoreUnaccepted||(O=new Error("Aborted because "+f+" is not accepted"+T));break;case"accepted":n.onAccepted&&n.onAccepted(k),I=!0;break;case"disposed":n.onDisposed&&n.onDisposed(k),H=!0;break;default:throw new Error("Unexception type "+k.type)}if(O)return u("abort"),Promise.reject(O);if(I)for(f in v[f]=h[f],m(y,k.outdatedModules),k.outdatedDependencies)Object.prototype.hasOwnProperty.call(k.outdatedDependencies,f)&&(b[f]||(b[f]=[]),m(b[f],k.outdatedDependencies[f]));H&&(m(y,[k.moduleId]),v[f]=x)}var M,S=[];for(o=0;o<y.length;o++)f=y[o],G[f]&&G[f].hot._selfAccepted&&v[f]!==x&&!G[f].hot._selfInvalidated&&S.push({module:f,parents:G[f].parents.slice(),errorHandler:G[f].hot._selfAccepted});u("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete j[e]}(e)}));var D,Z,W=y.slice();for(;W.length>0;)if(f=W.pop(),d=G[f]){var Q={},J=d.hot._disposeHandlers;for(c=0;c<J.length;c++)(r=J[c])(Q);for(l[f]=Q,d.hot.active=!1,delete G[f],delete b[f],c=0;c<d.children.length;c++){var F=G[d.children[c]];F&&((M=F.parents.indexOf(f))>=0&&F.parents.splice(M,1))}}for(f in b)if(Object.prototype.hasOwnProperty.call(b,f)&&(d=G[f]))for(Z=b[f],c=0;c<Z.length;c++)D=Z[c],(M=d.children.indexOf(D))>=0&&d.children.splice(M,1);u("apply"),void 0!==g&&(i=g,g=void 0);for(f in h=void 0,v)Object.prototype.hasOwnProperty.call(v,f)&&(e[f]=v[f]);var Y=null;for(f in b)if(Object.prototype.hasOwnProperty.call(b,f)&&(d=G[f])){Z=b[f];var z=[];for(o=0;o<Z.length;o++)if(D=Z[o],r=d.hot._acceptedDependencies[D]){if(-1!==z.indexOf(r))continue;z.push(r)}for(o=0;o<z.length;o++){r=z[o];try{r(Z)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:f,dependencyId:Z[o],error:e}),n.ignoreErrored||Y||(Y=e)}}}for(o=0;o<S.length;o++){var P=S[o];f=P.module,s=P.parents,a=f;try{L(f)}catch(e){if("function"==typeof P.errorHandler)try{P.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:f,error:t,originalError:e}),n.ignoreErrored||Y||(Y=t),Y||(Y=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:f,error:e}),n.ignoreErrored||Y||(Y=e)}}if(Y)return u("fail"),Promise.reject(Y);if(_)return t(n).then((function(e){return y.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return u("idle"),new Promise((function(e){e(y)}))}(t=t||{})}function N(){if(_)return h||(h={}),_.forEach(H),_=void 0,!0}function H(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var G={},j={0:0},T=[];function L(t){if(G[t])return G[t].exports;var n=G[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=s,s=[],c),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=G[e];if(!t)return L;var n=function(n){return t.hot.active?(G[n]?-1===G[n].parents.indexOf(e)&&G[n].parents.push(e):(s=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),L(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return L[e]},set:function(t){L[e]=t}}};for(var o in L)Object.prototype.hasOwnProperty.call(L,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===p&&u("prepare"),y++,L.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===p&&(v[e]||k(e),0===y&&0===b&&O())}},n.t=function(e,t){return 1&t&&(e=n(e)),L.t(e,-2&t)},n}(t)),n.l=!0,n.exports}L.m=e,L.c=G,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(e,t){if(1&t&&(e=L(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)L.d(n,r,function(t){return e[t]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="/info",L.h=function(){return i};var M=window.webpackJsonp=window.webpackJsonp||[],S=M.push.bind(M);M.push=t,M=M.slice();for(var D=0;D<M.length;D++)t(M[D]);var Z=S;T.push([29,1]),n()}([,,function(e,t,n){var r=n(3),a=n(17);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(17,(function(){"string"==typeof(a=(a=n(17)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},,function(e,t,n){var r=n(3),a=n(16);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(16,(function(){"string"==typeof(a=(a=n(16)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){var r=n(3),a=n(11);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(11,(function(){"string"==typeof(a=(a=n(11)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){var r=n(3),a=n(12);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(12,(function(){"string"==typeof(a=(a=n(12)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){var r=n(3),a=n(14);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(14,(function(){"string"==typeof(a=(a=n(14)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){var r=n(3),a=n(15);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(15,(function(){"string"==typeof(a=(a=n(15)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){var r=n(3),a=n(13);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(13,(function(){"string"==typeof(a=(a=n(13)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){var r=n(3),a=n(18);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(18,(function(){"string"==typeof(a=(a=n(18)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,"._2aK8J_bxbFDHBejYU8GrlL:before{background-color:#6fc3df}._3vEtEopXHZC2qhHbHbXA2N:before{background-color:#8d82c4}._2gZCOIvE6Fht900lGQA4H7:before{background-color:#ec8d81}._26iJsWI5rAZ1lvXbIZ4cTL:before{background-color:#87c5a4}._337v8yRCp_PkTKRVeAhojj{animation:_337v8yRCp_PkTKRVeAhojj 0.7s ease-in-out forwards}@keyframes _337v8yRCp_PkTKRVeAhojj{0%{opacity:0}100%{opacity:1}}._3dWiFPhMcFpZHCVnZz-G7A{position:fixed;width:100vw;z-index:99}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU{align-items:center;background:#242a43;display:flex;justify-content:space-between;padding:10px 20px;width:100%}@media (min-width: 1024px){._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU{padding:10px 100px}}@media (min-width: 744px) and (max-width: 1023px){._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU{padding:10px 60px}}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU .WrC8im6U1W8HSvTXs8Ze0{cursor:pointer;height:60px}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU .WrC8im6U1W8HSvTXs8Ze0:hover{filter:invert(0.4) sepia(1) saturate(15) hue-rotate(180deg)}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU ._2LznZM-6tm1rtn2McFbGuB{font-size:18px;font-weight:600;text-transform:uppercase}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU ._2LznZM-6tm1rtn2McFbGuB a{color:#e3f6ff;text-decoration:none;transition:0.25s ease-in-out}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU ._2LznZM-6tm1rtn2McFbGuB a:hover{color:#5fcbff}\n",""]),a.locals={blueBG:"_2aK8J_bxbFDHBejYU8GrlL",purpleBG:"_3vEtEopXHZC2qhHbHbXA2N",orangeBG:"_2gZCOIvE6Fht900lGQA4H7",greenBG:"_26iJsWI5rAZ1lvXbIZ4cTL",fadeIn:"_337v8yRCp_PkTKRVeAhojj",wrapper:"_3dWiFPhMcFpZHCVnZz-G7A",container:"I5XjlpZ4THqJYl7qQC4ZU",headerLogo:"WrC8im6U1W8HSvTXs8Ze0",menu:"_2LznZM-6tm1rtn2McFbGuB"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,'.HiIrMPr83sfWUqMevhnBh:before{background-color:#6fc3df}.DanJkOMPUhQ5U4GePPJ0F:before{background-color:#8d82c4}.igtcjOZsJS5DMXEMSwOf6:before{background-color:#ec8d81}._1TCxLidwEhCALK2uiqb7EP:before{background-color:#87c5a4}._3juhxMuDBPdZ4jI4TI8NU0{animation:_3juhxMuDBPdZ4jI4TI8NU0 0.7s ease-in-out forwards}@keyframes _3juhxMuDBPdZ4jI4TI8NU0{0%{opacity:0}100%{opacity:1}}._1qeG1dUKsV4DFR3JTAwesG{align-items:center;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;font-family:"Poppins";width:100%}._1qeG1dUKsV4DFR3JTAwesG ._3GxZZqqbVH46wDu7Fm-5Tl{height:0;opacity:0}._1qeG1dUKsV4DFR3JTAwesG ._2S1ACAGCDQTyFfMzIdC_Bu{opacity:1}._1qeG1dUKsV4DFR3JTAwesG ._3mQpfsH6Q43hoT3jwgAaym{margin:20px 0;text-align:center;width:100%;z-index:1}._1qeG1dUKsV4DFR3JTAwesG ._3mQpfsH6Q43hoT3jwgAaym>span{border-top:1px solid #00adff;border-bottom:1px solid #00adff;color:#00adff;cursor:pointer;padding:0 5px;transition:0.3s ease-in-out}._1qeG1dUKsV4DFR3JTAwesG ._3mQpfsH6Q43hoT3jwgAaym>span:hover{border-top:1px solid #006a9c;border-bottom:1px solid #006a9c;color:#006a9c}\n',""]),a.locals={blueBG:"HiIrMPr83sfWUqMevhnBh",purpleBG:"DanJkOMPUhQ5U4GePPJ0F",orangeBG:"igtcjOZsJS5DMXEMSwOf6",greenBG:"_1TCxLidwEhCALK2uiqb7EP",fadeIn:"_3juhxMuDBPdZ4jI4TI8NU0",wrapper:"_1qeG1dUKsV4DFR3JTAwesG",hideItem:"_3GxZZqqbVH46wDu7Fm-5Tl",showItem:"_2S1ACAGCDQTyFfMzIdC_Bu",ellipsis:"_3mQpfsH6Q43hoT3jwgAaym"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,"._2PyHy7sLRnRoH_fRhtoyk6{height:60px;margin-left:auto;margin-right:auto;width:60px}._2PyHy7sLRnRoH_fRhtoyk6 .SrEFFHti3D6DMIFgEGVe2{animation:SrEFFHti3D6DMIFgEGVe2 2s linear infinite both}._2PyHy7sLRnRoH_fRhtoyk6 .SrEFFHti3D6DMIFgEGVe2 .rYSo3tW77Ts_ML_oCXZ_k{animation:rYSo3tW77Ts_ML_oCXZ_k 1.4s ease-in-out infinite both;fill:transparent;stroke:#2f3d4c;stroke-dasharray:285;stroke-linecap:round;stroke-width:8px;transform-origin:50% 50%}@keyframes SrEFFHti3D6DMIFgEGVe2{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes rYSo3tW77Ts_ML_oCXZ_k{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}\n",""]),a.locals={wrapper:"_2PyHy7sLRnRoH_fRhtoyk6",container:"SrEFFHti3D6DMIFgEGVe2",spinner:"rYSo3tW77Ts_ML_oCXZ_k"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,"._2nC4kkxmLqIbqT8qg9HTLS:before{background-color:#6fc3df}.WgJdLrIgJ5HrTYStlPGYo:before{background-color:#8d82c4}._1voMIoJgYVaHYK5nCSFfVy:before{background-color:#ec8d81}._2MCOUSNTw88nWYrbsRyYX5:before{background-color:#87c5a4}._6iX5g9H7OK29YzRm4wC24{animation:_6iX5g9H7OK29YzRm4wC24 0.7s ease-in-out forwards}@keyframes _6iX5g9H7OK29YzRm4wC24{0%{opacity:0}100%{opacity:1}}.iw14ylo6fMYhkfYqWEt-g{background-color:#efeaea;border-radius:3px;height:30px;margin-bottom:10px;position:relative;width:100%}.iw14ylo6fMYhkfYqWEt-g ._65LzocTwirhzg97N05AEd{align-items:center;display:flex;justify-content:center;background-color:rgba(0,0,0,0.2);color:#e3f6ff;height:100%;left:0;padding:0 15px;position:absolute;top:0}.iw14ylo6fMYhkfYqWEt-g ._2t1i9AGxOwZ3C3mKtorodS{border-radius:3px;height:100%}.iw14ylo6fMYhkfYqWEt-g ._2WHg190bI0ERLsAQ5HoIuS{align-items:center;display:flex;justify-content:center;height:100%;position:absolute;right:10px;top:0}\n",""]),a.locals={blueBG:"_2nC4kkxmLqIbqT8qg9HTLS",purpleBG:"WgJdLrIgJ5HrTYStlPGYo",orangeBG:"_1voMIoJgYVaHYK5nCSFfVy",greenBG:"_2MCOUSNTw88nWYrbsRyYX5",fadeIn:"_6iX5g9H7OK29YzRm4wC24",wrapper:"iw14ylo6fMYhkfYqWEt-g",title:"_65LzocTwirhzg97N05AEd",gauge:"_2t1i9AGxOwZ3C3mKtorodS",score:"_2WHg190bI0ERLsAQ5HoIuS"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,'._2fwWU0zyDKlBt8tcY4lD-q:before{background-color:#6fc3df}.KzLcG_DvsV1ct93mUUfo8:before{background-color:#8d82c4}._11fEvvsSmGL8KyCxRgtyyD:before{background-color:#ec8d81}._1_uQgwrVhgj4B9p6bSxWaI:before{background-color:#87c5a4}._1TDasUhl4iElECHXffbCa5{animation:_1TDasUhl4iElECHXffbCa5 0.7s ease-in-out forwards}@keyframes _1TDasUhl4iElECHXffbCa5{0%{opacity:0}100%{opacity:1}}._34-j9UIQCWLlJsNoUyrYo7{display:flex;flex-wrap:wrap;border-top:2px solid #e4e4e4;max-width:1024px;width:100%}@media (max-width: 743px){._34-j9UIQCWLlJsNoUyrYo7{align-items:center;display:flex;justify-content:center;flex-direction:column;margin-top:-2px}}@media (min-width: 1024px){._34-j9UIQCWLlJsNoUyrYo7>:nth-child(odd){border-right:2px solid #e4e4e4}}@media (min-width: 744px) and (max-width: 1023px){._34-j9UIQCWLlJsNoUyrYo7>:nth-child(odd){border-right:2px solid #e4e4e4}}._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ{display:table-cell;border-bottom:2px solid #e4e4e4;padding:30px;width:50%}@media (max-width: 743px){._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ{width:100%}}._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ>:first-child{align-items:center;display:flex;justify-content:center;flex-direction:column}._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ>:first-child img{filter:invert(0.55) sepia(1) saturate(9) hue-rotate(180deg);height:60px;margin-bottom:20px;width:60px}._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ>:first-child .CDm1VUF_3Fy4K32rNdPLl{font-family:"Poppins";font-size:30px;letter-spacing:2px;margin-bottom:10px;text-transform:uppercase}\n',""]),a.locals={blueBG:"_2fwWU0zyDKlBt8tcY4lD-q",purpleBG:"KzLcG_DvsV1ct93mUUfo8",orangeBG:"_11fEvvsSmGL8KyCxRgtyyD",greenBG:"_1_uQgwrVhgj4B9p6bSxWaI",fadeIn:"_1TDasUhl4iElECHXffbCa5",wrapper:"_34-j9UIQCWLlJsNoUyrYo7",itemDetails:"_1TImD1REVEVrBVNXuNjeAQ",title:"CDm1VUF_3Fy4K32rNdPLl"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,".MzRjZrqlOiex9KKm0C86K:before{background-color:#6fc3df}._3ZbL4qkaafrGaa6bDD5Ohy:before{background-color:#8d82c4}._17WnY4MLk-lnscsPDRMe2n:before{background-color:#ec8d81}.yE6XgOJPr4XZWVIfs-upL:before{background-color:#87c5a4}._1jzDvpHIe5dD1mKYdtcNGm{animation:_1jzDvpHIe5dD1mKYdtcNGm 0.7s ease-in-out forwards}@keyframes _1jzDvpHIe5dD1mKYdtcNGm{0%{opacity:0}100%{opacity:1}}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG{display:flex;flex-wrap:wrap;padding:0 30px}@media (max-width: 743px){._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG{align-items:center;display:flex;justify-content:center}}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG ._3-2ZZHLcWsQwUBsXEHMZHe{background-color:#00adff;color:#e3f6ff}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG>div{border:1px solid #00adff;border-radius:3px;cursor:pointer;font-size:18px;margin-bottom:10px;padding:5px 15px;transition:0.2s ease-in-out}@media (max-width: 743px){._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG>div{font-size:14px}}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG>div:hover{background-color:#00adff;color:#e3f6ff;transition:0.2s ease-in-out}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG>:not(:last-child){margin-right:10px}._2JmutWC6lymD2K0g7huoyZ ._2dFX35h9WspzONbXhOQVQR{align-items:center;display:flex;justify-content:center;border-bottom:2px solid #e4e4e4;flex-direction:column;padding:30px;margin-bottom:30px}\n",""]),a.locals={blueBG:"MzRjZrqlOiex9KKm0C86K",purpleBG:"_3ZbL4qkaafrGaa6bDD5Ohy",orangeBG:"_17WnY4MLk-lnscsPDRMe2n",greenBG:"yE6XgOJPr4XZWVIfs-upL",fadeIn:"_1jzDvpHIe5dD1mKYdtcNGm",wrapper:"_2JmutWC6lymD2K0g7huoyZ",btnContainer:"_3IAKRpon0G2r3zN60_nvfG",skillSelected:"_3-2ZZHLcWsQwUBsXEHMZHe",skillContainer:"_2dFX35h9WspzONbXhOQVQR"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,'._2TfMUPFQs3za7j9GFiEXIm:before{background-color:#6fc3df}._1jvZvCsvuVx1Vcz1RtnjcH:before{background-color:#8d82c4}._3TJOo9NQ3RJQryfsZRFjcG:before{background-color:#ec8d81}._2_9-g4-bvrIHQKEHStkV0L:before{background-color:#87c5a4}.Rj8zPEamYNJcqY89zonxT{animation:Rj8zPEamYNJcqY89zonxT 0.7s ease-in-out forwards}@keyframes Rj8zPEamYNJcqY89zonxT{0%{opacity:0}100%{opacity:1}}.N995OopC4BOda3l6bwent{align-items:center;display:flex;justify-content:center;flex-direction:column;padding:80px 20px 30px}@media (min-width: 1024px){.N995OopC4BOda3l6bwent{padding:80px 100px 30px}}@media (min-width: 744px) and (max-width: 1023px){.N995OopC4BOda3l6bwent{padding:80px 60px 30px}}.N995OopC4BOda3l6bwent ._1WLhtgQxZrzWNL5XIVyJQh{align-items:center;display:flex;justify-content:center;height:50vh;width:100%}.N995OopC4BOda3l6bwent ._1WLhtgQxZrzWNL5XIVyJQh ._2PWgguoFzhOenFxCJJkSCt{align-items:center;display:flex;justify-content:center;flex-direction:column;background:rgba(0,0,0,0.5);border-radius:3px;max-width:1024px;padding:30px;width:100%}@media (max-width: 743px){.N995OopC4BOda3l6bwent ._1WLhtgQxZrzWNL5XIVyJQh ._2PWgguoFzhOenFxCJJkSCt{padding:10px}}.N995OopC4BOda3l6bwent ._1WLhtgQxZrzWNL5XIVyJQh ._2PWgguoFzhOenFxCJJkSCt ._3GpXWSEV7-h30vvaYiC9r9{border-bottom:1px solid #00adff;border-top:1px solid #00adff;color:white;font-size:44px;letter-spacing:2px;line-height:50px;margin-bottom:30px;padding:20px;text-align:center;text-shadow:3px 0px #00adff;text-transform:uppercase;width:fit-content}@media (max-width: 743px){.N995OopC4BOda3l6bwent ._1WLhtgQxZrzWNL5XIVyJQh ._2PWgguoFzhOenFxCJJkSCt ._3GpXWSEV7-h30vvaYiC9r9{margin-bottom:20px;padding:10px}}.N995OopC4BOda3l6bwent ._1WLhtgQxZrzWNL5XIVyJQh ._2PWgguoFzhOenFxCJJkSCt .Z8lZh4to_T1tHQY_09fYC{color:white;font-family:"Poppins";font-size:22px;letter-spacing:1px;text-align:center;text-shadow:1px 1px 1px #006eff,3px 1px 5px #00adff}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY{align-items:center;display:flex;justify-content:center;background-color:white;box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);margin-bottom:20px;max-width:1024px;padding:10px 0;position:sticky;text-align:center;top:80px;width:100%;z-index:99}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY>:not(:last-child){border-right:2px solid #e4e4e4}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0{align-items:center;display:flex;justify-content:center;flex-direction:column;width:100%}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0:hover{color:#00adff;cursor:pointer}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0>span{font-size:24px;padding:5px;text-transform:uppercase;transition:0.3s ease}@media (max-width: 743px){.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0>span{font-size:20px}}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0>div{width:0;height:2px}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0 ._3-IFCfunCHNZgeVdl8prvk{border:1px solid #00adff;transition:0.3s ease;width:50px}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._2BF4m23O5U_GUw1R0OQZRJ{color:#00adff}.N995OopC4BOda3l6bwent ._17WULEHQOTuoNL3aY0af76{background-color:white;max-width:1024px;padding:30px 0px;width:100%}\n',""]),a.locals={blueBG:"_2TfMUPFQs3za7j9GFiEXIm",purpleBG:"_1jvZvCsvuVx1Vcz1RtnjcH",orangeBG:"_3TJOo9NQ3RJQryfsZRFjcG",greenBG:"_2_9-g4-bvrIHQKEHStkV0L",fadeIn:"Rj8zPEamYNJcqY89zonxT",wrapper:"N995OopC4BOda3l6bwent",bannerWrapper:"_1WLhtgQxZrzWNL5XIVyJQh",bannerContainer:"_2PWgguoFzhOenFxCJJkSCt",title:"_3GpXWSEV7-h30vvaYiC9r9",desc:"Z8lZh4to_T1tHQY_09fYC",infoMenu:"_1EmCTo3H8WrrOC5Mx6TSGY",infoDetail:"_1AsFQShaOL4dcfHDTcLrV0",showUnderline:"_3-IFCfunCHNZgeVdl8prvk",selected:"_2BF4m23O5U_GUw1R0OQZRJ",infoDetails:"_17WULEHQOTuoNL3aY0af76"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,"._182LUbEvXp2O1YtDpaKz5G:before{background-color:#6fc3df}._3volIAORSXk6r2xBMhQvFm:before{background-color:#8d82c4}.UK5Z6keCGjEAQRs9MrWsh:before{background-color:#ec8d81}._1nP43wcZeTjsN-3IbYWhNu:before{background-color:#87c5a4}._2SQoi_GO-f_9-mge8LTbw1{animation:_2SQoi_GO-f_9-mge8LTbw1 0.7s ease-in-out forwards}@keyframes _2SQoi_GO-f_9-mge8LTbw1{0%{opacity:0}100%{opacity:1}}._1NxHcyD_YENzOpQJfo9aCt{align-items:center;display:flex;justify-content:center;background-color:#05060a;border-top:1px solid #151a2b;flex-direction:column;padding:30px 0 60px}@media (max-width: 743px){._1NxHcyD_YENzOpQJfo9aCt{padding:30px 20px 60px}}._1NxHcyD_YENzOpQJfo9aCt ._2WSZJEr33czITMJQd9N5iu{align-items:center;display:flex;justify-content:center}._1NxHcyD_YENzOpQJfo9aCt ._2WSZJEr33czITMJQd9N5iu img{cursor:pointer;filter:invert(0.55) sepia(1) saturate(9) hue-rotate(180deg);height:25px;width:25px}._1NxHcyD_YENzOpQJfo9aCt ._2WSZJEr33czITMJQd9N5iu>:not(:last-child){margin-right:25px}._1NxHcyD_YENzOpQJfo9aCt ._2_P6ZAr99WO3YWvMgLsZW6{color:#e3f6ff;letter-spacing:1px;padding-top:20px;text-align:center;text-transform:uppercase}\n",""]),a.locals={blueBG:"_182LUbEvXp2O1YtDpaKz5G",purpleBG:"_3volIAORSXk6r2xBMhQvFm",orangeBG:"UK5Z6keCGjEAQRs9MrWsh",greenBG:"_1nP43wcZeTjsN-3IbYWhNu",fadeIn:"_2SQoi_GO-f_9-mge8LTbw1",wrapper:"_1NxHcyD_YENzOpQJfo9aCt",imgContainer:"_2WSZJEr33czITMJQd9N5iu",myName:"_2_P6ZAr99WO3YWvMgLsZW6"},t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,"",""]),t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r)()(!1);a.push([e.i,'._304LMmFVCa_iu91VotwXOQ:before{background-color:#6fc3df}._31R8jtehNBgg8wmhmDTECh:before{background-color:#8d82c4}._2-1GtOs4Qo7SeTIsPXxUdg:before{background-color:#ec8d81}.f9ayQpXREIaERaPOX4BwL:before{background-color:#87c5a4}._2-QOKCgaOPHVLUK4l-YHpQ{animation:_2-QOKCgaOPHVLUK4l-YHpQ 0.7s ease-in-out forwards}@keyframes _2-QOKCgaOPHVLUK4l-YHpQ{0%{opacity:0}100%{opacity:1}}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body{margin:0;padding:0;font-family:"Concert One", "Poppins";background-color:#ffffff}@media (max-width: 743px){body{font-family:"Poppins"}}\n',""]),a.locals={blueBG:"_304LMmFVCa_iu91VotwXOQ",purpleBG:"_31R8jtehNBgg8wmhmDTECh",orangeBG:"_2-1GtOs4Qo7SeTIsPXxUdg",greenBG:"f9ayQpXREIaERaPOX4BwL",fadeIn:"_2-QOKCgaOPHVLUK4l-YHpQ"},t.default=a},,,function(e,t,n){var r=n(3),a=n(19);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(19,(function(){"string"==typeof(a=(a=n(19)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},,,,,function(e,t,n){var r=n(3),a=n(20);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=r(a,o);if(!a.locals||e.hot.invalidate){var l=a.locals;e.hot.accept(20,(function(){"string"==typeof(a=(a=n(20)).__esModule?a.default:a)&&(a=[[e.i,a,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,a.locals)?(l=a.locals,i(a)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=a.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(22),i=n.n(o),l="info/assets/headerLogo.a5ec7dd01cba2067863a8b4489f132e1.png",s="info/assets/like.02cf5245bd0c9db3edb0cd248f150bd1.svg",c="info/assets/dislike.46aec5a943b73788a734bc8078cb81d4.svg",d="info/assets/funFact.f1deaa38048e4605f936ca73d9a259cc.png",f="info/assets/bucketList.c7e810918e7585028f8f390a986e4948.svg",p="info/assets/web.55518e922aedd2be5dc236cb8e4ee60b.svg",u="info/assets/database.bf6b3a709ba5f241f4177d0a9e161f87.svg",m="info/assets/otherTools.4db3101340393f043edfc2da20b838bf.svg",h="info/assets/scrum.fbd26b9f09a5302169613b95fe7796e3.svg",g="info/assets/linkedin.7defd339fd92d3e5fa034b24a5f10ed6.svg",_="info/assets/github.e0df113a06b1885368036a2a16d99697.svg",b="info/assets/email.2c9fdd96dc9689b6338372f203f31401.svg",y=n(5),v=n.n(y),x=function(){return a.a.createElement("div",{className:v.a.wrapper},a.a.createElement("div",{className:v.a.container},a.a.createElement("a",{href:"/",target:"_self"},a.a.createElement("img",{src:l,alt:"Header Logo",className:v.a.headerLogo})),a.a.createElement("div",{className:v.a.menu},a.a.createElement("a",{href:"/",target:"_self"},"Home"))))},w=n(6),C=n.n(w),E=function(){return(E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},k=function(e){var t=e.items,n=e.isEllipted,o=void 0!==n&&n,i=e.minItems,l=void 0===i?0:i,s=Object(r.useState)(o),c=s[0],d=s[1];return a.a.createElement("div",{className:C.a.wrapper},t.map((function(e,t){return o&&t>=l?"":a.a.createElement("li",{key:t+"-"+e},e)})),o&&t.map((function(e,t){var n=c?{}:{transition:"opacity 0.5s ease-in-out "+.1*(t-l)+"s"};return t>=l&&a.a.createElement("li",{key:t+"-"+e,className:c?C.a.hideItem:C.a.showItem,style:E({},n)},e)})),o&&t.length>l&&a.a.createElement("div",{className:C.a.ellipsis,onClick:function(){return d(!c)}},a.a.createElement("span",null,"Show "+(c?"More":"Less")," ")))},O=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.join(" ")},I=n(9),N=n.n(I),H=function(e){var t=e.className,n=void 0===t?"":t;return a.a.createElement("div",{className:O(N.a.wrapper,n)},a.a.createElement("svg",{className:N.a.container,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{className:N.a.spinner,cx:"50",cy:"50",r:"45"})))},G=n(7),j=n.n(G),T=function(e){var t=e.title,n=e.score,r=e.color,o=void 0===r?"00adff":r;return a.a.createElement("div",{className:j.a.wrapper},a.a.createElement("div",{className:j.a.title},t),a.a.createElement("div",{className:j.a.gauge,style:{backgroundColor:o,width:10*n+"%"}}),a.a.createElement("div",{className:j.a.score},n+"/10"))},L=[{icon:s,title:"I Like",details:["Biking","Jogging","Playing Guitar","Playing Cajon","Playing Keyboard (Still learning "+String.fromCodePoint(128513)+")","Mountain Hiking","Listening to christian music","Listening to christian podcast","Joining christian church activites","and Going to an open field like parks and lie under a tree in a cloudy day while listening to my favorite music. "]},{icon:c,title:"I don't like",details:["Beer","Coffee","Onions in my salad","Bell pepper even nicely cook","Swimming and/or getting stuck in the middle of the ocean (Thalassophobia)"]},{icon:d,title:"Fun Facts",details:["When I was in Japan, I was stuck and can't find the exit for almost 30mins in Shinjuku Station, Japan's Largest Railway Station, ","I was bitten by a dog with rabbies when I was 7 or 8 yrs. old. Luckily, I survive.","When I was young, my friends and I almost burned down a field and our houses because of fireworks.","We also almost got blind when we try to experiment with firework's powder and then it suddenly light up.","I enjoy watching people's everyday life in one of Japan's busiest prefacture, Kawasaki.","I still drink milk every morning and sometimes before going to bed."]},{icon:f,title:"Bucket Lists",details:["Visit Switzerland to see Swiss Alps, ride Glacier Express in winter and go to Jungfraujoch - Top of Europe in winter as well.","See Aurora Borealis either in Norway or in Iceland.","Experience a Business-Class and First-Class Flight Seat.","Climb Mt.Fuji in Japan.","Learn how to skii or snowboard.","I have many more but can't share all of them here. "+String.fromCodePoint(128521)+" "]}],M=n(8),S=n.n(M),D=function(){return a.a.createElement("div",{className:O(S.a.wrapper,S.a.fadeIn)},L.map((function(e,t){return a.a.createElement("div",{key:t+"-"+e.title,className:S.a.itemDetails},a.a.createElement("div",null,a.a.createElement("img",{src:e.icon,alt:e.title}),a.a.createElement("div",{className:S.a.title},e.title),a.a.createElement(k,{items:e.details,isEllipted:!0,minItems:3})))})))},Z=[{title:"WEB",icon:p,color:"rgb(146 158 228)",skills:[{name:"ReactJS",score:9},{name:"JavaScript",score:9},{name:"HTML",score:9},{name:"CSS / SASS / SCSS",score:9},{name:"TypeScript",score:8},{name:"Webpack",score:8},{name:"NodeJS",score:7},{name:"ExpressJS",score:7},{name:"Vue",score:4},{name:"AngularJS",score:4}]},{title:"DATABASE",icon:u,color:"rgb(162 238 192)",skills:[{name:"Redis",score:8},{name:"Firebase",score:7},{name:"MySQL",score:5},{name:"PostgreSQL",score:5},{name:"MongoDB",score:4}]},{title:"METHODOLOGIES",icon:h,color:"rgb(237 239 128)",skills:[{name:"SCRUM-AGILE",score:9},{name:"SAFe (Scaled Agile Framework)",score:7}]},{title:"OTHER TOOLS",icon:m,color:"rgb(255 134 171)",skills:[{name:"GIT",score:9},{name:"Docker",score:8},{name:"VS Code Remote Container",score:7},{name:"Heroku",score:4}]}],W=n(4),Q=n.n(W),J=function(){return(J=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},F=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,a++)r[a]=o[i];return r},Y=function(e){var t=e.map((function(e){return e.skills.map((function(t){return J(J({},t),{color:e.color})}))})).flat(1);return F(t).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0}))},z=function(){var e=Object(r.useState)("all"),t=e[0],n=e[1],o=Object(r.useState)(Y(Z)),i=o[0],l=o[1],s=function(e){var t=e.currentTarget.id.toLowerCase();if(n(t),"all"===t)l(Y(Z));else{var r=Z.filter((function(e){return e.title.toLowerCase()===t}));l(Y(r))}};return a.a.createElement("div",{className:O(Q.a.wrapper,Q.a.fadeIn)},a.a.createElement("div",{className:Q.a.btnContainer},a.a.createElement("div",{id:"ALL",className:"all"===t?Q.a.skillSelected:"",onClick:s},"ALL"),Z.map((function(e){return a.a.createElement("div",{id:e.title,key:e.title,className:t===e.title.toLowerCase()?Q.a.skillSelected:"",onClick:s},e.title)}))),a.a.createElement("div",{className:Q.a.skillContainer},i.map((function(e){return a.a.createElement(T,{key:e.name,title:e.name,score:e.score,color:e.color})}))))},P="Me, Myself and I",B="Skills, Fun Facts, Likes & Dislikes, and more...",V=[{key:"aboutMe",value:"About Me",component:D},{key:"skills",value:"Skills",component:z}],A=n(2),U=n.n(A),R=function(e){return window.localStorage.setItem("infoType",e)},X=function(){var e=Object(r.useState)(""),t=e[0],n=e[1];Object(r.useEffect)((function(){var e=window.localStorage.getItem("infoType");e||R(V[0].key),n(e||V[0].key)}),[]);var o=function(e){n(e.currentTarget.id),R(e.currentTarget.id)};return a.a.createElement("div",{className:U.a.wrapper,style:{background:"url(info/assets/banner.722b279a028b27cb23f703f6076548f7.jpg) center center / cover no-repeat fixed"}},a.a.createElement("div",{className:U.a.bannerWrapper},a.a.createElement("div",{className:U.a.bannerContainer},a.a.createElement("div",{className:U.a.title},P),a.a.createElement("div",{className:U.a.desc},B))),a.a.createElement("div",{className:U.a.infoMenu},V.map((function(e,n){return a.a.createElement("div",{id:e.key,key:n+"-"+e.key,className:U.a.infoDetail,onClick:o},a.a.createElement("span",{className:O(t===e.key&&U.a.selected)},e.value),a.a.createElement("div",{className:O(t===e.key&&U.a.showUnderline)}))}))),a.a.createElement("div",{className:U.a.infoDetails},{skills:a.a.createElement(z,null),aboutMe:a.a.createElement(D,null)}[t]||a.a.createElement(D,null)))},K={name:"© John Christopher Gonzaga",linkItems:[{name:"Github",link:"https://github.com/JCGonzaga01",target:"_blank",icon:_},{name:"LinkedIn",link:"https://www.linkedin.com/in/jc-gonzaga/",target:"_blank",icon:g},{name:"Email",link:"mailto:gonzaga.jc1993@gmail.com",target:"_blank",icon:b}]},q=n(10),$=n.n(q),ee=function(){return a.a.createElement("div",{className:$.a.wrapper},a.a.createElement("div",{className:$.a.imgContainer},K.linkItems.map((function(e,t){return a.a.createElement("a",{key:t+"="+e.name,href:e.link,target:e.target},a.a.createElement("img",{src:e.icon,alt:e.name}))}))),a.a.createElement("div",{className:$.a.myName},K.name))},te=n(23),ne=n.n(te),re=function(){return a.a.createElement("div",{className:ne.a.wrapper},a.a.createElement(x,null),a.a.createElement(X,null),a.a.createElement(ee,null))},ae=(n(28),a.a.createElement(r.Suspense,{fallback:a.a.createElement(H,null)},a.a.createElement(re,null)));i.a.render(ae,document.getElementById("root"))}]);