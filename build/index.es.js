import Le, { useRef as j, useEffect as F, useState as ce } from "react";
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
var $e;
function dr() {
  if ($e)
    return H;
  $e = 1;
  var o = Le, l = Symbol.for("react.element"), u = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, p = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(h, i, g) {
    var d, T = {}, x = null, P = null;
    g !== void 0 && (x = "" + g), i.key !== void 0 && (x = "" + i.key), i.ref !== void 0 && (P = i.ref);
    for (d in i)
      a.call(i, d) && !w.hasOwnProperty(d) && (T[d] = i[d]);
    if (h && h.defaultProps)
      for (d in i = h.defaultProps, i)
        T[d] === void 0 && (T[d] = i[d]);
    return { $$typeof: l, type: h, key: x, ref: P, props: T, _owner: p.current };
  }
  return H.Fragment = u, H.jsx = O, H.jsxs = O, H;
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
    var o = Le, l = Symbol.for("react.element"), u = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), h = Symbol.for("react.context"), i = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), $ = Symbol.iterator, I = "@@iterator";
    function b(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[I];
      return typeof r == "function" ? r : null;
    }
    var E = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = E.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var m = t.map(function(c) {
          return String(c);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var N = !1, z = !1, J = !1, ee = !1, M = !1, de;
    de = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === w || M || e === p || e === g || e === d || ee || e === P || N || z || J || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === T || e.$$typeof === O || e.$$typeof === h || e.$$typeof === i || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case u:
          return "Portal";
        case w:
          return "Profiler";
        case p:
          return "StrictMode";
        case g:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return ve(r) + ".Consumer";
          case O:
            var t = e;
            return ve(t._context) + ".Provider";
          case i:
            return Me(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : A(e.type) || "Memo";
          case x: {
            var f = e, m = f._payload, c = f._init;
            try {
              return A(c(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, U = 0, pe, me, he, ye, be, ge, Re;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Ye() {
      {
        if (U === 0) {
          pe = console.log, me = console.info, he = console.warn, ye = console.error, be = console.group, ge = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
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
              value: Re
            })
          });
        }
        U < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = E.ReactCurrentDispatcher, te;
    function G(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
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
      var f = Error.prepareStackTrace;
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
          for (var s = D.stack.split(`
`), C = n.stack.split(`
`), R = s.length - 1, _ = C.length - 1; R >= 1 && _ >= 0 && s[R] !== C[_]; )
            _--;
          for (; R >= 1 && _ >= 0; R--, _--)
            if (s[R] !== C[_]) {
              if (R !== 1 || _ !== 1)
                do
                  if (R--, _--, _ < 0 || s[R] !== C[_]) {
                    var S = `
` + s[R].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, S), S;
                  }
                while (R >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = m, Be(), Error.prepareStackTrace = f;
      }
      var B = e ? e.displayName || e.name : "", Fe = B ? G(B) : "";
      return typeof e == "function" && K.set(e, Fe), Fe;
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
        case d:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            return Ve(e.render);
          case T:
            return X(e.type, r, t);
          case x: {
            var n = e, f = n._payload, m = n._init;
            try {
              return X(m(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, we = {}, Te = E.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var r = e._owner, t = X(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, f) {
      {
        var m = Function.call.bind(Z);
        for (var c in e)
          if (m(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var C = Error((n || "React class") + ": " + t + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              s = e[c](r, c, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              s = R;
            }
            s && !(s instanceof Error) && (Q(f), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, c, typeof s), Q(null)), s instanceof Error && !(s.message in we) && (we[s.message] = !0, Q(f), v("Failed %s type: %s", t, s.message), Q(null));
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
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), xe(e);
    }
    var V = E.ReactCurrentOwner, Ke = {
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
        oe[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(V.current.type), e.ref), oe[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ce || (Ce = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, f, m, c) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: c,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function nr(e, r, t, n, f) {
      {
        var m, c = {}, s = null, C = null;
        t !== void 0 && (Pe(t), s = "" + t), Ze(r) && (Pe(r.key), s = "" + r.key), Xe(r) && (C = r.ref, Qe(r, f));
        for (m in r)
          Z.call(r, m) && !Ke.hasOwnProperty(m) && (c[m] = r[m]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (m in R)
            c[m] === void 0 && (c[m] = R[m]);
        }
        if (s || C) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && er(c, _), C && rr(c, _);
        }
        return tr(e, s, C, f, n, V.current, c);
      }
    }
    var ie = E.ReactCurrentOwner, ke = E.ReactDebugCurrentFrame;
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
      return typeof e == "object" && e !== null && e.$$typeof === l;
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
        e && e._owner && e._owner !== ie.current && (n = " It was passed a child from " + A(e._owner.type) + "."), Y(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Y(null);
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
          var f = b(e);
          if (typeof f == "function" && f !== e.entries)
            for (var m = f.call(e), c; !(c = m.next()).done; )
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
        else if (typeof r == "object" && (r.$$typeof === i || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = A(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !se) {
          se = !0;
          var f = A(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Y(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function De(e, r, t, n, f, m) {
      {
        var c = We(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = ar(f);
          C ? s += C : s += Se();
          var R;
          e === null ? R = "null" : ae(e) ? R = "array" : e !== void 0 && e.$$typeof === l ? (R = "<" + (A(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, s);
        }
        var _ = nr(e, r, t, f, m);
        if (_ == null)
          return _;
        if (c) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (ae(S)) {
                for (var B = 0; B < S.length; B++)
                  Ae(S[B], e);
                Object.freeze && Object.freeze(S);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(S, e);
        }
        return e === a ? sr(_) : ir(_), _;
      }
    }
    function ur(e, r, t) {
      return De(e, r, t, !0);
    }
    function cr(e, r, t) {
      return De(e, r, t, !1);
    }
    var lr = cr, fr = ur;
    q.Fragment = a, q.jsx = lr, q.jsxs = fr;
  }()), q;
}
process.env.NODE_ENV === "production" ? le.exports = dr() : le.exports = vr();
var fe = le.exports;
const pr = fe.Fragment, y = fe.jsx, W = fe.jsxs;
const yr = ({
  height: o = "7px",
  width: l = "300px",
  riderColor: u = "#343434",
  trackColor: a = "#fff",
  withProgress: p = !0,
  percentage: w = 0,
  maxPercentage: O = 100,
  style: h
}) => {
  const i = j(null), g = j(null);
  F(() => {
    var T, x;
    u && ((T = i.current) == null || T.style.setProperty("--riderColor", u)), a && ((x = i.current) == null || x.style.setProperty("--trackColor", a));
  }, [u, a, i.current]);
  const d = w / O * 100;
  return /* @__PURE__ */ y(
    "div",
    {
      className: "hdui-linear-loader loader-container",
      style: { height: o, width: l, ...h },
      ref: i,
      children: /* @__PURE__ */ y("div", { className: "linear-loader-surface", children: /* @__PURE__ */ y(
        "div",
        {
          className: "linear-loader-animated-surface",
          ref: g,
          "data-type": p ? "progress" : "loader",
          style: p ? {
            width: `${d >= 0 ? d : d >= 100 ? 100 : 0}%`
          } : {}
        }
      ) })
    }
  );
}, br = ({
  size: o = 40,
  trackColor: l,
  riderColor: u,
  trackWidth: a = 10,
  riderWidth: p = 10
}) => {
  const w = j(null);
  F(() => {
    var h, i;
    if (w.current) {
      const g = ((i = (h = w.current) == null ? void 0 : h.getTotalLength) == null ? void 0 : i.call(h)) || 0;
      w.current.style.setProperty(
        "--dasharray",
        g.toFixed(2) + "px"
      );
    }
  }, [o]);
  const O = a > p ? a : p;
  return /* @__PURE__ */ y("div", { className: "hdui-circular-loader loader-container", children: /* @__PURE__ */ W("svg", { className: "circular-loader-surface", width: o, height: o, children: [
    /* @__PURE__ */ y(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: `${50 - O}%`,
        stroke: l,
        style: { strokeWidth: `${a}%` }
      }
    ),
    /* @__PURE__ */ y(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: `${50 - O}%`,
        className: "cover",
        stroke: u || "rgb(52, 52, 52)",
        style: { strokeWidth: `${p}%` },
        ref: w
      }
    ),
    /* @__PURE__ */ y("div", { className: "circular-loader-animated-surface", children: "H" })
  ] }) });
};
const gr = ({ ballColor: o, style: l = {} }) => {
  const u = j(null);
  return F(() => {
    u.current && o && u.current.style.setProperty(
      "--bouncyBallColor",
      o
    );
  }, [o, u.current]), /* @__PURE__ */ W(
    "div",
    {
      className: "hd-ui-bouncy-loader loader-container",
      ref: u,
      style: l,
      children: [
        /* @__PURE__ */ y("div", { className: "ball" }),
        /* @__PURE__ */ y("div", { className: "ball" }),
        /* @__PURE__ */ y("div", { className: "ball" }),
        /* @__PURE__ */ y("div", { className: "ball" })
      ]
    }
  );
};
const Rr = ({
  onOpen: o,
  onClose: l,
  strokeColor: u = "rgb(125,125,125)"
}) => /* @__PURE__ */ W("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ y(
    "input",
    {
      type: "checkbox",
      id: "ham-menu1",
      hidden: !0,
      onChange: (p) => {
        p.target.checked ? o && o(p) : l && l(p);
      },
      title: "HamBurger"
    }
  ),
  /* @__PURE__ */ W("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
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
const mr = ({
  children: o,
  onChange: l,
  style: u,
  optionLayerStyle: a,
  selectedOptionStyle: p,
  defaultValue: w,
  actionType: O,
  ...h
}) => {
  var I;
  const [i, g] = ce(!1), [d, T] = ce(), x = j(null), P = Array.isArray(o) ? o.length : 1;
  return F(() => {
    var b, E, v, k, N, z;
    if (Array.isArray(o)) {
      let J = 0;
      for (const [ee, M] of o.entries())
        if (w === M.props.value || M.props.selected) {
          J = ee, T({
            layout: M.props.children,
            value: M.props.value
          });
          break;
        }
      (v = (E = (b = x.current) == null ? void 0 : b.children) == null ? void 0 : E[J]) == null || v.setAttribute(
        "selected",
        ""
      );
    } else
      (z = (N = (k = x.current) == null ? void 0 : k.children) == null ? void 0 : N[0]) == null || z.setAttribute("selected", "");
  }, [o]), i && ((I = x.current) == null || I.focus()), /* @__PURE__ */ y("div", { className: "hd-ui-dropdown dropdown-container", ...h, children: /* @__PURE__ */ W(
    "div",
    {
      className: `dropdown-container-set${O === "hover" ? " mouseover" : ""}`,
      onClick: (b) => {
        var E, v, k;
        if (b.target instanceof HTMLDivElement && b.target.ariaLabel === "option") {
          const N = b.target.dataset.value || ((E = b.target.textContent) == null ? void 0 : E.trim()) || "";
          (d == null ? void 0 : d.value) !== N && (T({
            layout: b.target.innerHTML || N,
            value: N
          }), (k = (v = b.target.parentElement) == null ? void 0 : v.querySelector("[selected]")) == null || k.removeAttribute("selected"), b.target.setAttribute("selected", ""), l == null || l(N)), g(!1);
        } else
          g(!0);
      },
      "aria-hidden": !i,
      style: u,
      children: [
        /* @__PURE__ */ y("div", { className: "dropdown-button", style: p, children: (d == null ? void 0 : d.layout) || "--Select--" }),
        /* @__PURE__ */ y(
          "div",
          {
            className: "dropdown-layer",
            style: { height: `${P * 100}%`, ...a },
            ref: x,
            tabIndex: 0,
            onBlur: () => g(!1),
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
  selected: u = !1,
  ...a
}) => /* @__PURE__ */ y(
  "div",
  {
    className: "hd-ui-dropdown-option",
    "data-value": l,
    "aria-label": "option",
    ...u ? { selected: u } : {},
    ...a,
    children: o
  }
);
const Er = ({ containerStyle: o, children: l, torchStyle: u }) => {
  const a = j(null);
  return F(() => {
    var h, i, g;
    if (u)
      try {
        u.size && ((i = (h = a.current) == null ? void 0 : h.style) == null || i.setProperty(
          "width",
          `${(Number(u.size) * 100).toFixed(2)}%`
        )), u.color && ((g = a.current) == null || g.style.setProperty(
          "background-color",
          u.color
        ));
      } catch (d) {
        console.error(d), console.log("Incorrect style format for `torchStyle` prop");
      }
  }, [a.current, u]), /* @__PURE__ */ W(
    "div",
    {
      className: "hd-ui-torchbox torch-box-container",
      onMouseOver: () => {
        a.current && (a.current.style.visibility = "visible", a.current.style.opacity = "1");
      },
      onMouseOut: () => {
        a.current && (a.current.style.visibility = "hidden", a.current.style.opacity = "0");
      },
      onMouseMove: (h) => {
        h.stopPropagation();
        const { top: i, left: g } = h.currentTarget.getBoundingClientRect();
        a.current && a.current.animate(
          {
            left: `${h.clientX - g}px`,
            top: `${h.clientY - i}px`
          },
          { duration: 500, fill: "forwards" }
        );
      },
      style: o,
      children: [
        /* @__PURE__ */ y("div", { ref: a, className: "torch-shadow" }),
        /* @__PURE__ */ y("div", { className: "torch-shadow-overlay" }),
        /* @__PURE__ */ y("div", { className: "torch-box-container__child-container", children: l })
      ]
    }
  );
};
const _r = ({
  open: o = !1,
  closeHandler: l,
  showBackdrop: u = !0,
  keepModalCentered: a = !0,
  TransitionStyle: p = "fade",
  children: w,
  closeOnBlur: O = !0,
  closeOnBackDropClick: h = !0,
  triggerElement: i,
  modalStyle: g,
  ...d
}) => {
  const [T, x] = ce(!1), P = j(null), $ = j(null);
  F(() => {
    var b, E;
    o && x(!0), !o && p !== "none" && ((b = $.current) == null || b.style.removeProperty("animation"), (E = P.current) == null || E.style.removeProperty("animation"), setTimeout(() => {
      var v, k;
      (v = $.current) == null || v.style.setProperty(
        "animation",
        "fade 300ms ease reverse forwards"
      ), (k = P.current) == null || k.style.setProperty(
        "animation",
        `${p} 200ms ease reverse forwards`
      );
    }, 0)), p === "none" && I();
  }, [o, p, $, P]), F(() => {
    var b;
    o && ((b = P.current) == null || b.focus());
  }, [o, T, P.current]), F(() => {
    if (!a && (i != null && i.current) && P.current) {
      const b = P.current.offsetWidth, E = P.current.offsetHeight;
      let { left: v, top: k } = i.current.getBoundingClientRect();
      v + b > window.innerWidth && (v = window.innerWidth - b - 10), k + E > window.innerHeight && (k = window.innerHeight - E - 10), P.current.style.setProperty("left", `${v}px`), P.current.style.setProperty("top", `${k}px`);
    }
  });
  const I = () => {
    o || (x(!1), l == null || l());
  };
  return /* @__PURE__ */ y(pr, { children: T && /* @__PURE__ */ W("div", { className: "hd-ui-modal modal-container", children: [
    u && /* @__PURE__ */ y(
      "div",
      {
        className: "hd-ui-modal-overlay",
        "data-visible": u,
        ref: $,
        onClick: h ? l : void 0,
        style: p !== "none" ? { animation: "fade 400ms ease" } : {}
      }
    ),
    /* @__PURE__ */ y(
      "div",
      {
        className: "modal-child-container",
        "data-centered": a,
        "aria-modal": !0,
        style: {
          maxWidth: `${window.innerWidth}px`,
          maxHeight: `${window.innerHeight}px`,
          animation: `${p} 300ms ease`,
          ...g
        },
        ref: P,
        onAnimationEnd: I,
        tabIndex: 0,
        onBlur: O ? (b) => {
          const E = b.currentTarget;
          setTimeout(() => {
            E.contains(document.activeElement) || l();
          }, 0);
        } : void 0,
        ...d,
        children: w
      }
    )
  ] }) });
}, wr = ({
  Loader: o,
  onVisibleHandler: l,
  endOfData: u
}) => {
  const a = j(null), p = j(
    new IntersectionObserver(([w]) => {
      w.isIntersecting && l && l();
    })
  );
  return F(() => {
    a.current && p.current.observe(a.current);
  }, []), /* @__PURE__ */ y(
    "div",
    {
      className: "hd-ui-lazy-loader lazy-loader-container",
      ref: a,
      children: !u && o
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
  _r as Modal,
  Er as TorchBox
};
