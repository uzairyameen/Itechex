/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).PerfectScrollbar = e()
}(this, function() {
    "use strict";

    function t(t) {
        return getComputedStyle(t)
    }

    function e(t, e) {
        for (var i in e) {
            var l = e[i];
            "number" == typeof l && (l += "px"), t.style[i] = l
        }
        return t
    }

    function i(t) {
        var e = document.createElement("div");
        return e.className = t, e
    }
    var l = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

    function r(t, e) {
        if (!l) throw Error("No element matching method supported");
        return l.call(t, e)
    }

    function n(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }

    function o(t, e) {
        return Array.prototype.filter.call(t.children, function(t) {
            return r(t, e)
        })
    }
    var s = {
            main: "ps",
            rtl: "ps__rtl",
            element: {
                thumb: function(t) {
                    return "ps__thumb-" + t
                },
                rail: function(t) {
                    return "ps__rail-" + t
                },
                consuming: "ps__child--consume"
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function(t) {
                    return "ps--active-" + t
                },
                scrolling: function(t) {
                    return "ps--scrolling-" + t
                }
            }
        },
        a = {
            x: null,
            y: null
        };

    function c(t, e) {
        var i = t.element.classList,
            l = s.state.scrolling(e);
        i.contains(l) ? clearTimeout(a[e]) : i.add(l)
    }

    function h(t, e) {
        a[e] = setTimeout(function() {
            return t.isAlive && t.element.classList.remove(s.state.scrolling(e))
        }, t.settings.scrollingThreshold)
    }
    var u = function t(e) {
            this.element = e, this.handlers = {}
        },
        d = {
            isEmpty: {
                configurable: !0
            }
        };
    u.prototype.bind = function t(e, i) {
        void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(i), this.element.addEventListener(e, i, !1)
    }, u.prototype.unbind = function t(e, i) {
        var l = this;
        this.handlers[e] = this.handlers[e].filter(function(t) {
            return !!i && t !== i || (l.element.removeEventListener(e, t, !1), !1)
        })
    }, u.prototype.unbindAll = function t() {
        for (var e in this.handlers) this.unbind(e)
    }, d.isEmpty.get = function() {
        var t = this;
        return Object.keys(this.handlers).every(function(e) {
            return 0 === t.handlers[e].length
        })
    }, Object.defineProperties(u.prototype, d);
    var f = function t() {
        this.eventElements = []
    };

    function p(t) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e
    }

    function b(t, e, i, l, r) {
        var n, o, s, a, u, d, f, b, g, v, m, $, Y, X, y;
        if (void 0 === l && (l = !0), void 0 === r && (r = !1), "top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else if ("left" === e) n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
        else throw Error("A proper axis should be provided");
        o = t, s = i, a = n, u = l, d = r, g = a[0], v = a[1], m = a[2], $ = a[3], Y = a[4], X = a[5], void 0 === u && (u = !0), void 0 === d && (d = !1), y = o.element, o.reach[$] = null, y[m] < 1 && (o.reach[$] = "start"), y[m] > o[g] - o[v] - 1 && (o.reach[$] = "end"), s && (y.dispatchEvent(p("ps-scroll-" + $)), s < 0 ? y.dispatchEvent(p("ps-scroll-" + Y)) : s > 0 && y.dispatchEvent(p("ps-scroll-" + X)), u) && (f = o, c(f, b = $), h(f, b)), o.reach[$] && (s || d) && y.dispatchEvent(p("ps-" + $ + "-reach-" + o.reach[$]))
    }

    function g(t) {
        return parseInt(t, 10) || 0
    }
    f.prototype.eventElement = function t(e) {
        var i = this.eventElements.filter(function(t) {
            return t.element === e
        })[0];
        return i || (i = new u(e), this.eventElements.push(i)), i
    }, f.prototype.bind = function t(e, i, l) {
        this.eventElement(e).bind(i, l)
    }, f.prototype.unbind = function t(e, i, l) {
        var r = this.eventElement(e);
        r.unbind(i, l), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1)
    }, f.prototype.unbindAll = function t() {
        this.eventElements.forEach(function(t) {
            return t.unbindAll()
        }), this.eventElements = []
    }, f.prototype.once = function t(e, i, l) {
        var r = this.eventElement(e),
            n = function(t) {
                r.unbind(i, n), l(t)
            };
        r.bind(i, n)
    };
    var v = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    };

    function m(t) {
        var i, l, r, a, c, h = t.element,
            u = Math.floor(h.scrollTop),
            d = h.getBoundingClientRect();
        t.containerWidth = Math.round(d.width), t.containerHeight = Math.round(d.height), t.contentWidth = h.scrollWidth, t.contentHeight = h.scrollHeight, h.contains(t.scrollbarXRail) || (o(h, s.element.rail("x")).forEach(function(t) {
            return n(t)
        }), h.appendChild(t.scrollbarXRail)), h.contains(t.scrollbarYRail) || (o(h, s.element.rail("y")).forEach(function(t) {
            return n(t)
        }), h.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = $(t, g(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = g((t.negativeScrollAdjustment + h.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = $(t, g(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = g(u * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), i = h, r = {
            width: (l = t).railXWidth
        }, a = Math.floor(i.scrollTop), l.isRtl ? r.left = l.negativeScrollAdjustment + i.scrollLeft + l.containerWidth - l.contentWidth : r.left = i.scrollLeft, l.isScrollbarXUsingBottom ? r.bottom = l.scrollbarXBottom - a : r.top = l.scrollbarXTop + a, e(l.scrollbarXRail, r), c = {
            top: a,
            height: l.railYHeight
        }, l.isScrollbarYUsingRight ? l.isRtl ? c.right = l.contentWidth - (l.negativeScrollAdjustment + i.scrollLeft) - l.scrollbarYRight - l.scrollbarYOuterWidth - 9 : c.right = l.scrollbarYRight - i.scrollLeft : l.isRtl ? c.left = l.negativeScrollAdjustment + i.scrollLeft + 2 * l.containerWidth - l.contentWidth - l.scrollbarYLeft - l.scrollbarYOuterWidth : c.left = l.scrollbarYLeft + i.scrollLeft, e(l.scrollbarYRail, c), e(l.scrollbarX, {
            left: l.scrollbarXLeft,
            width: l.scrollbarXWidth - l.railBorderXWidth
        }), e(l.scrollbarY, {
            top: l.scrollbarYTop,
            height: l.scrollbarYHeight - l.railBorderYWidth
        }), t.scrollbarXActive ? h.classList.add(s.state.active("x")) : (h.classList.remove(s.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, h.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0), t.scrollbarYActive ? h.classList.add(s.state.active("y")) : (h.classList.remove(s.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, h.scrollTop = 0)
    }

    function $(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
    }

    function Y(t, e) {
        var i = e[0],
            l = e[1],
            r = e[2],
            n = e[3],
            o = e[4],
            a = e[5],
            u = e[6],
            d = e[7],
            f = e[8],
            p = t.element,
            b = null,
            g = null,
            v = null;

        function $(e) {
            e.touches && e.touches[0] && (e[r] = e.touches[0].pageY), p[u] = b + v * (e[r] - g), c(t, d), m(t), e.stopPropagation(), e.type.startsWith("touch") && e.changedTouches.length > 1 && e.preventDefault()
        }

        function Y() {
            h(t, d), t[f].classList.remove(s.state.clicking), t.event.unbind(t.ownerDocument, "mousemove", $)
        }

        function X(e, o) {
            b = p[u], o && e.touches && (e[r] = e.touches[0].pageY), g = e[r], v = (t[l] - t[i]) / (t[n] - t[a]), o ? t.event.bind(t.ownerDocument, "touchmove", $) : (t.event.bind(t.ownerDocument, "mousemove", $), t.event.once(t.ownerDocument, "mouseup", Y), e.preventDefault()), t[f].classList.add(s.state.clicking), e.stopPropagation()
        }
        t.event.bind(t[o], "mousedown", function(t) {
            X(t)
        }), t.event.bind(t[o], "touchstart", function(t) {
            X(t, !0)
        })
    }
    var X = {
            "click-rail": function t(e) {
                e.element, e.event.bind(e.scrollbarY, "mousedown", function(t) {
                    return t.stopPropagation()
                }), e.event.bind(e.scrollbarYRail, "mousedown", function(t) {
                    var i = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                    e.element.scrollTop += i * e.containerHeight, m(e), t.stopPropagation()
                }), e.event.bind(e.scrollbarX, "mousedown", function(t) {
                    return t.stopPropagation()
                }), e.event.bind(e.scrollbarXRail, "mousedown", function(t) {
                    var i = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                    e.element.scrollLeft += i * e.containerWidth, m(e), t.stopPropagation()
                })
            },
            "drag-thumb": function t(e) {
                Y(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), Y(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            },
            keyboard: function t(e) {
                var i = e.element;
                e.event.bind(e.ownerDocument, "keydown", function(t) {
                    if (!(t.isDefaultPrevented && t.isDefaultPrevented()) && !t.defaultPrevented && (r(i, ":hover") || r(e.scrollbarX, ":focus") || r(e.scrollbarY, ":focus"))) {
                        var l, n = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (n) {
                            if ("IFRAME" === n.tagName) n = n.contentDocument.activeElement;
                            else
                                for (; n.shadowRoot;) n = n.shadowRoot.activeElement;
                            if (r(l = n, "input,[contenteditable]") || r(l, "select,[contenteditable]") || r(l, "textarea,[contenteditable]") || r(l, "button,[contenteditable]")) return
                        }
                        var o = 0,
                            s = 0;
                        switch (t.which) {
                            case 37:
                                o = t.metaKey ? -e.contentWidth : t.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                s = t.metaKey ? e.contentHeight : t.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                o = t.metaKey ? e.contentWidth : t.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                s = t.metaKey ? -e.contentHeight : t.altKey ? -e.containerHeight : -30;
                                break;
                            case 32:
                                s = t.shiftKey ? e.containerHeight : -e.containerHeight;
                                break;
                            case 33:
                                s = e.containerHeight;
                                break;
                            case 34:
                                s = -e.containerHeight;
                                break;
                            case 36:
                                s = e.contentHeight;
                                break;
                            case 35:
                                s = -e.contentHeight;
                                break;
                            default:
                                return
                        }(!e.settings.suppressScrollX || 0 === o) && (!e.settings.suppressScrollY || 0 === s) && (i.scrollTop -= s, i.scrollLeft += o, m(e), function t(l, r) {
                            var n = Math.floor(i.scrollTop);
                            if (0 === l) {
                                if (!e.scrollbarYActive) return !1;
                                if (0 === n && r > 0 || n >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
                            }
                            var o = i.scrollLeft;
                            if (0 === r) {
                                if (!e.scrollbarXActive) return !1;
                                if (0 === o && l < 0 || o >= e.contentWidth - e.containerWidth && l > 0) return !e.settings.wheelPropagation
                            }
                            return !0
                        }(o, s) && t.preventDefault())
                    }
                })
            },
            wheel: function e(i) {
                var l = i.element;

                function r(e) {
                    var r, n, o, a = (n = (r = e).deltaX, o = -1 * r.deltaY, ((void 0 === n || void 0 === o) && (n = -1 * r.wheelDeltaX / 6, o = r.wheelDeltaY / 6), r.deltaMode && 1 === r.deltaMode && (n *= 10, o *= 10), n != n && o != o && (n = 0, o = r.wheelDelta), r.shiftKey) ? [-o, -n] : [n, o]),
                        c = a[0],
                        h = a[1];
                    if (! function e(i, r, n) {
                            if (!v.isWebKit && l.querySelector("select:focus")) return !0;
                            if (!l.contains(i)) return !1;
                            for (var o = i; o && o !== l;) {
                                if (o.classList.contains(s.element.consuming)) return !0;
                                var a = t(o);
                                if (n && a.overflowY.match(/(scroll|auto)/)) {
                                    var c = o.scrollHeight - o.clientHeight;
                                    if (c > 0 && (o.scrollTop > 0 && n < 0 || o.scrollTop < c && n > 0)) return !0
                                }
                                if (r && a.overflowX.match(/(scroll|auto)/)) {
                                    var h = o.scrollWidth - o.clientWidth;
                                    if (h > 0 && (o.scrollLeft > 0 && r < 0 || o.scrollLeft < h && r > 0)) return !0
                                }
                                o = o.parentNode
                            }
                            return !1
                        }(e.target, c, h)) {
                        var u, d, f, p, b, g, $, Y, X = !1;
                        i.settings.useBothWheelAxes ? i.scrollbarYActive && !i.scrollbarXActive ? (h ? l.scrollTop -= h * i.settings.wheelSpeed : l.scrollTop += c * i.settings.wheelSpeed, X = !0) : i.scrollbarXActive && !i.scrollbarYActive && (c ? l.scrollLeft += c * i.settings.wheelSpeed : l.scrollLeft -= h * i.settings.wheelSpeed, X = !0) : (l.scrollTop -= h * i.settings.wheelSpeed, l.scrollLeft += c * i.settings.wheelSpeed), m(i), (X = X || (u = c, d = h, p = Math.floor(l.scrollTop), b = 0 === l.scrollTop, g = p + l.offsetHeight === l.scrollHeight, $ = 0 === l.scrollLeft, Y = l.scrollLeft + l.offsetWidth === l.scrollWidth, !(f = Math.abs(d) > Math.abs(u) ? b || g : $ || Y) || !i.settings.wheelPropagation)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault())
                    }
                }
                void 0 !== window.onwheel ? i.event.bind(l, "wheel", r) : void 0 !== window.onmousewheel && i.event.bind(l, "mousewheel", r)
            },
            touch: function e(i) {
                if (v.supportsTouch || v.supportsIePointer) {
                    var l = i.element,
                        r = {},
                        n = 0,
                        o = {},
                        a = null;
                    v.supportsTouch ? (i.event.bind(l, "touchstart", d), i.event.bind(l, "touchmove", f), i.event.bind(l, "touchend", p)) : v.supportsIePointer && (window.PointerEvent ? (i.event.bind(l, "pointerdown", d), i.event.bind(l, "pointermove", f), i.event.bind(l, "pointerup", p)) : window.MSPointerEvent && (i.event.bind(l, "MSPointerDown", d), i.event.bind(l, "MSPointerMove", f), i.event.bind(l, "MSPointerUp", p)))
                }

                function c(t, e) {
                    l.scrollTop -= e, l.scrollLeft -= t, m(i)
                }

                function h(t) {
                    return t.targetTouches ? t.targetTouches[0] : t
                }

                function u(t) {
                    return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (!!t.targetTouches && 1 === t.targetTouches.length || !!t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE)
                }

                function d(t) {
                    if (u(t)) {
                        var e = h(t);
                        r.pageX = e.pageX, r.pageY = e.pageY, n = new Date().getTime(), null !== a && clearInterval(a)
                    }
                }

                function f(e) {
                    if (u(e)) {
                        var a = h(e),
                            d = {
                                pageX: a.pageX,
                                pageY: a.pageY
                            },
                            f = d.pageX - r.pageX,
                            p = d.pageY - r.pageY;
                        if (! function e(i, r, n) {
                                if (!l.contains(i)) return !1;
                                for (var o = i; o && o !== l;) {
                                    if (o.classList.contains(s.element.consuming)) return !0;
                                    var a = t(o);
                                    if (n && a.overflowY.match(/(scroll|auto)/)) {
                                        var c = o.scrollHeight - o.clientHeight;
                                        if (c > 0 && (o.scrollTop > 0 && n < 0 || o.scrollTop < c && n > 0)) return !0
                                    }
                                    if (r && a.overflowX.match(/(scroll|auto)/)) {
                                        var h = o.scrollWidth - o.clientWidth;
                                        if (h > 0 && (o.scrollLeft > 0 && r < 0 || o.scrollLeft < h && r > 0)) return !0
                                    }
                                    o = o.parentNode
                                }
                                return !1
                            }(e.target, f, p)) {
                            c(f, p), r = d;
                            var b = new Date().getTime(),
                                g = b - n;
                            g > 0 && (o.x = f / g, o.y = p / g, n = b),
                                function t(e, r) {
                                    var n = Math.floor(l.scrollTop),
                                        o = l.scrollLeft,
                                        s = Math.abs(e),
                                        a = Math.abs(r);
                                    if (a > s) {
                                        if (r < 0 && n === i.contentHeight - i.containerHeight || r > 0 && 0 === n) return 0 === window.scrollY && r > 0 && v.isChrome
                                    } else s > a && e < 0 && i.contentWidth - i.containerWidth;
                                    return !0
                                }(f, p) && e.preventDefault()
                        }
                    }
                }

                function p() {
                    i.settings.swipeEasing && (clearInterval(a), a = setInterval(function() {
                        if (i.isInitialized || !o.x && !o.y || .01 > Math.abs(o.x) && .01 > Math.abs(o.y) || !i.element) {
                            clearInterval(a);
                            return
                        }
                        c(30 * o.x, 30 * o.y), o.x *= .8, o.y *= .8
                    }, 10))
                }
            }
        },
        y = function l(r, n) {
            var o = this;
            if (void 0 === n && (n = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw Error("no element is specified to initialize PerfectScrollbar");
            for (var a in this.element = r, r.classList.add(s.main), this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1
                }, n) this.settings[a] = n[a];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
            var c, h, u = function() {
                    return r.classList.add(s.state.focus)
                },
                d = function() {
                    return r.classList.remove(s.state.focus)
                };
            this.isRtl = "rtl" === t(r).direction, !0 === this.isRtl && r.classList.add(s.rtl), this.isNegativeScroll = (c = r.scrollLeft, h = null, r.scrollLeft = -1, h = r.scrollLeft < 0, r.scrollLeft = c, h), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new f, this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i(s.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i(s.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", u), this.event.bind(this.scrollbarX, "blur", d), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
            var p = t(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(p.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = g(p.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = g(p.borderLeftWidth) + g(p.borderRightWidth), e(this.scrollbarXRail, {
                display: "block"
            }), this.railXMarginWidth = g(p.marginLeft) + g(p.marginRight), e(this.scrollbarXRail, {
                display: ""
            }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(s.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i(s.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", u), this.event.bind(this.scrollbarY, "blur", d), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var b, v, $ = t(this.scrollbarYRail);
            this.scrollbarYRight = parseInt($.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = g($.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? (v = t(b = this.scrollbarY), g(v.width) + g(v.paddingLeft) + g(v.paddingRight) + g(v.borderLeftWidth) + g(v.borderRightWidth)) : null, this.railBorderYWidth = g($.borderTopWidth) + g($.borderBottomWidth), e(this.scrollbarYRail, {
                display: "block"
            }), this.railYMarginHeight = g($.marginTop) + g($.marginBottom), e(this.scrollbarYRail, {
                display: ""
            }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach(function(t) {
                return X[t](o)
            }), this.lastScrollTop = Math.floor(r.scrollTop), this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function(t) {
                return o.onScroll(t)
            }), m(this)
        };
    return y.prototype.update = function i() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
            display: "block"
        }), e(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = g(t(this.scrollbarXRail).marginLeft) + g(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = g(t(this.scrollbarYRail).marginTop) + g(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
            display: "none"
        }), e(this.scrollbarYRail, {
            display: "none"
        }), m(this), b(this, "top", 0, !1, !0), b(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
            display: ""
        }), e(this.scrollbarYRail, {
            display: ""
        }))
    }, y.prototype.onScroll = function t(e) {
        this.isAlive && (m(this), b(this, "top", this.element.scrollTop - this.lastScrollTop), b(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, y.prototype.destroy = function t() {
        this.isAlive && (this.event.unbindAll(), n(this.scrollbarX), n(this.scrollbarY), n(this.scrollbarXRail), n(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, y.prototype.removePsClasses = function t() {
        this.element.className = this.element.className.split(" ").filter(function(t) {
            return !t.match(/^ps([-_].+|)$/)
        }).join(" ")
    }, y
});