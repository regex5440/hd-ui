import xe, { useRef as Ce, useEffect as Pe } from "react";
var U = {}, lr = {
  get exports() {
    return U;
  },
  set exports(p) {
    U = p;
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
  var p = xe, b = Symbol.for("react.element"), y = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, k = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(d, l, _) {
    var g, R = {}, w = null, W = null;
    _ !== void 0 && (w = "" + _), l.key !== void 0 && (w = "" + l.key), l.ref !== void 0 && (W = l.ref);
    for (g in l)
      u.call(l, g) && !N.hasOwnProperty(g) && (R[g] = l[g]);
    if (d && d.defaultProps)
      for (g in l = d.defaultProps, l)
        R[g] === void 0 && (R[g] = l[g]);
    return { $$typeof: b, type: d, key: w, ref: W, props: R, _owner: k.current };
  }
  return A.Fragment = y, A.jsx = C, A.jsxs = C, A;
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
    var p = xe, b = Symbol.for("react.element"), y = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), d = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Q = Symbol.iterator, Se = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var P = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ne = !1, Fe = !1, De = !1, Ae = !1, $e = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === N || $e || e === k || e === _ || e === g || Ae || e === W || Ne || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === R || e.$$typeof === C || e.$$typeof === d || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case y:
          return "Portal";
        case N:
          return "Profiler";
        case k:
          return "StrictMode";
        case _:
          return "Suspense";
        case g:
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
            return We(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case w: {
            var i = e, s = i._payload, o = i._init;
            try {
              return T(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, F = 0, te, ne, ae, oe, ie, se, ue;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ye() {
      {
        if (F === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, se = console.groupCollapsed, ue = console.groupEnd;
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
    function Le() {
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
              value: oe
            }),
            group: x({}, e, {
              value: ie
            }),
            groupCollapsed: x({}, e, {
              value: se
            }),
            groupEnd: x({}, e, {
              value: ue
            })
          });
        }
        F < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, H;
    function Y(e, r, t) {
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
    var z = !1, L;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Me();
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
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = q.current, q.current = null, Ye();
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
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (O) {
              n = O;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var a = O.stack.split(`
`), m = n.stack.split(`
`), c = a.length - 1, f = m.length - 1; c >= 1 && f >= 0 && a[c] !== m[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== m[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== m[f]) {
                    var E = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, E), E;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        z = !1, q.current = s, Le(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", Te = j ? Y(j) : "";
      return typeof e == "function" && L.set(e, Te), Te;
    }
    function Be(e, r, t) {
      return le(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Ve(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case _:
          return Y("Suspense");
        case g:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Be(e.render);
          case R:
            return M(e.type, r, t);
          case w: {
            var n = e, i = n._payload, s = n._init;
            try {
              return M(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, fe = {}, de = P.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, i) {
      {
        var s = Function.call.bind(B);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var m = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (V(i), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, V(i), h("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var qe = Array.isArray;
    function J(e) {
      return qe(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
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
      if (ze(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), ve(e);
    }
    var D = P.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, me, G;
    G = {};
    function Ge(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && D.current && r && D.current.stateNode !== r) {
        var t = T(D.current.type);
        G[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(D.current.type), e.ref), G[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          me || (me = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
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
    function rr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, m = null;
        t !== void 0 && (pe(t), a = "" + t), Ke(r) && (pe(r.key), a = "" + r.key), Ge(r) && (m = r.ref, Xe(r, i));
        for (s in r)
          B.call(r, s) && !Je.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (s in c)
            o[s] === void 0 && (o[s] = c[s]);
        }
        if (a || m) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, f), m && Qe(o, f);
        }
        return er(e, a, m, i, n, D.current, o);
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
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function ye() {
      {
        if (K.current) {
          var e = T(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ge = {};
    function nr(e) {
      {
        var r = ye();
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
        var t = nr(r);
        if (ge[t])
          return;
        ge[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + T(e._owner.type) + "."), S(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), S(null);
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
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Z(o.value) && Ee(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = T(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            S(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), S(null);
            break;
          }
        }
        e.ref !== null && (S(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), S(null));
      }
    }
    function Re(e, r, t, n, i, s) {
      {
        var o = Ie(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = tr(i);
          m ? a += m : a += ye();
          var c;
          e === null ? c = "null" : J(e) ? c = "array" : e !== void 0 && e.$$typeof === b ? (c = "<" + (T(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = rr(e, r, t, i, s);
        if (f == null)
          return f;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (J(E)) {
                for (var j = 0; j < E.length; j++)
                  _e(E[j], e);
                Object.freeze && Object.freeze(E);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(E, e);
        }
        return e === u ? or(f) : ar(f), f;
      }
    }
    function ir(e, r, t) {
      return Re(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Re(e, r, t, !1);
    }
    var ur = sr, cr = ir;
    $.Fragment = u, $.jsx = ur, $.jsxs = cr;
  }()), $;
}
(function(p) {
  process.env.NODE_ENV === "production" ? p.exports = fr() : p.exports = dr();
})(lr);
const v = U.jsx, I = U.jsxs;
const pr = () => /* @__PURE__ */ v("div", { className: "hdui-linear-loader loader-container", children: /* @__PURE__ */ v("div", { className: "linear-loader-surface", children: /* @__PURE__ */ v("div", { className: "linear-loader-animated-surface" }) }) }), hr = () => /* @__PURE__ */ v("div", { className: "hdui-circular-loader loader-container", children: /* @__PURE__ */ I("svg", { className: "circular-loader-surface", children: [
  /* @__PURE__ */ v("circle", { cx: "50%", cy: "50%", r: "50%" }),
  /* @__PURE__ */ v("div", { className: "circular-loader-animated-surface", children: "H" })
] }) });
const mr = ({ ballColor: p, containerColor: b }) => {
  const y = Ce(null);
  return Pe(() => {
    y.current && (p && y.current.style.setProperty(
      "--bouncyBallColor",
      p
    ), b && y.current.style.setProperty(
      "--bouncyBallContainerColor",
      b
    ));
  }, []), /* @__PURE__ */ I("div", { className: "hd-ui-bouncy-loader loader-container", ref: y, children: [
    /* @__PURE__ */ v("div", { className: "ball" }),
    /* @__PURE__ */ v("div", { className: "ball" }),
    /* @__PURE__ */ v("div", { className: "ball" }),
    /* @__PURE__ */ v("div", { className: "ball" })
  ] });
};
const br = ({ onOpen: p, onClose: b }) => /* @__PURE__ */ I("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ v(
    "input",
    {
      type: "checkbox",
      id: "ham-menu1",
      hidden: !0,
      onChange: (u) => {
        u.target.checked ? p && p(u) : b && b(u);
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
const yr = ({ containerStyle: p, children: b, torchStyle: y }) => {
  const u = Ce(null);
  return Pe(() => {
    if (y)
      try {
        let d = "";
        Object.entries(y).forEach(([l, _]) => {
          l !== "size" ? d += `${l}:${_};` : d += `width: ${(Number(y.size) * 100).toFixed(2)}%;`;
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
        const { top: l, left: _ } = d.currentTarget.getBoundingClientRect();
        u.current && u.current.animate(
          {
            left: `${d.clientX - _}px`,
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
            style: p,
            children: b
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
  yr as TorchBox
};
