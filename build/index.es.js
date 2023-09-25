import Se, { useRef as j, useEffect as F, useState as fr } from "react";
var ne = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function dr() {
  if (ke)
    return M;
  ke = 1;
  var d = Se, h = Symbol.for("react.element"), u = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, v = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(c, l, E) {
    var m, p = {}, R = null, S = null;
    E !== void 0 && (R = "" + E), l.key !== void 0 && (R = "" + l.key), l.ref !== void 0 && (S = l.ref);
    for (m in l)
      o.call(l, m) && !_.hasOwnProperty(m) && (p[m] = l[m]);
    if (c && c.defaultProps)
      for (m in l = c.defaultProps, l)
        p[m] === void 0 && (p[m] = l[m]);
    return { $$typeof: h, type: c, key: R, ref: S, props: p, _owner: v.current };
  }
  return M.Fragment = u, M.jsx = x, M.jsxs = x, M;
}
var B = {};
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
    var d = Se, h = Symbol.for("react.element"), u = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), I = Symbol.iterator, U = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[U];
      return typeof r == "function" ? r : null;
    }
    var O = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var n = O.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var f = t.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Fe = !1, $e = !1, De = !1, Ae = !1, Ie = !1, oe;
    oe = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === _ || Ie || e === v || e === E || e === m || Ae || e === S || Fe || $e || De || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === p || e.$$typeof === x || e.$$typeof === c || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case u:
          return "Portal";
        case _:
          return "Profiler";
        case v:
          return "StrictMode";
        case E:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return ie(r) + ".Consumer";
          case x:
            var t = e;
            return ie(t._context) + ".Provider";
          case l:
            return Le(e, e.render, "ForwardRef");
          case p:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case R: {
            var s = e, f = s._payload, i = s._init;
            try {
              return C(i(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, L = 0, se, ue, ce, le, fe, de, ve;
    function pe() {
    }
    pe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (L === 0) {
          se = console.log, ue = console.info, ce = console.warn, le = console.error, fe = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: pe,
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
        L++;
      }
    }
    function Me() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, e, {
              value: se
            }),
            info: N({}, e, {
              value: ue
            }),
            warn: N({}, e, {
              value: ce
            }),
            error: N({}, e, {
              value: le
            }),
            group: N({}, e, {
              value: fe
            }),
            groupCollapsed: N({}, e, {
              value: de
            }),
            groupEnd: N({}, e, {
              value: ve
            })
          });
        }
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = O.ReactCurrentDispatcher, K;
    function V(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, H;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Be();
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
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = G.current, G.current = null, Ye();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (k) {
              n = k;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (k) {
              n = k;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            n = k;
          }
          e();
        }
      } catch (k) {
        if (k && n && typeof k.stack == "string") {
          for (var a = k.stack.split(`
`), T = n.stack.split(`
`), b = a.length - 1, g = T.length - 1; b >= 1 && g >= 0 && a[b] !== T[g]; )
            g--;
          for (; b >= 1 && g >= 0; b--, g--)
            if (a[b] !== T[g]) {
              if (b !== 1 || g !== 1)
                do
                  if (b--, g--, g < 0 || a[b] !== T[g]) {
                    var P = `
` + a[b].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, P), P;
                  }
                while (b >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = f, Me(), Error.prepareStackTrace = s;
      }
      var D = e ? e.displayName || e.name : "", Ce = D ? V(D) : "";
      return typeof e == "function" && H.set(e, Ce), Ce;
    }
    function Ue(e, r, t) {
      return he(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ve(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case E:
          return V("Suspense");
        case m:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ue(e.render);
          case p:
            return q(e.type, r, t);
          case R: {
            var n = e, s = n._payload, f = n._init;
            try {
              return q(f(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, me = {}, ye = O.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function He(e, r, t, n, s) {
      {
        var f = Function.call.bind(z);
        for (var i in e)
          if (f(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var T = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              a = b;
            }
            a && !(a instanceof Error) && (J(s), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), J(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, J(s), w("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function Z(e) {
      return qe(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function ge(e) {
      if (Je(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), be(e);
    }
    var Y = O.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, _e, Q;
    Q = {};
    function Ke(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = C(Y.current.type);
        Q[t] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(Y.current.type), e.ref), Q[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Re || (Re = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          _e || (_e = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, s, f, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: f
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
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, s) {
      {
        var f, i = {}, a = null, T = null;
        t !== void 0 && (ge(t), a = "" + t), Xe(r) && (ge(r.key), a = "" + r.key), Ke(r) && (T = r.ref, Ze(r, s));
        for (f in r)
          z.call(r, f) && !Ge.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (f in b)
            i[f] === void 0 && (i[f] = b[f]);
        }
        if (a || T) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, g), T && er(i, g);
        }
        return rr(e, a, T, s, n, Y.current, i);
      }
    }
    var ee = O.ReactCurrentOwner, Ee = O.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function we() {
      {
        if (ee.current) {
          var e = C(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Te = {};
    function ar(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ee.current && (n = " It was passed a child from " + C(e._owner.type) + "."), $(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            te(n) && xe(n, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = W(e);
          if (typeof s == "function" && s !== e.entries)
            for (var f = s.call(e), i; !(i = f.next()).done; )
              te(i.value) && xe(i.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === p))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          He(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var s = C(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function Oe(e, r, t, n, s, f) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = nr(s);
          T ? a += T : a += we();
          var b;
          e === null ? b = "null" : Z(e) ? b = "array" : e !== void 0 && e.$$typeof === h ? (b = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, a);
        }
        var g = tr(e, r, t, s, f);
        if (g == null)
          return g;
        if (i) {
          var P = r.children;
          if (P !== void 0)
            if (n)
              if (Z(P)) {
                for (var D = 0; D < P.length; D++)
                  Pe(P[D], e);
                Object.freeze && Object.freeze(P);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(P, e);
        }
        return e === o ? ir(g) : or(g), g;
      }
    }
    function sr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var cr = ur, lr = sr;
    B.Fragment = o, B.jsx = cr, B.jsxs = lr;
  }()), B;
}
process.env.NODE_ENV === "production" ? ne.exports = dr() : ne.exports = vr();
var ae = ne.exports;
const pr = ae.Fragment, y = ae.jsx, A = ae.jsxs;
const mr = ({
  height: d = "7px",
  width: h = "300px",
  riderColor: u = "#343434",
  trackColor: o = "#fff",
  withProgress: v = !0,
  percentage: _ = 0,
  maxPercentage: x = 100,
  style: c
}) => {
  const l = j(null), E = j(null);
  F(() => {
    var p, R;
    u && ((p = l.current) == null || p.style.setProperty("--riderColor", u)), o && ((R = l.current) == null || R.style.setProperty("--trackColor", o));
  }, [u, o, l.current]);
  const m = _ / x * 100;
  return /* @__PURE__ */ y(
    "div",
    {
      className: "hdui-linear-loader loader-container",
      style: { height: d, width: h, ...c },
      ref: l,
      children: /* @__PURE__ */ y("div", { className: "linear-loader-surface", children: /* @__PURE__ */ y(
        "div",
        {
          className: "linear-loader-animated-surface",
          ref: E,
          "data-type": v ? "progress" : "loader",
          style: v ? {
            width: `${m >= 0 ? m : m >= 100 ? 100 : 0}%`
          } : {}
        }
      ) })
    }
  );
}, yr = ({
  size: d = 40,
  trackColor: h,
  riderColor: u,
  trackWidth: o = 10,
  riderWidth: v = 10
}) => {
  const _ = j(null);
  F(() => {
    if (_.current) {
      const c = _.current.getTotalLength();
      _.current.style.setProperty(
        "--dasharray",
        c.toFixed(2) + "px"
      );
    }
  }, [d]);
  const x = o > v ? o : v;
  return /* @__PURE__ */ y("div", { className: "hdui-circular-loader loader-container", children: /* @__PURE__ */ A("svg", { className: "circular-loader-surface", width: d, height: d, children: [
    /* @__PURE__ */ y(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: `${50 - x}%`,
        stroke: h,
        style: { strokeWidth: `${o}%` }
      }
    ),
    /* @__PURE__ */ y(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: `${50 - x}%`,
        className: "cover",
        stroke: u || "rgb(52, 52, 52)",
        style: { strokeWidth: `${v}%` },
        ref: _
      }
    ),
    /* @__PURE__ */ y("div", { className: "circular-loader-animated-surface", children: "H" })
  ] }) });
};
const br = ({ ballColor: d, style: h = {} }) => {
  const u = j(null);
  return F(() => {
    u.current && d && u.current.style.setProperty(
      "--bouncyBallColor",
      d
    );
  }, [d, u.current]), /* @__PURE__ */ A(
    "div",
    {
      className: "hd-ui-bouncy-loader loader-container",
      ref: u,
      style: h,
      children: [
        /* @__PURE__ */ y("div", { className: "ball" }),
        /* @__PURE__ */ y("div", { className: "ball" }),
        /* @__PURE__ */ y("div", { className: "ball" }),
        /* @__PURE__ */ y("div", { className: "ball" })
      ]
    }
  );
};
const gr = ({
  onOpen: d,
  onClose: h,
  strokeColor: u = "rgb(125,125,125)"
}) => /* @__PURE__ */ A("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ y(
    "input",
    {
      type: "checkbox",
      id: "ham-menu1",
      hidden: !0,
      onChange: (v) => {
        v.target.checked ? d && d(v) : h && h(v);
      },
      title: "HamBurger"
    }
  ),
  /* @__PURE__ */ A("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
    /* @__PURE__ */ y(
      "div",
      {
        className: "stroke1 stroke",
        style: { backgroundColor: u }
      }
    ),
    /* @__PURE__ */ y(
      "div",
      {
        className: "stroke2 stroke",
        style: { backgroundColor: u }
      }
    ),
    /* @__PURE__ */ y(
      "div",
      {
        className: "stroke3 stroke",
        style: { backgroundColor: u }
      }
    )
  ] })
] });
const Rr = ({ containerStyle: d, children: h, torchStyle: u }) => {
  const o = j(null);
  return F(() => {
    var c, l, E;
    if (u)
      try {
        u.size && ((l = (c = o.current) == null ? void 0 : c.style) == null || l.setProperty(
          "width",
          `${(Number(u.size) * 100).toFixed(2)}%`
        )), u.color && ((E = o.current) == null || E.style.setProperty(
          "background-color",
          u.color
        ));
      } catch (m) {
        console.error(m), console.log("Incorrect style format for `torchStyle` prop");
      }
  }, [o.current, u]), /* @__PURE__ */ A(
    "div",
    {
      className: "hd-ui-torchbox torch-box-container",
      onMouseOver: () => {
        o.current && (o.current.style.visibility = "visible", o.current.style.opacity = "1");
      },
      onMouseOut: () => {
        o.current && (o.current.style.visibility = "hidden", o.current.style.opacity = "0");
      },
      onMouseMove: (c) => {
        c.stopPropagation();
        const { top: l, left: E } = c.currentTarget.getBoundingClientRect();
        o.current && o.current.animate(
          {
            left: `${c.clientX - E}px`,
            top: `${c.clientY - l}px`
          },
          { duration: 500, fill: "forwards" }
        );
      },
      style: d,
      children: [
        /* @__PURE__ */ y("div", { ref: o, className: "torch-shadow" }),
        /* @__PURE__ */ y("div", { className: "torch-shadow-overlay" }),
        /* @__PURE__ */ y("div", { className: "torch-box-container__child-container", children: h })
      ]
    }
  );
};
const _r = ({
  open: d = !1,
  closeHandler: h,
  showBackdrop: u = !0,
  keepModalCentered: o = !0,
  TransitionStyle: v = "fade",
  children: _,
  closeOnBackdropClick: x = !0,
  triggerElement: c,
  modalStyle: l
}) => {
  const [E, m] = fr(!1), p = j(null), R = j(null);
  console.log(c == null ? void 0 : c.current), F(() => {
    d && m(!0), !d && v !== "none" && R.current && p.current && (R.current.style.removeProperty("animation"), p.current.style.removeProperty("animation"), setTimeout(() => {
      R.current && p.current && (R.current.style.animation = "fade 300ms ease reverse forwards", p.current.style.animation = `${v} 200ms ease reverse forwards`);
    }, 0)), v === "none" && S();
  }, [d, v, R, p]), F(() => {
    if (!o && (c != null && c.current) && p.current) {
      const I = p.current.offsetWidth, U = p.current.offsetHeight;
      let { left: W, top: O } = c.current.getBoundingClientRect();
      W + I > window.innerWidth && (W = window.innerWidth - I - 10), O + U > window.innerHeight && (O = window.innerHeight - U - 10), p.current.style.setProperty("left", `${W}px`), p.current.style.setProperty("top", `${O}px`);
    }
  });
  const S = () => {
    console.log("Animation end"), d || (m(!1), h && h(), console.log("mount: false"));
  };
  return /* @__PURE__ */ y(pr, { children: E && /* @__PURE__ */ A("div", { className: "hd-ui-modal modal-container", children: [
    /* @__PURE__ */ y(
      "div",
      {
        className: "hd-ui-modal-overlay",
        "data-visible": u,
        onClick: x ? h : void 0,
        ref: R,
        style: v !== "none" ? { animation: "fade 400ms ease" } : {}
      }
    ),
    /* @__PURE__ */ y(
      "div",
      {
        className: "modal-child-container",
        "data-centered": o,
        "aria-modal": !0,
        style: {
          maxWidth: `${window.innerWidth}px`,
          maxHeight: `${window.innerHeight}px`,
          animation: `${v} 300ms ease`,
          ...l
        },
        ref: p,
        onAnimationEnd: S,
        children: _
      }
    )
  ] }) });
}, Er = ({
  Loader: d,
  onVisibleHandler: h,
  endOfData: u
}) => {
  const o = j(null), v = j(
    new IntersectionObserver(([_]) => {
      _.isIntersecting && h && h();
    })
  );
  return F(() => {
    o.current && v.current.observe(o.current);
  }, []), /* @__PURE__ */ y(
    "div",
    {
      className: "hd-ui-lazy-loader lazy-loader-container",
      ref: o,
      children: !u && d
    }
  );
};
export {
  br as BouncyBalls,
  yr as CircularLoader,
  gr as HamBurger,
  Er as LazyLoader,
  mr as LinearLoader,
  _r as Modal,
  Rr as TorchBox
};
