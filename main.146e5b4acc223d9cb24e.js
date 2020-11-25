!function(e){function t(t){for(var r,o,a=t[0],i=t[1],l=t[2],s=0,c=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(j,o)&&j[o]&&c.push(j[o][0]),j[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(Z&&Z(t);c.length;)c.shift()();return D.push.apply(D,l||[]),n()}function n(){for(var e,t=0;t<D.length;t++){for(var n=D[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==j[a]&&(r=!1)}r&&(D.splice(t--,1),e=T(T.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--b&&0===y&&C()}(e,t),r&&r(e,t)};var o,a=!0,i="146e5b4acc223d9cb24e",l={},s=[],c=[];function d(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,p){case"idle":(h={})[t]=e[t],u("ready");break;case"ready":G(t);break;case"prepare":case"check":case"dispose":case"apply":(_=_||[]).push(t)}},check:k,apply:H,status:function(e){if(!e)return p;f.push(e)},addStatusHandler:function(e){f.push(e)},removeStatusHandler:function(e){var t=f.indexOf(e);t>=0&&f.splice(t,1)},data:l[t]};return o=void 0,n}var f=[],p="idle";function u(e){p=e;for(var t=0;t<f.length;t++)f[t].call(null,e)}var m,h,g,_,b=0,y=0,v={},x={},w={};function E(e){return+e+""===e?+e:e}function k(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,u("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=T.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return u(I()?"ready":"idle"),null;x={},v={},w=e.c,g=e.h,u("prepare");var t=new Promise((function(e,t){m={resolve:e,reject:t}}));for(var n in h={},j)O(n);return"prepare"===p&&0===y&&0===b&&C(),t}));var t}function O(e){w[e]?(x[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=T.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function C(){u("ready");var e=m;if(m=null,e)if(a)Promise.resolve().then((function(){return H(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(E(n));e.resolve(t)}}function H(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");return function t(n){var r,a,c,d,f;function p(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((d=N[a])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var l=0;l<d.parents.length;l++){var s=d.parents[l],c=N[s];if(c){if(c.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===t.indexOf(s)&&(c.hot._acceptedDependencies[a]?(n[s]||(n[s]=[]),m(n[s],[a])):(delete n[s],t.push(s),r.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}I();var b={},y=[],v={},x=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k)){var O;f=E(k),O=h[k]?p(f):{type:"disposed",moduleId:k};var C=!1,H=!1,G=!1,D="";switch(O.chain&&(D="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(C=new Error("Aborted because of self decline: "+O.moduleId+D));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(C=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+D));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(C=new Error("Aborted because "+f+" is not accepted"+D));break;case"accepted":n.onAccepted&&n.onAccepted(O),H=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),G=!0;break;default:throw new Error("Unexception type "+O.type)}if(C)return u("abort"),Promise.reject(C);if(H)for(f in v[f]=h[f],m(y,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,f)&&(b[f]||(b[f]=[]),m(b[f],O.outdatedDependencies[f]));G&&(m(y,[O.moduleId]),v[f]=x)}var M,L=[];for(a=0;a<y.length;a++)f=y[a],N[f]&&N[f].hot._selfAccepted&&v[f]!==x&&!N[f].hot._selfInvalidated&&L.push({module:f,parents:N[f].parents.slice(),errorHandler:N[f].hot._selfAccepted});u("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete j[e]}(e)}));var S,Z,Y=y.slice();for(;Y.length>0;)if(f=Y.pop(),d=N[f]){var Q={},P=d.hot._disposeHandlers;for(c=0;c<P.length;c++)(r=P[c])(Q);for(l[f]=Q,d.hot.active=!1,delete N[f],delete b[f],c=0;c<d.children.length;c++){var U=N[d.children[c]];U&&((M=U.parents.indexOf(f))>=0&&U.parents.splice(M,1))}}for(f in b)if(Object.prototype.hasOwnProperty.call(b,f)&&(d=N[f]))for(Z=b[f],c=0;c<Z.length;c++)S=Z[c],(M=d.children.indexOf(S))>=0&&d.children.splice(M,1);u("apply"),void 0!==g&&(i=g,g=void 0);for(f in h=void 0,v)Object.prototype.hasOwnProperty.call(v,f)&&(e[f]=v[f]);var W=null;for(f in b)if(Object.prototype.hasOwnProperty.call(b,f)&&(d=N[f])){Z=b[f];var F=[];for(a=0;a<Z.length;a++)if(S=Z[a],r=d.hot._acceptedDependencies[S]){if(-1!==F.indexOf(r))continue;F.push(r)}for(a=0;a<F.length;a++){r=F[a];try{r(Z)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:f,dependencyId:Z[a],error:e}),n.ignoreErrored||W||(W=e)}}}for(a=0;a<L.length;a++){var A=L[a];f=A.module,s=A.parents,o=f;try{T(f)}catch(e){if("function"==typeof A.errorHandler)try{A.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:f,error:t,originalError:e}),n.ignoreErrored||W||(W=t),W||(W=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:f,error:e}),n.ignoreErrored||W||(W=e)}}if(W)return u("fail"),Promise.reject(W);if(_)return t(n).then((function(e){return y.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return u("idle"),new Promise((function(e){e(y)}))}(t=t||{})}function I(){if(_)return h||(h={}),_.forEach(G),_=void 0,!0}function G(t){Object.prototype.hasOwnProperty.call(h,t)||(h[t]=e[t])}var N={},j={0:0},D=[];function T(t){if(N[t])return N[t].exports;var n=N[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=s,s=[],c),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=N[e];if(!t)return T;var n=function(n){return t.hot.active?(N[n]?-1===N[n].parents.indexOf(e)&&N[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),T(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(t){T[e]=t}}};for(var a in T)Object.prototype.hasOwnProperty.call(T,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===p&&u("prepare"),y++,T.e(e).then(t,(function(e){throw t(),e}));function t(){y--,"prepare"===p&&(v[e]||O(e),0===y&&0===b&&C())}},n.t=function(e,t){return 1&t&&(e=n(e)),T.t(e,-2&t)},n}(t)),n.l=!0,n.exports}T.m=e,T.c=N,T.d=function(e,t,n){T.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},T.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,t){if(1&t&&(e=T(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(T.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)T.d(n,r,function(t){return e[t]}.bind(null,r));return n},T.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(t,"a",t),t},T.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},T.p="/info",T.h=function(){return i};var M=window.webpackJsonp=window.webpackJsonp||[],L=M.push.bind(M);M.push=t,M=M.slice();for(var S=0;S<M.length;S++)t(M[S]);var Z=L;D.push([29,1]),n()}([,,,function(e,t,n){var r=n(2),o=n(17);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(17,(function(){"string"==typeof(o=(o=n(17)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){var r=n(2),o=n(16);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(16,(function(){"string"==typeof(o=(o=n(16)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){var r=n(2),o=n(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(11,(function(){"string"==typeof(o=(o=n(11)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){var r=n(2),o=n(12);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(12,(function(){"string"==typeof(o=(o=n(12)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){var r=n(2),o=n(14);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(14,(function(){"string"==typeof(o=(o=n(14)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){var r=n(2),o=n(15);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(15,(function(){"string"==typeof(o=(o=n(15)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){var r=n(2),o=n(13);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(13,(function(){"string"==typeof(o=(o=n(13)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){var r=n(2),o=n(18);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(18,(function(){"string"==typeof(o=(o=n(18)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"._2aK8J_bxbFDHBejYU8GrlL:before{background-color:#6fc3df}._3vEtEopXHZC2qhHbHbXA2N:before{background-color:#8d82c4}._2gZCOIvE6Fht900lGQA4H7:before{background-color:#ec8d81}._26iJsWI5rAZ1lvXbIZ4cTL:before{background-color:#87c5a4}._337v8yRCp_PkTKRVeAhojj{animation:_337v8yRCp_PkTKRVeAhojj 0.7s ease-in-out forwards}@keyframes _337v8yRCp_PkTKRVeAhojj{0%{opacity:0}100%{opacity:1}}._3dWiFPhMcFpZHCVnZz-G7A{position:fixed;width:100vw;z-index:99}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU{align-items:center;background:#242a43;display:flex;justify-content:space-between;padding:10px 20px;width:100%}@media (min-width: 1024px){._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU{padding:10px 100px}}@media (min-width: 744px) and (max-width: 1023px){._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU{padding:10px 60px}}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU .WrC8im6U1W8HSvTXs8Ze0{cursor:pointer;height:60px}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU .WrC8im6U1W8HSvTXs8Ze0:hover{filter:invert(0.4) sepia(1) saturate(15) hue-rotate(180deg)}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU ._2LznZM-6tm1rtn2McFbGuB{font-size:18px;font-weight:600;text-transform:uppercase}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU ._2LznZM-6tm1rtn2McFbGuB a{color:#e3f6ff;text-decoration:none;transition:0.25s ease-in-out}._3dWiFPhMcFpZHCVnZz-G7A .I5XjlpZ4THqJYl7qQC4ZU ._2LznZM-6tm1rtn2McFbGuB a:hover{color:#5fcbff}\n",""]),o.locals={blueBG:"_2aK8J_bxbFDHBejYU8GrlL",purpleBG:"_3vEtEopXHZC2qhHbHbXA2N",orangeBG:"_2gZCOIvE6Fht900lGQA4H7",greenBG:"_26iJsWI5rAZ1lvXbIZ4cTL",fadeIn:"_337v8yRCp_PkTKRVeAhojj",wrapper:"_3dWiFPhMcFpZHCVnZz-G7A",container:"I5XjlpZ4THqJYl7qQC4ZU",headerLogo:"WrC8im6U1W8HSvTXs8Ze0",menu:"_2LznZM-6tm1rtn2McFbGuB"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,'.HiIrMPr83sfWUqMevhnBh:before{background-color:#6fc3df}.DanJkOMPUhQ5U4GePPJ0F:before{background-color:#8d82c4}.igtcjOZsJS5DMXEMSwOf6:before{background-color:#ec8d81}._1TCxLidwEhCALK2uiqb7EP:before{background-color:#87c5a4}._3juhxMuDBPdZ4jI4TI8NU0{animation:_3juhxMuDBPdZ4jI4TI8NU0 0.7s ease-in-out forwards}@keyframes _3juhxMuDBPdZ4jI4TI8NU0{0%{opacity:0}100%{opacity:1}}._1qeG1dUKsV4DFR3JTAwesG{align-items:center;display:flex;justify-content:center;align-items:flex-start;flex-direction:column;font-family:"Poppins";width:100%}._1qeG1dUKsV4DFR3JTAwesG ._3GxZZqqbVH46wDu7Fm-5Tl{height:0;opacity:0}._1qeG1dUKsV4DFR3JTAwesG ._2S1ACAGCDQTyFfMzIdC_Bu{opacity:1}._1qeG1dUKsV4DFR3JTAwesG ._3mQpfsH6Q43hoT3jwgAaym{margin:20px 0;text-align:center;width:100%;z-index:1}._1qeG1dUKsV4DFR3JTAwesG ._3mQpfsH6Q43hoT3jwgAaym>span{border-top:1px solid #00adff;border-bottom:1px solid #00adff;color:#00adff;cursor:pointer;padding:0 5px;transition:0.3s ease-in-out}._1qeG1dUKsV4DFR3JTAwesG ._3mQpfsH6Q43hoT3jwgAaym>span:hover{border-top:1px solid #006a9c;border-bottom:1px solid #006a9c;color:#006a9c}\n',""]),o.locals={blueBG:"HiIrMPr83sfWUqMevhnBh",purpleBG:"DanJkOMPUhQ5U4GePPJ0F",orangeBG:"igtcjOZsJS5DMXEMSwOf6",greenBG:"_1TCxLidwEhCALK2uiqb7EP",fadeIn:"_3juhxMuDBPdZ4jI4TI8NU0",wrapper:"_1qeG1dUKsV4DFR3JTAwesG",hideItem:"_3GxZZqqbVH46wDu7Fm-5Tl",showItem:"_2S1ACAGCDQTyFfMzIdC_Bu",ellipsis:"_3mQpfsH6Q43hoT3jwgAaym"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"._2PyHy7sLRnRoH_fRhtoyk6{height:60px;margin-left:auto;margin-right:auto;width:60px}._2PyHy7sLRnRoH_fRhtoyk6 .SrEFFHti3D6DMIFgEGVe2{animation:SrEFFHti3D6DMIFgEGVe2 2s linear infinite both}._2PyHy7sLRnRoH_fRhtoyk6 .SrEFFHti3D6DMIFgEGVe2 .rYSo3tW77Ts_ML_oCXZ_k{animation:rYSo3tW77Ts_ML_oCXZ_k 1.4s ease-in-out infinite both;fill:transparent;stroke:#2f3d4c;stroke-dasharray:285;stroke-linecap:round;stroke-width:8px;transform-origin:50% 50%}@keyframes SrEFFHti3D6DMIFgEGVe2{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes rYSo3tW77Ts_ML_oCXZ_k{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}\n",""]),o.locals={wrapper:"_2PyHy7sLRnRoH_fRhtoyk6",container:"SrEFFHti3D6DMIFgEGVe2",spinner:"rYSo3tW77Ts_ML_oCXZ_k"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"._2nC4kkxmLqIbqT8qg9HTLS:before{background-color:#6fc3df}.WgJdLrIgJ5HrTYStlPGYo:before{background-color:#8d82c4}._1voMIoJgYVaHYK5nCSFfVy:before{background-color:#ec8d81}._2MCOUSNTw88nWYrbsRyYX5:before{background-color:#87c5a4}._6iX5g9H7OK29YzRm4wC24{animation:_6iX5g9H7OK29YzRm4wC24 0.7s ease-in-out forwards}@keyframes _6iX5g9H7OK29YzRm4wC24{0%{opacity:0}100%{opacity:1}}.iw14ylo6fMYhkfYqWEt-g{background-color:#efeaea;border-radius:3px;height:30px;margin-bottom:10px;position:relative;width:100%}.iw14ylo6fMYhkfYqWEt-g ._65LzocTwirhzg97N05AEd{align-items:center;display:flex;justify-content:center;background-color:rgba(0,0,0,0.2);color:#e3f6ff;height:100%;left:0;padding:0 15px;position:absolute;top:0}.iw14ylo6fMYhkfYqWEt-g ._2t1i9AGxOwZ3C3mKtorodS{border-radius:3px;height:100%}.iw14ylo6fMYhkfYqWEt-g ._2WHg190bI0ERLsAQ5HoIuS{align-items:center;display:flex;justify-content:center;height:100%;position:absolute;right:10px;top:0}\n",""]),o.locals={blueBG:"_2nC4kkxmLqIbqT8qg9HTLS",purpleBG:"WgJdLrIgJ5HrTYStlPGYo",orangeBG:"_1voMIoJgYVaHYK5nCSFfVy",greenBG:"_2MCOUSNTw88nWYrbsRyYX5",fadeIn:"_6iX5g9H7OK29YzRm4wC24",wrapper:"iw14ylo6fMYhkfYqWEt-g",title:"_65LzocTwirhzg97N05AEd",gauge:"_2t1i9AGxOwZ3C3mKtorodS",score:"_2WHg190bI0ERLsAQ5HoIuS"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,'._2fwWU0zyDKlBt8tcY4lD-q:before{background-color:#6fc3df}.KzLcG_DvsV1ct93mUUfo8:before{background-color:#8d82c4}._11fEvvsSmGL8KyCxRgtyyD:before{background-color:#ec8d81}._1_uQgwrVhgj4B9p6bSxWaI:before{background-color:#87c5a4}._1TDasUhl4iElECHXffbCa5{animation:_1TDasUhl4iElECHXffbCa5 0.7s ease-in-out forwards}@keyframes _1TDasUhl4iElECHXffbCa5{0%{opacity:0}100%{opacity:1}}._34-j9UIQCWLlJsNoUyrYo7{display:flex;flex-wrap:wrap;border-top:2px solid #e4e4e4;max-width:1024px;width:100%}@media (max-width: 743px){._34-j9UIQCWLlJsNoUyrYo7{align-items:center;display:flex;justify-content:center;flex-direction:column;margin-top:-2px}}@media (min-width: 1024px){._34-j9UIQCWLlJsNoUyrYo7>:nth-child(odd){border-right:2px solid #e4e4e4}}@media (min-width: 744px) and (max-width: 1023px){._34-j9UIQCWLlJsNoUyrYo7>:nth-child(odd){border-right:2px solid #e4e4e4}}._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ{display:table-cell;border-bottom:2px solid #e4e4e4;padding:30px;width:50%}@media (max-width: 743px){._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ{width:100%}}._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ>:first-child{align-items:center;display:flex;justify-content:center;flex-direction:column}._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ>:first-child img{filter:invert(0.55) sepia(1) saturate(9) hue-rotate(180deg);height:60px;margin-bottom:20px;width:60px}._34-j9UIQCWLlJsNoUyrYo7 ._1TImD1REVEVrBVNXuNjeAQ>:first-child .CDm1VUF_3Fy4K32rNdPLl{font-family:"Poppins";font-size:30px;letter-spacing:2px;margin-bottom:10px;text-transform:uppercase}\n',""]),o.locals={blueBG:"_2fwWU0zyDKlBt8tcY4lD-q",purpleBG:"KzLcG_DvsV1ct93mUUfo8",orangeBG:"_11fEvvsSmGL8KyCxRgtyyD",greenBG:"_1_uQgwrVhgj4B9p6bSxWaI",fadeIn:"_1TDasUhl4iElECHXffbCa5",wrapper:"_34-j9UIQCWLlJsNoUyrYo7",itemDetails:"_1TImD1REVEVrBVNXuNjeAQ",title:"CDm1VUF_3Fy4K32rNdPLl"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,".MzRjZrqlOiex9KKm0C86K:before{background-color:#6fc3df}._3ZbL4qkaafrGaa6bDD5Ohy:before{background-color:#8d82c4}._17WnY4MLk-lnscsPDRMe2n:before{background-color:#ec8d81}.yE6XgOJPr4XZWVIfs-upL:before{background-color:#87c5a4}._1jzDvpHIe5dD1mKYdtcNGm{animation:_1jzDvpHIe5dD1mKYdtcNGm 0.7s ease-in-out forwards}@keyframes _1jzDvpHIe5dD1mKYdtcNGm{0%{opacity:0}100%{opacity:1}}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG{display:flex;flex-wrap:wrap;padding:0 30px}@media (max-width: 743px){._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG{align-items:center;display:flex;justify-content:center}}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG ._3-2ZZHLcWsQwUBsXEHMZHe{background-color:#00adff;color:#e3f6ff}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG>div{border:1px solid #00adff;border-radius:3px;cursor:pointer;font-size:18px;margin-bottom:10px;padding:5px 15px;transition:0.2s ease-in-out}@media (max-width: 743px){._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG>div{font-size:14px}}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG>div:hover{background-color:#00adff;color:#e3f6ff;transition:0.2s ease-in-out}._2JmutWC6lymD2K0g7huoyZ ._3IAKRpon0G2r3zN60_nvfG>:not(:last-child){margin-right:10px}._2JmutWC6lymD2K0g7huoyZ ._2dFX35h9WspzONbXhOQVQR{align-items:center;display:flex;justify-content:center;border-bottom:2px solid #e4e4e4;flex-direction:column;padding:30px;margin-bottom:30px}\n",""]),o.locals={blueBG:"MzRjZrqlOiex9KKm0C86K",purpleBG:"_3ZbL4qkaafrGaa6bDD5Ohy",orangeBG:"_17WnY4MLk-lnscsPDRMe2n",greenBG:"yE6XgOJPr4XZWVIfs-upL",fadeIn:"_1jzDvpHIe5dD1mKYdtcNGm",wrapper:"_2JmutWC6lymD2K0g7huoyZ",btnContainer:"_3IAKRpon0G2r3zN60_nvfG",skillSelected:"_3-2ZZHLcWsQwUBsXEHMZHe",skillContainer:"_2dFX35h9WspzONbXhOQVQR"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,'._2TfMUPFQs3za7j9GFiEXIm:before{background-color:#6fc3df}._1jvZvCsvuVx1Vcz1RtnjcH:before{background-color:#8d82c4}._3TJOo9NQ3RJQryfsZRFjcG:before{background-color:#ec8d81}._2_9-g4-bvrIHQKEHStkV0L:before{background-color:#87c5a4}.Rj8zPEamYNJcqY89zonxT{animation:Rj8zPEamYNJcqY89zonxT 0.7s ease-in-out forwards}@keyframes Rj8zPEamYNJcqY89zonxT{0%{opacity:0}100%{opacity:1}}.N995OopC4BOda3l6bwent{align-items:center;display:flex;justify-content:center;flex-direction:column;padding:80px 20px 30px}@media (min-width: 1024px){.N995OopC4BOda3l6bwent{padding:80px 100px 30px}}@media (min-width: 744px) and (max-width: 1023px){.N995OopC4BOda3l6bwent{padding:80px 60px 30px}}.N995OopC4BOda3l6bwent ._3PHd92s2uflpDHeKPOUYYc{align-items:center;display:flex;justify-content:center;flex-direction:column;height:50vh;width:100%}.N995OopC4BOda3l6bwent ._3PHd92s2uflpDHeKPOUYYc>:first-child{border-bottom:1px solid #00adff;border-top:1px solid #00adff;color:white;font-size:44px;letter-spacing:2px;line-height:50px;padding:20px;margin-bottom:30px;text-align:center;text-shadow:3px 0px #00adff;text-transform:uppercase;width:fit-content}.N995OopC4BOda3l6bwent ._3PHd92s2uflpDHeKPOUYYc>:last-child{color:white;font-family:"Poppins";font-size:22px;letter-spacing:1px;text-align:center;text-shadow:1px 1px 1px #006eff,3px 1px 5px #00adff}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY{align-items:center;display:flex;justify-content:center;background-color:white;box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);margin-bottom:20px;max-width:1024px;padding:10px 0;position:sticky;text-align:center;top:80px;width:100%;z-index:99}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY>:not(:last-child){border-right:2px solid #e4e4e4}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0{align-items:center;display:flex;justify-content:center;flex-direction:column;width:100%}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0:hover{color:#00adff;cursor:pointer}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0>span{font-size:24px;padding:5px;text-transform:uppercase;transition:0.3s ease}@media (max-width: 743px){.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0>span{font-size:20px}}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0>div{width:0;height:2px}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._1AsFQShaOL4dcfHDTcLrV0 ._3-IFCfunCHNZgeVdl8prvk{border:1px solid #00adff;transition:0.3s ease;width:50px}.N995OopC4BOda3l6bwent ._1EmCTo3H8WrrOC5Mx6TSGY ._2BF4m23O5U_GUw1R0OQZRJ{color:#00adff}.N995OopC4BOda3l6bwent ._17WULEHQOTuoNL3aY0af76{background-color:white;max-width:1024px;padding:30px 0px;width:100%}\n',""]),o.locals={blueBG:"_2TfMUPFQs3za7j9GFiEXIm",purpleBG:"_1jvZvCsvuVx1Vcz1RtnjcH",orangeBG:"_3TJOo9NQ3RJQryfsZRFjcG",greenBG:"_2_9-g4-bvrIHQKEHStkV0L",fadeIn:"Rj8zPEamYNJcqY89zonxT",wrapper:"N995OopC4BOda3l6bwent",banner:"_3PHd92s2uflpDHeKPOUYYc",infoMenu:"_1EmCTo3H8WrrOC5Mx6TSGY",infoDetail:"_1AsFQShaOL4dcfHDTcLrV0",showUnderline:"_3-IFCfunCHNZgeVdl8prvk",selected:"_2BF4m23O5U_GUw1R0OQZRJ",infoDetails:"_17WULEHQOTuoNL3aY0af76"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"._182LUbEvXp2O1YtDpaKz5G:before{background-color:#6fc3df}._3volIAORSXk6r2xBMhQvFm:before{background-color:#8d82c4}.UK5Z6keCGjEAQRs9MrWsh:before{background-color:#ec8d81}._1nP43wcZeTjsN-3IbYWhNu:before{background-color:#87c5a4}._2SQoi_GO-f_9-mge8LTbw1{animation:_2SQoi_GO-f_9-mge8LTbw1 0.7s ease-in-out forwards}@keyframes _2SQoi_GO-f_9-mge8LTbw1{0%{opacity:0}100%{opacity:1}}._1NxHcyD_YENzOpQJfo9aCt{align-items:center;display:flex;justify-content:center;background-color:#05060a;border-top:1px solid #151a2b;flex-direction:column;padding:30px 0 60px}@media (max-width: 743px){._1NxHcyD_YENzOpQJfo9aCt{padding:30px 20px 60px}}._1NxHcyD_YENzOpQJfo9aCt ._2WSZJEr33czITMJQd9N5iu{align-items:center;display:flex;justify-content:center}._1NxHcyD_YENzOpQJfo9aCt ._2WSZJEr33czITMJQd9N5iu img{cursor:pointer;filter:invert(0.55) sepia(1) saturate(9) hue-rotate(180deg);height:25px;width:25px}._1NxHcyD_YENzOpQJfo9aCt ._2WSZJEr33czITMJQd9N5iu>:not(:last-child){margin-right:25px}._1NxHcyD_YENzOpQJfo9aCt ._2_P6ZAr99WO3YWvMgLsZW6{color:#e3f6ff;letter-spacing:1px;padding-top:20px;text-align:center;text-transform:uppercase}\n",""]),o.locals={blueBG:"_182LUbEvXp2O1YtDpaKz5G",purpleBG:"_3volIAORSXk6r2xBMhQvFm",orangeBG:"UK5Z6keCGjEAQRs9MrWsh",greenBG:"_1nP43wcZeTjsN-3IbYWhNu",fadeIn:"_2SQoi_GO-f_9-mge8LTbw1",wrapper:"_1NxHcyD_YENzOpQJfo9aCt",imgContainer:"_2WSZJEr33czITMJQd9N5iu",myName:"_2_P6ZAr99WO3YWvMgLsZW6"},t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,"",""]),t.default=o},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r)()(!1);o.push([e.i,'._304LMmFVCa_iu91VotwXOQ:before{background-color:#6fc3df}._31R8jtehNBgg8wmhmDTECh:before{background-color:#8d82c4}._2-1GtOs4Qo7SeTIsPXxUdg:before{background-color:#ec8d81}.f9ayQpXREIaERaPOX4BwL:before{background-color:#87c5a4}._2-QOKCgaOPHVLUK4l-YHpQ{animation:_2-QOKCgaOPHVLUK4l-YHpQ 0.7s ease-in-out forwards}@keyframes _2-QOKCgaOPHVLUK4l-YHpQ{0%{opacity:0}100%{opacity:1}}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body{margin:0;padding:0;font-family:"Concert One", "Poppins";background-color:#ffffff}@media (max-width: 743px){body{font-family:"Poppins"}}\n',""]),o.locals={blueBG:"_304LMmFVCa_iu91VotwXOQ",purpleBG:"_31R8jtehNBgg8wmhmDTECh",orangeBG:"_2-1GtOs4Qo7SeTIsPXxUdg",greenBG:"f9ayQpXREIaERaPOX4BwL",fadeIn:"_2-QOKCgaOPHVLUK4l-YHpQ"},t.default=o},,,function(e,t,n){var r=n(2),o=n(19);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(19,(function(){"string"==typeof(o=(o=n(19)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},,,,,function(e,t,n){var r=n(2),o=n(20);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=r(o,a);if(!o.locals||e.hot.invalidate){var l=o.locals;e.hot.accept(20,(function(){"string"==typeof(o=(o=n(20)).__esModule?o.default:o)&&(o=[[e.i,o,""]]),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(l,o.locals)?(l=o.locals,i(o)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=o.locals||{}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(22),i=n.n(a),l="info/assets/headerLogo.a5ec7dd01cba2067863a8b4489f132e1.png",s="info/assets/like.02cf5245bd0c9db3edb0cd248f150bd1.svg",c="info/assets/dislike.46aec5a943b73788a734bc8078cb81d4.svg",d="info/assets/funFact.f1deaa38048e4605f936ca73d9a259cc.png",f="info/assets/bucketList.c7e810918e7585028f8f390a986e4948.svg",p="info/assets/web.55518e922aedd2be5dc236cb8e4ee60b.svg",u="info/assets/database.bf6b3a709ba5f241f4177d0a9e161f87.svg",m="info/assets/otherTools.4db3101340393f043edfc2da20b838bf.svg",h="info/assets/scrum.fbd26b9f09a5302169613b95fe7796e3.svg",g="info/assets/linkedin.7defd339fd92d3e5fa034b24a5f10ed6.svg",_="info/assets/github.e0df113a06b1885368036a2a16d99697.svg",b="info/assets/email.2c9fdd96dc9689b6338372f203f31401.svg",y=n(5),v=n.n(y),x=function(){return o.a.createElement("div",{className:v.a.wrapper},o.a.createElement("div",{className:v.a.container},o.a.createElement("a",{href:"/",target:"_self"},o.a.createElement("img",{src:l,alt:"Header Logo",className:v.a.headerLogo})),o.a.createElement("div",{className:v.a.menu},o.a.createElement("a",{href:"/",target:"_self"},"Home"))))},w=n(6),E=n.n(w),k=function(){return(k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},O=function(e){var t=e.items,n=e.isEllipted,a=void 0!==n&&n,i=e.minItems,l=void 0===i?0:i,s=Object(r.useState)(a),c=s[0],d=s[1];return o.a.createElement("div",{className:E.a.wrapper},t.map((function(e,t){return a&&t>=l?"":o.a.createElement("li",{key:t+"-"+e},e)})),a&&t.map((function(e,t){var n=c?{}:{transition:"opacity 0.5s ease-in-out "+.1*(t-l)+"s"};return t>=l&&o.a.createElement("li",{key:t+"-"+e,className:c?E.a.hideItem:E.a.showItem,style:k({},n)},e)})),a&&t.length>l&&o.a.createElement("div",{className:E.a.ellipsis,onClick:function(){return d(!c)}},o.a.createElement("span",null,"Show "+(c?"More":"Less")," ")))},C=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.join(" ")},H=n(9),I=n.n(H),G=function(e){var t=e.className,n=void 0===t?"":t;return o.a.createElement("div",{className:C(I.a.wrapper,n)},o.a.createElement("svg",{className:I.a.container,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("circle",{className:I.a.spinner,cx:"50",cy:"50",r:"45"})))},N=n(7),j=n.n(N),D=function(e){var t=e.title,n=e.score,r=e.color,a=void 0===r?"00adff":r;return o.a.createElement("div",{className:j.a.wrapper},o.a.createElement("div",{className:j.a.title},t),o.a.createElement("div",{className:j.a.gauge,style:{backgroundColor:a,width:10*n+"%"}}),o.a.createElement("div",{className:j.a.score},n+"/10"))},T=[{icon:s,title:"I Like",details:["Biking","Jogging","Playing Guitar","Playing Cajon","Playing Keyboard (Still learning :D )","Mountain Hiking","Listening to christian music","Listening to christian podcast","Joining christian church activites","and Going to an open field like parks and lie under a tree in a cloudy day while listening to my favorite music. "]},{icon:c,title:"I don't like",details:["Beer","Coffee","Onions in my salad","Bell pepper even nicely cook","Swimming and/or getting stuck in the middle of the ocean (Thalassophobia)"]},{icon:d,title:"Fun Facts",details:["When I was in Japan, I was stuck and can't find the exit for almost 30mins in Shinjuku Station, Japan's Largest Railway Station, ","I was bitten by a dog with rabbies when I was 7 or 8 yrs. old. Luckily, I survive.","When I was young, my friends and I almost burned down a field and our houses because of fireworks.","We also almost got blind when we try to experiment with firework's powder and then it suddenly light up.","I enjoy watching people's everyday life in one of Japan's busiest prefacture, Kawasaki.","I still drink milk every morning and sometimes before going to bed."]},{icon:f,title:"Bucket Lists",details:["Visit Switzerland to see Swiss Alps, ride Glacier Express in winter and go to Jungfraujoch - Top of Europe in winter as well.","See Aurora Borealis either in Norway or in Iceland.","Experience a Business-Class and First-Class Flight Seat.","Climb Mt.Fuji in Japan.","Learn how to skii or snowboard.","I have many more but can't share all of them here. :) "]}],M=n(8),L=n.n(M),S=function(){return o.a.createElement("div",{className:C(L.a.wrapper,L.a.fadeIn)},T.map((function(e,t){return o.a.createElement("div",{key:t+"-"+e.title,className:L.a.itemDetails},o.a.createElement("div",null,o.a.createElement("img",{src:e.icon,alt:e.title}),o.a.createElement("div",{className:L.a.title},e.title),o.a.createElement(O,{items:e.details,isEllipted:!0,minItems:3})))})))},Z=[{title:"WEB",icon:p,color:"rgb(146 158 228)",skills:[{name:"ReactJS",score:9},{name:"JavaScript",score:9},{name:"HTML",score:9},{name:"CSS / SASS / SCSS",score:9},{name:"TypeScript",score:8},{name:"Webpack",score:8},{name:"NodeJS",score:7},{name:"ExpressJS",score:7},{name:"Vue",score:4},{name:"AngularJS",score:4}]},{title:"DATABASE",icon:u,color:"rgb(162 238 192)",skills:[{name:"Redis",score:8},{name:"Firebase",score:7},{name:"MySQL",score:5},{name:"PostgreSQL",score:5},{name:"MongoDB",score:4}]},{title:"METHODOLOGIES",icon:h,color:"rgb(237 239 128)",skills:[{name:"SCRUM-AGILE",score:9},{name:"SAFe (Scaled Agile Framework)",score:7}]},{title:"OTHER TOOLS",icon:m,color:"rgb(255 134 171)",skills:[{name:"GIT",score:9},{name:"Docker",score:8},{name:"VS Code Remote Container",score:7},{name:"Heroku",score:4}]}],Y=n(4),Q=n.n(Y),P=function(){return(P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},U=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,l=a.length;i<l;i++,o++)r[o]=a[i];return r},W=function(e){var t=e.map((function(e){return e.skills.map((function(t){return P(P({},t),{color:e.color})}))})).flat(1);return U(t).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})).sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0}))},F=function(){var e=Object(r.useState)("all"),t=e[0],n=e[1],a=Object(r.useState)(W(Z)),i=a[0],l=a[1],s=function(e){var t=e.currentTarget.id.toLowerCase();if(n(t),"all"===t)l(W(Z));else{var r=Z.filter((function(e){return e.title.toLowerCase()===t}));l(W(r))}};return o.a.createElement("div",{className:C(Q.a.wrapper,Q.a.fadeIn)},o.a.createElement("div",{className:Q.a.btnContainer},o.a.createElement("div",{id:"ALL",className:"all"===t?Q.a.skillSelected:"",onClick:s},"ALL"),Z.map((function(e){return o.a.createElement("div",{id:e.title,key:e.title,className:t===e.title.toLowerCase()?Q.a.skillSelected:"",onClick:s},e.title)}))),o.a.createElement("div",{className:Q.a.skillContainer},i.map((function(e){return o.a.createElement(D,{key:e.name,title:e.name,score:e.score,color:e.color})}))))},A="Me, Myself and I",J="Skills, Fun Facts, Likes & Dislikes, and more...",B=[{key:"aboutMe",value:"About Me",component:S},{key:"skills",value:"Skills",component:F}],R=n(3),z=n.n(R),V=function(e){return window.localStorage.setItem("infoType",e)},K=function(){var e=Object(r.useState)(""),t=e[0],n=e[1];Object(r.useEffect)((function(){var e=window.localStorage.getItem("infoType");e||V(B[0].key),n(e||B[0].key)}),[]);var a=function(e){n(e.currentTarget.id),V(e.currentTarget.id)};return o.a.createElement("div",{className:z.a.wrapper,style:{background:"url(info/assets/banner.5fb12895e002a1d6cdd9bb78ba16413b.jpg) center center / cover no-repeat fixed"}},o.a.createElement("div",{className:z.a.banner},o.a.createElement("div",null,A),o.a.createElement("div",null,J)),o.a.createElement("div",{className:z.a.infoMenu},B.map((function(e,n){return o.a.createElement("div",{id:e.key,key:n+"-"+e.key,className:z.a.infoDetail,onClick:a},o.a.createElement("span",{className:C(t===e.key&&z.a.selected)},e.value),o.a.createElement("div",{className:C(t===e.key&&z.a.showUnderline)}))}))),o.a.createElement("div",{className:z.a.infoDetails},{skills:o.a.createElement(F,null),aboutMe:o.a.createElement(S,null)}[t]||o.a.createElement(S,null)))},X={name:"© John Christopher Gonzaga",linkItems:[{name:"Github",link:"https://github.com/JCGonzaga01",target:"_blank",icon:_},{name:"LinkedIn",link:"https://www.linkedin.com/in/jc-gonzaga/",target:"_blank",icon:g},{name:"Email",link:"mailto:gonzaga.jc1993@gmail.com",target:"_blank",icon:b}]},q=n(10),$=n.n(q),ee=function(){return o.a.createElement("div",{className:$.a.wrapper},o.a.createElement("div",{className:$.a.imgContainer},X.linkItems.map((function(e,t){return o.a.createElement("a",{key:t+"="+e.name,href:e.link,target:e.target},o.a.createElement("img",{src:e.icon,alt:e.name}))}))),o.a.createElement("div",{className:$.a.myName},X.name))},te=n(23),ne=n.n(te),re=function(){return o.a.createElement("div",{className:ne.a.wrapper},o.a.createElement(x,null),o.a.createElement(K,null),o.a.createElement(ee,null))},oe=(n(28),o.a.createElement(r.Suspense,{fallback:o.a.createElement(G,null)},o.a.createElement(re,null)));i.a.render(oe,document.getElementById("root"))}]);