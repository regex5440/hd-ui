import xe, { useRef as ur, useEffect as cr } from "react";
var B = {}, lr = {
  get exports() {
    return B;
  },
  set exports(m) {
    B = m;
  }
}, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function fr() {
  if (Oe)
    return A;
  Oe = 1;
  var m = xe, y = Symbol.for("react.element"), O = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, k = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(d, l, E) {
    var b, _ = {}, w = null, W = null;
    E !== void 0 && (w = "" + E), l.key !== void 0 && (w = "" + l.key), l.ref !== void 0 && (W = l.ref);
    for (b in l)
      u.call(l, b) && !N.hasOwnProperty(b) && (_[b] = l[b]);
    if (d && d.defaultProps)
      for (b in l = d.defaultProps, l)
        _[b] === void 0 && (_[b] = l[b]);
    return { $$typeof: y, type: d, key: w, ref: W, props: _, _owner: k.current };
  }
  return A.Fragment = O, A.jsx = C, A.jsxs = C, A;
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
var we;
function dr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var m = xe, y = Symbol.for("react.element"), O = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), d = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Q = Symbol.iterator, Ce = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Ce];
      return typeof r == "function" ? r : null;
    }
    var P = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Se("error", e, t);
      }
    }
    function Se(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var je = !1, ke = !1, Ne = !1, Fe = !1, De = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === N || De || e === k || e === E || e === b || Fe || e === W || je || ke || Ne || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === C || e.$$typeof === d || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case O:
          return "Portal";
        case N:
          return "Profiler";
        case k:
          return "StrictMode";
        case E:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return re(r) + ".Consumer";
          case C:
            var t = e;
            return re(t._context) + ".Provider";
          case l:
            return $e(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case w: {
            var o = e, s = o._payload, i = o._init;
            try {
              return R(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, F = 0, te, ne, ae, ie, oe, se, ue;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ie() {
      {
        if (F === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, se = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        F++;
      }
    }
    function We() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: te
            }),
            info: x({}, e, {
              value: ne
            }),
            warn: x({}, e, {
              value: ae
            }),
            error: x({}, e, {
              value: ie
            }),
            group: x({}, e, {
              value: oe
            }),
            groupCollapsed: x({}, e, {
              value: se
            }),
            groupEnd: x({}, e, {
              value: ue
            })
          });
        }
        F < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, H;
    function Y(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var z = !1, L;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Ye();
    }
    function le(e, r) {
      if (!e || z)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = q.current, q.current = null, Ie();
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
            } catch (T) {
              n = T;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (T) {
              n = T;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          e();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), h = n.stack.split(`
`), c = a.length - 1, f = h.length - 1; c >= 1 && f >= 0 && a[c] !== h[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== h[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== h[f]) {
                    var g = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, g), g;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        z = !1, q.current = s, We(), Error.prepareStackTrace = o;
      }
      var j = e ? e.displayName || e.name : "", Te = j ? Y(j) : "";
      return typeof e == "function" && L.set(e, Te), Te;
    }
    function Le(e, r, t) {
      return le(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Me(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case E:
          return Y("Suspense");
        case b:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Le(e.render);
          case _:
            return M(e.type, r, t);
          case w: {
            var n = e, o = n._payload, s = n._init;
            try {
              return M(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, fe = {}, de = P.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, o) {
      {
        var s = Function.call.bind(V);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (U(o), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), U(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, U(o), p("Failed %s type: %s", t, a.message), U(null));
          }
      }
    }
    var Ue = Array.isArray;
    function J(e) {
      return Ue(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (qe(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ve(e);
    }
    var D = P.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, me, G;
    G = {};
    function ze(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Je(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = R(D.current.type);
        G[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(D.current.type), e.ref), G[t] = !0);
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          he || (he = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          me || (me = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
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
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, o) {
      {
        var s, i = {}, a = null, h = null;
        t !== void 0 && (pe(t), a = "" + t), Je(r) && (pe(r.key), a = "" + r.key), ze(r) && (h = r.ref, Ge(r, o));
        for (s in r)
          V.call(r, s) && !He.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            i[s] === void 0 && (i[s] = c[s]);
        }
        if (a || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ke(i, f), h && Xe(i, f);
        }
        return Ze(e, a, h, o, n, D.current, i);
      }
    }
    var K = P.ReactCurrentOwner, be = P.ReactDebugCurrentFrame;
    function S(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function ge() {
      {
        if (K.current) {
          var e = R(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function rr(e) {
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
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + R(e._owner.type) + "."), S(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), S(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Z(n) && Ee(n, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Pe(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              Z(i.value) && Ee(i.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var o = R(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            S(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), S(null);
            break;
          }
        }
        e.ref !== null && (S(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
      }
    }
    function Re(e, r, t, n, o, s) {
      {
        var i = Ae(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = er(o);
          h ? a += h : a += ge();
          var c;
          e === null ? c = "null" : J(e) ? c = "array" : e !== void 0 && e.$$typeof === y ? (c = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = Qe(e, r, t, o, s);
        if (f == null)
          return f;
        if (i) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (J(g)) {
                for (var j = 0; j < g.length; j++)
                  _e(g[j], e);
                Object.freeze && Object.freeze(g);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(g, e);
        }
        return e === u ? nr(f) : tr(f), f;
      }
    }
    function ar(e, r, t) {
      return Re(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Re(e, r, t, !1);
    }
    var or = ir, sr = ar;
    $.Fragment = u, $.jsx = or, $.jsxs = sr;
  }()), $;
}
(function(m) {
  process.env.NODE_ENV === "production" ? m.exports = fr() : m.exports = dr();
})(lr);
const v = B.jsx, I = B.jsxs;
const pr = () => /* @__PURE__ */ v("div", { className: "hdui-linear-loader loader-container", children: /* @__PURE__ */ v("div", { className: "linear-loader-surface", children: /* @__PURE__ */ v("div", { className: "linear-loader-animated-surface" }) }) }), hr = () => /* @__PURE__ */ v("div", { className: "hdui-circular-loader loader-container", children: /* @__PURE__ */ I("svg", { className: "circular-loader-surface", children: [
  /* @__PURE__ */ v("circle", { cx: "50%", cy: "50%", r: "50%" }),
  /* @__PURE__ */ v("div", { className: "circular-loader-animated-surface", children: "H" })
] }) });
const mr = () => /* @__PURE__ */ I("div", { className: "hd-ui-bouncy-loader loader-container", children: [
  /* @__PURE__ */ v("div", { className: "ball" }),
  /* @__PURE__ */ v("div", { className: "ball" }),
  /* @__PURE__ */ v("div", { className: "ball" }),
  /* @__PURE__ */ v("div", { className: "ball" })
] });
const br = ({ onOpen: m, onClose: y }) => /* @__PURE__ */ I("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ v(
    "input",
    {
      type: "checkbox",
      id: "ham-menu1",
      hidden: !0,
      onChange: (u) => {
        u.target.checked ? m && m(u) : y && y(u);
      },
      title: "HamBurger"
    }
  ),
  /* @__PURE__ */ I("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
    /* @__PURE__ */ v("div", { className: "stroke1 stroke" }),
    /* @__PURE__ */ v("div", { className: "stroke2 stroke" }),
    /* @__PURE__ */ v("div", { className: "stroke3 stroke" })
  ] })
] });
const gr = ({ containerStyle: m, children: y, torchStyle: O }) => {
  const u = ur(null);
  return cr(() => {
    if (O)
      try {
        let d = "";
        Object.entries(O).forEach(([l, E]) => {
          l !== "size" ? d += `${l}:${E};` : d += `width: ${(Number(O.size) * 100).toFixed(2)}%;`;
        }), u.current && u.current.setAttribute("style", d);
      } catch (d) {
        console.error(d), console.log("Incorrect style format for `torchStyle` prop");
      }
  }, []), /* @__PURE__ */ I(
    "div",
    {
      className: "hd-ui-torchbox torch-box-container",
      onMouseOver: () => {
        u.current && (u.current.style.visibility = "visible", u.current.style.opacity = "1");
      },
      onMouseOut: () => {
        u.current && (u.current.style.visibility = "hidden", u.current.style.opacity = "0");
      },
      onMouseMove: (d) => {
        d.stopPropagation();
        const { top: l, left: E } = d.currentTarget.getBoundingClientRect();
        u.current && u.current.animate(
          {
            left: `${d.clientX - E}px`,
            top: `${d.clientY - l}px`
          },
          { duration: 500, fill: "forwards" }
        );
      },
      children: [
        /* @__PURE__ */ v("div", { ref: u, className: "torch-shadow" }),
        /* @__PURE__ */ v("div", { className: "torch-shadow-overlay" }),
        /* @__PURE__ */ v(
          "div",
          {
            className: "torch-box-container__child-container",
            style: m,
            children: y
          }
        )
      ]
    }
  );
};
export {
  mr as BouncyBalls,
  hr as CircularLoader,
  br as HamBurger,
  pr as LinearLoader,
  gr as TorchBox
};
