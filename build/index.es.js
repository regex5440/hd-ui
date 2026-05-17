import { useEffect as e, useRef as t, useState as n } from "react";
//#region \0rolldown/runtime.js
var r = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), i = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), a = /* @__PURE__ */ r(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), o = /* @__PURE__ */ r(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function a(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (M(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), c(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && l(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = i("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(a(s)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(a(e)) : L);
		};
	})();
})), s = (/* @__PURE__ */ r(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = a() : t.exports = o();
})))(), c = ({ height: n = "7px", width: r = "300px", riderColor: i = "#343434", trackColor: a = "#fff", withProgress: o = !0, percentage: c = 0, maxPercentage: l = 100, style: u }) => {
	let d = t(null), f = t(null);
	e(() => {
		i && d.current?.style.setProperty("--riderColor", i), a && d.current?.style.setProperty("--trackColor", a);
	}, [
		i,
		a,
		d.current
	]);
	let p = c / l * 100;
	return /* @__PURE__ */ (0, s.jsx)("div", {
		className: "hdui-linear-loader loader-container",
		style: {
			height: n,
			width: r,
			...u
		},
		ref: d,
		children: /* @__PURE__ */ (0, s.jsx)("div", {
			className: "linear-loader-surface",
			children: /* @__PURE__ */ (0, s.jsx)("div", {
				className: "linear-loader-animated-surface",
				ref: f,
				"data-type": o ? "progress" : "loader",
				style: o ? { width: `${p >= 0 ? p : p >= 100 ? 100 : 0}%` } : {}
			})
		})
	});
}, l = ({ size: n = 40, trackColor: r, riderColor: i, trackWidth: a = 10, riderWidth: o = 10, style: c }) => {
	let l = t(null);
	e(() => {
		if (l.current && getComputedStyle(l.current).display !== "none") {
			console.log(getComputedStyle(l.current).display);
			let e = l.current?.getElementsByClassName("cover")?.[0]?.getTotalLength?.() || 0;
			l.current.style.setProperty("--dasharray", e.toFixed(2) + "px");
		}
	}, [n]);
	let u = a > o ? a : o;
	return /* @__PURE__ */ (0, s.jsx)("div", {
		className: "hdui-circular-loader loader-container",
		style: c,
		ref: l,
		children: /* @__PURE__ */ (0, s.jsxs)("svg", {
			className: "circular-loader-surface",
			width: n,
			height: n,
			children: [
				/* @__PURE__ */ (0, s.jsx)("circle", {
					cx: "50%",
					cy: "50%",
					r: `${50 - u}%`,
					stroke: r,
					style: { strokeWidth: `${a}%` },
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, s.jsx)("circle", {
					strokeLinecap: "round",
					cx: "50%",
					cy: "50%",
					r: `${50 - u}%`,
					className: "cover",
					stroke: i || "rgb(52, 52, 52)",
					style: { strokeWidth: `${o}%` }
				}),
				/* @__PURE__ */ (0, s.jsx)("div", {
					className: "circular-loader-animated-surface",
					children: "H"
				})
			]
		})
	});
}, u = ({ ballColor: n, style: r = {} }) => {
	let i = t(null);
	return e(() => {
		i.current && n && i.current.style.setProperty("--bouncyBallColor", n);
	}, [n, i.current]), /* @__PURE__ */ (0, s.jsxs)("div", {
		className: "hd-ui-bouncy-loader loader-container",
		ref: i,
		style: r,
		children: [
			/* @__PURE__ */ (0, s.jsx)("div", { className: "ball" }),
			/* @__PURE__ */ (0, s.jsx)("div", { className: "ball" }),
			/* @__PURE__ */ (0, s.jsx)("div", { className: "ball" }),
			/* @__PURE__ */ (0, s.jsx)("div", { className: "ball" })
		]
	});
}, d = ({ onOpen: e, onClose: t, strokeColor: n = "rgb(125,125,125)" }) => /* @__PURE__ */ (0, s.jsxs)("div", {
	className: "hd-ui-hamurger hamburger-container",
	children: [/* @__PURE__ */ (0, s.jsx)("input", {
		type: "checkbox",
		id: "ham-menu1",
		hidden: !0,
		onChange: (n) => {
			n.target.checked ? e && e(n) : t && t(n);
		},
		title: "HamBurger"
	}), /* @__PURE__ */ (0, s.jsxs)("label", {
		className: "container__inner",
		htmlFor: "ham-menu1",
		children: [
			/* @__PURE__ */ (0, s.jsx)("div", {
				className: "stroke1 stroke",
				style: { backgroundColor: n }
			}),
			/* @__PURE__ */ (0, s.jsx)("div", {
				className: "stroke2 stroke",
				style: { backgroundColor: n }
			}),
			/* @__PURE__ */ (0, s.jsx)("div", {
				className: "stroke3 stroke",
				style: { backgroundColor: n }
			})
		]
	})]
}), f = ({ children: r, onChange: i, style: a, optionLayerStyle: o, selectedOptionStyle: c, defaultValue: l, actionType: u, ...d }) => {
	let [f, p] = n(!1), [m, h] = n(), g = t(null), _ = Array.isArray(r) ? r.length : 1;
	e(() => {
		if (Array.isArray(r)) {
			let e = 0;
			for (let [t, n] of r.entries()) if (l === n.props.value || n.props.selected) {
				e = t, h({
					layout: n.props.children,
					value: n.props.value
				});
				break;
			}
			g.current?.children?.[e]?.setAttribute("selected", "");
		} else g.current?.children?.[0]?.setAttribute("selected", "");
	}, [r]), f && g.current?.focus();
	let v = (e) => {
		if (e.target instanceof HTMLDivElement && e.target.ariaLabel === "option") {
			let t = e.target.dataset.value || e.target.textContent?.trim() || "";
			m?.value !== t && (h({
				layout: e.target.innerHTML || t,
				value: t
			}), e.target.parentElement?.querySelector("[selected]")?.removeAttribute("selected"), e.target.setAttribute("selected", ""), i?.(t)), p(!1);
		} else p(!0);
	};
	return /* @__PURE__ */ (0, s.jsx)("div", {
		className: "hd-ui-dropdown dropdown-container",
		...d,
		children: /* @__PURE__ */ (0, s.jsxs)("div", {
			className: `dropdown-container-set${u === "hover" ? " mouseover" : ""}`,
			onClick: v,
			"aria-hidden": !f,
			style: a,
			children: [/* @__PURE__ */ (0, s.jsx)("div", {
				className: "dropdown-button",
				style: c,
				children: m?.layout || "--Select--"
			}), /* @__PURE__ */ (0, s.jsx)("div", {
				className: "dropdown-layer",
				style: {
					height: `${_ * 100}%`,
					...o
				},
				ref: g,
				tabIndex: 0,
				onBlur: () => p(!1),
				children: r
			})]
		})
	});
};
f.Option = ({ children: e, value: t, selected: n = !1, ...r }) => /* @__PURE__ */ (0, s.jsx)("div", {
	className: "hd-ui-dropdown-option",
	"data-value": t,
	"aria-label": "option",
	...n ? { selected: n } : {},
	...r,
	children: e
});
//#endregion
//#region src/components/Layout/TorchBox/TorchBox.tsx
var p = ({ containerStyle: n, children: r, torchStyle: i }) => {
	let a = t(null);
	return e(() => {
		if (i) try {
			i.size && a.current?.style?.setProperty("width", `${(Number(i.size) * 100).toFixed(2)}%`), i.color && a.current?.style.setProperty("background-color", i.color);
		} catch (e) {
			console.error(e), console.log("Incorrect style format for `torchStyle` prop");
		}
	}, [a.current, i]), /* @__PURE__ */ (0, s.jsxs)("div", {
		className: "hd-ui-torchbox torch-box-container",
		onMouseOver: () => {
			a.current && (a.current.style.visibility = "visible", a.current.style.opacity = "1");
		},
		onMouseOut: () => {
			a.current && (a.current.style.visibility = "hidden", a.current.style.opacity = "0");
		},
		onMouseMove: (e) => {
			e.stopPropagation();
			let { top: t, left: n } = e.currentTarget.getBoundingClientRect();
			a.current && a.current.animate({
				left: `${e.clientX - n}px`,
				top: `${e.clientY - t}px`
			}, {
				duration: 500,
				fill: "forwards"
			});
		},
		style: n,
		children: [
			/* @__PURE__ */ (0, s.jsx)("div", {
				ref: a,
				className: "torch-shadow"
			}),
			/* @__PURE__ */ (0, s.jsx)("div", { className: "torch-shadow-overlay" }),
			/* @__PURE__ */ (0, s.jsx)("div", {
				className: "torch-box-container__child-container",
				children: r
			})
		]
	});
}, m = ({ open: r = !1, closeHandler: i, showBackdrop: a = !0, keepModalCentered: o = !0, TransitionStyle: c = "fade", children: l, closeOnBlur: u = !0, closeOnBackDropClick: d = !0, triggerElement: f, modalStyle: p, ...m }) => {
	let [h, g] = n(!1), _ = t(null), v = t(null);
	e(() => {
		r && g(!0), !r && c !== "none" && (v.current?.style.removeProperty("animation"), _.current?.style.removeProperty("animation"), setTimeout(() => {
			v.current?.style.setProperty("animation", "fade 300ms ease reverse forwards"), _.current?.style.setProperty("animation", `${c} 200ms ease reverse forwards`);
		}, 0)), c === "none" && y();
	}, [
		r,
		c,
		v,
		_
	]), e(() => {
		r && _.current?.focus();
	}, [
		r,
		h,
		_.current
	]), e(() => {
		if (!o && f?.current && _.current) {
			let e = _.current.offsetWidth, t = _.current.offsetHeight, { left: n, top: r } = f.current.getBoundingClientRect();
			n + e > window.innerWidth && (n = window.innerWidth - e - 10), r + t > window.innerHeight && (r = window.innerHeight - t - 10), _.current.style.setProperty("left", `${n}px`), _.current.style.setProperty("top", `${r}px`);
		}
	});
	let y = () => {
		r || (g(!1), i?.());
	};
	return /* @__PURE__ */ (0, s.jsx)(s.Fragment, { children: h && /* @__PURE__ */ (0, s.jsxs)("div", {
		className: "hd-ui-modal modal-container",
		children: [a && /* @__PURE__ */ (0, s.jsx)("div", {
			className: "hd-ui-modal-overlay",
			"data-visible": a,
			ref: v,
			onClick: d ? i : void 0,
			style: c === "none" ? {} : { animation: "fade 400ms ease" }
		}), /* @__PURE__ */ (0, s.jsx)("div", {
			className: "modal-child-container",
			"data-centered": o,
			"aria-modal": !0,
			style: {
				maxWidth: `${window.innerWidth}px`,
				maxHeight: `${window.innerHeight}px`,
				animation: `${c} 300ms ease`,
				...p
			},
			ref: _,
			onAnimationEnd: y,
			tabIndex: 0,
			onBlur: u ? (e) => {
				let t = e.currentTarget;
				setTimeout(() => {
					t.contains(document.activeElement) || i();
				}, 0);
			} : void 0,
			...m,
			children: l
		})]
	}) });
}, h = ({ Loader: n = /* @__PURE__ */ (0, s.jsx)(l, { size: 39 }), onVisibleHandler: r, endOfData: i }) => {
	let a = t(null), o = t(new IntersectionObserver(([e]) => {
		e.isIntersecting && (console.log("Hello"), r?.());
	}));
	return e(() => {
		a.current && (o.current = new IntersectionObserver(([e]) => {
			e.isIntersecting && r?.();
		}), o.current.observe(a.current));
	}, [i]), /* @__PURE__ */ (0, s.jsx)(s.Fragment, { children: !i && /* @__PURE__ */ (0, s.jsx)("div", {
		className: "hd-ui-lazy-loader lazy-loader-container",
		ref: a,
		children: n
	}) });
};
//#endregion
export { u as BouncyBalls, l as CircularLoader, f as DropDown, d as HamBurger, h as LazyLoader, c as LinearLoader, m as Modal, p as TorchBox };
