import je, { useRef as k, useEffect as V, useState as lr } from "react";
var U = {}, fr = {
  get exports() {
    return U;
  },
  set exports(c) {
    U = c;
  }
}, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function dr() {
  if (Pe)
    return M;
  Pe = 1;
  var c = je, l = Symbol.for("react.element"), y = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, T = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(f, d, _) {
    var b, m = {}, R = null, S = null;
    _ !== void 0 && (R = "" + _), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (b in d)
      s.call(d, b) && !x.hasOwnProperty(b) && (m[b] = d[b]);
    if (f && f.defaultProps)
      for (b in d = f.defaultProps, d)
        m[b] === void 0 && (m[b] = d[b]);
    return { $$typeof: l, type: f, key: R, ref: S, props: m, _owner: T.current };
  }
  return M.Fragment = y, M.jsx = P, M.jsxs = P, M;
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
var Se;
function vr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var c = je, l = Symbol.for("react.element"), y = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), A = Symbol.iterator, I = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[I];
      return typeof r == "function" ? r : null;
    }
    var N = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = N.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ne = !1, Fe = !1, De = !1, $e = !1, Ae = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === x || Ae || e === T || e === _ || e === b || $e || e === S || Ne || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === m || e.$$typeof === P || e.$$typeof === f || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case y:
          return "Portal";
        case x:
          return "Profiler";
        case T:
          return "StrictMode";
        case _:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return ie(r) + ".Consumer";
          case P:
            var t = e;
            return ie(t._context) + ".Provider";
          case d:
            return We(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case R: {
            var o = e, u = o._payload, i = o._init;
            try {
              return C(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, L = 0, oe, se, ce, ue, le, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Le() {
      {
        if (L === 0) {
          oe = console.log, se = console.info, ce = console.warn, ue = console.error, le = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
    function Ye() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: oe
            }),
            info: j({}, e, {
              value: se
            }),
            warn: j({}, e, {
              value: ce
            }),
            error: j({}, e, {
              value: ue
            }),
            group: j({}, e, {
              value: le
            }),
            groupCollapsed: j({}, e, {
              value: fe
            }),
            groupEnd: j({}, e, {
              value: de
            })
          });
        }
        L < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = N.ReactCurrentDispatcher, K;
    function H(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            K = n && n[1] || "";
          }
        return `
` + K + e;
      }
    }
    var Z = !1, z;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Me();
    }
    function he(e, r) {
      if (!e || Z)
        return "";
      {
        var t = z.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = X.current, X.current = null, Le();
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
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (O) {
              n = O;
            }
            e.call(i.prototype);
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
`), E = n.stack.split(`
`), h = a.length - 1, p = E.length - 1; h >= 1 && p >= 0 && a[h] !== E[p]; )
            p--;
          for (; h >= 1 && p >= 0; h--, p--)
            if (a[h] !== E[p]) {
              if (h !== 1 || p !== 1)
                do
                  if (h--, p--, p < 0 || a[h] !== E[p]) {
                    var w = `
` + a[h].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, w), w;
                  }
                while (h >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var D = e ? e.displayName || e.name : "", Oe = D ? H(D) : "";
      return typeof e == "function" && z.set(e, Oe), Oe;
    }
    function Be(e, r, t) {
      return he(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ue(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case _:
          return H("Suspense");
        case b:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Be(e.render);
          case m:
            return q(e.type, r, t);
          case R: {
            var n = e, o = n._payload, u = n._init;
            try {
              return q(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, me = {}, pe = N.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, o) {
      {
        var u = Function.call.bind(J);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              a = h;
            }
            a && !(a instanceof Error) && (G(o), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), G(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, G(o), g("Failed %s type: %s", t, a.message), G(null));
          }
      }
    }
    var He = Array.isArray;
    function Q(e) {
      return He(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function be(e) {
      if (qe(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ye(e);
    }
    var Y = N.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, Ee, ee;
    ee = {};
    function Ge(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = C(Y.current.type);
        ee[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(Y.current.type), e.ref), ee[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          ge || (ge = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Ee || (Ee = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
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
    function rr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, E = null;
        t !== void 0 && (be(t), a = "" + t), Xe(r) && (be(r.key), a = "" + r.key), Ge(r) && (E = r.ref, Ke(r, o));
        for (u in r)
          J.call(r, u) && !Je.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (u in h)
            i[u] === void 0 && (i[u] = h[u]);
        }
        if (a || E) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, p), E && Qe(i, p);
        }
        return er(e, a, E, o, n, Y.current, i);
      }
    }
    var re = N.ReactCurrentOwner, Re = N.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function _e() {
      {
        if (re.current) {
          var e = C(re.current.type);
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
    var we = {};
    function nr(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + C(e._owner.type) + "."), F(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && Te(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = W(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              ne(i.value) && Te(i.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var o = C(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function Ce(e, r, t, n, o, u) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = tr(o);
          E ? a += E : a += _e();
          var h;
          e === null ? h = "null" : Q(e) ? h = "array" : e !== void 0 && e.$$typeof === l ? (h = "<" + (C(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, a);
        }
        var p = rr(e, r, t, o, u);
        if (p == null)
          return p;
        if (i) {
          var w = r.children;
          if (w !== void 0)
            if (n)
              if (Q(w)) {
                for (var D = 0; D < w.length; D++)
                  xe(w[D], e);
                Object.freeze && Object.freeze(w);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(w, e);
        }
        return e === s ? ir(p) : ar(p), p;
      }
    }
    function or(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var cr = sr, ur = or;
    B.Fragment = s, B.jsx = cr, B.jsxs = ur;
  }()), B;
}
(function(c) {
  process.env.NODE_ENV === "production" ? c.exports = dr() : c.exports = vr();
})(fr);
const hr = U.Fragment, v = U.jsx, $ = U.jsxs;
const pr = () => /* @__PURE__ */ v("div", { className: "hdui-linear-loader loader-container", children: /* @__PURE__ */ v("div", { className: "linear-loader-surface", children: /* @__PURE__ */ v("div", { className: "linear-loader-animated-surface" }) }) }), yr = (c) => {
  const l = k(null);
  return V(() => {
    if (l.current) {
      const y = l.current.getTotalLength();
      l.current.style.setProperty(
        "--dasharray",
        y.toFixed(2) + "px"
      );
    }
  }, []), /* @__PURE__ */ v("div", { className: "hdui-circular-loader loader-container", children: /* @__PURE__ */ $("svg", { className: "circular-loader-surface", width: c.width, children: [
    /* @__PURE__ */ v("circle", { cx: "50%", cy: "50%", r: "50%", stroke: c.backgroundColor }),
    /* @__PURE__ */ v(
      "circle",
      {
        cx: "50%",
        cy: "50%",
        r: "50%",
        className: "cover",
        stroke: c.loaderColor || "rgb(52, 52, 52)",
        ref: l
      }
    ),
    /* @__PURE__ */ v("div", { className: "circular-loader-animated-surface", children: "H" })
  ] }) });
};
const br = ({ ballColor: c, containerColor: l }) => {
  const y = k(null);
  return V(() => {
    y.current && (c && y.current.style.setProperty(
      "--bouncyBallColor",
      c
    ), l && y.current.style.setProperty(
      "--bouncyBallContainerColor",
      l
    ));
  }, []), /* @__PURE__ */ $("div", { className: "hd-ui-bouncy-loader loader-container", ref: y, children: [
    /* @__PURE__ */ v("div", { className: "ball" }),
    /* @__PURE__ */ v("div", { className: "ball" }),
    /* @__PURE__ */ v("div", { className: "ball" }),
    /* @__PURE__ */ v("div", { className: "ball" })
  ] });
};
const gr = ({ onOpen: c, onClose: l }) => /* @__PURE__ */ $("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ v(
    "input",
    {
      type: "checkbox",
      id: "ham-menu1",
      hidden: !0,
      onChange: (s) => {
        s.target.checked ? c && c(s) : l && l(s);
      },
      title: "HamBurger"
    }
  ),
  /* @__PURE__ */ $("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
    /* @__PURE__ */ v("div", { className: "stroke1 stroke" }),
    /* @__PURE__ */ v("div", { className: "stroke2 stroke" }),
    /* @__PURE__ */ v("div", { className: "stroke3 stroke" })
  ] })
] });
const Er = ({ containerStyle: c, children: l, torchStyle: y }) => {
  const s = k(null);
  return V(() => {
    if (y)
      try {
        let f = "";
        Object.entries(y).forEach(([d, _]) => {
          d !== "size" ? f += `${d}:${_};` : f += `width: ${(Number(y.size) * 100).toFixed(2)}%;`;
        }), s.current && s.current.setAttribute("style", f);
      } catch (f) {
        console.error(f), console.log("Incorrect style format for `torchStyle` prop");
      }
  }, []), /* @__PURE__ */ $(
    "div",
    {
      className: "hd-ui-torchbox torch-box-container",
      onMouseOver: () => {
        s.current && (s.current.style.visibility = "visible", s.current.style.opacity = "1");
      },
      onMouseOut: () => {
        s.current && (s.current.style.visibility = "hidden", s.current.style.opacity = "0");
      },
      onMouseMove: (f) => {
        f.stopPropagation();
        const { top: d, left: _ } = f.currentTarget.getBoundingClientRect();
        s.current && s.current.animate(
          {
            left: `${f.clientX - _}px`,
            top: `${f.clientY - d}px`
          },
          { duration: 500, fill: "forwards" }
        );
      },
      children: [
        /* @__PURE__ */ v("div", { ref: s, className: "torch-shadow" }),
        /* @__PURE__ */ v("div", { className: "torch-shadow-overlay" }),
        /* @__PURE__ */ v(
          "div",
          {
            className: "torch-box-container__child-container",
            style: c,
            children: l
          }
        )
      ]
    }
  );
};
const Rr = ({
  open: c = !1,
  closeHandler: l,
  showOverlay: y = !0,
  keepModalCentered: s = !0,
  TransitionStyle: T = "fade",
  children: x,
  closeOnOverlayClick: P = !0,
  MouseEvent: f,
  modalStyle: d
}) => {
  const [_, b] = lr(!1), m = k(null), R = k(null);
  return V(() => {
    if (!s && f !== void 0 && m.current) {
      const S = m.current.offsetWidth, A = m.current.offsetHeight;
      let I = f.clientX, W = f.clientY;
      I + S > window.innerWidth && (I = window.innerWidth - S - 10), W + A > window.innerHeight && (W = window.innerHeight - A - 10), m.current.style.setProperty("left", `${I}px`), m.current.style.setProperty("top", `${W}px`);
    }
    !c && R.current && m.current && (R.current.style.removeProperty("animation"), m.current.style.removeProperty("animation"), setTimeout(() => {
      R.current && m.current && (R.current.style.animation = "fade 300ms ease reverse forwards", m.current.style.animation = `${T} 200ms ease reverse forwards`);
    }, 0)), c && b(!0);
  }, [c]), /* @__PURE__ */ v(hr, { children: _ && /* @__PURE__ */ $("div", { className: "hd-ui-modal modal-container", children: [
    /* @__PURE__ */ v(
      "div",
      {
        className: "hd-ui-modal-overlay",
        "data-visible": y,
        onClick: P ? l : void 0,
        ref: R,
        style: { animation: "fade 400ms ease" }
      }
    ),
    /* @__PURE__ */ v(
      "div",
      {
        className: "modal-child-container",
        "data-centered": s,
        "aria-modal": !0,
        style: {
          maxWidth: `${window.innerWidth}px`,
          maxHeight: `${window.innerHeight}px`,
          animation: `${T} 300ms ease`,
          ...d
        },
        ref: m,
        onAnimationEnd: c ? void 0 : () => b(!1),
        children: x
      }
    )
  ] }) });
}, _r = ({
  Loader: c,
  onVisibleHandler: l,
  endOfData: y
}) => {
  const s = k(null), T = k(
    new IntersectionObserver(([x]) => {
      x.isIntersecting && l && l();
    })
  );
  return V(() => {
    s.current && T.current.observe(s.current);
  }, []), /* @__PURE__ */ v(
    "div",
    {
      className: "hd-ui-lazy-loader lazy-loader-container",
      ref: s,
      children: !y && c
    }
  );
};
export {
  br as BouncyBalls,
  yr as CircularLoader,
  gr as HamBurger,
  _r as LazyLoader,
  pr as LinearLoader,
  Rr as Modal,
  Er as TorchBox
};
