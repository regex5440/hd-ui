import Ne, { useRef as j, useEffect as $, useState as ne } from "react";
var ae = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function dr() {
  if (Se)
    return B;
  Se = 1;
  var i = Ne, f = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, v = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(d, l, E) {
    var h, w = {}, y = null, O = null;
    E !== void 0 && (y = "" + E), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (O = l.ref);
    for (h in l)
      a.call(l, h) && !_.hasOwnProperty(h) && (w[h] = l[h]);
    if (d && d.defaultProps)
      for (h in l = d.defaultProps, l)
        w[h] === void 0 && (w[h] = l[h]);
    return { $$typeof: f, type: d, key: y, ref: O, props: w, _owner: v.current };
  }
  return B.Fragment = s, B.jsx = T, B.jsxs = T, B;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function vr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Ne, f = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), d = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), P = Symbol.iterator, k = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[k];
      return typeof r == "function" ? r : null;
    }
    var S = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        De("error", e, t);
      }
    }
    function De(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var p = t.map(function(c) {
          return String(c);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Fe = !1, $e = !1, Ae = !1, Ie = !1, Le = !1, ie;
    ie = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === _ || Le || e === v || e === E || e === h || Ie || e === O || Fe || $e || Ae || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === w || e.$$typeof === T || e.$$typeof === d || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case _:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return se(r) + ".Consumer";
          case T:
            var t = e;
            return se(t._context) + ".Provider";
          case l:
            return Me(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : N(e.type) || "Memo";
          case y: {
            var u = e, p = u._payload, c = u._init;
            try {
              return N(c(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, M = 0, ce, ue, le, fe, de, ve, pe;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Ye() {
      {
        if (M === 0) {
          ce = console.log, ue = console.info, le = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        M++;
      }
    }
    function Be() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: ce
            }),
            info: A({}, e, {
              value: ue
            }),
            warn: A({}, e, {
              value: le
            }),
            error: A({}, e, {
              value: fe
            }),
            group: A({}, e, {
              value: de
            }),
            groupCollapsed: A({}, e, {
              value: ve
            }),
            groupEnd: A({}, e, {
              value: pe
            })
          });
        }
        M < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = S.ReactCurrentDispatcher, K;
    function V(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, H;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Ue();
    }
    function he(e, r) {
      if (!e || X)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = G.current, G.current = null, Ye();
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
            } catch (D) {
              n = D;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (D) {
              n = D;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            n = D;
          }
          e();
        }
      } catch (D) {
        if (D && n && typeof D.stack == "string") {
          for (var o = D.stack.split(`
`), x = n.stack.split(`
`), b = o.length - 1, g = x.length - 1; b >= 1 && g >= 0 && o[b] !== x[g]; )
            g--;
          for (; b >= 1 && g >= 0; b--, g--)
            if (o[b] !== x[g]) {
              if (b !== 1 || g !== 1)
                do
                  if (b--, g--, g < 0 || o[b] !== x[g]) {
                    var C = `
` + o[b].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, C), C;
                  }
                while (b >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = p, Be(), Error.prepareStackTrace = u;
      }
      var W = e ? e.displayName || e.name : "", ke = W ? V(W) : "";
      return typeof e == "function" && H.set(e, ke), ke;
    }
    function Ve(e, r, t) {
      return he(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, He(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case E:
          return V("Suspense");
        case h:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ve(e.render);
          case w:
            return q(e.type, r, t);
          case y: {
            var n = e, u = n._payload, p = n._init;
            try {
              return q(p(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, ye = {}, be = S.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, u) {
      {
        var p = Function.call.bind(z);
        for (var c in e)
          if (p(e, c)) {
            var o = void 0;
            try {
              if (typeof e[c] != "function") {
                var x = Error((n || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              o = e[c](r, c, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              o = b;
            }
            o && !(o instanceof Error) && (J(u), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, c, typeof o), J(null)), o instanceof Error && !(o.message in ye) && (ye[o.message] = !0, J(u), R("Failed %s type: %s", t, o.message), J(null));
          }
      }
    }
    var ze = Array.isArray;
    function Z(e) {
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
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function Re(e) {
      if (Ge(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ge(e);
    }
    var Y = S.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Ee, Q;
    Q = {};
    function Xe(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = N(Y.current.type);
        Q[t] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(Y.current.type), e.ref), Q[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          _e || (_e = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ee || (Ee = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, u, p, c) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, n, u) {
      {
        var p, c = {}, o = null, x = null;
        t !== void 0 && (Re(t), o = "" + t), Ze(r) && (Re(r.key), o = "" + r.key), Xe(r) && (x = r.ref, Qe(r, u));
        for (p in r)
          z.call(r, p) && !Ke.hasOwnProperty(p) && (c[p] = r[p]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (p in b)
            c[p] === void 0 && (c[p] = b[p]);
        }
        if (o || x) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && er(c, g), x && rr(c, g);
        }
        return tr(e, o, x, u, n, Y.current, c);
      }
    }
    var ee = S.ReactCurrentOwner, we = S.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Te() {
      {
        if (ee.current) {
          var e = N(ee.current.type);
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
    var xe = {};
    function or(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + N(e._owner.type) + "."), L(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), L(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && Oe(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = F(e);
          if (typeof u == "function" && u !== e.entries)
            for (var p = u.call(e), c; !(c = p.next()).done; )
              te(c.value) && Oe(c.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = N(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var u = N(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            L(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Ce(e, r, t, n, u, p) {
      {
        var c = We(e);
        if (!c) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = ar(u);
          x ? o += x : o += Te();
          var b;
          e === null ? b = "null" : Z(e) ? b = "array" : e !== void 0 && e.$$typeof === f ? (b = "<" + (N(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, o);
        }
        var g = nr(e, r, t, u, p);
        if (g == null)
          return g;
        if (c) {
          var C = r.children;
          if (C !== void 0)
            if (n)
              if (Z(C)) {
                for (var W = 0; W < C.length; W++)
                  Pe(C[W], e);
                Object.freeze && Object.freeze(C);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(C, e);
        }
        return e === a ? sr(g) : ir(g), g;
      }
    }
    function cr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var lr = ur, fr = cr;
    U.Fragment = a, U.jsx = lr, U.jsxs = fr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ae.exports = dr() : ae.exports = vr();
var oe = ae.exports;
const pr = oe.Fragment, m = oe.jsx, I = oe.jsxs;
const yr = ({
  height: i = "7px",
  width: f = "300px",
  riderColor: s = "#343434",
  trackColor: a = "#fff",
  withProgress: v = !0,
  percentage: _ = 0,
  maxPercentage: T = 100,
  style: d
}) => {
  const l = j(null), E = j(null);
  $(() => {
    var w, y;
    s && ((w = l.current) == null || w.style.setProperty("--riderColor", s)), a && ((y = l.current) == null || y.style.setProperty("--trackColor", a));
  }, [s, a, l.current]);
  const h = _ / T * 100;
  return /* @__PURE__ */ m(
    "div",
    {
      className: "hdui-linear-loader loader-container",
      style: { height: i, width: f, ...d },
      ref: l,
      children: /* @__PURE__ */ m("div", { className: "linear-loader-surface", children: /* @__PURE__ */ m(
        "div",
        {
          className: "linear-loader-animated-surface",
          ref: E,
          "data-type": v ? "progress" : "loader",
          style: v ? {
            width: `${h >= 0 ? h : h >= 100 ? 100 : 0}%`
          } : {}
        }
      ) })
    }
  );
}, br = ({
  size: i = 40,
  trackColor: f,
  riderColor: s,
  trackWidth: a = 10,
  riderWidth: v = 10
}) => {
  const _ = j(null);
  $(() => {
    if (_.current) {
      const d = _.current.getTotalLength();
      _.current.style.setProperty(
        "--dasharray",
        d.toFixed(2) + "px"
      );
    }
  }, [i]);
  const T = a > v ? a : v;
  return /* @__PURE__ */ m("div", { className: "hdui-circular-loader loader-container", children: /* @__PURE__ */ I("svg", { className: "circular-loader-surface", width: i, height: i, children: [
    /* @__PURE__ */ m(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: `${50 - T}%`,
        stroke: f,
        style: { strokeWidth: `${a}%` }
      }
    ),
    /* @__PURE__ */ m(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: `${50 - T}%`,
        className: "cover",
        stroke: s || "rgb(52, 52, 52)",
        style: { strokeWidth: `${v}%` },
        ref: _
      }
    ),
    /* @__PURE__ */ m("div", { className: "circular-loader-animated-surface", children: "H" })
  ] }) });
};
const gr = ({ ballColor: i, style: f = {} }) => {
  const s = j(null);
  return $(() => {
    s.current && i && s.current.style.setProperty(
      "--bouncyBallColor",
      i
    );
  }, [i, s.current]), /* @__PURE__ */ I(
    "div",
    {
      className: "hd-ui-bouncy-loader loader-container",
      ref: s,
      style: f,
      children: [
        /* @__PURE__ */ m("div", { className: "ball" }),
        /* @__PURE__ */ m("div", { className: "ball" }),
        /* @__PURE__ */ m("div", { className: "ball" }),
        /* @__PURE__ */ m("div", { className: "ball" })
      ]
    }
  );
};
const Rr = ({
  onOpen: i,
  onClose: f,
  strokeColor: s = "rgb(125,125,125)"
}) => /* @__PURE__ */ I("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ m(
    "input",
    {
      type: "checkbox",
      id: "ham-menu1",
      hidden: !0,
      onChange: (v) => {
        v.target.checked ? i && i(v) : f && f(v);
      },
      title: "HamBurger"
    }
  ),
  /* @__PURE__ */ I("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
    /* @__PURE__ */ m(
      "div",
      {
        className: "stroke1 stroke",
        style: { backgroundColor: s }
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        className: "stroke2 stroke",
        style: { backgroundColor: s }
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        className: "stroke3 stroke",
        style: { backgroundColor: s }
      }
    )
  ] })
] });
const mr = ({
  children: i,
  onChange: f,
  style: s,
  optionLayerStyle: a,
  selectedOptionStyle: v,
  ..._
}) => {
  var O;
  const [T, d] = ne(!1), [l, E] = ne(), h = j(null), w = Array.isArray(i) ? i.length : 1;
  return $(() => {
    if (Array.isArray(i)) {
      for (const P of i)
        if (P.props.selected) {
          E(P.props.value);
          break;
        }
    }
  }, [i]), T && ((O = h.current) == null || O.focus()), /* @__PURE__ */ m(
    "div",
    {
      className: "hd-ui-dropdown dropdown-container",
      style: s,
      ..._,
      children: /* @__PURE__ */ I(
        "div",
        {
          className: "dropdown-container-set",
          onClick: (P) => {
            var k;
            if (P.target instanceof HTMLDivElement && ((k = P.target.dataset) != null && k.value)) {
              const F = P.target.dataset.value;
              l !== F && (E(F), f == null || f(F)), d(!1);
            } else
              d(!0);
          },
          "aria-hidden": !T,
          children: [
            /* @__PURE__ */ m("div", { className: "dropdown-button", style: v, children: l || "--Select--" }),
            /* @__PURE__ */ m(
              "div",
              {
                className: "dropdown-layer",
                style: { height: `${w * 100}%`, ...a },
                tabIndex: 0,
                ref: h,
                onBlur: () => d(!1),
                children: i
              }
            )
          ]
        }
      )
    }
  );
};
mr.Option = ({
  children: i,
  value: f,
  selected: s = !1,
  ...a
}) => /* @__PURE__ */ m(
  "div",
  {
    className: "hd-ui-dropdown-option",
    "data-value": f,
    ...s ? { selected: s } : {},
    ...a,
    children: i
  }
);
const _r = ({ containerStyle: i, children: f, torchStyle: s }) => {
  const a = j(null);
  return $(() => {
    var d, l, E;
    if (s)
      try {
        s.size && ((l = (d = a.current) == null ? void 0 : d.style) == null || l.setProperty(
          "width",
          `${(Number(s.size) * 100).toFixed(2)}%`
        )), s.color && ((E = a.current) == null || E.style.setProperty(
          "background-color",
          s.color
        ));
      } catch (h) {
        console.error(h), console.log("Incorrect style format for `torchStyle` prop");
      }
  }, [a.current, s]), /* @__PURE__ */ I(
    "div",
    {
      className: "hd-ui-torchbox torch-box-container",
      onMouseOver: () => {
        a.current && (a.current.style.visibility = "visible", a.current.style.opacity = "1");
      },
      onMouseOut: () => {
        a.current && (a.current.style.visibility = "hidden", a.current.style.opacity = "0");
      },
      onMouseMove: (d) => {
        d.stopPropagation();
        const { top: l, left: E } = d.currentTarget.getBoundingClientRect();
        a.current && a.current.animate(
          {
            left: `${d.clientX - E}px`,
            top: `${d.clientY - l}px`
          },
          { duration: 500, fill: "forwards" }
        );
      },
      style: i,
      children: [
        /* @__PURE__ */ m("div", { ref: a, className: "torch-shadow" }),
        /* @__PURE__ */ m("div", { className: "torch-shadow-overlay" }),
        /* @__PURE__ */ m("div", { className: "torch-box-container__child-container", children: f })
      ]
    }
  );
};
const Er = ({
  open: i = !1,
  closeHandler: f,
  showBackdrop: s = !0,
  keepModalCentered: a = !0,
  TransitionStyle: v = "fade",
  children: _,
  closeOnBackdropClick: T = !0,
  triggerElement: d,
  modalStyle: l,
  ...E
}) => {
  const [h, w] = ne(!1), y = j(null), O = j(null);
  $(() => {
    i && w(!0), !i && v !== "none" && O.current && y.current && (O.current.style.removeProperty("animation"), y.current.style.removeProperty("animation"), setTimeout(() => {
      O.current && y.current && (O.current.style.animation = "fade 300ms ease reverse forwards", y.current.style.animation = `${v} 200ms ease reverse forwards`);
    }, 0)), v === "none" && P();
  }, [i, v, O, y]), $(() => {
    if (!a && (d != null && d.current) && y.current) {
      const k = y.current.offsetWidth, F = y.current.offsetHeight;
      let { left: S, top: R } = d.current.getBoundingClientRect();
      S + k > window.innerWidth && (S = window.innerWidth - k - 10), R + F > window.innerHeight && (R = window.innerHeight - F - 10), y.current.style.setProperty("left", `${S}px`), y.current.style.setProperty("top", `${R}px`);
    }
  });
  const P = () => {
    i || (w(!1), f && f());
  };
  return /* @__PURE__ */ m(pr, { children: h && /* @__PURE__ */ I("div", { className: "hd-ui-modal modal-container", children: [
    s && /* @__PURE__ */ m(
      "div",
      {
        className: "hd-ui-modal-overlay",
        "data-visible": s,
        ref: O,
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
          ...l
        },
        ref: y,
        onAnimationEnd: P,
        tabIndex: -1,
        onAnimationStart: (k) => i && k.target instanceof HTMLDivElement ? k.target.focus() : void 0,
        onBlur: T ? f : void 0,
        ...E,
        children: _
      }
    )
  ] }) });
}, wr = ({
  Loader: i,
  onVisibleHandler: f,
  endOfData: s
}) => {
  const a = j(null), v = j(
    new IntersectionObserver(([_]) => {
      _.isIntersecting && f && f();
    })
  );
  return $(() => {
    a.current && v.current.observe(a.current);
  }, []), /* @__PURE__ */ m(
    "div",
    {
      className: "hd-ui-lazy-loader lazy-loader-container",
      ref: a,
      children: !s && i
    }
  );
};
export {
  gr as BouncyBalls,
  br as CircularLoader,
  mr as DropDown,
  Rr as HamBurger,
  wr as LazyLoader,
  yr as LinearLoader,
  Er as Modal,
  _r as TorchBox
};
