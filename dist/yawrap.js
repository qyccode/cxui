/**
 * Yawrap v1.0.0
 * http://yawrap.yawzhou.com
 *
 * Author: Yaw Zhou
 * http://yawzhou.com
 *
 * Copyright © 2018 YawZhou,admin@yawzhou.com
 * Released under the MIT License
 * https://opensource.org/licenses/MIT
 *
 * Date: 2018.2.16 08:21
 */
!
function(t) {
	function a(r) {
		if (e[r]) return e[r].exports;
		var o = e[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(o.exports, o, o.exports, a), o.l = !0, o.exports
	}
	var e = {};
	a.m = t, a.c = e, a.d = function(t, e, r) {
		a.o(t, e) || Object.defineProperty(t, e, {
			configurable: !1,
			enumerable: !0,
			get: r
		})
	}, a.n = function(t) {
		var e = t && t.__esModule ?
		function() {
			return t.
		default
		} : function() {
			return t
		};
		return a.d(e, "a", e), e
	}, a.o = function(t, a) {
		return Object.prototype.hasOwnProperty.call(t, a)
	}, a.p = "", a(a.s = 0)
}([function(t, a, e) {
	e(1), e(6)
}, function(t, a, e) {
	var r = e(2);
	"string" == typeof r && (r = [
		[t.i, r, ""]
	]);
	var o = {
		hmr: !0
	};
	o.transform = void 0;
	e(4)(r, o);
	r.locals && (t.exports = r.locals)
}, function(t, a, e) {
	a = t.exports = e(3)(!1), a.push([t.i, "body,h1,h2,h3,h4,h5,h6,p,ul{margin:0;padding:0}*{transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-o-transition:.3s;animation:1s;-moz-animation:1s;-webkit-animation:1s;-o-animation:1s}li{list-style:none}body{font-family:Microsoft YaHei,Source Sans Pro,Helvetica Neue,Arial,sans-serif}a{color:#333;text-decoration:none;transition:all .15s ease-in-out}.black,.hv-black:hover{color:#000}.bg-black,.hv-bg-black:hover{background-color:#000}.hv-white:hover,.white{color:#fff}.bg-white,.hv-bg-white:hover{background-color:#fff}.hv-red:hover,.red{color:#f44336}.bg-red,.hv-bg-red:hover{background-color:#f44336}.hv-pink:hover,.pink{color:#e91e63}.bg-pink,.hv-bg-pink:hover{background-color:#e91e63}.hv-purple:hover,.purple{color:#9c27b0}.bg-purple,.hv-bg-purple:hover{background-color:#9c27b0}.deeppurple,.hv-deeppurple:hover{color:#673ab7}.bg-deeppurple,.hv-bg-deeppurple:hover{background-color:#673ab7}.hv-indigo:hover,.indigo{color:#3f51b5}.bg-indigo,.hv-bg-indigo:hover{background-color:#3f51b5}.blue,.hv-blue:hover{color:#2196f3}.bg-blue,.hv-bg-blue:hover{background-color:#2196f3}.hv-lightblue:hover,.lightblue{color:#03a9f4}.bg-lightblue,.hv-bg-lightblue:hover{background-color:#03a9f4}.cyan,.hv-cyan:hover{color:#00bcd4}.bg-cyan,.hv-bg-cyan:hover{background-color:#00bcd4}.hv-teal:hover,.teal{color:#009688}.bg-teal,.hv-bg-teal:hover{background-color:#009688}.green,.hv-green:hover{color:#4caf50}.bg-green,.hv-bg-green:hover{background-color:#4caf50}.hv-lightgreen:hover,.lightgreen{color:#8bc34a}.bg-lightgreen,.hv-bg-lightgreen:hover{background-color:#8bc34a}.hv-lime:hover,.lime{color:#cddc39}.bg-lime,.hv-bg-lime:hover{background-color:#cddc39}.hv-yellow:hover,.yellow{color:#ffeb3b}.bg-yellow,.hv-bg-yellow:hover{background-color:#ffeb3b}.amber,.hv-amber:hover{color:#ffc107}.bg-amber,.hv-bg-amber:hover{background-color:#ffc107}.hv-orange:hover,.orange{color:#ff9800}.bg-orange,.hv-bg-orange:hover{background-color:#ff9800}.deeporange,.hv-deeporange:hover{color:#ff5722}.bg-deeporange,.hv-bg-deeporange:hover{background-color:#ff5722}.brown,.hv-brown:hover{color:#795548}.bg-brown,.hv-bg-brown:hover{background-color:#795548}.hv-lightgrey:hover,.lightgrey{color:#ddd}.bg-lightgrey,.hv-bg-lightgrey:hover{background-color:#ddd}.grey,.hv-grey:hover{color:#9e9e9e}.bg-grey,.hv-bg-grey:hover{background-color:#9e9e9e}.darkgrey,.hv-darkgrey:hover{color:#666}.bg-darkgrey,.hv-bg-darkgrey:hover{background-color:#666}.bluegrey,.hv-bluegrey:hover{color:#607d8b}.bg-bluegrey,.hv-bg-bluegrey:hover{background-color:#607d8b}.bd{border:1px solid #000}.bd-no{border:none}.bd-t{border-top:1px solid #000;border-right:none}.bd-r,.bd-t{border-bottom:none;border-left:none}.bd-r{border-top:none;border-right:1px solid #000}.bd-b{border-bottom:1px solid #000;border-left:none}.bd-b,.bd-l{border-top:none;border-right:none}.bd-l{border-bottom:none;border-left:1px solid #000}.bd-sl{border-style:solid}.bd-ds{border-style:dashed}.bd-black,.hv-bd-black:hover{border-color:#000}.bd-white,.hv-bd-white:hover{border-color:#fff}.bd-red,.hv-bd-red:hover{border-color:#f44336}.bd-pink,.hv-bd-pink:hover{border-color:#e91e63}.bd-purple,.hv-bd-purple:hover{border-color:#9c27b0}.bd-deeppurple,.hv-bd-deeppurple:hover{border-color:#673ab7}.bd-indigo,.hv-bd-indigo:hover{border-color:#3f51b5}.bd-blue,.hv-bd-blue:hover{border-color:#2196f3}.bd-lightblue,.hv-bd-lightblue:hover{border-color:#03a9f4}.bd-cyan,.hv-bd-cyan:hover{border-color:#00bcd4}.bd-teal,.hv-bd-teal:hover{border-color:#009688}.bd-green,.hv-bd-green:hover{border-color:#4caf50}.bd-lightgreen,.hv-bd-lightgreen:hover{border-color:#8bc34a}.bd-lime,.hv-bd-lime:hover{border-color:#cddc39}.bd-yellow,.hv-bd-yellow:hover{border-color:#ffeb3b}.bd-amber,.hv-bd-amber:hover{border-color:#ffc107}.bd-orange,.hv-bd-orange:hover{border-color:#ff9800}.bd-deeporange,.hv-bd-deeporange:hover{border-color:#ff5722}.bd-brown,.hv-bd-brown:hover{border-color:#795548}.bd-grey,.hv-bd-grey:hover{border-color:#9e9e9e}.bd-lightgrey,.hv-bd-lightgrey:hover{border-color:#ddd}.bd-darkgrey,.hv-bd-darkgrey:hover{border-color:#666}.bd-bluegrey,.hv-bd-bluegrey:hover{border-color:#607d8b}.b,.hv-b:hover{font-weight:700}.hv-i:hover,.i{font-style:italic}.break{word-wrap:break-word}.hand{cursor:pointer}.move{cursor:move}.text{cursor:text}.wait{cursor:wait}.ol-no{outline:none}.rel{position:relative}.abs{position:absolute}.fix{position:fixed}.t-l{text-align:left}.l{float:left}.t-c{text-align:center}.c{margin:auto}.t-r{text-align:right}.r{float:right}.clear{clear:both}.g-1{width:4.166667%}.g-2{width:8.333333%}.g-3{width:12.5%}.g-4{width:16.666667%}.g-5{width:20.833333%}.g-6{width:25%}.g-7{width:29.166667%}.g-8{width:33.333333%}.g-9{width:37.5%}.g-10{width:41.666667%}.g-11{width:45.833333%}.g-12{width:50%}.g-13{width:54.166667%}.g-14{width:58.333333%}.g-15{width:62.5%}.g-16{width:66.666667%}.g-17{width:70.833333%}.g-18{width:75%}.g-19{width:79.166667%}.g-20{width:83.333333%}.g-21{width:87.5%}.g-22{width:91.666667%}.g-23{width:95.833333%}.g-24{width:100%}.pc-bl,.yaw-pc-bl,yaw-pc-bl{display:block!important}.pc,.yaw-pc,yaw-pc{display:inline-block!important}.pc-in,.yaw-pc-in,yaw-pc-in{display:inline!important}.m,.m-bl,.m-in,.pad,.pad-bl,.pad-in,.yaw-m,.yaw-m-bl,.yaw-m-in,.yaw-pad,.yaw-pad-bl,.yaw-pad-in,yaw-m,yaw-m-bl,yaw-m-in,yaw-pad,yaw-pad-bl,yaw-pad-in{display:none!important}@media screen and (min-width:1180px){.pc-no{display:none!important}.pc-g-1{width:4.166667%}.pc-g-2{width:8.333333%}.pc-g-3{width:12.5%}.pc-g-4{width:16.666667%}.pc-g-5{width:20.833333%}.pc-g-6{width:25%}.pc-g-7{width:29.166667%}.pc-g-8{width:33.333333%}.pc-g-9{width:37.5%}.pc-g-10{width:41.666667%}.pc-g-11{width:45.833333%}.pc-g-12{width:50%}.pc-g-13{width:54.166667%}.pc-g-14{width:58.333333%}.pc-g-15{width:62.5%}.pc-g-16{width:66.666667%}.pc-g-17{width:70.833333%}.pc-g-18{width:75%}.pc-g-19{width:79.166667%}.pc-g-20{width:83.333333%}.pc-g-21{width:87.5%}.pc-g-22{width:91.666667%}.pc-g-23{width:95.833333%}.pc-g-24{width:100%}.pc-t-l{text-align:left}.pc-l{float:left}.pc-t-c{text-align:center}.pc-c{margin:auto}.pc-t-r{text-align:right}.pc-r{float:right}}@media screen and (min-width:640px) and (max-width:1180px){.pc,.pc-bl,.pc-in,.yaw-pc,.yaw-pc-bl,yaw-pc,yaw-pc-bl{display:none!important}.pad-bl,.yaw-pad-bl,yaw-pad-bl{display:block!important}.pad,.pad-in,.yaw-pad,.yaw-pad-in,yaw-pad,yaw-pad-in{display:inline-block!important}.m,.m-bl,.m-in,.pad-no,.yaw-m,.yaw-m-bl,.yaw-m-in,yaw-m,yaw-m-bl,yaw-m-in{display:none!important}.pad-g-1{width:4.166667%}.pad-g-2{width:8.333333%}.pad-g-3{width:12.5%}.pad-g-4{width:16.666667%}.pad-g-5{width:20.833333%}.pad-g-6{width:25%}.pad-g-7{width:29.166667%}.pad-g-8{width:33.333333%}.pad-g-9{width:37.5%}.pad-g-10{width:41.666667%}.pad-g-11{width:45.833333%}.pad-g-12{width:50%}.pad-g-13{width:54.166667%}.pad-g-14{width:58.333333%}.pad-g-15{width:62.5%}.pad-g-16{width:66.666667%}.pad-g-17{width:70.833333%}.pad-g-18{width:75%}.pad-g-19{width:79.166667%}.pad-g-20{width:83.333333%}.pad-g-21{width:87.5%}.pad-g-22{width:91.666667%}.pad-g-23{width:95.833333%}.pad-g-24{width:100%}.pad-t-l{text-align:left}.pad-l{float:left}.pad-t-c{text-align:center}.pad-c{margin:auto}.pad-t-r{text-align:right}.pad-r{float:right}}@media screen and (max-width:640px){.pad,.pad-bl,.pad-in,.pc,.pc-bl,.pc-in,.yaw-pad,.yaw-pad-bl,.yaw-pc,.yaw-pc-bl,yaw-pad,yaw-pad-bl,yaw-pc,yaw-pc-bl{display:none!important}.m-bl,.yaw-m-bl,yaw-m-bl{display:block!important}.m,.yaw-m,yaw-m{display:inline-block!important}.m-in,.yaw-m-in,yaw-m-in{display:inline!important}.m-no{display:none!important}.m-g-1{width:4.166667%}.m-g-2{width:8.333333%}.m-g-3{width:12.5%}.m-g-4{width:16.666667%}.m-g-5{width:20.833333%}.m-g-6{width:25%}.m-g-7{width:29.166667%}.m-g-8{width:33.333333%}.m-g-9{width:37.5%}.m-g-10{width:41.666667%}.m-g-11{width:45.833333%}.m-g-12{width:50%}.m-g-13{width:54.166667%}.m-g-14{width:58.333333%}.m-g-15{width:62.5%}.m-g-16{width:66.666667%}.m-g-17{width:70.833333%}.m-g-18{width:75%}.m-g-19{width:79.166667%}.m-g-20{width:83.333333%}.m-g-21{width:87.5%}.m-g-22{width:91.666667%}.m-g-23{width:95.833333%}.m-g-24{width:100%}.m-t-l{text-align:left}.m-l{float:left}.m-t-c{text-align:center}.m-c{margin:auto}.m-t-r{text-align:right}.m-r{float:right}}.no{display:none}.in,.yaw-in,yaw-in{display:inline}.bl,.yaw-bl,yaw-bl{display:block}.in-bl,.yaw,yaw{display:inline-block}.va-t{vertical-align:top}.va-c{vertical-align:middle}.va-b{vertical-align:bottom}.el-hide,.hide{overflow:hidden}.el-hide{text-overflow:ellipsis;white-space:nowrap}.box-sd,.hv-box-sd:hover{box-shadow:0 0 8px #999}.op-0{opacity:0}.op-1{opacity:.1}.op-2{opacity:.2}.op-3{opacity:.3}.op-4{opacity:.4}.op-5{opacity:.5}.op-6{opacity:.6}.op-7{opacity:.7}.op-8{opacity:.8}.op-9{opacity:.9}.op-10{opacity:1}", ""])
}, function(t, a) {
	function e(t, a) {
		var e = t[1] || "",
			o = t[3];
		if (!o) return e;
		if (a && "function" == typeof btoa) {
			var i = r(o);
			return [e].concat(o.sources.map(function(t) {
				return "/*# sourceURL=" + o.sourceRoot + t + " */"
			})).concat([i]).join("\n")
		}
		return [e].join("\n")
	}
	function r(t) {
		return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
	}
	t.exports = function(t) {
		var a = [];
		return a.toString = function() {
			return this.map(function(a) {
				var r = e(a, t);
				return a[2] ? "@media " + a[2] + "{" + r + "}" : r
			}).join("")
		}, a.i = function(t, e) {
			"string" == typeof t && (t = [
				[null, t, ""]
			]);
			for (var r = {}, o = 0; o < this.length; o++) {
				var i = this[o][0];
				"number" == typeof i && (r[i] = !0)
			}
			for (o = 0; o < t.length; o++) {
				var d = t[o];
				"number" == typeof d[0] && r[d[0]] || (e && !d[2] ? d[2] = e : e && (d[2] = "(" + d[2] + ") and (" + e + ")"), a.push(d))
			}
		}, a
	}
}, function(t, a, e) {
	function r(t, a) {
		for (var e = 0; e < t.length; e++) {
			var r = t[e],
				o = g[r.id];
			if (o) {
				o.refs++;
				for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
				for (; i < r.parts.length; i++) o.parts.push(p(r.parts[i], a))
			} else {
				for (var d = [], i = 0; i < r.parts.length; i++) d.push(p(r.parts[i], a));
				g[r.id] = {
					id: r.id,
					refs: 1,
					parts: d
				}
			}
		}
	}
	function o(t, a) {
		for (var e = [], r = {}, o = 0; o < t.length; o++) {
			var i = t[o],
				d = a.base ? i[0] + a.base : i[0],
				n = i[1],
				h = i[2],
				l = i[3],
				p = {
					css: n,
					media: h,
					sourceMap: l
				};
			r[d] ? r[d].parts.push(p) : e.push(r[d] = {
				id: d,
				parts: [p]
			})
		}
		return e
	}
	function i(t, a) {
		var e = f(t.insertInto);
		if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		var r = v[v.length - 1];
		if ("top" === t.insertAt) r ? r.nextSibling ? e.insertBefore(a, r.nextSibling) : e.appendChild(a) : e.insertBefore(a, e.firstChild), v.push(a);
		else if ("bottom" === t.insertAt) e.appendChild(a);
		else {
			if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
			var o = f(t.insertInto + " " + t.insertAt.before);
			e.insertBefore(a, o)
		}
	}
	function d(t) {
		if (null === t.parentNode) return !1;
		t.parentNode.removeChild(t);
		var a = v.indexOf(t);
		a >= 0 && v.splice(a, 1)
	}
	function n(t) {
		var a = document.createElement("style");
		return t.attrs.type = "text/css", l(a, t.attrs), i(t, a), a
	}
	function h(t) {
		var a = document.createElement("link");
		return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(a, t.attrs), i(t, a), a
	}
	function l(t, a) {
		Object.keys(a).forEach(function(e) {
			t.setAttribute(e, a[e])
		})
	}
	function p(t, a) {
		var e, r, o, i;
		if (a.transform && t.css) {
			if (!(i = a.transform(t.css))) return function() {};
			t.css = i
		}
		if (a.singleton) {
			var l = m++;
			e = u || (u = n(a)), r = c.bind(null, e, l, !1), o = c.bind(null, e, l, !0)
		} else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = h(a), r = s.bind(null, e, a), o = function() {
			d(e), e.href && URL.revokeObjectURL(e.href)
		}) : (e = n(a), r = b.bind(null, e), o = function() {
			d(e)
		});
		return r(t), function(a) {
			if (a) {
				if (a.css === t.css && a.media === t.media && a.sourceMap === t.sourceMap) return;
				r(t = a)
			} else o()
		}
	}
	function c(t, a, e, r) {
		var o = e ? "" : r.css;
		if (t.styleSheet) t.styleSheet.cssText = $(a, o);
		else {
			var i = document.createTextNode(o),
				d = t.childNodes;
			d[a] && t.removeChild(d[a]), d.length ? t.insertBefore(i, d[a]) : t.appendChild(i)
		}
	}
	function b(t, a) {
		var e = a.css,
			r = a.media;
		if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = e;
		else {
			for (; t.firstChild;) t.removeChild(t.firstChild);
			t.appendChild(document.createTextNode(e))
		}
	}
	function s(t, a, e) {
		var r = e.css,
			o = e.sourceMap,
			i = void 0 === a.convertToAbsoluteUrls && o;
		(a.convertToAbsoluteUrls || i) && (r = y(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
		var d = new Blob([r], {
			type: "text/css"
		}),
			n = t.href;
		t.href = URL.createObjectURL(d), n && URL.revokeObjectURL(n)
	}
	var g = {},
		w = function(t) {
			var a;
			return function() {
				return void 0 === a && (a = t.apply(this, arguments)), a
			}
		}(function() {
			return window && document && document.all && !window.atob
		}),
		f = function(t) {
			var a = {};
			return function(e) {
				if (void 0 === a[e]) {
					var r = t.call(this, e);
					if (r instanceof window.HTMLIFrameElement) try {
						r = r.contentDocument.head
					} catch (t) {
						r = null
					}
					a[e] = r
				}
				return a[e]
			}
		}(function(t) {
			return document.querySelector(t)
		}),
		u = null,
		m = 0,
		v = [],
		y = e(5);
	t.exports = function(t, a) {
		if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
		a = a || {}, a.attrs = "object" == typeof a.attrs ? a.attrs : {}, a.singleton || "boolean" == typeof a.singleton || (a.singleton = w()), a.insertInto || (a.insertInto = "head"), a.insertAt || (a.insertAt = "bottom");
		var e = o(t, a);
		return r(e, a), function(t) {
			for (var i = [], d = 0; d < e.length; d++) {
				var n = e[d],
					h = g[n.id];
				h.refs--, i.push(h)
			}
			if (t) {
				r(o(t, a), a)
			}
			for (var d = 0; d < i.length; d++) {
				var h = i[d];
				if (0 === h.refs) {
					for (var l = 0; l < h.parts.length; l++) h.parts[l]();
					delete g[h.id]
				}
			}
		}
	};
	var $ = function() {
			var t = [];
			return function(a, e) {
				return t[a] = e, t.filter(Boolean).join("\n")
			}
		}()
}, function(t, a) {
	t.exports = function(t) {
		var a = "undefined" != typeof window && window.location;
		if (!a) throw new Error("fixUrls requires window.location");
		if (!t || "string" != typeof t) return t;
		var e = a.protocol + "//" + a.host,
			r = e + a.pathname.replace(/\/[^\/]*$/, "/");
		return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, a) {
			var o = a.trim().replace(/^"(.*)"$/, function(t, a) {
				return a
			}).replace(/^'(.*)'$/, function(t, a) {
				return a
			});
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return t;
			var i;
			return i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? e + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
		})
	}
}, function(t, a) {
	!
	function(t) {
		t.fn.yawrap = function(t, a, e, r, o, i, d, n, h, l, p, c, b, s, g, w, f, u, m, v, y, $, k, x, R, U, j, L, O, S) {
			return this.css({
				width: t,
				height: a,
				maxWidth: e,
				maxHeight: r,
				lineHeight: o,
				fontSize: i,
				color: d,
				background: n,
				top: h,
				right: l,
				bottom: p,
				left: c,
				margin: b,
				marginTop: s,
				marginRight: g,
				marginBottom: w,
				marginLeft: f,
				padding: u,
				paddingTop: m,
				paddingRight: v,
				paddingBottom: y,
				paddingLeft: $,
				border: k,
				borderTop: x,
				borderRight: R,
				borderBottom: U,
				borderLeft: j,
				borderRadius: L,
				zIndex: O,
				letterSpacing: S
			}), this
		}
	}(jQuery), window.console && window.console.log && console.log("%c Yawrap v1.0.0 By YawZhou http://yawrap.yawzhou.com ", "background:#2196f3;color:#fff;padding:2px;border-radius:20px;"), $(function() {
		$(".yaw,.yaw-in,.yaw-bl,yaw,yaw-in,yaw-bl,.yaw-pc,.yaw-pc-in,.yaw-pc-bl,yaw-pc,yaw-pc-in,yaw-pc-bl,.yaw-pad,.yaw-pad-in,.yaw-pad-bl,yaw-pad,yaw-pad-in,yaw-pad-bl,.yaw-m,.yaw-m-in,.yaw-m-bl,yaw-m,yaw-m-in,yaw-m-bl").each(function() {
			$(this).yawrap($(this).data("w"), $(this).data("h"), $(this).data("mw"), $(this).data("mh"), $(this).data("lh"), $(this).data("fs"), $(this).data("cl"), $(this).data("bg"), $(this).data("t"), $(this).data("r"), $(this).data("b"), $(this).data("l"), $(this).data("mg"), $(this).data("mgt"), $(this).data("mgr"), $(this).data("mgb"), $(this).data("mgl"), $(this).data("pd"), $(this).data("pdt"), $(this).data("pdr"), $(this).data("pdb"), $(this).data("pdl"), $(this).data("bd"), $(this).data("bdt"), $(this).data("bdr"), $(this).data("bdb"), $(this).data("bdl"), $(this).data("ra"), $(this).data("zi"), $(this).data("space")), $(window).width() > 1180 ? $(this).yawrap($(this).data("pc-w"), $(this).data("pc-h"), $(this).data("pc-mw"), $(this).data("pc-mh"), $(this).data("pc-lh"), $(this).data("pc-fs"), $(this).data("pc-cl"), $(this).data("pc-bg"), $(this).data("pc-t"), $(this).data("pc-r"), $(this).data("pc-b"), $(this).data("pc-l"), $(this).data("pc-mg"), $(this).data("pc-mgt"), $(this).data("pc-mgr"), $(this).data("pc-mgb"), $(this).data("pc-mgl"), $(this).data("pc-pd"), $(this).data("pc-pdt"), $(this).data("pc-pdr"), $(this).data("pc-pdb"), $(this).data("pc-pdl"), $(this).data("pc-bd"), $(this).data("pc-bdt"), $(this).data("pc-bdr"), $(this).data("pc-bdb"), $(this).data("pc-bdl"), $(this).data("pc-ra"), $(this).data("pc-zi"), $(this).data("pc-space")) : $(window).width() > 640 && $(window).width() < 1180 ? $(this).yawrap($(this).data("pad-w"), $(this).data("pad-h"), $(this).data("pad-mw"), $(this).data("pad-mh"), $(this).data("pad-lh"), $(this).data("pad-fs"), $(this).data("pad-cl"), $(this).data("pad-bg"), $(this).data("pad-t"), $(this).data("pad-r"), $(this).data("pad-b"), $(this).data("pad-l"), $(this).data("pad-mg"), $(this).data("pad-mgt"), $(this).data("pad-mgr"), $(this).data("pad-mgb"), $(this).data("pad-mgl"), $(this).data("pad-pd"), $(this).data("pad-pdt"), $(this).data("pad-pdr"), $(this).data("pad-pdb"), $(this).data("pad-pdl"), $(this).data("pad-bd"), $(this).data("pad-bdt"), $(this).data("pad-bdr"), $(this).data("pad-bdb"), $(this).data("pad-bdl"), $(this).data("pad-ra"), $(this).data("pad-zi"), $(this).data("pad-space")) : $(window).width() < 640 && $(this).yawrap($(this).data("m-w"), $(this).data("m-h"), $(this).data("m-mw"), $(this).data("m-mh"), $(this).data("m-lh"), $(this).data("m-fs"), $(this).data("m-cl"), $(this).data("m-bg"), $(this).data("m-t"), $(this).data("m-r"), $(this).data("m-b"), $(this).data("m-l"), $(this).data("m-mg"), $(this).data("m-mgt"), $(this).data("m-mgr"), $(this).data("m-mgb"), $(this).data("m-mgl"), $(this).data("m-pd"), $(this).data("m-pdt"), $(this).data("m-pdr"), $(this).data("m-pdb"), $(this).data("m-pdl"), $(this).data("m-bd"), $(this).data("m-bdt"), $(this).data("m-bdr"), $(this).data("m-bdb"), $(this).data("m-bdl"), $(this).data("m-ra"), $(this).data("m-zi"), $(this).data("m-space"))
		})
	})
}]);