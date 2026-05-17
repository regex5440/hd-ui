import { useEffect as e, useRef as t, useState as n } from "react";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/loaders/Infinite/LinearLoader.tsx
var o = ({ height: n = "7px", width: r = "300px", riderColor: a = "#343434", trackColor: o = "#fff", withProgress: s = !0, percentage: c = 0, maxPercentage: l = 100, style: u }) => {
	let d = t(null), f = t(null);
	e(() => {
		a && d.current?.style.setProperty("--riderColor", a), o && d.current?.style.setProperty("--trackColor", o);
	}, [
		a,
		o,
		d.current
	]);
	let p = c / l * 100;
	return /* @__PURE__ */ i("div", {
		className: "hdui-linear-loader loader-container",
		style: {
			height: n,
			width: r,
			...u
		},
		ref: d,
		children: /* @__PURE__ */ i("div", {
			className: "linear-loader-surface",
			children: /* @__PURE__ */ i("div", {
				className: "linear-loader-animated-surface",
				ref: f,
				"data-type": s ? "progress" : "loader",
				style: s ? { width: `${p >= 0 ? p : p >= 100 ? 100 : 0}%` } : {}
			})
		})
	});
}, s = ({ size: n = 40, trackColor: r, riderColor: o, trackWidth: s = 10, riderWidth: c = 10, style: l }) => {
	let u = t(null);
	e(() => {
		if (u.current && getComputedStyle(u.current).display !== "none") {
			console.log(getComputedStyle(u.current).display);
			let e = u.current?.getElementsByClassName("cover")?.[0]?.getTotalLength?.() || 0;
			u.current.style.setProperty("--dasharray", e.toFixed(2) + "px");
		}
	}, [n]);
	let d = s > c ? s : c;
	return /* @__PURE__ */ i("div", {
		className: "hdui-circular-loader loader-container",
		style: l,
		ref: u,
		children: /* @__PURE__ */ a("svg", {
			className: "circular-loader-surface",
			width: n,
			height: n,
			children: [
				/* @__PURE__ */ i("circle", {
					cx: "50%",
					cy: "50%",
					r: `${50 - d}%`,
					stroke: r,
					style: { strokeWidth: `${s}%` },
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ i("circle", {
					strokeLinecap: "round",
					cx: "50%",
					cy: "50%",
					r: `${50 - d}%`,
					className: "cover",
					stroke: o || "rgb(52, 52, 52)",
					style: { strokeWidth: `${c}%` }
				}),
				/* @__PURE__ */ i("div", {
					className: "circular-loader-animated-surface",
					children: "H"
				})
			]
		})
	});
}, c = ({ ballColor: n, style: r = {} }) => {
	let o = t(null);
	return e(() => {
		o.current && n && o.current.style.setProperty("--bouncyBallColor", n);
	}, [n, o.current]), /* @__PURE__ */ a("div", {
		className: "hd-ui-bouncy-loader loader-container",
		ref: o,
		style: r,
		children: [
			/* @__PURE__ */ i("div", { className: "ball" }),
			/* @__PURE__ */ i("div", { className: "ball" }),
			/* @__PURE__ */ i("div", { className: "ball" }),
			/* @__PURE__ */ i("div", { className: "ball" })
		]
	});
}, l = ({ onOpen: e, onClose: t, strokeColor: n = "rgb(125,125,125)" }) => /* @__PURE__ */ a("div", {
	className: "hd-ui-hamurger hamburger-container",
	children: [/* @__PURE__ */ i("input", {
		type: "checkbox",
		id: "ham-menu1",
		hidden: !0,
		onChange: (n) => {
			n.target.checked ? e && e(n) : t && t(n);
		},
		title: "HamBurger"
	}), /* @__PURE__ */ a("label", {
		className: "container__inner",
		htmlFor: "ham-menu1",
		children: [
			/* @__PURE__ */ i("div", {
				className: "stroke1 stroke",
				style: { backgroundColor: n }
			}),
			/* @__PURE__ */ i("div", {
				className: "stroke2 stroke",
				style: { backgroundColor: n }
			}),
			/* @__PURE__ */ i("div", {
				className: "stroke3 stroke",
				style: { backgroundColor: n }
			})
		]
	})]
}), u = ({ children: r, onChange: o, style: s, optionLayerStyle: c, selectedOptionStyle: l, defaultValue: u, actionType: d, ...f }) => {
	let [p, m] = n(!1), [h, g] = n(), _ = t(null), v = Array.isArray(r) ? r.length : 1;
	e(() => {
		if (Array.isArray(r)) {
			let e = 0;
			for (let [t, n] of r.entries()) if (u === n.props.value || n.props.selected) {
				e = t, g({
					layout: n.props.children,
					value: n.props.value
				});
				break;
			}
			_.current?.children?.[e]?.setAttribute("selected", "");
		} else _.current?.children?.[0]?.setAttribute("selected", "");
	}, [r]), p && _.current?.focus();
	let y = (e) => {
		if (e.target instanceof HTMLDivElement && e.target.ariaLabel === "option") {
			let t = e.target.dataset.value || e.target.textContent?.trim() || "";
			h?.value !== t && (g({
				layout: e.target.innerHTML || t,
				value: t
			}), e.target.parentElement?.querySelector("[selected]")?.removeAttribute("selected"), e.target.setAttribute("selected", ""), o?.(t)), m(!1);
		} else m(!0);
	};
	return /* @__PURE__ */ i("div", {
		className: "hd-ui-dropdown dropdown-container",
		...f,
		children: /* @__PURE__ */ a("div", {
			className: `dropdown-container-set${d === "hover" ? " mouseover" : ""}`,
			onClick: y,
			"aria-hidden": !p,
			style: s,
			children: [/* @__PURE__ */ i("div", {
				className: "dropdown-button",
				style: l,
				children: h?.layout || "--Select--"
			}), /* @__PURE__ */ i("div", {
				className: "dropdown-layer",
				style: {
					height: `${v * 100}%`,
					...c
				},
				ref: _,
				tabIndex: 0,
				onBlur: () => m(!1),
				children: r
			})]
		})
	});
};
u.Option = ({ children: e, value: t, selected: n = !1, ...r }) => /* @__PURE__ */ i("div", {
	className: "hd-ui-dropdown-option",
	"data-value": t,
	"aria-label": "option",
	...n ? { selected: n } : {},
	...r,
	children: e
});
//#endregion
//#region src/components/Layout/TorchBox/TorchBox.tsx
var d = ({ containerStyle: n, children: r, torchStyle: o }) => {
	let s = t(null);
	return e(() => {
		if (o) try {
			o.size && s.current?.style?.setProperty("width", `${(Number(o.size) * 100).toFixed(2)}%`), o.color && s.current?.style.setProperty("background-color", o.color);
		} catch (e) {
			console.error(e), console.log("Incorrect style format for `torchStyle` prop");
		}
	}, [s.current, o]), /* @__PURE__ */ a("div", {
		className: "hd-ui-torchbox torch-box-container",
		onMouseOver: () => {
			s.current && (s.current.style.visibility = "visible", s.current.style.opacity = "1");
		},
		onMouseOut: () => {
			s.current && (s.current.style.visibility = "hidden", s.current.style.opacity = "0");
		},
		onMouseMove: (e) => {
			e.stopPropagation();
			let { top: t, left: n } = e.currentTarget.getBoundingClientRect();
			s.current && s.current.animate({
				left: `${e.clientX - n}px`,
				top: `${e.clientY - t}px`
			}, {
				duration: 500,
				fill: "forwards"
			});
		},
		style: n,
		children: [
			/* @__PURE__ */ i("div", {
				ref: s,
				className: "torch-shadow"
			}),
			/* @__PURE__ */ i("div", { className: "torch-shadow-overlay" }),
			/* @__PURE__ */ i("div", {
				className: "torch-box-container__child-container",
				children: r
			})
		]
	});
}, f = ({ open: o = !1, closeHandler: s, showBackdrop: c = !0, keepModalCentered: l = !0, TransitionStyle: u = "fade", children: d, closeOnBlur: f = !0, closeOnBackDropClick: p = !0, triggerElement: m, modalStyle: h, ...g }) => {
	let [_, v] = n(!1), y = t(null), b = t(null);
	e(() => {
		o && v(!0), !o && u !== "none" && (b.current?.style.removeProperty("animation"), y.current?.style.removeProperty("animation"), setTimeout(() => {
			b.current?.style.setProperty("animation", "fade 300ms ease reverse forwards"), y.current?.style.setProperty("animation", `${u} 200ms ease reverse forwards`);
		}, 0)), u === "none" && x();
	}, [
		o,
		u,
		b,
		y
	]), e(() => {
		o && y.current?.focus();
	}, [
		o,
		_,
		y.current
	]), e(() => {
		if (!l && m?.current && y.current) {
			let e = y.current.offsetWidth, t = y.current.offsetHeight, { left: n, top: r } = m.current.getBoundingClientRect();
			n + e > window.innerWidth && (n = window.innerWidth - e - 10), r + t > window.innerHeight && (r = window.innerHeight - t - 10), y.current.style.setProperty("left", `${n}px`), y.current.style.setProperty("top", `${r}px`);
		}
	});
	let x = () => {
		o || (v(!1), s?.());
	};
	return /* @__PURE__ */ i(r, { children: _ && /* @__PURE__ */ a("div", {
		className: "hd-ui-modal modal-container",
		children: [c && /* @__PURE__ */ i("div", {
			className: "hd-ui-modal-overlay",
			"data-visible": c,
			ref: b,
			onClick: p ? s : void 0,
			style: u === "none" ? {} : { animation: "fade 400ms ease" }
		}), /* @__PURE__ */ i("div", {
			className: "modal-child-container",
			"data-centered": l,
			"aria-modal": !0,
			style: {
				maxWidth: `${window.innerWidth}px`,
				maxHeight: `${window.innerHeight}px`,
				animation: `${u} 300ms ease`,
				...h
			},
			ref: y,
			onAnimationEnd: x,
			tabIndex: 0,
			onBlur: f ? (e) => {
				let t = e.currentTarget;
				setTimeout(() => {
					t.contains(document.activeElement) || s();
				}, 0);
			} : void 0,
			...g,
			children: d
		})]
	}) });
}, p = ({ Loader: n = /* @__PURE__ */ i(s, { size: 39 }), onVisibleHandler: a, endOfData: o }) => {
	let c = t(null), l = t(new IntersectionObserver(([e]) => {
		e.isIntersecting && (console.log("Hello"), a?.());
	}));
	return e(() => {
		c.current && (l.current = new IntersectionObserver(([e]) => {
			e.isIntersecting && a?.();
		}), l.current.observe(c.current));
	}, [o]), /* @__PURE__ */ i(r, { children: !o && /* @__PURE__ */ i("div", {
		className: "hd-ui-lazy-loader lazy-loader-container",
		ref: c,
		children: n
	}) });
};
//#endregion
export { c as BouncyBalls, s as CircularLoader, u as DropDown, l as HamBurger, p as LazyLoader, o as LinearLoader, f as Modal, d as TorchBox };
