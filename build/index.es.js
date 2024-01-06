import Le, { useRef as j, useEffect as $, useState as ue } from "react";
var le = { exports: {} }, z = {};
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
function vr() {
  if (De)
    return z;
  De = 1;
  var o = Le, u = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, v = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(y, s, b) {
    var f, E = {}, _ = null, P = null;
    b !== void 0 && (_ = "" + b), s.key !== void 0 && (_ = "" + s.key), s.ref !== void 0 && (P = s.ref);
    for (f in s)
      a.call(s, f) && !O.hasOwnProperty(f) && (E[f] = s[f]);
    if (y && y.defaultProps)
      for (f in s = y.defaultProps, s)
        E[f] === void 0 && (E[f] = s[f]);
    return { $$typeof: u, type: y, key: _, ref: P, props: E, _owner: v.current };
  }
  return z.Fragment = i, z.jsx = x, z.jsxs = x, z;
}
var V = {};
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
function pr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Le, u = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), y = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), D = Symbol.iterator, I = "@@iterator";
    function g(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = D && e[D] || e[I];
      return typeof r == "function" ? r : null;
    }
    var w = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, d = n.getStackAddendum();
        d !== "" && (r += "%s", t = t.concat([d]));
        var h = t.map(function(l) {
          return String(l);
        });
        h.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var N = !1, J = !1, G = !1, ee = !1, M = !1, de;
    de = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === O || M || e === v || e === b || e === f || ee || e === P || N || J || G || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === E || e.$$typeof === x || e.$$typeof === y || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
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
        case b:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ve(r) + ".Consumer";
          case x:
            var t = e;
            return ve(t._context) + ".Provider";
          case s:
            return Ye(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : A(e.type) || "Memo";
          case _: {
            var d = e, h = d._payload, l = d._init;
            try {
              return A(l(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, U = 0, pe, me, he, ye, ge, be, Ee;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Be() {
      {
        if (U === 0) {
          pe = console.log, me = console.info, he = console.warn, ye = console.error, ge = console.group, be = console.groupCollapsed, Ee = console.groupEnd;
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
    function Ue() {
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
              value: ge
            }),
            groupCollapsed: L({}, e, {
              value: be
            }),
            groupEnd: L({}, e, {
              value: Ee
            })
          });
        }
        U < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = w.ReactCurrentDispatcher, te;
    function H(e, r, t) {
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
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      K = new qe();
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
      var h;
      h = re.current, re.current = null, Be();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (F) {
              n = F;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (F) {
              n = F;
            }
            e.call(l.prototype);
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
          for (var c = F.stack.split(`
`), C = n.stack.split(`
`), R = c.length - 1, T = C.length - 1; R >= 1 && T >= 0 && c[R] !== C[T]; )
            T--;
          for (; R >= 1 && T >= 0; R--, T--)
            if (c[R] !== C[T]) {
              if (R !== 1 || T !== 1)
                do
                  if (R--, T--, T < 0 || c[R] !== C[T]) {
                    var S = `
` + c[R].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, S), S;
                  }
                while (R >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = h, Ue(), Error.prepareStackTrace = d;
      }
      var B = e ? e.displayName || e.name : "", $e = B ? H(B) : "";
      return typeof e == "function" && K.set(e, $e), $e;
    }
    function ze(e, r, t) {
      return _e(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function X(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return _e(e, Ve(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case b:
          return H("Suspense");
        case f:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return ze(e.render);
          case E:
            return X(e.type, r, t);
          case _: {
            var n = e, d = n._payload, h = n._init;
            try {
              return X(h(d), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, we = {}, Te = w.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, d) {
      {
        var h = Function.call.bind(Z);
        for (var l in e)
          if (h(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              c = e[l](r, l, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              c = R;
            }
            c && !(c instanceof Error) && (Q(d), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, l, typeof c), Q(null)), c instanceof Error && !(c.message in we) && (we[c.message] = !0, Q(d), p("Failed %s type: %s", t, c.message), Q(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ae(e) {
      return Ge(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
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
      if (Ke(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), xe(e);
    }
    var q = w.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Ce, oe;
    oe = {};
    function Ze(e) {
      if (Z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (Z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && q.current && r && q.current.stateNode !== r) {
        var t = A(q.current.type);
        oe[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(q.current.type), e.ref), oe[t] = !0);
      }
    }
    function rr(e, r) {
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
    function tr(e, r) {
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
    var nr = function(e, r, t, n, d, h, l) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ar(e, r, t, n, d) {
      {
        var h, l = {}, c = null, C = null;
        t !== void 0 && (Pe(t), c = "" + t), Qe(r) && (Pe(r.key), c = "" + r.key), Ze(r) && (C = r.ref, er(r, d));
        for (h in r)
          Z.call(r, h) && !Xe.hasOwnProperty(h) && (l[h] = r[h]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (h in R)
            l[h] === void 0 && (l[h] = R[h]);
        }
        if (c || C) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && rr(l, T), C && tr(l, T);
        }
        return nr(e, c, C, d, n, q.current, l);
      }
    }
    var ie = w.ReactCurrentOwner, ke = w.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
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
    function or(e) {
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
    function ir(e) {
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
        var t = ir(r);
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
            ce(n) && Ne(n, r);
          }
        else if (ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = g(e);
          if (typeof d == "function" && d !== e.entries)
            for (var h = d.call(e), l; !(l = h.next()).done; )
              ce(l.value) && Ne(l.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = A(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var d = A(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
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
    function Fe(e, r, t, n, d, h) {
      {
        var l = Me(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = or(d);
          C ? c += C : c += Se();
          var R;
          e === null ? R = "null" : ae(e) ? R = "array" : e !== void 0 && e.$$typeof === u ? (R = "<" + (A(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, c);
        }
        var T = ar(e, r, t, d, h);
        if (T == null)
          return T;
        if (l) {
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
        return e === a ? cr(T) : sr(T), T;
      }
    }
    function ur(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var fr = lr, dr = ur;
    V.Fragment = a, V.jsx = fr, V.jsxs = dr;
  }()), V;
}
process.env.NODE_ENV === "production" ? le.exports = vr() : le.exports = pr();
var fe = le.exports;
const We = fe.Fragment, m = fe.jsx, W = fe.jsxs;
const gr = ({
  height: o = "7px",
  width: u = "300px",
  riderColor: i = "#343434",
  trackColor: a = "#fff",
  withProgress: v = !0,
  percentage: O = 0,
  maxPercentage: x = 100,
  style: y
}) => {
  const s = j(null), b = j(null);
  $(() => {
    var E, _;
    i && ((E = s.current) == null || E.style.setProperty("--riderColor", i)), a && ((_ = s.current) == null || _.style.setProperty("--trackColor", a));
  }, [i, a, s.current]);
  const f = O / x * 100;
  return /* @__PURE__ */ m(
    "div",
    {
      className: "hdui-linear-loader loader-container",
      style: { height: o, width: u, ...y },
      ref: s,
      children: /* @__PURE__ */ m("div", { className: "linear-loader-surface", children: /* @__PURE__ */ m(
        "div",
        {
          className: "linear-loader-animated-surface",
          ref: b,
          "data-type": v ? "progress" : "loader",
          style: v ? {
            width: `${f >= 0 ? f : f >= 100 ? 100 : 0}%`
          } : {}
        }
      ) })
    }
  );
}, mr = ({
  size: o = 40,
  trackColor: u,
  riderColor: i,
  trackWidth: a = 10,
  riderWidth: v = 10,
  style: O
}) => {
  const x = j(null);
  $(() => {
    var s, b, f, E;
    if (x.current && getComputedStyle(x.current).display !== "none") {
      console.log(getComputedStyle(x.current).display);
      const _ = ((E = (f = (b = (s = x.current) == null ? void 0 : s.getElementsByClassName("cover")) == null ? void 0 : b[0]) == null ? void 0 : f.getTotalLength) == null ? void 0 : E.call(f)) || 0;
      x.current.style.setProperty(
        "--dasharray",
        _.toFixed(2) + "px"
      );
    }
  }, [o]);
  const y = a > v ? a : v;
  return /* @__PURE__ */ m(
    "div",
    {
      className: "hdui-circular-loader loader-container",
      style: O,
      ref: x,
      children: /* @__PURE__ */ W("svg", { className: "circular-loader-surface", width: o, height: o, children: [
        /* @__PURE__ */ m(
          "circle",
          {
            cx: "50%",
            cy: "50%",
            r: `${50 - y}%`,
            stroke: u,
            style: { strokeWidth: `${a}%` },
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ m(
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
        /* @__PURE__ */ m("div", { className: "circular-loader-animated-surface", children: "H" })
      ] })
    }
  );
};
const br = ({ ballColor: o, style: u = {} }) => {
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
      style: u,
      children: [
        /* @__PURE__ */ m("div", { className: "ball" }),
        /* @__PURE__ */ m("div", { className: "ball" }),
        /* @__PURE__ */ m("div", { className: "ball" }),
        /* @__PURE__ */ m("div", { className: "ball" })
      ]
    }
  );
};
const Er = ({
  onOpen: o,
  onClose: u,
  strokeColor: i = "rgb(125,125,125)"
}) => /* @__PURE__ */ W("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ m(
    "input",
    {
      type: "checkbox",
      id: "ham-menu1",
      hidden: !0,
      onChange: (v) => {
        v.target.checked ? o && o(v) : u && u(v);
      },
      title: "HamBurger"
    }
  ),
  /* @__PURE__ */ W("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: "stroke1 stroke",
        style: { backgroundColor: i }
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        className: "stroke2 stroke",
        style: { backgroundColor: i }
      }
    ),
    /* @__PURE__ */ m(
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
  onChange: u,
  style: i,
  optionLayerStyle: a,
  selectedOptionStyle: v,
  defaultValue: O,
  actionType: x,
  ...y
}) => {
  var I;
  const [s, b] = ue(!1), [f, E] = ue(), _ = j(null), P = Array.isArray(o) ? o.length : 1;
  return $(() => {
    var g, w, p, k, N, J;
    if (Array.isArray(o)) {
      let G = 0;
      for (const [ee, M] of o.entries())
        if (O === M.props.value || M.props.selected) {
          G = ee, E({
            layout: M.props.children,
            value: M.props.value
          });
          break;
        }
      (p = (w = (g = _.current) == null ? void 0 : g.children) == null ? void 0 : w[G]) == null || p.setAttribute(
        "selected",
        ""
      );
    } else
      (J = (N = (k = _.current) == null ? void 0 : k.children) == null ? void 0 : N[0]) == null || J.setAttribute("selected", "");
  }, [o]), s && ((I = _.current) == null || I.focus()), /* @__PURE__ */ m("div", { className: "hd-ui-dropdown dropdown-container", ...y, children: /* @__PURE__ */ W(
    "div",
    {
      className: `dropdown-container-set${x === "hover" ? " mouseover" : ""}`,
      onClick: (g) => {
        var w, p, k;
        if (g.target instanceof HTMLDivElement && g.target.ariaLabel === "option") {
          const N = g.target.dataset.value || ((w = g.target.textContent) == null ? void 0 : w.trim()) || "";
          (f == null ? void 0 : f.value) !== N && (E({
            layout: g.target.innerHTML || N,
            value: N
          }), (k = (p = g.target.parentElement) == null ? void 0 : p.querySelector("[selected]")) == null || k.removeAttribute("selected"), g.target.setAttribute("selected", ""), u == null || u(N)), b(!1);
        } else
          b(!0);
      },
      "aria-hidden": !s,
      style: i,
      children: [
        /* @__PURE__ */ m("div", { className: "dropdown-button", style: v, children: (f == null ? void 0 : f.layout) || "--Select--" }),
        /* @__PURE__ */ m(
          "div",
          {
            className: "dropdown-layer",
            style: { height: `${P * 100}%`, ...a },
            ref: _,
            tabIndex: 0,
            onBlur: () => b(!1),
            children: o
          }
        )
      ]
    }
  ) });
};
hr.Option = ({
  children: o,
  value: u,
  selected: i = !1,
  ...a
}) => /* @__PURE__ */ m(
  "div",
  {
    className: "hd-ui-dropdown-option",
    "data-value": u,
    "aria-label": "option",
    ...i ? { selected: i } : {},
    ...a,
    children: o
  }
);
const Rr = ({ containerStyle: o, children: u, torchStyle: i }) => {
  const a = j(null);
  return $(() => {
    var y, s, b;
    if (i)
      try {
        i.size && ((s = (y = a.current) == null ? void 0 : y.style) == null || s.setProperty(
          "width",
          `${(Number(i.size) * 100).toFixed(2)}%`
        )), i.color && ((b = a.current) == null || b.style.setProperty(
          "background-color",
          i.color
        ));
      } catch (f) {
        console.error(f), console.log("Incorrect style format for `torchStyle` prop");
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
        const { top: s, left: b } = y.currentTarget.getBoundingClientRect();
        a.current && a.current.animate(
          {
            left: `${y.clientX - b}px`,
            top: `${y.clientY - s}px`
          },
          { duration: 500, fill: "forwards" }
        );
      },
      style: o,
      children: [
        /* @__PURE__ */ m("div", { ref: a, className: "torch-shadow" }),
        /* @__PURE__ */ m("div", { className: "torch-shadow-overlay" }),
        /* @__PURE__ */ m("div", { className: "torch-box-container__child-container", children: u })
      ]
    }
  );
};
const _r = ({
  open: o = !1,
  closeHandler: u,
  showBackdrop: i = !0,
  keepModalCentered: a = !0,
  TransitionStyle: v = "fade",
  children: O,
  closeOnBlur: x = !0,
  closeOnBackDropClick: y = !0,
  triggerElement: s,
  modalStyle: b,
  ...f
}) => {
  const [E, _] = ue(!1), P = j(null), D = j(null);
  $(() => {
    var g, w;
    o && _(!0), !o && v !== "none" && ((g = D.current) == null || g.style.removeProperty("animation"), (w = P.current) == null || w.style.removeProperty("animation"), setTimeout(() => {
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
    var g;
    o && ((g = P.current) == null || g.focus());
  }, [o, E, P.current]), $(() => {
    if (!a && (s != null && s.current) && P.current) {
      const g = P.current.offsetWidth, w = P.current.offsetHeight;
      let { left: p, top: k } = s.current.getBoundingClientRect();
      p + g > window.innerWidth && (p = window.innerWidth - g - 10), k + w > window.innerHeight && (k = window.innerHeight - w - 10), P.current.style.setProperty("left", `${p}px`), P.current.style.setProperty("top", `${k}px`);
    }
  });
  const I = () => {
    o || (_(!1), u == null || u());
  };
  return /* @__PURE__ */ m(We, { children: E && /* @__PURE__ */ W("div", { className: "hd-ui-modal modal-container", children: [
    i && /* @__PURE__ */ m(
      "div",
      {
        className: "hd-ui-modal-overlay",
        "data-visible": i,
        ref: D,
        onClick: y ? u : void 0,
        style: v !== "none" ? { animation: "fade 400ms ease" } : {}
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        className: "modal-child-container",
        "data-centered": a,
        "aria-modal": !0,
        style: {
          maxWidth: `${window.innerWidth}px`,
          maxHeight: `${window.innerHeight}px`,
          animation: `${v} 300ms ease`,
          ...b
        },
        ref: P,
        onAnimationEnd: I,
        tabIndex: 0,
        onBlur: x ? (g) => {
          const w = g.currentTarget;
          setTimeout(() => {
            w.contains(document.activeElement) || u();
          }, 0);
        } : void 0,
        ...f,
        children: O
      }
    )
  ] }) });
}, wr = ({
  Loader: o = /* @__PURE__ */ m(mr, { size: 39 }),
  onVisibleHandler: u,
  endOfData: i
}) => {
  const a = j(null), v = j(
    new IntersectionObserver(([O]) => {
      O.isIntersecting && (console.log("Hello"), u == null || u());
    })
  );
  return $(() => {
    a.current && (v.current = new IntersectionObserver(([O]) => {
      O.isIntersecting && (u == null || u());
    }), v.current.observe(a.current));
  }, [i]), /* @__PURE__ */ m(We, { children: !i && /* @__PURE__ */ m(
    "div",
    {
      className: "hd-ui-lazy-loader lazy-loader-container",
      ref: a,
      children: o
    }
  ) });
};
export {
  br as BouncyBalls,
  mr as CircularLoader,
  hr as DropDown,
  Er as HamBurger,
  wr as LazyLoader,
  gr as LinearLoader,
  _r as Modal,
  Rr as TorchBox
};
