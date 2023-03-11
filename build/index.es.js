var Tr = {}, fn = {
  get exports() {
    return Tr;
  },
  set exports(s) {
    Tr = s;
  }
}, rr = {}, Je = {}, ln = {
  get exports() {
    return Je;
  },
  set exports(s) {
    Je = s;
  }
}, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function dn() {
  if (Et)
    return L;
  Et = 1;
  var s = Symbol.for("react.element"), m = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), D = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), I = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), j = Symbol.iterator;
  function U(r) {
    return r === null || typeof r != "object" ? null : (r = j && r[j] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var V = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ee = Object.assign, G = {};
  function J(r, a, l) {
    this.props = r, this.context = a, this.refs = G, this.updater = l || V;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(r, a) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, a, "setState");
  }, J.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function re() {
  }
  re.prototype = J.prototype;
  function X(r, a, l) {
    this.props = r, this.context = a, this.refs = G, this.updater = l || V;
  }
  var Z = X.prototype = new re();
  Z.constructor = X, ee(Z, J.prototype), Z.isPureReactComponent = !0;
  var z = Array.isArray, c = Object.prototype.hasOwnProperty, ae = { current: null }, ge = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ee(r, a, l) {
    var y, d = {}, S = null, b = null;
    if (a != null)
      for (y in a.ref !== void 0 && (b = a.ref), a.key !== void 0 && (S = "" + a.key), a)
        c.call(a, y) && !ge.hasOwnProperty(y) && (d[y] = a[y]);
    var h = arguments.length - 2;
    if (h === 1)
      d.children = l;
    else if (1 < h) {
      for (var g = Array(h), k = 0; k < h; k++)
        g[k] = arguments[k + 2];
      d.children = g;
    }
    if (r && r.defaultProps)
      for (y in h = r.defaultProps, h)
        d[y] === void 0 && (d[y] = h[y]);
    return { $$typeof: s, type: r, key: S, ref: b, props: d, _owner: ae.current };
  }
  function Re(r, a) {
    return { $$typeof: s, type: r.type, key: a, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function Te(r) {
    return typeof r == "object" && r !== null && r.$$typeof === s;
  }
  function Oe(r) {
    var a = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(l) {
      return a[l];
    });
  }
  var Se = /\/+/g;
  function de(r, a) {
    return typeof r == "object" && r !== null && r.key != null ? Oe("" + r.key) : a.toString(36);
  }
  function ce(r, a, l, y, d) {
    var S = typeof r;
    (S === "undefined" || S === "boolean") && (r = null);
    var b = !1;
    if (r === null)
      b = !0;
    else
      switch (S) {
        case "string":
        case "number":
          b = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case s:
            case m:
              b = !0;
          }
      }
    if (b)
      return b = r, d = d(b), r = y === "" ? "." + de(b, 0) : y, z(d) ? (l = "", r != null && (l = r.replace(Se, "$&/") + "/"), ce(d, a, l, "", function(k) {
        return k;
      })) : d != null && (Te(d) && (d = Re(d, l + (!d.key || b && b.key === d.key ? "" : ("" + d.key).replace(Se, "$&/") + "/") + r)), a.push(d)), 1;
    if (b = 0, y = y === "" ? "." : y + ":", z(r))
      for (var h = 0; h < r.length; h++) {
        S = r[h];
        var g = y + de(S, h);
        b += ce(S, a, l, g, d);
      }
    else if (g = U(r), typeof g == "function")
      for (r = g.call(r), h = 0; !(S = r.next()).done; )
        S = S.value, g = y + de(S, h++), b += ce(S, a, l, g, d);
    else if (S === "object")
      throw a = String(r), Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    return b;
  }
  function fe(r, a, l) {
    if (r == null)
      return r;
    var y = [], d = 0;
    return ce(r, y, "", "", function(S) {
      return a.call(l, S, d++);
    }), y;
  }
  function ue(r) {
    if (r._status === -1) {
      var a = r._result;
      a = a(), a.then(function(l) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = l);
      }, function(l) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = l);
      }), r._status === -1 && (r._status = 0, r._result = a);
    }
    if (r._status === 1)
      return r._result.default;
    throw r._result;
  }
  var T = { current: null }, be = { transition: null }, Ce = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: be, ReactCurrentOwner: ae };
  return L.Children = { map: fe, forEach: function(r, a, l) {
    fe(r, function() {
      a.apply(this, arguments);
    }, l);
  }, count: function(r) {
    var a = 0;
    return fe(r, function() {
      a++;
    }), a;
  }, toArray: function(r) {
    return fe(r, function(a) {
      return a;
    }) || [];
  }, only: function(r) {
    if (!Te(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, L.Component = J, L.Fragment = M, L.Profiler = N, L.PureComponent = X, L.StrictMode = R, L.Suspense = P, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ce, L.cloneElement = function(r, a, l) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var y = ee({}, r.props), d = r.key, S = r.ref, b = r._owner;
    if (a != null) {
      if (a.ref !== void 0 && (S = a.ref, b = ae.current), a.key !== void 0 && (d = "" + a.key), r.type && r.type.defaultProps)
        var h = r.type.defaultProps;
      for (g in a)
        c.call(a, g) && !ge.hasOwnProperty(g) && (y[g] = a[g] === void 0 && h !== void 0 ? h[g] : a[g]);
    }
    var g = arguments.length - 2;
    if (g === 1)
      y.children = l;
    else if (1 < g) {
      h = Array(g);
      for (var k = 0; k < g; k++)
        h[k] = arguments[k + 2];
      y.children = h;
    }
    return { $$typeof: s, type: r.type, key: d, ref: S, props: y, _owner: b };
  }, L.createContext = function(r) {
    return r = { $$typeof: D, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: O, _context: r }, r.Consumer = r;
  }, L.createElement = Ee, L.createFactory = function(r) {
    var a = Ee.bind(null, r);
    return a.type = r, a;
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(r) {
    return { $$typeof: C, render: r };
  }, L.isValidElement = Te, L.lazy = function(r) {
    return { $$typeof: w, _payload: { _status: -1, _result: r }, _init: ue };
  }, L.memo = function(r, a) {
    return { $$typeof: I, type: r, compare: a === void 0 ? null : a };
  }, L.startTransition = function(r) {
    var a = be.transition;
    be.transition = {};
    try {
      r();
    } finally {
      be.transition = a;
    }
  }, L.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, L.useCallback = function(r, a) {
    return T.current.useCallback(r, a);
  }, L.useContext = function(r) {
    return T.current.useContext(r);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(r) {
    return T.current.useDeferredValue(r);
  }, L.useEffect = function(r, a) {
    return T.current.useEffect(r, a);
  }, L.useId = function() {
    return T.current.useId();
  }, L.useImperativeHandle = function(r, a, l) {
    return T.current.useImperativeHandle(r, a, l);
  }, L.useInsertionEffect = function(r, a) {
    return T.current.useInsertionEffect(r, a);
  }, L.useLayoutEffect = function(r, a) {
    return T.current.useLayoutEffect(r, a);
  }, L.useMemo = function(r, a) {
    return T.current.useMemo(r, a);
  }, L.useReducer = function(r, a, l) {
    return T.current.useReducer(r, a, l);
  }, L.useRef = function(r) {
    return T.current.useRef(r);
  }, L.useState = function(r) {
    return T.current.useState(r);
  }, L.useSyncExternalStore = function(r, a, l) {
    return T.current.useSyncExternalStore(r, a, l);
  }, L.useTransition = function() {
    return T.current.useTransition();
  }, L.version = "18.2.0", L;
}
var nr = {}, pn = {
  get exports() {
    return nr;
  },
  set exports(s) {
    nr = s;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function vn() {
  return Rt || (Rt = 1, function(s, m) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = "18.2.0", R = Symbol.for("react.element"), N = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), I = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), J = Symbol.iterator, re = "@@iterator";
      function X(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = J && e[J] || e[re];
        return typeof t == "function" ? t : null;
      }
      var Z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, z = {
        transition: null
      }, c = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ae = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ge = {}, Ee = null;
      function Re(e) {
        Ee = e;
      }
      ge.setExtraStackFrame = function(e) {
        Ee = e;
      }, ge.getCurrentStack = null, ge.getStackAddendum = function() {
        var e = "";
        Ee && (e += Ee);
        var t = ge.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var Te = !1, Oe = !1, Se = !1, de = !1, ce = !1, fe = {
        ReactCurrentDispatcher: Z,
        ReactCurrentBatchConfig: z,
        ReactCurrentOwner: ae
      };
      fe.ReactDebugCurrentFrame = ge, fe.ReactCurrentActQueue = c;
      function ue(e) {
        {
          for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            o[i - 1] = arguments[i];
          be("warn", e, o);
        }
      }
      function T(e) {
        {
          for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            o[i - 1] = arguments[i];
          be("error", e, o);
        }
      }
      function be(e, t, o) {
        {
          var i = fe.ReactDebugCurrentFrame, f = i.getStackAddendum();
          f !== "" && (t += "%s", o = o.concat([f]));
          var x = o.map(function(E) {
            return String(E);
          });
          x.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, x);
        }
      }
      var Ce = {};
      function r(e, t) {
        {
          var o = e.constructor, i = o && (o.displayName || o.name) || "ReactClass", f = i + "." + t;
          if (Ce[f])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, i), Ce[f] = !0;
        }
      }
      var a = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, t, o) {
          r(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, t, o, i) {
          r(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, t, o, i) {
          r(e, "setState");
        }
      }, l = Object.assign, y = {};
      Object.freeze(y);
      function d(e, t, o) {
        this.props = e, this.context = t, this.refs = y, this.updater = o || a;
      }
      d.prototype.isReactComponent = {}, d.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, d.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var S = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, b = function(e, t) {
          Object.defineProperty(d.prototype, e, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var h in S)
          S.hasOwnProperty(h) && b(h, S[h]);
      }
      function g() {
      }
      g.prototype = d.prototype;
      function k(e, t, o) {
        this.props = e, this.context = t, this.refs = y, this.updater = o || a;
      }
      var $ = k.prototype = new g();
      $.constructor = k, l($, d.prototype), $.isPureReactComponent = !0;
      function pe() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var v = Array.isArray;
      function ve(e) {
        return v(e);
      }
      function Ae(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o;
        }
      }
      function ke(e) {
        try {
          return Me(e), !1;
        } catch {
          return !0;
        }
      }
      function Me(e) {
        return "" + e;
      }
      function Le(e) {
        if (ke(e))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(e)), Me(e);
      }
      function or(e, t, o) {
        var i = e.displayName;
        if (i)
          return i;
        var f = t.displayName || t.name || "";
        return f !== "" ? o + "(" + f + ")" : o;
      }
      function Ne(e) {
        return e.displayName || "Context";
      }
      function Pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case O:
            return "Fragment";
          case N:
            return "Portal";
          case C:
            return "Profiler";
          case D:
            return "StrictMode";
          case j:
            return "Suspense";
          case U:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case I:
              var t = e;
              return Ne(t) + ".Consumer";
            case P:
              var o = e;
              return Ne(o._context) + ".Provider";
            case w:
              return or(e, e.render, "ForwardRef");
            case V:
              var i = e.displayName || null;
              return i !== null ? i : Pe(e.type) || "Memo";
            case ee: {
              var f = e, x = f._payload, E = f._init;
              try {
                return Pe(E(x));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ye = Object.prototype.hasOwnProperty, ze = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ir, ur, Be;
      Be = {};
      function Xe(e) {
        if (Ye.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ie(e) {
        if (Ye.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Cr(e, t) {
        var o = function() {
          ir || (ir = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function sr(e, t) {
        var o = function() {
          ur || (ur = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
      function cr(e) {
        if (typeof e.ref == "string" && ae.current && e.__self && ae.current.stateNode !== e.__self) {
          var t = Pe(ae.current.type);
          Be[t] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Be[t] = !0);
        }
      }
      var We = function(e, t, o, i, f, x, E) {
        var A = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: R,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: o,
          props: E,
          // Record the component responsible for creating this element.
          _owner: x
        };
        return A._store = {}, Object.defineProperty(A._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(A, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.defineProperty(A, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: f
        }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
      };
      function wr(e, t, o) {
        var i, f = {}, x = null, E = null, A = null, W = null;
        if (t != null) {
          Xe(t) && (E = t.ref, cr(t)), Ie(t) && (Le(t.key), x = "" + t.key), A = t.__self === void 0 ? null : t.__self, W = t.__source === void 0 ? null : t.__source;
          for (i in t)
            Ye.call(t, i) && !ze.hasOwnProperty(i) && (f[i] = t[i]);
        }
        var Q = arguments.length - 2;
        if (Q === 1)
          f.children = o;
        else if (Q > 1) {
          for (var te = Array(Q), ne = 0; ne < Q; ne++)
            te[ne] = arguments[ne + 2];
          Object.freeze && Object.freeze(te), f.children = te;
        }
        if (e && e.defaultProps) {
          var ie = e.defaultProps;
          for (i in ie)
            f[i] === void 0 && (f[i] = ie[i]);
        }
        if (x || E) {
          var le = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          x && Cr(f, le), E && sr(f, le);
        }
        return We(e, x, E, A, W, ae.current, f);
      }
      function Or(e, t) {
        var o = We(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return o;
      }
      function Pr(e, t, o) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var i, f = l({}, e.props), x = e.key, E = e.ref, A = e._self, W = e._source, Q = e._owner;
        if (t != null) {
          Xe(t) && (E = t.ref, Q = ae.current), Ie(t) && (Le(t.key), x = "" + t.key);
          var te;
          e.type && e.type.defaultProps && (te = e.type.defaultProps);
          for (i in t)
            Ye.call(t, i) && !ze.hasOwnProperty(i) && (t[i] === void 0 && te !== void 0 ? f[i] = te[i] : f[i] = t[i]);
        }
        var ne = arguments.length - 2;
        if (ne === 1)
          f.children = o;
        else if (ne > 1) {
          for (var ie = Array(ne), le = 0; le < ne; le++)
            ie[le] = arguments[le + 2];
          f.children = ie;
        }
        return We(e.type, x, E, A, W, Q, f);
      }
      function $e(e) {
        return typeof e == "object" && e !== null && e.$$typeof === R;
      }
      var fr = ".", kr = ":";
      function xr(e) {
        var t = /[=:]/g, o = {
          "=": "=0",
          ":": "=2"
        }, i = e.replace(t, function(f) {
          return o[f];
        });
        return "$" + i;
      }
      var He = !1, lr = /\/+/g;
      function xe(e) {
        return e.replace(lr, "$&/");
      }
      function Ue(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (Le(e.key), xr("" + e.key)) : t.toString(36);
      }
      function De(e, t, o, i, f) {
        var x = typeof e;
        (x === "undefined" || x === "boolean") && (e = null);
        var E = !1;
        if (e === null)
          E = !0;
        else
          switch (x) {
            case "string":
            case "number":
              E = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case R:
                case N:
                  E = !0;
              }
          }
        if (E) {
          var A = e, W = f(A), Q = i === "" ? fr + Ue(A, 0) : i;
          if (ve(W)) {
            var te = "";
            Q != null && (te = xe(Q) + "/"), De(W, t, te, "", function(cn) {
              return cn;
            });
          } else
            W != null && ($e(W) && (W.key && (!A || A.key !== W.key) && Le(W.key), W = Or(
              W,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              o + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (W.key && (!A || A.key !== W.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                xe("" + W.key) + "/"
              ) : "") + Q
            )), t.push(W));
          return 1;
        }
        var ne, ie, le = 0, he = i === "" ? fr : i + kr;
        if (ve(e))
          for (var Rr = 0; Rr < e.length; Rr++)
            ne = e[Rr], ie = he + Ue(ne, Rr), le += De(ne, t, o, ie, f);
        else {
          var qr = X(e);
          if (typeof qr == "function") {
            var bt = e;
            qr === bt.entries && (He || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), He = !0);
            for (var un = qr.call(bt), gt, sn = 0; !(gt = un.next()).done; )
              ne = gt.value, ie = he + Ue(ne, sn++), le += De(ne, t, o, ie, f);
          } else if (x === "object") {
            var _t = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (_t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : _t) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return le;
      }
      function Ve(e, t, o) {
        if (e == null)
          return e;
        var i = [], f = 0;
        return De(e, i, "", "", function(x) {
          return t.call(o, x, f++);
        }), i;
      }
      function jr(e) {
        var t = 0;
        return Ve(e, function() {
          t++;
        }), t;
      }
      function dr(e, t, o) {
        Ve(e, function() {
          t.apply(this, arguments);
        }, o);
      }
      function Ar(e) {
        return Ve(e, function(t) {
          return t;
        }) || [];
      }
      function pr(e) {
        if (!$e(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function vr(e) {
        var t = {
          $$typeof: I,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        t.Provider = {
          $$typeof: P,
          _context: t
        };
        var o = !1, i = !1, f = !1;
        {
          var x = {
            $$typeof: I,
            _context: t
          };
          Object.defineProperties(x, {
            Provider: {
              get: function() {
                return i || (i = !0, T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(E) {
                t.Provider = E;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(E) {
                t._currentValue = E;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(E) {
                t._currentValue2 = E;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(E) {
                t._threadCount = E;
              }
            },
            Consumer: {
              get: function() {
                return o || (o = !0, T("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function() {
                return t.displayName;
              },
              set: function(E) {
                f || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", E), f = !0);
              }
            }
          }), t.Consumer = x;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var qe = -1, Qe = 0, Ze = 1, Ir = 2;
      function $r(e) {
        if (e._status === qe) {
          var t = e._result, o = t();
          if (o.then(function(x) {
            if (e._status === Qe || e._status === qe) {
              var E = e;
              E._status = Ze, E._result = x;
            }
          }, function(x) {
            if (e._status === Qe || e._status === qe) {
              var E = e;
              E._status = Ir, E._result = x;
            }
          }), e._status === qe) {
            var i = e;
            i._status = Qe, i._result = o;
          }
        }
        if (e._status === Ze) {
          var f = e._result;
          return f === void 0 && T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, f), "default" in f || T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, f), f.default;
        } else
          throw e._result;
      }
      function Dr(e) {
        var t = {
          // We use these fields to store the result.
          _status: qe,
          _result: e
        }, o = {
          $$typeof: ee,
          _payload: t,
          _init: $r
        };
        {
          var i, f;
          Object.defineProperties(o, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(x) {
                T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = x, Object.defineProperty(o, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return f;
              },
              set: function(x) {
                T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), f = x, Object.defineProperty(o, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return o;
      }
      function Fr(e) {
        e != null && e.$$typeof === V ? T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? T("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && T("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: w,
          render: e
        };
        {
          var o;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return t;
      }
      var n;
      n = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === O || e === C || ce || e === D || e === j || e === U || de || e === G || Te || Oe || Se || typeof e == "object" && e !== null && (e.$$typeof === ee || e.$$typeof === V || e.$$typeof === P || e.$$typeof === I || e.$$typeof === w || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === n || e.getModuleId !== void 0));
      }
      function p(e, t) {
        u(e) || T("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var o = {
          $$typeof: V,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var i;
          Object.defineProperty(o, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return i;
            },
            set: function(f) {
              i = f, !e.name && !e.displayName && (e.displayName = f);
            }
          });
        }
        return o;
      }
      function _() {
        var e = Z.current;
        return e === null && T(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function q(e) {
        var t = _();
        if (e._context !== void 0) {
          var o = e._context;
          o.Consumer === e ? T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : o.Provider === e && T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function K(e) {
        var t = _();
        return t.useState(e);
      }
      function Y(e, t, o) {
        var i = _();
        return i.useReducer(e, t, o);
      }
      function F(e) {
        var t = _();
        return t.useRef(e);
      }
      function ye(e, t) {
        var o = _();
        return o.useEffect(e, t);
      }
      function oe(e, t) {
        var o = _();
        return o.useInsertionEffect(e, t);
      }
      function se(e, t) {
        var o = _();
        return o.useLayoutEffect(e, t);
      }
      function _e(e, t) {
        var o = _();
        return o.useCallback(e, t);
      }
      function Fe(e, t) {
        var o = _();
        return o.useMemo(e, t);
      }
      function yr(e, t, o) {
        var i = _();
        return i.useImperativeHandle(e, t, o);
      }
      function we(e, t) {
        {
          var o = _();
          return o.useDebugValue(e, t);
        }
      }
      function Mt() {
        var e = _();
        return e.useTransition();
      }
      function Lt(e) {
        var t = _();
        return t.useDeferredValue(e);
      }
      function Nt() {
        var e = _();
        return e.useId();
      }
      function Yt(e, t, o) {
        var i = _();
        return i.useSyncExternalStore(e, t, o);
      }
      var er = 0, Qr, Zr, et, rt, tt, nt, at;
      function ot() {
      }
      ot.__reactDisabledLog = !0;
      function Wt() {
        {
          if (er === 0) {
            Qr = console.log, Zr = console.info, et = console.warn, rt = console.error, tt = console.group, nt = console.groupCollapsed, at = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ot,
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
          er++;
        }
      }
      function Ut() {
        {
          if (er--, er === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: l({}, e, {
                value: Qr
              }),
              info: l({}, e, {
                value: Zr
              }),
              warn: l({}, e, {
                value: et
              }),
              error: l({}, e, {
                value: rt
              }),
              group: l({}, e, {
                value: tt
              }),
              groupCollapsed: l({}, e, {
                value: nt
              }),
              groupEnd: l({}, e, {
                value: at
              })
            });
          }
          er < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Mr = fe.ReactCurrentDispatcher, Lr;
      function hr(e, t, o) {
        {
          if (Lr === void 0)
            try {
              throw Error();
            } catch (f) {
              var i = f.stack.trim().match(/\n( *(at )?)/);
              Lr = i && i[1] || "";
            }
          return `
` + Lr + e;
        }
      }
      var Nr = !1, mr;
      {
        var Vt = typeof WeakMap == "function" ? WeakMap : Map;
        mr = new Vt();
      }
      function it(e, t) {
        if (!e || Nr)
          return "";
        {
          var o = mr.get(e);
          if (o !== void 0)
            return o;
        }
        var i;
        Nr = !0;
        var f = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var x;
        x = Mr.current, Mr.current = null, Wt();
        try {
          if (t) {
            var E = function() {
              throw Error();
            };
            if (Object.defineProperty(E.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(E, []);
              } catch (he) {
                i = he;
              }
              Reflect.construct(e, [], E);
            } else {
              try {
                E.call();
              } catch (he) {
                i = he;
              }
              e.call(E.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (he) {
              i = he;
            }
            e();
          }
        } catch (he) {
          if (he && i && typeof he.stack == "string") {
            for (var A = he.stack.split(`
`), W = i.stack.split(`
`), Q = A.length - 1, te = W.length - 1; Q >= 1 && te >= 0 && A[Q] !== W[te]; )
              te--;
            for (; Q >= 1 && te >= 0; Q--, te--)
              if (A[Q] !== W[te]) {
                if (Q !== 1 || te !== 1)
                  do
                    if (Q--, te--, te < 0 || A[Q] !== W[te]) {
                      var ne = `
` + A[Q].replace(" at new ", " at ");
                      return e.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", e.displayName)), typeof e == "function" && mr.set(e, ne), ne;
                    }
                  while (Q >= 1 && te >= 0);
                break;
              }
          }
        } finally {
          Nr = !1, Mr.current = x, Ut(), Error.prepareStackTrace = f;
        }
        var ie = e ? e.displayName || e.name : "", le = ie ? hr(ie) : "";
        return typeof e == "function" && mr.set(e, le), le;
      }
      function qt(e, t, o) {
        return it(e, !1);
      }
      function zt(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function br(e, t, o) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return it(e, zt(e));
        if (typeof e == "string")
          return hr(e);
        switch (e) {
          case j:
            return hr("Suspense");
          case U:
            return hr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case w:
              return qt(e.render);
            case V:
              return br(e.type, t, o);
            case ee: {
              var i = e, f = i._payload, x = i._init;
              try {
                return br(x(f), t, o);
              } catch {
              }
            }
          }
        return "";
      }
      var ut = {}, st = fe.ReactDebugCurrentFrame;
      function gr(e) {
        if (e) {
          var t = e._owner, o = br(e.type, e._source, t ? t.type : null);
          st.setExtraStackFrame(o);
        } else
          st.setExtraStackFrame(null);
      }
      function Bt(e, t, o, i, f) {
        {
          var x = Function.call.bind(Ye);
          for (var E in e)
            if (x(e, E)) {
              var A = void 0;
              try {
                if (typeof e[E] != "function") {
                  var W = Error((i || "React class") + ": " + o + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw W.name = "Invariant Violation", W;
                }
                A = e[E](t, E, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Q) {
                A = Q;
              }
              A && !(A instanceof Error) && (gr(f), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, E, typeof A), gr(null)), A instanceof Error && !(A.message in ut) && (ut[A.message] = !0, gr(f), T("Failed %s type: %s", o, A.message), gr(null));
            }
        }
      }
      function Ge(e) {
        if (e) {
          var t = e._owner, o = br(e.type, e._source, t ? t.type : null);
          Re(o);
        } else
          Re(null);
      }
      var Yr;
      Yr = !1;
      function ct() {
        if (ae.current) {
          var e = Pe(ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Ht(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + t + ":" + o + ".";
        }
        return "";
      }
      function Gt(e) {
        return e != null ? Ht(e.__source) : "";
      }
      var ft = {};
      function Kt(e) {
        var t = ct();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
      function lt(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var o = Kt(t);
          if (!ft[o]) {
            ft[o] = !0;
            var i = "";
            e && e._owner && e._owner !== ae.current && (i = " It was passed a child from " + Pe(e._owner.type) + "."), Ge(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), Ge(null);
          }
        }
      }
      function dt(e, t) {
        if (typeof e == "object") {
          if (ve(e))
            for (var o = 0; o < e.length; o++) {
              var i = e[o];
              $e(i) && lt(i, t);
            }
          else if ($e(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var f = X(e);
            if (typeof f == "function" && f !== e.entries)
              for (var x = f.call(e), E; !(E = x.next()).done; )
                $e(E.value) && lt(E.value, t);
          }
        }
      }
      function pt(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var o;
          if (typeof t == "function")
            o = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === w || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === V))
            o = t.propTypes;
          else
            return;
          if (o) {
            var i = Pe(t);
            Bt(o, e.props, "prop", i, e);
          } else if (t.PropTypes !== void 0 && !Yr) {
            Yr = !0;
            var f = Pe(t);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Jt(e) {
        {
          for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
            var i = t[o];
            if (i !== "children" && i !== "key") {
              Ge(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), Ge(null);
              break;
            }
          }
          e.ref !== null && (Ge(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
        }
      }
      function vt(e, t, o) {
        var i = u(e);
        if (!i) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = Gt(t);
          x ? f += x : f += ct();
          var E;
          e === null ? E = "null" : ve(e) ? E = "array" : e !== void 0 && e.$$typeof === R ? (E = "<" + (Pe(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, f);
        }
        var A = wr.apply(this, arguments);
        if (A == null)
          return A;
        if (i)
          for (var W = 2; W < arguments.length; W++)
            dt(arguments[W], e);
        return e === O ? Jt(A) : pt(A), A;
      }
      var yt = !1;
      function Xt(e) {
        var t = vt.bind(null, e);
        return t.type = e, yt || (yt = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Qt(e, t, o) {
        for (var i = Pr.apply(this, arguments), f = 2; f < arguments.length; f++)
          dt(arguments[f], i.type);
        return pt(i), i;
      }
      function Zt(e, t) {
        var o = z.transition;
        z.transition = {};
        var i = z.transition;
        z.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (z.transition = o, o === null && i._updatedFibers) {
            var f = i._updatedFibers.size;
            f > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), i._updatedFibers.clear();
          }
        }
      }
      var ht = !1, _r = null;
      function en(e) {
        if (_r === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), o = s && s[t];
            _r = o.call(s, "timers").setImmediate;
          } catch {
            _r = function(f) {
              ht === !1 && (ht = !0, typeof MessageChannel > "u" && T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var x = new MessageChannel();
              x.port1.onmessage = f, x.port2.postMessage(void 0);
            };
          }
        return _r(e);
      }
      var Ke = 0, mt = !1;
      function rn(e) {
        {
          var t = Ke;
          Ke++, c.current === null && (c.current = []);
          var o = c.isBatchingLegacy, i;
          try {
            if (c.isBatchingLegacy = !0, i = e(), !o && c.didScheduleLegacyUpdate) {
              var f = c.current;
              f !== null && (c.didScheduleLegacyUpdate = !1, Vr(f));
            }
          } catch (ie) {
            throw Er(t), ie;
          } finally {
            c.isBatchingLegacy = o;
          }
          if (i !== null && typeof i == "object" && typeof i.then == "function") {
            var x = i, E = !1, A = {
              then: function(ie, le) {
                E = !0, x.then(function(he) {
                  Er(t), Ke === 0 ? Wr(he, ie, le) : ie(he);
                }, function(he) {
                  Er(t), le(he);
                });
              }
            };
            return !mt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              E || (mt = !0, T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), A;
          } else {
            var W = i;
            if (Er(t), Ke === 0) {
              var Q = c.current;
              Q !== null && (Vr(Q), c.current = null);
              var te = {
                then: function(ie, le) {
                  c.current === null ? (c.current = [], Wr(W, ie, le)) : ie(W);
                }
              };
              return te;
            } else {
              var ne = {
                then: function(ie, le) {
                  ie(W);
                }
              };
              return ne;
            }
          }
        }
      }
      function Er(e) {
        e !== Ke - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ke = e;
      }
      function Wr(e, t, o) {
        {
          var i = c.current;
          if (i !== null)
            try {
              Vr(i), en(function() {
                i.length === 0 ? (c.current = null, t(e)) : Wr(e, t, o);
              });
            } catch (f) {
              o(f);
            }
          else
            t(e);
        }
      }
      var Ur = !1;
      function Vr(e) {
        if (!Ur) {
          Ur = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var o = e[t];
              do
                o = o(!0);
              while (o !== null);
            }
            e.length = 0;
          } catch (i) {
            throw e = e.slice(t + 1), i;
          } finally {
            Ur = !1;
          }
        }
      }
      var tn = vt, nn = Qt, an = Xt, on = {
        map: Ve,
        forEach: dr,
        count: jr,
        toArray: Ar,
        only: pr
      };
      m.Children = on, m.Component = d, m.Fragment = O, m.Profiler = C, m.PureComponent = k, m.StrictMode = D, m.Suspense = j, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fe, m.cloneElement = nn, m.createContext = vr, m.createElement = tn, m.createFactory = an, m.createRef = pe, m.forwardRef = Fr, m.isValidElement = $e, m.lazy = Dr, m.memo = p, m.startTransition = Zt, m.unstable_act = rn, m.useCallback = _e, m.useContext = q, m.useDebugValue = we, m.useDeferredValue = Lt, m.useEffect = ye, m.useId = Nt, m.useImperativeHandle = yr, m.useInsertionEffect = oe, m.useLayoutEffect = se, m.useMemo = Fe, m.useReducer = Y, m.useRef = F, m.useState = K, m.useSyncExternalStore = Yt, m.useTransition = Mt, m.version = M, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(pn, nr)), nr;
}
(function(s) {
  process.env.NODE_ENV === "production" ? s.exports = dn() : s.exports = vn();
})(ln);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function yn() {
  if (Tt)
    return rr;
  Tt = 1;
  var s = Je, m = Symbol.for("react.element"), M = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, N = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(C, P, I) {
    var w, j = {}, U = null, V = null;
    I !== void 0 && (U = "" + I), P.key !== void 0 && (U = "" + P.key), P.ref !== void 0 && (V = P.ref);
    for (w in P)
      R.call(P, w) && !O.hasOwnProperty(w) && (j[w] = P[w]);
    if (C && C.defaultProps)
      for (w in P = C.defaultProps, P)
        j[w] === void 0 && (j[w] = P[w]);
    return { $$typeof: m, type: C, key: U, ref: V, props: j, _owner: N.current };
  }
  return rr.Fragment = M, rr.jsx = D, rr.jsxs = D, rr;
}
var tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function hn() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Je, m = Symbol.for("react.element"), M = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), C = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), ee = Symbol.iterator, G = "@@iterator";
    function J(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = ee && n[ee] || n[G];
      return typeof u == "function" ? u : null;
    }
    var re = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function X(n) {
      {
        for (var u = arguments.length, p = new Array(u > 1 ? u - 1 : 0), _ = 1; _ < u; _++)
          p[_ - 1] = arguments[_];
        Z("error", n, p);
      }
    }
    function Z(n, u, p) {
      {
        var _ = re.ReactDebugCurrentFrame, q = _.getStackAddendum();
        q !== "" && (u += "%s", p = p.concat([q]));
        var K = p.map(function(Y) {
          return String(Y);
        });
        K.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, K);
      }
    }
    var z = !1, c = !1, ae = !1, ge = !1, Ee = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Te(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === R || n === O || Ee || n === N || n === I || n === w || ge || n === V || z || c || ae || typeof n == "object" && n !== null && (n.$$typeof === U || n.$$typeof === j || n.$$typeof === D || n.$$typeof === C || n.$$typeof === P || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Re || n.getModuleId !== void 0));
    }
    function Oe(n, u, p) {
      var _ = n.displayName;
      if (_)
        return _;
      var q = u.displayName || u.name || "";
      return q !== "" ? p + "(" + q + ")" : p;
    }
    function Se(n) {
      return n.displayName || "Context";
    }
    function de(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && X("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case R:
          return "Fragment";
        case M:
          return "Portal";
        case O:
          return "Profiler";
        case N:
          return "StrictMode";
        case I:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case C:
            var u = n;
            return Se(u) + ".Consumer";
          case D:
            var p = n;
            return Se(p._context) + ".Provider";
          case P:
            return Oe(n, n.render, "ForwardRef");
          case j:
            var _ = n.displayName || null;
            return _ !== null ? _ : de(n.type) || "Memo";
          case U: {
            var q = n, K = q._payload, Y = q._init;
            try {
              return de(Y(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ce = Object.assign, fe = 0, ue, T, be, Ce, r, a, l;
    function y() {
    }
    y.__reactDisabledLog = !0;
    function d() {
      {
        if (fe === 0) {
          ue = console.log, T = console.info, be = console.warn, Ce = console.error, r = console.group, a = console.groupCollapsed, l = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        fe++;
      }
    }
    function S() {
      {
        if (fe--, fe === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ce({}, n, {
              value: ue
            }),
            info: ce({}, n, {
              value: T
            }),
            warn: ce({}, n, {
              value: be
            }),
            error: ce({}, n, {
              value: Ce
            }),
            group: ce({}, n, {
              value: r
            }),
            groupCollapsed: ce({}, n, {
              value: a
            }),
            groupEnd: ce({}, n, {
              value: l
            })
          });
        }
        fe < 0 && X("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var b = re.ReactCurrentDispatcher, h;
    function g(n, u, p) {
      {
        if (h === void 0)
          try {
            throw Error();
          } catch (q) {
            var _ = q.stack.trim().match(/\n( *(at )?)/);
            h = _ && _[1] || "";
          }
        return `
` + h + n;
      }
    }
    var k = !1, $;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new pe();
    }
    function v(n, u) {
      if (!n || k)
        return "";
      {
        var p = $.get(n);
        if (p !== void 0)
          return p;
      }
      var _;
      k = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = b.current, b.current = null, d();
      try {
        if (u) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (we) {
              _ = we;
            }
            Reflect.construct(n, [], Y);
          } else {
            try {
              Y.call();
            } catch (we) {
              _ = we;
            }
            n.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (we) {
            _ = we;
          }
          n();
        }
      } catch (we) {
        if (we && _ && typeof we.stack == "string") {
          for (var F = we.stack.split(`
`), ye = _.stack.split(`
`), oe = F.length - 1, se = ye.length - 1; oe >= 1 && se >= 0 && F[oe] !== ye[se]; )
            se--;
          for (; oe >= 1 && se >= 0; oe--, se--)
            if (F[oe] !== ye[se]) {
              if (oe !== 1 || se !== 1)
                do
                  if (oe--, se--, se < 0 || F[oe] !== ye[se]) {
                    var _e = `
` + F[oe].replace(" at new ", " at ");
                    return n.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", n.displayName)), typeof n == "function" && $.set(n, _e), _e;
                  }
                while (oe >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        k = !1, b.current = K, S(), Error.prepareStackTrace = q;
      }
      var Fe = n ? n.displayName || n.name : "", yr = Fe ? g(Fe) : "";
      return typeof n == "function" && $.set(n, yr), yr;
    }
    function ve(n, u, p) {
      return v(n, !1);
    }
    function Ae(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function ke(n, u, p) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return v(n, Ae(n));
      if (typeof n == "string")
        return g(n);
      switch (n) {
        case I:
          return g("Suspense");
        case w:
          return g("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case P:
            return ve(n.render);
          case j:
            return ke(n.type, u, p);
          case U: {
            var _ = n, q = _._payload, K = _._init;
            try {
              return ke(K(q), u, p);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, Le = {}, or = re.ReactDebugCurrentFrame;
    function Ne(n) {
      if (n) {
        var u = n._owner, p = ke(n.type, n._source, u ? u.type : null);
        or.setExtraStackFrame(p);
      } else
        or.setExtraStackFrame(null);
    }
    function Pe(n, u, p, _, q) {
      {
        var K = Function.call.bind(Me);
        for (var Y in n)
          if (K(n, Y)) {
            var F = void 0;
            try {
              if (typeof n[Y] != "function") {
                var ye = Error((_ || "React class") + ": " + p + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ye.name = "Invariant Violation", ye;
              }
              F = n[Y](u, Y, _, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (oe) {
              F = oe;
            }
            F && !(F instanceof Error) && (Ne(q), X("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", p, Y, typeof F), Ne(null)), F instanceof Error && !(F.message in Le) && (Le[F.message] = !0, Ne(q), X("Failed %s type: %s", p, F.message), Ne(null));
          }
      }
    }
    var Ye = Array.isArray;
    function ze(n) {
      return Ye(n);
    }
    function ir(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, p = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return p;
      }
    }
    function ur(n) {
      try {
        return Be(n), !1;
      } catch {
        return !0;
      }
    }
    function Be(n) {
      return "" + n;
    }
    function Xe(n) {
      if (ur(n))
        return X("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(n)), Be(n);
    }
    var Ie = re.ReactCurrentOwner, Cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sr, cr, We;
    We = {};
    function wr(n) {
      if (Me.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Or(n) {
      if (Me.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Pr(n, u) {
      if (typeof n.ref == "string" && Ie.current && u && Ie.current.stateNode !== u) {
        var p = de(Ie.current.type);
        We[p] || (X('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de(Ie.current.type), n.ref), We[p] = !0);
      }
    }
    function $e(n, u) {
      {
        var p = function() {
          sr || (sr = !0, X("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        p.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function fr(n, u) {
      {
        var p = function() {
          cr || (cr = !0, X("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        p.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var kr = function(n, u, p, _, q, K, Y) {
      var F = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: n,
        key: u,
        ref: p,
        props: Y,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(F, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.defineProperty(F, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    };
    function xr(n, u, p, _, q) {
      {
        var K, Y = {}, F = null, ye = null;
        p !== void 0 && (Xe(p), F = "" + p), Or(u) && (Xe(u.key), F = "" + u.key), wr(u) && (ye = u.ref, Pr(u, q));
        for (K in u)
          Me.call(u, K) && !Cr.hasOwnProperty(K) && (Y[K] = u[K]);
        if (n && n.defaultProps) {
          var oe = n.defaultProps;
          for (K in oe)
            Y[K] === void 0 && (Y[K] = oe[K]);
        }
        if (F || ye) {
          var se = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          F && $e(Y, se), ye && fr(Y, se);
        }
        return kr(n, F, ye, q, _, Ie.current, Y);
      }
    }
    var He = re.ReactCurrentOwner, lr = re.ReactDebugCurrentFrame;
    function xe(n) {
      if (n) {
        var u = n._owner, p = ke(n.type, n._source, u ? u.type : null);
        lr.setExtraStackFrame(p);
      } else
        lr.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function De(n) {
      return typeof n == "object" && n !== null && n.$$typeof === m;
    }
    function Ve() {
      {
        if (He.current) {
          var n = de(He.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function jr(n) {
      {
        if (n !== void 0) {
          var u = n.fileName.replace(/^.*[\\\/]/, ""), p = n.lineNumber;
          return `

Check your code at ` + u + ":" + p + ".";
        }
        return "";
      }
    }
    var dr = {};
    function Ar(n) {
      {
        var u = Ve();
        if (!u) {
          var p = typeof n == "string" ? n : n.displayName || n.name;
          p && (u = `

Check the top-level render call using <` + p + ">.");
        }
        return u;
      }
    }
    function pr(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var p = Ar(u);
        if (dr[p])
          return;
        dr[p] = !0;
        var _ = "";
        n && n._owner && n._owner !== He.current && (_ = " It was passed a child from " + de(n._owner.type) + "."), xe(n), X('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, _), xe(null);
      }
    }
    function vr(n, u) {
      {
        if (typeof n != "object")
          return;
        if (ze(n))
          for (var p = 0; p < n.length; p++) {
            var _ = n[p];
            De(_) && pr(_, u);
          }
        else if (De(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var q = J(n);
          if (typeof q == "function" && q !== n.entries)
            for (var K = q.call(n), Y; !(Y = K.next()).done; )
              De(Y.value) && pr(Y.value, u);
        }
      }
    }
    function qe(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var p;
        if (typeof u == "function")
          p = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === P || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === j))
          p = u.propTypes;
        else
          return;
        if (p) {
          var _ = de(u);
          Pe(p, n.props, "prop", _, n);
        } else if (u.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var q = de(u);
          X("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && X("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qe(n) {
      {
        for (var u = Object.keys(n.props), p = 0; p < u.length; p++) {
          var _ = u[p];
          if (_ !== "children" && _ !== "key") {
            xe(n), X("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), xe(null);
            break;
          }
        }
        n.ref !== null && (xe(n), X("Invalid attribute `ref` supplied to `React.Fragment`."), xe(null));
      }
    }
    function Ze(n, u, p, _, q, K) {
      {
        var Y = Te(n);
        if (!Y) {
          var F = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (F += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ye = jr(q);
          ye ? F += ye : F += Ve();
          var oe;
          n === null ? oe = "null" : ze(n) ? oe = "array" : n !== void 0 && n.$$typeof === m ? (oe = "<" + (de(n.type) || "Unknown") + " />", F = " Did you accidentally export a JSX literal instead of a component?") : oe = typeof n, X("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", oe, F);
        }
        var se = xr(n, u, p, q, K);
        if (se == null)
          return se;
        if (Y) {
          var _e = u.children;
          if (_e !== void 0)
            if (_)
              if (ze(_e)) {
                for (var Fe = 0; Fe < _e.length; Fe++)
                  vr(_e[Fe], n);
                Object.freeze && Object.freeze(_e);
              } else
                X("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vr(_e, n);
        }
        return n === R ? Qe(se) : qe(se), se;
      }
    }
    function Ir(n, u, p) {
      return Ze(n, u, p, !0);
    }
    function $r(n, u, p) {
      return Ze(n, u, p, !1);
    }
    var Dr = $r, Fr = Ir;
    tr.Fragment = R, tr.jsx = Dr, tr.jsxs = Fr;
  }()), tr;
}
(function(s) {
  process.env.NODE_ENV === "production" ? s.exports = yn() : s.exports = hn();
})(fn);
const me = Tr.jsx, ar = Tr.jsxs;
const On = () => /* @__PURE__ */ me("div", { className: "hdui-linear-loader loader-container", children: /* @__PURE__ */ me("div", { className: "linear-loader-surface", children: /* @__PURE__ */ me("div", { className: "linear-loader-animated-surface" }) }) }), Pn = () => /* @__PURE__ */ me("div", { className: "hdui-circular-loader loader-container", children: /* @__PURE__ */ ar("svg", { className: "circular-loader-surface", children: [
  /* @__PURE__ */ me("circle", { cx: "50%", cy: "50%", r: "50%" }),
  /* @__PURE__ */ me("div", { className: "circular-loader-animated-surface", children: "H" })
] }) });
const kn = () => /* @__PURE__ */ ar("div", { className: "hd-ui-bouncy-loader loader-container", children: [
  /* @__PURE__ */ me("div", { className: "ball" }),
  /* @__PURE__ */ me("div", { className: "ball" }),
  /* @__PURE__ */ me("div", { className: "ball" }),
  /* @__PURE__ */ me("div", { className: "ball" })
] });
const xn = ({ onOpen: s, onClose: m }) => /* @__PURE__ */ ar("div", { className: "hd-ui-hamurger hamburger-container", children: [
  /* @__PURE__ */ me("input", { type: "checkbox", id: "ham-menu1", hidden: !0, onChange: (R) => {
    R.target.checked ? s(R) : m(R);
  }, title: "HamBurger" }),
  /* @__PURE__ */ ar("label", { className: "container__inner", htmlFor: "ham-menu1", children: [
    /* @__PURE__ */ me("div", { className: "stroke1 stroke" }),
    /* @__PURE__ */ me("div", { className: "stroke2 stroke" }),
    /* @__PURE__ */ me("div", { className: "stroke3 stroke" })
  ] })
] });
var je = {}, Ct = {
  get exports() {
    return je;
  },
  set exports(s) {
    je = s;
  }
}, Sr = {}, mn = {
  get exports() {
    return Sr;
  },
  set exports(s) {
    Sr = s;
  }
}, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function bn() {
  if (wt)
    return B;
  wt = 1;
  var s = typeof Symbol == "function" && Symbol.for, m = s ? Symbol.for("react.element") : 60103, M = s ? Symbol.for("react.portal") : 60106, R = s ? Symbol.for("react.fragment") : 60107, N = s ? Symbol.for("react.strict_mode") : 60108, O = s ? Symbol.for("react.profiler") : 60114, D = s ? Symbol.for("react.provider") : 60109, C = s ? Symbol.for("react.context") : 60110, P = s ? Symbol.for("react.async_mode") : 60111, I = s ? Symbol.for("react.concurrent_mode") : 60111, w = s ? Symbol.for("react.forward_ref") : 60112, j = s ? Symbol.for("react.suspense") : 60113, U = s ? Symbol.for("react.suspense_list") : 60120, V = s ? Symbol.for("react.memo") : 60115, ee = s ? Symbol.for("react.lazy") : 60116, G = s ? Symbol.for("react.block") : 60121, J = s ? Symbol.for("react.fundamental") : 60117, re = s ? Symbol.for("react.responder") : 60118, X = s ? Symbol.for("react.scope") : 60119;
  function Z(c) {
    if (typeof c == "object" && c !== null) {
      var ae = c.$$typeof;
      switch (ae) {
        case m:
          switch (c = c.type, c) {
            case P:
            case I:
            case R:
            case O:
            case N:
            case j:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case C:
                case w:
                case ee:
                case V:
                case D:
                  return c;
                default:
                  return ae;
              }
          }
        case M:
          return ae;
      }
    }
  }
  function z(c) {
    return Z(c) === I;
  }
  return B.AsyncMode = P, B.ConcurrentMode = I, B.ContextConsumer = C, B.ContextProvider = D, B.Element = m, B.ForwardRef = w, B.Fragment = R, B.Lazy = ee, B.Memo = V, B.Portal = M, B.Profiler = O, B.StrictMode = N, B.Suspense = j, B.isAsyncMode = function(c) {
    return z(c) || Z(c) === P;
  }, B.isConcurrentMode = z, B.isContextConsumer = function(c) {
    return Z(c) === C;
  }, B.isContextProvider = function(c) {
    return Z(c) === D;
  }, B.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === m;
  }, B.isForwardRef = function(c) {
    return Z(c) === w;
  }, B.isFragment = function(c) {
    return Z(c) === R;
  }, B.isLazy = function(c) {
    return Z(c) === ee;
  }, B.isMemo = function(c) {
    return Z(c) === V;
  }, B.isPortal = function(c) {
    return Z(c) === M;
  }, B.isProfiler = function(c) {
    return Z(c) === O;
  }, B.isStrictMode = function(c) {
    return Z(c) === N;
  }, B.isSuspense = function(c) {
    return Z(c) === j;
  }, B.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === R || c === I || c === O || c === N || c === j || c === U || typeof c == "object" && c !== null && (c.$$typeof === ee || c.$$typeof === V || c.$$typeof === D || c.$$typeof === C || c.$$typeof === w || c.$$typeof === J || c.$$typeof === re || c.$$typeof === X || c.$$typeof === G);
  }, B.typeOf = Z, B;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function gn() {
  return Ot || (Ot = 1, process.env.NODE_ENV !== "production" && function() {
    var s = typeof Symbol == "function" && Symbol.for, m = s ? Symbol.for("react.element") : 60103, M = s ? Symbol.for("react.portal") : 60106, R = s ? Symbol.for("react.fragment") : 60107, N = s ? Symbol.for("react.strict_mode") : 60108, O = s ? Symbol.for("react.profiler") : 60114, D = s ? Symbol.for("react.provider") : 60109, C = s ? Symbol.for("react.context") : 60110, P = s ? Symbol.for("react.async_mode") : 60111, I = s ? Symbol.for("react.concurrent_mode") : 60111, w = s ? Symbol.for("react.forward_ref") : 60112, j = s ? Symbol.for("react.suspense") : 60113, U = s ? Symbol.for("react.suspense_list") : 60120, V = s ? Symbol.for("react.memo") : 60115, ee = s ? Symbol.for("react.lazy") : 60116, G = s ? Symbol.for("react.block") : 60121, J = s ? Symbol.for("react.fundamental") : 60117, re = s ? Symbol.for("react.responder") : 60118, X = s ? Symbol.for("react.scope") : 60119;
    function Z(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === R || v === I || v === O || v === N || v === j || v === U || typeof v == "object" && v !== null && (v.$$typeof === ee || v.$$typeof === V || v.$$typeof === D || v.$$typeof === C || v.$$typeof === w || v.$$typeof === J || v.$$typeof === re || v.$$typeof === X || v.$$typeof === G);
    }
    function z(v) {
      if (typeof v == "object" && v !== null) {
        var ve = v.$$typeof;
        switch (ve) {
          case m:
            var Ae = v.type;
            switch (Ae) {
              case P:
              case I:
              case R:
              case O:
              case N:
              case j:
                return Ae;
              default:
                var ke = Ae && Ae.$$typeof;
                switch (ke) {
                  case C:
                  case w:
                  case ee:
                  case V:
                  case D:
                    return ke;
                  default:
                    return ve;
                }
            }
          case M:
            return ve;
        }
      }
    }
    var c = P, ae = I, ge = C, Ee = D, Re = m, Te = w, Oe = R, Se = ee, de = V, ce = M, fe = O, ue = N, T = j, be = !1;
    function Ce(v) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(v) || z(v) === P;
    }
    function r(v) {
      return z(v) === I;
    }
    function a(v) {
      return z(v) === C;
    }
    function l(v) {
      return z(v) === D;
    }
    function y(v) {
      return typeof v == "object" && v !== null && v.$$typeof === m;
    }
    function d(v) {
      return z(v) === w;
    }
    function S(v) {
      return z(v) === R;
    }
    function b(v) {
      return z(v) === ee;
    }
    function h(v) {
      return z(v) === V;
    }
    function g(v) {
      return z(v) === M;
    }
    function k(v) {
      return z(v) === O;
    }
    function $(v) {
      return z(v) === N;
    }
    function pe(v) {
      return z(v) === j;
    }
    H.AsyncMode = c, H.ConcurrentMode = ae, H.ContextConsumer = ge, H.ContextProvider = Ee, H.Element = Re, H.ForwardRef = Te, H.Fragment = Oe, H.Lazy = Se, H.Memo = de, H.Portal = ce, H.Profiler = fe, H.StrictMode = ue, H.Suspense = T, H.isAsyncMode = Ce, H.isConcurrentMode = r, H.isContextConsumer = a, H.isContextProvider = l, H.isElement = y, H.isForwardRef = d, H.isFragment = S, H.isLazy = b, H.isMemo = h, H.isPortal = g, H.isProfiler = k, H.isStrictMode = $, H.isSuspense = pe, H.isValidElementType = Z, H.typeOf = z;
  }()), H;
}
var Pt;
function Dt() {
  return Pt || (Pt = 1, function(s) {
    process.env.NODE_ENV === "production" ? s.exports = bn() : s.exports = gn();
  }(mn)), Sr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zr, kt;
function _n() {
  if (kt)
    return zr;
  kt = 1;
  var s = Object.getOwnPropertySymbols, m = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
  function R(O) {
    if (O == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(O);
  }
  function N() {
    try {
      if (!Object.assign)
        return !1;
      var O = new String("abc");
      if (O[5] = "de", Object.getOwnPropertyNames(O)[0] === "5")
        return !1;
      for (var D = {}, C = 0; C < 10; C++)
        D["_" + String.fromCharCode(C)] = C;
      var P = Object.getOwnPropertyNames(D).map(function(w) {
        return D[w];
      });
      if (P.join("") !== "0123456789")
        return !1;
      var I = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(w) {
        I[w] = w;
      }), Object.keys(Object.assign({}, I)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zr = N() ? Object.assign : function(O, D) {
    for (var C, P = R(O), I, w = 1; w < arguments.length; w++) {
      C = Object(arguments[w]);
      for (var j in C)
        m.call(C, j) && (P[j] = C[j]);
      if (s) {
        I = s(C);
        for (var U = 0; U < I.length; U++)
          M.call(C, I[U]) && (P[I[U]] = C[I[U]]);
      }
    }
    return P;
  }, zr;
}
var Br, xt;
function Xr() {
  if (xt)
    return Br;
  xt = 1;
  var s = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Br = s, Br;
}
var Hr, jt;
function Ft() {
  return jt || (jt = 1, Hr = Function.call.bind(Object.prototype.hasOwnProperty)), Hr;
}
var Gr, At;
function En() {
  if (At)
    return Gr;
  At = 1;
  var s = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var m = Xr(), M = {}, R = Ft();
    s = function(O) {
      var D = "Warning: " + O;
      typeof console < "u" && console.error(D);
      try {
        throw new Error(D);
      } catch {
      }
    };
  }
  function N(O, D, C, P, I) {
    if (process.env.NODE_ENV !== "production") {
      for (var w in O)
        if (R(O, w)) {
          var j;
          try {
            if (typeof O[w] != "function") {
              var U = Error(
                (P || "React class") + ": " + C + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw U.name = "Invariant Violation", U;
            }
            j = O[w](D, w, P, C, null, m);
          } catch (ee) {
            j = ee;
          }
          if (j && !(j instanceof Error) && s(
            (P || "React class") + ": type specification of " + C + " `" + w + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof j + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), j instanceof Error && !(j.message in M)) {
            M[j.message] = !0;
            var V = I ? I() : "";
            s(
              "Failed " + C + " type: " + j.message + (V ?? "")
            );
          }
        }
    }
  }
  return N.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (M = {});
  }, Gr = N, Gr;
}
var Kr, It;
function Rn() {
  if (It)
    return Kr;
  It = 1;
  var s = Dt(), m = _n(), M = Xr(), R = Ft(), N = En(), O = function() {
  };
  process.env.NODE_ENV !== "production" && (O = function(C) {
    var P = "Warning: " + C;
    typeof console < "u" && console.error(P);
    try {
      throw new Error(P);
    } catch {
    }
  });
  function D() {
    return null;
  }
  return Kr = function(C, P) {
    var I = typeof Symbol == "function" && Symbol.iterator, w = "@@iterator";
    function j(r) {
      var a = r && (I && r[I] || r[w]);
      if (typeof a == "function")
        return a;
    }
    var U = "<<anonymous>>", V = {
      array: re("array"),
      bigint: re("bigint"),
      bool: re("boolean"),
      func: re("function"),
      number: re("number"),
      object: re("object"),
      string: re("string"),
      symbol: re("symbol"),
      any: X(),
      arrayOf: Z,
      element: z(),
      elementType: c(),
      instanceOf: ae,
      node: Te(),
      objectOf: Ee,
      oneOf: ge,
      oneOfType: Re,
      shape: Se,
      exact: de
    };
    function ee(r, a) {
      return r === a ? r !== 0 || 1 / r === 1 / a : r !== r && a !== a;
    }
    function G(r, a) {
      this.message = r, this.data = a && typeof a == "object" ? a : {}, this.stack = "";
    }
    G.prototype = Error.prototype;
    function J(r) {
      if (process.env.NODE_ENV !== "production")
        var a = {}, l = 0;
      function y(S, b, h, g, k, $, pe) {
        if (g = g || U, $ = $ || h, pe !== M) {
          if (P) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = g + ":" + h;
            !a[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            l < 3 && (O(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), a[ve] = !0, l++);
          }
        }
        return b[h] == null ? S ? b[h] === null ? new G("The " + k + " `" + $ + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new G("The " + k + " `" + $ + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : r(b, h, g, k, $);
      }
      var d = y.bind(null, !1);
      return d.isRequired = y.bind(null, !0), d;
    }
    function re(r) {
      function a(l, y, d, S, b, h) {
        var g = l[y], k = ue(g);
        if (k !== r) {
          var $ = T(g);
          return new G(
            "Invalid " + S + " `" + b + "` of type " + ("`" + $ + "` supplied to `" + d + "`, expected ") + ("`" + r + "`."),
            { expectedType: r }
          );
        }
        return null;
      }
      return J(a);
    }
    function X() {
      return J(D);
    }
    function Z(r) {
      function a(l, y, d, S, b) {
        if (typeof r != "function")
          return new G("Property `" + b + "` of component `" + d + "` has invalid PropType notation inside arrayOf.");
        var h = l[y];
        if (!Array.isArray(h)) {
          var g = ue(h);
          return new G("Invalid " + S + " `" + b + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected an array."));
        }
        for (var k = 0; k < h.length; k++) {
          var $ = r(h, k, d, S, b + "[" + k + "]", M);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return J(a);
    }
    function z() {
      function r(a, l, y, d, S) {
        var b = a[l];
        if (!C(b)) {
          var h = ue(b);
          return new G("Invalid " + d + " `" + S + "` of type " + ("`" + h + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return J(r);
    }
    function c() {
      function r(a, l, y, d, S) {
        var b = a[l];
        if (!s.isValidElementType(b)) {
          var h = ue(b);
          return new G("Invalid " + d + " `" + S + "` of type " + ("`" + h + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return J(r);
    }
    function ae(r) {
      function a(l, y, d, S, b) {
        if (!(l[y] instanceof r)) {
          var h = r.name || U, g = Ce(l[y]);
          return new G("Invalid " + S + " `" + b + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected ") + ("instance of `" + h + "`."));
        }
        return null;
      }
      return J(a);
    }
    function ge(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? O(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : O("Invalid argument supplied to oneOf, expected an array.")), D;
      function a(l, y, d, S, b) {
        for (var h = l[y], g = 0; g < r.length; g++)
          if (ee(h, r[g]))
            return null;
        var k = JSON.stringify(r, function(pe, v) {
          var ve = T(v);
          return ve === "symbol" ? String(v) : v;
        });
        return new G("Invalid " + S + " `" + b + "` of value `" + String(h) + "` " + ("supplied to `" + d + "`, expected one of " + k + "."));
      }
      return J(a);
    }
    function Ee(r) {
      function a(l, y, d, S, b) {
        if (typeof r != "function")
          return new G("Property `" + b + "` of component `" + d + "` has invalid PropType notation inside objectOf.");
        var h = l[y], g = ue(h);
        if (g !== "object")
          return new G("Invalid " + S + " `" + b + "` of type " + ("`" + g + "` supplied to `" + d + "`, expected an object."));
        for (var k in h)
          if (R(h, k)) {
            var $ = r(h, k, d, S, b + "." + k, M);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return J(a);
    }
    function Re(r) {
      if (!Array.isArray(r))
        return process.env.NODE_ENV !== "production" && O("Invalid argument supplied to oneOfType, expected an instance of array."), D;
      for (var a = 0; a < r.length; a++) {
        var l = r[a];
        if (typeof l != "function")
          return O(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(l) + " at index " + a + "."
          ), D;
      }
      function y(d, S, b, h, g) {
        for (var k = [], $ = 0; $ < r.length; $++) {
          var pe = r[$], v = pe(d, S, b, h, g, M);
          if (v == null)
            return null;
          v.data && R(v.data, "expectedType") && k.push(v.data.expectedType);
        }
        var ve = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new G("Invalid " + h + " `" + g + "` supplied to " + ("`" + b + "`" + ve + "."));
      }
      return J(y);
    }
    function Te() {
      function r(a, l, y, d, S) {
        return ce(a[l]) ? null : new G("Invalid " + d + " `" + S + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return J(r);
    }
    function Oe(r, a, l, y, d) {
      return new G(
        (r || "React class") + ": " + a + " type `" + l + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + d + "`."
      );
    }
    function Se(r) {
      function a(l, y, d, S, b) {
        var h = l[y], g = ue(h);
        if (g !== "object")
          return new G("Invalid " + S + " `" + b + "` of type `" + g + "` " + ("supplied to `" + d + "`, expected `object`."));
        for (var k in r) {
          var $ = r[k];
          if (typeof $ != "function")
            return Oe(d, S, b, k, T($));
          var pe = $(h, k, d, S, b + "." + k, M);
          if (pe)
            return pe;
        }
        return null;
      }
      return J(a);
    }
    function de(r) {
      function a(l, y, d, S, b) {
        var h = l[y], g = ue(h);
        if (g !== "object")
          return new G("Invalid " + S + " `" + b + "` of type `" + g + "` " + ("supplied to `" + d + "`, expected `object`."));
        var k = m({}, l[y], r);
        for (var $ in k) {
          var pe = r[$];
          if (R(r, $) && typeof pe != "function")
            return Oe(d, S, b, $, T(pe));
          if (!pe)
            return new G(
              "Invalid " + S + " `" + b + "` key `" + $ + "` supplied to `" + d + "`.\nBad object: " + JSON.stringify(l[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(r), null, "  ")
            );
          var v = pe(h, $, d, S, b + "." + $, M);
          if (v)
            return v;
        }
        return null;
      }
      return J(a);
    }
    function ce(r) {
      switch (typeof r) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !r;
        case "object":
          if (Array.isArray(r))
            return r.every(ce);
          if (r === null || C(r))
            return !0;
          var a = j(r);
          if (a) {
            var l = a.call(r), y;
            if (a !== r.entries) {
              for (; !(y = l.next()).done; )
                if (!ce(y.value))
                  return !1;
            } else
              for (; !(y = l.next()).done; ) {
                var d = y.value;
                if (d && !ce(d[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function fe(r, a) {
      return r === "symbol" ? !0 : a ? a["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && a instanceof Symbol : !1;
    }
    function ue(r) {
      var a = typeof r;
      return Array.isArray(r) ? "array" : r instanceof RegExp ? "object" : fe(a, r) ? "symbol" : a;
    }
    function T(r) {
      if (typeof r > "u" || r === null)
        return "" + r;
      var a = ue(r);
      if (a === "object") {
        if (r instanceof Date)
          return "date";
        if (r instanceof RegExp)
          return "regexp";
      }
      return a;
    }
    function be(r) {
      var a = T(r);
      switch (a) {
        case "array":
        case "object":
          return "an " + a;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + a;
        default:
          return a;
      }
    }
    function Ce(r) {
      return !r.constructor || !r.constructor.name ? U : r.constructor.name;
    }
    return V.checkPropTypes = N, V.resetWarningCache = N.resetWarningCache, V.PropTypes = V, V;
  }, Kr;
}
var Jr, $t;
function Tn() {
  if ($t)
    return Jr;
  $t = 1;
  var s = Xr();
  function m() {
  }
  function M() {
  }
  return M.resetWarningCache = m, Jr = function() {
    function R(D, C, P, I, w, j) {
      if (j !== s) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
      }
    }
    R.isRequired = R;
    function N() {
      return R;
    }
    var O = {
      array: R,
      bigint: R,
      bool: R,
      func: R,
      number: R,
      object: R,
      string: R,
      symbol: R,
      any: R,
      arrayOf: N,
      element: R,
      elementType: R,
      instanceOf: N,
      node: R,
      objectOf: N,
      oneOf: N,
      oneOfType: N,
      shape: N,
      exact: N,
      checkPropTypes: M,
      resetWarningCache: m
    };
    return O.PropTypes = O, O;
  }, Jr;
}
if (process.env.NODE_ENV !== "production") {
  var Sn = Dt(), Cn = !0;
  Ct.exports = Rn()(Sn.isElement, Cn);
} else
  Ct.exports = Tn()();
const wn = ({ containerStyle: s, children: m, torchStyle: M }) => {
  const R = Je.useRef(null);
  return Je.useEffect(() => {
    if (M && M.size)
      try {
        Object.entries(M).forEach(([C, P]) => {
          C !== "size" ? R.current.style[C] = P : R.current.style.width = `${(M.size * 100).toFixed(2)}%`;
        });
      } catch (C) {
        console.error(C), console.log("Incorrect style format for `torchStyle` prop");
      }
  }, []), /* @__PURE__ */ ar("div", { className: "hd-ui-torchbox torch-box-container", onMouseOver: () => {
    R.current.style.visibility = "visible", R.current.style.opacity = 1;
  }, onMouseOut: () => {
    R.current.style.visibility = "hidden", R.current.style.opacity = 0;
  }, onMouseMove: (C) => {
    C.stopPropagation();
    const { top: P, left: I } = C.currentTarget.getBoundingClientRect();
    R.current.animate({
      left: `${C.clientX - I}px`,
      top: `${C.clientY - P}px`
    }, { duration: 500, fill: "forwards" });
  }, children: [
    /* @__PURE__ */ me("div", { ref: R, className: "torch-shadow" }),
    /* @__PURE__ */ me("div", { className: "torch-shadow-overlay" }),
    /* @__PURE__ */ me("div", { className: "torch-box-container__child-container", style: s, children: m })
  ] });
};
wn.propTypes = {
  children: je.oneOfType([je.element, je.arrayOf(je.element)]),
  containerStyle: je.object.isRequired,
  torchStyle: je.shape({
    size: je.number.isRequired
  })
};
export {
  kn as BouncyBalls,
  Pn as CircularLoader,
  xn as HamBurger,
  On as LinearLoader,
  wn as TorchBox
};
