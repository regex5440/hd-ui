import Ce, { useRef as cr, useEffect as lr } from "react";
import C from "prop-types";
var q = {}, fr = {
  get exports() {
    return q;
  },
  set exports(y) {
    q = y;
  }
}, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function dr() {
  if (we)
    return I;
  we = 1;
  var y = Ce, g = Symbol.for("react.element"), T = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, F = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(d, f, O) {
    var m, E = {}, w = null, Y = null;
    O !== void 0 && (w = "" + O), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (Y = f.ref);
    for (m in f)
      l.call(f, m) && !N.hasOwnProperty(m) && (E[m] = f[m]);
    if (d && d.defaultProps)
      for (m in f = d.defaultProps, f)
        E[m] === void 0 && (E[m] = f[m]);
    return { $$typeof: g, type: d, key: w, ref: Y, props: E, _owner: F.current };
  }
  return I.Fragment = T, I.jsx = P, I.jsxs = P, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function vr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Ce, g = Symbol.for("react.element"), T = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), d = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), ee = Symbol.iterator, Pe = "@@iterator";
    function Se(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var S = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        je("error", e, t);
      }
    }
    function je(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, Fe = !1, Ne = !1, De = !1, Ae = !1, re;
    re = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === N || Ae || e === F || e === O || e === m || De || e === Y || ke || Fe || Ne || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === E || e.$$typeof === P || e.$$typeof === d || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case T:
          return "Portal";
        case N:
          return "Profiler";
        case F:
          return "StrictMode";
        case O:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return te(r) + ".Consumer";
          case P:
            var t = e;
            return te(t._context) + ".Provider";
          case f:
            return $e(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : _(e.type) || "Memo";
          case w: {
            var i = e, s = i._payload, o = i._init;
            try {
              return _(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, D = 0, ne, ae, oe, ie, se, ue, ce;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function We() {
      {
        if (D === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, se = console.group, ue = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Ye() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ne
            }),
            info: x({}, e, {
              value: ae
            }),
            warn: x({}, e, {
              value: oe
            }),
            error: x({}, e, {
              value: ie
            }),
            group: x({}, e, {
              value: se
            }),
            groupCollapsed: x({}, e, {
              value: ue
            }),
            groupEnd: x({}, e, {
              value: ce
            })
          });
        }
        D < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = S.ReactCurrentDispatcher, H;
    function L(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var J = !1, M;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Le();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = z.current, z.current = null, We();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (R) {
              n = R;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var a = R.stack.split(`
`), h = n.stack.split(`
`), u = a.length - 1, c = h.length - 1; u >= 1 && c >= 0 && a[u] !== h[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (a[u] !== h[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || a[u] !== h[c]) {
                    var b = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, b), b;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        J = !1, z.current = s, Ye(), Error.prepareStackTrace = i;
      }
      var k = e ? e.displayName || e.name : "", Oe = k ? L(k) : "";
      return typeof e == "function" && M.set(e, Oe), Oe;
    }
    function Me(e, r, t) {
      return fe(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ve(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case O:
          return L("Suspense");
        case m:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Me(e.render);
          case E:
            return V(e.type, r, t);
          case w: {
            var n = e, i = n._payload, s = n._init;
            try {
              return V(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, de = {}, ve = S.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, i) {
      {
        var s = Function.call.bind(U);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (B(i), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), B(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, B(i), p("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Be = Array.isArray;
    function G(e) {
      return Be(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (ze(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), pe(e);
    }
    var A = S.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, ye, K;
    K = {};
    function Je(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = _(A.current.type);
        K[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(A.current.type), e.ref), K[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          me || (me = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ye || (ye = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, i) {
      {
        var s, o = {}, a = null, h = null;
        t !== void 0 && (he(t), a = "" + t), Ge(r) && (he(r.key), a = "" + r.key), Je(r) && (h = r.ref, Ke(r, i));
        for (s in r)
          U.call(r, s) && !He.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || h) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Xe(o, c), h && Ze(o, c);
        }
        return Qe(e, a, h, i, n, A.current, o);
      }
    }
    var X = S.ReactCurrentOwner, be = S.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function ge() {
      {
        if (X.current) {
          var e = _(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function tr(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + _(e._owner.type) + "."), j(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && _e(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Se(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Q(o.value) && _e(o.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = _(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var i = _(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Te(e, r, t, n, i, s) {
      {
        var o = Ie(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = rr(i);
          h ? a += h : a += ge();
          var u;
          e === null ? u = "null" : G(e) ? u = "array" : e !== void 0 && e.$$typeof === g ? (u = "<" + (_(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var c = er(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (G(b)) {
                for (var k = 0; k < b.length; k++)
                  Re(b[k], e);
                Object.freeze && Object.freeze(b);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(b, e);
        }
        return e === l ? ar(c) : nr(c), c;
      }
    }
    function or(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Te(e, r, t, !1);
    }
    var sr = ir, ur = or;
    $.Fragment = l, $.jsx = sr, $.jsxs = ur;
  }()), $;
}
(function(y) {
  process.env.NODE_ENV === "production" ? y.exports = dr() : y.exports = vr();
})(fr);
const v = q.jsx, W = q.jsxs;
const yr = () => /* @__PURE__ */ v("div", { className: "hdui-linear-loader loader-container", children: /* @__PURE__ */ v("div", { className: "linear-loader-surface", children: /* @__PURE__ */ v("div", { className: "linear-loader-animated-surface" }) }) }), br = () => /* @__PURE__ */ v("div", { className: "hdui-circular-loader loader-container", children: /* @__PURE__ */ W("svg", { className: "circular-loader-surface", children: [
  /* @__PURE__ */ v("circle", { cx: "50%", cy: "50%", r: "50%" }),
  /* @__PURE__ */ v("div", { className: "circular-loader-animated-surface", children: "H" })
] }) });
const gr = () => /* @__PURE__ */ W("div", { className: "hd-ui-bouncy-loader loader-container", children: [
  /* @__PURE__ */ v("div", { className: "ball" }),
  /* @__PURE__ */ v("div", { className: "ball" }),
  /* @__PURE__ */ v("div", { className: "ball" }),
  /* @__PURE__ */ v("div", { className: "ball" })
] });
const Er = ({ onOpen: y, onClose: g }) => /* @__PURE__ */ W("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ v("input", { type: "checkbox", id: "ham-menu1", hidden: !0, onChange: (l) => {
    l.target.checked ? y(l) : g(l);
  }, title: "HamBurger" }),
  /* @__PURE__ */ W("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
    /* @__PURE__ */ v("div", { className: "stroke1 stroke" }),
    /* @__PURE__ */ v("div", { className: "stroke2 stroke" }),
    /* @__PURE__ */ v("div", { className: "stroke3 stroke" })
  ] })
] });
const pr = ({ containerStyle: y, children: g, torchStyle: T }) => {
  const l = cr(null);
  return lr(() => {
    if (T)
      try {
        Object.entries(T).forEach(([d, f]) => {
          d !== "size" ? l.current.style[d] = f : l.current.style.width = `${(T.size * 100).toFixed(2)}%`;
        });
      } catch (d) {
        console.error(d), console.log("Incorrect style format for `torchStyle` prop");
      }
  }, []), /* @__PURE__ */ W("div", { className: "hd-ui-torchbox torch-box-container", onMouseOver: () => {
    l.current.style.visibility = "visible", l.current.style.opacity = 1;
  }, onMouseOut: () => {
    l.current.style.visibility = "hidden", l.current.style.opacity = 0;
  }, onMouseMove: (d) => {
    d.stopPropagation();
    const { top: f, left: O } = d.currentTarget.getBoundingClientRect();
    l.current.animate({
      left: `${d.clientX - O}px`,
      top: `${d.clientY - f}px`
    }, { duration: 500, fill: "forwards" });
  }, children: [
    /* @__PURE__ */ v("div", { ref: l, className: "torch-shadow" }),
    /* @__PURE__ */ v("div", { className: "torch-shadow-overlay" }),
    /* @__PURE__ */ v("div", { className: "torch-box-container__child-container", style: y, children: g })
  ] });
};
pr.propTypes = {
  children: C.oneOfType([C.element, C.arrayOf(C.element)]),
  containerStyle: C.object.isRequired,
  torchStyle: C.shape({
    size: C.number.isRequired
  })
};
export {
  gr as BouncyBalls,
  br as CircularLoader,
  Er as HamBurger,
  yr as LinearLoader,
  pr as TorchBox
};
