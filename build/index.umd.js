(function(_,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],y):(_=typeof globalThis<"u"?globalThis:_||self,y(_["hd-ui"]={},_.require$$0))})(this,function(_,y){"use strict";var I={},je={get exports(){return I},set exports(c){I=c}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function ke(){if(ae)return W;ae=1;var c=y,l=Symbol.for("react.element"),b=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,C=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function j(d,v,w){var g,m={},T=null,k=null;w!==void 0&&(T=""+w),v.key!==void 0&&(T=""+v.key),v.ref!==void 0&&(k=v.ref);for(g in v)s.call(v,g)&&!O.hasOwnProperty(g)&&(m[g]=v[g]);if(d&&d.defaultProps)for(g in v=d.defaultProps,v)m[g]===void 0&&(m[g]=v[g]);return{$$typeof:l,type:d,key:T,ref:k,props:m,_owner:C.current}}return W.Fragment=b,W.jsx=j,W.jsxs=j,W}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe;function Ne(){return oe||(oe=1,process.env.NODE_ENV!=="production"&&function(){var c=y,l=Symbol.for("react.element"),b=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),d=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),B=Symbol.iterator,M="@@iterator";function U(e){if(e===null||typeof e!="object")return null;var r=B&&e[B]||e[M];return typeof r=="function"?r:null}var D=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function R(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Me("error",e,t)}}function Me(e,r,t){{var n=D.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ue=!1,Ve=!1,He=!1,ze=!1,$e=!1,ie;ie=Symbol.for("react.module.reference");function Je(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===O||$e||e===C||e===w||e===g||ze||e===k||Ue||Ve||He||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===m||e.$$typeof===j||e.$$typeof===d||e.$$typeof===v||e.$$typeof===ie||e.getModuleId!==void 0))}function Ge(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function se(e){return e.displayName||"Context"}function P(e){if(e==null)return null;if(typeof e.tag=="number"&&R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case b:return"Portal";case O:return"Profiler";case C:return"StrictMode";case w:return"Suspense";case g:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case d:var r=e;return se(r)+".Consumer";case j:var t=e;return se(t._context)+".Provider";case v:return Ge(e,e.render,"ForwardRef");case m:var n=e.displayName||null;return n!==null?n:P(e.type)||"Memo";case T:{var i=e,u=i._payload,o=i._init;try{return P(o(u))}catch{return null}}}return null}var N=Object.assign,V=0,ce,ue,le,fe,de,ve,he;function me(){}me.__reactDisabledLog=!0;function Xe(){{if(V===0){ce=console.log,ue=console.info,le=console.warn,fe=console.error,de=console.group,ve=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:me,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function Ke(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:N({},e,{value:ce}),info:N({},e,{value:ue}),warn:N({},e,{value:le}),error:N({},e,{value:fe}),group:N({},e,{value:de}),groupCollapsed:N({},e,{value:ve}),groupEnd:N({},e,{value:he})})}V<0&&R("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var K=D.ReactCurrentDispatcher,Z;function z(e,r,t){{if(Z===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Z=n&&n[1]||""}return`
`+Z+e}}var Q=!1,$;{var Ze=typeof WeakMap=="function"?WeakMap:Map;$=new Ze}function pe(e,r){if(!e||Q)return"";{var t=$.get(e);if(t!==void 0)return t}var n;Q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=K.current,K.current=null,Xe();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(S){n=S}Reflect.construct(e,[],o)}else{try{o.call()}catch(S){n=S}e.call(o.prototype)}}else{try{throw Error()}catch(S){n=S}e()}}catch(S){if(S&&n&&typeof S.stack=="string"){for(var a=S.stack.split(`
`),E=n.stack.split(`
`),h=a.length-1,p=E.length-1;h>=1&&p>=0&&a[h]!==E[p];)p--;for(;h>=1&&p>=0;h--,p--)if(a[h]!==E[p]){if(h!==1||p!==1)do if(h--,p--,p<0||a[h]!==E[p]){var x=`
`+a[h].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),typeof e=="function"&&$.set(e,x),x}while(h>=1&&p>=0);break}}}finally{Q=!1,K.current=u,Ke(),Error.prepareStackTrace=i}var L=e?e.displayName||e.name:"",Se=L?z(L):"";return typeof e=="function"&&$.set(e,Se),Se}function Qe(e,r,t){return pe(e,!1)}function qe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function J(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,qe(e));if(typeof e=="string")return z(e);switch(e){case w:return z("Suspense");case g:return z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case v:return Qe(e.render);case m:return J(e.type,r,t);case T:{var n=e,i=n._payload,u=n._init;try{return J(u(i),r,t)}catch{}}}return""}var G=Object.prototype.hasOwnProperty,ye={},be=D.ReactDebugCurrentFrame;function X(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);be.setExtraStackFrame(t)}else be.setExtraStackFrame(null)}function er(e,r,t,n,i){{var u=Function.call.bind(G);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var E=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(h){a=h}a&&!(a instanceof Error)&&(X(i),R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),X(null)),a instanceof Error&&!(a.message in ye)&&(ye[a.message]=!0,X(i),R("Failed %s type: %s",t,a.message),X(null))}}}var rr=Array.isArray;function q(e){return rr(e)}function tr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function nr(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function Re(e){if(nr(e))return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",tr(e)),ge(e)}var H=D.ReactCurrentOwner,ar={key:!0,ref:!0,__self:!0,__source:!0},Ee,_e,ee;ee={};function or(e){if(G.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ir(e){if(G.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function sr(e,r){if(typeof e.ref=="string"&&H.current&&r&&H.current.stateNode!==r){var t=P(H.current.type);ee[t]||(R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(H.current.type),e.ref),ee[t]=!0)}}function cr(e,r){{var t=function(){Ee||(Ee=!0,R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ur(e,r){{var t=function(){_e||(_e=!0,R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var lr=function(e,r,t,n,i,u,o){var a={$$typeof:l,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function fr(e,r,t,n,i){{var u,o={},a=null,E=null;t!==void 0&&(Re(t),a=""+t),ir(r)&&(Re(r.key),a=""+r.key),or(r)&&(E=r.ref,sr(r,i));for(u in r)G.call(r,u)&&!ar.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var h=e.defaultProps;for(u in h)o[u]===void 0&&(o[u]=h[u])}if(a||E){var p=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&cr(o,p),E&&ur(o,p)}return lr(e,a,E,i,n,H.current,o)}}var re=D.ReactCurrentOwner,Te=D.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}var te;te=!1;function ne(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function we(){{if(re.current){var e=P(re.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function dr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var xe={};function vr(e){{var r=we();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=vr(r);if(xe[t])return;xe[t]=!0;var n="";e&&e._owner&&e._owner!==re.current&&(n=" It was passed a child from "+P(e._owner.type)+"."),A(e),R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),A(null)}}function Oe(e,r){{if(typeof e!="object")return;if(q(e))for(var t=0;t<e.length;t++){var n=e[t];ne(n)&&Ce(n,r)}else if(ne(e))e._store&&(e._store.validated=!0);else if(e){var i=U(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)ne(o.value)&&Ce(o.value,r)}}}function hr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===v||r.$$typeof===m))t=r.propTypes;else return;if(t){var n=P(r);er(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!te){te=!0;var i=P(r);R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function mr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){A(e),R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),A(null);break}}e.ref!==null&&(A(e),R("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function Pe(e,r,t,n,i,u){{var o=Je(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E=dr(i);E?a+=E:a+=we();var h;e===null?h="null":q(e)?h="array":e!==void 0&&e.$$typeof===l?(h="<"+(P(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):h=typeof e,R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",h,a)}var p=fr(e,r,t,i,u);if(p==null)return p;if(o){var x=r.children;if(x!==void 0)if(n)if(q(x)){for(var L=0;L<x.length;L++)Oe(x[L],e);Object.freeze&&Object.freeze(x)}else R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(x,e)}return e===s?mr(p):hr(p),p}}function pr(e,r,t){return Pe(e,r,t,!0)}function yr(e,r,t){return Pe(e,r,t,!1)}var br=yr,gr=pr;Y.Fragment=s,Y.jsx=br,Y.jsxs=gr}()),Y}(function(c){process.env.NODE_ENV==="production"?c.exports=ke():c.exports=Ne()})(je);const Fe=I.Fragment,f=I.jsx,F=I.jsxs,Rr="",De=()=>f("div",{className:"hdui-linear-loader loader-container",children:f("div",{className:"linear-loader-surface",children:f("div",{className:"linear-loader-animated-surface"})})}),Ae=c=>{const l=y.useRef(null);return y.useEffect(()=>{if(l.current){const b=l.current.getTotalLength();l.current.style.setProperty("--dasharray",b.toFixed(2)+"px")}},[]),f("div",{className:"hdui-circular-loader loader-container",children:F("svg",{className:"circular-loader-surface",width:c.width,children:[f("circle",{cx:"50%",cy:"50%",r:"50%",stroke:c.backgroundColor}),f("circle",{cx:"50%",cy:"50%",r:"50%",className:"cover",stroke:c.loaderColor||"rgb(52, 52, 52)",ref:l}),f("div",{className:"circular-loader-animated-surface",children:"H"})]})})},Er="",Le=({ballColor:c,containerColor:l})=>{const b=y.useRef(null);return y.useEffect(()=>{b.current&&(c&&b.current.style.setProperty("--bouncyBallColor",c),l&&b.current.style.setProperty("--bouncyBallContainerColor",l))},[]),F("div",{className:"hd-ui-bouncy-loader loader-container",ref:b,children:[f("div",{className:"ball"}),f("div",{className:"ball"}),f("div",{className:"ball"}),f("div",{className:"ball"})]})},_r="",Ie=({onOpen:c,onClose:l})=>F("div",{className:"hd-ui-hamurger hamburger-container",children:[f("input",{type:"checkbox",id:"ham-menu1",hidden:!0,onChange:s=>{s.target.checked?c&&c(s):l&&l(s)},title:"HamBurger"}),F("label",{className:"container__inner",htmlFor:"ham-menu1",children:[f("div",{className:"stroke1 stroke"}),f("div",{className:"stroke2 stroke"}),f("div",{className:"stroke3 stroke"})]})]}),Tr="",We=({containerStyle:c,children:l,torchStyle:b})=>{const s=y.useRef(null);return y.useEffect(()=>{if(b)try{let d="";Object.entries(b).forEach(([v,w])=>{v!=="size"?d+=`${v}:${w};`:d+=`width: ${(Number(b.size)*100).toFixed(2)}%;`}),s.current&&s.current.setAttribute("style",d)}catch(d){console.error(d),console.log("Incorrect style format for `torchStyle` prop")}},[]),F("div",{className:"hd-ui-torchbox torch-box-container",onMouseOver:()=>{s.current&&(s.current.style.visibility="visible",s.current.style.opacity="1")},onMouseOut:()=>{s.current&&(s.current.style.visibility="hidden",s.current.style.opacity="0")},onMouseMove:d=>{d.stopPropagation();const{top:v,left:w}=d.currentTarget.getBoundingClientRect();s.current&&s.current.animate({left:`${d.clientX-w}px`,top:`${d.clientY-v}px`},{duration:500,fill:"forwards"})},children:[f("div",{ref:s,className:"torch-shadow"}),f("div",{className:"torch-shadow-overlay"}),f("div",{className:"torch-box-container__child-container",style:c,children:l})]})},wr="",Ye=({open:c=!1,closeHandler:l,showOverlay:b=!0,keepModalCentered:s=!0,TransitionStyle:C="fade",children:O,closeOnOverlayClick:j=!0,MouseEvent:d,modalStyle:v})=>{const[w,g]=y.useState(!1),m=y.useRef(null),T=y.useRef(null);return y.useEffect(()=>{if(!s&&d!==void 0&&m.current){const k=m.current.offsetWidth,B=m.current.offsetHeight;let M=d.clientX,U=d.clientY;M+k>window.innerWidth&&(M=window.innerWidth-k-10),U+B>window.innerHeight&&(U=window.innerHeight-B-10),m.current.style.setProperty("left",`${M}px`),m.current.style.setProperty("top",`${U}px`)}!c&&T.current&&m.current&&(T.current.style.removeProperty("animation"),m.current.style.removeProperty("animation"),setTimeout(()=>{T.current&&m.current&&(T.current.style.animation="fade 300ms ease reverse forwards",m.current.style.animation=`${C} 200ms ease reverse forwards`)},0)),c&&g(!0)},[c]),f(Fe,{children:w&&F("div",{className:"hd-ui-modal modal-container",children:[f("div",{className:"hd-ui-modal-overlay","data-visible":b,onClick:j?l:void 0,ref:T,style:{animation:"fade 400ms ease"}}),f("div",{className:"modal-child-container","data-centered":s,"aria-modal":!0,style:{maxWidth:`${window.innerWidth}px`,maxHeight:`${window.innerHeight}px`,animation:`${C} 300ms ease`,...v},ref:m,onAnimationEnd:c?void 0:()=>g(!1),children:O})]})})},Be=({Loader:c,onVisibleHandler:l,endOfData:b})=>{const s=y.useRef(null),C=y.useRef(new IntersectionObserver(([O])=>{O.isIntersecting&&l&&l()}));return y.useEffect(()=>{s.current&&C.current.observe(s.current)},[]),f("div",{className:"hd-ui-lazy-loader lazy-loader-container",ref:s,children:!b&&c})};_.BouncyBalls=Le,_.CircularLoader=Ae,_.HamBurger=Ie,_.LazyLoader=Be,_.LinearLoader=De,_.Modal=Ye,_.TorchBox=We,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
