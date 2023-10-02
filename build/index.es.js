import De, { useRef as N, useEffect as $, useState as ae } from "react";
var oe = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function dr() {
  if (je)
    return U;
  je = 1;
  var o = De, l = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(m, u, y) {
    var h, E = {}, P = null, w = null;
    y !== void 0 && (P = "" + y), u.key !== void 0 && (P = "" + u.key), u.ref !== void 0 && (w = u.ref);
    for (h in u)
      a.call(u, h) && !_.hasOwnProperty(h) && (E[h] = u[h]);
    if (m && m.defaultProps)
      for (h in u = m.defaultProps, u)
        E[h] === void 0 && (E[h] = u[h]);
    return { $$typeof: l, type: m, key: P, ref: w, props: E, _owner: d.current };
  }
  return U.Fragment = s, U.jsx = x, U.jsxs = x, U;
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
var Ne;
function vr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var o = De, l = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), m = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), j = Symbol.iterator, O = "@@iterator";
    function k(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = j && e[j] || e[O];
      return typeof r == "function" ? r : null;
    }
    var T = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        A("error", e, t);
      }
    }
    function A(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var v = t.map(function(c) {
          return String(c);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Fe = !1, $e = !1, Ae = !1, Ie = !1, Le = !1, se;
    se = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === _ || Le || e === d || e === y || e === h || Ie || e === w || Fe || $e || Ae || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === E || e.$$typeof === x || e.$$typeof === m || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function D(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case d:
          return "StrictMode";
        case y:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ue(r) + ".Consumer";
          case x:
            var t = e;
            return ue(t._context) + ".Provider";
          case u:
            return Me(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : D(e.type) || "Memo";
          case P: {
            var f = e, v = f._payload, c = f._init;
            try {
              return D(c(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, Y = 0, ce, le, fe, de, ve, pe, me;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ye() {
      {
        if (Y === 0) {
          ce = console.log, le = console.info, fe = console.warn, de = console.error, ve = console.group, pe = console.groupCollapsed, me = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
        Y++;
      }
    }
    function Be() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ce
            }),
            info: I({}, e, {
              value: le
            }),
            warn: I({}, e, {
              value: fe
            }),
            error: I({}, e, {
              value: de
            }),
            group: I({}, e, {
              value: ve
            }),
            groupCollapsed: I({}, e, {
              value: pe
            }),
            groupEnd: I({}, e, {
              value: me
            })
          });
        }
        Y < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = T.ReactCurrentDispatcher, X;
    function H(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            X = n && n[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, q;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Ue();
    }
    function ye(e, r) {
      if (!e || Z)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = K.current, K.current = null, Ye();
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
          for (var i = F.stack.split(`
`), C = n.stack.split(`
`), g = i.length - 1, R = C.length - 1; g >= 1 && R >= 0 && i[g] !== C[R]; )
            R--;
          for (; g >= 1 && R >= 0; g--, R--)
            if (i[g] !== C[R]) {
              if (g !== 1 || R !== 1)
                do
                  if (g--, R--, R < 0 || i[g] !== C[R]) {
                    var S = `
` + i[g].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, S), S;
                  }
                while (g >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Z = !1, K.current = v, Be(), Error.prepareStackTrace = f;
      }
      var M = e ? e.displayName || e.name : "", Se = M ? H(M) : "";
      return typeof e == "function" && q.set(e, Se), Se;
    }
    function Ve(e, r, t) {
      return ye(e, !1);
    }
    function He(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, He(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case y:
          return H("Suspense");
        case h:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ve(e.render);
          case E:
            return z(e.type, r, t);
          case P: {
            var n = e, f = n._payload, v = n._init;
            try {
              return z(v(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, be = {}, ge = T.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, f) {
      {
        var v = Function.call.bind(J);
        for (var c in e)
          if (v(e, c)) {
            var i = void 0;
            try {
              if (typeof e[c] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              i = e[c](r, c, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              i = g;
            }
            i && !(i instanceof Error) && (G(f), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, c, typeof i), G(null)), i instanceof Error && !(i.message in be) && (be[i.message] = !0, G(f), b("Failed %s type: %s", t, i.message), G(null));
          }
      }
    }
    var ze = Array.isArray;
    function Q(e) {
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
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function _e(e) {
      if (Ge(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Re(e);
    }
    var B = T.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, we, ee;
    ee = {};
    function Xe(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var t = D(B.current.type);
        ee[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(B.current.type), e.ref), ee[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          we || (we = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, f, v, c) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, t, n, f) {
      {
        var v, c = {}, i = null, C = null;
        t !== void 0 && (_e(t), i = "" + t), Ze(r) && (_e(r.key), i = "" + r.key), Xe(r) && (C = r.ref, Qe(r, f));
        for (v in r)
          J.call(r, v) && !Ke.hasOwnProperty(v) && (c[v] = r[v]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (v in g)
            c[v] === void 0 && (c[v] = g[v]);
        }
        if (i || C) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(c, R), C && rr(c, R);
        }
        return tr(e, i, C, f, n, B.current, c);
      }
    }
    var re = T.ReactCurrentOwner, Te = T.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function xe() {
      {
        if (re.current) {
          var e = D(re.current.type);
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
    var Pe = {};
    function or(e) {
      {
        var r = xe();
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
        if (Pe[t])
          return;
        Pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + D(e._owner.type) + "."), W(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), W(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && Oe(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = k(e);
          if (typeof f == "function" && f !== e.entries)
            for (var v = f.call(e), c; !(c = v.next()).done; )
              ne(c.value) && Oe(c.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = D(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var f = D(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            W(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function ke(e, r, t, n, f, v) {
      {
        var c = We(e);
        if (!c) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = ar(f);
          C ? i += C : i += xe();
          var g;
          e === null ? g = "null" : Q(e) ? g = "array" : e !== void 0 && e.$$typeof === l ? (g = "<" + (D(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, i);
        }
        var R = nr(e, r, t, f, v);
        if (R == null)
          return R;
        if (c) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (Q(S)) {
                for (var M = 0; M < S.length; M++)
                  Ce(S[M], e);
                Object.freeze && Object.freeze(S);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(S, e);
        }
        return e === a ? sr(R) : ir(R), R;
      }
    }
    function ur(e, r, t) {
      return ke(e, r, t, !0);
    }
    function cr(e, r, t) {
      return ke(e, r, t, !1);
    }
    var lr = cr, fr = ur;
    V.Fragment = a, V.jsx = lr, V.jsxs = fr;
  }()), V;
}
process.env.NODE_ENV === "production" ? oe.exports = dr() : oe.exports = vr();
var ie = oe.exports;
const pr = ie.Fragment, p = ie.jsx, L = ie.jsxs;
const yr = ({
  height: o = "7px",
  width: l = "300px",
  riderColor: s = "#343434",
  trackColor: a = "#fff",
  withProgress: d = !0,
  percentage: _ = 0,
  maxPercentage: x = 100,
  style: m
}) => {
  const u = N(null), y = N(null);
  $(() => {
    var E, P;
    s && ((E = u.current) == null || E.style.setProperty("--riderColor", s)), a && ((P = u.current) == null || P.style.setProperty("--trackColor", a));
  }, [s, a, u.current]);
  const h = _ / x * 100;
  return /* @__PURE__ */ p(
    "div",
    {
      className: "hdui-linear-loader loader-container",
      style: { height: o, width: l, ...m },
      ref: u,
      children: /* @__PURE__ */ p("div", { className: "linear-loader-surface", children: /* @__PURE__ */ p(
        "div",
        {
          className: "linear-loader-animated-surface",
          ref: y,
          "data-type": d ? "progress" : "loader",
          style: d ? {
            width: `${h >= 0 ? h : h >= 100 ? 100 : 0}%`
          } : {}
        }
      ) })
    }
  );
}, br = ({
  size: o = 40,
  trackColor: l,
  riderColor: s,
  trackWidth: a = 10,
  riderWidth: d = 10
}) => {
  const _ = N(null);
  $(() => {
    if (_.current) {
      const m = _.current.getTotalLength();
      _.current.style.setProperty(
        "--dasharray",
        m.toFixed(2) + "px"
      );
    }
  }, [o]);
  const x = a > d ? a : d;
  return /* @__PURE__ */ p("div", { className: "hdui-circular-loader loader-container", children: /* @__PURE__ */ L("svg", { className: "circular-loader-surface", width: o, height: o, children: [
    /* @__PURE__ */ p(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: `${50 - x}%`,
        stroke: l,
        style: { strokeWidth: `${a}%` }
      }
    ),
    /* @__PURE__ */ p(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: `${50 - x}%`,
        className: "cover",
        stroke: s || "rgb(52, 52, 52)",
        style: { strokeWidth: `${d}%` },
        ref: _
      }
    ),
    /* @__PURE__ */ p("div", { className: "circular-loader-animated-surface", children: "H" })
  ] }) });
};
const gr = ({ ballColor: o, style: l = {} }) => {
  const s = N(null);
  return $(() => {
    s.current && o && s.current.style.setProperty(
      "--bouncyBallColor",
      o
    );
  }, [o, s.current]), /* @__PURE__ */ L(
    "div",
    {
      className: "hd-ui-bouncy-loader loader-container",
      ref: s,
      style: l,
      children: [
        /* @__PURE__ */ p("div", { className: "ball" }),
        /* @__PURE__ */ p("div", { className: "ball" }),
        /* @__PURE__ */ p("div", { className: "ball" }),
        /* @__PURE__ */ p("div", { className: "ball" })
      ]
    }
  );
};
const Rr = ({
  onOpen: o,
  onClose: l,
  strokeColor: s = "rgb(125,125,125)"
}) => /* @__PURE__ */ L("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ p(
    "input",
    {
      type: "checkbox",
      id: "ham-menu1",
      hidden: !0,
      onChange: (d) => {
        d.target.checked ? o && o(d) : l && l(d);
      },
      title: "HamBurger"
    }
  ),
  /* @__PURE__ */ L("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
    /* @__PURE__ */ p(
      "div",
      {
        className: "stroke1 stroke",
        style: { backgroundColor: s }
      }
    ),
    /* @__PURE__ */ p(
      "div",
      {
        className: "stroke2 stroke",
        style: { backgroundColor: s }
      }
    ),
    /* @__PURE__ */ p(
      "div",
      {
        className: "stroke3 stroke",
        style: { backgroundColor: s }
      }
    )
  ] })
] });
const mr = ({
  children: o,
  onChange: l,
  style: s,
  optionLayerStyle: a,
  selectedOptionStyle: d,
  defaultValue: _,
  ...x
}) => {
  var j;
  const [m, u] = ae(!1), [y, h] = ae(), E = N(null), P = Array.isArray(o) ? o.length : 1;
  return $(() => {
    if (Array.isArray(o)) {
      for (const O of o)
        if (_ === O.props.value || O.props.selected) {
          h({
            layout: O.props.children,
            value: O.props.value
          });
          break;
        }
    }
  }, [o]), m && ((j = E.current) == null || j.focus()), /* @__PURE__ */ p("div", { className: "hd-ui-dropdown dropdown-container", ...x, children: /* @__PURE__ */ L(
    "div",
    {
      className: "dropdown-container-set",
      onClick: (O) => {
        var k;
        if (O.target instanceof HTMLDivElement && O.target.ariaLabel === "option") {
          const T = O.target.dataset.value || ((k = O.target.textContent) == null ? void 0 : k.trim()) || "";
          (y == null ? void 0 : y.value) !== T && (h({
            layout: O.target.innerHTML || T,
            value: T
          }), l == null || l(T)), u(!1);
        } else
          u(!0);
      },
      "aria-hidden": !m,
      style: s,
      children: [
        /* @__PURE__ */ p("div", { className: "dropdown-button", style: d, children: (y == null ? void 0 : y.layout) || "--Select--" }),
        /* @__PURE__ */ p(
          "div",
          {
            className: "dropdown-layer",
            style: { height: `${P * 100}%`, ...a },
            ref: E,
            tabIndex: 0,
            onBlur: () => u(!1),
            children: o
          }
        )
      ]
    }
  ) });
};
mr.Option = ({
  children: o,
  value: l,
  selected: s = !1,
  ...a
}) => /* @__PURE__ */ p(
  "div",
  {
    className: "hd-ui-dropdown-option",
    "data-value": l,
    "aria-label": "option",
    ...s ? { selected: s } : {},
    ...a,
    children: o
  }
);
const _r = ({ containerStyle: o, children: l, torchStyle: s }) => {
  const a = N(null);
  return $(() => {
    var m, u, y;
    if (s)
      try {
        s.size && ((u = (m = a.current) == null ? void 0 : m.style) == null || u.setProperty(
          "width",
          `${(Number(s.size) * 100).toFixed(2)}%`
        )), s.color && ((y = a.current) == null || y.style.setProperty(
          "background-color",
          s.color
        ));
      } catch (h) {
        console.error(h), console.log("Incorrect style format for `torchStyle` prop");
      }
  }, [a.current, s]), /* @__PURE__ */ L(
    "div",
    {
      className: "hd-ui-torchbox torch-box-container",
      onMouseOver: () => {
        a.current && (a.current.style.visibility = "visible", a.current.style.opacity = "1");
      },
      onMouseOut: () => {
        a.current && (a.current.style.visibility = "hidden", a.current.style.opacity = "0");
      },
      onMouseMove: (m) => {
        m.stopPropagation();
        const { top: u, left: y } = m.currentTarget.getBoundingClientRect();
        a.current && a.current.animate(
          {
            left: `${m.clientX - y}px`,
            top: `${m.clientY - u}px`
          },
          { duration: 500, fill: "forwards" }
        );
      },
      style: o,
      children: [
        /* @__PURE__ */ p("div", { ref: a, className: "torch-shadow" }),
        /* @__PURE__ */ p("div", { className: "torch-shadow-overlay" }),
        /* @__PURE__ */ p("div", { className: "torch-box-container__child-container", children: l })
      ]
    }
  );
};
const Er = ({
  open: o = !1,
  closeHandler: l,
  showBackdrop: s = !0,
  keepModalCentered: a = !0,
  TransitionStyle: d = "fade",
  children: _,
  closeOnBlur: x = !0,
  closeOnBackDropClick: m = !0,
  triggerElement: u,
  modalStyle: y,
  ...h
}) => {
  const [E, P] = ae(!1), w = N(null), j = N(null);
  $(() => {
    var k, T;
    o && P(!0), !o && d !== "none" && ((k = j.current) == null || k.style.removeProperty("animation"), (T = w.current) == null || T.style.removeProperty("animation"), setTimeout(() => {
      var b, A;
      (b = j.current) == null || b.style.setProperty(
        "animation",
        "fade 300ms ease reverse forwards"
      ), (A = w.current) == null || A.style.setProperty(
        "animation",
        `${d} 200ms ease reverse forwards`
      );
    }, 0)), d === "none" && O();
  }, [o, d, j, w]), $(() => {
    var k;
    o && ((k = w.current) == null || k.focus());
  }, [o, E, w.current]), $(() => {
    if (!a && (u != null && u.current) && w.current) {
      const k = w.current.offsetWidth, T = w.current.offsetHeight;
      let { left: b, top: A } = u.current.getBoundingClientRect();
      b + k > window.innerWidth && (b = window.innerWidth - k - 10), A + T > window.innerHeight && (A = window.innerHeight - T - 10), w.current.style.setProperty("left", `${b}px`), w.current.style.setProperty("top", `${A}px`);
    }
  });
  const O = () => {
    o || (P(!1), l == null || l());
  };
  return /* @__PURE__ */ p(pr, { children: E && /* @__PURE__ */ L("div", { className: "hd-ui-modal modal-container", children: [
    s && /* @__PURE__ */ p(
      "div",
      {
        className: "hd-ui-modal-overlay",
        "data-visible": s,
        ref: j,
        onClick: m ? l : void 0,
        style: d !== "none" ? { animation: "fade 400ms ease" } : {}
      }
    ),
    /* @__PURE__ */ p(
      "div",
      {
        className: "modal-child-container",
        "data-centered": a,
        "aria-modal": !0,
        style: {
          maxWidth: `${window.innerWidth}px`,
          maxHeight: `${window.innerHeight}px`,
          animation: `${d} 300ms ease`,
          ...y
        },
        ref: w,
        onAnimationEnd: O,
        tabIndex: 0,
        onBlur: x ? l : void 0,
        ...h,
        children: _
      }
    )
  ] }) });
}, wr = ({
  Loader: o,
  onVisibleHandler: l,
  endOfData: s
}) => {
  const a = N(null), d = N(
    new IntersectionObserver(([_]) => {
      _.isIntersecting && l && l();
    })
  );
  return $(() => {
    a.current && d.current.observe(a.current);
  }, []), /* @__PURE__ */ p(
    "div",
    {
      className: "hd-ui-lazy-loader lazy-loader-container",
      ref: a,
      children: !s && o
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
