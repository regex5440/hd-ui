import Le, { useRef as j, useEffect as $, useState as ce } from "react";
var le = { exports: {} }, H = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function dr() {
  if (De)
    return H;
  De = 1;
  var o = Le, f = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, v = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(y, s, g) {
    var l, R = {}, w = null, P = null;
    g !== void 0 && (w = "" + g), s.key !== void 0 && (w = "" + s.key), s.ref !== void 0 && (P = s.ref);
    for (l in s)
      a.call(s, l) && !O.hasOwnProperty(l) && (R[l] = s[l]);
    if (y && y.defaultProps)
      for (l in s = y.defaultProps, s)
        R[l] === void 0 && (R[l] = s[l]);
    return { $$typeof: f, type: y, key: w, ref: P, props: R, _owner: v.current };
  }
  return H.Fragment = i, H.jsx = E, H.jsxs = E, H;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function vr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Le, f = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), y = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), D = Symbol.iterator, I = "@@iterator";
    function b(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[I];
      return typeof r == "function" ? r : null;
    }
    var T = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, d = n.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var m = t.map(function(c) {
          return String(c);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var N = !1, z = !1, J = !1, ee = !1, M = !1, de;
    de = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === O || M || e === v || e === g || e === l || ee || e === P || N || z || J || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === R || e.$$typeof === E || e.$$typeof === y || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var d = r.displayName || r.name || "";
      return d !== "" ? t + "(" + d + ")" : t;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case i:
          return "Portal";
        case O:
          return "Profiler";
        case v:
          return "StrictMode";
        case g:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ve(r) + ".Consumer";
          case E:
            var t = e;
            return ve(t._context) + ".Provider";
          case s:
            return Me(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : A(e.type) || "Memo";
          case w: {
            var d = e, m = d._payload, c = d._init;
            try {
              return A(c(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, U = 0, pe, me, he, ye, be, ge, Ee;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ye() {
      {
        if (U === 0) {
          pe = console.log, me = console.info, he = console.warn, ye = console.error, be = console.group, ge = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
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
        U++;
      }
    }
    function Be() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: pe
            }),
            info: L({}, e, {
              value: me
            }),
            warn: L({}, e, {
              value: he
            }),
            error: L({}, e, {
              value: ye
            }),
            group: L({}, e, {
              value: be
            }),
            groupCollapsed: L({}, e, {
              value: ge
            }),
            groupEnd: L({}, e, {
              value: Ee
            })
          });
        }
        U < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = T.ReactCurrentDispatcher, te;
    function G(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (d) {
            var n = d.stack.trim().match(/\n( *(at )?)/);
            te = n && n[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, K;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      K = new Ue();
    }
    function _e(e, r) {
      if (!e || ne)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ne = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = re.current, re.current = null, Ye();
      try {
        if (r) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (F) {
              n = F;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (F) {
              n = F;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            n = F;
          }
          e();
        }
      } catch (F) {
        if (F && n && typeof F.stack == "string") {
          for (var u = F.stack.split(`
`), C = n.stack.split(`
`), _ = u.length - 1, x = C.length - 1; _ >= 1 && x >= 0 && u[_] !== C[x]; )
            x--;
          for (; _ >= 1 && x >= 0; _--, x--)
            if (u[_] !== C[x]) {
              if (_ !== 1 || x !== 1)
                do
                  if (_--, x--, x < 0 || u[_] !== C[x]) {
                    var S = `
` + u[_].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, S), S;
                  }
                while (_ >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = m, Be(), Error.prepareStackTrace = d;
      }
      var B = e ? e.displayName || e.name : "", $e = B ? G(B) : "";
      return typeof e == "function" && K.set(e, $e), $e;
    }
    function Ve(e, r, t) {
      return _e(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function X(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, He(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case g:
          return G("Suspense");
        case l:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ve(e.render);
          case R:
            return X(e.type, r, t);
          case w: {
            var n = e, d = n._payload, m = n._init;
            try {
              return X(m(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, we = {}, Te = T.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, d) {
      {
        var m = Function.call.bind(Z);
        for (var c in e)
          if (m(e, c)) {
            var u = void 0;
            try {
              if (typeof e[c] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              u = e[c](r, c, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              u = _;
            }
            u && !(u instanceof Error) && (Q(d), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, c, typeof u), Q(null)), u instanceof Error && !(u.message in we) && (we[u.message] = !0, Q(d), p("Failed %s type: %s", t, u.message), Q(null));
          }
      }
    }
    var ze = Array.isArray;
    function ae(e) {
      return ze(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function Pe(e) {
      if (Ge(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), xe(e);
    }
    var V = T.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Ce, oe;
    oe = {};
    function Xe(e) {
      if (Z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (Z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && V.current && r && V.current.stateNode !== r) {
        var t = A(V.current.type);
        oe[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(V.current.type), e.ref), oe[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, d, m, c) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function nr(e, r, t, n, d) {
      {
        var m, c = {}, u = null, C = null;
        t !== void 0 && (Pe(t), u = "" + t), Ze(r) && (Pe(r.key), u = "" + r.key), Xe(r) && (C = r.ref, Qe(r, d));
        for (m in r)
          Z.call(r, m) && !Ke.hasOwnProperty(m) && (c[m] = r[m]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (m in _)
            c[m] === void 0 && (c[m] = _[m]);
        }
        if (u || C) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && er(c, x), C && rr(c, x);
        }
        return tr(e, u, C, d, n, V.current, c);
      }
    }
    var ie = T.ReactCurrentOwner, ke = T.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Se() {
      {
        if (ie.current) {
          var e = A(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var je = {};
    function or(e) {
      {
        var r = Se();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ne(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ie.current && (n = " It was passed a child from " + A(e._owner.type) + "."), Y(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Y(null);
      }
    }
    function Ae(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ue(n) && Ne(n, r);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = b(e);
          if (typeof d == "function" && d !== e.entries)
            for (var m = d.call(e), c; !(c = m.next()).done; )
              ue(c.value) && Ne(c.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = A(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var d = A(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Y(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Fe(e, r, t, n, d, m) {
      {
        var c = We(e);
        if (!c) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = ar(d);
          C ? u += C : u += Se();
          var _;
          e === null ? _ = "null" : ae(e) ? _ = "array" : e !== void 0 && e.$$typeof === f ? (_ = "<" + (A(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, u);
        }
        var x = nr(e, r, t, d, m);
        if (x == null)
          return x;
        if (c) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (ae(S)) {
                for (var B = 0; B < S.length; B++)
                  Ae(S[B], e);
                Object.freeze && Object.freeze(S);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(S, e);
        }
        return e === a ? sr(x) : ir(x), x;
      }
    }
    function ur(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var lr = cr, fr = ur;
    q.Fragment = a, q.jsx = lr, q.jsxs = fr;
  }()), q;
}
process.env.NODE_ENV === "production" ? le.exports = dr() : le.exports = vr();
var fe = le.exports;
const pr = fe.Fragment, h = fe.jsx, W = fe.jsxs;
const br = ({
  height: o = "7px",
  width: f = "300px",
  riderColor: i = "#343434",
  trackColor: a = "#fff",
  withProgress: v = !0,
  percentage: O = 0,
  maxPercentage: E = 100,
  style: y
}) => {
  const s = j(null), g = j(null);
  $(() => {
    var R, w;
    i && ((R = s.current) == null || R.style.setProperty("--riderColor", i)), a && ((w = s.current) == null || w.style.setProperty("--trackColor", a));
  }, [i, a, s.current]);
  const l = O / E * 100;
  return /* @__PURE__ */ h(
    "div",
    {
      className: "hdui-linear-loader loader-container",
      style: { height: o, width: f, ...y },
      ref: s,
      children: /* @__PURE__ */ h("div", { className: "linear-loader-surface", children: /* @__PURE__ */ h(
        "div",
        {
          className: "linear-loader-animated-surface",
          ref: g,
          "data-type": v ? "progress" : "loader",
          style: v ? {
            width: `${l >= 0 ? l : l >= 100 ? 100 : 0}%`
          } : {}
        }
      ) })
    }
  );
}, mr = ({
  size: o = 40,
  trackColor: f,
  riderColor: i,
  trackWidth: a = 10,
  riderWidth: v = 10,
  style: O
}) => {
  const E = j(null);
  $(() => {
    var s, g, l, R;
    if (E.current && getComputedStyle(E.current).display !== "none") {
      console.log(getComputedStyle(E.current).display);
      const w = ((R = (l = (g = (s = E.current) == null ? void 0 : s.getElementsByClassName("cover")) == null ? void 0 : g[0]) == null ? void 0 : l.getTotalLength) == null ? void 0 : R.call(l)) || 0;
      E.current.style.setProperty(
        "--dasharray",
        w.toFixed(2) + "px"
      );
    }
  }, [o]);
  const y = a > v ? a : v;
  return /* @__PURE__ */ h(
    "div",
    {
      className: "hdui-circular-loader loader-container",
      style: O,
      ref: E,
      children: /* @__PURE__ */ W("svg", { className: "circular-loader-surface", width: o, height: o, children: [
        /* @__PURE__ */ h(
          "circle",
          {
            cx: "50%",
            cy: "50%",
            r: `${50 - y}%`,
            stroke: f,
            style: { strokeWidth: `${a}%` },
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ h(
          "circle",
          {
            strokeLinecap: "round",
            cx: "50%",
            cy: "50%",
            r: `${50 - y}%`,
            className: "cover",
            stroke: i || "rgb(52, 52, 52)",
            style: { strokeWidth: `${v}%` }
          }
        ),
        /* @__PURE__ */ h("div", { className: "circular-loader-animated-surface", children: "H" })
      ] })
    }
  );
};
const gr = ({ ballColor: o, style: f = {} }) => {
  const i = j(null);
  return $(() => {
    i.current && o && i.current.style.setProperty(
      "--bouncyBallColor",
      o
    );
  }, [o, i.current]), /* @__PURE__ */ W(
    "div",
    {
      className: "hd-ui-bouncy-loader loader-container",
      ref: i,
      style: f,
      children: [
        /* @__PURE__ */ h("div", { className: "ball" }),
        /* @__PURE__ */ h("div", { className: "ball" }),
        /* @__PURE__ */ h("div", { className: "ball" }),
        /* @__PURE__ */ h("div", { className: "ball" })
      ]
    }
  );
};
const Er = ({
  onOpen: o,
  onClose: f,
  strokeColor: i = "rgb(125,125,125)"
}) => /* @__PURE__ */ W("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ h(
    "input",
    {
      type: "checkbox",
      id: "ham-menu1",
      hidden: !0,
      onChange: (v) => {
        v.target.checked ? o && o(v) : f && f(v);
      },
      title: "HamBurger"
    }
  ),
  /* @__PURE__ */ W("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
    /* @__PURE__ */ h(
      "div",
      {
        className: "stroke1 stroke",
        style: { backgroundColor: i }
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: "stroke2 stroke",
        style: { backgroundColor: i }
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: "stroke3 stroke",
        style: { backgroundColor: i }
      }
    )
  ] })
] });
const hr = ({
  children: o,
  onChange: f,
  style: i,
  optionLayerStyle: a,
  selectedOptionStyle: v,
  defaultValue: O,
  actionType: E,
  ...y
}) => {
  var I;
  const [s, g] = ce(!1), [l, R] = ce(), w = j(null), P = Array.isArray(o) ? o.length : 1;
  return $(() => {
    var b, T, p, k, N, z;
    if (Array.isArray(o)) {
      let J = 0;
      for (const [ee, M] of o.entries())
        if (O === M.props.value || M.props.selected) {
          J = ee, R({
            layout: M.props.children,
            value: M.props.value
          });
          break;
        }
      (p = (T = (b = w.current) == null ? void 0 : b.children) == null ? void 0 : T[J]) == null || p.setAttribute(
        "selected",
        ""
      );
    } else
      (z = (N = (k = w.current) == null ? void 0 : k.children) == null ? void 0 : N[0]) == null || z.setAttribute("selected", "");
  }, [o]), s && ((I = w.current) == null || I.focus()), /* @__PURE__ */ h("div", { className: "hd-ui-dropdown dropdown-container", ...y, children: /* @__PURE__ */ W(
    "div",
    {
      className: `dropdown-container-set${E === "hover" ? " mouseover" : ""}`,
      onClick: (b) => {
        var T, p, k;
        if (b.target instanceof HTMLDivElement && b.target.ariaLabel === "option") {
          const N = b.target.dataset.value || ((T = b.target.textContent) == null ? void 0 : T.trim()) || "";
          (l == null ? void 0 : l.value) !== N && (R({
            layout: b.target.innerHTML || N,
            value: N
          }), (k = (p = b.target.parentElement) == null ? void 0 : p.querySelector("[selected]")) == null || k.removeAttribute("selected"), b.target.setAttribute("selected", ""), f == null || f(N)), g(!1);
        } else
          g(!0);
      },
      "aria-hidden": !s,
      style: i,
      children: [
        /* @__PURE__ */ h("div", { className: "dropdown-button", style: v, children: (l == null ? void 0 : l.layout) || "--Select--" }),
        /* @__PURE__ */ h(
          "div",
          {
            className: "dropdown-layer",
            style: { height: `${P * 100}%`, ...a },
            ref: w,
            tabIndex: 0,
            onBlur: () => g(!1),
            children: o
          }
        )
      ]
    }
  ) });
};
hr.Option = ({
  children: o,
  value: f,
  selected: i = !1,
  ...a
}) => /* @__PURE__ */ h(
  "div",
  {
    className: "hd-ui-dropdown-option",
    "data-value": f,
    "aria-label": "option",
    ...i ? { selected: i } : {},
    ...a,
    children: o
  }
);
const Rr = ({ containerStyle: o, children: f, torchStyle: i }) => {
  const a = j(null);
  return $(() => {
    var y, s, g;
    if (i)
      try {
        i.size && ((s = (y = a.current) == null ? void 0 : y.style) == null || s.setProperty(
          "width",
          `${(Number(i.size) * 100).toFixed(2)}%`
        )), i.color && ((g = a.current) == null || g.style.setProperty(
          "background-color",
          i.color
        ));
      } catch (l) {
        console.error(l), console.log("Incorrect style format for `torchStyle` prop");
      }
  }, [a.current, i]), /* @__PURE__ */ W(
    "div",
    {
      className: "hd-ui-torchbox torch-box-container",
      onMouseOver: () => {
        a.current && (a.current.style.visibility = "visible", a.current.style.opacity = "1");
      },
      onMouseOut: () => {
        a.current && (a.current.style.visibility = "hidden", a.current.style.opacity = "0");
      },
      onMouseMove: (y) => {
        y.stopPropagation();
        const { top: s, left: g } = y.currentTarget.getBoundingClientRect();
        a.current && a.current.animate(
          {
            left: `${y.clientX - g}px`,
            top: `${y.clientY - s}px`
          },
          { duration: 500, fill: "forwards" }
        );
      },
      style: o,
      children: [
        /* @__PURE__ */ h("div", { ref: a, className: "torch-shadow" }),
        /* @__PURE__ */ h("div", { className: "torch-shadow-overlay" }),
        /* @__PURE__ */ h("div", { className: "torch-box-container__child-container", children: f })
      ]
    }
  );
};
const _r = ({
  open: o = !1,
  closeHandler: f,
  showBackdrop: i = !0,
  keepModalCentered: a = !0,
  TransitionStyle: v = "fade",
  children: O,
  closeOnBlur: E = !0,
  closeOnBackDropClick: y = !0,
  triggerElement: s,
  modalStyle: g,
  ...l
}) => {
  const [R, w] = ce(!1), P = j(null), D = j(null);
  $(() => {
    var b, T;
    o && w(!0), !o && v !== "none" && ((b = D.current) == null || b.style.removeProperty("animation"), (T = P.current) == null || T.style.removeProperty("animation"), setTimeout(() => {
      var p, k;
      (p = D.current) == null || p.style.setProperty(
        "animation",
        "fade 300ms ease reverse forwards"
      ), (k = P.current) == null || k.style.setProperty(
        "animation",
        `${v} 200ms ease reverse forwards`
      );
    }, 0)), v === "none" && I();
  }, [o, v, D, P]), $(() => {
    var b;
    o && ((b = P.current) == null || b.focus());
  }, [o, R, P.current]), $(() => {
    if (!a && (s != null && s.current) && P.current) {
      const b = P.current.offsetWidth, T = P.current.offsetHeight;
      let { left: p, top: k } = s.current.getBoundingClientRect();
      p + b > window.innerWidth && (p = window.innerWidth - b - 10), k + T > window.innerHeight && (k = window.innerHeight - T - 10), P.current.style.setProperty("left", `${p}px`), P.current.style.setProperty("top", `${k}px`);
    }
  });
  const I = () => {
    o || (w(!1), f == null || f());
  };
  return /* @__PURE__ */ h(pr, { children: R && /* @__PURE__ */ W("div", { className: "hd-ui-modal modal-container", children: [
    i && /* @__PURE__ */ h(
      "div",
      {
        className: "hd-ui-modal-overlay",
        "data-visible": i,
        ref: D,
        onClick: y ? f : void 0,
        style: v !== "none" ? { animation: "fade 400ms ease" } : {}
      }
    ),
    /* @__PURE__ */ h(
      "div",
      {
        className: "modal-child-container",
        "data-centered": a,
        "aria-modal": !0,
        style: {
          maxWidth: `${window.innerWidth}px`,
          maxHeight: `${window.innerHeight}px`,
          animation: `${v} 300ms ease`,
          ...g
        },
        ref: P,
        onAnimationEnd: I,
        tabIndex: 0,
        onBlur: E ? (b) => {
          const T = b.currentTarget;
          setTimeout(() => {
            T.contains(document.activeElement) || f();
          }, 0);
        } : void 0,
        ...l,
        children: O
      }
    )
  ] }) });
}, wr = ({
  Loader: o = /* @__PURE__ */ h(mr, { size: 39 }),
  onVisibleHandler: f,
  endOfData: i
}) => {
  var O;
  const a = j(null), v = j(
    new IntersectionObserver(([E]) => {
      E.isIntersecting && f && f();
    })
  );
  return $(() => {
    a.current && v.current.observe(a.current);
  }, []), i && ((O = v.current) == null || O.disconnect()), /* @__PURE__ */ h(
    "div",
    {
      className: "hd-ui-lazy-loader lazy-loader-container",
      ref: a,
      children: !i && o
    }
  );
};
export {
  gr as BouncyBalls,
  mr as CircularLoader,
  hr as DropDown,
  Er as HamBurger,
  wr as LazyLoader,
  br as LinearLoader,
  _r as Modal,
  Rr as TorchBox
};
