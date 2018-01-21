!function(d, e) {
    function a(c) {
        if (c) {
            c = c.alias;
            for (var a in c)
                (function(b) {
                        b.src && (b.deps && define(b.src, b.deps),
                            define(a, [d.resolve(b.src)], function() {
                                var a = b.exports;
                                return "function" == typeof a ? a() : "string" == typeof a ? e[a] : a
                            }))
                    }
                )(c[a])
        }
    }
    d.on("config", a),
        a(d.config.data)
}(seajs, "undefined" == typeof global ? this : global),
    function(e) {
        var f = /\W/g
            , c = document
            , g = document.getElementsByTagName("head")[0] || document.documentElement;
        e.importStyle = function(d, a) {
            if (!a || (a = a.replace(f, "-"),
                    !c.getElementById(a))) {
                var b = c.createElement("style");
                if (a && (b.id = a),
                        g.appendChild(b),
                        b.styleSheet) {
                    if (31 < c.getElementsByTagName("style").length)
                        throw Error("Exceed the maximal count of style tags in IE");
                    b.styleSheet.cssText = d
                } else
                    b.appendChild(c.createTextNode(d))
            }
        }
    }(seajs),
    !function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
                    if (!a.document)
                        throw new Error("jQuery requires a window with a document");
                    return b(a)
                }
            : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function s(a) {
            var b = "length"in a && a.length
                , c = n.type(a);
            return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        function x(a, b, c) {
            if (n.isFunction(b))
                return n.grep(a, function(a, d) {
                    return !!b.call(a, d, a) !== c
                });
            if (b.nodeType)
                return n.grep(a, function(a) {
                    return a === b !== c
                });
            if ("string" == typeof b) {
                if (w.test(b))
                    return n.filter(b, a, c);
                b = n.filter(b, a)
            }
            return n.grep(a, function(a) {
                return g.call(b, a) >= 0 !== c
            })
        }
        function D(a, b) {
            for (; (a = a[b]) && 1 !== a.nodeType; )
                ;
            return a
        }
        function G(a) {
            var b = F[a] = {};
            return n.each(a.match(E) || [], function(a, c) {
                b[c] = !0
            }),
                b
        }
        function I() {
            l.removeEventListener("DOMContentLoaded", I, !1),
                a.removeEventListener("load", I, !1),
                n.ready()
        }
        function K() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }),
                this.expando = n.expando + K.uid++
        }
        function P(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(O, "-$1").toLowerCase(),
                        c = a.getAttribute(d),
                    "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                    } catch (e) {}
                    M.set(a, b, c)
                } else
                    c = void 0;
            return c
        }
        function Z() {
            return !0
        }
        function $() {
            return !1
        }
        function _() {
            try {
                return l.activeElement
            } catch (a) {}
        }
        function ja(a, b) {
            return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }
        function ka(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
                a
        }
        function la(a) {
            var b = ga.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"),
                a
        }
        function ma(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
        }
        function na(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (L.hasData(a) && (f = L.access(a),
                        g = L.set(b, f),
                        j = f.events)) {
                    delete g.handle,
                        g.events = {};
                    for (e in j)
                        for (c = 0,
                                 d = j[e].length; d > c; c++)
                            n.event.add(b, e, j[e][c])
                }
                M.hasData(a) && (h = M.access(a),
                    i = n.extend({}, h),
                    M.set(b, i))
            }
        }
        function oa(a, b) {
            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
        }
        function pa(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
        function sa(b, c) {
            var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
            return e.detach(),
                f
        }
        function ta(a) {
            var b = l
                , c = ra[a];
            return c || (c = sa(a, b),
            "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
                b = qa[0].contentDocument,
                b.write(),
                b.close(),
                c = sa(a, b),
                qa.detach()),
                ra[a] = c),
                c
        }
        function xa(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || wa(a),
            c && (g = c.getPropertyValue(b) || c[b]),
            c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
            va.test(g) && ua.test(b) && (d = h.width,
                e = h.minWidth,
                f = h.maxWidth,
                h.minWidth = h.maxWidth = h.width = g,
                g = c.width,
                h.width = d,
                h.minWidth = e,
                h.maxWidth = f)),
                void 0 !== g ? g + "" : g
        }
        function ya(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        function Fa(a, b) {
            if (b in a)
                return b;
            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length; e--; )
                if (b = Ea[e] + c,
                    b in a)
                    return b;
            return d
        }
        function Ga(a, b, c) {
            var d = Aa.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }
        function Ha(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
                "margin" === c && (g += n.css(a, c + R[f], !0, e)),
                    d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
                        "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e),
                        "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
            return g
        }
        function Ia(a, b, c) {
            var d = !0
                , e = "width" === b ? a.offsetWidth : a.offsetHeight
                , f = wa(a)
                , g = "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = xa(a, b, f),
                    (0 > e || null == e) && (e = a.style[b]),
                        va.test(e))
                    return e;
                d = g && (k.boxSizingReliable() || e === a.style[b]),
                    e = parseFloat(e) || 0
            }
            return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        function Ja(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
                d = a[g],
                d.style && (f[g] = L.get(d, "olddisplay"),
                    c = d.style.display,
                    b ? (f[g] || "none" !== c || (d.style.display = ""),
                        "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d),
                        "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++)
                d = a[g],
                d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }
        function Ka(a, b, c, d, e) {
            return new Ka.prototype.init(a,b,c,d,e)
        }
        function Sa() {
            return setTimeout(function() {
                La = void 0
            }),
                La = n.now()
        }
        function Ta(a, b) {
            var c, d = 0, e = {
                height: a
            };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b)
                c = R[d],
                    e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a),
                e
        }
        function Ua(a, b, c) {
            for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a))
                    return d
        }
        function Va(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
            c.queue || (h = n._queueHooks(a, "fx"),
            null == h.unqueued && (h.unqueued = 0,
                    i = h.empty.fire,
                    h.empty.fire = function() {
                        h.unqueued || i()
                    }
            ),
                h.unqueued++,
                l.always(function() {
                    l.always(function() {
                        h.unqueued--,
                        n.queue(a, "fx").length || h.empty.fire()
                    })
                })),
            1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
                j = n.css(a, "display"),
                k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j,
            "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
            c.overflow && (o.overflow = "hidden",
                l.always(function() {
                    o.overflow = c.overflow[0],
                        o.overflowX = c.overflow[1],
                        o.overflowY = c.overflow[2]
                }));
            for (d in b)
                if (e = b[d],
                        Na.exec(e)) {
                    if (delete b[d],
                            f = f || "toggle" === e,
                        e === (p ? "hide" : "show")) {
                        if ("show" !== e || !q || void 0 === q[d])
                            continue;
                        p = !0
                    }
                    m[d] = q && q[d] || n.style(a, d)
                } else
                    j = void 0;
            if (n.isEmptyObject(m))
                "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
            else {
                q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}),
                f && (q.hidden = !p),
                    p ? n(a).show() : l.done(function() {
                            n(a).hide()
                        }),
                    l.done(function() {
                        var b;
                        L.remove(a, "fxshow");
                        for (b in m)
                            n.style(a, b, m[b])
                    });
                for (d in m)
                    g = Ua(p ? q[d] : 0, d, l),
                    d in q || (q[d] = g.start,
                    p && (g.end = g.start,
                        g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
        function Wa(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = n.camelCase(c),
                        e = b[d],
                        f = a[c],
                    n.isArray(f) && (e = f[1],
                        f = a[c] = f[0]),
                    c !== d && (a[d] = f,
                        delete a[c]),
                        g = n.cssHooks[d],
                    g && "expand"in g) {
                    f = g.expand(f),
                        delete a[d];
                    for (c in f)
                        c in a || (a[c] = f[c],
                            b[c] = e)
                } else
                    b[d] = e
        }
        function Xa(a, b, c) {
            var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function() {
                delete i.elem
            }), i = function() {
                if (e)
                    return !1;
                for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]),
                    1 > f && i ? c : (h.resolveWith(a, [j]),
                            !1)
            }, j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: La || Sa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d),
                        d
                },
                stop: function(b) {
                    var c = 0
                        , d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; d > c; c++)
                        j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                        this
                }
            }), k = j.props;
            for (Wa(k, j.opts.specialEasing); g > f; f++)
                if (d = Qa[f].call(j, a, k, j.opts))
                    return d;
            return n.map(k, Ua, j),
            n.isFunction(j.opts.start) && j.opts.start.call(a, j),
                n.fx.timer(n.extend(i, {
                    elem: a,
                    anim: j,
                    queue: j.opts.queue
                })),
                j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        function qb(a) {
            return function(b, c) {
                "string" != typeof b && (c = b,
                    b = "*");
                var d, e = 0, f = b.toLowerCase().match(E) || [];
                if (n.isFunction(c))
                    for (; d = f[e++]; )
                        "+" === d[0] ? (d = d.slice(1) || "*",
                                (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }
        function rb(a, b, c, d) {
            function g(h) {
                var i;
                return e[h] = !0,
                    n.each(a[h] || [], function(a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                                g(j),
                                !1)
                    }),
                    i
            }
            var e = {}
                , f = a === mb;
            return g(b.dataTypes[0]) || !e["*"] && g("*")
        }
        function sb(a, b) {
            var c, d, e = n.ajaxSettings.flatOptions || {};
            for (c in b)
                void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && n.extend(!0, a, d),
                a
        }
        function tb(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
                i.shift(),
                void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0]in c)
                f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f),
                    c[f]) : void 0
        }
        function ub(a, b, c, d) {
            var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters)
                    j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f; )
                if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                    !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                        i = f,
                        f = k.shift())
                    if ("*" === f)
                        f = i;
                    else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f],
                                !g)
                            for (e in j)
                                if (h = e.split(" "),
                                    h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                            k.unshift(h[1]));
                                    break
                                }
                        if (g !== !0)
                            if (g && a["throws"])
                                b = g(b);
                            else
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                    }
            return {
                state: "success",
                data: b
            }
        }
        function Ab(a, b, c, d) {
            var e;
            if (n.isArray(b))
                n.each(b, function(b, e) {
                    c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                });
            else if (c || "object" !== n.type(b))
                d(a, b);
            else
                for (e in b)
                    Ab(a + "[" + e + "]", b[e], c, d)
        }
        function Jb(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var c = []
            , d = c.slice
            , e = c.concat
            , f = c.push
            , g = c.indexOf
            , h = {}
            , i = h.toString
            , j = h.hasOwnProperty
            , k = {}
            , l = a.document
            , m = "2.1.4"
            , n = function(a, b) {
            return new n.fn.init(a,b)
        }
            , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
            , p = /^-ms-/
            , q = /-([\da-z])/gi
            , r = function(a, b) {
            return b.toUpperCase()
        };
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return d.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return b.prevObject = this,
                    b.context = this.context,
                    b
            },
            each: function(a, b) {
                return n.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(n.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(d.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length
                    , c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: f,
            sort: c.sort,
            splice: c.splice
        },
            n.extend = n.fn.extend = function() {
                var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
                for ("boolean" == typeof g && (j = g,
                    g = arguments[h] || {},
                    h++),
                     "object" == typeof g || n.isFunction(g) || (g = {}),
                     h === i && (g = this,
                         h--); i > h; h++)
                    if (null != (a = arguments[h]))
                        for (b in a)
                            c = g[b],
                                d = a[b],
                            g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                                        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                                    g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
                return g
            }
            ,
            n.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(a) {
                    throw new Error(a)
                },
                noop: function() {},
                isFunction: function(a) {
                    return "function" === n.type(a)
                },
                isArray: Array.isArray,
                isWindow: function(a) {
                    return null != a && a === a.window
                },
                isNumeric: function(a) {
                    return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
                },
                isPlainObject: function(a) {
                    return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
                },
                isEmptyObject: function(a) {
                    var b;
                    for (b in a)
                        return !1;
                    return !0
                },
                type: function(a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
                },
                globalEval: function(a) {
                    var b, c = eval;
                    a = n.trim(a),
                    a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"),
                            b.text = a,
                            l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
                },
                camelCase: function(a) {
                    return a.replace(p, "ms-").replace(q, r)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                },
                each: function(a, b, c) {
                    var d, e = 0, f = a.length, g = s(a);
                    if (c) {
                        if (g)
                            for (; f > e && (d = b.apply(a[e], c),
                            d !== !1); e++)
                                ;
                        else
                            for (e in a)
                                if (d = b.apply(a[e], c),
                                    d === !1)
                                    break
                    } else if (g)
                        for (; f > e && (d = b.call(a[e], e, a[e]),
                        d !== !1); e++)
                            ;
                    else
                        for (e in a)
                            if (d = b.call(a[e], e, a[e]),
                                d === !1)
                                break;
                    return a
                },
                trim: function(a) {
                    return null == a ? "" : (a + "").replace(o, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
                        c
                },
                inArray: function(a, b, c) {
                    return null == b ? -1 : g.call(b, a, c)
                },
                merge: function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                        a[e++] = b[d];
                    return a.length = e,
                        a
                },
                grep: function(a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                        d = !b(a[f], f),
                        d !== h && e.push(a[f]);
                    return e
                },
                map: function(a, b, c) {
                    var d, f = 0, g = a.length, h = s(a), i = [];
                    if (h)
                        for (; g > f; f++)
                            d = b(a[f], f, c),
                            null != d && i.push(d);
                    else
                        for (f in a)
                            d = b(a[f], f, c),
                            null != d && i.push(d);
                    return e.apply([], i)
                },
                guid: 1,
                proxy: function(a, b) {
                    var c, e, f;
                    return "string" == typeof b && (c = a[b],
                        b = a,
                        a = c),
                        n.isFunction(a) ? (e = d.call(arguments, 2),
                                f = function() {
                                    return a.apply(b || this, e.concat(d.call(arguments)))
                                }
                                ,
                                f.guid = a.guid = a.guid || n.guid++,
                                f) : void 0
                },
                now: Date.now,
                support: k
            }),
            n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
                h["[object " + b + "]"] = b.toLowerCase()
            });
        var t = function(a) {
            function ga(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w, x;
                if ((b ? b.ownerDocument || b : v) !== n && m(b),
                        b = b || n,
                        d = d || [],
                        k = b.nodeType,
                    "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                    return d;
                if (!e && p) {
                    if (11 !== k && (f = _.exec(a)))
                        if (j = f[1]) {
                            if (9 === k) {
                                if (h = b.getElementById(j),
                                    !h || !h.parentNode)
                                    return d;
                                if (h.id === j)
                                    return d.push(h),
                                        d
                            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                                return d.push(h),
                                    d
                        } else {
                            if (f[2])
                                return H.apply(d, b.getElementsByTagName(a)),
                                    d;
                            if ((j = f[3]) && c.getElementsByClassName)
                                return H.apply(d, b.getElementsByClassName(j)),
                                    d
                        }
                    if (c.qsa && (!q || !q.test(a))) {
                        if (s = r = u,
                                w = b,
                                x = 1 !== k && a,
                            1 === k && "object" !== b.nodeName.toLowerCase()) {
                            for (o = g(a),
                                     (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s),
                                     s = "[id='" + s + "'] ",
                                     l = o.length; l--; )
                                o[l] = s + ra(o[l]);
                            w = aa.test(a) && pa(b.parentNode) || b,
                                x = o.join(",")
                        }
                        if (x)
                            try {
                                return H.apply(d, w.querySelectorAll(x)),
                                    d
                            } catch (y) {} finally {
                                r || b.removeAttribute("id")
                            }
                    }
                }
                return i(a.replace(R, "$1"), b, d, e)
            }
            function ha() {
                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                        b[c + " "] = e
                }
                var a = [];
                return b
            }
            function ia(a) {
                return a[u] = !0,
                    a
            }
            function ja(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b),
                        b = null
                }
            }
            function ka(a, b) {
                for (var c = a.split("|"), e = a.length; e--; )
                    d.attrHandle[c[e]] = b
            }
            function la(a, b) {
                var c = b && a
                    , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d)
                    return d;
                if (c)
                    for (; c = c.nextSibling; )
                        if (c === b)
                            return -1;
                return a ? 1 : -1
            }
            function ma(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }
            function na(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }
            function oa(a) {
                return ia(function(b) {
                    return b = +b,
                        ia(function(c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--; )
                                c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                })
            }
            function pa(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            function qa() {}
            function ra(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)
                    d += a[b].value;
                return d
            }
            function sa(a, b, c) {
                var d = b.dir
                    , e = c && "parentNode" === d
                    , f = x++;
                return b.first ? function(b, c, f) {
                        for (; b = b[d]; )
                            if (1 === b.nodeType || e)
                                return a(b, c, f)
                    }
                    : function(b, c, g) {
                        var h, i, j = [w, f];
                        if (g) {
                            for (; b = b[d]; )
                                if ((1 === b.nodeType || e) && a(b, c, g))
                                    return !0
                        } else
                            for (; b = b[d]; )
                                if (1 === b.nodeType || e) {
                                    if (i = b[u] || (b[u] = {}),
                                        (h = i[d]) && h[0] === w && h[1] === f)
                                        return j[2] = h[2];
                                    if (i[d] = j,
                                            j[2] = a(b, c, g))
                                        return !0
                                }
                    }
            }
            function ta(a) {
                return a.length > 1 ? function(b, c, d) {
                        for (var e = a.length; e--; )
                            if (!a[e](b, c, d))
                                return !1;
                        return !0
                    }
                    : a[0]
            }
            function ua(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++)
                    ga(a, b[d], c);
                return c
            }
            function va(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                    (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                    j && b.push(h));
                return g
            }
            function wa(a, b, c, d, e, f) {
                return d && !d[u] && (d = wa(d)),
                e && !e[u] && (e = wa(e, f)),
                    ia(function(f, g, h, i) {
                        var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                        if (c && c(q, r, h, i),
                                d)
                            for (j = va(r, n),
                                     d(j, [], h, i),
                                     k = j.length; k--; )
                                (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                        if (f) {
                            if (e || a) {
                                if (e) {
                                    for (j = [],
                                             k = r.length; k--; )
                                        (l = r[k]) && j.push(q[k] = l);
                                    e(null, r = [], j, i)
                                }
                                for (k = r.length; k--; )
                                    (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                            }
                        } else
                            r = va(r === g ? r.splice(o, r.length) : r),
                                e ? e(null, g, r, i) : H.apply(g, r)
                    })
            }
            function xa(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                    return a === b
                }, h, !0), l = sa(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null,
                        e
                }
                ]; f > i; i++)
                    if (c = d.relative[a[i].type])
                        m = [sa(ta(m), c)];
                    else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches),
                                c[u]) {
                            for (e = ++i; f > e && !d.relative[a[e].type]; e++)
                                ;
                            return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                                    value: " " === a[i - 2].type ? "*" : ""
                                })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                        }
                        m.push(c)
                    }
                return ta(m)
            }
            function ya(a, b) {
                var c = b.length > 0
                    , e = a.length > 0
                    , f = function(f, g, h, i, k) {
                    var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            for (m = 0; o = a[m++]; )
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--,
                        f && r.push(l))
                    }
                    if (p += q,
                        c && q !== p) {
                        for (m = 0; o = b[m++]; )
                            o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                for (; q--; )
                                    r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s),
                        k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v,
                        j = t),
                        r
                };
                return c ? ia(f) : f
            }
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
                return a === b && (l = !0),
                    0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b)
                        return c;
                return -1
            }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+","g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
                bool: new RegExp("^(?:" + K + ")$","i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), da = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, ea = function() {
                m()
            };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes),
                    E[v.childNodes.length].nodeType
            } catch (fa) {
                H = {
                    apply: E.length ? function(a, b) {
                            G.apply(a, I.call(b))
                        }
                        : function(a, b) {
                            for (var c = a.length, d = 0; a[c++] = b[d++]; )
                                ;
                            a.length = c - 1
                        }
                }
            }
            c = ga.support = {},
                f = ga.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                }
                ,
                m = ga.setDocument = function(a) {
                    var b, e, g = a ? a.ownerDocument || a : v;
                    return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
                            o = g.documentElement,
                            e = g.defaultView,
                        e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)),
                            p = !f(g),
                            c.attributes = ja(function(a) {
                                return a.className = "i",
                                    !a.getAttribute("className")
                            }),
                            c.getElementsByTagName = ja(function(a) {
                                return a.appendChild(g.createComment("")),
                                    !a.getElementsByTagName("*").length
                            }),
                            c.getElementsByClassName = $.test(g.getElementsByClassName),
                            c.getById = ja(function(a) {
                                return o.appendChild(a).id = u,
                                !g.getElementsByName || !g.getElementsByName(u).length
                            }),
                            c.getById ? (d.find.ID = function(a, b) {
                                        if ("undefined" != typeof b.getElementById && p) {
                                            var c = b.getElementById(a);
                                            return c && c.parentNode ? [c] : []
                                        }
                                    }
                                        ,
                                        d.filter.ID = function(a) {
                                            var b = a.replace(ca, da);
                                            return function(a) {
                                                return a.getAttribute("id") === b
                                            }
                                        }
                                ) : (delete d.find.ID,
                                        d.filter.ID = function(a) {
                                            var b = a.replace(ca, da);
                                            return function(a) {
                                                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                                return c && c.value === b
                                            }
                                        }
                                ),
                            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                                }
                                : function(a, b) {
                                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                                    if ("*" === a) {
                                        for (; c = f[e++]; )
                                            1 === c.nodeType && d.push(c);
                                        return d
                                    }
                                    return f
                                }
                            ,
                            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                                    return p ? b.getElementsByClassName(a) : void 0
                                }
                            ,
                            r = [],
                            q = [],
                        (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                            o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>",
                            a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                            a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                            a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                            a.querySelectorAll(":checked").length || q.push(":checked"),
                            a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                        }),
                            ja(function(a) {
                                var b = g.createElement("input");
                                b.setAttribute("type", "hidden"),
                                    a.appendChild(b).setAttribute("name", "D"),
                                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                                    a.querySelectorAll("*,:x"),
                                    q.push(",.*:")
                            })),
                        (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                            c.disconnectedMatch = s.call(a, "div"),
                                s.call(a, "[s!='']:x"),
                                r.push("!=", P)
                        }),
                            q = q.length && new RegExp(q.join("|")),
                            r = r.length && new RegExp(r.join("|")),
                            b = $.test(o.compareDocumentPosition),
                            t = b || $.test(o.contains) ? function(a, b) {
                                    var c = 9 === a.nodeType ? a.documentElement : a
                                        , d = b && b.parentNode;
                                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                                }
                                : function(a, b) {
                                    if (b)
                                        for (; b = b.parentNode; )
                                            if (b === a)
                                                return !0;
                                    return !1
                                }
                            ,
                            B = b ? function(a, b) {
                                    if (a === b)
                                        return l = !0,
                                            0;
                                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                                            1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                                }
                                : function(a, b) {
                                    if (a === b)
                                        return l = !0,
                                            0;
                                    var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                                    if (!e || !f)
                                        return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                                    if (e === f)
                                        return la(a, b);
                                    for (c = a; c = c.parentNode; )
                                        h.unshift(c);
                                    for (c = b; c = c.parentNode; )
                                        i.unshift(c);
                                    for (; h[d] === i[d]; )
                                        d++;
                                    return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                                }
                            ,
                            g) : n
                }
                ,
                ga.matches = function(a, b) {
                    return ga(a, null, null, b)
                }
                ,
                ga.matchesSelector = function(a, b) {
                    if ((a.ownerDocument || a) !== n && m(a),
                            b = b.replace(U, "='$1']"),
                            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                        try {
                            var d = s.call(a, b);
                            if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                                return d
                        } catch (e) {}
                    return ga(b, n, null, [a]).length > 0
                }
                ,
                ga.contains = function(a, b) {
                    return (a.ownerDocument || a) !== n && m(a),
                        t(a, b)
                }
                ,
                ga.attr = function(a, b) {
                    (a.ownerDocument || a) !== n && m(a);
                    var e = d.attrHandle[b.toLowerCase()]
                        , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                    return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
                }
                ,
                ga.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a)
                }
                ,
                ga.uniqueSort = function(a) {
                    var b, d = [], e = 0, f = 0;
                    if (l = !c.detectDuplicates,
                            k = !c.sortStable && a.slice(0),
                            a.sort(B),
                            l) {
                        for (; b = a[f++]; )
                            b === a[f] && (e = d.push(f));
                        for (; e--; )
                            a.splice(d[e], 1)
                    }
                    return k = null,
                        a
                }
                ,
                e = ga.getText = function(a) {
                    var b, c = "", d = 0, f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ("string" == typeof a.textContent)
                                return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling)
                                c += e(a)
                        } else if (3 === f || 4 === f)
                            return a.nodeValue
                    } else
                        for (; b = a[d++]; )
                            c += e(b);
                    return c
                }
                ,
                d = ga.selectors = {
                    cacheLength: 50,
                    createPseudo: ia,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(a) {
                            return a[1] = a[1].replace(ca, da),
                                a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da),
                            "~=" === a[2] && (a[3] = " " + a[3] + " "),
                                a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(),
                                "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]),
                                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                                        a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                                a
                        },
                        PSEUDO: function(a) {
                            var b, c = !a[6] && a[2];
                            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                                        a[2] = c.slice(0, b)),
                                    a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(a) {
                            var b = a.replace(ca, da).toLowerCase();
                            return "*" === a ? function() {
                                    return !0
                                }
                                : function(a) {
                                    return a.nodeName && a.nodeName.toLowerCase() === b
                                }
                        },
                        CLASS: function(a) {
                            var b = y[a + " "];
                            return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                                    return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                                })
                        },
                        ATTR: function(a, b, c) {
                            return function(d) {
                                var e = ga.attr(d, a);
                                return null == e ? "!=" === b : b ? (e += "",
                                            "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                            }
                        },
                        CHILD: function(a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3)
                                , g = "last" !== a.slice(-4)
                                , h = "of-type" === b;
                            return 1 === d && 0 === e ? function(a) {
                                    return !!a.parentNode
                                }
                                : function(b, c, i) {
                                    var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                                    if (q) {
                                        if (f) {
                                            for (; p; ) {
                                                for (l = b; l = l[p]; )
                                                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                                        return !1;
                                                o = p = "only" === a && !o && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (o = [g ? q.firstChild : q.lastChild],
                                            g && s) {
                                            for (k = q[u] || (q[u] = {}),
                                                     j = k[a] || [],
                                                     n = j[0] === w && j[1],
                                                     m = j[0] === w && j[2],
                                                     l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                                if (1 === l.nodeType && ++m && l === b) {
                                                    k[a] = [w, n, m];
                                                    break
                                                }
                                        } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                            m = j[1];
                                        else
                                            for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                            l !== b)); )
                                                ;
                                        return m -= e,
                                        m === d || m % d === 0 && m / d >= 0
                                    }
                                }
                        },
                        PSEUDO: function(a, b) {
                            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                                            d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                                                    for (var d, f = e(a, b), g = f.length; g--; )
                                                        d = J(a, f[g]),
                                                            a[d] = !(c[d] = f[g])
                                                }) : function(a) {
                                                    return e(a, 0, c)
                                                }
                                    ) : e
                        }
                    },
                    pseudos: {
                        not: ia(function(a) {
                            var b = []
                                , c = []
                                , d = h(a.replace(R, "$1"));
                            return d[u] ? ia(function(a, b, c, e) {
                                    for (var f, g = d(a, null, e, []), h = a.length; h--; )
                                        (f = g[h]) && (a[h] = !(b[h] = f))
                                }) : function(a, e, f) {
                                    return b[0] = a,
                                        d(b, null, f, c),
                                        b[0] = null,
                                        !c.pop()
                                }
                        }),
                        has: ia(function(a) {
                            return function(b) {
                                return ga(a, b).length > 0
                            }
                        }),
                        contains: ia(function(a) {
                            return a = a.replace(ca, da),
                                function(b) {
                                    return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                                }
                        }),
                        lang: ia(function(a) {
                            return W.test(a || "") || ga.error("unsupported lang: " + a),
                                a = a.replace(ca, da).toLowerCase(),
                                function(b) {
                                    var c;
                                    do
                                        if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                            return c = c.toLowerCase(),
                                            c === a || 0 === c.indexOf(a + "-");
                                    while ((b = b.parentNode) && 1 === b.nodeType);return !1
                                }
                        }),
                        target: function(b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        },
                        root: function(a) {
                            return a === o
                        },
                        focus: function(a) {
                            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        },
                        enabled: function(a) {
                            return a.disabled === !1
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex,
                            a.selected === !0
                        },
                        empty: function(a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(a) {
                            return !d.pseudos.empty(a)
                        },
                        header: function(a) {
                            return Z.test(a.nodeName)
                        },
                        input: function(a) {
                            return Y.test(a.nodeName)
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        text: function(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                        },
                        first: oa(function() {
                            return [0]
                        }),
                        last: oa(function(a, b) {
                            return [b - 1]
                        }),
                        eq: oa(function(a, b, c) {
                            return [0 > c ? c + b : c]
                        }),
                        even: oa(function(a, b) {
                            for (var c = 0; b > c; c += 2)
                                a.push(c);
                            return a
                        }),
                        odd: oa(function(a, b) {
                            for (var c = 1; b > c; c += 2)
                                a.push(c);
                            return a
                        }),
                        lt: oa(function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0; )
                                a.push(d);
                            return a
                        }),
                        gt: oa(function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; ++d < b; )
                                a.push(d);
                            return a
                        })
                    }
                },
                d.pseudos.nth = d.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                d.pseudos[b] = ma(b);
            for (b in {
                submit: !0,
                reset: !0
            })
                d.pseudos[b] = na(b);
            return qa.prototype = d.filters = d.pseudos,
                d.setFilters = new qa,
                g = ga.tokenize = function(a, b) {
                    var c, e, f, g, h, i, j, k = z[a + " "];
                    if (k)
                        return b ? 0 : k.slice(0);
                    for (h = a,
                             i = [],
                             j = d.preFilter; h; ) {
                        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                            i.push(f = [])),
                            c = !1,
                        (e = T.exec(h)) && (c = e.shift(),
                            f.push({
                                value: c,
                                type: e[0].replace(R, " ")
                            }),
                            h = h.slice(c.length));
                        for (g in d.filter)
                            !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                                f.push({
                                    value: c,
                                    type: g,
                                    matches: e
                                }),
                                h = h.slice(c.length));
                        if (!c)
                            break
                    }
                    return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
                }
                ,
                h = ga.compile = function(a, b) {
                    var c, d = [], e = [], f = A[a + " "];
                    if (!f) {
                        for (b || (b = g(a)),
                                 c = b.length; c--; )
                            f = xa(b[c]),
                                f[u] ? d.push(f) : e.push(f);
                        f = A(a, ya(e, d)),
                            f.selector = a
                    }
                    return f
                }
                ,
                i = ga.select = function(a, b, e, f) {
                    var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
                    if (e = e || [],
                        1 === o.length) {
                        if (j = o[0] = o[0].slice(0),
                            j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                            if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0],
                                    !b)
                                return e;
                            n && (b = b.parentNode),
                                a = a.slice(j.shift().value.length)
                        }
                        for (i = X.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i],
                            !d.relative[l = k.type]); )
                            if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                                if (j.splice(i, 1),
                                        a = f.length && ra(j),
                                        !a)
                                    return H.apply(e, f),
                                        e;
                                break
                            }
                    }
                    return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b),
                        e
                }
                ,
                c.sortStable = u.split("").sort(B).join("") === u,
                c.detectDuplicates = !!l,
                m(),
                c.sortDetached = ja(function(a) {
                    return 1 & a.compareDocumentPosition(n.createElement("div"))
                }),
            ja(function(a) {
                return a.innerHTML = "<a href='#'></a>",
                "#" === a.firstChild.getAttribute("href")
            }) || ka("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }),
            c.attributes && ja(function(a) {
                return a.innerHTML = "<input/>",
                    a.firstChild.setAttribute("value", ""),
                "" === a.firstChild.getAttribute("value");
            }) || ka("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }),
            ja(function(a) {
                return null == a.getAttribute("disabled")
            }) || ka(K, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }),
                ga
        }(a);
        n.find = t,
            n.expr = t.selectors,
            n.expr[":"] = n.expr.pseudos,
            n.unique = t.uniqueSort,
            n.text = t.getText,
            n.isXMLDoc = t.isXML,
            n.contains = t.contains;
        var u = n.expr.match.needsContext
            , v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
            , w = /^.[^:#\[\.,]*$/;
        n.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"),
                1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
                        return 1 === a.nodeType
                    }))
        }
            ,
            n.fn.extend({
                find: function(a) {
                    var b, c = this.length, d = [], e = this;
                    if ("string" != typeof a)
                        return this.pushStack(n(a).filter(function() {
                            for (b = 0; c > b; b++)
                                if (n.contains(e[b], this))
                                    return !0
                        }));
                    for (b = 0; c > b; b++)
                        n.find(a, e[b], d);
                    return d = this.pushStack(c > 1 ? n.unique(d) : d),
                        d.selector = this.selector ? this.selector + " " + a : a,
                        d
                },
                filter: function(a) {
                    return this.pushStack(x(this, a || [], !1))
                },
                not: function(a) {
                    return this.pushStack(x(this, a || [], !0))
                },
                is: function(a) {
                    return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
                }
            });
        var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
                var c, d;
                if (!a)
                    return this;
                if ("string" == typeof a) {
                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a),
                        !c || !c[1] && b)
                        return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof n ? b[0] : b,
                                n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)),
                            v.test(c[1]) && n.isPlainObject(b))
                            for (c in b)
                                n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    return d = l.getElementById(c[2]),
                    d && d.parentNode && (this.length = 1,
                        this[0] = d),
                        this.context = l,
                        this.selector = a,
                        this
                }
                return a.nodeType ? (this.context = this[0] = a,
                        this.length = 1,
                        this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
                            this.context = a.context),
                            n.makeArray(a, this))
            }
            ;
        A.prototype = n.fn,
            y = n(l);
        var B = /^(?:parents|prev(?:Until|All))/
            , C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        n.extend({
            dir: function(a, b, c) {
                for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
                    if (1 === a.nodeType) {
                        if (e && n(a).is(c))
                            break;
                        d.push(a)
                    }
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling)
                    1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }),
            n.fn.extend({
                has: function(a) {
                    var b = n(a, this)
                        , c = b.length;
                    return this.filter(function() {
                        for (var a = 0; c > a; a++)
                            if (n.contains(this, b[a]))
                                return !0
                    })
                },
                closest: function(a, b) {
                    for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                                f.push(c);
                                break
                            }
                    return this.pushStack(f.length > 1 ? n.unique(f) : f)
                },
                index: function(a) {
                    return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(a, b) {
                    return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
                },
                addBack: function(a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                }
            }),
            n.each({
                parent: function(a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null
                },
                parents: function(a) {
                    return n.dir(a, "parentNode")
                },
                parentsUntil: function(a, b, c) {
                    return n.dir(a, "parentNode", c)
                },
                next: function(a) {
                    return D(a, "nextSibling")
                },
                prev: function(a) {
                    return D(a, "previousSibling")
                },
                nextAll: function(a) {
                    return n.dir(a, "nextSibling")
                },
                prevAll: function(a) {
                    return n.dir(a, "previousSibling")
                },
                nextUntil: function(a, b, c) {
                    return n.dir(a, "nextSibling", c)
                },
                prevUntil: function(a, b, c) {
                    return n.dir(a, "previousSibling", c)
                },
                siblings: function(a) {
                    return n.sibling((a.parentNode || {}).firstChild, a)
                },
                children: function(a) {
                    return n.sibling(a.firstChild)
                },
                contents: function(a) {
                    return a.contentDocument || n.merge([], a.childNodes)
                }
            }, function(a, b) {
                n.fn[a] = function(c, d) {
                    var e = n.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c),
                    d && "string" == typeof d && (e = n.filter(d, e)),
                    this.length > 1 && (C[a] || n.unique(e),
                    B.test(a) && e.reverse()),
                        this.pushStack(e)
                }
            });
        var E = /\S+/g
            , F = {};
        n.Callbacks = function(a) {
            a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
            var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
                for (b = a.memory && l,
                         c = !0,
                         g = e || 0,
                         e = 0,
                         f = h.length,
                         d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1,
                h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            }, k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        !function g(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments),
                            d ? f = h.length : b && (e = c,
                                    j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, b) {
                        for (var c; (c = n.inArray(b, h, c)) > -1; )
                            h.splice(c, 1),
                            d && (f >= c && f--,
                            g >= c && g--)
                    }),
                        this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [],
                        f = 0,
                        this
                },
                disable: function() {
                    return h = i = b = void 0,
                        this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0,
                    b || k.disable(),
                        this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [],
                        b = [a, b.slice ? b.slice() : b],
                        d ? i.push(b) : j(b)),
                        this
                },
                fire: function() {
                    return k.fireWith(this, arguments),
                        this
                },
                fired: function() {
                    return !!c
                }
            };
            return k
        }
            ,
            n.extend({
                Deferred: function(a) {
                    var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
                        , c = "pending"
                        , d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments),
                                this
                        },
                        then: function() {
                            var a = arguments;
                            return n.Deferred(function(c) {
                                n.each(b, function(b, f) {
                                    var g = n.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }),
                                    a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? n.extend(a, d) : d
                        }
                    }
                        , e = {};
                    return d.pipe = d.then,
                        n.each(b, function(a, f) {
                            var g = f[2]
                                , h = f[3];
                            d[f[1]] = g.add,
                            h && g.add(function() {
                                c = h
                            }, b[1 ^ a][2].disable, b[2][2].lock),
                                e[f[0]] = function() {
                                    return e[f[0] + "With"](this === e ? d : this, arguments),
                                        this
                                }
                                ,
                                e[f[0] + "With"] = g.fireWith
                        }),
                        d.promise(e),
                    a && a.call(e, e),
                        e
                },
                when: function(a) {
                    var i, j, k, b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                        return function(e) {
                            b[a] = this,
                                c[a] = arguments.length > 1 ? d.call(arguments) : e,
                                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    };
                    if (e > 1)
                        for (i = new Array(e),
                                 j = new Array(e),
                                 k = new Array(e); e > b; b++)
                            c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                    return f || g.resolveWith(k, c),
                        g.promise()
                }
            });
        var H;
        n.fn.ready = function(a) {
            return n.ready.promise().done(a),
                this
        }
            ,
            n.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? n.readyWait++ : n.ready(!0)
                },
                ready: function(a) {
                    (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
                    a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]),
                    n.fn.triggerHandler && (n(l).triggerHandler("ready"),
                        n(l).off("ready"))))
                }
            }),
            n.ready.promise = function(b) {
                return H || (H = n.Deferred(),
                    "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1),
                            a.addEventListener("load", I, !1))),
                    H.promise(b)
            }
            ,
            n.ready.promise();
        var J = n.access = function(a, b, c, d, e, f, g) {
                var h = 0
                    , i = a.length
                    , j = null == c;
                if ("object" === n.type(c)) {
                    e = !0;
                    for (h in c)
                        n.access(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0,
                    n.isFunction(d) || (g = !0),
                    j && (g ? (b.call(a, d),
                            b = null) : (j = b,
                                b = function(a, b, c) {
                                    return j.call(n(a), c)
                                }
                        )),
                        b))
                    for (; i > h; h++)
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            }
            ;
        n.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        }
            ,
            K.uid = 1,
            K.accepts = n.acceptData,
            K.prototype = {
                key: function(a) {
                    if (!K.accepts(a))
                        return 0;
                    var b = {}
                        , c = a[this.expando];
                    if (!c) {
                        c = K.uid++;
                        try {
                            b[this.expando] = {
                                value: c
                            },
                                Object.defineProperties(a, b)
                        } catch (d) {
                            b[this.expando] = c,
                                n.extend(a, b)
                        }
                    }
                    return this.cache[c] || (this.cache[c] = {}),
                        c
                },
                set: function(a, b, c) {
                    var d, e = this.key(a), f = this.cache[e];
                    if ("string" == typeof b)
                        f[b] = c;
                    else if (n.isEmptyObject(f))
                        n.extend(this.cache[e], b);
                    else
                        for (d in b)
                            f[d] = b[d];
                    return f
                },
                get: function(a, b) {
                    var c = this.cache[this.key(a)];
                    return void 0 === b ? c : c[b]
                },
                access: function(a, b, c) {
                    var d;
                    return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
                            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
                            void 0 !== c ? c : b)
                },
                remove: function(a, b) {
                    var c, d, e, f = this.key(a), g = this.cache[f];
                    if (void 0 === b)
                        this.cache[f] = {};
                    else {
                        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                                b in g ? d = [b, e] : (d = e,
                                        d = d in g ? [d] : d.match(E) || [])),
                            c = d.length;
                        for (; c--; )
                            delete g[d[c]]
                    }
                },
                hasData: function(a) {
                    return !n.isEmptyObject(this.cache[a[this.expando]] || {})
                },
                discard: function(a) {
                    a[this.expando] && delete this.cache[a[this.expando]]
                }
            };
        var L = new K
            , M = new K
            , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
            , O = /([A-Z])/g;
        n.extend({
            hasData: function(a) {
                return M.hasData(a) || L.hasData(a)
            },
            data: function(a, b, c) {
                return M.access(a, b, c)
            },
            removeData: function(a, b) {
                M.remove(a, b)
            },
            _data: function(a, b, c) {
                return L.access(a, b, c)
            },
            _removeData: function(a, b) {
                L.remove(a, b)
            }
        }),
            n.fn.extend({
                data: function(a, b) {
                    var c, d, e, f = this[0], g = f && f.attributes;
                    if (void 0 === a) {
                        if (this.length && (e = M.get(f),
                            1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                            for (c = g.length; c--; )
                                g[c] && (d = g[c].name,
                                0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                                    P(f, d, e[d])));
                            L.set(f, "hasDataAttrs", !0)
                        }
                        return e
                    }
                    return "object" == typeof a ? this.each(function() {
                            M.set(this, a)
                        }) : J(this, function(b) {
                            var c, d = n.camelCase(a);
                            if (f && void 0 === b) {
                                if (c = M.get(f, a),
                                    void 0 !== c)
                                    return c;
                                if (c = M.get(f, d),
                                    void 0 !== c)
                                    return c;
                                if (c = P(f, d, void 0),
                                    void 0 !== c)
                                    return c
                            } else
                                this.each(function() {
                                    var c = M.get(this, d);
                                    M.set(this, d, b),
                                    -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                                })
                        }, null, b, arguments.length > 1, null, !0)
                },
                removeData: function(a) {
                    return this.each(function() {
                        M.remove(this, a)
                    })
                }
            }),
            n.extend({
                queue: function(a, b, c) {
                    var d;
                    return a ? (b = (b || "fx") + "queue",
                            d = L.get(a, b),
                        c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)),
                        d || []) : void 0
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = n.queue(a, b)
                        , d = c.length
                        , e = c.shift()
                        , f = n._queueHooks(a, b)
                        , g = function() {
                        n.dequeue(a, b)
                    };
                    "inprogress" === e && (e = c.shift(),
                        d--),
                    e && ("fx" === b && c.unshift("inprogress"),
                        delete f.stop,
                        e.call(a, g, f)),
                    !d && f && f.empty.fire()
                },
                _queueHooks: function(a, b) {
                    var c = b + "queueHooks";
                    return L.get(a, c) || L.access(a, c, {
                            empty: n.Callbacks("once memory").add(function() {
                                L.remove(a, [b + "queue", c])
                            })
                        })
                }
            }),
            n.fn.extend({
                queue: function(a, b) {
                    var c = 2;
                    return "string" != typeof a && (b = a,
                        a = "fx",
                        c--),
                        arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                                    var c = n.queue(this, a, b);
                                    n._queueHooks(this, a),
                                    "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                                })
                },
                dequeue: function(a) {
                    return this.each(function() {
                        n.dequeue(this, a)
                    })
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", [])
                },
                promise: function(a, b) {
                    var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                    for ("string" != typeof a && (b = a,
                        a = void 0),
                             a = a || "fx"; g--; )
                        c = L.get(f[g], a + "queueHooks"),
                        c && c.empty && (d++,
                            c.empty.add(h));
                    return h(),
                        e.promise(b)
                }
            });
        var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
            , R = ["Top", "Right", "Bottom", "Left"]
            , S = function(a, b) {
            return a = b || a,
            "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        }
            , T = /^(?:checkbox|radio)$/i;
        !function() {
            var a = l.createDocumentFragment()
                , b = a.appendChild(l.createElement("div"))
                , c = l.createElement("input");
            c.setAttribute("type", "radio"),
                c.setAttribute("checked", "checked"),
                c.setAttribute("name", "t"),
                b.appendChild(c),
                k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
                b.innerHTML = "<textarea>x</textarea>",
                k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var U = "undefined";
        k.focusinBubbles = "onfocusin"in a;
        var V = /^key/
            , W = /^(?:mouse|pointer|contextmenu)|click/
            , X = /^(?:focusinfocus|focusoutblur)$/
            , Y = /^([^.]*)(?:\.(.+)|)$/;
        n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
                if (r)
                    for (c.handler && (f = c,
                        c = f.handler,
                        e = f.selector),
                         c.guid || (c.guid = n.guid++),
                         (i = r.events) || (i = r.events = {}),
                         (g = r.handle) || (g = r.handle = function(b) {
                                 return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                             }
                         ),
                             b = (b || "").match(E) || [""],
                             j = b.length; j--; )
                        h = Y.exec(b[j]) || [],
                            o = q = h[1],
                            p = (h[2] || "").split(".").sort(),
                        o && (l = n.event.special[o] || {},
                            o = (e ? l.delegateType : l.bindType) || o,
                            l = n.event.special[o] || {},
                            k = n.extend({
                                type: o,
                                origType: q,
                                data: d,
                                handler: c,
                                guid: c.guid,
                                selector: e,
                                needsContext: e && n.expr.match.needsContext.test(e),
                                namespace: p.join(".")
                            }, f),
                        (m = i[o]) || (m = i[o] = [],
                            m.delegateCount = 0,
                        l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)),
                        l.add && (l.add.call(a, k),
                        k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            n.event.global[o] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
                if (r && (i = r.events)) {
                    for (b = (b || "").match(E) || [""],
                             j = b.length; j--; )
                        if (h = Y.exec(b[j]) || [],
                                o = q = h[1],
                                p = (h[2] || "").split(".").sort(),
                                o) {
                            for (l = n.event.special[o] || {},
                                     o = (d ? l.delegateType : l.bindType) || o,
                                     m = i[o] || [],
                                     h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                     g = f = m.length; f--; )
                                k = m[f],
                                !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                                k.selector && m.delegateCount--,
                                l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                                delete i[o])
                        } else
                            for (o in i)
                                n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(i) && (delete r.handle,
                        L.remove(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || l,
                    3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."),
                        q = r.shift(),
                        r.sort()),
                        k = q.indexOf(":") < 0 && "on" + q,
                        b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
                        b.isTrigger = e ? 2 : 3,
                        b.namespace = r.join("."),
                        b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        b.result = void 0,
                    b.target || (b.target = d),
                        c = null == c ? [b] : n.makeArray(c, [b]),
                        o = n.event.special[q] || {},
                    e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                    if (!e && !o.noBubble && !n.isWindow(d)) {
                        for (i = o.delegateType || q,
                             X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                            p.push(g),
                                h = g;
                        h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0; (g = p[f++]) && !b.isPropagationStopped(); )
                        b.type = f > 1 ? i : o.bindType || q,
                            m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"),
                        m && m.apply(g, c),
                            m = k && g[k],
                        m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c),
                        b.result === !1 && b.preventDefault());
                    return b.type = q,
                    e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k],
                    h && (d[k] = null),
                        n.event.triggered = q,
                        d[q](),
                        n.event.triggered = void 0,
                    h && (d[k] = h)),
                        b.result
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
                if (i[0] = a,
                        a.delegateTarget = this,
                    !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    for (h = n.event.handlers.call(this, a, j),
                             b = 0; (f = h[b++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = f.elem,
                                 c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped(); )
                            (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g,
                                a.data = g.data,
                                e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                            void 0 !== e && (a.result = e) === !1 && (a.preventDefault(),
                                a.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, a),
                        a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (i.disabled !== !0 || "click" !== a.type) {
                            for (d = [],
                                     c = 0; h > c; c++)
                                f = b[c],
                                    e = f.selector + " ",
                                void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length),
                                d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }),
                    g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                        a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l,
                        d = c.documentElement,
                        e = c.body,
                        a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                        a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                    a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                        a
                }
            },
            fix: function(a) {
                if (a[n.expando])
                    return a;
                var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
                         d = g.props ? this.props.concat(g.props) : this.props,
                         a = new n.Event(f),
                         b = d.length; b--; )
                    c = d[b],
                        a[c] = f[c];
                return a.target || (a.target = l),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                    g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== _() && this.focus ? (this.focus(),
                                !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === _() && this.blur ? (this.blur(),
                                !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                                !1) : void 0
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = n.extend(new n.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault()
            }
        },
            n.removeEvent = function(a, b, c) {
                a.removeEventListener && a.removeEventListener(b, c, !1)
            }
            ,
            n.Event = function(a, b) {
                return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
                            this.type = a.type,
                            this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a,
                    b && n.extend(this, b),
                        this.timeStamp = a && a.timeStamp || n.now(),
                        void (this[n.expando] = !0)) : new n.Event(a,b)
            }
            ,
            n.Event.prototype = {
                isDefaultPrevented: $,
                isPropagationStopped: $,
                isImmediatePropagationStopped: $,
                preventDefault: function() {
                    var a = this.originalEvent;
                    this.isDefaultPrevented = Z,
                    a && a.preventDefault && a.preventDefault()
                },
                stopPropagation: function() {
                    var a = this.originalEvent;
                    this.isPropagationStopped = Z,
                    a && a.stopPropagation && a.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var a = this.originalEvent;
                    this.isImmediatePropagationStopped = Z,
                    a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                        this.stopPropagation()
                }
            },
            n.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(a, b) {
                n.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function(a) {
                        var c, d = this, e = a.relatedTarget, f = a.handleObj;
                        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType,
                            c = f.handler.apply(this, arguments),
                            a.type = b),
                            c
                    }
                }
            }),
        k.focusinBubbles || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a), !0)
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this
                        , e = L.access(d, b);
                    e || d.addEventListener(a, c, !0),
                        L.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this
                        , e = L.access(d, b) - 1;
                    e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0),
                            L.remove(d, b))
                }
            }
        }),
            n.fn.extend({
                on: function(a, b, c, d, e) {
                    var f, g;
                    if ("object" == typeof a) {
                        "string" != typeof b && (c = c || b,
                            b = void 0);
                        for (g in a)
                            this.on(g, b, c, a[g], e);
                        return this
                    }
                    if (null == c && null == d ? (d = b,
                                c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
                                    c = void 0) : (d = c,
                                    c = b,
                                    b = void 0)),
                        d === !1)
                        d = $;
                    else if (!d)
                        return this;
                    return 1 === e && (f = d,
                        d = function(a) {
                            return n().off(a),
                                f.apply(this, arguments)
                        }
                        ,
                        d.guid = f.guid || (f.guid = n.guid++)),
                        this.each(function() {
                            n.event.add(this, a, d, c, b)
                        })
                },
                one: function(a, b, c, d) {
                    return this.on(a, b, c, d, 1)
                },
                off: function(a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj)
                        return d = a.handleObj,
                            n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                            this;
                    if ("object" == typeof a) {
                        for (e in a)
                            this.off(e, b, a[e]);
                        return this
                    }
                    return (b === !1 || "function" == typeof b) && (c = b,
                        b = void 0),
                    c === !1 && (c = $),
                        this.each(function() {
                            n.event.remove(this, a, c, b)
                        })
                },
                trigger: function(a, b) {
                    return this.each(function() {
                        n.event.trigger(a, b, this)
                    })
                },
                triggerHandler: function(a, b) {
                    var c = this[0];
                    return c ? n.event.trigger(a, b, c, !0) : void 0
                }
            });
        var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
            , ba = /<([\w:]+)/
            , ca = /<|&#?\w+;/
            , da = /<(?:script|style|link)/i
            , ea = /checked\s*(?:[^=]|=\s*.checked.)/i
            , fa = /^$|\/(?:java|ecma)script/i
            , ga = /^true\/(.*)/
            , ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
            , ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        ia.optgroup = ia.option,
            ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead,
            ia.th = ia.td,
            n.extend({
                clone: function(a, b, c) {
                    var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
                    if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                        for (g = oa(h),
                                 f = oa(a),
                                 d = 0,
                                 e = f.length; e > d; d++)
                            pa(f[d], g[d]);
                    if (b)
                        if (c)
                            for (f = f || oa(a),
                                     g = g || oa(h),
                                     d = 0,
                                     e = f.length; e > d; d++)
                                na(f[d], g[d]);
                        else
                            na(a, h);
                    return g = oa(h, "script"),
                    g.length > 0 && ma(g, !i && oa(a, "script")),
                        h
                },
                buildFragment: function(a, b, c, d) {
                    for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                        if (e = a[m],
                            e || 0 === e)
                            if ("object" === n.type(e))
                                n.merge(l, e.nodeType ? [e] : e);
                            else if (ca.test(e)) {
                                for (f = f || k.appendChild(b.createElement("div")),
                                         g = (ba.exec(e) || ["", ""])[1].toLowerCase(),
                                         h = ia[g] || ia._default,
                                         f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2],
                                         j = h[0]; j--; )
                                    f = f.lastChild;
                                n.merge(l, f.childNodes),
                                    f = k.firstChild,
                                    f.textContent = ""
                            } else
                                l.push(b.createTextNode(e));
                    for (k.textContent = "",
                             m = 0; e = l[m++]; )
                        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e),
                                f = oa(k.appendChild(e), "script"),
                            i && ma(f),
                                c))
                            for (j = 0; e = f[j++]; )
                                fa.test(e.type || "") && c.push(e);
                    return k
                },
                cleanData: function(a) {
                    for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                        if (n.acceptData(c) && (e = c[L.expando],
                            e && (b = L.cache[e]))) {
                            if (b.events)
                                for (d in b.events)
                                    f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                            L.cache[e] && delete L.cache[e]
                        }
                        delete M.cache[c[M.expando]]
                    }
                }
            }),
            n.fn.extend({
                text: function(a) {
                    return J(this, function(a) {
                        return void 0 === a ? n.text(this) : this.empty().each(function() {
                                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                            })
                    }, null, a, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = ja(this, a);
                            b.appendChild(a)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(a) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var b = ja(this, a);
                            b.insertBefore(a, b.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                    })
                },
                remove: function(a, b) {
                    for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                        b || 1 !== c.nodeType || n.cleanData(oa(c)),
                        c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")),
                            c.parentNode.removeChild(c));
                    return this
                },
                empty: function() {
                    for (var a, b = 0; null != (a = this[b]); b++)
                        1 === a.nodeType && (n.cleanData(oa(a, !1)),
                            a.textContent = "");
                    return this
                },
                clone: function(a, b) {
                    return a = null == a ? !1 : a,
                        b = null == b ? a : b,
                        this.map(function() {
                            return n.clone(this, a, b)
                        })
                },
                html: function(a) {
                    return J(this, function(a) {
                        var b = this[0] || {}
                            , c = 0
                            , d = this.length;
                        if (void 0 === a && 1 === b.nodeType)
                            return b.innerHTML;
                        if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                            a = a.replace(aa, "<$1></$2>");
                            try {
                                for (; d > c; c++)
                                    b = this[c] || {},
                                    1 === b.nodeType && (n.cleanData(oa(b, !1)),
                                        b.innerHTML = a);
                                b = 0
                            } catch (e) {}
                        }
                        b && this.empty().append(a)
                    }, null, a, arguments.length)
                },
                replaceWith: function() {
                    var a = arguments[0];
                    return this.domManip(arguments, function(b) {
                        a = this.parentNode,
                            n.cleanData(oa(this)),
                        a && a.replaceChild(b, this)
                    }),
                        a && (a.length || a.nodeType) ? this : this.remove()
                },
                detach: function(a) {
                    return this.remove(a, !0)
                },
                domManip: function(a, b) {
                    a = e.apply([], a);
                    var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
                    if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))
                        return this.each(function(c) {
                            var d = m.eq(c);
                            q && (a[0] = p.call(this, c, d.html())),
                                d.domManip(a, b)
                        });
                    if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this),
                            d = c.firstChild,
                        1 === c.childNodes.length && (c = d),
                            d)) {
                        for (f = n.map(oa(c, "script"), ka),
                                 g = f.length; l > j; j++)
                            h = c,
                            j !== o && (h = n.clone(h, !0, !0),
                            g && n.merge(f, oa(h, "script"))),
                                b.call(this[j], h, j);
                        if (g)
                            for (i = f[f.length - 1].ownerDocument,
                                     n.map(f, la),
                                     j = 0; g > j; j++)
                                h = f[j],
                                fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
                    }
                    return this
                }
            }),
            n.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(a, b) {
                n.fn[a] = function(a) {
                    for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                        c = h === g ? this : this.clone(!0),
                            n(e[h])[b](c),
                            f.apply(d, c.get());
                    return this.pushStack(d)
                }
            });
        var qa, ra = {}, ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$","i"), wa = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
        !function() {
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    f.innerHTML = "",
                    d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top,
                    c = "4px" === g.width,
                    d.removeChild(e)
            }
            var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
            f.style && (f.style.backgroundClip = "content-box",
                f.cloneNode(!0).style.backgroundClip = "",
                k.clearCloneStyle = "content-box" === f.style.backgroundClip,
                e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
                e.appendChild(f),
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(),
                        b
                },
                boxSizingReliable: function() {
                    return null == c && g(),
                        c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        c.style.marginRight = c.style.width = "0",
                        f.style.width = "1px",
                        d.appendChild(e),
                        b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                        d.removeChild(e),
                        f.removeChild(c),
                        b
                }
            }))
        }(),
            n.swap = function(a, b, c, d) {
                var e, f, g = {};
                for (f in b)
                    g[f] = a.style[f],
                        a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b)
                    a.style[f] = g[f];
                return e
            }
        ;
        var za = /^(none|table(?!-c[ea]).+)/
            , Aa = new RegExp("^(" + Q + ")(.*)$","i")
            , Ba = new RegExp("^([+-])=(" + Q + ")","i")
            , Ca = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
            , Da = {
            letterSpacing: "0",
            fontWeight: "400"
        }
            , Ea = ["Webkit", "O", "Moz", "ms"];
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = xa(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b), i = a.style;
                    return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)),
                        g = n.cssHooks[b] || n.cssHooks[h],
                        void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                            "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)),
                                f = "number"),
                                void (null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"),
                                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)),
                    g = n.cssHooks[b] || n.cssHooks[h],
                g && "get"in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = xa(a, b, d)),
                "normal" === e && b in Da && (e = Da[b]),
                    "" === c || c ? (f = parseFloat(e),
                            c === !0 || n.isNumeric(f) ? f || 0 : e) : e
            }
        }),
            n.each(["height", "width"], function(a, b) {
                n.cssHooks[b] = {
                    get: function(a, c, d) {
                        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                                    return Ia(a, b, d)
                                }) : Ia(a, b, d) : void 0
                    },
                    set: function(a, c, d) {
                        var e = d && wa(a);
                        return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                    }
                }
            }),
            n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
                return b ? n.swap(a, {
                        display: "inline-block"
                    }, xa, [a, "marginRight"]) : void 0
            }),
            n.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(a, b) {
                n.cssHooks[a + b] = {
                    expand: function(c) {
                        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                        return e
                    }
                },
                ua.test(a) || (n.cssHooks[a + b].set = Ga)
            }),
            n.fn.extend({
                css: function(a, b) {
                    return J(this, function(a, b, c) {
                        var d, e, f = {}, g = 0;
                        if (n.isArray(b)) {
                            for (d = wa(a),
                                     e = b.length; e > g; g++)
                                f[b[g]] = n.css(a, b[g], !1, d);
                            return f
                        }
                        return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                    }, a, b, arguments.length > 1)
                },
                show: function() {
                    return Ja(this, !0)
                },
                hide: function() {
                    return Ja(this)
                },
                toggle: function(a) {
                    return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                            S(this) ? n(this).show() : n(this).hide()
                        })
                }
            }),
            n.Tween = Ka,
            Ka.prototype = {
                constructor: Ka,
                init: function(a, b, c, d, e, f) {
                    this.elem = a,
                        this.prop = c,
                        this.easing = e || "swing",
                        this.options = b,
                        this.start = this.now = this.cur(),
                        this.end = d,
                        this.unit = f || (n.cssNumber[c] ? "" : "px")
                },
                cur: function() {
                    var a = Ka.propHooks[this.prop];
                    return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
                },
                run: function(a) {
                    var b, c = Ka.propHooks[this.prop];
                    return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
                        this.now = (this.end - this.start) * b + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                        c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
                        this
                }
            },
            Ka.prototype.init.prototype = Ka.prototype,
            Ka.propHooks = {
                _default: {
                    get: function(a) {
                        var b;
                        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""),
                                b && "auto" !== b ? b : 0) : a.elem[a.prop]
                    },
                    set: function(a) {
                        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                    }
                }
            },
            Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
                set: function(a) {
                    a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                }
            },
            n.easing = {
                linear: function(a) {
                    return a
                },
                swing: function(a) {
                    return .5 - Math.cos(a * Math.PI) / 2
                }
            },
            n.fx = Ka.prototype.init,
            n.fx.step = {};
        var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$","i"), Pa = /queueHooks$/, Qa = [Va], Ra = {
            "*": [function(a, b) {
                var c = this.createTween(a, b)
                    , d = c.cur()
                    , e = Oa.exec(b)
                    , f = e && e[3] || (n.cssNumber[a] ? "" : "px")
                    , g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a))
                    , h = 1
                    , i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3],
                        e = e || [],
                        g = +d || 1;
                    do
                        h = h || ".5",
                            g /= h,
                            n.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0,
                    c.unit = f,
                    c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
                    c
            }
            ]
        };
        n.Animation = n.extend(Xa, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a,
                        a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++)
                    c = a[d],
                        Ra[c] = Ra[c] || [],
                        Ra[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? Qa.unshift(a) : Qa.push(a)
            }
        }),
            n.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? n.extend({}, a) : {
                        complete: c || !c && b || n.isFunction(a) && a,
                        duration: a,
                        easing: c && b || b && !n.isFunction(b) && b
                    };
                return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
                (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                    d.old = d.complete,
                    d.complete = function() {
                        n.isFunction(d.old) && d.old.call(this),
                        d.queue && n.dequeue(this, d.queue)
                    }
                    ,
                    d
            }
            ,
            n.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(S).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = n.isEmptyObject(a)
                        , f = n.speed(b, c, d)
                        , g = function() {
                        var b = Xa(this, n.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0);
                    };
                    return g.finish = g,
                        e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop,
                            b(c)
                    };
                    return "string" != typeof a && (c = b,
                        b = a,
                        a = void 0),
                    b && a !== !1 && this.queue(a || "fx", []),
                        this.each(function() {
                            var b = !0
                                , e = null != a && a + "queueHooks"
                                , f = n.timers
                                , g = L.get(this);
                            if (e)
                                g[e] && g[e].stop && d(g[e]);
                            else
                                for (e in g)
                                    g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                            for (e = f.length; e--; )
                                f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                                    b = !1,
                                    f.splice(e, 1));
                            (b || !c) && n.dequeue(this, a)
                        })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"),
                        this.each(function() {
                            var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                            for (c.finish = !0,
                                     n.queue(this, a, []),
                                 e && e.stop && e.stop.call(this, !0),
                                     b = f.length; b--; )
                                f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                                    f.splice(b, 1));
                            for (b = 0; g > b; b++)
                                d[b] && d[b].finish && d[b].finish.call(this);
                            delete c.finish
                        })
                }
            }),
            n.each(["toggle", "show", "hide"], function(a, b) {
                var c = n.fn[b];
                n.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
                }
            }),
            n.each({
                slideDown: Ta("show"),
                slideUp: Ta("hide"),
                slideToggle: Ta("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                n.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }),
            n.timers = [],
            n.fx.tick = function() {
                var a, b = 0, c = n.timers;
                for (La = n.now(); b < c.length; b++)
                    a = c[b],
                    a() || c[b] !== a || c.splice(b--, 1);
                c.length || n.fx.stop(),
                    La = void 0
            }
            ,
            n.fx.timer = function(a) {
                n.timers.push(a),
                    a() ? n.fx.start() : n.timers.pop()
            }
            ,
            n.fx.interval = 13,
            n.fx.start = function() {
                Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
            }
            ,
            n.fx.stop = function() {
                clearInterval(Ma),
                    Ma = null
            }
            ,
            n.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            n.fn.delay = function(a, b) {
                return a = n.fx ? n.fx.speeds[a] || a : a,
                    b = b || "fx",
                    this.queue(b, function(b, c) {
                        var d = setTimeout(b, a);
                        c.stop = function() {
                            clearTimeout(d)
                        }
                    })
            }
            ,
            function() {
                var a = l.createElement("input")
                    , b = l.createElement("select")
                    , c = b.appendChild(l.createElement("option"));
                a.type = "checkbox",
                    k.checkOn = "" !== a.value,
                    k.optSelected = c.selected,
                    b.disabled = !0,
                    k.optDisabled = !c.disabled,
                    a = l.createElement("input"),
                    a.value = "t",
                    a.type = "radio",
                    k.radioValue = "t" === a.value
            }();
        var Ya, Za, $a = n.expr.attrHandle;
        n.fn.extend({
            attr: function(a, b) {
                return J(this, n.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    n.removeAttr(this, a)
                })
            }
        }),
            n.extend({
                attr: function(a, b, c) {
                    var d, e, f = a.nodeType;
                    return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                                d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
                                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b),
                                            null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                                                c) : void n.removeAttr(a, b)) : void 0
                },
                removeAttr: function(a, b) {
                    var c, d, e = 0, f = b && b.match(E);
                    if (f && 1 === a.nodeType)
                        for (; c = f[e++]; )
                            d = n.propFix[c] || c,
                            n.expr.match.bool.test(c) && (a[d] = !1),
                                a.removeAttribute(c)
                },
                attrHooks: {
                    type: {
                        set: function(a, b) {
                            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b),
                                c && (a.value = c),
                                    b
                            }
                        }
                    }
                }
            }),
            Za = {
                set: function(a, b, c) {
                    return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
                        c
                }
            },
            n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
                var c = $a[b] || n.find.attr;
                $a[b] = function(a, b, d) {
                    var e, f;
                    return d || (f = $a[b],
                        $a[b] = e,
                        e = null != c(a, b, d) ? b.toLowerCase() : null,
                        $a[b] = f),
                        e
                }
            });
        var _a = /^(?:input|select|textarea|button)$/i;
        n.fn.extend({
            prop: function(a, b) {
                return J(this, n.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[n.propFix[a] || a]
                })
            }
        }),
            n.extend({
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(a, b, c) {
                    var d, e, f, g = a.nodeType;
                    return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !n.isXMLDoc(a),
                        f && (b = n.propFix[b] || b,
                            e = n.propHooks[b]),
                            void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
                },
                propHooks: {
                    tabIndex: {
                        get: function(a) {
                            return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
                        }
                    }
                }
            }),
        k.optSelected || (n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex,
                    null
            }
        }),
            n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                n.propFix[this.toLowerCase()] = this
            });
        var ab = /[\t\r\n\f]/g;
        n.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
                if (n.isFunction(a))
                    return this.each(function(b) {
                        n(this).addClass(a.call(this, b, this.className))
                    });
                if (h)
                    for (b = (a || "").match(E) || []; j > i; i++)
                        if (c = this[i],
                                d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                            for (f = 0; e = b[f++]; )
                                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = n.trim(d),
                            c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
                if (n.isFunction(a))
                    return this.each(function(b) {
                        n(this).removeClass(a.call(this, b, this.className))
                    });
                if (h)
                    for (b = (a || "").match(E) || []; j > i; i++)
                        if (c = this[i],
                                d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                            for (f = 0; e = b[f++]; )
                                for (; d.indexOf(" " + e + " ") >= 0; )
                                    d = d.replace(" " + e + " ", " ");
                            g = a ? n.trim(d) : "",
                            c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                            n(this).toggleClass(a.call(this, c, this.className, b), b)
                        }
                        : function() {
                            if ("string" === c)
                                for (var b, d = 0, e = n(this), f = a.match(E) || []; b = f[d++]; )
                                    e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                            else
                                (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className),
                                    this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
                        }
                    )
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0)
                        return !0;
                return !1
            }
        });
        var bb = /\r/g;
        n.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = n.isFunction(a),
                        this.each(function(c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                                null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                                            return null == a ? "" : a + ""
                                        })),
                                b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                            b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                            b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                                    "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)) : void 0
            }
        }),
            n.extend({
                valHooks: {
                    option: {
                        get: function(a) {
                            var b = n.find.attr(a, "value");
                            return null != b ? b : n.trim(n.text(a))
                        }
                    },
                    select: {
                        get: function(a) {
                            for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                                if (c = d[i],
                                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                                    if (b = n(c).val(),
                                            f)
                                        return b;
                                    g.push(b)
                                }
                            return g
                        },
                        set: function(a, b) {
                            for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--; )
                                d = e[g],
                                (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                            return c || (a.selectedIndex = -1),
                                f
                        }
                    }
                }
            }),
            n.each(["radio", "checkbox"], function() {
                n.valHooks[this] = {
                    set: function(a, b) {
                        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
                    }
                },
                k.checkOn || (n.valHooks[this].get = function(a) {
                        return null === a.getAttribute("value") ? "on" : a.value
                    }
                )
            }),
            n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
                n.fn[b] = function(a, c) {
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                }
            }),
            n.fn.extend({
                hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a)
                },
                bind: function(a, b, c) {
                    return this.on(a, null, b, c)
                },
                unbind: function(a, b) {
                    return this.off(a, null, b)
                },
                delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d)
                },
                undelegate: function(a, b, c) {
                    return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                }
            });
        var cb = n.now()
            , db = /\?/;
        n.parseJSON = function(a) {
            return JSON.parse(a + "")
        }
            ,
            n.parseXML = function(a) {
                var b, c;
                if (!a || "string" != typeof a)
                    return null;
                try {
                    c = new DOMParser,
                        b = c.parseFromString(a, "text/xml")
                } catch (d) {
                    b = void 0
                }
                return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a),
                    b
            }
        ;
        var eb = /#.*$/
            , fb = /([?&])_=[^&]*/
            , gb = /^(.*?):[ \t]*([^\r\n]*)$/gm
            , hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
            , ib = /^(?:GET|HEAD)$/
            , jb = /^\/\//
            , kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
            , lb = {}
            , mb = {}
            , nb = "*/".concat("*")
            , ob = a.location.href
            , pb = kb.exec(ob.toLowerCase()) || [];
        n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ob,
                type: "GET",
                isLocal: hb.test(pb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": nb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
            },
            ajaxPrefilter: qb(lb),
            ajaxTransport: qb(mb),
            ajax: function(a, b) {
                function x(a, b, f, h) {
                    var j, r, s, u, w, x = b;
                    2 !== t && (t = 2,
                    g && clearTimeout(g),
                        c = void 0,
                        e = h || "",
                        v.readyState = a > 0 ? 4 : 0,
                        j = a >= 200 && 300 > a || 304 === a,
                    f && (u = tb(k, v, f)),
                        u = ub(k, u, v, j),
                        j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                            w && (n.lastModified[d] = w),
                                w = v.getResponseHeader("etag"),
                            w && (n.etag[d] = w)),
                                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                                            r = u.data,
                                            s = u.error,
                                            j = !s)) : (s = x,
                            (a || !x) && (x = "error",
                            0 > a && (a = 0))),
                        v.status = a,
                        v.statusText = (b || x) + "",
                        j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                        v.statusCode(q),
                        q = void 0,
                    i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                        p.fireWith(l, [v, x]),
                    i && (m.trigger("ajaxComplete", [v, k]),
                    --n.active || n.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a,
                    a = void 0),
                    b = b || {};
                var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f)
                                for (f = {}; b = gb.exec(e); )
                                    f[b[1].toLowerCase()] = b[2];
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a,
                            r[a] = b),
                            this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a),
                            this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a)
                                    q[b] = [q[b], a[b]];
                            else
                                v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b),
                            x(0, b),
                            this
                    }
                };
                if (o.promise(v).complete = p.add,
                        v.success = v.done,
                        v.error = v.fail,
                        k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"),
                        k.type = b.method || b.type || k.method || k.type,
                        k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""],
                    null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()),
                        k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))),
                    k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)),
                        rb(lb, k, b, v),
                    2 === t)
                    return v;
                i = n.event && k.global,
                i && 0 === n.active++ && n.event.trigger("ajaxStart"),
                    k.type = k.type.toUpperCase(),
                    k.hasContent = !ib.test(k.type),
                    d = k.url,
                k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data,
                    delete k.data),
                k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
                k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
                n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
                (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
                    v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
                for (j in k.headers)
                    v.setRequestHeader(j, k.headers[j]);
                if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                    return v.abort();
                u = "abort";
                for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    v[j](k[j]);
                if (c = rb(mb, k, b, v)) {
                    v.readyState = 1,
                    i && m.trigger("ajaxSend", [v, k]),
                    k.async && k.timeout > 0 && (g = setTimeout(function() {
                        v.abort("timeout")
                    }, k.timeout));
                    try {
                        t = 1,
                            c.send(r, x)
                    } catch (w) {
                        if (!(2 > t))
                            throw w;
                        x(-1, w)
                    }
                } else
                    x(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script")
            }
        }),
            n.each(["get", "post"], function(a, b) {
                n[b] = function(a, c, d, e) {
                    return n.isFunction(c) && (e = e || d,
                        d = c,
                        c = void 0),
                        n.ajax({
                            url: a,
                            type: b,
                            dataType: e,
                            data: c,
                            success: d
                        })
                }
            }),
            n._evalUrl = function(a) {
                return n.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
            ,
            n.fn.extend({
                wrapAll: function(a) {
                    var b;
                    return n.isFunction(a) ? this.each(function(b) {
                            n(this).wrapAll(a.call(this, b))
                        }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && b.insertBefore(this[0]),
                            b.map(function() {
                                for (var a = this; a.firstElementChild; )
                                    a = a.firstElementChild;
                                return a
                            }).append(this)),
                            this)
                },
                wrapInner: function(a) {
                    return this.each(n.isFunction(a) ? function(b) {
                            n(this).wrapInner(a.call(this, b))
                        }
                        : function() {
                            var b = n(this)
                                , c = b.contents();
                            c.length ? c.wrapAll(a) : b.append(a)
                        }
                    )
                },
                wrap: function(a) {
                    var b = n.isFunction(a);
                    return this.each(function(c) {
                        n(this).wrapAll(b ? a.call(this, c) : a)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            n.expr.filters.hidden = function(a) {
                return a.offsetWidth <= 0 && a.offsetHeight <= 0
            }
            ,
            n.expr.filters.visible = function(a) {
                return !n.expr.filters.hidden(a)
            }
        ;
        var vb = /%20/g
            , wb = /\[\]$/
            , xb = /\r?\n/g
            , yb = /^(?:submit|button|image|reset|file)$/i
            , zb = /^(?:input|select|textarea|keygen)/i;
        n.param = function(a, b) {
            var c, d = [], e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b,
                    d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
                n.isArray(a) || a.jquery && !n.isPlainObject(a))
                n.each(a, function() {
                    e(this.name, this.value)
                });
            else
                for (c in a)
                    Ab(c, a[c], b, e);
            return d.join("&").replace(vb, "+")
        }
            ,
            n.fn.extend({
                serialize: function() {
                    return n.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var a = n.prop(this, "elements");
                        return a ? n.makeArray(a) : this
                    }).filter(function() {
                        var a = this.type;
                        return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
                    }).map(function(a, b) {
                        var c = n(this).val();
                        return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                                    return {
                                        name: b.name,
                                        value: a.replace(xb, "\r\n")
                                    }
                                }) : {
                                    name: b.name,
                                    value: c.replace(xb, "\r\n")
                                }
                    }).get()
                }
            }),
            n.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest
                } catch (a) {}
            }
        ;
        var Bb = 0
            , Cb = {}
            , Db = {
            0: 200,
            1223: 204
        }
            , Eb = n.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in Cb)
                Cb[a]()
        }),
            k.cors = !!Eb && "withCredentials"in Eb,
            k.ajax = Eb = !!Eb,
            n.ajaxTransport(function(a) {
                var b;
                return k.cors || Eb && !a.crossDomain ? {
                        send: function(c, d) {
                            var e, f = a.xhr(), g = ++Bb;
                            if (f.open(a.type, a.url, a.async, a.username, a.password),
                                    a.xhrFields)
                                for (e in a.xhrFields)
                                    f[e] = a.xhrFields[e];
                            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                            a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                            for (e in c)
                                f.setRequestHeader(e, c[e]);
                            b = function(a) {
                                return function() {
                                    b && (delete Cb[g],
                                        b = f.onload = f.onerror = null,
                                        "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                                        text: f.responseText
                                                    } : void 0, f.getAllResponseHeaders()))
                                }
                            }
                                ,
                                f.onload = b(),
                                f.onerror = b("error"),
                                b = Cb[g] = b("abort");
                            try {
                                f.send(a.hasContent && a.data || null)
                            } catch (h) {
                                if (b)
                                    throw h
                            }
                        },
                        abort: function() {
                            b && b()
                        }
                    } : void 0
            }),
            n.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(a) {
                        return n.globalEval(a),
                            a
                    }
                }
            }),
            n.ajaxPrefilter("script", function(a) {
                void 0 === a.cache && (a.cache = !1),
                a.crossDomain && (a.type = "GET")
            }),
            n.ajaxTransport("script", function(a) {
                if (a.crossDomain) {
                    var b, c;
                    return {
                        send: function(d, e) {
                            b = n("<script>").prop({
                                async: !0,
                                charset: a.scriptCharset,
                                src: a.url
                            }).on("load error", c = function(a) {
                                    b.remove(),
                                        c = null,
                                    a && e("error" === a.type ? 404 : 200, a.type)
                                }
                            ),
                                l.head.appendChild(b[0])
                        },
                        abort: function() {
                            c && c()
                        }
                    }
                }
            });
        var Fb = []
            , Gb = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Fb.pop() || n.expando + "_" + cb++;
                return this[a] = !0,
                    a
            }
        }),
            n.ajaxPrefilter("json jsonp", function(b, c, d) {
                var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
                return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                        h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                        b.converters["script json"] = function() {
                            return g || n.error(e + " was not called"),
                                g[0]
                        }
                        ,
                        b.dataTypes[0] = "json",
                        f = a[e],
                        a[e] = function() {
                            g = arguments
                        }
                        ,
                        d.always(function() {
                            a[e] = f,
                            b[e] && (b.jsonpCallback = c.jsonpCallback,
                                Fb.push(e)),
                            g && n.isFunction(f) && f(g[0]),
                                g = f = void 0
                        }),
                        "script") : void 0
            }),
            n.parseHTML = function(a, b, c) {
                if (!a || "string" != typeof a)
                    return null;
                "boolean" == typeof b && (c = b,
                    b = !1),
                    b = b || l;
                var d = v.exec(a)
                    , e = !c && [];
                return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e),
                    e && e.length && n(e).remove(),
                        n.merge([], d.childNodes))
            }
        ;
        var Hb = n.fn.load;
        n.fn.load = function(a, b, c) {
            if ("string" != typeof a && Hb)
                return Hb.apply(this, arguments);
            var d, e, f, g = this, h = a.indexOf(" ");
            return h >= 0 && (d = n.trim(a.slice(h)),
                a = a.slice(0, h)),
                n.isFunction(b) ? (c = b,
                        b = void 0) : b && "object" == typeof b && (e = "POST"),
            g.length > 0 && n.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments,
                    g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                    g.each(c, f || [a.responseText, b, a])
                }
            ),
                this
        }
            ,
            n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
                n.fn[b] = function(a) {
                    return this.on(b, a)
                }
            }),
            n.expr.filters.animated = function(a) {
                return n.grep(n.timers, function(b) {
                    return a === b.elem
                }).length
            }
        ;
        var Ib = a.document.documentElement;
        n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
                "static" === k && (a.style.position = "relative"),
                    h = l.offset(),
                    f = n.css(a, "top"),
                    i = n.css(a, "left"),
                    j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
                    j ? (d = l.position(),
                            g = d.top,
                            e = d.left) : (g = parseFloat(f) || 0,
                            e = parseFloat(i) || 0),
                n.isFunction(b) && (b = b.call(a, c, h)),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                    "using"in b ? b.using.call(a, m) : l.css(m)
            }
        },
            n.fn.extend({
                offset: function(a) {
                    if (arguments.length)
                        return void 0 === a ? this : this.each(function(b) {
                                n.offset.setOffset(this, a, b)
                            });
                    var b, c, d = this[0], e = {
                        top: 0,
                        left: 0
                    }, f = d && d.ownerDocument;
                    return f ? (b = f.documentElement,
                            n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()),
                                    c = Jb(f),
                                    {
                                        top: e.top + c.pageYOffset - b.clientTop,
                                        left: e.left + c.pageXOffset - b.clientLeft
                                    }) : e) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var a, b, c = this[0], d = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                                b = this.offset(),
                            n.nodeName(a[0], "html") || (d = a.offset()),
                                d.top += n.css(a[0], "borderTopWidth", !0),
                                d.left += n.css(a[0], "borderLeftWidth", !0)),
                            {
                                top: b.top - d.top - n.css(c, "marginTop", !0),
                                left: b.left - d.left - n.css(c, "marginLeft", !0)
                            }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var a = this.offsetParent || Ib; a && !n.nodeName(a, "html") && "static" === n.css(a, "position"); )
                            a = a.offsetParent;
                        return a || Ib
                    })
                }
            }),
            n.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(b, c) {
                var d = "pageYOffset" === c;
                n.fn[b] = function(e) {
                    return J(this, function(b, e, f) {
                        var g = Jb(b);
                        return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                    }, b, e, arguments.length, null)
                }
            }),
            n.each(["top", "left"], function(a, b) {
                n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
                    return c ? (c = xa(a, b),
                            va.test(c) ? n(a).position()[b] + "px" : c) : void 0
                })
            }),
            n.each({
                Height: "height",
                Width: "width"
            }, function(a, b) {
                n.each({
                    padding: "inner" + a,
                    content: b,
                    "": "outer" + a
                }, function(c, d) {
                    n.fn[d] = function(d, e) {
                        var f = arguments.length && (c || "boolean" != typeof d)
                            , g = c || (d === !0 || e === !0 ? "margin" : "border");
                        return J(this, function(b, c, d) {
                            var e;
                            return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                                        Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                        }, b, f ? d : void 0, f, null)
                    }
                })
            }),
            n.fn.size = function() {
                return this.length
            }
            ,
            n.fn.andSelf = n.fn.addBack,
        "function" == typeof define && define.amd && define("jquery", [], function() {
            return n
        });
        var Kb = a.jQuery
            , Lb = a.$;
        return n.noConflict = function(b) {
            return a.$ === n && (a.$ = Lb),
            b && a.jQuery === n && (a.jQuery = Kb),
                n
        }
            ,
        typeof b === U && (a.jQuery = a.$ = n),
            n
    }),
    function() {
        var root = this
            , previousUnderscore = root._
            , breaker = {}
            , ArrayProto = Array.prototype
            , ObjProto = Object.prototype
            , FuncProto = Function.prototype
            , push = ArrayProto.push
            , slice = ArrayProto.slice
            , concat = ArrayProto.concat
            , toString = ObjProto.toString
            , hasOwnProperty = ObjProto.hasOwnProperty
            , nativeForEach = ArrayProto.forEach
            , nativeMap = ArrayProto.map
            , nativeReduce = ArrayProto.reduce
            , nativeReduceRight = ArrayProto.reduceRight
            , nativeFilter = ArrayProto.filter
            , nativeEvery = ArrayProto.every
            , nativeSome = ArrayProto.some
            , nativeIndexOf = ArrayProto.indexOf
            , nativeLastIndexOf = ArrayProto.lastIndexOf
            , nativeIsArray = Array.isArray
            , nativeKeys = Object.keys
            , nativeBind = FuncProto.bind
            , _ = function(obj) {
            return obj instanceof _ ? obj : this instanceof _ ? void (this._wrapped = obj) : new _(obj)
        };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _),
                exports._ = _) : root._ = _,
            _.VERSION = "1.4.4";
        var each = _.each = _.forEach = function(obj, iterator, context) {
                if (null != obj)
                    if (nativeForEach && obj.forEach === nativeForEach)
                        obj.forEach(iterator, context);
                    else if (obj.length === +obj.length) {
                        for (var i = 0, l = obj.length; l > i; i++)
                            if (iterator.call(context, obj[i], i, obj) === breaker)
                                return
                    } else
                        for (var key in obj)
                            if (_.has(obj, key) && iterator.call(context, obj[key], key, obj) === breaker)
                                return
            }
            ;
        _.map = _.collect = function(obj, iterator, context) {
            var results = [];
            return null == obj ? results : nativeMap && obj.map === nativeMap ? obj.map(iterator, context) : (each(obj, function(value, index, list) {
                        results[results.length] = iterator.call(context, value, index, list)
                    }),
                        results)
        }
        ;
        var reduceError = "Reduce of empty array with no initial value";
        _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
            var initial = arguments.length > 2;
            if (null == obj && (obj = []),
                nativeReduce && obj.reduce === nativeReduce)
                return context && (iterator = _.bind(iterator, context)),
                    initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
            if (each(obj, function(value, index, list) {
                    initial ? memo = iterator.call(context, memo, value, index, list) : (memo = value,
                            initial = !0)
                }),
                    !initial)
                throw new TypeError(reduceError);
            return memo
        }
            ,
            _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
                var initial = arguments.length > 2;
                if (null == obj && (obj = []),
                    nativeReduceRight && obj.reduceRight === nativeReduceRight)
                    return context && (iterator = _.bind(iterator, context)),
                        initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
                var length = obj.length;
                if (length !== +length) {
                    var keys = _.keys(obj);
                    length = keys.length
                }
                if (each(obj, function(value, index, list) {
                        index = keys ? keys[--length] : --length,
                            initial ? memo = iterator.call(context, memo, obj[index], index, list) : (memo = obj[index],
                                    initial = !0)
                    }),
                        !initial)
                    throw new TypeError(reduceError);
                return memo
            }
            ,
            _.find = _.detect = function(obj, iterator, context) {
                var result;
                return any(obj, function(value, index, list) {
                    return iterator.call(context, value, index, list) ? (result = value,
                            !0) : void 0
                }),
                    result
            }
            ,
            _.filter = _.select = function(obj, iterator, context) {
                var results = [];
                return null == obj ? results : nativeFilter && obj.filter === nativeFilter ? obj.filter(iterator, context) : (each(obj, function(value, index, list) {
                            iterator.call(context, value, index, list) && (results[results.length] = value)
                        }),
                            results)
            }
            ,
            _.reject = function(obj, iterator, context) {
                return _.filter(obj, function(value, index, list) {
                    return !iterator.call(context, value, index, list)
                }, context)
            }
            ,
            _.every = _.all = function(obj, iterator, context) {
                iterator || (iterator = _.identity);
                var result = !0;
                return null == obj ? result : nativeEvery && obj.every === nativeEvery ? obj.every(iterator, context) : (each(obj, function(value, index, list) {
                            return (result = result && iterator.call(context, value, index, list)) ? void 0 : breaker
                        }),
                            !!result)
            }
        ;
        var any = _.some = _.any = function(obj, iterator, context) {
                iterator || (iterator = _.identity);
                var result = !1;
                return null == obj ? result : nativeSome && obj.some === nativeSome ? obj.some(iterator, context) : (each(obj, function(value, index, list) {
                            return result || (result = iterator.call(context, value, index, list)) ? breaker : void 0
                        }),
                            !!result)
            }
            ;
        _.contains = _.include = function(obj, target) {
            return null == obj ? !1 : nativeIndexOf && obj.indexOf === nativeIndexOf ? -1 != obj.indexOf(target) : any(obj, function(value) {
                        return value === target
                    })
        }
            ,
            _.invoke = function(obj, method) {
                var args = slice.call(arguments, 2)
                    , isFunc = _.isFunction(method);
                return _.map(obj, function(value) {
                    return (isFunc ? method : value[method]).apply(value, args)
                })
            }
            ,
            _.pluck = function(obj, key) {
                return _.map(obj, function(value) {
                    return value[key]
                })
            }
            ,
            _.where = function(obj, attrs, first) {
                return _.isEmpty(attrs) ? first ? null : [] : _[first ? "find" : "filter"](obj, function(value) {
                        for (var key in attrs)
                            if (attrs[key] !== value[key])
                                return !1;
                        return !0
                    })
            }
            ,
            _.findWhere = function(obj, attrs) {
                return _.where(obj, attrs, !0)
            }
            ,
            _.max = function(obj, iterator, context) {
                if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535)
                    return Math.max.apply(Math, obj);
                if (!iterator && _.isEmpty(obj))
                    return -(1 / 0);
                var result = {
                    computed: -(1 / 0),
                    value: -(1 / 0)
                };
                return each(obj, function(value, index, list) {
                    var computed = iterator ? iterator.call(context, value, index, list) : value;
                    computed >= result.computed && (result = {
                        value: value,
                        computed: computed
                    })
                }),
                    result.value
            }
            ,
            _.min = function(obj, iterator, context) {
                if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535)
                    return Math.min.apply(Math, obj);
                if (!iterator && _.isEmpty(obj))
                    return 1 / 0;
                var result = {
                    computed: 1 / 0,
                    value: 1 / 0
                };
                return each(obj, function(value, index, list) {
                    var computed = iterator ? iterator.call(context, value, index, list) : value;
                    computed < result.computed && (result = {
                        value: value,
                        computed: computed
                    })
                }),
                    result.value
            }
            ,
            _.shuffle = function(obj) {
                var rand, index = 0, shuffled = [];
                return each(obj, function(value) {
                    rand = _.random(index++),
                        shuffled[index - 1] = shuffled[rand],
                        shuffled[rand] = value
                }),
                    shuffled
            }
        ;
        var lookupIterator = function(value) {
            return _.isFunction(value) ? value : function(obj) {
                    return obj[value]
                }
        };
        _.sortBy = function(obj, value, context) {
            var iterator = lookupIterator(value);
            return _.pluck(_.map(obj, function(value, index, list) {
                return {
                    value: value,
                    index: index,
                    criteria: iterator.call(context, value, index, list)
                }
            }).sort(function(left, right) {
                var a = left.criteria
                    , b = right.criteria;
                if (a !== b) {
                    if (a > b || void 0 === a)
                        return 1;
                    if (b > a || void 0 === b)
                        return -1
                }
                return left.index < right.index ? -1 : 1
            }), "value")
        }
        ;
        var group = function(obj, value, context, behavior) {
            var result = {}
                , iterator = lookupIterator(value || _.identity);
            return each(obj, function(value, index) {
                var key = iterator.call(context, value, index, obj);
                behavior(result, key, value)
            }),
                result
        };
        _.groupBy = function(obj, value, context) {
            return group(obj, value, context, function(result, key, value) {
                (_.has(result, key) ? result[key] : result[key] = []).push(value)
            })
        }
            ,
            _.countBy = function(obj, value, context) {
                return group(obj, value, context, function(result, key) {
                    _.has(result, key) || (result[key] = 0),
                        result[key]++
                })
            }
            ,
            _.sortedIndex = function(array, obj, iterator, context) {
                iterator = null == iterator ? _.identity : lookupIterator(iterator);
                for (var value = iterator.call(context, obj), low = 0, high = array.length; high > low; ) {
                    var mid = low + high >>> 1;
                    iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid
                }
                return low
            }
            ,
            _.toArray = function(obj) {
                return obj ? _.isArray(obj) ? slice.call(obj) : obj.length === +obj.length ? _.map(obj, _.identity) : _.values(obj) : []
            }
            ,
            _.size = function(obj) {
                return null == obj ? 0 : obj.length === +obj.length ? obj.length : _.keys(obj).length
            }
            ,
            _.first = _.head = _.take = function(array, n, guard) {
                return null == array ? void 0 : null == n || guard ? array[0] : slice.call(array, 0, n)
            }
            ,
            _.initial = function(array, n, guard) {
                return slice.call(array, 0, array.length - (null == n || guard ? 1 : n))
            }
            ,
            _.last = function(array, n, guard) {
                return null == array ? void 0 : null == n || guard ? array[array.length - 1] : slice.call(array, Math.max(array.length - n, 0))
            }
            ,
            _.rest = _.tail = _.drop = function(array, n, guard) {
                return slice.call(array, null == n || guard ? 1 : n)
            }
            ,
            _.compact = function(array) {
                return _.filter(array, _.identity)
            }
        ;
        var flatten = function(input, shallow, output) {
            return each(input, function(value) {
                _.isArray(value) ? shallow ? push.apply(output, value) : flatten(value, shallow, output) : output.push(value)
            }),
                output
        };
        _.flatten = function(array, shallow) {
            return flatten(array, shallow, [])
        }
            ,
            _.without = function(array) {
                return _.difference(array, slice.call(arguments, 1))
            }
            ,
            _.uniq = _.unique = function(array, isSorted, iterator, context) {
                _.isFunction(isSorted) && (context = iterator,
                    iterator = isSorted,
                    isSorted = !1);
                var initial = iterator ? _.map(array, iterator, context) : array
                    , results = []
                    , seen = [];
                return each(initial, function(value, index) {
                    (isSorted ? index && seen[seen.length - 1] === value : _.contains(seen, value)) || (seen.push(value),
                        results.push(array[index]))
                }),
                    results
            }
            ,
            _.union = function() {
                return _.uniq(concat.apply(ArrayProto, arguments))
            }
            ,
            _.intersection = function(array) {
                var rest = slice.call(arguments, 1);
                return _.filter(_.uniq(array), function(item) {
                    return _.every(rest, function(other) {
                        return _.indexOf(other, item) >= 0
                    })
                })
            }
            ,
            _.difference = function(array) {
                var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
                return _.filter(array, function(value) {
                    return !_.contains(rest, value)
                })
            }
            ,
            _.zip = function() {
                for (var args = slice.call(arguments), length = _.max(_.pluck(args, "length")), results = new Array(length), i = 0; length > i; i++)
                    results[i] = _.pluck(args, "" + i);
                return results
            }
            ,
            _.object = function(list, values) {
                if (null == list)
                    return {};
                for (var result = {}, i = 0, l = list.length; l > i; i++)
                    values ? result[list[i]] = values[i] : result[list[i][0]] = list[i][1];
                return result
            }
            ,
            _.indexOf = function(array, item, isSorted) {
                if (null == array)
                    return -1;
                var i = 0
                    , l = array.length;
                if (isSorted) {
                    if ("number" != typeof isSorted)
                        return i = _.sortedIndex(array, item),
                            array[i] === item ? i : -1;
                    i = 0 > isSorted ? Math.max(0, l + isSorted) : isSorted
                }
                if (nativeIndexOf && array.indexOf === nativeIndexOf)
                    return array.indexOf(item, isSorted);
                for (; l > i; i++)
                    if (array[i] === item)
                        return i;
                return -1
            }
            ,
            _.lastIndexOf = function(array, item, from) {
                if (null == array)
                    return -1;
                var hasIndex = null != from;
                if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf)
                    return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
                for (var i = hasIndex ? from : array.length; i--; )
                    if (array[i] === item)
                        return i;
                return -1
            }
            ,
            _.range = function(start, stop, step) {
                arguments.length <= 1 && (stop = start || 0,
                    start = 0),
                    step = arguments[2] || 1;
                for (var len = Math.max(Math.ceil((stop - start) / step), 0), idx = 0, range = new Array(len); len > idx; )
                    range[idx++] = start,
                        start += step;
                return range
            }
            ,
            _.bind = function(func, context) {
                if (func.bind === nativeBind && nativeBind)
                    return nativeBind.apply(func, slice.call(arguments, 1));
                var args = slice.call(arguments, 2);
                return function() {
                    return func.apply(context, args.concat(slice.call(arguments)))
                }
            }
            ,
            _.partial = function(func) {
                var args = slice.call(arguments, 1);
                return function() {
                    return func.apply(this, args.concat(slice.call(arguments)))
                }
            }
            ,
            _.bindAll = function(obj) {
                var funcs = slice.call(arguments, 1);
                return 0 === funcs.length && (funcs = _.functions(obj)),
                    each(funcs, function(f) {
                        obj[f] = _.bind(obj[f], obj)
                    }),
                    obj
            }
            ,
            _.memoize = function(func, hasher) {
                var memo = {};
                return hasher || (hasher = _.identity),
                    function() {
                        var key = hasher.apply(this, arguments);
                        return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments)
                    }
            }
            ,
            _.delay = function(func, wait) {
                var args = slice.call(arguments, 2);
                return setTimeout(function() {
                    return func.apply(null, args)
                }, wait)
            }
            ,
            _.defer = function(func) {
                return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)))
            }
            ,
            _.throttle = function(func, wait) {
                var context, args, timeout, result, previous = 0, later = function() {
                    previous = new Date,
                        timeout = null,
                        result = func.apply(context, args)
                };
                return function() {
                    var now = new Date
                        , remaining = wait - (now - previous);
                    return context = this,
                        args = arguments,
                        0 >= remaining ? (clearTimeout(timeout),
                                timeout = null,
                                previous = now,
                                result = func.apply(context, args)) : timeout || (timeout = setTimeout(later, remaining)),
                        result
                }
            }
            ,
            _.debounce = function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this
                        , args = arguments
                        , later = function() {
                        timeout = null,
                        immediate || (result = func.apply(context, args))
                    }
                        , callNow = immediate && !timeout;
                    return clearTimeout(timeout),
                        timeout = setTimeout(later, wait),
                    callNow && (result = func.apply(context, args)),
                        result
                }
            }
            ,
            _.once = function(func) {
                var memo, ran = !1;
                return function() {
                    return ran ? memo : (ran = !0,
                            memo = func.apply(this, arguments),
                            func = null,
                            memo)
                }
            }
            ,
            _.wrap = function(func, wrapper) {
                return function() {
                    var args = [func];
                    return push.apply(args, arguments),
                        wrapper.apply(this, args)
                }
            }
            ,
            _.compose = function() {
                var funcs = arguments;
                return function() {
                    for (var args = arguments, i = funcs.length - 1; i >= 0; i--)
                        args = [funcs[i].apply(this, args)];
                    return args[0]
                }
            }
            ,
            _.after = function(times, func) {
                return 0 >= times ? func() : function() {
                        return --times < 1 ? func.apply(this, arguments) : void 0
                    }
            }
            ,
            _.keys = nativeKeys || function(obj) {
                    if (obj !== Object(obj))
                        throw new TypeError("Invalid object");
                    var keys = [];
                    for (var key in obj)
                        _.has(obj, key) && (keys[keys.length] = key);
                    return keys
                }
            ,
            _.values = function(obj) {
                var values = [];
                for (var key in obj)
                    _.has(obj, key) && values.push(obj[key]);
                return values
            }
            ,
            _.pairs = function(obj) {
                var pairs = [];
                for (var key in obj)
                    _.has(obj, key) && pairs.push([key, obj[key]]);
                return pairs
            }
            ,
            _.invert = function(obj) {
                var result = {};
                for (var key in obj)
                    _.has(obj, key) && (result[obj[key]] = key);
                return result
            }
            ,
            _.functions = _.methods = function(obj) {
                var names = [];
                for (var key in obj)
                    _.isFunction(obj[key]) && names.push(key);
                return names.sort()
            }
            ,
            _.extend = function(obj) {
                return each(slice.call(arguments, 1), function(source) {
                    if (source)
                        for (var prop in source)
                            obj[prop] = source[prop]
                }),
                    obj
            }
            ,
            _.pick = function(obj) {
                var copy = {}
                    , keys = concat.apply(ArrayProto, slice.call(arguments, 1));
                return each(keys, function(key) {
                    key in obj && (copy[key] = obj[key])
                }),
                    copy
            }
            ,
            _.omit = function(obj) {
                var copy = {}
                    , keys = concat.apply(ArrayProto, slice.call(arguments, 1));
                for (var key in obj)
                    _.contains(keys, key) || (copy[key] = obj[key]);
                return copy
            }
            ,
            _.defaults = function(obj) {
                return each(slice.call(arguments, 1), function(source) {
                    if (source)
                        for (var prop in source)
                            null == obj[prop] && (obj[prop] = source[prop])
                }),
                    obj
            }
            ,
            _.clone = function(obj) {
                return _.isObject(obj) ? _.isArray(obj) ? obj.slice() : _.extend({}, obj) : obj
            }
            ,
            _.tap = function(obj, interceptor) {
                return interceptor(obj),
                    obj
            }
        ;
        var eq = function(a, b, aStack, bStack) {
            if (a === b)
                return 0 !== a || 1 / a == 1 / b;
            if (null == a || null == b)
                return a === b;
            a instanceof _ && (a = a._wrapped),
            b instanceof _ && (b = b._wrapped);
            var className = toString.call(a);
            if (className != toString.call(b))
                return !1;
            switch (className) {
                case "[object String]":
                    return a == String(b);
                case "[object Number]":
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case "[object Date]":
                case "[object Boolean]":
                    return +a == +b;
                case "[object RegExp]":
                    return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
            }
            if ("object" != typeof a || "object" != typeof b)
                return !1;
            for (var length = aStack.length; length--; )
                if (aStack[length] == a)
                    return bStack[length] == b;
            aStack.push(a),
                bStack.push(b);
            var size = 0
                , result = !0;
            if ("[object Array]" == className) {
                if (size = a.length,
                        result = size == b.length)
                    for (; size-- && (result = eq(a[size], b[size], aStack, bStack)); )
                        ;
            } else {
                var aCtor = a.constructor
                    , bCtor = b.constructor;
                if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor))
                    return !1;
                for (var key in a)
                    if (_.has(a, key) && (size++,
                            !(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))))
                        break;
                if (result) {
                    for (key in b)
                        if (_.has(b, key) && !size--)
                            break;
                    result = !size
                }
            }
            return aStack.pop(),
                bStack.pop(),
                result
        };
        _.isEqual = function(a, b) {
            return eq(a, b, [], [])
        }
            ,
            _.isEmpty = function(obj) {
                if (null == obj)
                    return !0;
                if (_.isArray(obj) || _.isString(obj))
                    return 0 === obj.length;
                for (var key in obj)
                    if (_.has(obj, key))
                        return !1;
                return !0
            }
            ,
            _.isElement = function(obj) {
                return !(!obj || 1 !== obj.nodeType)
            }
            ,
            _.isArray = nativeIsArray || function(obj) {
                    return "[object Array]" == toString.call(obj)
                }
            ,
            _.isObject = function(obj) {
                return obj === Object(obj)
            }
            ,
            each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(name) {
                _["is" + name] = function(obj) {
                    return toString.call(obj) == "[object " + name + "]"
                }
            }),
        _.isArguments(arguments) || (_.isArguments = function(obj) {
                return !(!obj || !_.has(obj, "callee"))
            }
        ),
        "function" != typeof /./ && (_.isFunction = function(obj) {
                return "function" == typeof obj
            }
        ),
            _.isFinite = function(obj) {
                return isFinite(obj) && !isNaN(parseFloat(obj))
            }
            ,
            _.isNaN = function(obj) {
                return _.isNumber(obj) && obj != +obj
            }
            ,
            _.isBoolean = function(obj) {
                return obj === !0 || obj === !1 || "[object Boolean]" == toString.call(obj)
            }
            ,
            _.isNull = function(obj) {
                return null === obj
            }
            ,
            _.isUndefined = function(obj) {
                return void 0 === obj
            }
            ,
            _.has = function(obj, key) {
                return hasOwnProperty.call(obj, key)
            }
            ,
            _.noConflict = function() {
                return root._ = previousUnderscore,
                    this
            }
            ,
            _.identity = function(value) {
                return value
            }
            ,
            _.times = function(n, iterator, context) {
                for (var accum = Array(n), i = 0; n > i; i++)
                    accum[i] = iterator.call(context, i);
                return accum
            }
            ,
            _.random = function(min, max) {
                return null == max && (max = min,
                    min = 0),
                min + Math.floor(Math.random() * (max - min + 1))
            }
        ;
        var entityMap = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        entityMap.unescape = _.invert(entityMap.escape);
        var entityRegexes = {
            escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]","g"),
            unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")","g")
        };
        _.each(["escape", "unescape"], function(method) {
            _[method] = function(string) {
                return null == string ? "" : ("" + string).replace(entityRegexes[method], function(match) {
                        return entityMap[method][match]
                    })
            }
        }),
            _.result = function(object, property) {
                if (null == object)
                    return null;
                var value = object[property];
                return _.isFunction(value) ? value.call(object) : value
            }
            ,
            _.mixin = function(obj) {
                each(_.functions(obj), function(name) {
                    var func = _[name] = obj[name];
                    _.prototype[name] = function() {
                        var args = [this._wrapped];
                        return push.apply(args, arguments),
                            result.call(this, func.apply(_, args))
                    }
                })
            }
        ;
        var idCounter = 0;
        _.uniqueId = function(prefix) {
            var id = ++idCounter + "";
            return prefix ? prefix + id : id
        }
            ,
            _.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
        var noMatch = /(.)^/
            , escapes = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
            , escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        _.template = function(text, data, settings) {
            var render;
            settings = _.defaults({}, settings, _.templateSettings);
            var matcher = new RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$","g")
                , index = 0
                , source = "__p+='";
            text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
                return source += text.slice(index, offset).replace(escaper, function(match) {
                    return "\\" + escapes[match]
                }),
                escape && (source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'"),
                interpolate && (source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'"),
                evaluate && (source += "';\n" + evaluate + "\n__p+='"),
                    index = offset + match.length,
                    match
            }),
                source += "';\n",
            settings.variable || (source = "with(obj||{}){\n" + source + "}\n"),
                source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
            try {
                render = new Function(settings.variable || "obj","_",source)
            } catch (e) {
                throw e.source = source,
                    e
            }
            if (data)
                return render(data, _);
            var template = function(data) {
                return render.call(this, data, _)
            };
            return template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}",
                template
        }
            ,
            _.chain = function(obj) {
                return _(obj).chain()
            }
        ;
        var result = function(obj) {
            return this._chain ? _(obj).chain() : obj
        };
        _.mixin(_),
            each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
                var method = ArrayProto[name];
                _.prototype[name] = function() {
                    var obj = this._wrapped;
                    return method.apply(obj, arguments),
                    "shift" != name && "splice" != name || 0 !== obj.length || delete obj[0],
                        result.call(this, obj)
                }
            }),
            each(["concat", "join", "slice"], function(name) {
                var method = ArrayProto[name];
                _.prototype[name] = function() {
                    return result.call(this, method.apply(this._wrapped, arguments))
                }
            }),
            _.extend(_.prototype, {
                chain: function() {
                    return this._chain = !0,
                        this
                },
                value: function() {
                    return this._wrapped
                }
            })
    }
        .call(this),
    !function(root, String) {
        "use strict";
        var nativeTrim = String.prototype.trim
            , nativeTrimRight = String.prototype.trimRight
            , nativeTrimLeft = String.prototype.trimLeft
            , parseNumber = function(source) {
            return 1 * source || 0
        }
            , strRepeat = function(str, qty) {
            if (1 > qty)
                return "";
            for (var result = ""; qty > 0; )
                1 & qty && (result += str),
                    qty >>= 1,
                    str += str;
            return result
        }
            , slice = [].slice
            , defaultToWhiteSpace = function(characters) {
            return null == characters ? "\\s" : characters.source ? characters.source : "[" + _s.escapeRegExp(characters) + "]"
        }
            , escapeChars = {
            lt: "<",
            gt: ">",
            quot: '"',
            amp: "&",
            apos: "'"
        }
            , reversedEscapeChars = {};
        for (var key in escapeChars)
            reversedEscapeChars[escapeChars[key]] = key;
        reversedEscapeChars["'"] = "#39";
        var sprintf = function() {
            function get_type(variable) {
                return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
            }
            var str_repeat = strRepeat
                , str_format = function() {
                return str_format.cache.hasOwnProperty(arguments[0]) || (str_format.cache[arguments[0]] = str_format.parse(arguments[0])),
                    str_format.format.call(null, str_format.cache[arguments[0]], arguments)
            };
            return str_format.format = function(parse_tree, argv) {
                var arg, i, k, match, pad, pad_character, pad_length, cursor = 1, tree_length = parse_tree.length, node_type = "", output = [];
                for (i = 0; tree_length > i; i++)
                    if (node_type = get_type(parse_tree[i]),
                        "string" === node_type)
                        output.push(parse_tree[i]);
                    else if ("array" === node_type) {
                        if (match = parse_tree[i],
                                match[2])
                            for (arg = argv[cursor],
                                     k = 0; k < match[2].length; k++) {
                                if (!arg.hasOwnProperty(match[2][k]))
                                    throw new Error(sprintf('[_.sprintf] property "%s" does not exist', match[2][k]));
                                arg = arg[match[2][k]]
                            }
                        else
                            arg = match[1] ? argv[match[1]] : argv[cursor++];
                        if (/[^s]/.test(match[8]) && "number" != get_type(arg))
                            throw new Error(sprintf("[_.sprintf] expecting number but found %s", get_type(arg)));
                        switch (match[8]) {
                            case "b":
                                arg = arg.toString(2);
                                break;
                            case "c":
                                arg = String.fromCharCode(arg);
                                break;
                            case "d":
                                arg = parseInt(arg, 10);
                                break;
                            case "e":
                                arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
                                break;
                            case "f":
                                arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                                break;
                            case "o":
                                arg = arg.toString(8);
                                break;
                            case "s":
                                arg = (arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg;
                                break;
                            case "u":
                                arg = Math.abs(arg);
                                break;
                            case "x":
                                arg = arg.toString(16);
                                break;
                            case "X":
                                arg = arg.toString(16).toUpperCase()
                        }
                        arg = /[def]/.test(match[8]) && match[3] && arg >= 0 ? "+" + arg : arg,
                            pad_character = match[4] ? "0" == match[4] ? "0" : match[4].charAt(1) : " ",
                            pad_length = match[6] - String(arg).length,
                            pad = match[6] ? str_repeat(pad_character, pad_length) : "",
                            output.push(match[5] ? arg + pad : pad + arg)
                    }
                return output.join("")
            }
                ,
                str_format.cache = {},
                str_format.parse = function(fmt) {
                    for (var _fmt = fmt, match = [], parse_tree = [], arg_names = 0; _fmt; ) {
                        if (null !== (match = /^[^\x25]+/.exec(_fmt)))
                            parse_tree.push(match[0]);
                        else if (null !== (match = /^\x25{2}/.exec(_fmt)))
                            parse_tree.push("%");
                        else {
                            if (null === (match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)))
                                throw new Error("[_.sprintf] huh?");
                            if (match[2]) {
                                arg_names |= 1;
                                var field_list = []
                                    , replacement_field = match[2]
                                    , field_match = [];
                                if (null === (field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)))
                                    throw new Error("[_.sprintf] huh?");
                                for (field_list.push(field_match[1]); "" !== (replacement_field = replacement_field.substring(field_match[0].length)); )
                                    if (null !== (field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)))
                                        field_list.push(field_match[1]);
                                    else {
                                        if (null === (field_match = /^\[(\d+)\]/.exec(replacement_field)))
                                            throw new Error("[_.sprintf] huh?");
                                        field_list.push(field_match[1])
                                    }
                                match[2] = field_list
                            } else
                                arg_names |= 2;
                            if (3 === arg_names)
                                throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");
                            parse_tree.push(match)
                        }
                        _fmt = _fmt.substring(match[0].length)
                    }
                    return parse_tree
                }
                ,
                str_format
        }()
            , _s = {
            VERSION: "2.3.0",
            isBlank: function(str) {
                return null == str && (str = ""),
                    /^\s*$/.test(str)
            },
            stripTags: function(str) {
                return null == str ? "" : String(str).replace(/<\/?[^>]+>/g, "")
            },
            capitalize: function(str) {
                return str = null == str ? "" : String(str),
                str.charAt(0).toUpperCase() + str.slice(1)
            },
            chop: function(str, step) {
                return null == str ? [] : (str = String(str),
                        step = ~~step,
                        step > 0 ? str.match(new RegExp(".{1," + step + "}","g")) : [str])
            },
            clean: function(str) {
                return _s.strip(str).replace(/\s+/g, " ")
            },
            count: function(str, substr) {
                if (null == str || null == substr)
                    return 0;
                str = String(str),
                    substr = String(substr);
                for (var count = 0, pos = 0, length = substr.length; ; ) {
                    if (pos = str.indexOf(substr, pos),
                        -1 === pos)
                        break;
                    count++,
                        pos += length
                }
                return count
            },
            chars: function(str) {
                return null == str ? [] : String(str).split("")
            },
            swapCase: function(str) {
                return null == str ? "" : String(str).replace(/\S/g, function(c) {
                        return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
                    })
            },
            escapeHTML: function(str) {
                return null == str ? "" : String(str).replace(/[&<>"']/g, function(m) {
                        return "&" + reversedEscapeChars[m] + ";"
                    })
            },
            unescapeHTML: function(str) {
                return null == str ? "" : String(str).replace(/\&([^;]+);/g, function(entity, entityCode) {
                        var match;
                        return entityCode in escapeChars ? escapeChars[entityCode] : (match = entityCode.match(/^#x([\da-fA-F]+)$/)) ? String.fromCharCode(parseInt(match[1], 16)) : (match = entityCode.match(/^#(\d+)$/)) ? String.fromCharCode(~~match[1]) : entity
                    })
            },
            escapeRegExp: function(str) {
                return null == str ? "" : String(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
            },
            splice: function(str, i, howmany, substr) {
                var arr = _s.chars(str);
                return arr.splice(~~i, ~~howmany, substr),
                    arr.join("")
            },
            insert: function(str, i, substr) {
                return _s.splice(str, i, 0, substr)
            },
            include: function(str, needle) {
                return "" === needle ? !0 : null == str ? !1 : -1 !== String(str).indexOf(needle)
            },
            join: function() {
                var args = slice.call(arguments)
                    , separator = args.shift();
                return null == separator && (separator = ""),
                    args.join(separator)
            },
            lines: function(str) {
                return null == str ? [] : String(str).split("\n")
            },
            reverse: function(str) {
                return _s.chars(str).reverse().join("")
            },
            startsWith: function(str, starts) {
                return "" === starts ? !0 : null == str || null == starts ? !1 : (str = String(str),
                            starts = String(starts),
                        str.length >= starts.length && str.slice(0, starts.length) === starts)
            },
            endsWith: function(str, ends) {
                return "" === ends ? !0 : null == str || null == ends ? !1 : (str = String(str),
                            ends = String(ends),
                        str.length >= ends.length && str.slice(str.length - ends.length) === ends)
            },
            succ: function(str) {
                return null == str ? "" : (str = String(str),
                    str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + 1))
            },
            titleize: function(str) {
                return null == str ? "" : String(str).replace(/(?:^|\s)\S/g, function(c) {
                        return c.toUpperCase()
                    })
            },
            camelize: function(str) {
                return _s.trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
                    return c ? c.toUpperCase() : ""
                })
            },
            underscored: function(str) {
                return _s.trim(str).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase()
            },
            dasherize: function(str) {
                return _s.trim(str).replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, "-").toLowerCase()
            },
            classify: function(str) {
                return _s.titleize(String(str).replace(/[\W_]/g, " ")).replace(/\s/g, "")
            },
            humanize: function(str) {
                return _s.capitalize(_s.underscored(str).replace(/_id$/, "").replace(/_/g, " "))
            },
            trim: function(str, characters) {
                return null == str ? "" : !characters && nativeTrim ? nativeTrim.call(str) : (characters = defaultToWhiteSpace(characters),
                            String(str).replace(new RegExp("^" + characters + "+|" + characters + "+$","g"), ""))
            },
            ltrim: function(str, characters) {
                return null == str ? "" : !characters && nativeTrimLeft ? nativeTrimLeft.call(str) : (characters = defaultToWhiteSpace(characters),
                            String(str).replace(new RegExp("^" + characters + "+"), ""))
            },
            rtrim: function(str, characters) {
                return null == str ? "" : !characters && nativeTrimRight ? nativeTrimRight.call(str) : (characters = defaultToWhiteSpace(characters),
                            String(str).replace(new RegExp(characters + "+$"), ""))
            },
            truncate: function(str, length, truncateStr) {
                return null == str ? "" : (str = String(str),
                        truncateStr = truncateStr || "...",
                        length = ~~length,
                        str.length > length ? str.slice(0, length) + truncateStr : str)
            },
            prune: function(str, length, pruneStr) {
                if (null == str)
                    return "";
                if (str = String(str),
                        length = ~~length,
                        pruneStr = null != pruneStr ? String(pruneStr) : "...",
                    str.length <= length)
                    return str;
                var tmpl = function(c) {
                    return c.toUpperCase() !== c.toLowerCase() ? "A" : " "
                }
                    , template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl);
                return template = template.slice(template.length - 2).match(/\w\w/) ? template.replace(/\s*\S+$/, "") : _s.rtrim(template.slice(0, template.length - 1)),
                    (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr
            },
            words: function(str, delimiter) {
                return _s.isBlank(str) ? [] : _s.trim(str, delimiter).split(delimiter || /\s+/)
            },
            pad: function(str, length, padStr, type) {
                str = null == str ? "" : String(str),
                    length = ~~length;
                var padlen = 0;
                switch (padStr ? padStr.length > 1 && (padStr = padStr.charAt(0)) : padStr = " ",
                    type) {
                    case "right":
                        return padlen = length - str.length,
                        str + strRepeat(padStr, padlen);
                    case "both":
                        return padlen = length - str.length,
                        strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));
                    default:
                        return padlen = length - str.length,
                        strRepeat(padStr, padlen) + str
                }
            },
            lpad: function(str, length, padStr) {
                return _s.pad(str, length, padStr)
            },
            rpad: function(str, length, padStr) {
                return _s.pad(str, length, padStr, "right")
            },
            lrpad: function(str, length, padStr) {
                return _s.pad(str, length, padStr, "both")
            },
            sprintf: sprintf,
            vsprintf: function(fmt, argv) {
                return argv.unshift(fmt),
                    sprintf.apply(null, argv)
            },
            toNumber: function(str, decimals) {
                return str ? (str = _s.trim(str),
                        str.match(/^-?\d+(?:\.\d+)?$/) ? parseNumber(parseNumber(str).toFixed(~~decimals)) : NaN) : 0
            },
            numberFormat: function(number, dec, dsep, tsep) {
                if (isNaN(number) || null == number)
                    return "";
                number = number.toFixed(~~dec),
                    tsep = "string" == typeof tsep ? tsep : ",";
                var parts = number.split(".")
                    , fnums = parts[0]
                    , decimals = parts[1] ? (dsep || ".") + parts[1] : "";
                return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, "$1" + tsep) + decimals
            },
            strRight: function(str, sep) {
                if (null == str)
                    return "";
                str = String(str),
                    sep = null != sep ? String(sep) : sep;
                var pos = sep ? str.indexOf(sep) : -1;
                return ~pos ? str.slice(pos + sep.length, str.length) : str
            },
            strRightBack: function(str, sep) {
                if (null == str)
                    return "";
                str = String(str),
                    sep = null != sep ? String(sep) : sep;
                var pos = sep ? str.lastIndexOf(sep) : -1;
                return ~pos ? str.slice(pos + sep.length, str.length) : str
            },
            strLeft: function(str, sep) {
                if (null == str)
                    return "";
                str = String(str),
                    sep = null != sep ? String(sep) : sep;
                var pos = sep ? str.indexOf(sep) : -1;
                return ~pos ? str.slice(0, pos) : str
            },
            strLeftBack: function(str, sep) {
                if (null == str)
                    return "";
                str += "",
                    sep = null != sep ? "" + sep : sep;
                var pos = str.lastIndexOf(sep);
                return ~pos ? str.slice(0, pos) : str
            },
            toSentence: function(array, separator, lastSeparator, serial) {
                separator = separator || ", ",
                    lastSeparator = lastSeparator || " and ";
                var a = array.slice()
                    , lastMember = a.pop();
                return array.length > 2 && serial && (lastSeparator = _s.rtrim(separator) + lastSeparator),
                    a.length ? a.join(separator) + lastSeparator + lastMember : lastMember
            },
            toSentenceSerial: function() {
                var args = slice.call(arguments);
                return args[3] = !0,
                    _s.toSentence.apply(_s, args)
            },
            slugify: function(str) {
                if (null == str)
                    return "";
                var from = "ąàáäâãåæćęèéëêìíïîłńòóöôõøśùúüûñçżź"
                    , to = "aaaaaaaaceeeeeiiiilnoooooosuuuunczz"
                    , regex = new RegExp(defaultToWhiteSpace(from),"g");
                return str = String(str).toLowerCase().replace(regex, function(c) {
                    var index = from.indexOf(c);
                    return to.charAt(index) || "-"
                }),
                    _s.dasherize(str.replace(/[^\w\s-]/g, ""))
            },
            surround: function(str, wrapper) {
                return [wrapper, str, wrapper].join("")
            },
            quote: function(str) {
                return _s.surround(str, '"')
            },
            exports: function() {
                var result = {};
                for (var prop in this)
                    this.hasOwnProperty(prop) && !prop.match(/^(?:include|contains|reverse)$/) && (result[prop] = this[prop]);
                return result
            },
            repeat: function(str, qty, separator) {
                if (null == str)
                    return "";
                if (qty = ~~qty,
                    null == separator)
                    return strRepeat(String(str), qty);
                for (var repeat = []; qty > 0; repeat[--qty] = str)
                    ;
                return repeat.join(separator)
            },
            naturalCmp: function(str1, str2) {
                if (str1 == str2)
                    return 0;
                if (!str1)
                    return -1;
                if (!str2)
                    return 1;
                for (var cmpRegex = /(\.\d+)|(\d+)|(\D+)/g, tokens1 = String(str1).toLowerCase().match(cmpRegex), tokens2 = String(str2).toLowerCase().match(cmpRegex), count = Math.min(tokens1.length, tokens2.length), i = 0; count > i; i++) {
                    var a = tokens1[i]
                        , b = tokens2[i];
                    if (a !== b) {
                        var num1 = parseInt(a, 10);
                        if (!isNaN(num1)) {
                            var num2 = parseInt(b, 10);
                            if (!isNaN(num2) && num1 - num2)
                                return num1 - num2
                        }
                        return b > a ? -1 : 1
                    }
                }
                return tokens1.length === tokens2.length ? tokens1.length - tokens2.length : str2 > str1 ? -1 : 1
            },
            levenshtein: function(str1, str2) {
                if (null == str1 && null == str2)
                    return 0;
                if (null == str1)
                    return String(str2).length;
                if (null == str2)
                    return String(str1).length;
                str1 = String(str1),
                    str2 = String(str2);
                for (var prev, value, current = [], i = 0; i <= str2.length; i++)
                    for (var j = 0; j <= str1.length; j++)
                        value = i && j ? str1.charAt(j - 1) === str2.charAt(i - 1) ? prev : Math.min(current[j], current[j - 1], prev) + 1 : i + j,
                            prev = current[j],
                            current[j] = value;
                return current.pop()
            }
        };
        _s.strip = _s.trim,
            _s.lstrip = _s.ltrim,
            _s.rstrip = _s.rtrim,
            _s.center = _s.lrpad,
            _s.rjust = _s.lpad,
            _s.ljust = _s.rpad,
            _s.contains = _s.include,
            _s.q = _s.quote,
        "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (module.exports = _s),
            exports._s = _s),
        "function" == typeof define && define.amd && define("underscore.string", [], function() {
            return _s
        }),
            root._ = root._ || {},
            root._.string = root._.str = _s
    }(this, String),
    function() {
        var Backbone, root = this, previousBackbone = root.Backbone, array = [], push = array.push, slice = array.slice, splice = array.splice;
        Backbone = "undefined" != typeof exports ? exports : root.Backbone = {},
            Backbone.VERSION = "1.0.0";
        var _ = root._;
        _ || "undefined" == typeof require || (_ = require("underscore")),
            Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$,
            Backbone.noConflict = function() {
                return root.Backbone = previousBackbone,
                    this
            }
            ,
            Backbone.emulateHTTP = !1,
            Backbone.emulateJSON = !1;
        var Events = Backbone.Events = {
            on: function(name, callback, context) {
                if (!eventsApi(this, "on", name, [callback, context]) || !callback)
                    return this;
                this._events || (this._events = {});
                var events = this._events[name] || (this._events[name] = []);
                return events.push({
                    callback: callback,
                    context: context,
                    ctx: context || this
                }),
                    this
            },
            once: function(name, callback, context) {
                if (!eventsApi(this, "once", name, [callback, context]) || !callback)
                    return this;
                var self = this
                    , once = _.once(function() {
                    self.off(name, once),
                        callback.apply(this, arguments)
                });
                return once._callback = callback,
                    this.on(name, once, context)
            },
            off: function(name, callback, context) {
                var retain, ev, events, names, i, l, j, k;
                if (!this._events || !eventsApi(this, "off", name, [callback, context]))
                    return this;
                if (!name && !callback && !context)
                    return this._events = {},
                        this;
                for (names = name ? [name] : _.keys(this._events),
                         i = 0,
                         l = names.length; l > i; i++)
                    if (name = names[i],
                            events = this._events[name]) {
                        if (this._events[name] = retain = [],
                            callback || context)
                            for (j = 0,
                                     k = events.length; k > j; j++)
                                ev = events[j],
                                (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) && retain.push(ev);
                        retain.length || delete this._events[name]
                    }
                return this
            },
            trigger: function(name) {
                if (!this._events)
                    return this;
                var args = slice.call(arguments, 1);
                if (!eventsApi(this, "trigger", name, args))
                    return this;
                var events = this._events[name]
                    , allEvents = this._events.all;
                return events && triggerEvents(events, args),
                allEvents && triggerEvents(allEvents, arguments),
                    this
            },
            stopListening: function(obj, name, callback) {
                var listeners = this._listeners;
                if (!listeners)
                    return this;
                var deleteListener = !name && !callback;
                "object" == typeof name && (callback = this),
                obj && ((listeners = {})[obj._listenerId] = obj);
                for (var id in listeners)
                    listeners[id].off(name, callback, this),
                    deleteListener && delete this._listeners[id];
                return this
            }
        }
            , eventSplitter = /\s+/
            , eventsApi = function(obj, action, name, rest) {
            if (!name)
                return !0;
            if ("object" == typeof name) {
                for (var key in name)
                    obj[action].apply(obj, [key, name[key]].concat(rest));
                return !1
            }
            if (eventSplitter.test(name)) {
                for (var names = name.split(eventSplitter), i = 0, l = names.length; l > i; i++)
                    obj[action].apply(obj, [names[i]].concat(rest));
                return !1
            }
            return !0
        }
            , triggerEvents = function(events, args) {
            var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
            switch (args.length) {
                case 0:
                    for (; ++i < l; )
                        (ev = events[i]).callback.call(ev.ctx);
                    return;
                case 1:
                    for (; ++i < l; )
                        (ev = events[i]).callback.call(ev.ctx, a1);
                    return;
                case 2:
                    for (; ++i < l; )
                        (ev = events[i]).callback.call(ev.ctx, a1, a2);
                    return;
                case 3:
                    for (; ++i < l; )
                        (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                    return;
                default:
                    for (; ++i < l; )
                        (ev = events[i]).callback.apply(ev.ctx, args)
            }
        }
            , listenMethods = {
            listenTo: "on",
            listenToOnce: "once"
        };
        _.each(listenMethods, function(implementation, method) {
            Events[method] = function(obj, name, callback) {
                var listeners = this._listeners || (this._listeners = {})
                    , id = obj._listenerId || (obj._listenerId = _.uniqueId("l"));
                return listeners[id] = obj,
                "object" == typeof name && (callback = this),
                    obj[implementation](name, callback, this),
                    this
            }
        }),
            Events.bind = Events.on,
            Events.unbind = Events.off,
            _.extend(Backbone, Events);
        var Model = Backbone.Model = function(attributes, options) {
            var defaults, attrs = attributes || {};
            options || (options = {}),
                this.cid = _.uniqueId("c"),
                this.attributes = {},
                _.extend(this, _.pick(options, modelOptions)),
            options.parse && (attrs = this.parse(attrs, options) || {}),
            (defaults = _.result(this, "defaults")) && (attrs = _.defaults({}, attrs, defaults)),
                this.set(attrs, options),
                this.changed = {},
                this.initialize.apply(this, arguments)
        }
            , modelOptions = ["url", "urlRoot", "collection"];
        _.extend(Model.prototype, Events, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(options) {
                return _.clone(this.attributes)
            },
            sync: function() {
                return Backbone.sync.apply(this, arguments)
            },
            get: function(attr) {
                return this.attributes[attr]
            },
            escape: function(attr) {
                return _.escape(this.get(attr))
            },
            has: function(attr) {
                return null != this.get(attr)
            },
            set: function(key, val, options) {
                var attr, attrs, unset, changes, silent, changing, prev, current;
                if (null == key)
                    return this;
                if ("object" == typeof key ? (attrs = key,
                            options = val) : (attrs = {})[key] = val,
                    options || (options = {}),
                        !this._validate(attrs, options))
                    return !1;
                unset = options.unset,
                    silent = options.silent,
                    changes = [],
                    changing = this._changing,
                    this._changing = !0,
                changing || (this._previousAttributes = _.clone(this.attributes),
                    this.changed = {}),
                    current = this.attributes,
                    prev = this._previousAttributes,
                this.idAttribute in attrs && (this.id = attrs[this.idAttribute]);
                for (attr in attrs)
                    val = attrs[attr],
                    _.isEqual(current[attr], val) || changes.push(attr),
                        _.isEqual(prev[attr], val) ? delete this.changed[attr] : this.changed[attr] = val,
                        unset ? delete current[attr] : current[attr] = val;
                if (!silent) {
                    changes.length && (this._pending = !0);
                    for (var i = 0, l = changes.length; l > i; i++)
                        this.trigger("change:" + changes[i], this, current[changes[i]], options)
                }
                if (changing)
                    return this;
                if (!silent)
                    for (; this._pending; )
                        this._pending = !1,
                            this.trigger("change", this, options);
                return this._pending = !1,
                    this._changing = !1,
                    this
            },
            unset: function(attr, options) {
                return this.set(attr, void 0, _.extend({}, options, {
                    unset: !0
                }))
            },
            clear: function(options) {
                var attrs = {};
                for (var key in this.attributes)
                    attrs[key] = void 0;
                return this.set(attrs, _.extend({}, options, {
                    unset: !0
                }))
            },
            hasChanged: function(attr) {
                return null == attr ? !_.isEmpty(this.changed) : _.has(this.changed, attr)
            },
            changedAttributes: function(diff) {
                if (!diff)
                    return this.hasChanged() ? _.clone(this.changed) : !1;
                var val, changed = !1, old = this._changing ? this._previousAttributes : this.attributes;
                for (var attr in diff)
                    _.isEqual(old[attr], val = diff[attr]) || ((changed || (changed = {}))[attr] = val);
                return changed
            },
            previous: function(attr) {
                return null != attr && this._previousAttributes ? this._previousAttributes[attr] : null
            },
            previousAttributes: function() {
                return _.clone(this._previousAttributes)
            },
            fetch: function(options) {
                options = options ? _.clone(options) : {},
                void 0 === options.parse && (options.parse = !0);
                var model = this
                    , success = options.success;
                return options.success = function(resp) {
                    return model.set(model.parse(resp, options), options) ? (success && success(model, resp, options),
                            void model.trigger("sync", model, resp, options)) : !1
                }
                    ,
                    wrapError(this, options),
                    this.sync("read", this, options)
            },
            save: function(key, val, options) {
                var attrs, method, xhr, attributes = this.attributes;
                if (null == key || "object" == typeof key ? (attrs = key,
                            options = val) : (attrs = {})[key] = val,
                    attrs && (!options || !options.wait) && !this.set(attrs, options))
                    return !1;
                if (options = _.extend({
                        validate: !0
                    }, options),
                        !this._validate(attrs, options))
                    return !1;
                attrs && options.wait && (this.attributes = _.extend({}, attributes, attrs)),
                void 0 === options.parse && (options.parse = !0);
                var model = this
                    , success = options.success;
                return options.success = function(resp) {
                    model.attributes = attributes;
                    var serverAttrs = model.parse(resp, options);
                    return options.wait && (serverAttrs = _.extend(attrs || {}, serverAttrs)),
                        _.isObject(serverAttrs) && !model.set(serverAttrs, options) ? !1 : (success && success(model, resp, options),
                                void model.trigger("sync", model, resp, options))
                }
                    ,
                    wrapError(this, options),
                    method = this.isNew() ? "create" : options.patch ? "patch" : "update",
                "patch" === method && (options.attrs = attrs),
                    xhr = this.sync(method, this, options),
                attrs && options.wait && (this.attributes = attributes),
                    xhr
            },
            destroy: function(options) {
                options = options ? _.clone(options) : {};
                var model = this
                    , success = options.success
                    , destroy = function() {
                    model.trigger("destroy", model, model.collection, options)
                };
                if (options.success = function(resp) {
                        (options.wait || model.isNew()) && destroy(),
                        success && success(model, resp, options),
                        model.isNew() || model.trigger("sync", model, resp, options)
                    }
                        ,
                        this.isNew())
                    return options.success(),
                        !1;
                wrapError(this, options);
                var xhr = this.sync("delete", this, options);
                return options.wait || destroy(),
                    xhr
            },
            url: function() {
                var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
                return this.isNew() ? base : base + ("/" === base.charAt(base.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(resp, options) {
                return resp
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return null == this.id
            },
            isValid: function(options) {
                return this._validate({}, _.extend(options || {}, {
                    validate: !0
                }))
            },
            _validate: function(attrs, options) {
                if (!options.validate || !this.validate)
                    return !0;
                attrs = _.extend({}, this.attributes, attrs);
                var error = this.validationError = this.validate(attrs, options) || null;
                return error ? (this.trigger("invalid", this, error, _.extend(options || {}, {
                        validationError: error
                    })),
                        !1) : !0
            }
        });
        var modelMethods = ["keys", "values", "pairs", "invert", "pick", "omit"];
        _.each(modelMethods, function(method) {
            Model.prototype[method] = function() {
                var args = slice.call(arguments);
                return args.unshift(this.attributes),
                    _[method].apply(_, args)
            }
        });
        var Collection = Backbone.Collection = function(models, options) {
            options || (options = {}),
            options.url && (this.url = options.url),
            options.model && (this.model = options.model),
            void 0 !== options.comparator && (this.comparator = options.comparator),
                this._reset(),
                this.initialize.apply(this, arguments),
            models && this.reset(models, _.extend({
                silent: !0
            }, options))
        }
            , setOptions = {
            add: !0,
            remove: !0,
            merge: !0
        }
            , addOptions = {
            add: !0,
            merge: !1,
            remove: !1
        };
        _.extend(Collection.prototype, Events, {
            model: Model,
            initialize: function() {},
            toJSON: function(options) {
                return this.map(function(model) {
                    return model.toJSON(options)
                })
            },
            sync: function() {
                return Backbone.sync.apply(this, arguments)
            },
            add: function(models, options) {
                return this.set(models, _.defaults(options || {}, addOptions))
            },
            remove: function(models, options) {
                models = _.isArray(models) ? models.slice() : [models],
                options || (options = {});
                var i, l, index, model;
                for (i = 0,
                         l = models.length; l > i; i++)
                    model = this.get(models[i]),
                    model && (delete this._byId[model.id],
                        delete this._byId[model.cid],
                        index = this.indexOf(model),
                        this.models.splice(index, 1),
                        this.length--,
                    options.silent || (options.index = index,
                        model.trigger("remove", model, this, options)),
                        this._removeReference(model));
                return this
            },
            set: function(models, options) {
                options = _.defaults(options || {}, setOptions),
                options.parse && (models = this.parse(models, options)),
                _.isArray(models) || (models = models ? [models] : []);
                var i, l, model, existing, sort, at = options.at, sortable = this.comparator && null == at && options.sort !== !1, sortAttr = _.isString(this.comparator) ? this.comparator : null, toAdd = [], toRemove = [], modelMap = {};
                for (i = 0,
                         l = models.length; l > i; i++)
                    (model = this._prepareModel(models[i], options)) && ((existing = this.get(model)) ? (options.remove && (modelMap[existing.cid] = !0),
                        options.merge && (existing.set(model.attributes, options),
                        sortable && !sort && existing.hasChanged(sortAttr) && (sort = !0))) : options.add && (toAdd.push(model),
                            model.on("all", this._onModelEvent, this),
                            this._byId[model.cid] = model,
                        null != model.id && (this._byId[model.id] = model)));
                if (options.remove) {
                    for (i = 0,
                             l = this.length; l > i; ++i)
                        modelMap[(model = this.models[i]).cid] || toRemove.push(model);
                    toRemove.length && this.remove(toRemove, options)
                }
                if (toAdd.length && (sortable && (sort = !0),
                        this.length += toAdd.length,
                        null != at ? splice.apply(this.models, [at, 0].concat(toAdd)) : push.apply(this.models, toAdd)),
                    sort && this.sort({
                        silent: !0
                    }),
                        options.silent)
                    return this;
                for (i = 0,
                         l = toAdd.length; l > i; i++)
                    (model = toAdd[i]).trigger("add", model, this, options);
                return sort && this.trigger("sort", this, options),
                    this
            },
            reset: function(models, options) {
                options || (options = {});
                for (var i = 0, l = this.models.length; l > i; i++)
                    this._removeReference(this.models[i]);
                return options.previousModels = this.models,
                    this._reset(),
                    this.add(models, _.extend({
                        silent: !0
                    }, options)),
                options.silent || this.trigger("reset", this, options),
                    this
            },
            push: function(model, options) {
                return model = this._prepareModel(model, options),
                    this.add(model, _.extend({
                        at: this.length
                    }, options)),
                    model
            },
            pop: function(options) {
                var model = this.at(this.length - 1);
                return this.remove(model, options),
                    model
            },
            unshift: function(model, options) {
                return model = this._prepareModel(model, options),
                    this.add(model, _.extend({
                        at: 0
                    }, options)),
                    model
            },
            shift: function(options) {
                var model = this.at(0);
                return this.remove(model, options),
                    model
            },
            slice: function(begin, end) {
                return this.models.slice(begin, end)
            },
            get: function(obj) {
                return null == obj ? void 0 : this._byId[null != obj.id ? obj.id : obj.cid || obj]
            },
            at: function(index) {
                return this.models[index]
            },
            where: function(attrs, first) {
                return _.isEmpty(attrs) ? first ? void 0 : [] : this[first ? "find" : "filter"](function(model) {
                        for (var key in attrs)
                            if (attrs[key] !== model.get(key))
                                return !1;
                        return !0
                    })
            },
            findWhere: function(attrs) {
                return this.where(attrs, !0)
            },
            sort: function(options) {
                if (!this.comparator)
                    throw new Error("Cannot sort a set without a comparator");
                return options || (options = {}),
                    _.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(_.bind(this.comparator, this)),
                options.silent || this.trigger("sort", this, options),
                    this
            },
            sortedIndex: function(model, value, context) {
                value || (value = this.comparator);
                var iterator = _.isFunction(value) ? value : function(model) {
                            return model.get(value)
                        }
                    ;
                return _.sortedIndex(this.models, model, iterator, context)
            },
            pluck: function(attr) {
                return _.invoke(this.models, "get", attr)
            },
            fetch: function(options, curOpts) {
                options = options ? _.clone(options) : {},
                void 0 === options.parse && (options.parse = !0);
                var success = options.success
                    , collection = this;
                return options.success = function(resp) {
                    var method = options.reset ? "reset" : "set";
                    collection[method](resp, options),
                    success && success(collection, resp, options),
                        collection.trigger("sync", collection, resp, options)
                }
                    ,
                    wrapError(this, options),
                    this.sync("read", this, options, curOpts)
            },
            create: function(model, options) {
                if (options = options ? _.clone(options) : {},
                        !(model = this._prepareModel(model, options)))
                    return !1;
                options.wait || this.add(model, options);
                var collection = this
                    , success = options.success;
                return options.success = function(resp) {
                    options.wait && collection.add(model, options),
                    success && success(model, resp, options)
                }
                    ,
                    model.save(null, options),
                    model
            },
            parse: function(resp, options) {
                return resp
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0,
                    this.models = [],
                    this._byId = {}
            },
            _prepareModel: function(attrs, options) {
                if (attrs instanceof Model)
                    return attrs.collection || (attrs.collection = this),
                        attrs;
                options || (options = {}),
                    options.collection = this;
                var model = new this.model(attrs,options);
                return model._validate(attrs, options) ? model : (this.trigger("invalid", this, attrs, options),
                        !1)
            },
            _removeReference: function(model) {
                this === model.collection && delete model.collection,
                    model.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(event, model, collection, options) {
                ("add" !== event && "remove" !== event || collection === this) && ("destroy" === event && this.remove(model, options),
                model && event === "change:" + model.idAttribute && (delete this._byId[model.previous(model.idAttribute)],
                null != model.id && (this._byId[model.id] = model)),
                    this.trigger.apply(this, arguments))
            }
        });
        var methods = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        _.each(methods, function(method) {
            Collection.prototype[method] = function() {
                var args = slice.call(arguments);
                return args.unshift(this.models),
                    _[method].apply(_, args)
            }
        });
        var attributeMethods = ["groupBy", "countBy", "sortBy"];
        _.each(attributeMethods, function(method) {
            Collection.prototype[method] = function(value, context) {
                var iterator = _.isFunction(value) ? value : function(model) {
                            return model.get(value)
                        }
                    ;
                return _[method](this.models, iterator, context)
            }
        });
        var View = Backbone.View = function(options) {
            this.cid = _.uniqueId("view"),
                this._configure(options || {}),
                this._ensureElement(),
                this.initialize.apply(this, arguments),
                this.delegateEvents()
        }
            , delegateEventSplitter = /^(\S+)\s*(.*)$/
            , viewOptions = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        _.extend(View.prototype, Events, {
            tagName: "div",
            $: function(selector) {
                return this.$el.find(selector)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(),
                    this.stopListening(),
                    this
            },
            setElement: function(element, delegate) {
                return this.$el && this.undelegateEvents(),
                    this.$el = element instanceof Backbone.$ ? element : Backbone.$(element),
                    this.el = this.$el[0],
                delegate !== !1 && this.delegateEvents(),
                    this
            },
            delegateEvents: function(events) {
                if (!events && !(events = _.result(this, "events")))
                    return this;
                this.undelegateEvents();
                for (var key in events) {
                    var method = events[key];
                    if (_.isFunction(method) || (method = this[events[key]]),
                            method) {
                        var match = key.match(delegateEventSplitter)
                            , eventName = match[1]
                            , selector = match[2];
                        method = _.bind(method, this),
                            eventName += ".delegateEvents" + this.cid,
                            "" === selector ? this.$el.on(eventName, method) : this.$el.on(eventName, selector, method)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid),
                    this
            },
            _configure: function(options) {
                this.options && (options = _.extend({}, _.result(this, "options"), options)),
                    _.extend(this, _.pick(options, viewOptions)),
                    this.options = options
            },
            _ensureElement: function() {
                if (this.el)
                    this.setElement(_.result(this, "el"), !1);
                else {
                    var attrs = _.extend({}, _.result(this, "attributes"));
                    this.id && (attrs.id = _.result(this, "id")),
                    this.className && (attrs["class"] = _.result(this, "className"));
                    var $el = Backbone.$("<" + _.result(this, "tagName") + ">").attr(attrs);
                    this.setElement($el, !1)
                }
            }
        }),
            Backbone.sync = function(method, model, options, curOpts) {
                var type = methodMap[method];
                _.defaults(options || (options = {}), {
                    emulateHTTP: Backbone.emulateHTTP,
                    emulateJSON: Backbone.emulateJSON
                });
                var params = {
                    type: type,
                    dataType: "json"
                };
                if (options.url || (params.url = _.result(model, "url") || urlError()),
                    null != options.data || !model || "create" !== method && "update" !== method && "patch" !== method || (params.contentType = "application/json",
                        params.data = JSON.stringify(options.attrs || model.toJSON(options))),
                    options.emulateJSON && (params.contentType = "application/x-www-form-urlencoded",
                        params.data = params.data ? {
                                model: params.data
                            } : {}),
                    options.emulateHTTP && ("PUT" === type || "DELETE" === type || "PATCH" === type)) {
                    params.type = "POST",
                    options.emulateJSON && (params.data._method = type);
                    var beforeSend = options.beforeSend;
                    options.beforeSend = function(xhr) {
                        return xhr.setRequestHeader("X-HTTP-Method-Override", type),
                            beforeSend ? beforeSend.apply(this, arguments) : void 0
                    }
                }
                "GET" === params.type || options.emulateJSON || (params.processData = !1),
                "PATCH" !== params.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (params.xhr = function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }
                );
                var xhr = options.xhr = Backbone.ajax(_.extend(params, options), curOpts);
                return model.trigger("request", model, xhr, options),
                    xhr
            }
        ;
        var methodMap = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        Backbone.ajax = function() {
            return Backbone.$.ajax.apply(Backbone.$, arguments)
        }
        ;
        var Router = Backbone.Router = function(options) {
            options || (options = {}),
            options.routes && (this.routes = options.routes),
                this._bindRoutes(),
                this.initialize.apply(this, arguments)
        }
            , optionalParam = /\((.*?)\)/g
            , namedParam = /(\(\?)?:\w+/g
            , splatParam = /\*\w+/g
            , escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        _.extend(Router.prototype, Events, {
            initialize: function() {},
            route: function(route, name, callback) {
                _.isRegExp(route) || (route = this._routeToRegExp(route)),
                _.isFunction(name) && (callback = name,
                    name = ""),
                callback || (callback = this[name]);
                var router = this;
                return Backbone.history.route(route, function(fragment) {
                    var args = router._extractParameters(route, fragment);
                    callback && callback.apply(router, args),
                        router.trigger.apply(router, ["route:" + name].concat(args)),
                        router.trigger("route", name, args),
                        Backbone.history.trigger("route", router, name, args)
                }),
                    this
            },
            navigate: function(fragment, options) {
                return Backbone.history.navigate(fragment, options),
                    this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = _.result(this, "routes");
                    for (var route, routes = _.keys(this.routes); null != (route = routes.pop()); )
                        this.route(route, this.routes[route])
                }
            },
            _routeToRegExp: function(route) {
                return route = route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function(match, optional) {
                    return optional ? match : "([^/]+)"
                }).replace(splatParam, "(.*?)"),
                    new RegExp("^" + route + "$")
            },
            _extractParameters: function(route, fragment) {
                var params = route.exec(fragment).slice(1);
                return _.map(params, function(param) {
                    return param ? decodeURIComponent(param) : null
                })
            }
        });
        var History = Backbone.History = function() {
            this.handlers = [],
                _.bindAll(this, "checkUrl"),
            "undefined" != typeof window && (this.location = window.location,
                this.history = window.history)
        }
            , routeStripper = /^[#\/]|\s+$/g
            , rootStripper = /^\/+|\/+$/g
            , isExplorer = /msie [\w.]+/
            , trailingSlash = /\/$/;
        History.started = !1,
            _.extend(History.prototype, Events, {
                interval: 50,
                getHash: function(window) {
                    var match = (window || this).location.href.match(/#(.*)$/);
                    return match ? match[1] : ""
                },
                getFragment: function(fragment, forcePushState) {
                    if (null == fragment)
                        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                            fragment = this.location.pathname;
                            var root = this.root.replace(trailingSlash, "");
                            fragment.indexOf(root) || (fragment = fragment.substr(root.length))
                        } else
                            fragment = this.getHash();
                    return fragment.replace(routeStripper, "")
                },
                start: function(options) {
                    if (History.started)
                        throw new Error("Backbone.history has already been started");
                    History.started = !0,
                        this.options = _.extend({}, {
                            root: "/"
                        }, this.options, options),
                        this.root = this.options.root,
                        this._wantsHashChange = this.options.hashChange !== !1,
                        this._wantsPushState = !!this.options.pushState,
                        this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var fragment = this.getFragment()
                        , docMode = document.documentMode
                        , oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || 7 >= docMode);
                    this.root = ("/" + this.root + "/").replace(rootStripper, "/"),
                    oldIE && this._wantsHashChange && (this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,
                        this.navigate(fragment)),
                        this._hasPushState ? Backbone.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !oldIE ? Backbone.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                        this.fragment = fragment;
                    var loc = this.location
                        , atRoot = loc.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot ? (this.fragment = this.getFragment(null, !0),
                            this.location.replace(this.root + this.location.search + "#" + this.fragment),
                            !0) : (this._wantsPushState && this._hasPushState && atRoot && loc.hash && (this.fragment = this.getHash().replace(routeStripper, ""),
                            this.history.replaceState({}, document.title, this.root + this.fragment + loc.search)),
                            this.options.silent ? void 0 : this.loadUrl())
                },
                stop: function() {
                    Backbone.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
                        clearInterval(this._checkUrlInterval),
                        History.started = !1
                },
                route: function(route, callback) {
                    this.handlers.unshift({
                        route: route,
                        callback: callback
                    })
                },
                checkUrl: function(e) {
                    var current = this.getFragment();
                    return current === this.fragment && this.iframe && (current = this.getFragment(this.getHash(this.iframe))),
                        current === this.fragment ? !1 : (this.iframe && this.navigate(current),
                                void (this.loadUrl() || this.loadUrl(this.getHash())))
                },
                loadUrl: function(fragmentOverride) {
                    var fragment = this.fragment = this.getFragment(fragmentOverride)
                        , matched = _.any(this.handlers, function(handler) {
                        return handler.route.test(fragment) ? (handler.callback(fragment),
                                !0) : void 0
                    });
                    return matched
                },
                navigate: function(fragment, options) {
                    if (!History.started)
                        return !1;
                    if (options && options !== !0 || (options = {
                            trigger: options
                        }),
                            fragment = this.getFragment(fragment || ""),
                        this.fragment !== fragment) {
                        this.fragment = fragment;
                        var url = this.root + fragment;
                        if (this._hasPushState)
                            this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
                        else {
                            if (!this._wantsHashChange)
                                return this.location.assign(url);
                            this._updateHash(this.location, fragment, options.replace),
                            this.iframe && fragment !== this.getFragment(this.getHash(this.iframe)) && (options.replace || this.iframe.document.open().close(),
                                this._updateHash(this.iframe.location, fragment, options.replace))
                        }
                        options.trigger && this.loadUrl(fragment)
                    }
                },
                _updateHash: function(location, fragment, replace) {
                    if (replace) {
                        var href = location.href.replace(/(javascript:|#).*$/, "");
                        location.replace(href + "#" + fragment)
                    } else
                        location.hash = "#" + fragment
                }
            }),
            Backbone.history = new History;
        var extend = function(protoProps, staticProps) {
            var child, parent = this;
            child = protoProps && _.has(protoProps, "constructor") ? protoProps.constructor : function() {
                    return parent.apply(this, arguments)
                }
                ,
                _.extend(child, parent, staticProps);
            var Surrogate = function() {
                this.constructor = child
            };
            return Surrogate.prototype = parent.prototype,
                child.prototype = new Surrogate,
            protoProps && _.extend(child.prototype, protoProps),
                child.__super__ = parent.prototype,
                child
        };
        Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
        var urlError = function() {
            throw new Error('A "url" property or function must be specified')
        }
            , wrapError = function(model, options) {
            var error = options.error;
            options.error = function(resp) {
                error && error(model, resp, options),
                    model.trigger("error", model, resp, options)
            }
        }
    }
        .call(this),
    function(win) {
        var namespace = "__events"
            , splitter = /\s+/
            , eventsNameHandler = function(events, callback) {
            events.split(splitter).forEach(callback)
        }
            , slice = Array.prototype.slice
            , Events = function() {}
            , pro = Events.prototype;
        pro.on = function(events, callback, context) {
            if (callback) {
                var me = this;
                me[namespace] || (me[namespace] = {});
                var _events = me[namespace];
                eventsNameHandler(events, function(name, index) {
                    _events[name] || (_events[name] = []),
                        context = context || null,
                    _events[name].some(function(v, k) {
                        return v.callback == callback && v.context == context
                    }) || _events[name].push({
                        callback: callback,
                        context: context
                    })
                })
            }
        }
            ,
            pro.once = function(events, callback, context) {
                if (callback) {
                    var me = this;
                    eventsNameHandler(events, function(name) {
                        me.on(name, function() {
                            var _self = arguments.callee;
                            callback.apply(context, slice.call(arguments)),
                                me.off(name, _self, context)
                        })
                    })
                }
            }
            ,
            pro.off = function(events, callback, context) {
                var me = this
                    , _events = me[namespace];
                _events && (events ? callback ? eventsNameHandler(events, function(name) {
                            _events[name] && _events[name].forEach(function(item, index) {
                                item.callback == callback && item.context == context && _events[name].splice(index, 1)
                            })
                        }) : eventsNameHandler(events, function(name, index) {
                            _events[name] && (_events[name].length = 0,
                                delete _events[name])
                        }) : me[namespace] = {})
            }
            ,
            pro.trigger = function(events) {
                var me = this
                    , _events = me[namespace];
                if (_events) {
                    var args = slice.call(arguments, 1);
                    eventsNameHandler(events, function(name) {
                        _events[name] && _events[name].length && _events[name].slice().forEach(function(item, i) {
                            item.callback.apply(item.context, args.slice(0))
                        })
                    })
                }
            }
            ,
            pro.always = function(events, callback, context) {
                var me = this
                    , snapshot = me.__snapshot ? me.__snapshot : me.__snapshot = {};
                eventsNameHandler(events, function(name) {
                    if (void 0 !== snapshot[name]) {
                        var args = snapshot[name].slice(0);
                        args.unshift({
                            channel: name,
                            target: me
                        }),
                            callback.apply(context, args)
                    }
                    this.on(name, callback, context)
                })
            }
            ,
            pro.onceAlways = function(events, callback, context) {
                var me = this
                    , snapshot = me.__snapshot ? me.__snapshot : me.__snapshot = {};
                eventsNameHandler(events, function(name) {
                    if (void 0 !== snapshot[name]) {
                        var args = snapshot[name].slice(0);
                        args.unshift({
                            channel: name,
                            target: me
                        }),
                            callback.apply(context, args)
                    } else
                        me.once(name, callback, context)
                })
            }
            ,
            pro.snapshot = function(name) {
                var me = this
                    , snapshot = me.__snapshot ? me.__snapshot : me.__snapshot = {};
                snapshot[name] = slice.call(arguments, 1)
            }
            ,
            Events.mixTo = function(target) {
                target.prototype && (target = target.prototype);
                for (var i in pro)
                    pro.hasOwnProperty(i) && (target[i] = pro[i])
            }
            ,
            win.Events = Events
    }(window),
    function() {
        var $, Paste, createHiddenEditable, dataURLtoBlob;
        $ = window.jQuery,
            $.paste = function(pasteContainer) {
                var pm;
                return "undefined" != typeof console && null !== console && console.log("DEPRECATED: This method is deprecated. Please use $.fn.pastableNonInputable() instead."),
                    pm = Paste.mountNonInputable(pasteContainer),
                    pm._container
            }
            ,
            $.fn.pastableNonInputable = function() {
                var el, _i, _len;
                for (_i = 0,
                         _len = this.length; _len > _i; _i++)
                    el = this[_i],
                        Paste.mountNonInputable(el);
                return this
            }
            ,
            $.fn.pastableTextarea = function() {
                var el, _i, _len;
                for (_i = 0,
                         _len = this.length; _len > _i; _i++)
                    el = this[_i],
                        Paste.mountTextarea(el);
                return this
            }
            ,
            $.fn.pastableContenteditable = function() {
                var el, _i, _len;
                for (_i = 0,
                         _len = this.length; _len > _i; _i++)
                    el = this[_i],
                        Paste.mountContenteditable(el);
                return this
            }
            ,
            dataURLtoBlob = function(dataURL, sliceSize) {
                var b64Data, byteArray, byteArrays, byteCharacters, byteNumbers, contentType, i, m, offset, slice, _ref;
                if (null == sliceSize && (sliceSize = 512),
                        !(m = dataURL.match(/^data\:([^\;]+)\;base64\,(.+)$/)))
                    return null;
                for (_ref = m,
                         m = _ref[0],
                         contentType = _ref[1],
                         b64Data = _ref[2],
                         byteCharacters = atob(b64Data),
                         byteArrays = [],
                         offset = 0; offset < byteCharacters.length; ) {
                    for (slice = byteCharacters.slice(offset, offset + sliceSize),
                             byteNumbers = new Array(slice.length),
                             i = 0; i < slice.length; )
                        byteNumbers[i] = slice.charCodeAt(i),
                            i++;
                    byteArray = new Uint8Array(byteNumbers),
                        byteArrays.push(byteArray),
                        offset += sliceSize
                }
                return new Blob(byteArrays,{
                    type: contentType
                })
            }
            ,
            createHiddenEditable = function() {
                return $(document.createElement("div")).attr("contenteditable", !0).css({
                    width: 1,
                    height: 1,
                    position: "fixed",
                    left: -100,
                    overflow: "hidden"
                })
            }
            ,
            Paste = function() {
                function Paste(_at__container, _at__target) {
                    this._container = _at__container,
                        this._target = _at__target,
                        this._container = $(this._container),
                        this._target = $(this._target).addClass("pastable"),
                        this._container.on("paste", function(_this) {
                            return function(ev) {
                                var clipboardData, file, item, reader, text, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _results;
                                if (null != (null != (_ref = ev.originalEvent) ? _ref.clipboardData : void 0))
                                    if (clipboardData = ev.originalEvent.clipboardData,
                                            clipboardData.items)
                                        for (_ref1 = clipboardData.items,
                                                 _i = 0,
                                                 _len = _ref1.length; _len > _i; _i++)
                                            item = _ref1[_i],
                                            item.type.match(/^image\//) && (reader = new FileReader,
                                                reader.onload = function(event) {
                                                    return _this._handleImage(event.target.result)
                                                }
                                                ,
                                                reader.readAsDataURL(item.getAsFile())),
                                            "text/plain" === item.type && item.getAsString(function(string) {
                                                return _this._target.trigger("pasteText", {
                                                    text: string
                                                })
                                            });
                                    else
                                        -1 !== Array.prototype.indexOf.call(clipboardData.types, "text/plain") && (text = clipboardData.getData("Text"),
                                            _this._target.trigger("pasteText", {
                                                text: text
                                            })),
                                            _this._checkImagesInContainer(function(src) {
                                                return _this._handleImage(src)
                                            });
                                if (clipboardData = window.clipboardData) {
                                    if (null != (_ref2 = text = clipboardData.getData("Text")) ? _ref2.length : void 0)
                                        return _this._target.trigger("pasteText", {
                                            text: text
                                        });
                                    for (_ref3 = clipboardData.files,
                                             _results = [],
                                             _j = 0,
                                             _len1 = _ref3.length; _len1 > _j; _j++)
                                        file = _ref3[_j],
                                            _this._handleImage(URL.createObjectURL(file)),
                                            _results.push(_this._checkImagesInContainer(function() {}));
                                    return _results
                                }
                            }
                        }(this))
                }
                return Paste.prototype._target = null,
                    Paste.prototype._container = null,
                    Paste.mountNonInputable = function(nonInputable) {
                        var paste;
                        return paste = new Paste(createHiddenEditable().appendTo(nonInputable),nonInputable),
                            $(nonInputable).on("click", function(_this) {
                                return function() {
                                    return paste._container.focus()
                                }
                            }(this)),
                            paste._container.on("focus", function(_this) {
                                return function() {
                                    return $(nonInputable).addClass("pastable-focus")
                                }
                            }(this)),
                            paste._container.on("blur", function(_this) {
                                return function() {
                                    return $(nonInputable).removeClass("pastable-focus")
                                }
                            }(this))
                    }
                    ,
                    Paste.mountTextarea = function(textarea) {
                        var ctlDown, paste;
                        return -1 !== navigator.userAgent.toLowerCase().indexOf("chrome") ? this.mountContenteditable(textarea) : (paste = new Paste(createHiddenEditable().insertBefore(textarea),textarea),
                                ctlDown = !1,
                                $(textarea).on("keyup", function(ev) {
                                    var _ref;
                                    return 17 === (_ref = ev.keyCode) || 224 === _ref ? ctlDown = !1 : void 0
                                }),
                                $(textarea).on("keydown", function(ev) {
                                    var _ref;
                                    return (17 === (_ref = ev.keyCode) || 224 === _ref) && (ctlDown = !0),
                                        ctlDown && 86 === ev.keyCode ? paste._container.focus() : void 0
                                }),
                                $(paste._target).on("pasteImage", function(_this) {
                                    return function() {
                                        return $(textarea).focus()
                                    }
                                }(this)),
                                $(paste._target).on("pasteText", function(_this) {
                                    return function() {
                                        return $(textarea).focus()
                                    }
                                }(this)),
                                $(textarea).on("focus", function(_this) {
                                    return function() {
                                        return $(textarea).addClass("pastable-focus")
                                    }
                                }(this)),
                                $(textarea).on("blur", function(_this) {
                                    return function() {
                                        return $(textarea).removeClass("pastable-focus")
                                    }
                                }(this)))
                    }
                    ,
                    Paste.mountContenteditable = function(contenteditable) {
                        var paste;
                        return paste = new Paste(contenteditable,contenteditable),
                            $(contenteditable).on("focus", function(_this) {
                                return function() {
                                    return $(contenteditable).addClass("pastable-focus")
                                }
                            }(this)),
                            $(contenteditable).on("blur", function(_this) {
                                return function() {
                                    return $(contenteditable).removeClass("pastable-focus")
                                }
                            }(this))
                    }
                    ,
                    Paste.prototype._handleImage = function(src) {
                        var loader;
                        return loader = new Image,
                            loader.onload = function(_this) {
                                return function() {
                                    var blob, canvas, ctx, dataURL;
                                    canvas = document.createElement("canvas"),
                                        canvas.width = loader.width,
                                        canvas.height = loader.height,
                                        ctx = canvas.getContext("2d"),
                                        ctx.drawImage(loader, 0, 0, canvas.width, canvas.height),
                                        dataURL = null;
                                    try {
                                        dataURL = canvas.toDataURL("image/png"),
                                            blob = dataURLtoBlob(dataURL)
                                    } catch (_error) {}
                                    return dataURL ? _this._target.trigger("pasteImage", {
                                            blob: blob,
                                            dataURL: dataURL,
                                            width: loader.width,
                                            height: loader.height
                                        }) : void 0
                                }
                            }(this),
                            loader.src = src
                    }
                    ,
                    Paste.prototype._checkImagesInContainer = function(cb) {
                        var img, timespan, _i, _len, _ref;
                        for (timespan = Math.floor(1e3 * Math.random()),
                                 _ref = this._container.find("img"),
                                 _i = 0,
                                 _len = _ref.length; _len > _i; _i++)
                            img = _ref[_i],
                                img["_paste_marked_" + timespan] = !0;
                        return setTimeout(function(_this) {
                            return function() {
                                var _j, _len1, _ref1, _results;
                                for (_ref1 = _this._container.find("img"),
                                         _results = [],
                                         _j = 0,
                                         _len1 = _ref1.length; _len1 > _j; _j++)
                                    img = _ref1[_j],
                                    img["_paste_marked_" + timespan] || cb(img.src),
                                        _results.push($(img).remove());
                                return _results
                            }
                        }(this), 1)
                    }
                    ,
                    Paste
            }()
    }
        .call(this),
    function(win) {
        function isLocalStorageNameSupported() {
            try {
                return localStorageName in win && win[localStorageName]
            } catch (err) {
                return !1
            }
        }
        function withIEStorage(storeFunction) {
            return function() {
                var args = Array.prototype.slice.call(arguments, 0);
                args.unshift(storage),
                    storageOwner.appendChild(storage),
                    storage.addBehavior("#default#userData"),
                    storage.load(localStorageName);
                var result = storeFunction.apply(store, args);
                return storageOwner.removeChild(storage),
                    result
            }
        }
        function ieKeyFix(key) {
            return key.replace(forbiddenCharsRegex, "___")
        }
        var storage, store = {}, doc = win.document, localStorageName = "localStorage", scriptTag = "script";
        if (store.disabled = !1,
                store.set = function(key, value) {}
                ,
                store.get = function(key) {}
                ,
                store.remove = function(key) {}
                ,
                store.clear = function() {}
                ,
                store.transact = function(key, defaultVal, transactionFn) {
                    var val = store.get(key);
                    null == transactionFn && (transactionFn = defaultVal,
                        defaultVal = null),
                    "undefined" == typeof val && (val = defaultVal || {}),
                        transactionFn(val),
                        store.set(key, val)
                }
                ,
                store.getAll = function() {}
                ,
                store.forEach = function() {}
                ,
                store.serialize = function(value) {
                    return JSON.stringify(value)
                }
                ,
                store.deserialize = function(value) {
                    if ("string" != typeof value)
                        return void 0;
                    try {
                        return JSON.parse(value)
                    } catch (e) {
                        return value || void 0
                    }
                }
                ,
                isLocalStorageNameSupported())
            storage = win[localStorageName],
                store.set = function(key, val) {
                    return void 0 === val ? store.remove(key) : (storage.setItem(key, store.serialize(val)),
                            val)
                }
                ,
                store.get = function(key) {
                    return store.deserialize(storage.getItem(key))
                }
                ,
                store.remove = function(key) {
                    storage.removeItem(key)
                }
                ,
                store.clear = function() {
                    storage.clear()
                }
                ,
                store.getAll = function() {
                    var ret = {};
                    return store.forEach(function(key, val) {
                        ret[key] = val
                    }),
                        ret
                }
                ,
                store.forEach = function(callback) {
                    for (var i = 0; i < storage.length; i++) {
                        var key = storage.key(i);
                        callback(key, store.get(key))
                    }
                }
            ;
        else if (doc.documentElement.addBehavior) {
            var storageOwner, storageContainer;
            try {
                storageContainer = new ActiveXObject("htmlfile"),
                    storageContainer.open(),
                    storageContainer.write("<" + scriptTag + ">document.w=window</" + scriptTag + '><iframe src="/favicon.ico"></iframe>'),
                    storageContainer.close(),
                    storageOwner = storageContainer.w.frames[0].document,
                    storage = storageOwner.createElement("div")
            } catch (e) {
                storage = doc.createElement("div"),
                    storageOwner = doc.body
            }
            var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");
            store.set = withIEStorage(function(storage, key, val) {
                return key = ieKeyFix(key),
                    void 0 === val ? store.remove(key) : (storage.setAttribute(key, store.serialize(val)),
                            storage.save(localStorageName),
                            val)
            }),
                store.get = withIEStorage(function(storage, key) {
                    return key = ieKeyFix(key),
                        store.deserialize(storage.getAttribute(key))
                }),
                store.remove = withIEStorage(function(storage, key) {
                    key = ieKeyFix(key),
                        storage.removeAttribute(key),
                        storage.save(localStorageName)
                }),
                store.clear = withIEStorage(function(storage) {
                    var attributes = storage.XMLDocument.documentElement.attributes;
                    storage.load(localStorageName);
                    for (var attr, i = 0; attr = attributes[i]; i++)
                        storage.removeAttribute(attr.name);
                    storage.save(localStorageName)
                }),
                store.getAll = function(storage) {
                    var ret = {};
                    return store.forEach(function(key, val) {
                        ret[key] = val
                    }),
                        ret
                }
                ,
                store.forEach = withIEStorage(function(storage, callback) {
                    for (var attr, attributes = storage.XMLDocument.documentElement.attributes, i = 0; attr = attributes[i]; ++i)
                        callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
                })
        }
        try {
            var testKey = "__storejs__";
            store.set(testKey, testKey),
            store.get(testKey) != testKey && (store.disabled = !0),
                store.remove(testKey)
        } catch (e) {
            store.disabled = !0
        }
        store.enabled = !store.disabled,
            "undefined" != typeof module && module.exports ? module.exports = store : "function" == typeof define && define.amd ? define(store) : win.store = store
    }(this.window || global),
    function(global, factory) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : global.moment = factory()
    }(this, function() {
        "use strict";
        function utils_hooks__hooks() {
            return hookCallback.apply(null, arguments)
        }
        function setHookCallback(callback) {
            hookCallback = callback
        }
        function isArray(input) {
            return "[object Array]" === Object.prototype.toString.call(input)
        }
        function isDate(input) {
            return input instanceof Date || "[object Date]" === Object.prototype.toString.call(input)
        }
        function map(arr, fn) {
            var i, res = [];
            for (i = 0; i < arr.length; ++i)
                res.push(fn(arr[i], i));
            return res
        }
        function hasOwnProp(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }
        function extend(a, b) {
            for (var i in b)
                hasOwnProp(b, i) && (a[i] = b[i]);
            return hasOwnProp(b, "toString") && (a.toString = b.toString),
            hasOwnProp(b, "valueOf") && (a.valueOf = b.valueOf),
                a
        }
        function create_utc__createUTC(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, !0).utc()
        }
        function defaultParsingFlags() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }
        function getParsingFlags(m) {
            return null == m._pf && (m._pf = defaultParsingFlags()),
                m._pf
        }
        function valid__isValid(m) {
            if (null == m._isValid) {
                var flags = getParsingFlags(m);
                m._isValid = !(isNaN(m._d.getTime()) || !(flags.overflow < 0) || flags.empty || flags.invalidMonth || flags.invalidWeekday || flags.nullInput || flags.invalidFormat || flags.userInvalidated),
                m._strict && (m._isValid = m._isValid && 0 === flags.charsLeftOver && 0 === flags.unusedTokens.length && void 0 === flags.bigHour)
            }
            return m._isValid
        }
        function valid__createInvalid(flags) {
            var m = create_utc__createUTC(NaN);
            return null != flags ? extend(getParsingFlags(m), flags) : getParsingFlags(m).userInvalidated = !0,
                m
        }
        function copyConfig(to, from) {
            var i, prop, val;
            if ("undefined" != typeof from._isAMomentObject && (to._isAMomentObject = from._isAMomentObject),
                "undefined" != typeof from._i && (to._i = from._i),
                "undefined" != typeof from._f && (to._f = from._f),
                "undefined" != typeof from._l && (to._l = from._l),
                "undefined" != typeof from._strict && (to._strict = from._strict),
                "undefined" != typeof from._tzm && (to._tzm = from._tzm),
                "undefined" != typeof from._isUTC && (to._isUTC = from._isUTC),
                "undefined" != typeof from._offset && (to._offset = from._offset),
                "undefined" != typeof from._pf && (to._pf = getParsingFlags(from)),
                "undefined" != typeof from._locale && (to._locale = from._locale),
                momentProperties.length > 0)
                for (i in momentProperties)
                    prop = momentProperties[i],
                        val = from[prop],
                    "undefined" != typeof val && (to[prop] = val);
            return to
        }
        function Moment(config) {
            copyConfig(this, config),
                this._d = new Date(null != config._d ? config._d.getTime() : NaN),
            updateInProgress === !1 && (updateInProgress = !0,
                utils_hooks__hooks.updateOffset(this),
                updateInProgress = !1)
        }
        function isMoment(obj) {
            return obj instanceof Moment || null != obj && null != obj._isAMomentObject
        }
        function absFloor(number) {
            return 0 > number ? Math.ceil(number) : Math.floor(number)
        }
        function toInt(argumentForCoercion) {
            var coercedNumber = +argumentForCoercion
                , value = 0;
            return 0 !== coercedNumber && isFinite(coercedNumber) && (value = absFloor(coercedNumber)),
                value
        }
        function compareArrays(array1, array2, dontConvert) {
            var i, len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0;
            for (i = 0; len > i; i++)
                (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) && diffs++;
            return diffs + lengthDiff
        }
        function Locale() {}
        function normalizeLocale(key) {
            return key ? key.toLowerCase().replace("_", "-") : key
        }
        function chooseLocale(names) {
            for (var j, next, locale, split, i = 0; i < names.length; ) {
                for (split = normalizeLocale(names[i]).split("-"),
                         j = split.length,
                         next = normalizeLocale(names[i + 1]),
                         next = next ? next.split("-") : null; j > 0; ) {
                    if (locale = loadLocale(split.slice(0, j).join("-")))
                        return locale;
                    if (next && next.length >= j && compareArrays(split, next, !0) >= j - 1)
                        break;
                    j--
                }
                i++
            }
            return null
        }
        function loadLocale(name) {
            var oldLocale = null;
            if (!locales[name] && "undefined" != typeof module && module && module.exports)
                try {
                    oldLocale = globalLocale._abbr,
                        require("./locale/" + name),
                        locale_locales__getSetGlobalLocale(oldLocale)
                } catch (e) {}
            return locales[name]
        }
        function locale_locales__getSetGlobalLocale(key, values) {
            var data;
            return key && (data = "undefined" == typeof values ? locale_locales__getLocale(key) : defineLocale(key, values),
            data && (globalLocale = data)),
                globalLocale._abbr
        }
        function defineLocale(name, values) {
            return null !== values ? (values.abbr = name,
                    locales[name] = locales[name] || new Locale,
                    locales[name].set(values),
                    locale_locales__getSetGlobalLocale(name),
                    locales[name]) : (delete locales[name],
                    null)
        }
        function locale_locales__getLocale(key) {
            var locale;
            if (key && key._locale && key._locale._abbr && (key = key._locale._abbr),
                    !key)
                return globalLocale;
            if (!isArray(key)) {
                if (locale = loadLocale(key))
                    return locale;
                key = [key]
            }
            return chooseLocale(key)
        }
        function addUnitAlias(unit, shorthand) {
            var lowerCase = unit.toLowerCase();
            aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit
        }
        function normalizeUnits(units) {
            return "string" == typeof units ? aliases[units] || aliases[units.toLowerCase()] : void 0
        }
        function normalizeObjectUnits(inputObject) {
            var normalizedProp, prop, normalizedInput = {};
            for (prop in inputObject)
                hasOwnProp(inputObject, prop) && (normalizedProp = normalizeUnits(prop),
                normalizedProp && (normalizedInput[normalizedProp] = inputObject[prop]));
            return normalizedInput
        }
        function makeGetSet(unit, keepTime) {
            return function(value) {
                return null != value ? (get_set__set(this, unit, value),
                        utils_hooks__hooks.updateOffset(this, keepTime),
                        this) : get_set__get(this, unit)
            }
        }
        function get_set__get(mom, unit) {
            return mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]()
        }
        function get_set__set(mom, unit, value) {
            return mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value)
        }
        function getSet(units, value) {
            var unit;
            if ("object" == typeof units)
                for (unit in units)
                    this.set(unit, units[unit]);
            else if (units = normalizeUnits(units),
                "function" == typeof this[units])
                return this[units](value);
            return this
        }
        function zeroFill(number, targetLength, forceSign) {
            var absNumber = "" + Math.abs(number)
                , zerosToFill = targetLength - absNumber.length
                , sign = number >= 0;
            return (sign ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber
        }
        function addFormatToken(token, padded, ordinal, callback) {
            var func = callback;
            "string" == typeof callback && (func = function() {
                    return this[callback]()
                }
            ),
            token && (formatTokenFunctions[token] = func),
            padded && (formatTokenFunctions[padded[0]] = function() {
                    return zeroFill(func.apply(this, arguments), padded[1], padded[2])
                }
            ),
            ordinal && (formatTokenFunctions[ordinal] = function() {
                    return this.localeData().ordinal(func.apply(this, arguments), token)
                }
            )
        }
        function removeFormattingTokens(input) {
            return input.match(/\[[\s\S]/) ? input.replace(/^\[|\]$/g, "") : input.replace(/\\/g, "")
        }
        function makeFormatFunction(format) {
            var i, length, array = format.match(formattingTokens);
            for (i = 0,
                     length = array.length; length > i; i++)
                formatTokenFunctions[array[i]] ? array[i] = formatTokenFunctions[array[i]] : array[i] = removeFormattingTokens(array[i]);
            return function(mom) {
                var output = "";
                for (i = 0; length > i; i++)
                    output += array[i]instanceof Function ? array[i].call(mom, format) : array[i];
                return output
            }
        }
        function formatMoment(m, format) {
            return m.isValid() ? (format = expandFormat(format, m.localeData()),
                    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format),
                    formatFunctions[format](m)) : m.localeData().invalidDate()
        }
        function expandFormat(format, locale) {
            function replaceLongDateFormatTokens(input) {
                return locale.longDateFormat(input) || input
            }
            var i = 5;
            for (localFormattingTokens.lastIndex = 0; i >= 0 && localFormattingTokens.test(format); )
                format = format.replace(localFormattingTokens, replaceLongDateFormatTokens),
                    localFormattingTokens.lastIndex = 0,
                    i -= 1;
            return format
        }
        function isFunction(sth) {
            return "function" == typeof sth && "[object Function]" === Object.prototype.toString.call(sth)
        }
        function addRegexToken(token, regex, strictRegex) {
            regexes[token] = isFunction(regex) ? regex : function(isStrict) {
                    return isStrict && strictRegex ? strictRegex : regex
                }
        }
        function getParseRegexForToken(token, config) {
            return hasOwnProp(regexes, token) ? regexes[token](config._strict, config._locale) : new RegExp(unescapeFormat(token))
        }
        function unescapeFormat(s) {
            return s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4
            }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        function addParseToken(token, callback) {
            var i, func = callback;
            for ("string" == typeof token && (token = [token]),
                 "number" == typeof callback && (func = function(input, array) {
                         array[callback] = toInt(input)
                     }
                 ),
                     i = 0; i < token.length; i++)
                tokens[token[i]] = func
        }
        function addWeekParseToken(token, callback) {
            addParseToken(token, function(input, array, config, token) {
                config._w = config._w || {},
                    callback(input, config._w, config, token)
            })
        }
        function addTimeToArrayFromToken(token, input, config) {
            null != input && hasOwnProp(tokens, token) && tokens[token](input, config._a, config, token)
        }
        function daysInMonth(year, month) {
            return new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
        }
        function localeMonths(m) {
            return this._months[m.month()]
        }
        function localeMonthsShort(m) {
            return this._monthsShort[m.month()]
        }
        function localeMonthsParse(monthName, format, strict) {
            var i, mom, regex;
            for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                     i = 0; 12 > i; i++) {
                if (mom = create_utc__createUTC([2e3, i]),
                    strict && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$","i"),
                        this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$","i")),
                    strict || this._monthsParse[i] || (regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, ""),
                        this._monthsParse[i] = new RegExp(regex.replace(".", ""),"i")),
                    strict && "MMMM" === format && this._longMonthsParse[i].test(monthName))
                    return i;
                if (strict && "MMM" === format && this._shortMonthsParse[i].test(monthName))
                    return i;
                if (!strict && this._monthsParse[i].test(monthName))
                    return i
            }
        }
        function setMonth(mom, value) {
            var dayOfMonth;
            return "string" == typeof value && (value = mom.localeData().monthsParse(value),
            "number" != typeof value) ? mom : (dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value)),
                    mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth),
                    mom)
        }
        function getSetMonth(value) {
            return null != value ? (setMonth(this, value),
                    utils_hooks__hooks.updateOffset(this, !0),
                    this) : get_set__get(this, "Month")
        }
        function getDaysInMonth() {
            return daysInMonth(this.year(), this.month())
        }
        function checkOverflow(m) {
            var overflow, a = m._a;
            return a && -2 === getParsingFlags(m).overflow && (overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || 24 === a[HOUR] && (0 !== a[MINUTE] || 0 !== a[SECOND] || 0 !== a[MILLISECOND]) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1,
            getParsingFlags(m)._overflowDayOfYear && (YEAR > overflow || overflow > DATE) && (overflow = DATE),
                getParsingFlags(m).overflow = overflow),
                m
        }
        function warn(msg) {
            utils_hooks__hooks.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + msg)
        }
        function deprecate(msg, fn) {
            var firstTime = !0;
            return extend(function() {
                return firstTime && (warn(msg + "\n" + (new Error).stack),
                    firstTime = !1),
                    fn.apply(this, arguments)
            }, fn)
        }
        function deprecateSimple(name, msg) {
            deprecations[name] || (warn(msg),
                deprecations[name] = !0)
        }
        function configFromISO(config) {
            var i, l, string = config._i, match = from_string__isoRegex.exec(string);
            if (match) {
                for (getParsingFlags(config).iso = !0,
                         i = 0,
                         l = isoDates.length; l > i; i++)
                    if (isoDates[i][1].exec(string)) {
                        config._f = isoDates[i][0];
                        break
                    }
                for (i = 0,
                         l = isoTimes.length; l > i; i++)
                    if (isoTimes[i][1].exec(string)) {
                        config._f += (match[6] || " ") + isoTimes[i][0];
                        break
                    }
                string.match(matchOffset) && (config._f += "Z"),
                    configFromStringAndFormat(config)
            } else
                config._isValid = !1
        }
        function configFromString(config) {
            var matched = aspNetJsonRegex.exec(config._i);
            return null !== matched ? void (config._d = new Date(+matched[1])) : (configFromISO(config),
                    void (config._isValid === !1 && (delete config._isValid,
                        utils_hooks__hooks.createFromInputFallback(config))))
        }
        function createDate(y, m, d, h, M, s, ms) {
            var date = new Date(y,m,d,h,M,s,ms);
            return 1970 > y && date.setFullYear(y),
                date
        }
        function createUTCDate(y) {
            var date = new Date(Date.UTC.apply(null, arguments));
            return 1970 > y && date.setUTCFullYear(y),
                date
        }
        function daysInYear(year) {
            return isLeapYear(year) ? 366 : 365
        }
        function isLeapYear(year) {
            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
        }
        function getIsLeapYear() {
            return isLeapYear(this.year())
        }
        function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
            var adjustedMoment, end = firstDayOfWeekOfYear - firstDayOfWeek, daysToDayOfWeek = firstDayOfWeekOfYear - mom.day();
            return daysToDayOfWeek > end && (daysToDayOfWeek -= 7),
            end - 7 > daysToDayOfWeek && (daysToDayOfWeek += 7),
                adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, "d"),
                {
                    week: Math.ceil(adjustedMoment.dayOfYear() / 7),
                    year: adjustedMoment.year()
                }
        }
        function localeWeek(mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week
        }
        function localeFirstDayOfWeek() {
            return this._week.dow
        }
        function localeFirstDayOfYear() {
            return this._week.doy
        }
        function getSetWeek(input) {
            var week = this.localeData().week(this);
            return null == input ? week : this.add(7 * (input - week), "d")
        }
        function getSetISOWeek(input) {
            var week = weekOfYear(this, 1, 4).week;
            return null == input ? week : this.add(7 * (input - week), "d")
        }
        function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
            var dayOfYear, week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear, janX = createUTCDate(year, 0, 1 + week1Jan), d = janX.getUTCDay();
            return firstDayOfWeek > d && (d += 7),
                weekday = null != weekday ? 1 * weekday : firstDayOfWeek,
                dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday,
                {
                    year: dayOfYear > 0 ? year : year - 1,
                    dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
                }
        }
        function getSetDayOfYear(input) {
            var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == input ? dayOfYear : this.add(input - dayOfYear, "d")
        }
        function defaults(a, b, c) {
            return null != a ? a : null != b ? b : c
        }
        function currentDateArray(config) {
            var now = new Date;
            return config._useUTC ? [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()] : [now.getFullYear(), now.getMonth(), now.getDate()]
        }
        function configFromArray(config) {
            var i, date, currentDate, yearToUse, input = [];
            if (!config._d) {
                for (currentDate = currentDateArray(config),
                     config._w && null == config._a[DATE] && null == config._a[MONTH] && dayOfYearFromWeekInfo(config),
                     config._dayOfYear && (yearToUse = defaults(config._a[YEAR], currentDate[YEAR]),
                     config._dayOfYear > daysInYear(yearToUse) && (getParsingFlags(config)._overflowDayOfYear = !0),
                         date = createUTCDate(yearToUse, 0, config._dayOfYear),
                         config._a[MONTH] = date.getUTCMonth(),
                         config._a[DATE] = date.getUTCDate()),
                         i = 0; 3 > i && null == config._a[i]; ++i)
                    config._a[i] = input[i] = currentDate[i];
                for (; 7 > i; i++)
                    config._a[i] = input[i] = null == config._a[i] ? 2 === i ? 1 : 0 : config._a[i];
                24 === config._a[HOUR] && 0 === config._a[MINUTE] && 0 === config._a[SECOND] && 0 === config._a[MILLISECOND] && (config._nextDay = !0,
                    config._a[HOUR] = 0),
                    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input),
                null != config._tzm && config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm),
                config._nextDay && (config._a[HOUR] = 24)
            }
        }
        function dayOfYearFromWeekInfo(config) {
            var w, weekYear, week, weekday, dow, doy, temp;
            w = config._w,
                null != w.GG || null != w.W || null != w.E ? (dow = 1,
                        doy = 4,
                        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year),
                        week = defaults(w.W, 1),
                        weekday = defaults(w.E, 1)) : (dow = config._locale._week.dow,
                        doy = config._locale._week.doy,
                        weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year),
                        week = defaults(w.w, 1),
                        null != w.d ? (weekday = w.d,
                            dow > weekday && ++week) : weekday = null != w.e ? w.e + dow : dow),
                temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow),
                config._a[YEAR] = temp.year,
                config._dayOfYear = temp.dayOfYear
        }
        function configFromStringAndFormat(config) {
            if (config._f === utils_hooks__hooks.ISO_8601)
                return void configFromISO(config);
            config._a = [],
                getParsingFlags(config).empty = !0;
            var i, parsedInput, tokens, token, skipped, string = "" + config._i, stringLength = string.length, totalParsedInputLength = 0;
            for (tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [],
                     i = 0; i < tokens.length; i++)
                token = tokens[i],
                    parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0],
                parsedInput && (skipped = string.substr(0, string.indexOf(parsedInput)),
                skipped.length > 0 && getParsingFlags(config).unusedInput.push(skipped),
                    string = string.slice(string.indexOf(parsedInput) + parsedInput.length),
                    totalParsedInputLength += parsedInput.length),
                    formatTokenFunctions[token] ? (parsedInput ? getParsingFlags(config).empty = !1 : getParsingFlags(config).unusedTokens.push(token),
                            addTimeToArrayFromToken(token, parsedInput, config)) : config._strict && !parsedInput && getParsingFlags(config).unusedTokens.push(token);
            getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength,
            string.length > 0 && getParsingFlags(config).unusedInput.push(string),
            getParsingFlags(config).bigHour === !0 && config._a[HOUR] <= 12 && config._a[HOUR] > 0 && (getParsingFlags(config).bigHour = void 0),
                config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem),
                configFromArray(config),
                checkOverflow(config)
        }
        function meridiemFixWrap(locale, hour, meridiem) {
            var isPm;
            return null == meridiem ? hour : null != locale.meridiemHour ? locale.meridiemHour(hour, meridiem) : null != locale.isPM ? (isPm = locale.isPM(meridiem),
                        isPm && 12 > hour && (hour += 12),
                        isPm || 12 !== hour || (hour = 0),
                            hour) : hour
        }
        function configFromStringAndArray(config) {
            var tempConfig, bestMoment, scoreToBeat, i, currentScore;
            if (0 === config._f.length)
                return getParsingFlags(config).invalidFormat = !0,
                    void (config._d = new Date(NaN));
            for (i = 0; i < config._f.length; i++)
                currentScore = 0,
                    tempConfig = copyConfig({}, config),
                null != config._useUTC && (tempConfig._useUTC = config._useUTC),
                    tempConfig._f = config._f[i],
                    configFromStringAndFormat(tempConfig),
                valid__isValid(tempConfig) && (currentScore += getParsingFlags(tempConfig).charsLeftOver,
                    currentScore += 10 * getParsingFlags(tempConfig).unusedTokens.length,
                    getParsingFlags(tempConfig).score = currentScore,
                (null == scoreToBeat || scoreToBeat > currentScore) && (scoreToBeat = currentScore,
                    bestMoment = tempConfig));
            extend(config, bestMoment || tempConfig)
        }
        function configFromObject(config) {
            if (!config._d) {
                var i = normalizeObjectUnits(config._i);
                config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond],
                    configFromArray(config)
            }
        }
        function createFromConfig(config) {
            var res = new Moment(checkOverflow(prepareConfig(config)));
            return res._nextDay && (res.add(1, "d"),
                res._nextDay = void 0),
                res
        }
        function prepareConfig(config) {
            var input = config._i
                , format = config._f;
            return config._locale = config._locale || locale_locales__getLocale(config._l),
                null === input || void 0 === format && "" === input ? valid__createInvalid({
                        nullInput: !0
                    }) : ("string" == typeof input && (config._i = input = config._locale.preparse(input)),
                        isMoment(input) ? new Moment(checkOverflow(input)) : (isArray(format) ? configFromStringAndArray(config) : format ? configFromStringAndFormat(config) : isDate(input) ? config._d = input : configFromInput(config),
                                config))
        }
        function configFromInput(config) {
            var input = config._i;
            void 0 === input ? config._d = new Date : isDate(input) ? config._d = new Date(+input) : "string" == typeof input ? configFromString(config) : isArray(input) ? (config._a = map(input.slice(0), function(obj) {
                                return parseInt(obj, 10)
                            }),
                                configFromArray(config)) : "object" == typeof input ? configFromObject(config) : "number" == typeof input ? config._d = new Date(input) : utils_hooks__hooks.createFromInputFallback(config)
        }
        function createLocalOrUTC(input, format, locale, strict, isUTC) {
            var c = {};
            return "boolean" == typeof locale && (strict = locale,
                locale = void 0),
                c._isAMomentObject = !0,
                c._useUTC = c._isUTC = isUTC,
                c._l = locale,
                c._i = input,
                c._f = format,
                c._strict = strict,
                createFromConfig(c)
        }
        function local__createLocal(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, !1)
        }
        function pickBy(fn, moments) {
            var res, i;
            if (1 === moments.length && isArray(moments[0]) && (moments = moments[0]),
                    !moments.length)
                return local__createLocal();
            for (res = moments[0],
                     i = 1; i < moments.length; ++i)
                (!moments[i].isValid() || moments[i][fn](res)) && (res = moments[i]);
            return res
        }
        function min() {
            var args = [].slice.call(arguments, 0);
            return pickBy("isBefore", args)
        }
        function max() {
            var args = [].slice.call(arguments, 0);
            return pickBy("isAfter", args)
        }
        function Duration(duration) {
            var normalizedInput = normalizeObjectUnits(duration)
                , years = normalizedInput.year || 0
                , quarters = normalizedInput.quarter || 0
                , months = normalizedInput.month || 0
                , weeks = normalizedInput.week || 0
                , days = normalizedInput.day || 0
                , hours = normalizedInput.hour || 0
                , minutes = normalizedInput.minute || 0
                , seconds = normalizedInput.second || 0
                , milliseconds = normalizedInput.millisecond || 0;
            this._milliseconds = +milliseconds + 1e3 * seconds + 6e4 * minutes + 36e5 * hours,
                this._days = +days + 7 * weeks,
                this._months = +months + 3 * quarters + 12 * years,
                this._data = {},
                this._locale = locale_locales__getLocale(),
                this._bubble()
        }
        function isDuration(obj) {
            return obj instanceof Duration
        }
        function offset(token, separator) {
            addFormatToken(token, 0, 0, function() {
                var offset = this.utcOffset()
                    , sign = "+";
                return 0 > offset && (offset = -offset,
                    sign = "-"),
                sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2)
            })
        }
        function offsetFromString(string) {
            var matches = (string || "").match(matchOffset) || []
                , chunk = matches[matches.length - 1] || []
                , parts = (chunk + "").match(chunkOffset) || ["-", 0, 0]
                , minutes = +(60 * parts[1]) + toInt(parts[2]);
            return "+" === parts[0] ? minutes : -minutes
        }
        function cloneWithOffset(input, model) {
            var res, diff;
            return model._isUTC ? (res = model.clone(),
                    diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - +res,
                    res._d.setTime(+res._d + diff),
                    utils_hooks__hooks.updateOffset(res, !1),
                    res) : local__createLocal(input).local()
        }
        function getDateOffset(m) {
            return 15 * -Math.round(m._d.getTimezoneOffset() / 15)
        }
        function getSetOffset(input, keepLocalTime) {
            var localAdjust, offset = this._offset || 0;
            return null != input ? ("string" == typeof input && (input = offsetFromString(input)),
                Math.abs(input) < 16 && (input = 60 * input),
                !this._isUTC && keepLocalTime && (localAdjust = getDateOffset(this)),
                    this._offset = input,
                    this._isUTC = !0,
                null != localAdjust && this.add(localAdjust, "m"),
                offset !== input && (!keepLocalTime || this._changeInProgress ? add_subtract__addSubtract(this, create__createDuration(input - offset, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                        utils_hooks__hooks.updateOffset(this, !0),
                        this._changeInProgress = null)),
                    this) : this._isUTC ? offset : getDateOffset(this)
        }
        function getSetZone(input, keepLocalTime) {
            return null != input ? ("string" != typeof input && (input = -input),
                    this.utcOffset(input, keepLocalTime),
                    this) : -this.utcOffset()
        }
        function setOffsetToUTC(keepLocalTime) {
            return this.utcOffset(0, keepLocalTime)
        }
        function setOffsetToLocal(keepLocalTime) {
            return this._isUTC && (this.utcOffset(0, keepLocalTime),
                this._isUTC = !1,
            keepLocalTime && this.subtract(getDateOffset(this), "m")),
                this
        }
        function setOffsetToParsedOffset() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(offsetFromString(this._i)),
                this
        }
        function hasAlignedHourOffset(input) {
            return input = input ? local__createLocal(input).utcOffset() : 0,
            (this.utcOffset() - input) % 60 === 0
        }
        function isDaylightSavingTime() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }
        function isDaylightSavingTimeShifted() {
            if ("undefined" != typeof this._isDSTShifted)
                return this._isDSTShifted;
            var c = {};
            if (copyConfig(c, this),
                    c = prepareConfig(c),
                    c._a) {
                var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
                this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0
            } else
                this._isDSTShifted = !1;
            return this._isDSTShifted
        }
        function isLocal() {
            return !this._isUTC
        }
        function isUtcOffset() {
            return this._isUTC
        }
        function isUtc() {
            return this._isUTC && 0 === this._offset
        }
        function create__createDuration(input, key) {
            var sign, ret, diffRes, duration = input, match = null;
            return isDuration(input) ? duration = {
                    ms: input._milliseconds,
                    d: input._days,
                    M: input._months
                } : "number" == typeof input ? (duration = {},
                        key ? duration[key] = input : duration.milliseconds = input) : (match = aspNetRegex.exec(input)) ? (sign = "-" === match[1] ? -1 : 1,
                            duration = {
                                y: 0,
                                d: toInt(match[DATE]) * sign,
                                h: toInt(match[HOUR]) * sign,
                                m: toInt(match[MINUTE]) * sign,
                                s: toInt(match[SECOND]) * sign,
                                ms: toInt(match[MILLISECOND]) * sign
                            }) : (match = create__isoRegex.exec(input)) ? (sign = "-" === match[1] ? -1 : 1,
                                duration = {
                                    y: parseIso(match[2], sign),
                                    M: parseIso(match[3], sign),
                                    d: parseIso(match[4], sign),
                                    h: parseIso(match[5], sign),
                                    m: parseIso(match[6], sign),
                                    s: parseIso(match[7], sign),
                                    w: parseIso(match[8], sign)
                                }) : null == duration ? duration = {} : "object" == typeof duration && ("from"in duration || "to"in duration) && (diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to)),
                                    duration = {},
                                    duration.ms = diffRes.milliseconds,
                                    duration.M = diffRes.months),
                ret = new Duration(duration),
            isDuration(input) && hasOwnProp(input, "_locale") && (ret._locale = input._locale),
                ret
        }
        function parseIso(inp, sign) {
            var res = inp && parseFloat(inp.replace(",", "."));
            return (isNaN(res) ? 0 : res) * sign
        }
        function positiveMomentsDifference(base, other) {
            var res = {
                milliseconds: 0,
                months: 0
            };
            return res.months = other.month() - base.month() + 12 * (other.year() - base.year()),
            base.clone().add(res.months, "M").isAfter(other) && --res.months,
                res.milliseconds = +other - +base.clone().add(res.months, "M"),
                res
        }
        function momentsDifference(base, other) {
            var res;
            return other = cloneWithOffset(other, base),
                base.isBefore(other) ? res = positiveMomentsDifference(base, other) : (res = positiveMomentsDifference(other, base),
                        res.milliseconds = -res.milliseconds,
                        res.months = -res.months),
                res
        }
        function createAdder(direction, name) {
            return function(val, period) {
                var dur, tmp;
                return null === period || isNaN(+period) || (deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period)."),
                    tmp = val,
                    val = period,
                    period = tmp),
                    val = "string" == typeof val ? +val : val,
                    dur = create__createDuration(val, period),
                    add_subtract__addSubtract(this, dur, direction),
                    this
            }
        }
        function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
            var milliseconds = duration._milliseconds
                , days = duration._days
                , months = duration._months;
            updateOffset = null == updateOffset ? !0 : updateOffset,
            milliseconds && mom._d.setTime(+mom._d + milliseconds * isAdding),
            days && get_set__set(mom, "Date", get_set__get(mom, "Date") + days * isAdding),
            months && setMonth(mom, get_set__get(mom, "Month") + months * isAdding),
            updateOffset && utils_hooks__hooks.updateOffset(mom, days || months)
        }
        function moment_calendar__calendar(time, formats) {
            var now = time || local__createLocal()
                , sod = cloneWithOffset(now, this).startOf("day")
                , diff = this.diff(sod, "days", !0)
                , format = -6 > diff ? "sameElse" : -1 > diff ? "lastWeek" : 0 > diff ? "lastDay" : 1 > diff ? "sameDay" : 2 > diff ? "nextDay" : 7 > diff ? "nextWeek" : "sameElse";
            return this.format(formats && formats[format] || this.localeData().calendar(format, this, local__createLocal(now)))
        }
        function clone() {
            return new Moment(this)
        }
        function isAfter(input, units) {
            var inputMs;
            return units = normalizeUnits("undefined" != typeof units ? units : "millisecond"),
                "millisecond" === units ? (input = isMoment(input) ? input : local__createLocal(input),
                    +this > +input) : (inputMs = isMoment(input) ? +input : +local__createLocal(input),
                    inputMs < +this.clone().startOf(units))
        }
        function isBefore(input, units) {
            var inputMs;
            return units = normalizeUnits("undefined" != typeof units ? units : "millisecond"),
                "millisecond" === units ? (input = isMoment(input) ? input : local__createLocal(input),
                    +input > +this) : (inputMs = isMoment(input) ? +input : +local__createLocal(input),
                    +this.clone().endOf(units) < inputMs)
        }
        function isBetween(from, to, units) {
            return this.isAfter(from, units) && this.isBefore(to, units)
        }
        function isSame(input, units) {
            var inputMs;
            return units = normalizeUnits(units || "millisecond"),
                "millisecond" === units ? (input = isMoment(input) ? input : local__createLocal(input),
                    +this === +input) : (inputMs = +local__createLocal(input),
                    +this.clone().startOf(units) <= inputMs && inputMs <= +this.clone().endOf(units))
        }
        function diff(input, units, asFloat) {
            var delta, output, that = cloneWithOffset(input, this), zoneDelta = 6e4 * (that.utcOffset() - this.utcOffset());
            return units = normalizeUnits(units),
                "year" === units || "month" === units || "quarter" === units ? (output = monthDiff(this, that),
                        "quarter" === units ? output /= 3 : "year" === units && (output /= 12)) : (delta = this - that,
                        output = "second" === units ? delta / 1e3 : "minute" === units ? delta / 6e4 : "hour" === units ? delta / 36e5 : "day" === units ? (delta - zoneDelta) / 864e5 : "week" === units ? (delta - zoneDelta) / 6048e5 : delta),
                asFloat ? output : absFloor(output)
        }
        function monthDiff(a, b) {
            var anchor2, adjust, wholeMonthDiff = 12 * (b.year() - a.year()) + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months");
            return 0 > b - anchor ? (anchor2 = a.clone().add(wholeMonthDiff - 1, "months"),
                    adjust = (b - anchor) / (anchor - anchor2)) : (anchor2 = a.clone().add(wholeMonthDiff + 1, "months"),
                    adjust = (b - anchor) / (anchor2 - anchor)),
                -(wholeMonthDiff + adjust)
        }
        function toString() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }
        function moment_format__toISOString() {
            var m = this.clone().utc();
            return 0 < m.year() && m.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }
        function format(inputString) {
            var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
            return this.localeData().postformat(output)
        }
        function from(time, withoutSuffix) {
            return this.isValid() ? create__createDuration({
                    to: this,
                    from: time
                }).locale(this.locale()).humanize(!withoutSuffix) : this.localeData().invalidDate()
        }
        function fromNow(withoutSuffix) {
            return this.from(local__createLocal(), withoutSuffix)
        }
        function to(time, withoutSuffix) {
            return this.isValid() ? create__createDuration({
                    from: this,
                    to: time
                }).locale(this.locale()).humanize(!withoutSuffix) : this.localeData().invalidDate()
        }
        function toNow(withoutSuffix) {
            return this.to(local__createLocal(), withoutSuffix)
        }
        function locale(key) {
            var newLocaleData;
            return void 0 === key ? this._locale._abbr : (newLocaleData = locale_locales__getLocale(key),
                null != newLocaleData && (this._locale = newLocaleData),
                    this)
        }
        function localeData() {
            return this._locale
        }
        function startOf(units) {
            switch (units = normalizeUnits(units)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === units && this.weekday(0),
            "isoWeek" === units && this.isoWeekday(1),
            "quarter" === units && this.month(3 * Math.floor(this.month() / 3)),
                this
        }
        function endOf(units) {
            return units = normalizeUnits(units),
                void 0 === units || "millisecond" === units ? this : this.startOf(units).add(1, "isoWeek" === units ? "week" : units).subtract(1, "ms")
        }
        function to_type__valueOf() {
            return +this._d - 6e4 * (this._offset || 0)
        }
        function unix() {
            return Math.floor(+this / 1e3)
        }
        function toDate() {
            return this._offset ? new Date(+this) : this._d
        }
        function toArray() {
            var m = this;
            return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()]
        }
        function toObject() {
            var m = this;
            return {
                years: m.year(),
                months: m.month(),
                date: m.date(),
                hours: m.hours(),
                minutes: m.minutes(),
                seconds: m.seconds(),
                milliseconds: m.milliseconds()
            }
        }
        function moment_valid__isValid() {
            return valid__isValid(this)
        }
        function parsingFlags() {
            return extend({}, getParsingFlags(this))
        }
        function invalidAt() {
            return getParsingFlags(this).overflow
        }
        function addWeekYearFormatToken(token, getter) {
            addFormatToken(0, [token, token.length], 0, getter)
        }
        function weeksInYear(year, dow, doy) {
            return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week
        }
        function getSetWeekYear(input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == input ? year : this.add(input - year, "y")
        }
        function getSetISOWeekYear(input) {
            var year = weekOfYear(this, 1, 4).year;
            return null == input ? year : this.add(input - year, "y")
        }
        function getISOWeeksInYear() {
            return weeksInYear(this.year(), 1, 4)
        }
        function getWeeksInYear() {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy)
        }
        function getSetQuarter(input) {
            return null == input ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (input - 1) + this.month() % 3)
        }
        function parseWeekday(input, locale) {
            return "string" != typeof input ? input : isNaN(input) ? (input = locale.weekdaysParse(input),
                        "number" == typeof input ? input : null) : parseInt(input, 10)
        }
        function localeWeekdays(m) {
            return this._weekdays[m.day()]
        }
        function localeWeekdaysShort(m) {
            return this._weekdaysShort[m.day()]
        }
        function localeWeekdaysMin(m) {
            return this._weekdaysMin[m.day()]
        }
        function localeWeekdaysParse(weekdayName) {
            var i, mom, regex;
            for (this._weekdaysParse = this._weekdaysParse || [],
                     i = 0; 7 > i; i++)
                if (this._weekdaysParse[i] || (mom = local__createLocal([2e3, 1]).day(i),
                        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, ""),
                        this._weekdaysParse[i] = new RegExp(regex.replace(".", ""),"i")),
                        this._weekdaysParse[i].test(weekdayName))
                    return i
        }
        function getSetDayOfWeek(input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != input ? (input = parseWeekday(input, this.localeData()),
                    this.add(input - day, "d")) : day
        }
        function getSetLocaleDayOfWeek(input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == input ? weekday : this.add(input - weekday, "d")
        }
        function getSetISODayOfWeek(input) {
            return null == input ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7)
        }
        function meridiem(token, lowercase) {
            addFormatToken(token, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), lowercase)
            })
        }
        function matchMeridiem(isStrict, locale) {
            return locale._meridiemParse
        }
        function localeIsPM(input) {
            return "p" === (input + "").toLowerCase().charAt(0)
        }
        function localeMeridiem(hours, minutes, isLower) {
            return hours > 11 ? isLower ? "pm" : "PM" : isLower ? "am" : "AM"
        }
        function parseMs(input, array) {
            array[MILLISECOND] = toInt(1e3 * ("0." + input))
        }
        function getZoneAbbr() {
            return this._isUTC ? "UTC" : ""
        }
        function getZoneName() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }
        function moment__createUnix(input) {
            return local__createLocal(1e3 * input)
        }
        function moment__createInZone() {
            return local__createLocal.apply(null, arguments).parseZone()
        }
        function locale_calendar__calendar(key, mom, now) {
            var output = this._calendar[key];
            return "function" == typeof output ? output.call(mom, now) : output
        }
        function longDateFormat(key) {
            var format = this._longDateFormat[key]
                , formatUpper = this._longDateFormat[key.toUpperCase()];
            return format || !formatUpper ? format : (this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
                    return val.slice(1)
                }),
                    this._longDateFormat[key])
        }
        function invalidDate() {
            return this._invalidDate
        }
        function ordinal(number) {
            return this._ordinal.replace("%d", number)
        }
        function preParsePostFormat(string) {
            return string
        }
        function relative__relativeTime(number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return "function" == typeof output ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number)
        }
        function pastFuture(diff, output) {
            var format = this._relativeTime[diff > 0 ? "future" : "past"];
            return "function" == typeof format ? format(output) : format.replace(/%s/i, output)
        }
        function locale_set__set(config) {
            var prop, i;
            for (i in config)
                prop = config[i],
                    "function" == typeof prop ? this[i] = prop : this["_" + i] = prop;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }
        function lists__get(format, index, field, setter) {
            var locale = locale_locales__getLocale()
                , utc = create_utc__createUTC().set(setter, index);
            return locale[field](utc, format)
        }
        function list(format, index, field, count, setter) {
            if ("number" == typeof format && (index = format,
                    format = void 0),
                    format = format || "",
                null != index)
                return lists__get(format, index, field, setter);
            var i, out = [];
            for (i = 0; count > i; i++)
                out[i] = lists__get(format, i, field, setter);
            return out
        }
        function lists__listMonths(format, index) {
            return list(format, index, "months", 12, "month")
        }
        function lists__listMonthsShort(format, index) {
            return list(format, index, "monthsShort", 12, "month")
        }
        function lists__listWeekdays(format, index) {
            return list(format, index, "weekdays", 7, "day")
        }
        function lists__listWeekdaysShort(format, index) {
            return list(format, index, "weekdaysShort", 7, "day")
        }
        function lists__listWeekdaysMin(format, index) {
            return list(format, index, "weekdaysMin", 7, "day")
        }
        function duration_abs__abs() {
            var data = this._data;
            return this._milliseconds = mathAbs(this._milliseconds),
                this._days = mathAbs(this._days),
                this._months = mathAbs(this._months),
                data.milliseconds = mathAbs(data.milliseconds),
                data.seconds = mathAbs(data.seconds),
                data.minutes = mathAbs(data.minutes),
                data.hours = mathAbs(data.hours),
                data.months = mathAbs(data.months),
                data.years = mathAbs(data.years),
                this
        }
        function duration_add_subtract__addSubtract(duration, input, value, direction) {
            var other = create__createDuration(input, value);
            return duration._milliseconds += direction * other._milliseconds,
                duration._days += direction * other._days,
                duration._months += direction * other._months,
                duration._bubble()
        }
        function duration_add_subtract__add(input, value) {
            return duration_add_subtract__addSubtract(this, input, value, 1)
        }
        function duration_add_subtract__subtract(input, value) {
            return duration_add_subtract__addSubtract(this, input, value, -1)
        }
        function absCeil(number) {
            return 0 > number ? Math.floor(number) : Math.ceil(number)
        }
        function bubble() {
            var seconds, minutes, hours, years, monthsFromDays, milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data;
            return milliseconds >= 0 && days >= 0 && months >= 0 || 0 >= milliseconds && 0 >= days && 0 >= months || (milliseconds += 864e5 * absCeil(monthsToDays(months) + days),
                days = 0,
                months = 0),
                data.milliseconds = milliseconds % 1e3,
                seconds = absFloor(milliseconds / 1e3),
                data.seconds = seconds % 60,
                minutes = absFloor(seconds / 60),
                data.minutes = minutes % 60,
                hours = absFloor(minutes / 60),
                data.hours = hours % 24,
                days += absFloor(hours / 24),
                monthsFromDays = absFloor(daysToMonths(days)),
                months += monthsFromDays,
                days -= absCeil(monthsToDays(monthsFromDays)),
                years = absFloor(months / 12),
                months %= 12,
                data.days = days,
                data.months = months,
                data.years = years,
                this
        }
        function daysToMonths(days) {
            return 4800 * days / 146097
        }
        function monthsToDays(months) {
            return 146097 * months / 4800
        }
        function as(units) {
            var days, months, milliseconds = this._milliseconds;
            if (units = normalizeUnits(units),
                "month" === units || "year" === units)
                return days = this._days + milliseconds / 864e5,
                    months = this._months + daysToMonths(days),
                    "month" === units ? months : months / 12;
            switch (days = this._days + Math.round(monthsToDays(this._months)),
                units) {
                case "week":
                    return days / 7 + milliseconds / 6048e5;
                case "day":
                    return days + milliseconds / 864e5;
                case "hour":
                    return 24 * days + milliseconds / 36e5;
                case "minute":
                    return 1440 * days + milliseconds / 6e4;
                case "second":
                    return 86400 * days + milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * days) + milliseconds;
                default:
                    throw new Error("Unknown unit " + units)
            }
        }
        function duration_as__valueOf() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * toInt(this._months / 12)
        }
        function makeAs(alias) {
            return function() {
                return this.as(alias)
            }
        }
        function duration_get__get(units) {
            return units = normalizeUnits(units),
                this[units + "s"]()
        }
        function makeGetter(name) {
            return function() {
                return this._data[name]
            }
        }
        function weeks() {
            return absFloor(this.days() / 7)
        }
        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
            return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture)
        }
        function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
            var duration = create__createDuration(posNegDuration).abs()
                , seconds = round(duration.as("s"))
                , minutes = round(duration.as("m"))
                , hours = round(duration.as("h"))
                , days = round(duration.as("d"))
                , months = round(duration.as("M"))
                , years = round(duration.as("y"))
                , a = seconds < thresholds.s && ["s", seconds] || 1 === minutes && ["m"] || minutes < thresholds.m && ["mm", minutes] || 1 === hours && ["h"] || hours < thresholds.h && ["hh", hours] || 1 === days && ["d"] || days < thresholds.d && ["dd", days] || 1 === months && ["M"] || months < thresholds.M && ["MM", months] || 1 === years && ["y"] || ["yy", years];
            return a[2] = withoutSuffix,
                a[3] = +posNegDuration > 0,
                a[4] = locale,
                substituteTimeAgo.apply(null, a)
        }
        function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
            return void 0 === thresholds[threshold] ? !1 : void 0 === limit ? thresholds[threshold] : (thresholds[threshold] = limit,
                        !0)
        }
        function humanize(withSuffix) {
            var locale = this.localeData()
                , output = duration_humanize__relativeTime(this, !withSuffix, locale);
            return withSuffix && (output = locale.pastFuture(+this, output)),
                locale.postformat(output)
        }
        function iso_string__toISOString() {
            var minutes, hours, years, seconds = iso_string__abs(this._milliseconds) / 1e3, days = iso_string__abs(this._days), months = iso_string__abs(this._months);
            minutes = absFloor(seconds / 60),
                hours = absFloor(minutes / 60),
                seconds %= 60,
                minutes %= 60,
                years = absFloor(months / 12),
                months %= 12;
            var Y = years
                , M = months
                , D = days
                , h = hours
                , m = minutes
                , s = seconds
                , total = this.asSeconds();
            return total ? (0 > total ? "-" : "") + "P" + (Y ? Y + "Y" : "") + (M ? M + "M" : "") + (D ? D + "D" : "") + (h || m || s ? "T" : "") + (h ? h + "H" : "") + (m ? m + "M" : "") + (s ? s + "S" : "") : "P0D"
        }
        var hookCallback, globalLocale, momentProperties = utils_hooks__hooks.momentProperties = [], updateInProgress = !1, locales = {}, aliases = {}, formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {}, match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, regexes = {}, tokens = {}, YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6;
        addFormatToken("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }),
            addFormatToken("MMM", 0, 0, function(format) {
                return this.localeData().monthsShort(this, format)
            }),
            addFormatToken("MMMM", 0, 0, function(format) {
                return this.localeData().months(this, format)
            }),
            addUnitAlias("month", "M"),
            addRegexToken("M", match1to2),
            addRegexToken("MM", match1to2, match2),
            addRegexToken("MMM", matchWord),
            addRegexToken("MMMM", matchWord),
            addParseToken(["M", "MM"], function(input, array) {
                array[MONTH] = toInt(input) - 1
            }),
            addParseToken(["MMM", "MMMM"], function(input, array, config, token) {
                var month = config._locale.monthsParse(input, token, config._strict);
                null != month ? array[MONTH] = month : getParsingFlags(config).invalidMonth = input
            });
        var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            , defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
            , deprecations = {};
        utils_hooks__hooks.suppressDeprecationWarnings = !1;
        var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
            , isoDates = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]]
            , isoTimes = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]]
            , aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
        utils_hooks__hooks.createFromInputFallback = deprecate("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(config) {
            config._d = new Date(config._i + (config._useUTC ? " UTC" : ""))
        }),
            addFormatToken(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }),
            addFormatToken(0, ["YYYY", 4], 0, "year"),
            addFormatToken(0, ["YYYYY", 5], 0, "year"),
            addFormatToken(0, ["YYYYYY", 6, !0], 0, "year"),
            addUnitAlias("year", "y"),
            addRegexToken("Y", matchSigned),
            addRegexToken("YY", match1to2, match2),
            addRegexToken("YYYY", match1to4, match4),
            addRegexToken("YYYYY", match1to6, match6),
            addRegexToken("YYYYYY", match1to6, match6),
            addParseToken(["YYYYY", "YYYYYY"], YEAR),
            addParseToken("YYYY", function(input, array) {
                array[YEAR] = 2 === input.length ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input)
            }),
            addParseToken("YY", function(input, array) {
                array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input)
            }),
            utils_hooks__hooks.parseTwoDigitYear = function(input) {
                return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3)
            }
        ;
        var getSetYear = makeGetSet("FullYear", !1);
        addFormatToken("w", ["ww", 2], "wo", "week"),
            addFormatToken("W", ["WW", 2], "Wo", "isoWeek"),
            addUnitAlias("week", "w"),
            addUnitAlias("isoWeek", "W"),
            addRegexToken("w", match1to2),
            addRegexToken("ww", match1to2, match2),
            addRegexToken("W", match1to2),
            addRegexToken("WW", match1to2, match2),
            addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token) {
                week[token.substr(0, 1)] = toInt(input)
            });
        var defaultLocaleWeek = {
            dow: 0,
            doy: 6
        };
        addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            addUnitAlias("dayOfYear", "DDD"),
            addRegexToken("DDD", match1to3),
            addRegexToken("DDDD", match3),
            addParseToken(["DDD", "DDDD"], function(input, array, config) {
                config._dayOfYear = toInt(input)
            }),
            utils_hooks__hooks.ISO_8601 = function() {}
        ;
        var prototypeMin = deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var other = local__createLocal.apply(null, arguments);
            return this > other ? this : other
        })
            , prototypeMax = deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var other = local__createLocal.apply(null, arguments);
            return other > this ? this : other
        });
        offset("Z", ":"),
            offset("ZZ", ""),
            addRegexToken("Z", matchOffset),
            addRegexToken("ZZ", matchOffset),
            addParseToken(["Z", "ZZ"], function(input, array, config) {
                config._useUTC = !0,
                    config._tzm = offsetFromString(input)
            });
        var chunkOffset = /([\+\-]|\d\d)/gi;
        utils_hooks__hooks.updateOffset = function() {}
        ;
        var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/
            , create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        create__createDuration.fn = Duration.prototype;
        var add_subtract__add = createAdder(1, "add")
            , add_subtract__subtract = createAdder(-1, "subtract");
        utils_hooks__hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
            return void 0 === key ? this.localeData() : this.locale(key)
        });
        addFormatToken(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }),
            addFormatToken(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }),
            addWeekYearFormatToken("gggg", "weekYear"),
            addWeekYearFormatToken("ggggg", "weekYear"),
            addWeekYearFormatToken("GGGG", "isoWeekYear"),
            addWeekYearFormatToken("GGGGG", "isoWeekYear"),
            addUnitAlias("weekYear", "gg"),
            addUnitAlias("isoWeekYear", "GG"),
            addRegexToken("G", matchSigned),
            addRegexToken("g", matchSigned),
            addRegexToken("GG", match1to2, match2),
            addRegexToken("gg", match1to2, match2),
            addRegexToken("GGGG", match1to4, match4),
            addRegexToken("gggg", match1to4, match4),
            addRegexToken("GGGGG", match1to6, match6),
            addRegexToken("ggggg", match1to6, match6),
            addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token) {
                week[token.substr(0, 2)] = toInt(input)
            }),
            addWeekParseToken(["gg", "GG"], function(input, week, config, token) {
                week[token] = utils_hooks__hooks.parseTwoDigitYear(input)
            }),
            addFormatToken("Q", 0, 0, "quarter"),
            addUnitAlias("quarter", "Q"),
            addRegexToken("Q", match1),
            addParseToken("Q", function(input, array) {
                array[MONTH] = 3 * (toInt(input) - 1)
            }),
            addFormatToken("D", ["DD", 2], "Do", "date"),
            addUnitAlias("date", "D"),
            addRegexToken("D", match1to2),
            addRegexToken("DD", match1to2, match2),
            addRegexToken("Do", function(isStrict, locale) {
                return isStrict ? locale._ordinalParse : locale._ordinalParseLenient
            }),
            addParseToken(["D", "DD"], DATE),
            addParseToken("Do", function(input, array) {
                array[DATE] = toInt(input.match(match1to2)[0], 10)
            });
        var getSetDayOfMonth = makeGetSet("Date", !0);
        addFormatToken("d", 0, "do", "day"),
            addFormatToken("dd", 0, 0, function(format) {
                return this.localeData().weekdaysMin(this, format)
            }),
            addFormatToken("ddd", 0, 0, function(format) {
                return this.localeData().weekdaysShort(this, format)
            }),
            addFormatToken("dddd", 0, 0, function(format) {
                return this.localeData().weekdays(this, format)
            }),
            addFormatToken("e", 0, 0, "weekday"),
            addFormatToken("E", 0, 0, "isoWeekday"),
            addUnitAlias("day", "d"),
            addUnitAlias("weekday", "e"),
            addUnitAlias("isoWeekday", "E"),
            addRegexToken("d", match1to2),
            addRegexToken("e", match1to2),
            addRegexToken("E", match1to2),
            addRegexToken("dd", matchWord),
            addRegexToken("ddd", matchWord),
            addRegexToken("dddd", matchWord),
            addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config) {
                var weekday = config._locale.weekdaysParse(input);
                null != weekday ? week.d = weekday : getParsingFlags(config).invalidWeekday = input
            }),
            addWeekParseToken(["d", "e", "E"], function(input, week, config, token) {
                week[token] = toInt(input)
            });
        var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
            , defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
            , defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        addFormatToken("H", ["HH", 2], 0, "hour"),
            addFormatToken("h", ["hh", 2], 0, function() {
                return this.hours() % 12 || 12
            }),
            meridiem("a", !0),
            meridiem("A", !1),
            addUnitAlias("hour", "h"),
            addRegexToken("a", matchMeridiem),
            addRegexToken("A", matchMeridiem),
            addRegexToken("H", match1to2),
            addRegexToken("h", match1to2),
            addRegexToken("HH", match1to2, match2),
            addRegexToken("hh", match1to2, match2),
            addParseToken(["H", "HH"], HOUR),
            addParseToken(["a", "A"], function(input, array, config) {
                config._isPm = config._locale.isPM(input),
                    config._meridiem = input
            }),
            addParseToken(["h", "hh"], function(input, array, config) {
                array[HOUR] = toInt(input),
                    getParsingFlags(config).bigHour = !0
            });
        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i
            , getSetHour = makeGetSet("Hours", !0);
        addFormatToken("m", ["mm", 2], 0, "minute"),
            addUnitAlias("minute", "m"),
            addRegexToken("m", match1to2),
            addRegexToken("mm", match1to2, match2),
            addParseToken(["m", "mm"], MINUTE);
        var getSetMinute = makeGetSet("Minutes", !1);
        addFormatToken("s", ["ss", 2], 0, "second"),
            addUnitAlias("second", "s"),
            addRegexToken("s", match1to2),
            addRegexToken("ss", match1to2, match2),
            addParseToken(["s", "ss"], SECOND);
        var getSetSecond = makeGetSet("Seconds", !1);
        addFormatToken("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }),
            addFormatToken(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }),
            addFormatToken(0, ["SSS", 3], 0, "millisecond"),
            addFormatToken(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }),
            addFormatToken(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }),
            addFormatToken(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }),
            addFormatToken(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }),
            addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }),
            addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }),
            addUnitAlias("millisecond", "ms"),
            addRegexToken("S", match1to3, match1),
            addRegexToken("SS", match1to3, match2),
            addRegexToken("SSS", match1to3, match3);
        var token;
        for (token = "SSSS"; token.length <= 9; token += "S")
            addRegexToken(token, matchUnsigned);
        for (token = "S"; token.length <= 9; token += "S")
            addParseToken(token, parseMs);
        var getSetMillisecond = makeGetSet("Milliseconds", !1);
        addFormatToken("z", 0, 0, "zoneAbbr"),
            addFormatToken("zz", 0, 0, "zoneName");
        var momentPrototype__proto = Moment.prototype;
        momentPrototype__proto.add = add_subtract__add,
            momentPrototype__proto.calendar = moment_calendar__calendar,
            momentPrototype__proto.clone = clone,
            momentPrototype__proto.diff = diff,
            momentPrototype__proto.endOf = endOf,
            momentPrototype__proto.format = format,
            momentPrototype__proto.from = from,
            momentPrototype__proto.fromNow = fromNow,
            momentPrototype__proto.to = to,
            momentPrototype__proto.toNow = toNow,
            momentPrototype__proto.get = getSet,
            momentPrototype__proto.invalidAt = invalidAt,
            momentPrototype__proto.isAfter = isAfter,
            momentPrototype__proto.isBefore = isBefore,
            momentPrototype__proto.isBetween = isBetween,
            momentPrototype__proto.isSame = isSame,
            momentPrototype__proto.isValid = moment_valid__isValid,
            momentPrototype__proto.lang = lang,
            momentPrototype__proto.locale = locale,
            momentPrototype__proto.localeData = localeData,
            momentPrototype__proto.max = prototypeMax,
            momentPrototype__proto.min = prototypeMin,
            momentPrototype__proto.parsingFlags = parsingFlags,
            momentPrototype__proto.set = getSet,
            momentPrototype__proto.startOf = startOf,
            momentPrototype__proto.subtract = add_subtract__subtract,
            momentPrototype__proto.toArray = toArray,
            momentPrototype__proto.toObject = toObject,
            momentPrototype__proto.toDate = toDate,
            momentPrototype__proto.toISOString = moment_format__toISOString,
            momentPrototype__proto.toJSON = moment_format__toISOString,
            momentPrototype__proto.toString = toString,
            momentPrototype__proto.unix = unix,
            momentPrototype__proto.valueOf = to_type__valueOf,
            momentPrototype__proto.year = getSetYear,
            momentPrototype__proto.isLeapYear = getIsLeapYear,
            momentPrototype__proto.weekYear = getSetWeekYear,
            momentPrototype__proto.isoWeekYear = getSetISOWeekYear,
            momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter,
            momentPrototype__proto.month = getSetMonth,
            momentPrototype__proto.daysInMonth = getDaysInMonth,
            momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek,
            momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek,
            momentPrototype__proto.weeksInYear = getWeeksInYear,
            momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear,
            momentPrototype__proto.date = getSetDayOfMonth,
            momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek,
            momentPrototype__proto.weekday = getSetLocaleDayOfWeek,
            momentPrototype__proto.isoWeekday = getSetISODayOfWeek,
            momentPrototype__proto.dayOfYear = getSetDayOfYear,
            momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour,
            momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute,
            momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond,
            momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond,
            momentPrototype__proto.utcOffset = getSetOffset,
            momentPrototype__proto.utc = setOffsetToUTC,
            momentPrototype__proto.local = setOffsetToLocal,
            momentPrototype__proto.parseZone = setOffsetToParsedOffset,
            momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset,
            momentPrototype__proto.isDST = isDaylightSavingTime,
            momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted,
            momentPrototype__proto.isLocal = isLocal,
            momentPrototype__proto.isUtcOffset = isUtcOffset,
            momentPrototype__proto.isUtc = isUtc,
            momentPrototype__proto.isUTC = isUtc,
            momentPrototype__proto.zoneAbbr = getZoneAbbr,
            momentPrototype__proto.zoneName = getZoneName,
            momentPrototype__proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth),
            momentPrototype__proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth),
            momentPrototype__proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear),
            momentPrototype__proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", getSetZone);
        var momentPrototype = momentPrototype__proto
            , defaultCalendar = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        }
            , defaultLongDateFormat = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        }
            , defaultInvalidDate = "Invalid date"
            , defaultOrdinal = "%d"
            , defaultOrdinalParse = /\d{1,2}/
            , defaultRelativeTime = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        }
            , prototype__proto = Locale.prototype;
        prototype__proto._calendar = defaultCalendar,
            prototype__proto.calendar = locale_calendar__calendar,
            prototype__proto._longDateFormat = defaultLongDateFormat,
            prototype__proto.longDateFormat = longDateFormat,
            prototype__proto._invalidDate = defaultInvalidDate,
            prototype__proto.invalidDate = invalidDate,
            prototype__proto._ordinal = defaultOrdinal,
            prototype__proto.ordinal = ordinal,
            prototype__proto._ordinalParse = defaultOrdinalParse,
            prototype__proto.preparse = preParsePostFormat,
            prototype__proto.postformat = preParsePostFormat,
            prototype__proto._relativeTime = defaultRelativeTime,
            prototype__proto.relativeTime = relative__relativeTime,
            prototype__proto.pastFuture = pastFuture,
            prototype__proto.set = locale_set__set,
            prototype__proto.months = localeMonths,
            prototype__proto._months = defaultLocaleMonths,
            prototype__proto.monthsShort = localeMonthsShort,
            prototype__proto._monthsShort = defaultLocaleMonthsShort,
            prototype__proto.monthsParse = localeMonthsParse,
            prototype__proto.week = localeWeek,
            prototype__proto._week = defaultLocaleWeek,
            prototype__proto.firstDayOfYear = localeFirstDayOfYear,
            prototype__proto.firstDayOfWeek = localeFirstDayOfWeek,
            prototype__proto.weekdays = localeWeekdays,
            prototype__proto._weekdays = defaultLocaleWeekdays,
            prototype__proto.weekdaysMin = localeWeekdaysMin,
            prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin,
            prototype__proto.weekdaysShort = localeWeekdaysShort,
            prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort,
            prototype__proto.weekdaysParse = localeWeekdaysParse,
            prototype__proto.isPM = localeIsPM,
            prototype__proto._meridiemParse = defaultLocaleMeridiemParse,
            prototype__proto.meridiem = localeMeridiem,
            locale_locales__getSetGlobalLocale("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(number) {
                    var b = number % 10
                        , output = 1 === toInt(number % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                    return number + output
                }
            }),
            utils_hooks__hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", locale_locales__getSetGlobalLocale),
            utils_hooks__hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", locale_locales__getLocale);
        var mathAbs = Math.abs
            , asMilliseconds = makeAs("ms")
            , asSeconds = makeAs("s")
            , asMinutes = makeAs("m")
            , asHours = makeAs("h")
            , asDays = makeAs("d")
            , asWeeks = makeAs("w")
            , asMonths = makeAs("M")
            , asYears = makeAs("y")
            , milliseconds = makeGetter("milliseconds")
            , seconds = makeGetter("seconds")
            , minutes = makeGetter("minutes")
            , hours = makeGetter("hours")
            , days = makeGetter("days")
            , months = makeGetter("months")
            , years = makeGetter("years")
            , round = Math.round
            , thresholds = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }
            , iso_string__abs = Math.abs
            , duration_prototype__proto = Duration.prototype;
        duration_prototype__proto.abs = duration_abs__abs,
            duration_prototype__proto.add = duration_add_subtract__add,
            duration_prototype__proto.subtract = duration_add_subtract__subtract,
            duration_prototype__proto.as = as,
            duration_prototype__proto.asMilliseconds = asMilliseconds,
            duration_prototype__proto.asSeconds = asSeconds,
            duration_prototype__proto.asMinutes = asMinutes,
            duration_prototype__proto.asHours = asHours,
            duration_prototype__proto.asDays = asDays,
            duration_prototype__proto.asWeeks = asWeeks,
            duration_prototype__proto.asMonths = asMonths,
            duration_prototype__proto.asYears = asYears,
            duration_prototype__proto.valueOf = duration_as__valueOf,
            duration_prototype__proto._bubble = bubble,
            duration_prototype__proto.get = duration_get__get,
            duration_prototype__proto.milliseconds = milliseconds,
            duration_prototype__proto.seconds = seconds,
            duration_prototype__proto.minutes = minutes,
            duration_prototype__proto.hours = hours,
            duration_prototype__proto.days = days,
            duration_prototype__proto.weeks = weeks,
            duration_prototype__proto.months = months,
            duration_prototype__proto.years = years,
            duration_prototype__proto.humanize = humanize,
            duration_prototype__proto.toISOString = iso_string__toISOString,
            duration_prototype__proto.toString = iso_string__toISOString,
            duration_prototype__proto.toJSON = iso_string__toISOString,
            duration_prototype__proto.locale = locale,
            duration_prototype__proto.localeData = localeData,
            duration_prototype__proto.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", iso_string__toISOString),
            duration_prototype__proto.lang = lang,
            addFormatToken("X", 0, 0, "unix"),
            addFormatToken("x", 0, 0, "valueOf"),
            addRegexToken("x", matchSigned),
            addRegexToken("X", matchTimestamp),
            addParseToken("X", function(input, array, config) {
                config._d = new Date(1e3 * parseFloat(input, 10))
            }),
            addParseToken("x", function(input, array, config) {
                config._d = new Date(toInt(input))
            }),
            utils_hooks__hooks.version = "2.10.6",
            setHookCallback(local__createLocal),
            utils_hooks__hooks.fn = momentPrototype,
            utils_hooks__hooks.min = min,
            utils_hooks__hooks.max = max,
            utils_hooks__hooks.utc = create_utc__createUTC,
            utils_hooks__hooks.unix = moment__createUnix,
            utils_hooks__hooks.months = lists__listMonths,
            utils_hooks__hooks.isDate = isDate,
            utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale,
            utils_hooks__hooks.invalid = valid__createInvalid,
            utils_hooks__hooks.duration = create__createDuration,
            utils_hooks__hooks.isMoment = isMoment,
            utils_hooks__hooks.weekdays = lists__listWeekdays,
            utils_hooks__hooks.parseZone = moment__createInZone,
            utils_hooks__hooks.localeData = locale_locales__getLocale,
            utils_hooks__hooks.isDuration = isDuration,
            utils_hooks__hooks.monthsShort = lists__listMonthsShort,
            utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin,
            utils_hooks__hooks.defineLocale = defineLocale,
            utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort,
            utils_hooks__hooks.normalizeUnits = normalizeUnits,
            utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
        var _moment = utils_hooks__hooks;
        return _moment
    }),
    function(root) {
        var slice = Array.prototype.slice
            , Events = _.extend({
            __snapshot: {},
            always: function(name, callback, context) {
                this.__snapshot[name] && callback.apply(context, this.__snapshot[name]),
                    this.on(name, callback, context)
            },
            onceAlways: function(name, callback, context) {
                this.__snapshot[name] ? callback.apply(context, this.__snapshot[name]) : this.once(name, callback, context)
            },
            snapshot: function(name) {
                this.__snapshot[name] = slice.call(arguments, 1)
            }
        }, Backbone.Events)
            , JDJR = root.JDJR || {};
        JDJR.BASE_PATH = "https://biz.jd.com/",
            JDJR.ASSETS_PATH = JDJR.BASE_PATH + "dist",
            JDJR.API_PATH = JDJR.BASE_PATH + "api/",
            JDJR.DATA_PATH = JDJR.BASE_PATH + "data/",
            JDJR.SERVICE_PATH = JDJR.BASE_PATH + "service/",
            JDJR.BLANK_IMG = JDJR.ASSETS_PATH + "/images/clear.gif",
            JDJR.APP_CONTAINER = $("#pageContainer"),
            JDJR.MEDIATOR = _.extend({}, Events),
            JDJR.tpl = {
                store: {},
                list: {},
                event: null,
                navRouter: null
            },
            JDJR.MEDIATOR = _.extend({
                __snapshot: {},
                always: function(name, callback, context) {
                    this.__snapshot[name] && callback.apply(context, this.__snapshot[name]),
                        this.on(name, callback, context)
                },
                onceAlways: function(name, callback, context) {
                    this.__snapshot[name] ? callback.apply(context, this.__snapshot[name]) : this.once(name, callback, context)
                },
                snapshot: function(name) {
                    this.__snapshot[name] = slice.call(arguments, 1)
                }
            }, Backbone.Events),
            JDJR.FUNCTION_VERSION = "1.1.6",
            browser = function() {
                function uaMatch(ua) {
                    var match = rMsie.exec(ua);
                    if (null != match)
                        return {
                            browser: "IE",
                            version: match[2] || "0"
                        };
                    var match = rFirefox.exec(ua);
                    if (null != match)
                        return {
                            browser: match[1] || "",
                            version: match[2] || "0"
                        };
                    var match = rOpera.exec(ua);
                    if (null != match)
                        return {
                            browser: match[1] || "",
                            version: match[2] || "0"
                        };
                    var match = rChrome.exec(ua);
                    if (null != match)
                        return {
                            browser: match[1] || "",
                            version: match[2] || "0"
                        };
                    var match = rSafari.exec(ua);
                    return null != match ? {
                            browser: match[2] || "",
                            version: match[1] || "0"
                        } : null != match ? {
                                browser: "",
                                version: "0"
                            } : void 0
                }
                var browser, version, userAgent = navigator.userAgent, rMsie = /(msie\s|trident.*rv:)([\w.]+)/, rFirefox = /(firefox)\/([\w.]+)/, rOpera = /(opera).+version\/([\w.]+)/, rChrome = /(chrome)\/([\w.]+)/, rSafari = /version\/([\w.]+).*(safari)/, browserMatch = (userAgent.toLowerCase(),
                    uaMatch(userAgent.toLowerCase()));
                return browserMatch.browser && (browser = browserMatch.browser,
                    version = browserMatch.version),
                    {
                        browser: browser,
                        version: version
                    }
            }(),
            seajs.config({
                paths: {
                    base: JDJR.ASSETS_PATH + "/js/base",
                    css: JDJR.ASSETS_PATH + "/css",
                    js: JDJR.ASSETS_PATH + "/js",
                    libs: JDJR.ASSETS_PATH + "/js/libs",
                    uilibs: JDJR.ASSETS_PATH + "/js/base/uilibs",
                    arale: JDJR.ASSETS_PATH + "/js/libs/seajs/sea-modules/arale",
                    gallery: JDJR.ASSETS_PATH + "/js/libs/seajs/sea-modules/gallery",
                    modules: JDJR.BASE_PATH + "modules",
                    tpls: JDJR.BASE_PATH + "tpls",
                    data: JDJR.BASE_PATH + "data",
                    service: JDJR.BASE_PATH + "service"
                },
                alias: {
                    $: {
                        src: "base",
                        exports: function() {
                            return $.browser = browser,
                                $
                        }
                    },
                    "base-moment": {
                        src: "base",
                        exports: function() {
                            return moment
                        }
                    },
                    "base-store": {
                        src: "base",
                        exports: function() {
                            return store
                        }
                    },
                    app: "js/app",
                    base: "js/base",
                    log: "js/base/log",
                    filter: "js/base/filter",
                    uploader: "js/base/uploader",
                    dialog: "js/base/dialog/dialog",
                    range: "js/base/select-range/range",
                    "publich-select-range-dialog": "js/base/select-range/dialog",
                    util: "js/base/util",
                    "base-dialog": "js/base/uilibs/dialog",
                    "base-dateselect": "js/base/dateSelect",
                    "base-timeselect": "js/base/timeSelect",
                    datepicker: "js/base/calendar/datepicker",
                    "arale-base": "arale/base/1.0.1/base",
                    "arale-dialog": "arale/dialog/1.0.1/dialog",
                    "base-events_core": "arale/events/1.0.0/events",
                    "base-events": "js/base/events",
                    dnd: "uilibs/dnd",
                    select: "js/base/select/select",
                    "select-bar": "js/base/select-bar/select-bar",
                    "base-select": "uilibs/select",
                    "arale-position": "arale/position/1.0.0/position",
                    position: "uilibs/position",
                    mask: "arale/overlay/1.0.1/mask",
                    "base-handlebars": "gallery/handlebars/1.0.0/handlebars",
                    calendar: "js/base/calendar/calendar",
                    "base-calendar": "uilibs/calendar",
                    "base-placeholder": "uilibs/placeholder",
                    "base-select_core": "arale/select/0.9.3/select",
                    "base-calendar_core": "arale/calendar/0.8.5/calendar",
                    "base-json": "gallery/json/1.0.2/json",
                    "base-position_core": "arale/position/1.0.0/position",
                    "base-position": "js/base/position",
                    "base-autocomplete_core": "arale/autocomplete/1.2.0/autocomplete",
                    "base-autocomplete": "uilibs/autocomplete",
                    "base-tabs": "uilibs/tabs",
                    "base-filter": "uilibs/filter",
                    "base-fsupload": "uilibs/fsupload",
                    "base-h5uploader": "uilibs/uploader/h5uploader",
                    "base-flashuploader": "uilibs/uploader/flashuploader",
                    "base-tabs_core": "arale/switchable/0.9.12/tabs",
                    "base-overlay": "arale/overlay/1.0.1/overlay",
                    "base-widget": "arale/widget/1.0.3/widget",
                    "base-autolist": "libs/jquery.autolist",
                    "base-cookieitems": "js/base/cookie-items.js",
                    "base-jquery-scrollbar": "libs/jquery.scrollbar.js"
                }
            });
        var addPlatformClass = function() {
            var platform = /mac/i.test(navigator.userAgent) ? "mac" : "win";
            $("body").addClass("platform-" + platform)
        };
        addPlatformClass(),
            function() {
                function seajsRedirect(opts) {
                    var refUri = seajs.resolve(opts.refUri)
                        , id = seajs.resolve(opts.id)
                        , newId = opts.newId;
                    store.push({
                        refUri: refUri,
                        id: id,
                        newId: newId
                    })
                }
                var store = [];
                seajs.on("resolve", function(data) {
                    _.each(store, function(item) {
                        item.refUri == data.refUri && seajs.resolve(data.id, data.refUri) == item.id && (data.id = item.newId)
                    })
                }),
                    JDJR.seajsRedirect = seajsRedirect,
                    seajsRedirect({
                        refUri: "confirmbox_core",
                        id: "dialog_core",
                        newId: "dialog"
                    })
            }(),
            _.templateSettings = _.extend(_.templateSettings, {
                evaluate: /##([\s\S]+?)##/g,
                interpolate: /\{<\{([\s\S]+?)\}>\}/g,
                escape: /\{\{([\s\S]+?)\}\}/g
            }),
            String.prototype.startsWith = function(str) {
                return null == str || "" == str || 0 == this.length || str.length > this.length ? !1 : this.substr(0, str.length) == str ? !0 : !1
            }
            ,
            root.JDJR = JDJR,
            root.publishModel = "development",
            root.locationChange = function(url) {
                JDJR.MEDIATOR.trigger("locationChange", url)
            }
    }(window),
    define("gallery/handlebars/1.0.0/handlebars", [], function(t, e, s) {
        this.Handlebars = {},
            function(t) {
                t.VERSION = "1.0.0-rc.3",
                    t.COMPILER_REVISION = 2,
                    t.REVISION_CHANGES = {
                        1: "<= 1.0.rc.2",
                        2: ">= 1.0.0-rc.3"
                    },
                    t.helpers = {},
                    t.partials = {},
                    t.registerHelper = function(t, e, s) {
                        s && (e.not = s),
                            this.helpers[t] = e
                    }
                    ,
                    t.registerPartial = function(t, e) {
                        this.partials[t] = e
                    }
                    ,
                    t.registerHelper("helperMissing", function(t) {
                        if (2 === arguments.length)
                            return void 0;
                        throw Error("Could not find property '" + t + "'")
                    });
                var e = Object.prototype.toString
                    , s = "[object Function]";
                t.registerHelper("blockHelperMissing", function(i, n) {
                    var r = n.inverse || function() {}
                        , a = n.fn
                        , o = e.call(i);
                    return o === s && (i = i.call(this)),
                        i === !0 ? a(this) : i === !1 || null == i ? r(this) : "[object Array]" === o ? i.length > 0 ? t.helpers.each(i, n) : r(this) : a(i)
                }),
                    t.K = function() {}
                    ,
                    t.createFrame = Object.create || function(e) {
                            t.K.prototype = e;
                            var s = new t.K;
                            return t.K.prototype = null,
                                s
                        }
                    ,
                    t.logger = {
                        DEBUG: 0,
                        INFO: 1,
                        WARN: 2,
                        ERROR: 3,
                        level: 3,
                        methodMap: {
                            0: "debug",
                            1: "info",
                            2: "warn",
                            3: "error"
                        },
                        log: function(e, s) {
                            if (e >= t.logger.level) {
                                var i = t.logger.methodMap[e];
                                "undefined" != typeof console && console[i] && console[i].call(console, s)
                            }
                        }
                    },
                    t.log = function(e, s) {
                        t.logger.log(e, s)
                    }
                    ,
                    t.registerHelper("each", function(e, s) {
                        var i, n = s.fn, r = s.inverse, a = 0, o = "";
                        if (s.data && (i = t.createFrame(s.data)),
                            e && "object" == typeof e)
                            if (e instanceof Array)
                                for (var h = e.length; h > a; a++)
                                    i && (i.index = a),
                                        o += n(e[a], {
                                            data: i
                                        });
                            else
                                for (var l in e)
                                    e.hasOwnProperty(l) && (i && (i.key = l),
                                        o += n(e[l], {
                                            data: i
                                        }),
                                        a++);
                        return 0 === a && (o = r(this)),
                            o
                    }),
                    t.registerHelper("if", function(i, n) {
                        var r = e.call(i);
                        return r === s && (i = i.call(this)),
                            !i || t.Utils.isEmpty(i) ? n.inverse(this) : n.fn(this)
                    }),
                    t.registerHelper("unless", function(e, s) {
                        var i = s.fn
                            , n = s.inverse;
                        return s.fn = n,
                            s.inverse = i,
                            t.helpers["if"].call(this, e, s)
                    }),
                    t.registerHelper("with", function(t, e) {
                        return e.fn(t)
                    }),
                    t.registerHelper("log", function(e, s) {
                        var i = s.data && null != s.data.level ? parseInt(s.data.level, 10) : 1;
                        t.log(i, e)
                    })
            }(this.Handlebars);
        var i = function() {
            function t() {
                this.yy = {}
            }
            var e = {
                trace: function() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    program: 4,
                    EOF: 5,
                    simpleInverse: 6,
                    statements: 7,
                    statement: 8,
                    openInverse: 9,
                    closeBlock: 10,
                    openBlock: 11,
                    mustache: 12,
                    partial: 13,
                    CONTENT: 14,
                    COMMENT: 15,
                    OPEN_BLOCK: 16,
                    inMustache: 17,
                    CLOSE: 18,
                    OPEN_INVERSE: 19,
                    OPEN_ENDBLOCK: 20,
                    path: 21,
                    OPEN: 22,
                    OPEN_UNESCAPED: 23,
                    OPEN_PARTIAL: 24,
                    partialName: 25,
                    params: 26,
                    hash: 27,
                    DATA: 28,
                    param: 29,
                    STRING: 30,
                    INTEGER: 31,
                    BOOLEAN: 32,
                    hashSegments: 33,
                    hashSegment: 34,
                    ID: 35,
                    EQUALS: 36,
                    PARTIAL_NAME: 37,
                    pathSegments: 38,
                    SEP: 39,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    14: "CONTENT",
                    15: "COMMENT",
                    16: "OPEN_BLOCK",
                    18: "CLOSE",
                    19: "OPEN_INVERSE",
                    20: "OPEN_ENDBLOCK",
                    22: "OPEN",
                    23: "OPEN_UNESCAPED",
                    24: "OPEN_PARTIAL",
                    28: "DATA",
                    30: "STRING",
                    31: "INTEGER",
                    32: "BOOLEAN",
                    35: "ID",
                    36: "EQUALS",
                    37: "PARTIAL_NAME",
                    39: "SEP"
                },
                productions_: [0, [3, 2], [4, 2], [4, 3], [4, 2], [4, 1], [4, 1], [4, 0], [7, 1], [7, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 3], [13, 4], [6, 2], [17, 3], [17, 2], [17, 2], [17, 1], [17, 1], [26, 2], [26, 1], [29, 1], [29, 1], [29, 1], [29, 1], [29, 1], [27, 1], [33, 2], [33, 1], [34, 3], [34, 3], [34, 3], [34, 3], [34, 3], [25, 1], [21, 1], [38, 3], [38, 1]],
                performAction: function(t, e, s, i, n, r) {
                    var a = r.length - 1;
                    switch (n) {
                        case 1:
                            return r[a - 1];
                        case 2:
                            this.$ = new i.ProgramNode([],r[a]);
                            break;
                        case 3:
                            this.$ = new i.ProgramNode(r[a - 2],r[a]);
                            break;
                        case 4:
                            this.$ = new i.ProgramNode(r[a - 1],[]);
                            break;
                        case 5:
                            this.$ = new i.ProgramNode(r[a]);
                            break;
                        case 6:
                            this.$ = new i.ProgramNode([],[]);
                            break;
                        case 7:
                            this.$ = new i.ProgramNode([]);
                            break;
                        case 8:
                            this.$ = [r[a]];
                            break;
                        case 9:
                            r[a - 1].push(r[a]),
                                this.$ = r[a - 1];
                            break;
                        case 10:
                            this.$ = new i.BlockNode(r[a - 2],r[a - 1].inverse,r[a - 1],r[a]);
                            break;
                        case 11:
                            this.$ = new i.BlockNode(r[a - 2],r[a - 1],r[a - 1].inverse,r[a]);
                            break;
                        case 12:
                            this.$ = r[a];
                            break;
                        case 13:
                            this.$ = r[a];
                            break;
                        case 14:
                            this.$ = new i.ContentNode(r[a]);
                            break;
                        case 15:
                            this.$ = new i.CommentNode(r[a]);
                            break;
                        case 16:
                            this.$ = new i.MustacheNode(r[a - 1][0],r[a - 1][1]);
                            break;
                        case 17:
                            this.$ = new i.MustacheNode(r[a - 1][0],r[a - 1][1]);
                            break;
                        case 18:
                            this.$ = r[a - 1];
                            break;
                        case 19:
                            this.$ = new i.MustacheNode(r[a - 1][0],r[a - 1][1]);
                            break;
                        case 20:
                            this.$ = new i.MustacheNode(r[a - 1][0],r[a - 1][1],!0);
                            break;
                        case 21:
                            this.$ = new i.PartialNode(r[a - 1]);
                            break;
                        case 22:
                            this.$ = new i.PartialNode(r[a - 2],r[a - 1]);
                            break;
                        case 23:
                            break;
                        case 24:
                            this.$ = [[r[a - 2]].concat(r[a - 1]), r[a]];
                            break;
                        case 25:
                            this.$ = [[r[a - 1]].concat(r[a]), null];
                            break;
                        case 26:
                            this.$ = [[r[a - 1]], r[a]];
                            break;
                        case 27:
                            this.$ = [[r[a]], null];
                            break;
                        case 28:
                            this.$ = [[new i.DataNode(r[a])], null];
                            break;
                        case 29:
                            r[a - 1].push(r[a]),
                                this.$ = r[a - 1];
                            break;
                        case 30:
                            this.$ = [r[a]];
                            break;
                        case 31:
                            this.$ = r[a];
                            break;
                        case 32:
                            this.$ = new i.StringNode(r[a]);
                            break;
                        case 33:
                            this.$ = new i.IntegerNode(r[a]);
                            break;
                        case 34:
                            this.$ = new i.BooleanNode(r[a]);
                            break;
                        case 35:
                            this.$ = new i.DataNode(r[a]);
                            break;
                        case 36:
                            this.$ = new i.HashNode(r[a]);
                            break;
                        case 37:
                            r[a - 1].push(r[a]),
                                this.$ = r[a - 1];
                            break;
                        case 38:
                            this.$ = [r[a]];
                            break;
                        case 39:
                            this.$ = [r[a - 2], r[a]];
                            break;
                        case 40:
                            this.$ = [r[a - 2], new i.StringNode(r[a])];
                            break;
                        case 41:
                            this.$ = [r[a - 2], new i.IntegerNode(r[a])];
                            break;
                        case 42:
                            this.$ = [r[a - 2], new i.BooleanNode(r[a])];
                            break;
                        case 43:
                            this.$ = [r[a - 2], new i.DataNode(r[a])];
                            break;
                        case 44:
                            this.$ = new i.PartialNameNode(r[a]);
                            break;
                        case 45:
                            this.$ = new i.IdNode(r[a]);
                            break;
                        case 46:
                            r[a - 2].push(r[a]),
                                this.$ = r[a - 2];
                            break;
                        case 47:
                            this.$ = [r[a]]
                    }
                },
                table: [{
                    3: 1,
                    4: 2,
                    5: [2, 7],
                    6: 3,
                    7: 4,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 5],
                    22: [1, 14],
                    23: [1, 15],
                    24: [1, 16]
                }, {
                    1: [3]
                }, {
                    5: [1, 17]
                }, {
                    5: [2, 6],
                    7: 18,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 19],
                    20: [2, 6],
                    22: [1, 14],
                    23: [1, 15],
                    24: [1, 16]
                }, {
                    5: [2, 5],
                    6: 20,
                    8: 21,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 5],
                    20: [2, 5],
                    22: [1, 14],
                    23: [1, 15],
                    24: [1, 16]
                }, {
                    17: 23,
                    18: [1, 22],
                    21: 24,
                    28: [1, 25],
                    35: [1, 27],
                    38: 26
                }, {
                    5: [2, 8],
                    14: [2, 8],
                    15: [2, 8],
                    16: [2, 8],
                    19: [2, 8],
                    20: [2, 8],
                    22: [2, 8],
                    23: [2, 8],
                    24: [2, 8]
                }, {
                    4: 28,
                    6: 3,
                    7: 4,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 5],
                    20: [2, 7],
                    22: [1, 14],
                    23: [1, 15],
                    24: [1, 16]
                }, {
                    4: 29,
                    6: 3,
                    7: 4,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 5],
                    20: [2, 7],
                    22: [1, 14],
                    23: [1, 15],
                    24: [1, 16]
                }, {
                    5: [2, 12],
                    14: [2, 12],
                    15: [2, 12],
                    16: [2, 12],
                    19: [2, 12],
                    20: [2, 12],
                    22: [2, 12],
                    23: [2, 12],
                    24: [2, 12]
                }, {
                    5: [2, 13],
                    14: [2, 13],
                    15: [2, 13],
                    16: [2, 13],
                    19: [2, 13],
                    20: [2, 13],
                    22: [2, 13],
                    23: [2, 13],
                    24: [2, 13]
                }, {
                    5: [2, 14],
                    14: [2, 14],
                    15: [2, 14],
                    16: [2, 14],
                    19: [2, 14],
                    20: [2, 14],
                    22: [2, 14],
                    23: [2, 14],
                    24: [2, 14]
                }, {
                    5: [2, 15],
                    14: [2, 15],
                    15: [2, 15],
                    16: [2, 15],
                    19: [2, 15],
                    20: [2, 15],
                    22: [2, 15],
                    23: [2, 15],
                    24: [2, 15]
                }, {
                    17: 30,
                    21: 24,
                    28: [1, 25],
                    35: [1, 27],
                    38: 26
                }, {
                    17: 31,
                    21: 24,
                    28: [1, 25],
                    35: [1, 27],
                    38: 26
                }, {
                    17: 32,
                    21: 24,
                    28: [1, 25],
                    35: [1, 27],
                    38: 26
                }, {
                    25: 33,
                    37: [1, 34]
                }, {
                    1: [2, 1]
                }, {
                    5: [2, 2],
                    8: 21,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 19],
                    20: [2, 2],
                    22: [1, 14],
                    23: [1, 15],
                    24: [1, 16]
                }, {
                    17: 23,
                    21: 24,
                    28: [1, 25],
                    35: [1, 27],
                    38: 26
                }, {
                    5: [2, 4],
                    7: 35,
                    8: 6,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 19],
                    20: [2, 4],
                    22: [1, 14],
                    23: [1, 15],
                    24: [1, 16]
                }, {
                    5: [2, 9],
                    14: [2, 9],
                    15: [2, 9],
                    16: [2, 9],
                    19: [2, 9],
                    20: [2, 9],
                    22: [2, 9],
                    23: [2, 9],
                    24: [2, 9]
                }, {
                    5: [2, 23],
                    14: [2, 23],
                    15: [2, 23],
                    16: [2, 23],
                    19: [2, 23],
                    20: [2, 23],
                    22: [2, 23],
                    23: [2, 23],
                    24: [2, 23]
                }, {
                    18: [1, 36]
                }, {
                    18: [2, 27],
                    21: 41,
                    26: 37,
                    27: 38,
                    28: [1, 45],
                    29: 39,
                    30: [1, 42],
                    31: [1, 43],
                    32: [1, 44],
                    33: 40,
                    34: 46,
                    35: [1, 47],
                    38: 26
                }, {
                    18: [2, 28]
                }, {
                    18: [2, 45],
                    28: [2, 45],
                    30: [2, 45],
                    31: [2, 45],
                    32: [2, 45],
                    35: [2, 45],
                    39: [1, 48]
                }, {
                    18: [2, 47],
                    28: [2, 47],
                    30: [2, 47],
                    31: [2, 47],
                    32: [2, 47],
                    35: [2, 47],
                    39: [2, 47]
                }, {
                    10: 49,
                    20: [1, 50]
                }, {
                    10: 51,
                    20: [1, 50]
                }, {
                    18: [1, 52]
                }, {
                    18: [1, 53]
                }, {
                    18: [1, 54]
                }, {
                    18: [1, 55],
                    21: 56,
                    35: [1, 27],
                    38: 26
                }, {
                    18: [2, 44],
                    35: [2, 44]
                }, {
                    5: [2, 3],
                    8: 21,
                    9: 7,
                    11: 8,
                    12: 9,
                    13: 10,
                    14: [1, 11],
                    15: [1, 12],
                    16: [1, 13],
                    19: [1, 19],
                    20: [2, 3],
                    22: [1, 14],
                    23: [1, 15],
                    24: [1, 16]
                }, {
                    14: [2, 17],
                    15: [2, 17],
                    16: [2, 17],
                    19: [2, 17],
                    20: [2, 17],
                    22: [2, 17],
                    23: [2, 17],
                    24: [2, 17]
                }, {
                    18: [2, 25],
                    21: 41,
                    27: 57,
                    28: [1, 45],
                    29: 58,
                    30: [1, 42],
                    31: [1, 43],
                    32: [1, 44],
                    33: 40,
                    34: 46,
                    35: [1, 47],
                    38: 26
                }, {
                    18: [2, 26]
                }, {
                    18: [2, 30],
                    28: [2, 30],
                    30: [2, 30],
                    31: [2, 30],
                    32: [2, 30],
                    35: [2, 30]
                }, {
                    18: [2, 36],
                    34: 59,
                    35: [1, 60]
                }, {
                    18: [2, 31],
                    28: [2, 31],
                    30: [2, 31],
                    31: [2, 31],
                    32: [2, 31],
                    35: [2, 31]
                }, {
                    18: [2, 32],
                    28: [2, 32],
                    30: [2, 32],
                    31: [2, 32],
                    32: [2, 32],
                    35: [2, 32]
                }, {
                    18: [2, 33],
                    28: [2, 33],
                    30: [2, 33],
                    31: [2, 33],
                    32: [2, 33],
                    35: [2, 33]
                }, {
                    18: [2, 34],
                    28: [2, 34],
                    30: [2, 34],
                    31: [2, 34],
                    32: [2, 34],
                    35: [2, 34]
                }, {
                    18: [2, 35],
                    28: [2, 35],
                    30: [2, 35],
                    31: [2, 35],
                    32: [2, 35],
                    35: [2, 35]
                }, {
                    18: [2, 38],
                    35: [2, 38]
                }, {
                    18: [2, 47],
                    28: [2, 47],
                    30: [2, 47],
                    31: [2, 47],
                    32: [2, 47],
                    35: [2, 47],
                    36: [1, 61],
                    39: [2, 47]
                }, {
                    35: [1, 62]
                }, {
                    5: [2, 10],
                    14: [2, 10],
                    15: [2, 10],
                    16: [2, 10],
                    19: [2, 10],
                    20: [2, 10],
                    22: [2, 10],
                    23: [2, 10],
                    24: [2, 10]
                }, {
                    21: 63,
                    35: [1, 27],
                    38: 26
                }, {
                    5: [2, 11],
                    14: [2, 11],
                    15: [2, 11],
                    16: [2, 11],
                    19: [2, 11],
                    20: [2, 11],
                    22: [2, 11],
                    23: [2, 11],
                    24: [2, 11]
                }, {
                    14: [2, 16],
                    15: [2, 16],
                    16: [2, 16],
                    19: [2, 16],
                    20: [2, 16],
                    22: [2, 16],
                    23: [2, 16],
                    24: [2, 16]
                }, {
                    5: [2, 19],
                    14: [2, 19],
                    15: [2, 19],
                    16: [2, 19],
                    19: [2, 19],
                    20: [2, 19],
                    22: [2, 19],
                    23: [2, 19],
                    24: [2, 19]
                }, {
                    5: [2, 20],
                    14: [2, 20],
                    15: [2, 20],
                    16: [2, 20],
                    19: [2, 20],
                    20: [2, 20],
                    22: [2, 20],
                    23: [2, 20],
                    24: [2, 20]
                }, {
                    5: [2, 21],
                    14: [2, 21],
                    15: [2, 21],
                    16: [2, 21],
                    19: [2, 21],
                    20: [2, 21],
                    22: [2, 21],
                    23: [2, 21],
                    24: [2, 21]
                }, {
                    18: [1, 64]
                }, {
                    18: [2, 24]
                }, {
                    18: [2, 29],
                    28: [2, 29],
                    30: [2, 29],
                    31: [2, 29],
                    32: [2, 29],
                    35: [2, 29]
                }, {
                    18: [2, 37],
                    35: [2, 37]
                }, {
                    36: [1, 61]
                }, {
                    21: 65,
                    28: [1, 69],
                    30: [1, 66],
                    31: [1, 67],
                    32: [1, 68],
                    35: [1, 27],
                    38: 26
                }, {
                    18: [2, 46],
                    28: [2, 46],
                    30: [2, 46],
                    31: [2, 46],
                    32: [2, 46],
                    35: [2, 46],
                    39: [2, 46]
                }, {
                    18: [1, 70]
                }, {
                    5: [2, 22],
                    14: [2, 22],
                    15: [2, 22],
                    16: [2, 22],
                    19: [2, 22],
                    20: [2, 22],
                    22: [2, 22],
                    23: [2, 22],
                    24: [2, 22]
                }, {
                    18: [2, 39],
                    35: [2, 39]
                }, {
                    18: [2, 40],
                    35: [2, 40]
                }, {
                    18: [2, 41],
                    35: [2, 41]
                }, {
                    18: [2, 42],
                    35: [2, 42]
                }, {
                    18: [2, 43],
                    35: [2, 43]
                }, {
                    5: [2, 18],
                    14: [2, 18],
                    15: [2, 18],
                    16: [2, 18],
                    19: [2, 18],
                    20: [2, 18],
                    22: [2, 18],
                    23: [2, 18],
                    24: [2, 18]
                }],
                defaultActions: {
                    17: [2, 1],
                    25: [2, 28],
                    38: [2, 26],
                    57: [2, 24]
                },
                parseError: function(t) {
                    throw Error(t)
                },
                parse: function(t) {
                    function e() {
                        var t;
                        return t = s.lexer.lex() || 1,
                        "number" != typeof t && (t = s.symbols_[t] || t),
                            t
                    }
                    var s = this
                        , i = [0]
                        , n = [null]
                        , r = []
                        , a = this.table
                        , o = ""
                        , h = 0
                        , l = 0
                        , c = 0;
                    this.lexer.setInput(t),
                        this.lexer.yy = this.yy,
                        this.yy.lexer = this.lexer,
                        this.yy.parser = this,
                    void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                    var p = this.lexer.yylloc;
                    r.push(p);
                    var u = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var d, f, g, m, y, b, v, k, S, x = {}; ; ) {
                        if (g = i[i.length - 1],
                                this.defaultActions[g] ? m = this.defaultActions[g] : ((null === d || void 0 === d) && (d = e()),
                                        m = a[g] && a[g][d]),
                            void 0 === m || !m.length || !m[0]) {
                            var H = "";
                            if (!c) {
                                S = [];
                                for (b in a[g])
                                    this.terminals_[b] && b > 2 && S.push("'" + this.terminals_[b] + "'");
                                H = this.lexer.showPosition ? "Parse error on line " + (h + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + S.join(", ") + ", got '" + (this.terminals_[d] || d) + "'" : "Parse error on line " + (h + 1) + ": Unexpected " + (1 == d ? "end of input" : "'" + (this.terminals_[d] || d) + "'"),
                                    this.parseError(H, {
                                        text: this.lexer.match,
                                        token: this.terminals_[d] || d,
                                        line: this.lexer.yylineno,
                                        loc: p,
                                        expected: S
                                    })
                            }
                        }
                        if (m[0]instanceof Array && m.length > 1)
                            throw Error("Parse Error: multiple actions possible at state: " + g + ", token: " + d);
                        switch (m[0]) {
                            case 1:
                                i.push(d),
                                    n.push(this.lexer.yytext),
                                    r.push(this.lexer.yylloc),
                                    i.push(m[1]),
                                    d = null,
                                    f ? (d = f,
                                            f = null) : (l = this.lexer.yyleng,
                                            o = this.lexer.yytext,
                                            h = this.lexer.yylineno,
                                            p = this.lexer.yylloc,
                                        c > 0 && c--);
                                break;
                            case 2:
                                if (v = this.productions_[m[1]][1],
                                        x.$ = n[n.length - v],
                                        x._$ = {
                                            first_line: r[r.length - (v || 1)].first_line,
                                            last_line: r[r.length - 1].last_line,
                                            first_column: r[r.length - (v || 1)].first_column,
                                            last_column: r[r.length - 1].last_column
                                        },
                                    u && (x._$.range = [r[r.length - (v || 1)].range[0], r[r.length - 1].range[1]]),
                                        y = this.performAction.call(x, o, l, h, this.yy, m[1], n, r),
                                    void 0 !== y)
                                    return y;
                                v && (i = i.slice(0, -2 * v),
                                    n = n.slice(0, -1 * v),
                                    r = r.slice(0, -1 * v)),
                                    i.push(this.productions_[m[1]][0]),
                                    n.push(x.$),
                                    r.push(x._$),
                                    k = a[i[i.length - 2]][i[i.length - 1]],
                                    i.push(k);
                                break;
                            case 3:
                                return !0
                        }
                    }
                    return !0
                }
            }
                , s = function() {
                var t = {
                    EOF: 1,
                    parseError: function(t, e) {
                        if (!this.yy.parser)
                            throw Error(t);
                        this.yy.parser.parseError(t, e)
                    },
                    setInput: function(t) {
                        return this._input = t,
                            this._more = this._less = this.done = !1,
                            this.yylineno = this.yyleng = 0,
                            this.yytext = this.matched = this.match = "",
                            this.conditionStack = ["INITIAL"],
                            this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            },
                        this.options.ranges && (this.yylloc.range = [0, 0]),
                            this.offset = 0,
                            this
                    },
                    input: function() {
                        var t = this._input[0];
                        this.yytext += t,
                            this.yyleng++,
                            this.offset++,
                            this.match += t,
                            this.matched += t;
                        var e = t.match(/(?:\r\n?|\n).*/g);
                        return e ? (this.yylineno++,
                                this.yylloc.last_line++) : this.yylloc.last_column++,
                        this.options.ranges && this.yylloc.range[1]++,
                            this._input = this._input.slice(1),
                            t
                    },
                    unput: function(t) {
                        var e = t.length
                            , s = t.split(/(?:\r\n?|\n)/g);
                        this._input = t + this._input,
                            this.yytext = this.yytext.substr(0, this.yytext.length - e - 1),
                            this.offset -= e;
                        var i = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1),
                            this.matched = this.matched.substr(0, this.matched.length - 1),
                        s.length - 1 && (this.yylineno -= s.length - 1);
                        var n = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: s ? (s.length === i.length ? this.yylloc.first_column : 0) + i[i.length - s.length].length - s[0].length : this.yylloc.first_column - e
                        },
                        this.options.ranges && (this.yylloc.range = [n[0], n[0] + this.yyleng - e]),
                            this
                    },
                    more: function() {
                        return this._more = !0,
                            this
                    },
                    less: function(t) {
                        this.unput(this.match.slice(t))
                    },
                    pastInput: function() {
                        var t = this.matched.substr(0, this.matched.length - this.match.length);
                        return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var t = this.match;
                        return 20 > t.length && (t += this._input.substr(0, 20 - t.length)),
                            (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var t = this.pastInput()
                            , e = Array(t.length + 1).join("-");
                        return t + this.upcomingInput() + "\n" + e + "^"
                    },
                    next: function() {
                        if (this.done)
                            return this.EOF;
                        this._input || (this.done = !0);
                        var t, e, s, i, n;
                        this._more || (this.yytext = "",
                            this.match = "");
                        for (var r = this._currentRules(), a = 0; r.length > a && (s = this._input.match(this.rules[r[a]]),
                        !s || e && !(s[0].length > e[0].length) || (e = s,
                            i = a,
                            this.options.flex)); a++)
                            ;
                        return e ? (n = e[0].match(/(?:\r\n?|\n).*/g),
                            n && (this.yylineno += n.length),
                                this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: n ? n[n.length - 1].length - n[n.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e[0].length
                                },
                                this.yytext += e[0],
                                this.match += e[0],
                                this.matches = e,
                                this.yyleng = this.yytext.length,
                            this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]),
                                this._more = !1,
                                this._input = this._input.slice(e[0].length),
                                this.matched += e[0],
                                t = this.performAction.call(this, this.yy, this, r[i], this.conditionStack[this.conditionStack.length - 1]),
                            this.done && this._input && (this.done = !1),
                                t ? t : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                    },
                    lex: function() {
                        var t = this.next();
                        return void 0 !== t ? t : this.lex()
                    },
                    begin: function(t) {
                        this.conditionStack.push(t)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(t) {
                        this.begin(t)
                    }
                };
                return t.options = {},
                    t.performAction = function(t, e, s, i) {
                        switch (s) {
                            case 0:
                                if ("\\" !== e.yytext.slice(-1) && this.begin("mu"),
                                    "\\" === e.yytext.slice(-1) && (e.yytext = e.yytext.substr(0, e.yyleng - 1),
                                        this.begin("emu")),
                                        e.yytext)
                                    return 14;
                                break;
                            case 1:
                                return 14;
                            case 2:
                                return "\\" !== e.yytext.slice(-1) && this.popState(),
                                "\\" === e.yytext.slice(-1) && (e.yytext = e.yytext.substr(0, e.yyleng - 1)),
                                    14;
                            case 3:
                                return e.yytext = e.yytext.substr(0, e.yyleng - 4),
                                    this.popState(),
                                    15;
                            case 4:
                                return this.begin("par"),
                                    24;
                            case 5:
                                return 16;
                            case 6:
                                return 20;
                            case 7:
                                return 19;
                            case 8:
                                return 19;
                            case 9:
                                return 23;
                            case 10:
                                return 23;
                            case 11:
                                this.popState(),
                                    this.begin("com");
                                break;
                            case 12:
                                return e.yytext = e.yytext.substr(3, e.yyleng - 5),
                                    this.popState(),
                                    15;
                            case 13:
                                return 22;
                            case 14:
                                return 36;
                            case 15:
                                return 35;
                            case 16:
                                return 35;
                            case 17:
                                return 39;
                            case 18:
                                break;
                            case 19:
                                return this.popState(),
                                    18;
                            case 20:
                                return this.popState(),
                                    18;
                            case 21:
                                return e.yytext = e.yytext.substr(1, e.yyleng - 2).replace(/\\"/g, '"'),
                                    30;
                            case 22:
                                return e.yytext = e.yytext.substr(1, e.yyleng - 2).replace(/\\'/g, "'"),
                                    30;
                            case 23:
                                return e.yytext = e.yytext.substr(1),
                                    28;
                            case 24:
                                return 32;
                            case 25:
                                return 32;
                            case 26:
                                return 31;
                            case 27:
                                return 35;
                            case 28:
                                return e.yytext = e.yytext.substr(1, e.yyleng - 2),
                                    35;
                            case 29:
                                return "INVALID";
                            case 30:
                                break;
                            case 31:
                                return this.popState(),
                                    37;
                            case 32:
                                return 5
                        }
                    }
                    ,
                    t.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[} ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@[a-zA-Z]+)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:[0-9]+(?=[}\s]))/, /^(?:[a-zA-Z0-9_$-]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:\s+)/, /^(?:[a-zA-Z0-9_$-\/]+)/, /^(?:$)/],
                    t.conditions = {
                        mu: {
                            rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32],
                            inclusive: !1
                        },
                        emu: {
                            rules: [2],
                            inclusive: !1
                        },
                        com: {
                            rules: [3],
                            inclusive: !1
                        },
                        par: {
                            rules: [30, 31],
                            inclusive: !1
                        },
                        INITIAL: {
                            rules: [0, 1, 32],
                            inclusive: !0
                        }
                    },
                    t
            }();
            return e.lexer = s,
                t.prototype = e,
                e.Parser = t,
                new t
        }();
        Handlebars.Parser = i,
            Handlebars.parse = function(t) {
                return t.constructor === Handlebars.AST.ProgramNode ? t : (Handlebars.Parser.yy = Handlebars.AST,
                        Handlebars.Parser.parse(t))
            }
            ,
            Handlebars.print = function(t) {
                return (new Handlebars.PrintVisitor).accept(t)
            }
            ,
            function() {
                Handlebars.AST = {},
                    Handlebars.AST.ProgramNode = function(t, e) {
                        this.type = "program",
                            this.statements = t,
                        e && (this.inverse = new Handlebars.AST.ProgramNode(e))
                    }
                    ,
                    Handlebars.AST.MustacheNode = function(t, e, s) {
                        this.type = "mustache",
                            this.escaped = !s,
                            this.hash = e;
                        var i = this.id = t[0]
                            , n = this.params = t.slice(1)
                            , r = this.eligibleHelper = i.isSimple;
                        this.isHelper = r && (n.length || e)
                    }
                    ,
                    Handlebars.AST.PartialNode = function(t, e) {
                        this.type = "partial",
                            this.partialName = t,
                            this.context = e
                    }
                ;
                var t = function(t, e) {
                    if (t.original !== e.original)
                        throw new Handlebars.Exception(t.original + " doesn't match " + e.original)
                };
                Handlebars.AST.BlockNode = function(e, s, i, n) {
                    t(e.id, n),
                        this.type = "block",
                        this.mustache = e,
                        this.program = s,
                        this.inverse = i,
                    this.inverse && !this.program && (this.isInverse = !0)
                }
                    ,
                    Handlebars.AST.ContentNode = function(t) {
                        this.type = "content",
                            this.string = t
                    }
                    ,
                    Handlebars.AST.HashNode = function(t) {
                        this.type = "hash",
                            this.pairs = t
                    }
                    ,
                    Handlebars.AST.IdNode = function(t) {
                        this.type = "ID",
                            this.original = t.join(".");
                        for (var e = [], s = 0, i = 0, n = t.length; n > i; i++) {
                            var r = t[i];
                            if (".." === r || "." === r || "this" === r) {
                                if (e.length > 0)
                                    throw new Handlebars.Exception("Invalid path: " + this.original);
                                ".." === r ? s++ : this.isScoped = !0
                            } else
                                e.push(r)
                        }
                        this.parts = e,
                            this.string = e.join("."),
                            this.depth = s,
                            this.isSimple = 1 === t.length && !this.isScoped && 0 === s,
                            this.stringModeValue = this.string
                    }
                    ,
                    Handlebars.AST.PartialNameNode = function(t) {
                        this.type = "PARTIAL_NAME",
                            this.name = t
                    }
                    ,
                    Handlebars.AST.DataNode = function(t) {
                        this.type = "DATA",
                            this.id = t
                    }
                    ,
                    Handlebars.AST.StringNode = function(t) {
                        this.type = "STRING",
                            this.string = t,
                            this.stringModeValue = t
                    }
                    ,
                    Handlebars.AST.IntegerNode = function(t) {
                        this.type = "INTEGER",
                            this.integer = t,
                            this.stringModeValue = Number(t)
                    }
                    ,
                    Handlebars.AST.BooleanNode = function(t) {
                        this.type = "BOOLEAN",
                            this.bool = t,
                            this.stringModeValue = "true" === t
                    }
                    ,
                    Handlebars.AST.CommentNode = function(t) {
                        this.type = "comment",
                            this.comment = t
                    }
            }();
        var n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        Handlebars.Exception = function() {
            for (var t = Error.prototype.constructor.apply(this, arguments), e = 0; n.length > e; e++)
                this[n[e]] = t[n[e]]
        }
            ,
            Handlebars.Exception.prototype = Error(),
            Handlebars.SafeString = function(t) {
                this.string = t
            }
            ,
            Handlebars.SafeString.prototype.toString = function() {
                return "" + this.string
            }
            ,
            function() {
                var t = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }
                    , e = /[&<>"'`]/g
                    , s = /[&<>"'`]/
                    , i = function(e) {
                    return t[e] || "&amp;"
                };
                Handlebars.Utils = {
                    escapeExpression: function(t) {
                        return t instanceof Handlebars.SafeString ? "" + t : null == t || t === !1 ? "" : s.test(t) ? t.replace(e, i) : t
                    },
                    isEmpty: function(t) {
                        return t || 0 === t ? "[object Array]" === Object.prototype.toString.call(t) && 0 === t.length ? !0 : !1 : !0
                    }
                }
            }(),
            Handlebars.Compiler = function() {}
            ,
            Handlebars.JavaScriptCompiler = function() {}
            ,
            function(t, e) {
                t.prototype = {
                    compiler: t,
                    disassemble: function() {
                        for (var t, e, s, i = this.opcodes, n = [], r = 0, a = i.length; a > r; r++)
                            if (t = i[r],
                                "DECLARE" === t.opcode)
                                n.push("DECLARE " + t.name + "=" + t.value);
                            else {
                                e = [];
                                for (var o = 0; t.args.length > o; o++)
                                    s = t.args[o],
                                    "string" == typeof s && (s = '"' + s.replace("\n", "\\n") + '"'),
                                        e.push(s);
                                n.push(t.opcode + " " + e.join(" "))
                            }
                        return n.join("\n")
                    },
                    equals: function(t) {
                        var e = this.opcodes.length;
                        if (t.opcodes.length !== e)
                            return !1;
                        for (var s = 0; e > s; s++) {
                            var i = this.opcodes[s]
                                , n = t.opcodes[s];
                            if (i.opcode !== n.opcode || i.args.length !== n.args.length)
                                return !1;
                            for (var r = 0; i.args.length > r; r++)
                                if (i.args[r] !== n.args[r])
                                    return !1
                        }
                        return !0
                    },
                    guid: 0,
                    compile: function(t, e) {
                        this.children = [],
                            this.depths = {
                                list: []
                            },
                            this.options = e;
                        var s = this.options.knownHelpers;
                        if (this.options.knownHelpers = {
                                helperMissing: !0,
                                blockHelperMissing: !0,
                                each: !0,
                                "if": !0,
                                unless: !0,
                                "with": !0,
                                log: !0
                            },
                                s)
                            for (var i in s)
                                this.options.knownHelpers[i] = s[i];
                        return this.program(t)
                    },
                    accept: function(t) {
                        return this[t.type](t)
                    },
                    program: function(t) {
                        var e, s = t.statements;
                        this.opcodes = [];
                        for (var i = 0, n = s.length; n > i; i++)
                            e = s[i],
                                this[e.type](e);
                        return this.isSimple = 1 === n,
                            this.depths.list = this.depths.list.sort(function(t, e) {
                                return t - e
                            }),
                            this
                    },
                    compileProgram: function(t) {
                        var e, s = (new this.compiler).compile(t, this.options), i = this.guid++;
                        this.usePartial = this.usePartial || s.usePartial,
                            this.children[i] = s;
                        for (var n = 0, r = s.depths.list.length; r > n; n++)
                            e = s.depths.list[n],
                            2 > e || this.addDepth(e - 1);
                        return i
                    },
                    block: function(t) {
                        var e = t.mustache
                            , s = t.program
                            , i = t.inverse;
                        s && (s = this.compileProgram(s)),
                        i && (i = this.compileProgram(i));
                        var n = this.classifyMustache(e);
                        "helper" === n ? this.helperMustache(e, s, i) : "simple" === n ? (this.simpleMustache(e),
                                    this.opcode("pushProgram", s),
                                    this.opcode("pushProgram", i),
                                    this.opcode("emptyHash"),
                                    this.opcode("blockValue")) : (this.ambiguousMustache(e, s, i),
                                    this.opcode("pushProgram", s),
                                    this.opcode("pushProgram", i),
                                    this.opcode("emptyHash"),
                                    this.opcode("ambiguousBlockValue")),
                            this.opcode("append")
                    },
                    hash: function(t) {
                        var e, s, i = t.pairs;
                        this.opcode("pushHash");
                        for (var n = 0, r = i.length; r > n; n++)
                            e = i[n],
                                s = e[1],
                                this.options.stringParams ? this.opcode("pushStringParam", s.stringModeValue, s.type) : this.accept(s),
                                this.opcode("assignToHash", e[0]);
                        this.opcode("popHash")
                    },
                    partial: function(t) {
                        var e = t.partialName;
                        this.usePartial = !0,
                            t.context ? this.ID(t.context) : this.opcode("push", "depth0"),
                            this.opcode("invokePartial", e.name),
                            this.opcode("append")
                    },
                    content: function(t) {
                        this.opcode("appendContent", t.string)
                    },
                    mustache: function(t) {
                        var e = this.options
                            , s = this.classifyMustache(t);
                        "simple" === s ? this.simpleMustache(t) : "helper" === s ? this.helperMustache(t) : this.ambiguousMustache(t),
                            t.escaped && !e.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
                    },
                    ambiguousMustache: function(t, e, s) {
                        var i = t.id
                            , n = i.parts[0]
                            , r = null != e || null != s;
                        this.opcode("getContext", i.depth),
                            this.opcode("pushProgram", e),
                            this.opcode("pushProgram", s),
                            this.opcode("invokeAmbiguous", n, r)
                    },
                    simpleMustache: function(t) {
                        var e = t.id;
                        "DATA" === e.type ? this.DATA(e) : e.parts.length ? this.ID(e) : (this.addDepth(e.depth),
                                    this.opcode("getContext", e.depth),
                                    this.opcode("pushContext")),
                            this.opcode("resolvePossibleLambda")
                    },
                    helperMustache: function(t, e, s) {
                        var i = this.setupFullMustacheParams(t, e, s)
                            , n = t.id.parts[0];
                        if (this.options.knownHelpers[n])
                            this.opcode("invokeKnownHelper", i.length, n);
                        else {
                            if (this.knownHelpersOnly)
                                throw Error("You specified knownHelpersOnly, but used the unknown helper " + n);
                            this.opcode("invokeHelper", i.length, n)
                        }
                    },
                    ID: function(t) {
                        this.addDepth(t.depth),
                            this.opcode("getContext", t.depth);
                        var e = t.parts[0];
                        e ? this.opcode("lookupOnContext", t.parts[0]) : this.opcode("pushContext");
                        for (var s = 1, i = t.parts.length; i > s; s++)
                            this.opcode("lookup", t.parts[s])
                    },
                    DATA: function(t) {
                        this.options.data = !0,
                            this.opcode("lookupData", t.id)
                    },
                    STRING: function(t) {
                        this.opcode("pushString", t.string)
                    },
                    INTEGER: function(t) {
                        this.opcode("pushLiteral", t.integer)
                    },
                    BOOLEAN: function(t) {
                        this.opcode("pushLiteral", t.bool)
                    },
                    comment: function() {},
                    opcode: function(t) {
                        this.opcodes.push({
                            opcode: t,
                            args: [].slice.call(arguments, 1)
                        })
                    },
                    declare: function(t, e) {
                        this.opcodes.push({
                            opcode: "DECLARE",
                            name: t,
                            value: e
                        })
                    },
                    addDepth: function(t) {
                        if (isNaN(t))
                            throw Error("EWOT");
                        0 !== t && (this.depths[t] || (this.depths[t] = !0,
                            this.depths.list.push(t)))
                    },
                    classifyMustache: function(t) {
                        var e = t.isHelper
                            , s = t.eligibleHelper
                            , i = this.options;
                        if (s && !e) {
                            var n = t.id.parts[0];
                            i.knownHelpers[n] ? e = !0 : i.knownHelpersOnly && (s = !1)
                        }
                        return e ? "helper" : s ? "ambiguous" : "simple"
                    },
                    pushParams: function(t) {
                        for (var e, s = t.length; s--; )
                            e = t[s],
                                this.options.stringParams ? (e.depth && this.addDepth(e.depth),
                                        this.opcode("getContext", e.depth || 0),
                                        this.opcode("pushStringParam", e.stringModeValue, e.type)) : this[e.type](e)
                    },
                    setupMustacheParams: function(t) {
                        var e = t.params;
                        return this.pushParams(e),
                            t.hash ? this.hash(t.hash) : this.opcode("emptyHash"),
                            e
                    },
                    setupFullMustacheParams: function(t, e, s) {
                        var i = t.params;
                        return this.pushParams(i),
                            this.opcode("pushProgram", e),
                            this.opcode("pushProgram", s),
                            t.hash ? this.hash(t.hash) : this.opcode("emptyHash"),
                            i
                    }
                };
                var s = function(t) {
                    this.value = t
                };
                e.prototype = {
                    nameLookup: function(t, s) {
                        return /^[0-9]+$/.test(s) ? t + "[" + s + "]" : e.isValidJavaScriptVariableName(s) ? t + "." + s : t + "['" + s + "']"
                    },
                    appendToBuffer: function(t) {
                        return this.environment.isSimple ? "return " + t + ";" : {
                                appendToBuffer: !0,
                                content: t,
                                toString: function() {
                                    return "buffer += " + t + ";"
                                }
                            }
                    },
                    initializeBuffer: function() {
                        return this.quotedString("")
                    },
                    namespace: "Handlebars",
                    compile: function(t, e, s, i) {
                        this.environment = t,
                            this.options = e || {},
                            Handlebars.log(Handlebars.logger.DEBUG, this.environment.disassemble() + "\n\n"),
                            this.name = this.environment.name,
                            this.isChild = !!s,
                            this.context = s || {
                                    programs: [],
                                    environments: [],
                                    aliases: {}
                                },
                            this.preamble(),
                            this.stackSlot = 0,
                            this.stackVars = [],
                            this.registers = {
                                list: []
                            },
                            this.compileStack = [],
                            this.inlineStack = [],
                            this.compileChildren(t, e);
                        var n, r = t.opcodes;
                        for (this.i = 0,
                                 a = r.length; a > this.i; this.i++)
                            n = r[this.i],
                                "DECLARE" === n.opcode ? this[n.name] = n.value : this[n.opcode].apply(this, n.args);
                        return this.createFunctionContext(i)
                    },
                    nextOpcode: function() {
                        var t = this.environment.opcodes;
                        return t[this.i + 1]
                    },
                    eat: function() {
                        this.i = this.i + 1
                    },
                    preamble: function() {
                        var t = [];
                        if (this.isChild)
                            t.push("");
                        else {
                            var e = this.namespace
                                , s = "helpers = helpers || " + e + ".helpers;";
                            this.environment.usePartial && (s = s + " partials = partials || " + e + ".partials;"),
                            this.options.data && (s += " data = data || {};"),
                                t.push(s)
                        }
                        this.environment.isSimple ? t.push("") : t.push(", buffer = " + this.initializeBuffer()),
                            this.lastContext = 0,
                            this.source = t
                    },
                    createFunctionContext: function(t) {
                        var e = this.stackVars.concat(this.registers.list);
                        if (e.length > 0 && (this.source[1] = this.source[1] + ", " + e.join(", ")),
                                !this.isChild)
                            for (var s in this.context.aliases)
                                this.source[1] = this.source[1] + ", " + s + "=" + this.context.aliases[s];
                        this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"),
                        this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"),
                        this.environment.isSimple || this.source.push("return buffer;");
                        for (var i = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], n = 0, r = this.environment.depths.list.length; r > n; n++)
                            i.push("depth" + this.environment.depths.list[n]);
                        var a = this.mergeSource();
                        if (!this.isChild) {
                            var o = Handlebars.COMPILER_REVISION
                                , h = Handlebars.REVISION_CHANGES[o];
                            a = "this.compilerInfo = [" + o + ",'" + h + "'];\n" + a
                        }
                        if (t)
                            return i.push(a),
                                Function.apply(this, i);
                        var l = "function " + (this.name || "") + "(" + i.join(",") + ") {\n  " + a + "}";
                        return Handlebars.log(Handlebars.logger.DEBUG, l + "\n\n"),
                            l
                    },
                    mergeSource: function() {
                        for (var t, e = "", s = 0, i = this.source.length; i > s; s++) {
                            var n = this.source[s];
                            n.appendToBuffer ? t = t ? t + "\n    + " + n.content : n.content : (t && (e += "buffer += " + t + ";\n  ",
                                    t = void 0),
                                    e += n + "\n  ")
                        }
                        return e
                    },
                    blockValue: function() {
                        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                        var t = ["depth0"];
                        this.setupParams(0, t),
                            this.replaceStack(function(e) {
                                return t.splice(1, 0, e),
                                "blockHelperMissing.call(" + t.join(", ") + ")"
                            })
                    },
                    ambiguousBlockValue: function() {
                        this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                        var t = ["depth0"];
                        this.setupParams(0, t);
                        var e = this.topStack();
                        t.splice(1, 0, e),
                            t[t.length - 1] = "options",
                            this.source.push("if (!" + this.lastHelper + ") { " + e + " = blockHelperMissing.call(" + t.join(", ") + "); }")
                    },
                    appendContent: function(t) {
                        this.source.push(this.appendToBuffer(this.quotedString(t)))
                    },
                    append: function() {
                        this.flushInline();
                        var t = this.popStack();
                        this.source.push("if(" + t + " || " + t + " === 0) { " + this.appendToBuffer(t) + " }"),
                        this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
                    },
                    appendEscaped: function() {
                        this.context.aliases.escapeExpression = "this.escapeExpression",
                            this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
                    },
                    getContext: function(t) {
                        this.lastContext !== t && (this.lastContext = t)
                    },
                    lookupOnContext: function(t) {
                        this.push(this.nameLookup("depth" + this.lastContext, t, "context"))
                    },
                    pushContext: function() {
                        this.pushStackLiteral("depth" + this.lastContext)
                    },
                    resolvePossibleLambda: function() {
                        this.context.aliases.functionType = '"function"',
                            this.replaceStack(function(t) {
                                return "typeof " + t + " === functionType ? " + t + ".apply(depth0) : " + t
                            })
                    },
                    lookup: function(t) {
                        this.replaceStack(function(e) {
                            return e + " == null || " + e + " === false ? " + e + " : " + this.nameLookup(e, t, "context")
                        })
                    },
                    lookupData: function(t) {
                        this.push(this.nameLookup("data", t, "data"))
                    },
                    pushStringParam: function(t, e) {
                        this.pushStackLiteral("depth" + this.lastContext),
                            this.pushString(e),
                            "string" == typeof t ? this.pushString(t) : this.pushStackLiteral(t)
                    },
                    emptyHash: function() {
                        this.pushStackLiteral("{}"),
                        this.options.stringParams && this.register("hashTypes", "{}")
                    },
                    pushHash: function() {
                        this.hash = {
                            values: [],
                            types: []
                        }
                    },
                    popHash: function() {
                        var t = this.hash;
                        this.hash = void 0,
                        this.options.stringParams && this.register("hashTypes", "{" + t.types.join(",") + "}"),
                            this.push("{\n    " + t.values.join(",\n    ") + "\n  }")
                    },
                    pushString: function(t) {
                        this.pushStackLiteral(this.quotedString(t))
                    },
                    push: function(t) {
                        return this.inlineStack.push(t),
                            t
                    },
                    pushLiteral: function(t) {
                        this.pushStackLiteral(t)
                    },
                    pushProgram: function(t) {
                        null != t ? this.pushStackLiteral(this.programExpression(t)) : this.pushStackLiteral(null)
                    },
                    invokeHelper: function(t, e) {
                        this.context.aliases.helperMissing = "helpers.helperMissing";
                        var s = this.lastHelper = this.setupHelper(t, e, !0);
                        this.push(s.name),
                            this.replaceStack(function(t) {
                                return t + " ? " + t + ".call(" + s.callParams + ") : helperMissing.call(" + s.helperMissingParams + ")"
                            })
                    },
                    invokeKnownHelper: function(t, e) {
                        var s = this.setupHelper(t, e);
                        this.push(s.name + ".call(" + s.callParams + ")")
                    },
                    invokeAmbiguous: function(t, e) {
                        this.context.aliases.functionType = '"function"',
                            this.pushStackLiteral("{}");
                        var s = this.setupHelper(0, t, e)
                            , i = this.lastHelper = this.nameLookup("helpers", t, "helper")
                            , n = this.nameLookup("depth" + this.lastContext, t, "context")
                            , r = this.nextStack();
                        this.source.push("if (" + r + " = " + i + ") { " + r + " = " + r + ".call(" + s.callParams + "); }"),
                            this.source.push("else { " + r + " = " + n + "; " + r + " = typeof " + r + " === functionType ? " + r + ".apply(depth0) : " + r + "; }")
                    },
                    invokePartial: function(t) {
                        var e = [this.nameLookup("partials", t, "partial"), "'" + t + "'", this.popStack(), "helpers", "partials"];
                        this.options.data && e.push("data"),
                            this.context.aliases.self = "this",
                            this.push("self.invokePartial(" + e.join(", ") + ")")
                    },
                    assignToHash: function(t) {
                        var e, s = this.popStack();
                        this.options.stringParams && (e = this.popStack(),
                            this.popStack());
                        var i = this.hash;
                        e && i.types.push("'" + t + "': " + e),
                            i.values.push("'" + t + "': (" + s + ")")
                    },
                    compiler: e,
                    compileChildren: function(t, e) {
                        for (var s, i, n = t.children, r = 0, a = n.length; a > r; r++) {
                            s = n[r],
                                i = new this.compiler;
                            var o = this.matchExistingProgram(s);
                            null == o ? (this.context.programs.push(""),
                                    o = this.context.programs.length,
                                    s.index = o,
                                    s.name = "program" + o,
                                    this.context.programs[o] = i.compile(s, e, this.context),
                                    this.context.environments[o] = s) : (s.index = o,
                                    s.name = "program" + o)
                        }
                    },
                    matchExistingProgram: function(t) {
                        for (var e = 0, s = this.context.environments.length; s > e; e++) {
                            var i = this.context.environments[e];
                            if (i && i.equals(t))
                                return e
                        }
                    },
                    programExpression: function(t) {
                        if (this.context.aliases.self = "this",
                            null == t)
                            return "self.noop";
                        for (var e, s = this.environment.children[t], i = s.depths.list, n = [s.index, s.name, "data"], r = 0, a = i.length; a > r; r++)
                            e = i[r],
                                1 === e ? n.push("depth0") : n.push("depth" + (e - 1));
                        return 0 === i.length ? "self.program(" + n.join(", ") + ")" : (n.shift(),
                            "self.programWithDepth(" + n.join(", ") + ")")
                    },
                    register: function(t, e) {
                        this.useRegister(t),
                            this.source.push(t + " = " + e + ";")
                    },
                    useRegister: function(t) {
                        this.registers[t] || (this.registers[t] = !0,
                            this.registers.list.push(t))
                    },
                    pushStackLiteral: function(t) {
                        return this.push(new s(t))
                    },
                    pushStack: function(t) {
                        this.flushInline();
                        var e = this.incrStack();
                        return t && this.source.push(e + " = " + t + ";"),
                            this.compileStack.push(e),
                            e
                    },
                    replaceStack: function(t) {
                        var e, i = "", n = this.isInline();
                        if (n) {
                            var r = this.popStack(!0);
                            if (r instanceof s)
                                e = r.value;
                            else {
                                var a = this.stackSlot ? this.topStackName() : this.incrStack();
                                i = "(" + this.push(a) + " = " + r + "),",
                                    e = this.topStack()
                            }
                        } else
                            e = this.topStack();
                        var o = t.call(this, e);
                        return n ? ((this.inlineStack.length || this.compileStack.length) && this.popStack(),
                                this.push("(" + i + o + ")")) : (/^stack/.test(e) || (e = this.nextStack()),
                                this.source.push(e + " = (" + i + o + ");")),
                            e
                    },
                    nextStack: function() {
                        return this.pushStack()
                    },
                    incrStack: function() {
                        return this.stackSlot++,
                        this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
                            this.topStackName()
                    },
                    topStackName: function() {
                        return "stack" + this.stackSlot
                    },
                    flushInline: function() {
                        var t = this.inlineStack;
                        if (t.length) {
                            this.inlineStack = [];
                            for (var e = 0, i = t.length; i > e; e++) {
                                var n = t[e];
                                n instanceof s ? this.compileStack.push(n) : this.pushStack(n)
                            }
                        }
                    },
                    isInline: function() {
                        return this.inlineStack.length
                    },
                    popStack: function(t) {
                        var e = this.isInline()
                            , i = (e ? this.inlineStack : this.compileStack).pop();
                        return !t && i instanceof s ? i.value : (e || this.stackSlot--,
                                i)
                    },
                    topStack: function(t) {
                        var e = this.isInline() ? this.inlineStack : this.compileStack
                            , i = e[e.length - 1];
                        return !t && i instanceof s ? i.value : i
                    },
                    quotedString: function(t) {
                        return '"' + t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
                    },
                    setupHelper: function(t, e, s) {
                        var i = [];
                        this.setupParams(t, i, s);
                        var n = this.nameLookup("helpers", e, "helper");
                        return {
                            params: i,
                            name: n,
                            callParams: ["depth0"].concat(i).join(", "),
                            helperMissingParams: s && ["depth0", this.quotedString(e)].concat(i).join(", ")
                        }
                    },
                    setupParams: function(t, e, s) {
                        var i, n, r, a = [], o = [], h = [];
                        a.push("hash:" + this.popStack()),
                            n = this.popStack(),
                            r = this.popStack(),
                        (r || n) && (r || (this.context.aliases.self = "this",
                            r = "self.noop"),
                        n || (this.context.aliases.self = "this",
                            n = "self.noop"),
                            a.push("inverse:" + n),
                            a.push("fn:" + r));
                        for (var l = 0; t > l; l++)
                            i = this.popStack(),
                                e.push(i),
                            this.options.stringParams && (h.push(this.popStack()),
                                o.push(this.popStack()));
                        return this.options.stringParams && (a.push("contexts:[" + o.join(",") + "]"),
                            a.push("types:[" + h.join(",") + "]"),
                            a.push("hashTypes:hashTypes")),
                        this.options.data && a.push("data:data"),
                            a = "{" + a.join(",") + "}",
                            s ? (this.register("options", a),
                                    e.push("options")) : e.push(a),
                            e.join(", ")
                    }
                };
                for (var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), n = e.RESERVED_WORDS = {}, r = 0, a = i.length; a > r; r++)
                    n[i[r]] = !0;
                e.isValidJavaScriptVariableName = function(t) {
                    return !e.RESERVED_WORDS[t] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(t) ? !0 : !1
                }
            }(Handlebars.Compiler, Handlebars.JavaScriptCompiler),
            Handlebars.precompile = function(t, e) {
                if (!t || "string" != typeof t && t.constructor !== Handlebars.AST.ProgramNode)
                    throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
                e = e || {},
                "data"in e || (e.data = !0);
                var s = Handlebars.parse(t)
                    , i = (new Handlebars.Compiler).compile(s, e);
                return (new Handlebars.JavaScriptCompiler).compile(i, e)
            }
            ,
            Handlebars.compile = function(t, e) {
                function s() {
                    var s = Handlebars.parse(t)
                        , i = (new Handlebars.Compiler).compile(s, e)
                        , n = (new Handlebars.JavaScriptCompiler).compile(i, e, void 0, !0);
                    return Handlebars.template(n)
                }
                if (!t || "string" != typeof t && t.constructor !== Handlebars.AST.ProgramNode)
                    throw new Handlebars.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + t);
                e = e || {},
                "data"in e || (e.data = !0);
                var i;
                return function(t, e) {
                    return i || (i = s()),
                        i.call(this, t, e)
                }
            }
            ,
            Handlebars.VM = {
                template: function(t) {
                    var e = {
                        escapeExpression: Handlebars.Utils.escapeExpression,
                        invokePartial: Handlebars.VM.invokePartial,
                        programs: [],
                        program: function(t, e, s) {
                            var i = this.programs[t];
                            return s ? Handlebars.VM.program(e, s) : i ? i : i = this.programs[t] = Handlebars.VM.program(e)
                        },
                        programWithDepth: Handlebars.VM.programWithDepth,
                        noop: Handlebars.VM.noop,
                        compilerInfo: null
                    };
                    return function(s, i) {
                        i = i || {};
                        var n = t.call(e, Handlebars, s, i.helpers, i.partials, i.data)
                            , r = e.compilerInfo || []
                            , a = r[0] || 1
                            , o = Handlebars.COMPILER_REVISION;
                        if (a !== o) {
                            if (o > a) {
                                var h = Handlebars.REVISION_CHANGES[o]
                                    , l = Handlebars.REVISION_CHANGES[a];
                                throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + h + ") or downgrade your runtime to an older version (" + l + ")."
                            }
                            throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + r[1] + ")."
                        }
                        return n
                    }
                },
                programWithDepth: function(t, e) {
                    var s = Array.prototype.slice.call(arguments, 2);
                    return function(i, n) {
                        return n = n || {},
                            t.apply(this, [i, n.data || e].concat(s))
                    }
                },
                program: function(t, e) {
                    return function(s, i) {
                        return i = i || {},
                            t(s, i.data || e)
                    }
                },
                noop: function() {
                    return ""
                },
                invokePartial: function(t, e, s, i, n, r) {
                    var a = {
                        helpers: i,
                        partials: n,
                        data: r
                    };
                    if (void 0 === t)
                        throw new Handlebars.Exception("The partial " + e + " could not be found");
                    if (t instanceof Function)
                        return t(s, a);
                    if (Handlebars.compile)
                        return n[e] = Handlebars.compile(t, {
                            data: void 0 !== r
                        }),
                            n[e](s, a);
                    throw new Handlebars.Exception("The partial " + e + " could not be compiled when running in runtime-only mode")
                }
            },
            Handlebars.template = Handlebars.VM.template,
            s.exports = Handlebars
    }),
    define("gallery/moment/2.0.0/moment", [], function(t, n, e) {
        function s(t, n) {
            return function(e) {
                return c(t.call(this, e), n)
            }
        }
        function r(t) {
            return function(n) {
                return this.lang().ordinal(t.call(this, n))
            }
        }
        function a() {}
        function i(t) {
            u(this, t)
        }
        function o(t) {
            var n = this._data = {}
                , e = t.years || t.year || t.y || 0
                , s = t.months || t.month || t.M || 0
                , r = t.weeks || t.week || t.w || 0
                , a = t.days || t.day || t.d || 0
                , i = t.hours || t.hour || t.h || 0
                , o = t.minutes || t.minute || t.m || 0
                , u = t.seconds || t.second || t.s || 0
                , c = t.milliseconds || t.millisecond || t.ms || 0;
            this._milliseconds = c + 1e3 * u + 6e4 * o + 36e5 * i,
                this._days = a + 7 * r,
                this._months = s + 12 * e,
                n.milliseconds = c % 1e3,
                u += d(c / 1e3),
                n.seconds = u % 60,
                o += d(u / 60),
                n.minutes = o % 60,
                i += d(o / 60),
                n.hours = i % 24,
                a += d(i / 24),
                a += 7 * r,
                n.days = a % 30,
                s += d(a / 30),
                n.months = s % 12,
                e += d(s / 12),
                n.years = e
        }
        function u(t, n) {
            for (var e in n)
                n.hasOwnProperty(e) && (t[e] = n[e]);
            return t
        }
        function d(t) {
            return 0 > t ? Math.ceil(t) : Math.floor(t)
        }
        function c(t, n) {
            for (var e = t + ""; n > e.length; )
                e = "0" + e;
            return e
        }
        function h(t, n, e) {
            var s, r = n._milliseconds, a = n._days, i = n._months;
            r && t._d.setTime(+t + r * e),
            a && t.date(t.date() + a * e),
            i && (s = t.date(),
                t.date(1).month(t.month() + i * e).date(Math.min(s, t.daysInMonth())))
        }
        function f(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        function l(t, n) {
            var e, s = Math.min(t.length, n.length), r = Math.abs(t.length - n.length), a = 0;
            for (e = 0; s > e; e++)
                ~~t[e] !== ~~n[e] && a++;
            return a + r
        }
        function _(t, n) {
            return n.abbr = t,
            Z[t] || (Z[t] = new a),
                Z[t].set(n),
                Z[t]
        }
        function m(n) {
            return n ? (!Z[n] && A && t("./lang/" + n),
                    Z[n]) : C.fn._lang
        }
        function y(t) {
            return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }
        function M(t) {
            var n, e, s = t.match(J);
            for (n = 0,
                     e = s.length; e > n; n++)
                s[n] = on[s[n]] ? on[s[n]] : y(s[n]);
            return function(r) {
                var a = "";
                for (n = 0; e > n; n++)
                    a += "function" == typeof s[n].call ? s[n].call(r, t) : s[n];
                return a
            }
        }
        function D(t, n) {
            function e(n) {
                return t.lang().longDateFormat(n) || n
            }
            for (var s = 5; s-- && V.test(n); )
                n = n.replace(V, e);
            return sn[n] || (sn[n] = M(n)),
                sn[n](t)
        }
        function Y(t) {
            switch (t) {
                case "DDDD":
                    return $;
                case "YYYY":
                    return I;
                case "YYYYY":
                    return X;
                case "S":
                case "SS":
                case "SSS":
                case "DDD":
                    return N;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                case "a":
                case "A":
                    return j;
                case "X":
                    return G;
                case "Z":
                case "ZZ":
                    return R;
                case "T":
                    return B;
                case "MM":
                case "DD":
                case "YY":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                    return E;
                default:
                    return RegExp(t.replace("\\", ""))
            }
        }
        function p(t, n, e) {
            var s, r = e._a;
            switch (t) {
                case "M":
                case "MM":
                    r[1] = null == n ? 0 : ~~n - 1;
                    break;
                case "MMM":
                case "MMMM":
                    s = m(e._l).monthsParse(n),
                        null != s ? r[1] = s : e._isValid = !1;
                    break;
                case "D":
                case "DD":
                case "DDD":
                case "DDDD":
                    null != n && (r[2] = ~~n);
                    break;
                case "YY":
                    r[0] = ~~n + (~~n > 68 ? 1900 : 2e3);
                    break;
                case "YYYY":
                case "YYYYY":
                    r[0] = ~~n;
                    break;
                case "a":
                case "A":
                    e._isPm = "pm" === (n + "").toLowerCase();
                    break;
                case "H":
                case "HH":
                case "h":
                case "hh":
                    r[3] = ~~n;
                    break;
                case "m":
                case "mm":
                    r[4] = ~~n;
                    break;
                case "s":
                case "ss":
                    r[5] = ~~n;
                    break;
                case "S":
                case "SS":
                case "SSS":
                    r[6] = ~~(1e3 * ("0." + n));
                    break;
                case "X":
                    e._d = new Date(1e3 * parseFloat(n));
                    break;
                case "Z":
                case "ZZ":
                    e._useUTC = !0,
                        s = (n + "").match(tn),
                    s && s[1] && (e._tzh = ~~s[1]),
                    s && s[2] && (e._tzm = ~~s[2]),
                    s && "+" === s[0] && (e._tzh = -e._tzh,
                        e._tzm = -e._tzm)
            }
            null == n && (e._isValid = !1)
        }
        function g(t) {
            var n, e, s = [];
            if (!t._d) {
                for (n = 0; 7 > n; n++)
                    t._a[n] = s[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
                s[3] += t._tzh || 0,
                    s[4] += t._tzm || 0,
                    e = new Date(0),
                    t._useUTC ? (e.setUTCFullYear(s[0], s[1], s[2]),
                            e.setUTCHours(s[3], s[4], s[5], s[6])) : (e.setFullYear(s[0], s[1], s[2]),
                            e.setHours(s[3], s[4], s[5], s[6])),
                    t._d = e
            }
        }
        function w(t) {
            var n, e, s = t._f.match(J), r = t._i;
            for (t._a = [],
                     n = 0; s.length > n; n++)
                e = (Y(s[n]).exec(r) || [])[0],
                e && (r = r.slice(r.indexOf(e) + e.length)),
                on[s[n]] && p(s[n], e, t);
            t._isPm && 12 > t._a[3] && (t._a[3] += 12),
            t._isPm === !1 && 12 === t._a[3] && (t._a[3] = 0),
                g(t)
        }
        function v(t) {
            for (var n, e, s, r, a = 99; t._f.length; ) {
                if (n = u({}, t),
                        n._f = t._f.pop(),
                        w(n),
                        e = new i(n),
                        e.isValid()) {
                    s = e;
                    break
                }
                r = l(n._a, e.toArray()),
                a > r && (a = r,
                    s = e)
            }
            u(t, s)
        }
        function T(t) {
            var n, e = t._i;
            if (q.exec(e)) {
                for (t._f = "YYYY-MM-DDT",
                         n = 0; 4 > n; n++)
                    if (Q[n][1].exec(e)) {
                        t._f += Q[n][0];
                        break
                    }
                R.exec(e) && (t._f += " Z"),
                    w(t)
            } else
                t._d = new Date(e)
        }
        function k(t) {
            var n = t._i
                , e = P.exec(n);
            void 0 === n ? t._d = new Date : e ? t._d = new Date(+e[1]) : "string" == typeof n ? T(t) : f(n) ? (t._a = n.slice(0),
                                g(t)) : t._d = n instanceof Date ? new Date(+n) : new Date(n)
        }
        function S(t, n, e, s, r) {
            return r.relativeTime(n || 1, !!e, t, s)
        }
        function b(t, n, e) {
            var s = W(Math.abs(t) / 1e3)
                , r = W(s / 60)
                , a = W(r / 60)
                , i = W(a / 24)
                , o = W(i / 365)
                , u = 45 > s && ["s", s] || 1 === r && ["m"] || 45 > r && ["mm", r] || 1 === a && ["h"] || 22 > a && ["hh", a] || 1 === i && ["d"] || 25 >= i && ["dd", i] || 45 >= i && ["M"] || 345 > i && ["MM", W(i / 30)] || 1 === o && ["y"] || ["yy", o];
            return u[2] = n,
                u[3] = t > 0,
                u[4] = e,
                S.apply({}, u)
        }
        function F(t, n, e) {
            var s = e - n
                , r = e - t.day();
            return r > s && (r -= 7),
            s - 7 > r && (r += 7),
                Math.ceil(C(t).add("d", r).dayOfYear() / 7)
        }
        function H(t) {
            var n = t._i
                , e = t._f;
            return null === n || "" === n ? null : ("string" == typeof n && (t._i = n = m().preparse(n)),
                    C.isMoment(n) ? (t = u({}, n),
                            t._d = new Date(+n._d)) : e ? f(e) ? v(t) : w(t) : k(t),
                    new i(t))
        }
        function L(t, n) {
            C.fn[t] = C.fn[t + "s"] = function(t) {
                var e = this._isUTC ? "UTC" : "";
                return null != t ? (this._d["set" + e + n](t),
                        this) : this._d["get" + e + n]()
            }
        }
        function O(t) {
            C.duration.fn[t] = function() {
                return this._data[t]
            }
        }
        function z(t, n) {
            C.duration.fn["as" + t] = function() {
                return +this / n
            }
        }
        for (var C, U, x = "2.0.0", W = Math.round, Z = {}, A = void 0 !== e && e.exports, P = /^\/?Date\((\-?\d+)/i, J = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, V = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, E = /\d\d?/, N = /\d{1,3}/, $ = /\d{3}/, I = /\d{1,4}/, X = /[+\-]?\d{1,6}/, j = /[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i, R = /Z|[\+\-]\d\d:?\d\d/i, B = /T/i, G = /[\+\-]?\d+(\.\d{1,3})?/, q = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, K = "YYYY-MM-DDTHH:mm:ssZ", Q = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], tn = /([\+\-]|\d\d)/gi, nn = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"), en = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }, sn = {}, rn = "DDD w W M D d".split(" "), an = "M D H h m s w W".split(" "), on = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(t) {
                return this.lang().monthsShort(this, t)
            },
            MMMM: function(t) {
                return this.lang().months(this, t)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(t) {
                return this.lang().weekdaysMin(this, t)
            },
            ddd: function(t) {
                return this.lang().weekdaysShort(this, t)
            },
            dddd: function(t) {
                return this.lang().weekdays(this, t)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return c(this.year() % 100, 2)
            },
            YYYY: function() {
                return c(this.year(), 4)
            },
            YYYYY: function() {
                return c(this.year(), 5)
            },
            a: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return ~~(this.milliseconds() / 100)
            },
            SS: function() {
                return c(~~(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return c(this.milliseconds(), 3)
            },
            Z: function() {
                var t = -this.zone()
                    , n = "+";
                return 0 > t && (t = -t,
                    n = "-"),
                n + c(~~(t / 60), 2) + ":" + c(~~t % 60, 2)
            },
            ZZ: function() {
                var t = -this.zone()
                    , n = "+";
                return 0 > t && (t = -t,
                    n = "-"),
                n + c(~~(10 * t / 6), 4)
            },
            X: function() {
                return this.unix()
            }
        }; rn.length; )
            U = rn.pop(),
                on[U + "o"] = r(on[U]);
        for (; an.length; )
            U = an.pop(),
                on[U + U] = s(on[U], 2);
        for (on.DDDD = s(on.DDD, 3),
                 a.prototype = {
                     set: function(t) {
                         var n, e;
                         for (e in t)
                             n = t[e],
                                 "function" == typeof n ? this[e] = n : this["_" + e] = n
                     },
                     _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                     months: function(t) {
                         return this._months[t.month()]
                     },
                     _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                     monthsShort: function(t) {
                         return this._monthsShort[t.month()]
                     },
                     monthsParse: function(t) {
                         var n, e, s;
                         for (this._monthsParse || (this._monthsParse = []),
                                  n = 0; 12 > n; n++)
                             if (this._monthsParse[n] || (e = C([2e3, n]),
                                     s = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""),
                                     this._monthsParse[n] = RegExp(s.replace(".", ""), "i")),
                                     this._monthsParse[n].test(t))
                                 return n
                     },
                     _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                     weekdays: function(t) {
                         return this._weekdays[t.day()]
                     },
                     _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                     weekdaysShort: function(t) {
                         return this._weekdaysShort[t.day()]
                     },
                     _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                     weekdaysMin: function(t) {
                         return this._weekdaysMin[t.day()]
                     },
                     _longDateFormat: {
                         LT: "h:mm A",
                         L: "MM/DD/YYYY",
                         LL: "MMMM D YYYY",
                         LLL: "MMMM D YYYY LT",
                         LLLL: "dddd, MMMM D YYYY LT"
                     },
                     longDateFormat: function(t) {
                         var n = this._longDateFormat[t];
                         return !n && this._longDateFormat[t.toUpperCase()] && (n = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
                             return t.slice(1)
                         }),
                             this._longDateFormat[t] = n),
                             n
                     },
                     meridiem: function(t, n, e) {
                         return t > 11 ? e ? "pm" : "PM" : e ? "am" : "AM"
                     },
                     _calendar: {
                         sameDay: "[Today at] LT",
                         nextDay: "[Tomorrow at] LT",
                         nextWeek: "dddd [at] LT",
                         lastDay: "[Yesterday at] LT",
                         lastWeek: "[last] dddd [at] LT",
                         sameElse: "L"
                     },
                     calendar: function(t, n) {
                         var e = this._calendar[t];
                         return "function" == typeof e ? e.apply(n) : e
                     },
                     _relativeTime: {
                         future: "in %s",
                         past: "%s ago",
                         s: "a few seconds",
                         m: "a minute",
                         mm: "%d minutes",
                         h: "an hour",
                         hh: "%d hours",
                         d: "a day",
                         dd: "%d days",
                         M: "a month",
                         MM: "%d months",
                         y: "a year",
                         yy: "%d years"
                     },
                     relativeTime: function(t, n, e, s) {
                         var r = this._relativeTime[e];
                         return "function" == typeof r ? r(t, n, e, s) : r.replace(/%d/i, t)
                     },
                     pastFuture: function(t, n) {
                         var e = this._relativeTime[t > 0 ? "future" : "past"];
                         return "function" == typeof e ? e(n) : e.replace(/%s/i, n)
                     },
                     ordinal: function(t) {
                         return this._ordinal.replace("%d", t)
                     },
                     _ordinal: "%d",
                     preparse: function(t) {
                         return t
                     },
                     postformat: function(t) {
                         return t
                     },
                     week: function(t) {
                         return F(t, this._week.dow, this._week.doy)
                     },
                     _week: {
                         dow: 0,
                         doy: 6
                     }
                 },
                 C = function(t, n, e) {
                     return H({
                         _i: t,
                         _f: n,
                         _l: e,
                         _isUTC: !1
                     })
                 }
                 ,
                 C.utc = function(t, n, e) {
                     return H({
                         _useUTC: !0,
                         _isUTC: !0,
                         _l: e,
                         _i: t,
                         _f: n
                     })
                 }
                 ,
                 C.unix = function(t) {
                     return C(1e3 * t)
                 }
                 ,
                 C.duration = function(t, n) {
                     var e, s = C.isDuration(t), r = "number" == typeof t, a = s ? t._data : r ? {} : t;
                     return r && (n ? a[n] = t : a.milliseconds = t),
                         e = new o(a),
                     s && t.hasOwnProperty("_lang") && (e._lang = t._lang),
                         e
                 }
                 ,
                 C.version = x,
                 C.defaultFormat = K,
                 C.lang = function(t, n) {
                     return t ? (n ? _(t, n) : Z[t] || m(t),
                             void (C.duration.fn._lang = C.fn._lang = m(t))) : C.fn._lang._abbr
                 }
                 ,
                 C.langData = function(t) {
                     return t && t._lang && t._lang._abbr && (t = t._lang._abbr),
                         m(t)
                 }
                 ,
                 C.isMoment = function(t) {
                     return t instanceof i
                 }
                 ,
                 C.isDuration = function(t) {
                     return t instanceof o
                 }
                 ,
                 C.fn = i.prototype = {
                     clone: function() {
                         return C(this)
                     },
                     valueOf: function() {
                         return +this._d
                     },
                     unix: function() {
                         return Math.floor(+this._d / 1e3)
                     },
                     toString: function() {
                         return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                     },
                     toDate: function() {
                         return this._d
                     },
                     toJSON: function() {
                         return C.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                     },
                     toArray: function() {
                         var t = this;
                         return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
                     },
                     isValid: function() {
                         return null == this._isValid && (this._isValid = this._a ? !l(this._a, (this._isUTC ? C.utc(this._a) : C(this._a)).toArray()) : !isNaN(this._d.getTime())),
                             !!this._isValid
                     },
                     utc: function() {
                         return this._isUTC = !0,
                             this
                     },
                     local: function() {
                         return this._isUTC = !1,
                             this
                     },
                     format: function(t) {
                         var n = D(this, t || C.defaultFormat);
                         return this.lang().postformat(n)
                     },
                     add: function(t, n) {
                         var e;
                         return e = "string" == typeof t ? C.duration(+n, t) : C.duration(t, n),
                             h(this, e, 1),
                             this
                     },
                     subtract: function(t, n) {
                         var e;
                         return e = "string" == typeof t ? C.duration(+n, t) : C.duration(t, n),
                             h(this, e, -1),
                             this
                     },
                     diff: function(t, n, e) {
                         var s, r, a = this._isUTC ? C(t).utc() : C(t).local(), i = 6e4 * (this.zone() - a.zone());
                         return n && (n = n.replace(/s$/, "")),
                             "year" === n || "month" === n ? (s = 432e5 * (this.daysInMonth() + a.daysInMonth()),
                                     r = 12 * (this.year() - a.year()) + (this.month() - a.month()),
                                     r += (this - C(this).startOf("month") - (a - C(a).startOf("month"))) / s,
                                 "year" === n && (r /= 12)) : (s = this - a - i,
                                     r = "second" === n ? s / 1e3 : "minute" === n ? s / 6e4 : "hour" === n ? s / 36e5 : "day" === n ? s / 864e5 : "week" === n ? s / 6048e5 : s),
                             e ? r : d(r)
                     },
                     from: function(t, n) {
                         return C.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!n)
                     },
                     fromNow: function(t) {
                         return this.from(C(), t)
                     },
                     calendar: function() {
                         var t = this.diff(C().startOf("day"), "days", !0)
                             , n = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
                         return this.format(this.lang().calendar(n, this))
                     },
                     isLeapYear: function() {
                         var t = this.year();
                         return 0 === t % 4 && 0 !== t % 100 || 0 === t % 400
                     },
                     isDST: function() {
                         return this.zone() < C([this.year()]).zone() || this.zone() < C([this.year(), 5]).zone()
                     },
                     day: function(t) {
                         var n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                         return null == t ? n : this.add({
                                 d: t - n
                             })
                     },
                     startOf: function(t) {
                         switch (t = t.replace(/s$/, "")) {
                             case "year":
                                 this.month(0);
                             case "month":
                                 this.date(1);
                             case "week":
                             case "day":
                                 this.hours(0);
                             case "hour":
                                 this.minutes(0);
                             case "minute":
                                 this.seconds(0);
                             case "second":
                                 this.milliseconds(0)
                         }
                         return "week" === t && this.day(0),
                             this
                     },
                     endOf: function(t) {
                         return this.startOf(t).add(t.replace(/s?$/, "s"), 1).subtract("ms", 1)
                     },
                     isAfter: function(t, n) {
                         return n = void 0 !== n ? n : "millisecond",
                         +this.clone().startOf(n) > +C(t).startOf(n)
                     },
                     isBefore: function(t, n) {
                         return n = void 0 !== n ? n : "millisecond",
                         +this.clone().startOf(n) < +C(t).startOf(n)
                     },
                     isSame: function(t, n) {
                         return n = void 0 !== n ? n : "millisecond",
                         +this.clone().startOf(n) === +C(t).startOf(n)
                     },
                     zone: function() {
                         return this._isUTC ? 0 : this._d.getTimezoneOffset()
                     },
                     daysInMonth: function() {
                         return C.utc([this.year(), this.month() + 1, 0]).date()
                     },
                     dayOfYear: function(t) {
                         var n = W((C(this).startOf("day") - C(this).startOf("year")) / 864e5) + 1;
                         return null == t ? n : this.add("d", t - n)
                     },
                     isoWeek: function(t) {
                         var n = F(this, 1, 4);
                         return null == t ? n : this.add("d", 7 * (t - n))
                     },
                     week: function(t) {
                         var n = this.lang().week(this);
                         return null == t ? n : this.add("d", 7 * (t - n))
                     },
                     lang: function(t) {
                         return void 0 === t ? this._lang : (this._lang = m(t),
                                 this)
                     }
                 },
                 U = 0; nn.length > U; U++)
            L(nn[U].toLowerCase().replace(/s$/, ""), nn[U]);
        L("year", "FullYear"),
            C.fn.days = C.fn.day,
            C.fn.weeks = C.fn.week,
            C.fn.isoWeeks = C.fn.isoWeek,
            C.duration.fn = o.prototype = {
                weeks: function() {
                    return d(this.days() / 7)
                },
                valueOf: function() {
                    return this._milliseconds + 864e5 * this._days + 2592e6 * this._months
                },
                humanize: function(t) {
                    var n = +this
                        , e = b(n, !t, this.lang());
                    return t && (e = this.lang().pastFuture(n, e)),
                        this.lang().postformat(e)
                },
                lang: C.fn.lang
            };
        for (U in en)
            en.hasOwnProperty(U) && (z(U, en[U]),
                O(U.toLowerCase()));
        z("Weeks", 6048e5),
            C.lang("en", {
                ordinal: function(t) {
                    var n = t % 10
                        , e = 1 === ~~(t % 100 / 10) ? "th" : 1 === n ? "st" : 2 === n ? "nd" : 3 === n ? "rd" : "th";
                    return t + e
                }
            }),
            e.exports = C
    }),
    define("gallery/json/1.0.2/json", [], function() {
        return "object" != typeof JSON && (JSON = {}),
            function() {
                "use strict";
                function f(t) {
                    return 10 > t ? "0" + t : t
                }
                function quote(t) {
                    return escapable.lastIndex = 0,
                        escapable.test(t) ? '"' + t.replace(escapable, function(t) {
                                var e = meta[t];
                                return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                            }) + '"' : '"' + t + '"'
                }
                function str(t, e) {
                    var n, r, o, f, u, i = gap, p = e[t];
                    switch (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(t)),
                    "function" == typeof rep && (p = rep.call(e, t, p)),
                        typeof p) {
                        case "string":
                            return quote(p);
                        case "number":
                            return isFinite(p) ? p + "" : "null";
                        case "boolean":
                        case "null":
                            return p + "";
                        case "object":
                            if (!p)
                                return "null";
                            if (gap += indent,
                                    u = [],
                                "[object Array]" === Object.prototype.toString.apply(p)) {
                                for (f = p.length,
                                         n = 0; f > n; n += 1)
                                    u[n] = str(n, p) || "null";
                                return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + i + "]" : "[" + u.join(",") + "]",
                                    gap = i,
                                    o
                            }
                            if (rep && "object" == typeof rep)
                                for (f = rep.length,
                                         n = 0; f > n; n += 1)
                                    "string" == typeof rep[n] && (r = rep[n],
                                        o = str(r, p),
                                    o && u.push(quote(r) + (gap ? ": " : ":") + o));
                            else
                                for (r in p)
                                    Object.prototype.hasOwnProperty.call(p, r) && (o = str(r, p),
                                    o && u.push(quote(r) + (gap ? ": " : ":") + o));
                            return o = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + i + "}" : "{" + u.join(",") + "}",
                                gap = i,
                                o
                    }
                }
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                    }
                        ,
                        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                            return this.valueOf()
                        }
                );
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
                    "\b": "\\b",
                    "	": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                }, rep;
                "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
                        var r;
                        if (gap = "",
                                indent = "",
                            "number" == typeof n)
                            for (r = 0; n > r; r += 1)
                                indent += " ";
                        else
                            "string" == typeof n && (indent = n);
                        if (rep = e,
                            e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                            throw Error("JSON.stringify");
                        return str("", {
                            "": t
                        })
                    }
                ),
                "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                        function walk(t, e) {
                            var n, r, o = t[e];
                            if (o && "object" == typeof o)
                                for (n in o)
                                    Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n),
                                        void 0 !== r ? o[n] = r : delete o[n]);
                            return reviver.call(t, e, o)
                        }
                        var j;
                        if (text += "",
                                cx.lastIndex = 0,
                            cx.test(text) && (text = text.replace(cx, function(t) {
                                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
                            })),
                                /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                            return j = eval("(" + text + ")"),
                                "function" == typeof reviver ? walk({
                                        "": j
                                    }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    }
                )
            }(),
            this.JSON = this.JSON || JSON
    }),
    define("arale/overlay/1.0.1/overlay", ["$", "arale/position/1.0.0/position", "arale/iframe-shim/1.0.1/iframe-shim", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events"], function(a, b, c) {
        function j(a) {
            return d.contains(document.documentElement, a)
        }
        function k(a) {
            d(h.blurOverlays).each(function(b, c) {
                if (c && c.get("visible")) {
                    for (var e = 0; c._relativeElements.length > e; e++) {
                        var f = d(c._relativeElements[e])[0];
                        if (f === a.target || d.contains(f, a.target))
                            return
                    }
                    c.hide()
                }
            })
        }
        function l(a, b) {
            for (var c = 0; b.length > c; c++)
                if (a === b[c])
                    return b.splice(c, 1),
                        b
        }
        var d = a("$")
            , e = a("arale/position/1.0.0/position")
            , f = a("arale/iframe-shim/1.0.1/iframe-shim")
            , g = a("arale/widget/1.0.3/widget")
            , h = g.extend({
            attrs: {
                width: "",
                height: "",
                zIndex: 99,
                visible: !1,
                align: {
                    selfXY: [0, 0],
                    baseElement: e.VIEWPORT,
                    baseXY: [0, 0]
                },
                parentNode: document.body
            },
            show: function() {
                return this.rendered || this.render(),
                    this.set("visible", !0),
                    this
            },
            hide: function() {
                return this.set("visible", !1),
                    this
            },
            setup: function() {
                var a = this;
                this._setupShim(),
                    this._setupResize(),
                    this.after("show", function() {
                        a._setPosition()
                    })
            },
            destroy: function() {
                return l(this, h.allOverlays),
                    l(this, h.blurOverlays),
                    h.superclass.destroy.call(this)
            },
            _setPosition: function(a) {
                if (j(this.element[0])) {
                    a || (a = this.get("align"));
                    var b = "none" === this.element.css("display");
                    return b && this.element.css({
                        visibility: "hidden",
                        display: "block"
                    }),
                        e.pin({
                            element: this.element,
                            x: a.selfXY[0],
                            y: a.selfXY[1]
                        }, {
                            element: a.baseElement,
                            x: a.baseXY[0],
                            y: a.baseXY[1]
                        }),
                    b && this.element.css({
                        visibility: "",
                        display: "none"
                    }),
                        this
                }
            },
            _setupShim: function() {
                var a = new f(this.element);
                this.after("hide _setPosition", a.sync, a);
                var b = ["width", "height"];
                for (var c in b)
                    b.hasOwnProperty(c) && this.on("change:" + c, a.sync, a);
                this.before("destroy", a.destroy, a)
            },
            _setupResize: function() {
                h.allOverlays.push(this)
            },
            _blurHide: function(a) {
                a = d.makeArray(a),
                    a.push(this.element),
                    this._relativeElements = a,
                    h.blurOverlays.push(this)
            },
            _onRenderWidth: function(a) {
                this.element.css("width", a)
            },
            _onRenderHeight: function(a) {
                this.element.css("height", a)
            },
            _onRenderZIndex: function(a) {
                this.element.css("zIndex", a)
            },
            _onRenderAlign: function(a) {
                this._setPosition(a)
            },
            _onRenderVisible: function(a) {
                this.element[a ? "show" : "hide"]()
            }
        });
        h.blurOverlays = [],
            d(document).on("click", function(a) {
                k(a)
            });
        var i;
        h.allOverlays = [],
            d(window).resize(function() {
                i && clearTimeout(i),
                    i = setTimeout(function() {
                        d(h.allOverlays).each(function(a, b) {
                            b && b.get("visible") && b._setPosition()
                        })
                    }, 80)
            }),
            c.exports = h
    }),
    define("arale/position/1.0.0/position", ["$"], function(e, t) {
        function u(e) {
            e = h(e) || {},
            e.nodeType && (e = {
                element: e
            });
            var t = h(e.element) || r;
            if (1 !== t.nodeType)
                throw new Error("posObject.element is invalid.");
            var n = {
                element: t,
                x: e.x || 0,
                y: e.y || 0
            }
                , o = t === r || "VIEWPORT" === t._id;
            return n.offset = function() {
                return s ? {
                        left: 0,
                        top: 0
                    } : o ? {
                            left: i(document).scrollLeft(),
                            top: i(document).scrollTop()
                        } : i(t).offset()
            }
                ,
                n.size = function() {
                    var e = i(o ? window : t);
                    return {
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }
                }
                ,
                n
        }
        function a(e) {
            e.x = f(e.x, e, "width"),
                e.y = f(e.y, e, "height")
        }
        function f(e, t, n) {
            if (e += "",
                    e = e.replace(/px/gi, ""),
                /\D/.test(e) && (e = e.replace(/(?:top|left)/gi, "0%").replace(/center/gi, "50%").replace(/(?:bottom|right)/gi, "100%")),
                -1 !== e.indexOf("%") && (e = e.replace(/(\d+(?:\.\d+)?)%/gi, function(e, r) {
                    return t.size()[n] * (r / 100)
                })),
                    /[+\-*\/]/.test(e))
                try {
                    e = new Function("return " + e)()
                } catch (r) {
                    throw new Error("Invalid position value: " + e)
                }
            return c(e)
        }
        function l(e) {
            var t = e.offsetParent();
            t[0] === document.documentElement && (t = i(document.body)),
            o && t.css("zoom", 1);
            var n = t[0] === document.body ? {
                    left: 0,
                    top: 0
                } : t.offset();
            return n.top += c(t.css("border-top-width")),
                n.left += c(t.css("border-left-width")),
                n
        }
        function c(e) {
            return parseFloat(e, 10) || 0
        }
        function h(e) {
            return i(e)[0]
        }
        var n = t
            , r = {
            _id: "VIEWPORT",
            nodeType: 1
        }
            , i = e("$")
            , s = !1
            , o = i.browser.msie && 6 == i.browser.version;
        n.pin = function(e, t) {
            e = u(e),
                t = u(t);
            var n = i(e.element);
            "fixed" !== n.css("position") || o ? (n.css("position", "absolute"),
                    s = !1) : s = !0,
                a(e),
                a(t);
            var r = l(n)
                , f = t.offset()
                , c = f.top + t.y - e.y - r.top
                , h = f.left + t.x - e.x - r.left;
            n.css({
                left: h,
                top: c
            })
        }
            ,
            n.center = function(e, t) {
                n.pin({
                    element: e,
                    x: "50%",
                    y: "50%"
                }, {
                    element: t,
                    x: "50%",
                    y: "50%"
                })
            }
            ,
            n.VIEWPORT = r
    }),
    define("arale/iframe-shim/1.0.1/iframe-shim", ["$", "arale/position/1.0.0/position"], function(e, t, i) {
        function r(e) {
            this.target = n(e).eq(0)
        }
        function o() {}
        function s(e) {
            var t = {
                display: "none",
                border: "none",
                opacity: 0,
                position: "absolute"
            }
                , i = e.css("zIndex");
            return i && i > 0 && (t.zIndex = i - 1),
                n("<iframe>", {
                    src: "javascript:''",
                    frameborder: 0,
                    css: t
                }).insertBefore(e)
        }
        var n = e("$")
            , a = e("arale/position/1.0.0/position");
        r.prototype.sync = function() {
            var e = this.target
                , t = this.iframe;
            if (!e.length)
                return this;
            var i = e.outerHeight()
                , r = e.outerWidth();
            return i && r && !e.is(":hidden") ? (t || (t = this.iframe = s(e)),
                    t.css({
                        height: i,
                        width: r
                    }),
                    a.pin(t[0], e[0]),
                    t.show()) : t && t.hide(),
                this
        }
            ,
            r.prototype.destroy = function() {
                this.iframe && (this.iframe.remove(),
                    delete this.iframe),
                    delete this.target
            }
            ,
            n.browser.msie && "6.0" === n.browser.version ? i.exports = r : (o.prototype.sync = o,
                    o.prototype.destroy = o,
                    i.exports = o)
    }),
    define("arale/widget/1.0.3/daparser", ["$"], function(a, b) {
        function g(a) {
            return a.toLowerCase().replace(d, function(a, b) {
                return (b + "").toUpperCase()
            })
        }
        function h(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    var c = a[b];
                    if ("string" != typeof c)
                        continue;
                    e.test(c) ? (c = c.replace(/'/g, '"'),
                            a[b] = h(f(c))) : a[b] = i(c)
                }
            return a
        }
        function i(a) {
            if ("false" === a.toLowerCase())
                a = !1;
            else if ("true" === a.toLowerCase())
                a = !0;
            else if (/\d/.test(a) && /[^a-z]/i.test(a)) {
                var b = parseFloat(a);
                b + "" === a && (a = b)
            }
            return a
        }
        var c = a("$");
        b.parseElement = function(a, b) {
            a = c(a)[0];
            var d = {};
            if (a.dataset)
                d = c.extend({}, a.dataset);
            else
                for (var e = a.attributes, f = 0, i = e.length; i > f; f++) {
                    var j = e[f]
                        , k = j.name;
                    0 === k.indexOf("data-") && (k = g(k.substring(5)),
                        d[k] = j.value)
                }
            return b === !0 ? d : h(d)
        }
        ;
        var d = /-([a-z])/g
            , e = /^\s*[\[{].*[\]}]\s*$/
            , f = this.JSON ? JSON.parse : c.parseJSON
    }),
    define("arale/widget/1.0.3/auto-render", ["$"], function(a, b) {
        var c = a("$")
            , d = "data-widget-auto-rendered";
        b.autoRender = function(a) {
            return new this(a).render()
        }
            ,
            b.autoRenderAll = function(a, e) {
                "function" == typeof a && (e = a,
                    a = null),
                    a = c(a || document.body);
                var f = []
                    , g = [];
                a.find("[data-widget]").each(function(a, c) {
                    b.isDataApiOff(c) || (f.push(c.getAttribute("data-widget").toLowerCase()),
                        g.push(c))
                }),
                f.length && seajs.use(f, function() {
                    for (var a = 0; arguments.length > a; a++) {
                        var b = arguments[a]
                            , f = c(g[a]);
                        f.attr(d) || (b.autoRender && b.autoRender({
                            element: f,
                            renderType: "auto"
                        }),
                            f.attr(d, "true"))
                    }
                    e && e()
                })
            }
        ;
        var e = "off" === c(document.body).attr("data-api");
        b.isDataApiOff = function(a) {
            var b = c(a).attr("data-api");
            return "off" === b || "on" !== b && e
        }
    }),
    define("arale/widget/1.0.3/widget", ["./daparser", "./auto-render", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events", "$"], function(a, b, c) {
        function o() {
            return "widget-" + n++
        }
        function p(a) {
            return "[object String]" === m.call(a)
        }
        function q(a) {
            return "[object Function]" === m.call(a)
        }
        function r(a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !1;
            return !0
        }
        function t(a) {
            return s(document.documentElement, a)
        }
        function u(a) {
            return a.charAt(0).toUpperCase() + a.substring(1)
        }
        function y(a) {
            return q(a.events) && (a.events = a.events()),
                a.events
        }
        function z(a, b) {
            var c = a.match(v)
                , d = c[1] + h + b.cid
                , e = c[2] || void 0;
            return e && e.indexOf("{{") > -1 && (e = A(e, b)),
                {
                    type: d,
                    selector: e
                }
        }
        function A(a, b) {
            return a.replace(w, function(a, c) {
                for (var f, d = c.split("."), e = b; f = d.shift(); )
                    e = e === b.attrs ? b.get(f) : e[f];
                return p(e) ? e : x
            })
        }
        function B(a) {
            return null == a || (p(a) || e.isArray(a)) && 0 === a.length || e.isPlainObject(a) && r(a)
        }
        var d = a("arale/base/1.0.1/base")
            , e = a("$")
            , f = a("./daparser")
            , g = a("./auto-render")
            , h = ".delegate-events-"
            , i = "_onRender"
            , j = "data-widget-cid"
            , k = {}
            , l = d.extend({
            propsInAttrs: ["element", "template", "model", "events"],
            element: null,
            template: "<div></div>",
            model: null,
            events: null,
            attrs: {
                id: "",
                className: "",
                style: {},
                parentNode: document.body
            },
            initialize: function(a) {
                this.cid = o();
                var b = this._parseDataAttrsConfig(a);
                this.initAttrs(a, b),
                    this.parseElement(),
                    this.initProps(),
                    this.delegateEvents(),
                    this.setup(),
                    this._stamp()
            },
            _parseDataAttrsConfig: function(a) {
                var b, c;
                return a && (b = e(a.element)),
                b && b[0] && !g.isDataApiOff(b) && (c = f.parseElement(b)),
                    c
            },
            parseElement: function() {
                var a = this.element;
                if (a ? this.element = e(a) : this.get("template") && this.parseElementFromTemplate(),
                    !this.element || !this.element[0])
                    throw new Error("element is invalid")
            },
            parseElementFromTemplate: function() {
                this.element = e(this.get("template"))
            },
            initProps: function() {},
            delegateEvents: function(a, b) {
                if (a || (a = y(this)),
                        a) {
                    if (p(a) && q(b)) {
                        var c = {};
                        c[a] = b,
                            a = c
                    }
                    for (var d in a)
                        if (a.hasOwnProperty(d)) {
                            var e = z(d, this)
                                , f = e.type
                                , g = e.selector;
                            !function(a, b) {
                                var c = function(c) {
                                    q(a) ? a.call(b, c) : b[a](c)
                                };
                                g ? b.element.on(f, g, c) : b.element.on(f, c)
                            }(a[d], this)
                        }
                    return this
                }
            },
            undelegateEvents: function(a) {
                var b = {};
                return 0 === arguments.length ? b.type = h + this.cid : b = z(a, this),
                    this.element.off(b.type, b.selector),
                    this
            },
            setup: function() {},
            render: function() {
                this.rendered || (this._renderAndBindAttrs(),
                    this.rendered = !0);
                var a = this.get("parentNode");
                return a && !t(this.element[0]) && this.element.appendTo(a),
                    this
            },
            _renderAndBindAttrs: function() {
                var a = this
                    , b = a.attrs;
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = i + u(c);
                        if (this[d]) {
                            var e = this.get(c);
                            B(e) || this[d](e, void 0, c),
                                function(b) {
                                    a.on("change:" + c, function(c, d, e) {
                                        a[b](c, d, e)
                                    })
                                }(d)
                        }
                    }
            },
            _onRenderId: function(a) {
                this.element.attr("id", a)
            },
            _onRenderClassName: function(a) {
                this.element.addClass(a)
            },
            _onRenderStyle: function(a) {
                this.element.css(a)
            },
            _stamp: function() {
                var a = this.cid;
                this.element.attr(j, a),
                    k[a] = this
            },
            $: function(a) {
                return this.element.find(a)
            },
            destroy: function() {
                this.undelegateEvents(),
                    delete k[this.cid],
                this.element && (this.element.off(),
                    this.element = null),
                    l.superclass.destroy.call(this)
            }
        });
        e(window).unload(function() {
            for (var a in k)
                k[a].destroy()
        }),
            l.query = function(a) {
                var c, b = e(a).eq(0);
                return b && (c = b.attr(j)),
                    k[c]
            }
            ,
            l.autoRender = g.autoRender,
            l.autoRenderAll = g.autoRenderAll,
            l.StaticsWhiteList = ["autoRender"],
            c.exports = l;
        var m = Object.prototype.toString
            , n = 0
            , s = e.contains || function(a, b) {
                return !!(16 & a.compareDocumentPosition(b))
            }
            , v = /^(\S+)\s*(.*)$/
            , w = /{{([^}]+)}}/g
            , x = "INVALID_SELECTOR"
    }),
    define("arale/base/1.0.1/base", ["arale/class/1.0.0/class", "arale/events/1.0.0/events", "./aspect", "./attribute"], function(t, r, e) {
        var n = t("arale/class/1.0.0/class")
            , i = t("arale/events/1.0.0/events")
            , a = t("./aspect")
            , s = t("./attribute");
        e.exports = n.create({
            Implements: [i, a, s],
            initialize: function(t) {
                this.initAttrs(t)
            },
            destroy: function() {
                this.off();
                for (var t in this)
                    this.hasOwnProperty(t) && delete this[t]
            }
        })
    }),
    define("arale/base/1.0.1/aspect", [], function(t, r) {
        function e(t, r, e, s) {
            for (var o, c, u = r.split(a); o = u.shift(); )
                c = n(this, o),
                c.__isAspected || i.call(this, o),
                    this.on(t + ":" + o, e, s);
            return this
        }
        function n(t, r) {
            var e = t[r];
            if (!e)
                throw Error("Invalid method name: " + r);
            return e
        }
        function i(t) {
            var r = this[t];
            this[t] = function() {
                var e = Array.prototype.slice.call(arguments)
                    , n = ["before:" + t].concat(e);
                this.trigger.apply(this, n);
                var i = r.apply(this, arguments);
                return this.trigger("after:" + t, i),
                    i
            }
                ,
                this[t].__isAspected = !0
        }
        r.before = function(t, r, n) {
            return e.call(this, "before", t, r, n)
        }
            ,
            r.after = function(t, r, n) {
                return e.call(this, "after", t, r, n)
            }
        ;
        var a = /\s+/
    }),
    define("arale/base/1.0.1/attribute", [], function(t, r) {
        function e(t) {
            return "[object String]" === O.call(t)
        }
        function n(t) {
            return "[object Function]" === O.call(t)
        }
        function i(t) {
            return null != t && t == t.window
        }
        function a(t) {
            if (!t || "[object Object]" !== O.call(t) || t.nodeType || i(t))
                return !1;
            try {
                if (t.constructor && !A.call(t, "constructor") && !A.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (r) {
                return !1
            }
            for (var e in t)
                ;
            return void 0 === e || A.call(t, e)
        }
        function s(t) {
            for (var r in t)
                if (t.hasOwnProperty(r))
                    return !1;
            return !0
        }
        function o(t, r) {
            var e, n;
            for (e in r)
                if (r.hasOwnProperty(e)) {
                    if (n = r[e],
                            w(n))
                        n = n.slice();
                    else if (a(n)) {
                        var i = t[e];
                        a(i) || (i = {}),
                            n = o(i, n)
                    }
                    t[e] = n
                }
            return t
        }
        function c(t) {
            return t.charAt(0).toUpperCase() + t.substring(1)
        }
        function u(t, r) {
            for (var e = [], n = t.constructor.prototype; n; )
                n.hasOwnProperty("attrs") || (n.attrs = {}),
                    f(r, n.attrs, n),
                s(n.attrs) || e.unshift(n.attrs),
                    n = n.constructor.superclass;
            for (var i = {}, a = 0, c = e.length; c > a; a++)
                i = o(i, g(e[a]));
            return i
        }
        function f(t, r, e, n) {
            for (var i = 0, a = t.length; a > i; i++) {
                var s = t[i];
                e.hasOwnProperty(s) && (r[s] = n ? r.get(s) : e[s])
            }
        }
        function l(t, r) {
            for (var e in r)
                if (r.hasOwnProperty(e)) {
                    var n = "_onChange" + c(e);
                    t[n] && t.on("change:" + e, t[n])
                }
        }
        function h(t, r) {
            for (var e in r)
                if (r.hasOwnProperty(e)) {
                    var i, a = r[e].value;
                    n(a) && (i = e.match(j)) && (t[i[1]](v(i[2]), a),
                        delete r[e])
                }
        }
        function v(t) {
            var r = t.match(P)
                , e = r[1] ? "change:" : "";
            return e += r[2].toLowerCase() + r[3]
        }
        function p(t, r, e) {
            var n = {
                silent: !0
            };
            t.__initializingAttrs = !0;
            for (var i in e)
                e.hasOwnProperty(i) && r[i].setter && t.set(i, e[i].value, n);
            delete t.__initializingAttrs
        }
        function g(t, r) {
            t = o({}, t);
            for (var e in t) {
                var n = t[e];
                a(n) && !r && y(n, m) || (t[e] = {
                    value: n
                })
            }
            return t
        }
        function y(t, r) {
            for (var e = 0, n = r.length; n > e; e++)
                if (t.hasOwnProperty(r[e]))
                    return !0;
            return !1
        }
        function b(t) {
            return null == t || (e(t) || w(t)) && 0 === t.length || a(t) && s(t)
        }
        function d(t, r) {
            if (t === r)
                return !0;
            if (b(t) && b(r))
                return !0;
            var e = O.call(t);
            if (e != O.call(r))
                return !1;
            switch (e) {
                case "[object String]":
                    return t == r + "";
                case "[object Number]":
                    return t != +t ? r != +r : 0 == t ? 1 / t == 1 / r : t == +r;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +r;
                case "[object RegExp]":
                    return t.source == r.source && t.global == r.global && t.multiline == r.multiline && t.ignoreCase == r.ignoreCase;
                case "[object Array]":
                    var n = "" + t
                        , i = "" + r;
                    return -1 === n.indexOf("[object") && -1 === i.indexOf("[object") && n === i
            }
            if ("object" != typeof t || "object" != typeof r)
                return !1;
            if (a(t) && a(r)) {
                if (!d(_(t), _(r)))
                    return !1;
                for (var s in t)
                    if (t[s] !== r[s])
                        return !1;
                return !0
            }
            return !1
        }
        r.initAttrs = function(t, r) {
            r && (t = t ? o(r, t) : r);
            var e, n = this.propsInAttrs || [], i = u(this, n), a = o({}, i);
            t && (e = g(t, !0),
                o(a, e)),
                l(this, a),
                this.attrs = a,
                p(this, a, e),
                h(this, a),
                f(n, this, this.attrs, !0)
        }
            ,
            r.get = function(t) {
                var r = this.attrs[t] || {}
                    , e = r.value;
                return r.getter ? r.getter.call(this, e, t) : e
            }
            ,
            r.set = function(t, r, n) {
                var i = {};
                e(t) ? i[t] = r : (i = t,
                        n = r),
                n || (n = {});
                var s = n.silent
                    , c = this.attrs
                    , u = this.__changedAttrs || (this.__changedAttrs = {});
                for (t in i)
                    if (i.hasOwnProperty(t)) {
                        var f = c[t] || (c[t] = {});
                        if (r = i[t],
                                f.readOnly)
                            throw Error("This attribute is readOnly: " + t);
                        f.setter && (r = f.setter.call(this, r, t));
                        var l = this.get(t);
                        a(l) && a(r) && (r = o(o({}, l), r)),
                            c[t].value = r,
                        this.__initializingAttrs || d(l, r) || (s ? u[t] = [r, l] : this.trigger("change:" + t, r, l, t))
                    }
                return this
            }
            ,
            r.change = function() {
                var t = this.__changedAttrs;
                if (t) {
                    for (var r in t)
                        if (t.hasOwnProperty(r)) {
                            var e = t[r];
                            this.trigger("change:" + r, e[0], e[1], r)
                        }
                    delete this.__changedAttrs
                }
                return this
            }
        ;
        var O = Object.prototype.toString
            , A = Object.prototype.hasOwnProperty
            , w = Array.isArray || function(t) {
                return "[object Array]" === O.call(t)
            }
            , _ = Object.keys;
        _ || (_ = function(t) {
                var r = [];
                for (var e in t)
                    t.hasOwnProperty(e) && r.push(e);
                return r
            }
        );
        var j = /^(on|before|after)([A-Z].*)$/
            , P = /^(Change)?([A-Z])(.*)/
            , m = ["value", "getter", "setter", "readOnly"]
    }),
    define("arale/class/1.0.0/class", [], function(t, n, e) {
        function r(t) {
            return this instanceof r || !l(t) ? void 0 : i(t)
        }
        function o(t) {
            var n, e;
            for (n in t)
                e = t[n],
                    r.Mutators.hasOwnProperty(n) ? r.Mutators[n].call(this, e) : this.prototype[n] = e
        }
        function i(t) {
            return t.extend = r.extend,
                t.implement = o,
                t
        }
        function u() {}
        function s(t, n, e) {
            for (var r in n)
                if (n.hasOwnProperty(r)) {
                    if (e && -1 === h(e, r))
                        continue;
                    "prototype" !== r && (t[r] = n[r])
                }
        }
        function c(t) {
            if (y) {
                var n = y();
                if (n) {
                    var e = n.uri.split(/[\/\\]/).pop();
                    Object.defineProperties ? Object.defineProperties(t, {
                            __module: {
                                value: n
                            },
                            __filename: {
                                value: e
                            }
                        }) : (t.__module = n,
                            t.__filename = e)
                }
            }
        }
        e.exports = r,
            r.create = function(t, n) {
                function e() {
                    t.apply(this, arguments),
                    this.constructor === e && this.initialize && this.initialize.apply(this, arguments)
                }
                return l(t) || (n = t,
                    t = null),
                n || (n = {}),
                t || (t = n.Extends || r),
                    n.Extends = t,
                t !== r && s(e, t, t.StaticsWhiteList),
                    o.call(e, n),
                    i(e)
            }
            ,
            r.extend = function(t) {
                return t || (t = {}),
                    t.Extends = this,
                    r.create(t)
            }
            ,
            r.Mutators = {
                Extends: function(t) {
                    var n = this.prototype
                        , e = a(t.prototype);
                    s(e, n),
                        e.constructor = this,
                        this.prototype = e,
                        this.superclass = t.prototype,
                        c(e)
                },
                Implements: function(t) {
                    f(t) || (t = [t]);
                    for (var n, e = this.prototype; n = t.shift(); )
                        s(e, n.prototype || n)
                },
                Statics: function(t) {
                    s(this, t)
                }
            };
        var a = Object.__proto__ ? function(t) {
                return {
                    __proto__: t
                }
            }
            : function(t) {
                return u.prototype = t,
                    new u
            }
            , p = Object.prototype.toString
            , f = Array.isArray;
        f || (f = function(t) {
                return "[object Array]" === p.call(t)
            }
        );
        var l = function(t) {
            return "[object Function]" === p.call(t)
        }
            , h = Array.prototype.indexOf ? function(t, n) {
                return t.indexOf(n)
            }
            : function(t, n) {
                for (var e = 0, r = t.length; r > e; e++)
                    if (t[e] === n)
                        return e;
                return -1
            }
            , y = e.constructor._getCompilingModule
    }),
    define("arale/events/1.0.0/events", [], function() {
        function t() {}
        var e = /\s+/;
        t.prototype.on = function(t, n, r) {
            var i, s, o;
            if (!n)
                return this;
            for (i = this.__events || (this.__events = {}),
                     t = t.split(e); s = t.shift(); )
                o = i[s] || (i[s] = []),
                    o.push(n, r);
            return this
        }
            ,
            t.prototype.off = function(t, r, i) {
                var s, o, u, a;
                if (!(s = this.__events))
                    return this;
                if (!(t || r || i))
                    return delete this.__events,
                        this;
                for (t = t ? t.split(e) : n(s); o = t.shift(); )
                    if (u = s[o])
                        if (r || i)
                            for (a = u.length - 2; a >= 0; a -= 2)
                                r && u[a] !== r || i && u[a + 1] !== i || u.splice(a, 2);
                        else
                            delete s[o];
                return this
            }
            ,
            t.prototype.trigger = function(t) {
                var n, r, i, s, o, u, f, a = [];
                if (!(n = this.__events))
                    return this;
                for (t = t.split(e),
                         o = 1,
                         u = arguments.length; u > o; o++)
                    a[o - 1] = arguments[o];
                for (; r = t.shift(); ) {
                    if ((i = n.all) && (i = i.slice()),
                        (s = n[r]) && (s = s.slice()),
                            s)
                        for (o = 0,
                                 u = s.length; u > o; o += 2)
                            s[o].apply(s[o + 1] || this, a);
                    if (i)
                        for (f = [r].concat(a),
                                 o = 0,
                                 u = i.length; u > o; o += 2)
                            i[o].apply(i[o + 1] || this, f)
                }
                return this
            }
            ,
            t.mixTo = function(e) {
                e = e.prototype || e;
                var n = t.prototype;
                for (var r in n)
                    n.hasOwnProperty(r) && (e[r] = n[r])
            }
        ;
        var n = Object.keys;
        return n || (n = function(e) {
                var t = [];
                for (var n in e)
                    e.hasOwnProperty(n) && t.push(n);
                return t
            }
        ),
            t
    }),
    define("arale/overlay/1.0.1/mask", ["./overlay", "$", "arale/position/1.0.0/position", "arale/iframe-shim/1.0.1/iframe-shim", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events"], function(a, b, c) {
        var d = a("$")
            , e = a("./overlay")
            , f = (d.browser || 0).msie && 6 == d.browser.version
            , g = d(document.body)
            , h = d(document)
            , i = e.extend({
            attrs: {
                width: f ? h.outerWidth(!0) : "100%",
                height: f ? h.outerHeight(!0) : "100%",
                className: "ui-mask",
                opacity: .2,
                backgroundColor: "#000",
                style: {
                    position: f ? "absolute" : "fixed",
                    top: 0,
                    left: 0
                },
                align: {
                    baseElement: f ? g : void 0
                }
            },
            show: function() {
                return f && (this.set("width", h.outerWidth(!0)),
                    this.set("height", h.outerHeight(!0))),
                    i.superclass.show.call(this)
            },
            events: {
                click: "_stopPro"
            },
            _stopPro: function(e) {
                return e.stopPropagation(),
                    !1
            },
            setup: function() {
                this._setupShim()
            },
            _onRenderBackgroundColor: function(a) {
                this.element.css("backgroundColor", a)
            },
            _onRenderOpacity: function(a) {
                this.element.css("opacity", a)
            }
        });
        c.exports = new i
    }),
    define("arale/dialog/1.0.1/confirmbox", ["$", "arale/widget/1.0.3/templatable", "gallery/handlebars/1.0.0/handlebars", "./dialog", "arale/overlay/1.0.1/overlay", "arale/position/1.0.0/position", "arale/iframe-shim/1.0.1/iframe-shim", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events", "arale/overlay/1.0.1/mask", "./dialog-tpl.js"], function(e, t, a) {
        var i = e("$")
            , s = e("arale/widget/1.0.3/templatable")
            , l = e("gallery/handlebars/1.0.0/handlebars")
            , n = e("./dialog");
        e("./dialog.css");
        var r = n.extend({
            Implements: s,
            attrs: {
                content: e("./confirmbox.tpl"),
                title: "默认标题",
                confirmTpl: '<a class="ui-dialog-button-orange">确定</a>',
                cancelTpl: '<a class="ui-dialog-button-white">取消</a>',
                message: "默认内容"
            },
            parseElement: function() {
                var e = {
                    classPrefix: this.get("classPrefix"),
                    message: this.get("message"),
                    title: this.get("title"),
                    confirmTpl: this.get("confirmTpl"),
                    cancelTpl: this.get("cancelTpl"),
                    hasFoot: this.get("confirmTpl") || this.get("cancelTpl")
                }
                    , t = l.compile(this.get("content"));
                this.set("content", t(e)),
                    r.superclass.parseElement.call(this)
            },
            events: {
                "click [data-role=confirm]": function(e) {
                    e.preventDefault(),
                        this.trigger("confirm")
                },
                "click [data-role=cancel]": function(e) {
                    e.preventDefault(),
                        this.hide()
                }
            },
            _onChangeMessage: function(e) {
                this.$("[data-role=message]").html(e)
            },
            _onChangeTitle: function(e) {
                this.$("[data-role=title]").html(e)
            },
            _onChangeConfirmTpl: function(e) {
                this.$("[data-role=confirm]").html(e)
            },
            _onChangeCancelTpl: function(e) {
                this.$("[data-role=cancel]").html(e)
            }
        });
        r.alert = function(e, t, a) {
            var s = {
                message: e,
                title: "",
                cancelTpl: "",
                closeTpl: "",
                onConfirm: function() {
                    t && t(),
                        this.hide()
                }
            };
            new r(i.extend(null, s, a)).show().on("close", function() {
                this.destroy()
            })
        }
            ,
            r.confirm = function(e, t, a, s) {
                var l = {
                    message: e,
                    title: t || "确认框",
                    closeTpl: "",
                    onConfirm: function() {
                        a && a(),
                            this.hide()
                    }
                };
                new r(i.extend(null, l, s)).show().on("close", function() {
                    this.destroy()
                })
            }
            ,
            r.show = function(e, t, a) {
                var s = {
                    message: e,
                    title: "",
                    confirmTpl: !1,
                    cancelTpl: !1,
                    onConfirm: function() {
                        t && t(),
                            this.hide()
                    }
                };
                new r(i.extend(null, s, a)).show().on("close", function() {
                    this.destroy()
                })
            }
            ,
            a.exports = r
    }),
    define("arale/dialog/1.0.1/dialog-tpl", ["gallery/handlebars/1.0.0/handlebars"], function(e, t, a) {
        var i = e("gallery/handlebars/1.0.0/handlebars");
        !function() {
            var e = i.template;
            i.templates = i.templates || {},
                a.exports = e(function(e, t, a, i, s) {
                    this.compilerInfo = [2, ">= 1.0.0-rc.3"],
                        a = a || e.helpers,
                        s = s || {};
                    var l, n = "", r = "function", o = this.escapeExpression;
                    return n += '<div class="',
                        (l = a.classPrefix) ? l = l.call(t, {
                                hash: {},
                                data: s
                            }) : (l = t.classPrefix,
                                l = typeof l === r ? l.apply(t) : l),
                        n += o(l) + '">\n    <div class="',
                        (l = a.classPrefix) ? l = l.call(t, {
                                hash: {},
                                data: s
                            }) : (l = t.classPrefix,
                                l = typeof l === r ? l.apply(t) : l),
                        n += o(l) + '-close" title="关闭本框" data-role="close"></div>\n    <div class="',
                        (l = a.classPrefix) ? l = l.call(t, {
                                hash: {},
                                data: s
                            }) : (l = t.classPrefix,
                                l = typeof l === r ? l.apply(t) : l),
                        n += o(l) + '-content" data-role="content"></div>\n</div>\n'
                })
        }()
    }),
    define("arale/dialog/1.0.1/dialog", ["$", "arale/overlay/1.0.1/overlay", "arale/position/1.0.0/position", "arale/iframe-shim/1.0.1/iframe-shim", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events", "arale/overlay/1.0.1/mask", "arale/widget/1.0.3/templatable", "gallery/handlebars/1.0.0/handlebars", "./dialog-tpl.js"], function(e, t, i) {
        function s(e) {
            null == e.attr("tabindex") && e.attr("tabindex", "-1")
        }
        function a(e) {
            var t = e[0].contentWindow.document;
            return t.body.scrollHeight && t.documentElement.scrollHeight ? Math.min(t.body.scrollHeight, t.documentElement.scrollHeight) : t.documentElement.scrollHeight ? t.documentElement.scrollHeight : t.body.scrollHeight ? t.body.scrollHeight : void 0
        }
        var n = e("$")
            , r = e("arale/overlay/1.0.1/overlay")
            , l = e("arale/overlay/1.0.1/mask")
            , o = e("arale/events/1.0.0/events")
            , h = e("arale/widget/1.0.3/templatable")
            , c = ".dialog"
            , f = "300px"
            , d = r.extend({
            Implements: h,
            attrs: {
                template: e("./dialog-tpl"),
                trigger: {
                    value: null,
                    getter: function(e) {
                        return n(e)
                    }
                },
                classPrefix: "ui-dialog",
                content: {
                    value: "",
                    setter: function(e) {
                        return /^(https?:\/\/|\/|\.\/|\.\.\/)/.test(e) && (this._type = "iframe"),
                            e
                    }
                },
                hasMask: !0,
                closeTpl: "×",
                width: 500,
                height: null,
                effect: "none",
                zIndex: 999,
                autoFit: !0,
                align: {
                    selfXY: ["50%", "50%"],
                    baseXY: ["50%", "50%"]
                }
            },
            parseElement: function() {
                this.model = {
                    classPrefix: this.get("classPrefix")
                },
                    d.superclass.parseElement.call(this),
                    this.contentElement = this.$("[data-role=content]"),
                    this.contentElement.css({
                        background: "#fff",
                        height: "100%",
                        zoom: 1
                    }),
                    this.$("[data-role=close]").hide()
            },
            events: {
                "click [data-role=close]": function(e) {
                    e.preventDefault(),
                        this.hide()
                }
            },
            show: function() {
                return "iframe" === this._type && (!this.get("height") && this.element.css("height", f),
                    this._showIframe()),
                    d.superclass.show.call(this),
                    this
            },
            hide: function() {
                return "iframe" === this._type && this.iframe && (this.iframe.attr({
                    src: "javascript:'';"
                }),
                    this.iframe.remove(),
                    this.iframe = null),
                    d.superclass.hide.call(this),
                    clearInterval(this._interval),
                    delete this._interval,
                    this
            },
            destroy: function() {
                return this.get("trigger") && this.get("trigger").off("click" + c + this.cid),
                    n(document).off("keyup." + c + this.cid),
                    this.element.remove(),
                    l.hide(),
                    clearInterval(this._interval),
                    d.superclass.destroy.call(this)
            },
            setup: function() {
                d.superclass.setup.call(this),
                    this._setupTrigger(),
                    this._setupMask(),
                    this._setupKeyEvents(),
                    this._setupFocus(),
                    s(this.element),
                    s(this.get("trigger")),
                    this.activeTrigger = this.get("trigger").eq(0)
            },
            _onRenderContent: function(e) {
                if ("iframe" !== this._type) {
                    var t;
                    try {
                        t = n(e)
                    } catch (i) {
                        t = []
                    }
                    t[0] ? this.contentElement.empty().append(t) : this.contentElement.empty().html(e)
                }
            },
            _onRenderCloseTpl: function(e) {
                "" === e ? this.$("[data-role=close]").html(e).hide() : this.$("[data-role=close]").html(e).show()
            },
            _onRenderVisible: function(e) {
                e ? "fade" === this.get("effect") ? this.element.fadeIn(300) : this.element.show() : this.element.hide()
            },
            _onRenderZIndex: function(e) {
                return l.set("zIndex", parseInt(e, 10) - 1),
                    d.superclass._onRenderZIndex.call(this, e)
            },
            _setupTrigger: function() {
                var e = this;
                this.get("trigger").on("click" + c + this.cid, function(t) {
                    t.preventDefault(),
                        e.activeTrigger = n(this),
                        e.show()
                })
            },
            _setupMask: function() {
                this.before("show", function() {
                    this.get("hasMask") && l.show()
                }),
                    this.after("hide", function() {
                        this.get("hasMask") && l.hide()
                    })
            },
            _setupFocus: function() {
                this.after("show", function() {
                    this.element.focus()
                }),
                    this.after("hide", function() {
                        this.activeTrigger && this.activeTrigger.focus()
                    })
            },
            _setupKeyEvents: function() {
                var e = this;
                n(document).on("keyup." + c + this.cid, function(t) {
                    27 === t.keyCode && e.get("visible") && e.hide()
                })
            },
            _showIframe: function() {
                var e = this;
                this.iframe || this._createIframe(),
                    this.iframe.attr({
                        src: this._fixUrl(),
                        name: "dialog-iframe" + (new Date).getTime()
                    }),
                    this.iframe.one("load", function() {
                        e.get("visible") && (e.get("autoFit") && (clearInterval(e._interval),
                            e._interval = setInterval(function() {
                                e._syncHeight()
                            }, 300)),
                            e._syncHeight(),
                            e._setPosition(),
                            e.trigger("complete:show"))
                    })
            },
            _fixUrl: function() {
                var e = this.get("content").match(/([^?#]*)(\?[^#]*)?(#.*)?/);
                return e.shift(),
                    e[1] = (e[1] && "?" !== e[1] ? e[1] + "&" : "?") + "t=" + (new Date).getTime(),
                    e.join("")
            },
            _createIframe: function() {
                var e = this;
                this.iframe = n("<iframe>", {
                    src: "javascript:'';",
                    scrolling: "no",
                    frameborder: "no",
                    allowTransparency: "true",
                    css: {
                        border: "none",
                        width: "100%",
                        display: "block",
                        height: "100%",
                        overflow: "hidden"
                    }
                }).appendTo(this.contentElement),
                    o.mixTo(this.iframe[0]),
                    this.iframe[0].on("close", function() {
                        e.hide()
                    })
            },
            _syncHeight: function() {
                var e;
                if (this.get("height"))
                    clearInterval(this._interval),
                        delete this._interval;
                else {
                    try {
                        this._errCount = 0,
                            e = a(this.iframe) + "px"
                    } catch (t) {
                        this._errCount = (this._errCount || 0) + 1,
                        this._errCount >= 6 && (e = f,
                            clearInterval(this._interval),
                            delete this._interval)
                    }
                    this.element.css("height", e),
                        this.element[0].className = this.element[0].className
                }
            }
        });
        i.exports = d
    }),
    define("arale/dialog/1.0.1/dialog-tpl", ["gallery/handlebars/1.0.0/handlebars"], function(e, t, i) {
        var s = e("gallery/handlebars/1.0.0/handlebars");
        !function() {
            var e = s.template;
            s.templates = s.templates || {},
                i.exports = e(function(e, t, i, s, a) {
                    this.compilerInfo = [2, ">= 1.0.0-rc.3"],
                        i = i || e.helpers,
                        a = a || {};
                    var n, r = "", l = "function", o = this.escapeExpression;
                    return r += '<div class="',
                        (n = i.classPrefix) ? n = n.call(t, {
                                hash: {},
                                data: a
                            }) : (n = t.classPrefix,
                                n = typeof n === l ? n.apply(t) : n),
                        r += o(n) + '">\n    <div class="',
                        (n = i.classPrefix) ? n = n.call(t, {
                                hash: {},
                                data: a
                            }) : (n = t.classPrefix,
                                n = typeof n === l ? n.apply(t) : n),
                        r += o(n) + '-close" title="" data-role="close"></div>\n    <div class="',
                        (n = i.classPrefix) ? n = n.call(t, {
                                hash: {},
                                data: a
                            }) : (n = t.classPrefix,
                                n = typeof n === l ? n.apply(t) : n),
                        r += o(n) + '-content" data-role="content"></div>\n</div>\n'
                })
        }()
    }),
    define("arale/select/0.9.3/select", ["arale/overlay/1.0.1/overlay", "$", "arale/position/1.0.0/position", "arale/iframe-shim/1.0.1/iframe-shim", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events", "arale/widget/1.0.3/templatable", "gallery/handlebars/1.0.0/handlebars", "./select.tpl"], function(e, t, s) {
        function i(e, t) {
            var s, i = [], l = e.options, a = l.length, r = !1;
            for (s = 0; a > s; s++) {
                var n, c = {}, d = l[s], h = ["text", "value", "defaultSelected", "selected"];
                for (n in h) {
                    var o = h[n];
                    c[o] = d[o]
                }
                c.defaultSelected = d.defaultSelected ? "true" : "false",
                    d.selected ? (c.selected = "true",
                            r = !0) : c.selected = "false",
                    i.push(c)
            }
            return r || (newModel[0].selected = "true"),
                {
                    select: i,
                    classPrefix: t
                }
        }
        function l(e, t) {
            var s, i, l, a, r = [], n = [];
            for (s = 0,
                     l = e.length; l > s; s++) {
                var c = e[s];
                c.selected ? (c.selected = c.defaultSelected = "true",
                        n.push(s)) : c.selected = c.defaultSelected = "false",
                    r.push(c)
            }
            if (n.length > 0)
                for (n.pop(),
                         i = 0,
                         a = n.length; a > i; i++)
                    r[i].selected = "false";
            else
                r[0].selected = "true";
            return {
                select: r,
                classPrefix: t
            }
        }
        function a(e, t) {
            var s;
            return s = n.isNumeric(e) ? e : "string" == typeof e ? t.index(t.parent().find(e)) : t.index(e)
        }
        var r = e("arale/overlay/1.0.1/overlay")
            , n = e("$")
            , c = e("arale/widget/1.0.3/templatable")
            , d = e("./select.tpl")
            , h = r.extend({
            Implements: c,
            attrs: {
                trigger: {
                    value: null,
                    getter: function(e) {
                        return n(e).eq(0)
                    }
                },
                classPrefix: "ui-select",
                template: d,
                align: {
                    baseXY: [0, "100%-1px"]
                },
                name: "",
                value: "",
                length: 0,
                selectedIndex: -1,
                multiple: !1,
                disabled: !1,
                selectSource: null
            },
            events: {
                "click [data-role=item]": function(e) {
                    var t = n(e.currentTarget);
                    this.select(t)
                },
                "mouseenter [data-role=item]": function(e) {
                    n(e.currentTarget).addClass(this.get("classPrefix") + "-hover")
                },
                "mouseleave [data-role=item]": function(e) {
                    n(e.currentTarget).removeClass(this.get("classPrefix") + "-hover")
                }
            },
            initAttrs: function(e, t) {
                h.superclass.initAttrs.call(this, e, t);
                var s = this.get("trigger");
                if ("select" == s[0].tagName.toLowerCase()) {
                    var a = s.attr("name");
                    a && this.set("name", a),
                        this.set("selectSource", s);
                    var r = '<a href="#" class="' + this.get("classPrefix") + '-trigger"></a>'
                        , c = n(r);
                    this.set("trigger", c),
                        s.after(c).hide(),
                        this.model = i(s[0], this.get("classPrefix"))
                } else {
                    var a = this.get("name");
                    if (a) {
                        var d = n("input[name=" + a + "]").eq(0);
                        d[0] || (d = n('<input type="hidden" id="select-' + a + '" name="' + a + '" />').insertBefore(s)),
                            this.set("selectSource", d)
                    }
                    this.model = l(this.model, this.get("classPrefix"))
                }
            },
            setup: function() {
                var e = this
                    , t = this.get("trigger").on("click", {
                    self: this
                }, this._trigger_click).on("mouseenter", function() {
                    t.addClass(e.get("classPrefix") + "-trigger-hover")
                }).on("mouseleave", function() {
                    t.removeClass(e.get("classPrefix") + "-trigger-hover")
                });
                this.options = this.$("[data-role=content]").children(),
                    this.select("[data-selected=true]"),
                    this.set("length", this.options.length),
                    this._tweakAlignDefaultValue(),
                    this._blurHide(t),
                    h.superclass.setup.call(this)
            },
            render: function() {
                return h.superclass.render.call(this),
                    this._setTriggerWidth(),
                    this
            },
            show: function() {
                return h.superclass.show.call(this),
                    this._setPosition(),
                    this
            },
            _setTriggerWidth: function() {
                var e = this.get("trigger")
                    , t = this.element.outerWidth()
                    , s = parseInt(e.css("padding-left"), 10)
                    , i = parseInt(e.css("padding-right"), 10)
                    , l = parseInt(e.css("border-left-width"), 10)
                    , a = parseInt(e.css("border-right-width"), 10);
                e.css("width", t - s - i - l - a)
            },
            _tweakAlignDefaultValue: function() {
                var e = this.get("align");
                "VIEWPORT" === e.baseElement._id && (e.baseElement = this.get("trigger")),
                    this.set("align", e)
            },
            _trigger_click: function(e) {
                var t = e.data.self;
                e.preventDefault(),
                t.get("disabled") || t.show()
            },
            destroy: function() {
                this.element.remove(),
                    h.superclass.destroy.call(this)
            },
            select: function(e) {
                var t = a(e, this.options)
                    , s = this.get("selectedIndex");
                if (this.set("selectedIndex", t),
                    s !== t) {
                    var i = this.options.eq(t);
                    this.trigger("change", i)
                }
                return this.hide(),
                    this
            },
            syncModel: function(e) {
                this.model = l(e, this.get("classPrefix")),
                    this.renderPartial("[data-role=content]"),
                    this.options = this.$("[data-role=content]").children(),
                    this.set("length", this.options.length),
                    this.set("selectedIndex", -1),
                    this.set("value", "");
                var t = a("[data-selected=true]", this.options);
                return this.get("selectedIndex"),
                    this.set("selectedIndex", t),
                    this._setTriggerWidth(),
                    this
            },
            getOption: function(e) {
                var t = a(e, this.options);
                return this.options.eq(t)
            },
            addOption: function(e) {
                var t = this.model.select;
                return t.push(e),
                    this.syncModel(t),
                    this
            },
            removeOption: function(e) {
                var t = a(e, this.options)
                    , s = this.get("selectedIndex")
                    , i = this.options.eq(t);
                return i.remove(),
                    this.options = this.$("[data-role=content]").children(),
                    this.set("length", this.options.length),
                    t === s ? this.set("selectedIndex", 0) : s > t && this.set("selectedIndex", s - 1),
                    this
            },
            _onRenderSelectedIndex: function(e) {
                if (-1 != e) {
                    var t = this.options.eq(e)
                        , s = this.currentItem
                        , i = t.attr("data-value");
                    if (!s || t[0] != s[0]) {
                        var l = this.get("selectSource");
                        l && (l[0].value = i),
                        s && s.attr("data-selected", "false").removeClass(this.get("classPrefix") + "-selected"),
                            t.attr("data-selected", "true").addClass(this.get("classPrefix") + "-selected"),
                            this.set("value", i);
                        var a = this.get("trigger")
                            , r = a.find("[data-role=trigger-content]");
                        r.length ? r.html(t.html()) : a.html(t.html()),
                            this.currentItem = t
                    }
                }
            },
            _onRenderDisabled: function(e) {
                var t = this.get("classPrefix") + "-disabled"
                    , s = this.get("trigger");
                s[e ? "addClass" : "removeClass"](t);
                var i = this.options.eq(this.get("selectedIndex"));
                this.trigger("disabledChange", i, e)
            }
        });
        s.exports = h
    }),
    define("arale/select/0.9.3/select.tpl", [], '<div class="{{classPrefix}}">\n    <ul class="{{classPrefix}}-content" data-role="content">\n        {{#each select}}\n        <li data-role="item" class="{{../classPrefix}}-item" data-value="{{value}}" data-defaultSelected="{{defaultSelected}}" data-selected="{{selected}}">{{{text}}}</li>\n        {{/each}}\n    </ul>\n</div>\n'),
    define("arale/widget/1.0.3/templatable", ["$", "gallery/handlebars/1.0.0/handlebars"], function(a, b, c) {
        function h(a) {
            return l(a) ? null : d(j(a))
        }
        function i(a, b) {
            if (a) {
                var c = a.find(b);
                if (0 === c.length)
                    throw new Error("Invalid template selector: " + b);
                return k(c.html())
            }
        }
        function j(a) {
            return a.replace(/({[^}]+}})/g, "<!--$1-->").replace(/\s(src|href)\s*=\s*(['"])(.*?\{.+?)\2/g, " data-templatable-$1=$2$3$2")
        }
        function k(a) {
            return a.replace(/(?:<|&lt;)!--({{[^}]+}})--(?:>|&gt;)/g, "$1").replace(/data-templatable-/gi, "")
        }
        function l(a) {
            return "function" == typeof a
        }
        var d = a("$")
            , e = a("gallery/handlebars/1.0.0/handlebars")
            , f = {};
        c.exports = {
            templateHelpers: null,
            templateObject: null,
            parseElementFromTemplate: function() {
                this.templateObject = h(this.template),
                    this.element = d(this.compile())
            },
            compile: function(a, b) {
                a || (a = this.template),
                b || (b = this.model),
                b.toJSON && (b = b.toJSON());
                var c = this.templateHelpers;
                if (c)
                    for (var d in c)
                        c.hasOwnProperty(d) && e.registerHelper(d, c[d]);
                var g = "function" == typeof a ? a : f[a];
                g || (g = f[a] = e.compile(a));
                var h = g(b);
                if (c)
                    for (d in c)
                        c.hasOwnProperty(d) && delete e.helpers[d];
                return h
            },
            renderPartial: function(a) {
                var b = i(this.templateObject, a);
                return b ? this.$(a).html(this.compile(b)) : this.element.html(this.compile()),
                    this
            }
        };
        var g = e.compile;
        e.compile = function(a) {
            return l(a) ? a : g.call(e, a)
        }
    }),
    define("arale/autocomplete/1.2.0/autocomplete", ["$", "arale/overlay/1.0.1/overlay", "arale/position/1.0.0/position", "arale/iframe-shim/1.0.1/iframe-shim", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events", "arale/widget/1.0.3/templatable", "gallery/handlebars/1.0.0/handlebars", "./data-source", "./filter", "./autocomplete.tpl"], function(t, e, i) {
        function s(t) {
            return "[object String]" === Object.prototype.toString.call(t)
        }
        function a(t, e) {
            if (!t)
                return e;
            if (r.isFunction(t))
                return t.call(this, e);
            if (s(t)) {
                for (var i = t.split("."), a = e; i.length; ) {
                    var n = i.shift();
                    if (!a[n])
                        break;
                    a = a[n]
                }
                return a
            }
            return e
        }
        function n(t, e) {
            var i = this.highlightIndex
                , s = 0
                , a = e || this.matchKey || ""
                , n = "";
            if (r.isArray(i)) {
                for (var l = 0, u = i.length; u > l; l++) {
                    var o, c, d = i[l];
                    if (r.isArray(d) ? (o = d[0],
                                c = d[1] - d[0]) : (o = d,
                                c = 1),
                        o > s && (n += a.substring(s, o)),
                        a.length > o && (n += '<span class="' + t + '-item-hl">' + a.substr(o, c) + "</span>"),
                            s = o + c,
                        s >= a.length)
                        break
                }
                return a.length > s && (n += a.substring(s, a.length)),
                    new h.SafeString(n)
            }
            return a
        }
        var r = t("$")
            , l = t("arale/overlay/1.0.1/overlay")
            , u = t("arale/widget/1.0.3/templatable")
            , h = t("gallery/handlebars/1.0.0/handlebars")
            , o = t("./data-source")
            , c = t("./filter")
            , d = t("./autocomplete.tpl")
            , f = {
            UP: 38,
            DOWN: 40,
            LEFT: 37,
            RIGHT: 39,
            ENTER: 13,
            ESC: 27,
            BACKSPACE: 8
        }
            , g = l.extend({
            Implements: u,
            attrs: {
                trigger: {
                    value: null,
                    getter: function(t) {
                        return r(t)
                    }
                },
                classPrefix: "ui-autocomplete",
                align: {
                    baseXY: [0, "100%"]
                },
                template: d,
                submitOnEnter: !0,
                dataSource: [],
                locator: "data",
                filter: void 0,
                inputFilter: function(t) {
                    return t
                },
                disabled: !1,
                selectFirst: !1,
                delay: 100,
                selectedIndex: void 0,
                inputValue: "",
                data: []
            },
            events: {
                "mousedown [data-role=item]": function(t) {
                    var e = this.items.index(t.currentTarget);
                    this.set("selectedIndex", e),
                        this.selectItem(),
                        this._firstMousedown = !0
                },
                mousedown: function() {
                    this._secondMousedown = !0
                },
                "mouseenter [data-role=item]": function(t) {
                    var e = this.get("classPrefix") + "-item-hover";
                    this.currentItem && this.currentItem.removeClass(e),
                        r(t.currentTarget).addClass(e)
                },
                "mouseleave [data-role=item]": function(t) {
                    var e = this.get("classPrefix") + "-item-hover";
                    r(t.currentTarget).removeClass(e)
                }
            },
            templateHelpers: {
                highlightItem: n
            },
            parseElement: function() {
                this.model = {
                    classPrefix: this.get("classPrefix"),
                    items: []
                },
                    g.superclass.parseElement.call(this)
            },
            setup: function() {
                var t = this.get("trigger")
                    , e = this;
                g.superclass.setup.call(this),
                    this.dataSource = new o({
                        source: this.get("dataSource")
                    }).on("data", this._filterData, this),
                    this._initFilter(),
                    this._blurHide([t]),
                    this._tweakAlignDefaultValue(),
                    t.attr("autocomplete", "off").on("blur.autocomplete", r.proxy(this._blurEvent, this)).on("keydown.autocomplete", r.proxy(this._keydownEvent, this)).on($.browser.mozilla ? "keyup.autocomplete" : "input.autocomplete propertychange.autocomplete", function() {
                        clearTimeout(e._timeout),
                            e._timeout = setTimeout(function() {
                                e._timeout = null,
                                    e._keyupEvent.call(e)
                            }, e.get("delay"))
                    })
            },
            destroy: function() {
                this._clear(),
                    this.element.remove(),
                    g.superclass.destroy.call(this)
            },
            hide: function() {
                this._timeout && clearTimeout(this._timeout),
                    this.dataSource.abort(),
                    g.superclass.hide.call(this)
            },
            selectItem: function() {
                this.hide();
                var t = this.currentItem
                    , e = this.get("selectedIndex")
                    , i = this.get("data")[e];
                if (t) {
                    var s = t.attr("data-value");
                    this.get("trigger").val(s),
                        this.set("inputValue", s),
                        this.trigger("itemSelect", i),
                        this._clear()
                }
            },
            setInputValue: function(t) {
                if (this.get("inputValue") !== t) {
                    this._start = !0,
                        this.set("inputValue", t);
                    var e = this.get("trigger");
                    e.val() !== t && e.val(t)
                }
            },
            _onRenderInputValue: function(t) {
                if (this._start && t) {
                    var e = this.queryValue;
                    this.queryValue = this.get("inputFilter").call(this, t),
                    this.queryValue && this.queryValue !== e && (this.dataSource.abort(),
                        this.dataSource.getData(this.queryValue))
                } else
                    this.queryValue = "";
                "" !== t && this.queryValue || (this.set("data", []),
                    this.hide()),
                    delete this._start
            },
            _filterData: function(t) {
                var e = this.get("filter")
                    , i = this.get("locator");
                t = a(i, t),
                    t = e.func.call(this, t, this.queryValue, e.options),
                    this.set("data", t)
            },
            _onRenderData: function(t) {
                this._clear(),
                    this.model.items = t,
                    this.renderPartial("[data-role=items]"),
                    this.items = this.$("[data-role=items]").children(),
                    this.currentItem = null,
                this.get("selectFirst") && this.set("selectedIndex", 0),
                    r.trim(this.$("[data-role=items]").text()) ? this.show() : this.hide()
            },
            _onRenderSelectedIndex: function(t) {
                if (-1 !== t) {
                    var e = this.get("classPrefix") + "-item-hover";
                    this.currentItem && this.currentItem.removeClass(e),
                        this.currentItem = this.items.eq(t).addClass(e),
                        this.trigger("indexChange", t, this.lastIndex),
                        this.lastIndex = t
                }
            },
            _initFilter: function() {
                var t = this.get("filter");
                t = void 0 === t ? "url" === this.dataSource.get("type") ? null : {
                            name: "startsWith",
                            func: c.startsWith,
                            options: {
                                key: "value"
                            }
                        } : r.isPlainObject(t) ? c[t.name] ? {
                                name: t.name,
                                func: c[t.name],
                                options: t.options
                            } : null : r.isFunction(t) ? {
                                func: t
                            } : c[t] ? {
                                    name: t,
                                    func: c[t]
                                } : null,
                t || (t = {
                    name: "default",
                    func: c["default"]
                }),
                    this.set("filter", t)
            },
            _blurEvent: function() {
                r.browser.msie || (this._secondMousedown ? this._firstMousedown && (this.get("trigger").focus(),
                        this.hide()) : this.hide(),
                    delete this._firstMousedown,
                    delete this._secondMousedown)
            },
            _keyupEvent: function() {
                if (!this.get("disabled")) {
                    this._keyupEvent && delete this._keyupStart;
                    var t = this.get("trigger").val();
                    this.setInputValue(t)
                }
            },
            _keydownEvent: function(t) {
                if (!this.get("disabled"))
                    switch (delete this._keyupStart,
                        t.which) {
                        case f.ESC:
                            this.hide();
                            break;
                        case f.UP:
                            this._keyUp(t);
                            break;
                        case f.DOWN:
                            this._keyDown(t);
                            break;
                        case f.LEFT:
                        case f.RIGHT:
                            break;
                        case f.ENTER:
                            this._keyEnter(t);
                            break;
                        default:
                            this._keyupStart = !0
                    }
            },
            _keyUp: function(t) {
                if (t.preventDefault(),
                        this.get("data").length) {
                    if (!this.get("visible"))
                        return void this.show();
                    this._step(-1)
                }
            },
            _keyDown: function(t) {
                if (t.preventDefault(),
                        this.get("data").length) {
                    if (!this.get("visible"))
                        return void this.show();
                    this._step(1)
                }
            },
            _keyEnter: function(t) {
                this.get("visible") && (this.selectItem(),
                this.get("submitOnEnter") || t.preventDefault())
            },
            _step: function(t) {
                var e = this.get("selectedIndex");
                -1 === t ? e > 0 ? this.set("selectedIndex", e - 1) : this.set("selectedIndex", this.items.length - 1) : 1 === t && (this.items.length - 1 > e ? this.set("selectedIndex", e + 1) : this.set("selectedIndex", 0))
            },
            _clear: function() {
                this.$("[data-role=items]").empty(),
                    this.set("selectedIndex", -1),
                    delete this.items,
                    delete this.lastIndex,
                    delete this.currentItem
            },
            _tweakAlignDefaultValue: function() {
                var t = this.get("align");
                t.baseElement = this.get("trigger"),
                    this.set("align", t)
            }
        });
        i.exports = g
    }),
    define("arale/autocomplete/1.2.0/data-source", ["arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events", "$"], function(t, e, i) {
        function s(t) {
            return "[object String]" === Object.prototype.toString.call(t)
        }
        function a(t) {
            return t.replace(/^([a-z])/, function(t, e) {
                return e.toUpperCase()
            })
        }
        var n = t("arale/base/1.0.1/base")
            , r = t("$")
            , l = n.extend({
            attrs: {
                source: null,
                type: "array"
            },
            initialize: function(t) {
                l.superclass.initialize.call(this, t),
                    this.id = 0,
                    this.callbacks = [];
                var e = this.get("source");
                if (s(e))
                    this.set("type", "url");
                else if (r.isArray(e))
                    this.set("type", "array");
                else if (r.isPlainObject(e))
                    this.set("type", "object");
                else {
                    if (!r.isFunction(e))
                        throw Error("Source Type Error");
                    this.set("type", "function")
                }
            },
            getData: function(t) {
                return this["_get" + a(this.get("type") || "") + "Data"](t)
            },
            abort: function() {
                this.callbacks = []
            },
            _done: function(t) {
                this.trigger("data", t)
            },
            _getUrlData: function(t) {
                var e, i = this, s = {
                    query: t ? encodeURIComponent(t) : "",
                    timestamp: (new Date).getTime()
                }, a = this.get("source").replace(/{{(.*?)}}/g, function(t, e) {
                    return s[e]
                }), n = "callback_" + this.id++;
                this.callbacks.push(n),
                    e = /^(https?:\/\/)/.test(a) ? {
                            dataType: "jsonp"
                        } : {
                            dataType: "json"
                        },
                    r.ajax(a, e).success(function(t) {
                        r.inArray(n, i.callbacks) > -1 && (delete i.callbacks[n],
                            i._done(t))
                    }).error(function() {
                        r.inArray(n, i.callbacks) > -1 && (delete i.callbacks[n],
                            i._done({}))
                    })
            },
            _getArrayData: function() {
                var t = this.get("source");
                return this._done(t),
                    t
            },
            _getObjectData: function() {
                var t = this.get("source");
                return this._done(t),
                    t
            },
            _getFunctionData: function(t) {
                function e(t) {
                    i._done(t)
                }
                var i = this
                    , s = this.get("source")
                    , a = s.call(this, t, e);
                a && this._done(a)
            }
        });
        i.exports = l
    }),
    define("arale/autocomplete/1.2.0/filter", ["$"], function(t, e, i) {
        function s(t, e) {
            if (r.isPlainObject(t)) {
                var i = e && e.key || "value";
                return t[i] || ""
            }
            return t
        }
        function a(t, e) {
            for (var i = [], s = t.split(""), a = 0, n = e.split(""), r = 0, l = s.length; l > r; r++) {
                var u = s[r];
                if (u == n[a]) {
                    if (a === n.length - 1) {
                        i.push([r - n.length + 1, r + 1]),
                            a = 0;
                        continue
                    }
                    a++
                } else
                    a = 0
            }
            return i
        }
        function n(t) {
            return (t || "").replace(u, "\\$1")
        }
        var r = t("$")
            , l = {
            "default": function(t, e, i) {
                var a = [];
                return r.each(t, function(t, e) {
                    var n = {}
                        , l = s(e, i);
                    r.isPlainObject(e) && (n = r.extend({}, e)),
                        n.matchKey = l,
                        a.push(n)
                }),
                    a
            },
            startsWith: function(t, e, i) {
                var a = []
                    , l = e.length
                    , u = RegExp("^" + n(e));
                return l ? (r.each(t, function(t, e) {
                        var n = {}
                            , h = s(e, i);
                        r.isPlainObject(e) && (n = r.extend({}, e)),
                        u.test(h) && (n.matchKey = h,
                        l > 0 && (n.highlightIndex = [[0, l]]),
                            a.push(n))
                    }),
                        a) : []
            },
            stringMatch: function(t, e, i) {
                e = e || "";
                var n = []
                    , l = e.length;
                return l ? (r.each(t, function(t, l) {
                        var u = {}
                            , h = s(l, i);
                        r.isPlainObject(l) && (u = r.extend({}, l)),
                        h.indexOf(e) > -1 && (u.matchKey = h,
                            u.highlightIndex = a(h, e),
                            n.push(u))
                    }),
                        n) : []
            }
        };
        i.exports = l;
        var u = /(\[|\[|\]|\^|\$|\||\(|\)|\{|\}|\+|\*|\?)/g
    }),
    define("arale/autocomplete/1.2.0/autocomplete.tpl", [], '<div class="{{classPrefix}}">\n    <ul class="{{classPrefix}}-ctn" data-role="items">\n        {{#each items}}\n            <li data-role="item" class="{{../classPrefix}}-item" data-value="{{matchKey}}">{{highlightItem ../classPrefix matchKey}}</li>\n        {{/each}}\n    </ul>\n</div>\n'),
    define("arale/detector/1.1.0/detector", [], function(e, n, r) {
        function o(e) {
            return Object.prototype.toString.call(e)
        }
        function i(e) {
            return "[object Object]" === o(e)
        }
        function t(e) {
            return "[object Function]" === o(e)
        }
        function a(e) {
            return "[object Array]" === o(e)
        }
        function s(e, n) {
            if (a(e))
                for (var r = 0, o = e.length; o > r && n.call(e, e[r], r) !== !1; r++)
                    ;
        }
        function c(e) {
            if (!w.test(e))
                return null;
            var n, r, o, i, t;
            -1 !== e.indexOf("trident/") && (n = /\btrident\/([0-9.]+)/.exec(e),
            n && n.length >= 2 && (o = n[1],
                v_version = n[1].split("."),
                v_version[0] = parseInt(v_version[0], 10) + 4,
                t = v_version.join("."))),
                n = w.exec(e),
                i = n[1];
            var a = n[1].split(".");
            return void 0 === t && (t = i),
                a[0] = parseInt(a[0], 10) - 4,
                r = a.join("."),
            void 0 === o && (o = r),
                {
                    browserVersion: t,
                    browserMode: i,
                    engineVersion: o,
                    engineMode: r,
                    compatible: o !== r
                }
        }
        function b(e, n, r) {
            void 0 === r && (r = l);
            var a = t(n) ? n.call(null, r) : n;
            if (!a)
                return null;
            var s = {
                name: e,
                version: "-1",
                codename: ""
            }
                , c = o(a);
            if (a === !0)
                return s;
            if ("[object String]" === c) {
                if (-1 !== r.indexOf(a))
                    return s
            } else {
                if (i(a))
                    return a.hasOwnProperty("version") && (s.version = a.version),
                        s;
                if (a.exec) {
                    var b = a.exec(r);
                    if (b)
                        return s.version = b.length >= 2 && b[1] ? b[1].replace(/_/g, ".") : "-1",
                            s
                }
            }
        }
        function u(e, n, r, o) {
            var i = h;
            s(n, function(n) {
                var r = b(n[0], n[1], e);
                return r ? (i = r,
                        !1) : void 0
            }),
                r.call(o, i.name, i.version)
        }
        var d = {}
            , l = navigator.userAgent || "";
        navigator.platform || "",
        navigator.vendor || "";
        var f = window.external
            , w = /\b(?:msie|ie) ([0-9.]+)/
            , v = [["nokia", function(e) {
            return -1 !== e.indexOf("nokia ") ? /\bnokia ([0-9]+)?/ : /\bnokia[\d]/.test(e) ? /\bnokia(\d+)/ : "nokia"
        }
        ], ["wp", function(e) {
            return -1 !== e.indexOf("windows phone ") || -1 !== e.indexOf("xblwp") || -1 !== e.indexOf("zunewp") || -1 !== e.indexOf("windows ce")
        }
        ], ["pc", "windows"], ["ipad", "ipad"], ["ipod", "ipod"], ["iphone", "iphone"], ["mac", "macintosh"], ["mi", function(e) {
            return -1 !== e.indexOf("mi-one plus") ? {
                    version: "1s"
                } : /\bmi ([0-9.as]+)/
        }
        ], ["aliyun", "aliyunos"], ["meizu", /\bm([0-9]+)\b/], ["nexus", /\bnexus ([0-9.]+)/], ["android", "android"], ["blackberry", "blackberry"]]
            , p = [["wp", function(e) {
            return -1 !== e.indexOf("windows phone ") ? /\bwindows phone (?:os )?([0-9.]+)/ : -1 !== e.indexOf("xblwp") ? /\bxblwp([0-9.]+)/ : -1 !== e.indexOf("zunewp") ? /\bzunewp([0-9.]+)/ : "windows phone"
        }
        ], ["windows", /\bwindows nt ([0-9.]+)/], ["macosx", /\bmac os x ([0-9._]+)/], ["ios", /\bcpu(?: iphone)? os ([0-9._]+)/], ["yunos", /\baliyunos ([0-9.]+)/], ["android", /\bandroid[ -]([0-9.]+)/], ["chromeos", /\bcros i686 ([0-9.]+)/], ["linux", "linux"], ["windowsce", /\bwindows ce(?: ([0-9.]+))?/], ["symbian", /\bsymbianos\/([0-9.]+)/], ["blackberry", "blackberry"]]
            , x = [["trident", w], ["webkit", /\bapplewebkit\/([0-9.+]+)/], ["gecko", /\bgecko\/(\d+)/], ["presto", /\bpresto\/([0-9.]+)/]]
            , m = [["360", function() {
            if (f)
                try {
                    return f.twGetVersion(f.twGetSecurityID(window))
                } catch (e) {
                    try {
                        return -1 !== f.twGetRunPath.toLowerCase().indexOf("360se") || !!f.twGetSecurityID(window)
                    } catch (e) {}
                }
            return /\b360(?:se|ee|chrome)/
        }
        ], ["mx", function() {
            if (f)
                try {
                    return (f.mxVersion || f.max_version).split(".")
                } catch (e) {}
            return /\bmaxthon(?:[ \/]([0-9.]+))?/
        }
        ], ["sg", / se ([0-9.x]+)/], ["tw", function() {
            if (f)
                try {
                    return -1 !== f.twGetRunPath.toLowerCase().indexOf("theworld")
                } catch (e) {}
            return "theworld"
        }
        ], ["green", "greenbrowser"], ["qq", /\bqqbrowser\/([0-9.]+)/], ["tt", /\btencenttraveler ([0-9.]+)/], ["lb", function(e) {
            if (-1 === e.indexOf("lbbrowser"))
                return !1;
            var n = "-1";
            if (window.external && window.external.LiebaoGetVersion)
                try {
                    n = window.external.LiebaoGetVersion()
                } catch (r) {}
            return {
                version: n
            }
        }
        ], ["tao", /\btaobrowser\/([0-9.]+)/], ["fs", /\bcoolnovo\/([0-9.]+)/], ["sy", "saayaa"], ["baidu", /\bbidubrowser[ \/]([0-9.x]+)/], ["mi", /\bmiuibrowser\/([0-9.]+)/], ["ie", w], ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/], ["android", function(e) {
            return -1 !== e.indexOf("android") ? /\bversion\/([0-9.]+(?: beta)?)/ : void 0
        }
        ], ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//], ["firefox", /\bfirefox\/([0-9.ab]+)/], ["opera", /\bopera.+version\/([0-9.ab]+)/], ["uc", function(e) {
            return -1 !== e.indexOf("ucbrowser") ? /\bucbrowser\/([0-9.]+)/ : /\bucweb([0-9.]+)/
        }
        ]]
            , h = {
            name: "na",
            version: "-1"
        }
            , g = function(e) {
            e = (e || "").toLowerCase();
            var n = {};
            u(e, v, function(e, r) {
                var o = parseFloat(r);
                n.device = {
                    name: e,
                    version: o,
                    fullVersion: r
                },
                    n.device[e] = o
            }, n),
                u(e, p, function(e, r) {
                    var o = parseFloat(r);
                    n.os = {
                        name: e,
                        version: o,
                        fullVersion: r
                    },
                        n.os[e] = o
                }, n);
            var r = c(e);
            return u(e, x, function(e, o) {
                var i = o;
                r && (o = r.engineVersion || r.engineMode,
                    i = r.engineMode);
                var t = parseFloat(o);
                n.engine = {
                    name: e,
                    version: t,
                    fullVersion: o,
                    mode: parseFloat(i),
                    fullMode: i,
                    compatible: r ? r.compatible : !1
                },
                    n.engine[e] = t
            }, n),
                u(e, m, function(e, o) {
                    var i = o;
                    r && ("ie" === e && (o = r.browserVersion),
                        i = r.browserMode);
                    var t = parseFloat(o);
                    n.browser = {
                        name: e,
                        version: t,
                        fullVersion: o,
                        mode: parseFloat(i),
                        fullMode: i,
                        compatible: r ? r.compatible : !1
                    },
                        n.browser[e] = t
                }, n),
                n
        };
        d = g(l),
            d.detect = g,
            r.exports = d
    }),
    define("arale/switchable/0.9.12/tabs", ["./switchable", "$", "arale/easing/1.0.0/easing", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events"], function(a, b, c) {
        var d = a("./switchable");
        c.exports = d.extend({})
    }),
    define("arale/validator/0.9.2/validator", ["./core", "$", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events"], function(a, b, c) {
        var d = a("./core")
            , f = (a("arale/widget/1.0.3/widget"),
            a("$"))
            , g = d.extend({
            events: {
                "mouseenter .{{attrs.inputClass}}": "mouseenter",
                "mouseleave .{{attrs.inputClass}}": "mouseleave",
                "mouseenter .{{attrs.textareaClass}}": "mouseenter",
                "mouseleave .{{attrs.textareaClass}}": "mouseleave",
                "focus .{{attrs.itemClass}} input,textarea,select": "focus",
                "blur .{{attrs.itemClass}} input,textarea,select": "blur"
            },
            attrs: {
                explainClass: "ui-form-explain",
                itemClass: "ui-form-item",
                itemHoverClass: "ui-form-item-hover",
                itemFocusClass: "ui-form-item-focus",
                itemErrorClass: "ui-form-item-error",
                inputClass: "ui-input",
                textareaClass: "ui-textarea",
                showMessage: function(a, b) {
                    this.getExplain(b).html(a),
                        this.getItem(b).addClass(this.get("itemErrorClass"))
                },
                hideMessage: function(a, b) {
                    this.getExplain(b).html(b.attr("data-explain") || " "),
                        this.getItem(b).removeClass(this.get("itemErrorClass"))
                }
            },
            setup: function() {
                g.superclass.setup.call(this);
                var a = this;
                this.on("autoFocus", function(b) {
                    a.set("autoFocusEle", b)
                })
            },
            addItem: function(a) {
                g.superclass.addItem.apply(this, [].slice.call(arguments));
                var b = this.query(a.element);
                return b && this._saveExplainMessage(b),
                    this
            },
            _saveExplainMessage: function(a) {
                var c = a.element
                    , d = c.attr("data-explain");
                void 0 === d && c.attr("data-explain", this.getExplain(c).html())
            },
            getExplain: function(a) {
                var b = this.getItem(a)
                    , c = b.find("." + this.get("explainClass"));
                if (0 == c.length)
                    var c = f('<div class="' + this.get("explainClass") + '"></div>').appendTo(b);
                return c
            },
            getItem: function(a) {
                a = f(a);
                var b = a.parents("." + this.get("itemClass"));
                return b
            },
            mouseenter: function(a) {
                this.getItem(a.target).addClass(this.get("itemHoverClass"))
            },
            mouseleave: function(a) {
                this.getItem(a.target).removeClass(this.get("itemHoverClass"))
            },
            focus: function(a) {
                var b = a.target
                    , c = this.get("autoFocusEle");
                if (c && c.get(0) == b) {
                    var d = this;
                    return void f(b).keyup(function() {
                        d.set("autoFocusEle", null),
                            d.focus({
                                target: b
                            })
                    })
                }
                this.getItem(b).removeClass(this.get("itemErrorClass")),
                    this.getItem(b).addClass(this.get("itemFocusClass")),
                    this.getExplain(b).html(f(b).attr("data-explain"))
            },
            blur: function(a) {
                this.getItem(a.target).removeClass(this.get("itemFocusClass"))
            }
        });
        c.exports = g
    }),
    define("arale/switchable/0.9.12/plugins/effects", ["$"], function(a, b, c) {
        var d = a("$")
            , e = "scrollx"
            , f = "scrolly"
            , g = "fade";
        c.exports = {
            isNeeded: function() {
                return "none" !== this.get("effect")
            },
            install: function() {
                var a = this.panels;
                a.show();
                var b = this.get("effect")
                    , c = this.get("step");
                if (0 === b.indexOf("scroll")) {
                    var f = this.content
                        , i = a.eq(0);
                    f.css("position", "relative"),
                    "static" === f.parent().css("position") && f.parent().css("position", "relative"),
                    b === e && (a.css("float", "left"),
                        f.width("9999px"));
                    var j = this.get("viewSize");
                    if (j[0] || (j[0] = i.outerWidth() * c,
                            j[1] = i.outerHeight() * c,
                            this.set("viewSize", j)),
                            !j[0])
                        throw new Error("Please specify viewSize manually")
                } else if (b === g) {
                    var k = this.get("activeIndex")
                        , l = k * c
                        , m = l + c - 1;
                    a.each(function(a, b) {
                        var c = a >= l && m >= a;
                        d(b).css({
                            opacity: c ? 1 : 0,
                            position: "absolute",
                            zIndex: c ? 9 : 1
                        })
                    })
                }
                this._switchPanel = function(a) {
                    var b = this.get("effect")
                        , c = d.isFunction(b) ? b : h[b];
                    c.call(this, a)
                }
            }
        };
        var h = {
            fade: function(a) {
                if (this.get("step") > 1)
                    throw new Error('Effect "fade" only supports step === 1');
                var b = a.fromPanels.eq(0)
                    , c = a.toPanels.eq(0)
                    , d = this.anim;
                if (d && d.stop(!1, !0),
                        c.css("opacity", 1),
                        b[0]) {
                    var e = this.get("duration")
                        , f = this.get("easing")
                        , g = this;
                    this.anim = b.animate({
                        opacity: 0
                    }, e, f, function() {
                        g.anim = null,
                            c.css("zIndex", 9),
                            b.css("zIndex", 1)
                    })
                } else
                    c.css("zIndex", 9)
            },
            scroll: function(a) {
                var b = this.get("effect") === e
                    , c = this.get("viewSize")[b ? 0 : 1] * a.toIndex
                    , d = {};
                if (d[b ? "left" : "top"] = -c + "px",
                    this.anim && this.anim.stop(),
                    a.fromIndex > -1) {
                    var f = this
                        , g = this.get("duration")
                        , h = this.get("easing");
                    this.anim = this.content.animate(d, g, h, function() {
                        f.anim = null
                    })
                } else
                    this.content.css(d)
            }
        };
        h[f] = h.scroll,
            h[e] = h.scroll,
            c.exports.Effects = h
    }),
    define("arale/switchable/0.9.12/plugins/autoplay", ["$"], function(a, b, c) {
        function e(a, b) {
            function d() {
                d.stop(),
                    c = setTimeout(a, b)
            }
            b = b || 200;
            var c;
            return d.stop = function() {
                c && (clearTimeout(c),
                    c = 0)
            }
                ,
                d
        }
        function g(a) {
            var b = f.scrollTop()
                , c = b + f.height()
                , d = a.offset().top
                , e = d + a.height();
            return c > d && e > b
        }
        var d = a("$");
        c.exports = {
            attrs: {
                autoplay: !0,
                interval: 5e3,
                pauseOnScroll: !0,
                pauseOnHover: !0
            },
            isNeeded: function() {
                return this.get("autoplay")
            },
            install: function() {
                function i() {
                    j(),
                        h.paused = !1,
                        c = setInterval(function() {
                            h.paused || h.next()
                        }, d)
                }
                function j() {
                    c && (clearInterval(c),
                        c = null),
                        h.paused = !0
                }
                var c, a = this.element, b = "." + this.cid, d = this.get("interval"), h = this;
                i(),
                    this.stop = j,
                    this.start = i,
                this.get("pauseOnScroll") && (this._scrollDetect = e(function() {
                    h[g(a) ? "start" : "stop"]()
                }),
                    f.on("scroll" + b, this._scrollDetect)),
                this.get("pauseOnHover") && this.element.hover(j, i)
            },
            destroy: function() {
                var a = "." + this.cid;
                this.stop(),
                this._scrollDetect && (this._scrollDetect.stop(),
                    f.off("scroll" + a))
            }
        };
        var f = d(window)
    }),
    define("arale/switchable/0.9.12/plugins/circular", ["./effects", "$"], function(a, b, c) {
        function h(a, b, c) {
            var e = this.get("step")
                , f = this.get("length")
                , g = a ? f - 1 : 0
                , h = g * e
                , i = (g + 1) * e
                , j = a ? c : -c * f
                , k = a ? -c * f : c * f
                , l = d(this.panels.get().slice(h, i));
            return l.css("position", "relative"),
                l.css(b, k + "px"),
                j
        }
        function i(a, b, c) {
            var e = this.get("step")
                , f = this.get("length")
                , g = a ? f - 1 : 0
                , h = g * e
                , i = (g + 1) * e
                , j = d(this.panels.get().slice(h, i));
            j.css("position", ""),
                j.css(b, ""),
                this.content.css(b, a ? -c * (f - 1) : "")
        }
        var d = a("$")
            , e = "scrollx"
            , f = "scrolly"
            , g = a("./effects").Effects;
        c.exports = {
            isNeeded: function() {
                var a = this.get("effect")
                    , b = this.get("circular");
                return b && (a === e || a === f)
            },
            install: function() {
                this.set("scrollType", this.get("effect")),
                    this.set("effect", "scrollCircular")
            }
        },
            g.scrollCircular = function(a) {
                var b = a.toIndex
                    , c = a.fromIndex
                    , d = this.get("length")
                    , f = this.get("_isNext")
                    , g = 0 === c && b === d - 1 && !f
                    , j = c === d - 1 && 0 === b && f
                    , k = g || !j && c > b
                    , l = g || j
                    , m = this.get("scrollType") === e
                    , n = m ? "left" : "top"
                    , o = this.get("viewSize")[m ? 0 : 1]
                    , p = -o * b;
                this.anim && this.anim.stop(!1, !0),
                l && (p = h.call(this, k, n, o));
                var q = {};
                if (q[n] = p + "px",
                    c > -1) {
                    var r = this.get("duration")
                        , s = this.get("easing")
                        , t = this;
                    this.anim = this.content.animate(q, r, s, function() {
                        t.anim = null,
                        l && i.call(t, k, n, o)
                    })
                } else
                    this.content.css(q)
            }
    }),
    define("arale/switchable/0.9.12/plugins/multiple", [], function(a, b, c) {
        c.exports = {
            isNeeded: function() {
                return this.get("multiple")
            },
            methods: {
                switchTo: function(a) {
                    this._switchTo(a, a)
                },
                _switchTrigger: function(a) {
                    this.triggers.eq(a).toggleClass(this.get("activeTriggerClass"))
                },
                _triggerIsValid: function() {
                    return !0
                },
                _switchPanel: function(a) {
                    a.toPanels.toggle()
                }
            }
        }
    }),
    define("arale/switchable/0.9.12/const", [], function(a, b, c) {
        c.exports = function(a) {
            return {
                UI_SWITCHABLE: a || "",
                NAV_CLASS: a ? a + "-nav" : "",
                CONTENT_CLASS: a ? a + "-content" : "",
                TRIGGER_CLASS: a ? a + "-trigger" : "",
                PANEL_CLASS: a ? a + "-panel" : "",
                ACTIVE_CLASS: a ? a + "-active" : "",
                PREV_BTN_CLASS: a ? a + "-prev-btn" : "",
                NEXT_BTN_CLASS: a ? a + "-next-btn" : "",
                DISABLED_BTN_CLASS: a ? a + "-disabled-btn" : ""
            }
        }
    }),
    define("arale/switchable/0.9.12/switchable", ["./plugins/effects", "./plugins/autoplay", "./plugins/circular", "./plugins/multiple", "./const", "$", "arale/easing/1.0.0/easing", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events"], function(a, b, c) {
        function l(a, b, c) {
            for (var e = d("<ul>"), f = 0; a > f; f++) {
                var g = f === b ? c : "";
                d("<li>", {
                    "class": g,
                    html: f + 1
                }).appendTo(e)
            }
            return e
        }
        var d = a("$");
        a("arale/easing/1.0.0/easing");
        var e = a("arale/widget/1.0.3/widget")
            , f = "ui-switchable"
            , g = a("./plugins/effects")
            , h = a("./plugins/autoplay")
            , i = a("./plugins/circular")
            , j = a("./plugins/multiple")
            , k = e.extend({
            attrs: {
                triggers: {
                    value: [],
                    getter: function(a) {
                        return d(a)
                    }
                },
                panels: {
                    value: [],
                    getter: function(a) {
                        return d(a)
                    }
                },
                classPrefix: f,
                hasTriggers: !0,
                triggerType: "hover",
                delay: 100,
                effect: "none",
                easing: "linear",
                duration: 500,
                activeIndex: 0,
                step: 1,
                length: {
                    readOnly: !0,
                    getter: function() {
                        return this.panels.length / this.get("step")
                    }
                },
                viewSize: [],
                activeTriggerClass: f + "-active"
            },
            setup: function() {
                this._initConstClass(),
                    this._parseRole(),
                    this._initElement(),
                    this._initPanels(),
                    this._initTriggers(),
                    this._initPlugins()
            },
            _initConstClass: function() {
                var b = this.get("classPrefix");
                this.CONST = a("./const")(b)
            },
            _parseRole: function(a) {
                if (a = a || this._getDatasetRole()) {
                    var b = this.get("triggers")
                        , c = this.get("panels");
                    0 === b.length && (a.trigger || a.nav) && (b = a.trigger || a.nav.find("> *")),
                    0 === c.length && (a.panel || a.content) && (c = a.panel || a.content.find("> *")),
                        this.set("triggers", b),
                        this.set("panels", c)
                }
            },
            _getDatasetRole: function(a) {
                var b = this.element
                    , a = a || {}
                    , c = !1
                    , e = ["trigger", "panel", "nav", "content"];
                return d.each(e, function(e, f) {
                    var g = d("[data-role=" + f + "]", b);
                    g.length && (a[f] = g,
                        c = !0)
                }),
                    c ? a : null
            },
            _initElement: function() {
                this.element.addClass(this.CONST.UI_SWITCHABLE)
            },
            _initPanels: function() {
                var a = this.panels = this.get("panels");
                if (0 === a.length)
                    throw new Error("panels.length is ZERO");
                this.content = a.parent().addClass(this.CONST.CONTENT_CLASS),
                    a.addClass(this.CONST.PANEL_CLASS)
            },
            _initTriggers: function() {
                var a = this.triggers = this.get("triggers");
                0 === a.length && this.get("hasTriggers") ? (this.nav = l(this.get("length"), this.get("activeIndex"), this.get("activeTriggerClass")).appendTo(this.element),
                        this.triggers = this.nav.children()) : this.nav = a.parent(),
                    this.triggers.addClass(this.CONST.TRIGGER_CLASS),
                    this.nav.addClass(this.CONST.NAV_CLASS),
                    this.triggers.each(function(a, b) {
                        d(b).data("value", a)
                    }),
                    this._bindTriggers()
            },
            _initPlugins: function() {
                this._plugins = [],
                    this._plug(g),
                    this._plug(h),
                    this._plug(i),
                    this._plug(j)
            },
            _bindTriggers: function() {
                function b(b) {
                    a._onFocusTrigger(b.type, d(this).data("value"))
                }
                function c() {
                    clearTimeout(a._switchTimer)
                }
                var a = this;
                "click" === this.get("triggerType") ? this.triggers.click(b) : this.triggers.hover(b, c)
            },
            _onFocusTrigger: function(a, b) {
                var c = this;
                "click" === a ? this.switchTo(b) : this._switchTimer = setTimeout(function() {
                        c.switchTo(b)
                    }, this.get("delay"))
            },
            switchTo: function(a) {
                return this.set("activeIndex", a),
                    this
            },
            _onRenderActiveIndex: function(a, b) {
                this._triggerIsValid(a, b) && this._switchTo(a, b)
            },
            _switchTo: function(a, b) {
                this.trigger("switch", a, b),
                    this._switchTrigger(a, b),
                    this._switchPanel(this._getPanelInfo(a, b)),
                    this.trigger("switched", a, b)
            },
            _triggerIsValid: function(a, b) {
                return a !== b
            },
            _switchTrigger: function(a, b) {
                var c = this.triggers;
                1 > c.length || (c.eq(b).removeClass(this.get("activeTriggerClass")),
                    c.eq(a).addClass(this.get("activeTriggerClass")))
            },
            _switchPanel: function(a) {
                a.fromPanels.hide(),
                    a.toPanels.show()
            },
            _getPanelInfo: function(a, b) {
                var f, g, c = this.panels.get(), e = this.get("step");
                if (b > -1) {
                    var h = b * e
                        , i = (b + 1) * e;
                    f = c.slice(h, i)
                }
                return g = c.slice(a * e, (a + 1) * e),
                    {
                        toIndex: a,
                        fromIndex: b,
                        toPanels: d(g),
                        fromPanels: d(f)
                    }
            },
            prev: function() {
                var a = this.get("activeIndex")
                    , b = (a - 1 + this.get("length")) % this.get("length");
                this.switchTo(b)
            },
            next: function() {
                var a = this.get("activeIndex")
                    , b = (a + 1) % this.get("length");
                this.switchTo(b)
            },
            _plug: function(a) {
                if (a.isNeeded.call(this)) {
                    var b = a.attrs
                        , c = a.methods;
                    if (b)
                        for (var d in b)
                            !b.hasOwnProperty(d) || d in this.attrs || this.set(d, b[d]);
                    if (c)
                        for (var e in c)
                            c.hasOwnProperty(e) && (this[e] = c[e]);
                    a.install && a.install.call(this),
                        this._plugins.push(a)
                }
            },
            destroy: function() {
                d.each(this._plugins, function(a, b) {
                    b.destroy && b.destroy.call(this)
                }),
                    k.superclass.destroy.call(this)
            }
        });
        c.exports = k
    }),
    define("arale/easing/1.0.0/easing", ["$"], function(n, t, e) {
        var u = Math.PI
            , r = Math.pow
            , o = Math.sin
            , c = 1.70158
            , a = {
            easeNone: function(n) {
                return n
            },
            easeIn: function(n) {
                return n * n
            },
            easeOut: function(n) {
                return (2 - n) * n
            },
            easeBoth: function(n) {
                return 1 > (n *= 2) ? .5 * n * n : .5 * (1 - --n * (n - 2))
            },
            easeInStrong: function(n) {
                return n * n * n * n
            },
            easeOutStrong: function(n) {
                return 1 - --n * n * n * n
            },
            easeBothStrong: function(n) {
                return 1 > (n *= 2) ? .5 * n * n * n * n : .5 * (2 - (n -= 2) * n * n * n)
            },
            backIn: function(n) {
                return 1 === n && (n -= .001),
                n * n * ((c + 1) * n - c)
            },
            backOut: function(n) {
                return (n -= 1) * n * ((c + 1) * n + c) + 1
            },
            backBoth: function(n) {
                var t = c
                    , e = (t *= 1.525) + 1;
                return 1 > (n *= 2) ? .5 * n * n * (e * n - t) : .5 * ((n -= 2) * n * (e * n + t) + 2)
            },
            elasticIn: function(n) {
                var t = .3
                    , e = t / 4;
                return 0 === n || 1 === n ? n : -(r(2, 10 * (n -= 1)) * o(2 * (n - e) * u / t))
            },
            elasticOut: function(n) {
                var t = .3
                    , e = t / 4;
                return 0 === n || 1 === n ? n : r(2, -10 * n) * o(2 * (n - e) * u / t) + 1
            },
            elasticBoth: function(n) {
                var t = .45
                    , e = t / 4;
                return 0 === n || 2 === (n *= 2) ? n : 1 > n ? -.5 * r(2, 10 * (n -= 1)) * o(2 * (n - e) * u / t) : .5 * r(2, -10 * (n -= 1)) * o(2 * (n - e) * u / t) + 1
            },
            bounceIn: function(n) {
                return 1 - a.bounceOut(1 - n)
            },
            bounceOut: function(n) {
                var t, e = 7.5625;
                return t = 1 / 2.75 > n ? e * n * n : 2 / 2.75 > n ? e * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? e * (n -= 2.25 / 2.75) * n + .9375 : e * (n -= 2.625 / 2.75) * n + .984375
            },
            bounceBoth: function(n) {
                return .5 > n ? .5 * a.bounceIn(2 * n) : .5 * a.bounceOut(2 * n - 1) + .5
            }
        };
        e.exports = a;
        var i = n("$");
        i.extend(i.easing, a)
    }),
    define("arale/calendar/0.8.5/calendar", ["$", "gallery/moment/2.0.0/moment", "arale/overlay/1.0.1/overlay", "arale/position/1.0.0/position", "arale/iframe-shim/1.0.1/iframe-shim", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events", "arale/widget/1.0.3/templatable", "gallery/handlebars/1.0.0/handlebars", "./calendar-tpl", "./model"], function(e, a, t) {
        function n(e, a) {
            for (var t, n = a.get("mode"), r = ["date", "month", "year"], l = 0; r.length > l; l++)
                n[r[l]] && (t = r[l]);
            if (t) {
                var i = "[data-value=" + a.get(t).current.value + "]";
                e.find(".focused-element").removeClass("focused-element"),
                    e.find(i).addClass("focused-element")
            }
        }
        var r = e("$")
            , l = e("gallery/moment/2.0.0/moment")
            , i = e("arale/overlay/1.0.1/overlay")
            , o = e("arale/widget/1.0.3/templatable")
            , s = "i18n!lang"
            , h = e(s) || {}
            , c = e("./calendar-tpl")
            , d = e("./model")
            , u = {
            trigger: null,
            triggerType: "click",
            format: "YYYY-MM-DD",
            output: {
                value: "",
                getter: function(e) {
                    return e = e ? e : this.get("trigger"),
                        r(e)
                }
            },
            align: {
                getter: function() {
                    var e = this.get("trigger");
                    return e ? {
                            selfXY: [0, 0],
                            baseElement: e,
                            baseXY: [0, r(e).height() + 10]
                        } : {
                            selfXY: [0, 0],
                            baseXY: [0, 0]
                        }
                }
            },
            startDay: "Sun",
            showTime: !1,
            hideOnSelect: !0,
            focus: {
                value: "",
                getter: function(e) {
                    return e = e ? e : r(this.get("trigger")).val(),
                        e ? l(e, this.get("format")) : l()
                }
            },
            range: null,
            template: c,
            model: {
                getter: function() {
                    if (!this.hasOwnProperty("model")) {
                        var e = {
                            focus: this.get("focus"),
                            range: this.get("range"),
                            showTime: this.get("showTime"),
                            startDay: this.get("startDay")
                        };
                        this.model = new d(e)
                    }
                    return this.model
                }
            }
        }
            , m = i.extend({
            Implements: [o],
            attrs: u,
            events: {
                "click [data-role=mode-year]": "_changeMode",
                "click [data-role=prev-year]": "prevYear",
                "click [data-role=next-year]": "nextYear",
                "click [data-role=mode-month]": "_changeMode",
                "click [data-role=prev-month]": "prevMonth",
                "click [data-role=next-month]": "nextMonth",
                "click [data-role=previous-10-year]": "_selectYear",
                "click [data-role=next-10-year]": "_selectYear",
                "click [data-role=year]": "_selectYear",
                "click [data-role=month]": "_selectMonth",
                "click [data-role=day]": "_selectDay",
                "click [data-role=date]": "_selectDate",
                "click [data-role=today]": "_selectToday"
            },
            templateHelpers: {
                _: function(e) {
                    return h[e] || e
                }
            },
            setup: function() {
                m.superclass.setup.call(this);
                var e = this
                    , a = r(this.get("trigger"));
                a.on(this.get("triggerType"), function() {
                    e.show(),
                        n(e.element, e.model)
                }),
                    a.on("keydown", function(a) {
                        e._keyControl(a)
                    }),
                    a.on("blur", function() {
                        e.hide()
                    }),
                    e.element.on("mousedown", function(e) {
                        if (r.browser.msie && 9 > parseInt(r.browser.version, 10)) {
                            var t = a[0];
                            t.onbeforedeactivate = function() {
                                window.event.returnValue = !1,
                                    t.onbeforedeactivate = null
                            }
                        }
                        e.preventDefault()
                    });
                var t = this.model;
                t.on("changeStartday changeMode", function() {
                    e.renderPartial("[data-role=data-container]"),
                        e.renderPartial("[data-role=pannel-container]"),
                        e.renderPartial("[data-role=month-year-container]"),
                        n(e.element, e.model)
                }),
                    t.on("changeMonth changeYear", function() {
                        var a = t.get("mode");
                        (a.date || a.year) && e.renderPartial("[data-role=data-container]"),
                            e.renderPartial("[data-role=month-year-container]"),
                            n(e.element, e.model)
                    }),
                    t.on("changeRange", function() {
                        e.renderPartial("[data-role=data-container]")
                    }),
                    t.on("refresh", function() {
                        n(e.element, e.model)
                    })
            },
            show: function() {
                m.superclass.show.call(this);
                var e = this.get("output")
                    , a = e.val();
                a && this.setFocus(l(a, this.get("format")))
            },
            range: function(e) {
                this.model.changeRange(e)
            },
            prevYear: function() {
                this.model.changeYear(-1)
            },
            nextYear: function() {
                this.model.changeYear(1)
            },
            prevMonth: function() {
                this.model.changeMonth(-1)
            },
            nextMonth: function() {
                this.model.changeMonth(1)
            },
            setFocus: function(e) {
                this.model.selectDate(e),
                    this.model.changeMode("date"),
                    n(this.element, this.model)
            },
            _selectYear: function(e) {
                var a = r(e.target);
                "year" === a.data("role") ? this.model.changeMode("date", {
                        year: a.data("value")
                    }) : this.model.changeMode("year", {
                        year: a.data("value")
                    })
            },
            _selectMonth: function(e) {
                var a = r(e.target);
                this.model.changeMode("date", {
                    month: a.data("value")
                })
            },
            _selectDay: function(e) {
                var a = r(e.target);
                this.model.changeStartDay(a.data("value"))
            },
            _selectDate: function(e) {
                var a = r(e.target)
                    , t = this.model.selectDate(a.data("value"));
                this._fillDate(t)
            },
            _selectToday: function() {
                var e = l().format("YYYY-MM-DD")
                    , a = this.model.selectDate(e);
                this._fillDate(a)
            },
            _changeMode: function(e) {
                var a = r(e.target).data("role").substring(5);
                this.model.changeMode(a)
            },
            _keyControl: function(e) {
                var a = {
                    68: "date",
                    77: "month",
                    89: "year"
                };
                if (e.keyCode in a)
                    return this.model.changeMode(a[e.keyCode]),
                        e.preventDefault(),
                        !1;
                var t = {
                    13: "enter",
                    27: "esc",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down"
                };
                if (e.keyCode in t) {
                    e.preventDefault();
                    var n = t[e.keyCode]
                        , r = this.model.get("mode");
                    e.shiftKey && "down" === n ? this.nextYear() : e.shiftKey && "up" === n ? this.prevYear() : e.shiftKey && "right" === n ? this.nextMonth() : e.shiftKey && "left" === n ? this.prevMonth() : "esc" === n ? this.hide() : r.date ? this._keyControlDate(n) : r.month ? this._keyControlMonth(n) : r.year && this._keyControlYear(n)
                }
            },
            _keyControlDate: function(e) {
                if ("enter" === e) {
                    var a = this.model.selectDate();
                    return void this._fillDate(a)
                }
                var t = {
                    right: 1,
                    left: -1,
                    up: -7,
                    down: 7
                };
                this.model.changeDate(t[e])
            },
            _keyControlMonth: function(e) {
                if ("enter" === e) {
                    var a = this.model.selectDate();
                    return void this.model.changeMode("date", {
                        month: a.month()
                    })
                }
                var t = {
                    right: 1,
                    left: -1,
                    up: -3,
                    down: 3
                };
                this.model.changeMonth(t[e])
            },
            _keyControlYear: function(e) {
                if ("enter" === e) {
                    var a = this.model.selectDate();
                    return void this.model.changeMode("date", {
                        year: a.year()
                    })
                }
                var t = {
                    right: 1,
                    left: -1,
                    up: -3,
                    down: 3
                };
                this.model.changeYear(t[e])
            },
            _fillDate: function(e) {
                if (!this.model.isInRange(e))
                    return this.trigger("selectDisabledDate", e),
                        this;
                this.trigger("selectDate", e);
                var a = this.get("trigger");
                if (!a)
                    return this;
                var t = this.get("output");
                if (void 0 === t[0].value)
                    return this;
                var n = e.format(this.get("format"));
                t.val(n),
                this.get("hideOnSelect") && this.hide()
            }
        });
        m.autoRender = function(e) {
            e.trigger = e.element,
                e.element = "",
                new m(e)
        }
            ,
            t.exports = m
    }),
    define("arale/calendar/0.8.5/calendar-tpl", ["gallery/handlebars/1.0.0/handlebars"], function(e, a, t) {
        var n = e("gallery/handlebars/1.0.0/handlebars");
        !function() {
            var e = n.template;
            n.templates = n.templates || {},
                t.exports = e(function(e, a, t, n, r) {
                    function l(e, a) {
                        var n, r, l = "";
                        return l += "\n        ",
                            r = t.each.call(e, (n = e.day,
                                null == n || n === !1 ? n : n.items), {
                                hash: {},
                                inverse: w.noop,
                                fn: w.program(2, i, a),
                                data: a
                            }),
                        (r || 0 === r) && (l += r),
                            l += "\n        "
                    }
                    function i(e, a) {
                        var n, r, l = "";
                        return l += '\n        <li class="ui-calendar-day ui-calendar-day-',
                            (n = t.value) ? n = n.call(e, {
                                    hash: {},
                                    data: a
                                }) : (n = e.value,
                                    n = typeof n === _ ? n.apply(e) : n),
                            l += D(n) + '" data-role="day" data-value="',
                            (n = t.value) ? n = n.call(e, {
                                    hash: {},
                                    data: a
                                }) : (n = e.value,
                                    n = typeof n === _ ? n.apply(e) : n),
                            l += D(n) + '">',
                            r = {
                                hash: {},
                                data: a
                            },
                            l += D((n = t._,
                                    n ? n.call(e, e.label, r) : k.call(e, "_", e.label, r))) + "</li>\n        "
                    }
                    function o(e, a) {
                        var n, r, l = "";
                        return l += "\n        ",
                            r = t.each.call(e, (n = e.date,
                                null == n || n === !1 ? n : n.items), {
                                hash: {},
                                inverse: w.noop,
                                fn: w.program(5, s, a),
                                data: a
                            }),
                        (r || 0 === r) && (l += r),
                            l += "\n        "
                    }
                    function s(e, a) {
                        var n, r = "";
                        return r += '\n        <ul class="ui-calendar-date-column">\n            ',
                            n = t.each.call(e, e, {
                                hash: {},
                                inverse: w.noop,
                                fn: w.program(6, h, a),
                                data: a
                            }),
                        (n || 0 === n) && (r += n),
                            r += "\n        </ul>\n        "
                    }
                    function h(e, a) {
                        var n, r = "";
                        return r += '\n            <li class="ui-calendar-day-',
                            (n = t.day) ? n = n.call(e, {
                                    hash: {},
                                    data: a
                                }) : (n = e.day,
                                    n = typeof n === _ ? n.apply(e) : n),
                            r += D(n) + " ",
                            (n = t.className) ? n = n.call(e, {
                                    hash: {},
                                    data: a
                                }) : (n = e.className,
                                    n = typeof n === _ ? n.apply(e) : n),
                            r += D(n) + "\n            ",
                            n = t.unless.call(e, e.available, {
                                hash: {},
                                inverse: w.noop,
                                fn: w.program(7, c, a),
                                data: a
                            }),
                        (n || 0 === n) && (r += n),
                            r += '\n            "\n            data-role="date" data-value="',
                            (n = t.value) ? n = n.call(e, {
                                    hash: {},
                                    data: a
                                }) : (n = e.value,
                                    n = typeof n === _ ? n.apply(e) : n),
                            r += D(n) + '"\n            >',
                            (n = t.label) ? n = n.call(e, {
                                    hash: {},
                                    data: a
                                }) : (n = e.label,
                                    n = typeof n === _ ? n.apply(e) : n),
                            r += D(n) + "</li>\n            "
                    }
                    function c() {
                        return "disabled-date"
                    }
                    function d(e, a) {
                        var n, r, l = "";
                        return l += "\n        ",
                            r = t.each.call(e, (n = e.month,
                                null == n || n === !1 ? n : n.items), {
                                hash: {},
                                inverse: w.noop,
                                fn: w.program(10, u, a),
                                data: a
                            }),
                        (r || 0 === r) && (l += r),
                            l += "\n        "
                    }
                    function u(e, a) {
                        var n, r = "";
                        return r += '\n        <ul class="ui-calendar-month-column">\n            ',
                            n = t.each.call(e, e, {
                                hash: {},
                                inverse: w.noop,
                                fn: w.program(11, m, a),
                                data: a
                            }),
                        (n || 0 === n) && (r += n),
                            r += "\n        </ul>\n        "
                    }
                    function m(e, a) {
                        var n, r, l = "";
                        return l += '\n            <li data-role="month" data-value="',
                            (n = t.value) ? n = n.call(e, {
                                    hash: {},
                                    data: a
                                }) : (n = e.value,
                                    n = typeof n === _ ? n.apply(e) : n),
                            l += D(n) + '">',
                            r = {
                                hash: {},
                                data: a
                            },
                            l += D((n = t._,
                                    n ? n.call(e, e.label, r) : k.call(e, "_", e.label, r))) + "</li>\n            "
                    }
                    function f(e, a) {
                        var n, r, l = "";
                        return l += "\n        ",
                            r = t.each.call(e, (n = e.year,
                                null == n || n === !1 ? n : n.items), {
                                hash: {},
                                inverse: w.noop,
                                fn: w.program(14, v, a),
                                data: a
                            }),
                        (r || 0 === r) && (l += r),
                            l += "\n        "
                    }
                    function v(e, a) {
                        var n, r = "";
                        return r += '\n        <ul class="ui-calendar-year-column">\n            ',
                            n = t.each.call(e, e, {
                                hash: {},
                                inverse: w.noop,
                                fn: w.program(15, g, a),
                                data: a
                            }),
                        (n || 0 === n) && (r += n),
                            r += "\n        </ul>\n        "
                    }
                    function g(e, a) {
                        var n, r, l = "";
                        return l += '\n            <li data-role="',
                            (n = t.role) ? n = n.call(e, {
                                    hash: {},
                                    data: a
                                }) : (n = e.role,
                                    n = typeof n === _ ? n.apply(e) : n),
                            l += D(n) + '" data-value="',
                            (n = t.value) ? n = n.call(e, {
                                    hash: {},
                                    data: a
                                }) : (n = e.value,
                                    n = typeof n === _ ? n.apply(e) : n),
                            l += D(n) + '">',
                            r = {
                                hash: {},
                                data: a
                            },
                            l += D((n = t._,
                                    n ? n.call(e, e.label, r) : k.call(e, "_", e.label, r))) + "</li>\n            "
                    }
                    function y(e) {
                        var a, t = "";
                        return t += '\n        <li class="ui-calendar-time" colspan="2" data-role="time"><span class="ui-calendar-hour">' + D((a = e.time,
                                a = null == a || a === !1 ? a : a.hour,
                                typeof a === _ ? a.apply(e) : a)) + "</span> : " + D((a = e.time,
                                a = null == a || a === !1 ? a : a.minute,
                                typeof a === _ ? a.apply(e) : a)) + "</li>\n        "
                    }
                    this.compilerInfo = [2, ">= 1.0.0-rc.3"],
                        t = t || e.helpers,
                        r = r || {};
                    var p, M, Y, b = "", _ = "function", D = this.escapeExpression, k = t.helperMissing, w = this;
                    return b += '<div class="ui-calendar">\n    <ul class="ui-calendar-navigation" data-role="navigation-container">\n        <li class="ui-calendar-previous-year" data-role="prev-year">&lt;&lt;</li>\n        <li class="ui-calendar-previous-month" data-role="prev-month">&lt;</li>\n        <li class="ui-calendar-month-year" data-role="month-year-container">\n        <span class="month" data-role="mode-month" data-value="' + D((p = a.month,
                            p = null == p || p === !1 ? p : p.current,
                            p = null == p || p === !1 ? p : p.value,
                            typeof p === _ ? p.apply(a) : p)) + '">',
                        Y = {
                            hash: {},
                            data: r
                        },
                        b += D((p = t._,
                                p ? p.call(a, (p = a.month,
                                        p = null == p || p === !1 ? p : p.current,
                                        null == p || p === !1 ? p : p.label), Y) : k.call(a, "_", (p = a.month,
                                        p = null == p || p === !1 ? p : p.current,
                                        null == p || p === !1 ? p : p.label), Y))) + '</span>\n        <span class="year" data-role="mode-year">' + D((p = a.year,
                                p = null == p || p === !1 ? p : p.current,
                                p = null == p || p === !1 ? p : p.label,
                                typeof p === _ ? p.apply(a) : p)) + '</span>\n        </li>\n        <li class="ui-calendar-next-month" data-role="next-month">&gt;</li>\n        <li class="ui-calendar-next-year" data-role="next-year">&gt;&gt;</li>\n    </ul>\n\n    <ul class="ui-calendar-control" data-role="pannel-container">\n        ',
                        M = t["if"].call(a, (p = a.mode,
                            null == p || p === !1 ? p : p.date), {
                            hash: {},
                            inverse: w.noop,
                            fn: w.program(1, l, r),
                            data: r
                        }),
                    (M || 0 === M) && (b += M),
                        b += '\n    </ul>\n\n    <div class="ui-calendar-data-container" data-role="data-container">\n        ',
                        M = t["if"].call(a, (p = a.mode,
                            null == p || p === !1 ? p : p.date), {
                            hash: {},
                            inverse: w.noop,
                            fn: w.program(4, o, r),
                            data: r
                        }),
                    (M || 0 === M) && (b += M),
                        b += "\n\n        ",
                        M = t["if"].call(a, (p = a.mode,
                            null == p || p === !1 ? p : p.month), {
                            hash: {},
                            inverse: w.noop,
                            fn: w.program(9, d, r),
                            data: r
                        }),
                    (M || 0 === M) && (b += M),
                        b += "\n\n        ",
                        M = t["if"].call(a, (p = a.mode,
                            null == p || p === !1 ? p : p.year), {
                            hash: {},
                            inverse: w.noop,
                            fn: w.program(13, f, r),
                            data: r
                        }),
                    (M || 0 === M) && (b += M),
                        b += '\n    </div>\n\n    <ul class="ui-calendar-footer" data-role="time-container">\n        <li class="ui-calendar-today" data-role="today">',
                        Y = {
                            hash: {},
                            data: r
                        },
                        b += D((p = t._,
                                p ? p.call(a, (p = a.message,
                                        null == p || p === !1 ? p : p.today), Y) : k.call(a, "_", (p = a.message,
                                        null == p || p === !1 ? p : p.today), Y))) + "</li>\n        ",
                        M = t["if"].call(a, (p = a.mode,
                            null == p || p === !1 ? p : p.time), {
                            hash: {},
                            inverse: w.noop,
                            fn: w.program(17, y, r),
                            data: r
                        }),
                    (M || 0 === M) && (b += M),
                        b += "\n    </ul>\n</div>\n"
                })
        }()
    }),
    define("arale/calendar/0.8.5/model", ["$", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events", "gallery/moment/2.0.0/moment"], function(e, a, t) {
        function n(e) {
            if (e = ("" + (e || 0)).toLowerCase(),
                    h.isNumeric(e))
                return e = parseInt(e);
            for (var a = 0; f.length > a; a++)
                if (0 === f[a].indexOf(e)) {
                    e = a;
                    break
                }
            return e
        }
        function r(e) {
            var a = [];
            for (r = 0; m.length > r; r++)
                a.push({
                    value: r,
                    label: m[r]
                });
            for (var t = {
                value: e,
                label: m[e]
            }, n = [], r = 0; a.length / 3 > r; r++)
                n.push(a.slice(3 * r, 3 * r + 3));
            return {
                current: t,
                items: n
            }
        }
        function l(e) {
            for (var a = [{
                value: e - 10,
                label: ". . .",
                role: "previous-10-year"
            }], t = e - 6; e + 4 > t; t++)
                a.push({
                    value: t,
                    label: t,
                    role: "year"
                });
            a[7] = {
                value: e,
                label: e,
                role: "year",
                current: !0
            },
                a.push({
                    value: e + 10,
                    label: ". . .",
                    role: "next-10-year"
                });
            var n = [];
            for (t = 0; a.length / 3 > t; t++)
                n.push(a.slice(3 * t, 3 * t + 3));
            var r = {
                value: e,
                label: e
            };
            return {
                current: r,
                items: n
            }
        }
        function i(e) {
            e = n(e);
            for (var a = [], t = e; 7 > t; t++)
                a.push({
                    label: v[t],
                    value: t
                });
            for (t = 0; e > t; t++)
                a.push({
                    label: v[t],
                    value: t
                });
            var r = {
                value: e,
                label: v[e]
            };
            return {
                current: r,
                items: a
            }
        }
        function o(e, a, t) {
            var r, l, i, o = [];
            a = n(a);
            var h = function(e, a) {
                o.push({
                    value: e.format("YYYY-MM-DD"),
                    label: e.date(),
                    day: e.day(),
                    className: a,
                    available: s(e, t)
                })
            }
                , c = e.clone().date(1)
                , d = c.clone().add("months", -1)
                , u = c.clone().add("months", 1);
            if (r = c.day() - a,
                0 > r && (r += 7),
                0 != r)
                for (i = d.daysInMonth(),
                         f = r - 1; f >= 0; f--)
                    l = d.date(i - f),
                        h(l, "previous-month");
            for (i = c.daysInMonth(),
                     f = 1; i >= f; f++)
                l = c.date(f),
                    h(l, "current-month");
            if (r = 35 - o.length,
                0 != r)
                for (0 > r && (r += 7),
                         f = 1; r >= f; f++)
                    l = u.date(f),
                        h(l, "next-month");
            for (var m = [], f = 0; o.length / 7 > f; f++)
                m.push(o.slice(7 * f, 7 * f + 7));
            var v = {
                value: e.format("YYYY-MM-DD"),
                label: e.date()
            };
            return {
                current: v,
                items: m
            }
        }
        function s(e, a) {
            if (null == a)
                return !0;
            if (h.isArray(a)) {
                var t = a[0]
                    , n = a[1]
                    , r = !0;
                return t && (r = r && e >= d(t)),
                n && (r = r && d(n) >= e),
                    r
            }
            return h.isFunction(a) ? a(e) : !0
        }
        var h = e("$")
            , c = e("arale/base/1.0.1/base")
            , d = e("gallery/moment/2.0.0/moment")
            , u = c.extend({
            attrs: {
                year: {
                    setter: function(e) {
                        return l(e)
                    }
                },
                month: {
                    setter: function(e) {
                        return r(e)
                    }
                },
                day: {
                    setter: function() {
                        return i(this.startDay)
                    }
                },
                date: {
                    setter: function(e) {
                        return o(e, this.startDay, this.range)
                    }
                },
                mode: {
                    setter: function(e) {
                        var a = {
                            date: !1,
                            month: !1,
                            year: !1
                        };
                        return a[e] = !0,
                            a
                    }
                },
                message: null
            },
            initialize: function(e) {
                u.superclass.initialize.call(this),
                    this.startDay = e.startDay || 0,
                    this.activeTime = d(e.focus).clone(),
                    this.range = e.range || null;
                var a = e.message || {};
                a.today = "Today",
                    this.set("message", a),
                    this.set("mode", "date"),
                    this._refresh()
            },
            changeYear: function(e) {
                this.activeTime.add("years", e),
                    this._refresh(),
                    this.trigger("changeYear")
            },
            changeMonth: function(e) {
                this.activeTime.add("months", e),
                    this._refresh(),
                    this.trigger("changeMonth")
            },
            changeDate: function(e) {
                var a = this.activeTime.format("YYYY-MM");
                this.activeTime.add("days", e),
                    this._refresh();
                var t = this.activeTime.format("YYYY-MM");
                a != t && this.get("mode").date && this.trigger("changeMonth")
            },
            changeStartDay: function(e) {
                this.startDay = e,
                    this._refresh(),
                    this.trigger("changeStartday")
            },
            changeMode: function(e, a) {
                a || (a = {}),
                "month"in a && this.activeTime.month(a.month),
                "year"in a && this.activeTime.year(a.year),
                    this.get("mode")[e] ? this.set("mode", "date") : this.set("mode", e),
                    this._refresh(),
                    this.trigger("changeMode")
            },
            changeRange: function(e) {
                this.range = e,
                    this._refresh(),
                    this.trigger("changeRange")
            },
            selectDate: function(e) {
                if (e) {
                    var a = this.activeTime.format("YYYY-MM");
                    this.activeTime = d(e),
                        this._refresh();
                    var t = this.activeTime.format("YYYY-MM");
                    a != t && this.get("mode").date && this.trigger("changeMonth")
                }
                return this.activeTime.clone()
            },
            isInRange: function(e) {
                return s(e, this.range)
            },
            toJSON: function() {
                var e = {}
                    , a = this.attrs;
                for (var t in a)
                    e[t] = this.get(t);
                return e
            },
            _refresh: function() {
                this.set("year", this.activeTime.year()),
                    this.set("month", this.activeTime.month()),
                    this.set("date", this.activeTime.clone()),
                    this.set("day"),
                    this.trigger("refresh")
            },
            range: null,
            activeTime: null,
            startDay: 0
        })
            , m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            , f = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
            , v = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        t.exports = u
    }),
    define("arale/validator/0.9.2/async", [], function(a, b, c) {
        var d = {};
        c.exports = d;
        var e = function(a, b) {
            if (a.forEach)
                return a.forEach(b);
            for (var c = 0; a.length > c; c += 1)
                b(a[c], c, a)
        }
            , f = function(a, b) {
            if (a.map)
                return a.map(b);
            var c = [];
            return e(a, function(a, d, e) {
                c.push(b(a, d, e))
            }),
                c
        }
            , g = function(a) {
            if (Object.keys)
                return Object.keys(a);
            var b = [];
            for (var c in a)
                a.hasOwnProperty(c) && b.push(c);
            return b
        };
        d.nextTick = "undefined" != typeof process && process.nextTick ? process.nextTick : function(a) {
                setTimeout(a, 0)
            }
            ,
            d.forEach = function(a, b, c) {
                if (c = c || function() {}
                        ,
                        !a.length)
                    return c();
                var d = 0;
                e(a, function(e) {
                    b(e, function(b) {
                        b ? (c(b),
                                    c = function() {}
                            ) : (d += 1,
                            d === a.length && c(null))
                    })
                })
            }
            ,
            d.forEachSeries = function(a, b, c) {
                if (c = c || function() {}
                        ,
                        !a.length)
                    return c();
                var d = 0
                    , e = function() {
                    b(a[d], function(b) {
                        b ? (c(b),
                                    c = function() {}
                            ) : (d += 1,
                                d === a.length ? c(null) : e())
                    })
                };
                e()
            }
        ;
        var h = function(a) {
            return function() {
                var b = Array.prototype.slice.call(arguments);
                return a.apply(null, [d.forEach].concat(b))
            }
        }
            , i = function(a) {
            return function() {
                var b = Array.prototype.slice.call(arguments);
                return a.apply(null, [d.forEachSeries].concat(b))
            }
        }
            , j = function(a, b, c, d) {
            var e = [];
            b = f(b, function(a, b) {
                return {
                    index: b,
                    value: a
                }
            }),
                a(b, function(a, b) {
                    c(a.value, function(c, d) {
                        e[a.index] = d,
                            b(c)
                    })
                }, function(a) {
                    d(a, e)
                })
        };
        d.map = h(j),
            d.mapSeries = i(j),
            d.series = function(a, b) {
                if (b = b || function() {}
                        ,
                    a.constructor === Array)
                    d.mapSeries(a, function(a, b) {
                        a && a(function(a) {
                            var c = Array.prototype.slice.call(arguments, 1);
                            1 >= c.length && (c = c[0]),
                                b.call(null, a, c)
                        })
                    }, b);
                else {
                    var c = {};
                    d.forEachSeries(g(a), function(b, d) {
                        a[b](function(a) {
                            var e = Array.prototype.slice.call(arguments, 1);
                            1 >= e.length && (e = e[0]),
                                c[b] = e,
                                d(a)
                        })
                    }, function(a) {
                        b(a, c)
                    })
                }
            }
    }),
    define("arale/validator/0.9.2/utils", ["./rule", "./async", "$", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events"], function(require, exports, module) {
        function unique() {
            return "__anonymous__" + u_count++
        }
        function parseRule(a) {
            var b = a.match(/([^{}:\s]*)(\{[^\{\}]*\})?/);
            return {
                name: b[1],
                param: parseJSON(b[2])
            }
        }
        function parseJSON(str) {
            function getValue(str) {
                return '"' == str.charAt(0) && '"' == str.charAt(str.length - 1) || "'" == str.charAt(0) && "'" == str.charAt(str.length - 1) ? eval(str) : str
            }
            if (!str)
                return null;
            var NOTICE = 'Invalid option object "' + str + '".';
            str = str.slice(1, -1);
            var result = {}
                , arr = str.split(",");
            return $.each(arr, function(a, b) {
                if (arr[a] = $.trim(b),
                        !arr[a])
                    throw new Error(NOTICE);
                var c = arr[a].split(":")
                    , d = $.trim(c[0])
                    , e = $.trim(c[1]);
                if (!d || !e)
                    throw new Error(NOTICE);
                result[getValue(d)] = $.trim(getValue(e))
            }),
                result
        }
        function parseRules(a) {
            return a ? a.match(/[a-zA-Z0-9\-\_]+(\{[^\{\}]*\})?/g) : null
        }
        function parseDom(a) {
            var a = $(a)
                , b = {}
                , c = []
                , d = a.attr("required");
            d && (c.push("required"),
                b.required = !0);
            var e = a.attr("type");
            if (e && "submit" != e && "cancel" != e && "checkbox" != e && "radio" != e && "select" != e && "select-one" != e && "file" != e && "hidden" != e && "textarea" != e) {
                if (!Rule.getRule(e))
                    throw new Error('Form field with type "' + e + '" not supported!');
                c.push(e)
            }
            var f = a.attr("min");
            f && c.push('min{"min":"' + f + '"}');
            var g = a.attr("max");
            g && c.push("max{max:" + g + "}");
            var h = a.attr("minlength");
            h && c.push("minlength{min:" + h + "}");
            var i = a.attr("maxlength");
            i && c.push("maxlength{max:" + i + "}");
            var j = a.attr("pattern");
            if (j) {
                var k = new RegExp(j)
                    , l = unique();
                Rule.addRule(l, k),
                    c.push(l)
            }
            var m = a.attr("data-rule");
            return m = m && parseRules(m),
            m && (c = c.concat(m)),
                b.rule = 0 == c.length ? null : c.join(" "),
                b
        }
        function helper(a, b) {
            return b ? (helpers[a] = b,
                    this) : helpers[a]
        }
        var Rule = require("./rule")
            , u_count = 0
            , helpers = {};
        module.exports = {
            parseRule: parseRule,
            parseRules: parseRules,
            parseDom: parseDom,
            helper: helper
        }
    }),
    define("arale/validator/0.9.2/rule", ["./async", "$", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events"], function(a, b, c) {
        function j(a, b, c) {
            return f.isPlainObject(a) ? (f.each(a, function(a, b) {
                    f.isArray(b) ? j(a, b[0], b[1]) : j(a, b)
                }),
                    this) : (d[a] = b instanceof i ? new i(a,b.operator) : new i(a,b),
                    l(a, c),
                    this)
        }
        function k(a, b) {
            var d, c = a.rule;
            return d = a.message ? f.isPlainObject(a.message) ? a.message[b ? "success" : "failure"] : b ? "" : a.message : e[c][b ? "success" : "failure"],
                d ? o(a, d) : d
        }
        function l(a, b) {
            return f.isPlainObject(a) ? (f.each(a, function(a, b) {
                    l(a, b)
                }),
                    this) : (e[a] = f.isPlainObject(b) ? b : {
                        failure: b
                    },
                    this)
        }
        function m(a) {
            return d[a].operator
        }
        function n(a, b) {
            if (b) {
                var c = d[a];
                return new i(null,function(a, d) {
                        c.operator(f.extend(null, a, b), d)
                    }
                )
            }
            return d[a]
        }
        function o(a, b) {
            var c = b
                , d = /\{\{[^\{\}]*\}\}/g
                , e = /\{\{(.*)\}\}/
                , g = b.match(d);
            return g && f.each(g, function(b, d) {
                var g = d.match(e)[1]
                    , h = a[f.trim(g)];
                c = c.replace(d, h)
            }),
                c
        }
        var d = {}
            , e = {}
            , f = a("$")
            , h = (a("./async"),
            a("arale/widget/1.0.3/widget"))
            , i = h.extend({
            initialize: function(a, b) {
                if (this.name = a,
                    b instanceof RegExp)
                    this.operator = function(a, c) {
                        var d = b.test(f(a.element).val());
                        c(d ? null : a.rule, k(a, d))
                    }
                    ;
                else {
                    if ("function" != typeof b)
                        throw new Error("The second argument must be a regexp or a function.");
                    this.operator = function(a, c) {
                        var d = b(a, function(b, d) {
                            c(b ? null : a.rule, d || k(a, b))
                        });
                        void 0 !== d && c(d ? null : a.rule, k(a, d))
                    }
                }
            },
            and: function(a, b) {
                if (a instanceof i)
                    var c = a;
                else
                    var c = n(a, b);
                if (!c)
                    throw new Error('No rule with name "' + a + '" found.');
                var d = this
                    , e = function(a, b) {
                    d.operator(a, function(d) {
                        d ? b(d, k(a, !d)) : c.operator(a, b)
                    })
                };
                return new i(null,e)
            },
            or: function(a, b) {
                if (a instanceof i)
                    var c = a;
                else
                    var c = n(a, b);
                if (!c)
                    throw new Error('No rule with name "' + a + '" found.');
                var d = this
                    , e = function(a, b) {
                    d.operator(a, function(d) {
                        d ? c.operator(a, b) : b(null, k(a, !0))
                    })
                };
                return new i(null,e)
            },
            not: function(a) {
                var b = n(this.name, a)
                    , c = function(a, c) {
                    b.operator(a, function(b) {
                        b ? c(null, k(a, !0)) : c(!0, k(a, !1))
                    })
                };
                return new i(null,c)
            }
        });
        j("required", function(a) {
            var b = f(a.element)
                , c = b.attr("type");
            switch (c) {
                case "checkbox":
                case "radio":
                    var d = !1;
                    return b.each(function(a, b) {
                        return f(b).prop("checked") ? (d = !0,
                                !1) : void 0
                    }),
                        d;
                default:
                    return Boolean(b.val())
            }
        }, "请输入{{display}}"),
            j("email", /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/, "{{display}}的格式不正确"),
            j("text", /.*/),
            j("password", /.*/),
            j("radio", /.*/),
            j("checkbox", /.*/),
            j("url", /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, "{{display}}的格式不正确"),
            j("number", /^[+-]?[1-9][0-9]*(\.[0-9]+)?([eE][+-][1-9][0-9]*)?$|^[+-]?0?\.[0-9]+([eE][+-][1-9][0-9]*)?$/, "{{display}}的格式不正确"),
            j("date", /^\d{4}\-[01]?\d\-[0-3]?\d$|^[01]\d\/[0-3]\d\/\d{4}$|^\d{4}年[01]?\d月[0-3]?\d[日号]$/, "{{display}}的格式不正确"),
            j("min", function(a) {
                var b = a.element
                    , c = a.min;
                return Number(b.val()) >= Number(c)
            }, "{{display}}必须大于或者等于{{min}}"),
            j("max", function(a) {
                var b = a.element
                    , c = a.max;
                return Number(b.val()) <= Number(c)
            }, "{{display}}必须小于或者等于{{max}}"),
            j("minlength", function(a) {
                var b = a.element
                    , c = b.val().length;
                return c >= Number(a.min)
            }, "{{display}}的长度必须大于或等于{{min}}"),
            j("maxlength", function(a) {
                var b = a.element
                    , c = b.val().length;
                return Number(a.max) >= c
            }, "{{display}}的长度必须小于或等于{{max}}"),
            j("mobile", /^1\d{10}$/, "请输入正确的{{display}}"),
            j("confirmation", function(a) {
                var b = a.element
                    , c = f(a.target);
                return b.val() == c.val()
            }, "两次输入的{{display}}不一致，请重新输入"),
            c.exports = {
                addRule: j,
                setMessage: l,
                getRule: n,
                getOperator: m
            }
    }),
    define("arale/validator/0.9.2/item", ["./utils", "./rule", "./async", "$", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events"], function(a, b, c) {
        function k(a) {
            return a = String(a),
            a.charAt(0).toUpperCase() + a.slice(1)
        }
        function l(a, b, c, f, i) {
            if (!b) {
                var j = !1
                    , k = a.attr("type");
                switch (k) {
                    case "checkbox":
                    case "radio":
                        var l = !1;
                        a.each(function(a, b) {
                            return d(b).prop("checked") ? (l = !0,
                                    !1) : void 0
                        }),
                            j = l;
                        break;
                    default:
                        j = Boolean(a.val())
                }
                if (!j)
                    return void (i && i(null, null))
            }
            if (!d.isArray(c))
                throw new Error("No validation rule specified or not specified as an array.");
            var m = [];
            d.each(c, function(b, c) {
                var g = e.parseRule(c)
                    , i = g.name
                    , j = g.param
                    , k = h.getOperator(i);
                if (!k)
                    throw new Error('Validation rule with name "' + i + '" cannot be found.');
                var l = d.extend({}, j, {
                    element: a,
                    display: j && j.display || f,
                    rule: i
                });
                m.push(function(a) {
                    k(l, a)
                })
            }),
                g.series(m, function(a, b) {
                    i && i(a, b[b.length - 1])
                })
        }
        function m(a) {
            return a ? (a = a[0] || a,
                    !a.offsetHeight) : !0
        }
        var d = a("$")
            , e = a("./utils")
            , f = a("arale/widget/1.0.3/widget")
            , g = a("./async")
            , h = a("./rule")
            , i = {
            value: function() {},
            setter: function(a) {
                return "function" != typeof a ? e.helper(a) : a
            }
        }
            , j = f.extend({
            attrs: {
                rule: "",
                display: null,
                displayHelper: null,
                triggerType: {
                    setter: function(a) {
                        if (!a)
                            return a;
                        var b = d(this.get("element"))
                            , c = b.attr("type")
                            , e = b.get(0).tagName.toLowerCase().indexOf("select") > -1 || "radio" == c || "checkbox" == c;
                        return e && (a.indexOf("blur") > -1 || a.indexOf("key") > -1) ? "change" : a
                    }
                },
                required: !1,
                checkNull: !0,
                errormessage: null,
                onItemValidate: i,
                onItemValidated: i,
                showMessage: i,
                hideMessage: i
            },
            setup: function() {
                this.get("required") && (!this.get("rule") || 0 > this.get("rule").indexOf("required")) && this.set("rule", "required " + this.get("rule")),
                this.get("display") || "function" != typeof this.get("displayHelper") || this.set("display", this.get("displayHelper")(this))
            },
            execute: function(a, b) {
                if (b = b || {},
                    this.get("skipHidden") && m(this.element))
                    return a && a(null, "", this.element),
                        this;
                this.trigger("itemValidate", this.element, b.event);
                var c = e.parseRules(this.get("rule"))
                    , d = this;
                return c ? (l(this.element, this.get("required"), c, this.get("display"), function(c, e) {
                        if (c)
                            var f = d.get("errormessage") || d.get("errormessage" + k(c)) || e;
                        else
                            var f = e;
                        d.trigger("itemValidated", c, f, d.element, b.event),
                        a && a(c, f, d.element)
                    }),
                        this) : (a && a(null, "", this.element),
                        this)
            }
        });
        c.exports = j
    }),
    define("arale/validator/0.9.2/core", ["./async", "./utils", "./rule", "./item", "$", "arale/widget/1.0.3/widget", "arale/base/1.0.1/base", "arale/class/1.0.0/class", "arale/events/1.0.0/events"], function(a, b, c) {
        function o(a) {
            var b = a.element.attr(n);
            return b || (b = a.cid,
                a.element.attr(n, b)),
                b
        }
        var k, d = a("$"), e = a("./async"), f = a("arale/widget/1.0.3/widget"), g = a("./utils"), h = a("./item"), i = [], j = {
            value: function() {},
            setter: function(a) {
                return "function" != typeof a ? g.helper(a) : a
            }
        }, l = void 0, m = f.extend({
            attrs: {
                triggerType: "blur",
                checkOnSubmit: !0,
                stopOnError: !1,
                autoSubmit: !0,
                checkNull: !0,
                onItemValidate: j,
                onItemValidated: j,
                onFormValidate: j,
                onFormValidated: j,
                displayHelper: function(a) {
                    var b, c, e = a.element.attr("id");
                    return e && (b = d("label[for=" + e + "]").text(),
                    b && (b = b.replace(/^[\*\s\:\：]*/, "").replace(/[\*\s\:\：]*$/, ""))),
                        c = a.element.attr("name"),
                    b || c
                },
                showMessage: j,
                hideMessage: j,
                autoFocus: !0,
                failSilently: !1,
                skipHidden: !1
            },
            setup: function() {
                var a = this;
                this.items = [],
                    k = "form" == this.element.get(0).tagName.toLowerCase(),
                k && (l = this.element.attr("novalidate"),
                    this.element.attr("novalidate", "novalidate"),
                this.get("checkOnSubmit") && this.element.submit(function(b) {
                    b.preventDefault(),
                        a.execute(function(b) {
                            b || a.get("autoSubmit") && a.element.get(0).submit()
                        })
                })),
                    this.on("formValidate", function() {
                        var a = this;
                        d.each(this.items, function(b, c) {
                            a.query(c.element).get("hideMessage").call(a, null, c.element)
                        })
                    }),
                    this.on("itemValidated", function(a, b, c) {
                        a ? this.query(c).get("showMessage").call(this, b, c) : this.query(c).get("hideMessage").call(this, b, c)
                    }),
                this.get("autoFocus") && this.on("formValidated", function(b, c) {
                    if (b) {
                        var e = null;
                        d.each(c, function(a, b) {
                            var c = b[0]
                                , d = b[2];
                            return c ? (e = d,
                                    !1) : void 0
                        }),
                            a.trigger("autoFocus", e),
                            e.focus()
                    }
                }),
                    i.push(this)
            },
            Statics: d.extend({
                helper: g.helper
            }, a("./rule"), {
                autoRender: function(a) {
                    var b = new this(a);
                    d("input, textarea, select", b.element).each(function(a, c) {
                        c = d(c);
                        var e = c.attr("type");
                        if ("button" == e || "submit" == e || "reset" == e)
                            return !0;
                        var f = {};
                        if (f.element = "radio" == e || "checkbox" == e ? d("[type=" + e + "][name=" + c.attr("name") + "]", b.element) : c,
                                !b.query(f.element)) {
                            var h = g.parseDom(c);
                            if (!h.rule)
                                return !0;
                            d.extend(f, h),
                                b.addItem(f)
                        }
                    })
                },
                query: function(a) {
                    return f.query(a)
                },
                validate: function(a) {
                    var b = d(a.element)
                        , c = new m({
                        element: b.parents()
                    });
                    c.addItem(a),
                        c.query(b).execute(),
                        c.destroy()
                }
            }),
            addItem: function(a) {
                var b = this;
                if (d.isArray(a))
                    return d.each(a, function(a, c) {
                        b.addItem(c)
                    }),
                        this;
                if (a = d.extend({
                        triggerType: this.get("triggerType"),
                        checkNull: this.get("checkNull"),
                        displayHelper: this.get("displayHelper"),
                        showMessage: this.get("showMessage"),
                        hideMessage: this.get("hideMessage"),
                        failSilently: this.get("failSilently"),
                        skipHidden: this.get("skipHidden")
                    }, a),
                    0 == d(a.element).length) {
                    if (a.failSilently)
                        return this;
                    throw new Error("element does not exist")
                }
                var c = new h(a);
                this.items.push(c),
                    c.set("_handler", function(a) {
                        (c.get("checkNull") || c.element.val()) && c.execute(null, {
                            event: a
                        })
                    });
                var e = c.get("triggerType");
                return e && this.element.on(e, "[" + n + "=" + o(c) + "]", c.get("_handler")),
                    c.on("all", function() {
                        this.trigger.apply(this, [].slice.call(arguments))
                    }, this),
                    this
            },
            removeItem: function(a) {
                var f, b = a instanceof h ? a.element : d(a), e = (this.items,
                    this);
                return d.each(this.items, function(a, c) {
                    return b.get(0) == c.element.get(0) ? (f = a,
                            c.get("hideMessage").call(e, null, c.element),
                            e.element.off(c.get("triggerType"), "[" + n + "=" + o(c) + "]", c.get("_handler")),
                            c.destroy(),
                            !1) : void 0
                }),
                void 0 !== f && this.items.splice(f, 1),
                    this
            },
            execute: function(a) {
                var b = this;
                this.trigger("formValidate", this.element);
                var c = function() {
                    var c = null;
                    d.each(f, function(a, b) {
                        return c = Boolean(b[0]),
                            !c
                    }),
                        b.trigger("formValidated", Boolean(c), f, b.element),
                    a && a(Boolean(c), f, b.element)
                }
                    , f = [];
                return this.get("stopOnError") ? e.forEachSeries(this.items, function(a, b) {
                        a.execute(function(a) {
                            f.push([].slice.call(arguments, 0)),
                                b(a)
                        })
                    }, c) : e.forEach(this.items, function(a, b) {
                        a.execute(function() {
                            f.push([].slice.call(arguments, 0)),
                                b(null)
                        })
                    }, c),
                    this
            },
            destroy: function() {
                k && (void 0 == l ? this.element.removeAttr("novalidate") : this.element.attr("novalidate", l),
                    this.element.unbind("submit"));
                var a = this;
                d.each(this.items, function(b, c) {
                    a.removeItem(c)
                });
                var b;
                d.each(i, function(a, c) {
                    return c == this ? (b = a,
                            !1) : void 0
                }),
                    i.splice(b, 1),
                    m.superclass.destroy.call(this)
            },
            query: function(a) {
                var b = f.query(a)
                    , c = null;
                return d.each(this.items, function(a, d) {
                    return d === b ? (c = b,
                            !1) : void 0
                }),
                    c
            }
        }), n = "data-validator-set";
        c.exports = m
    }),
    define("js/base/layout", [], function(require, exports, module) {
        var Events = Backbone.Events
            , slice = Array.prototype.slice
            , Layout = function(opts) {
            opts = _.extend({
                sections: {}
            }, opts),
                this.sections = opts.sections || {},
                this.loadings = {},
                this.inited = !1
        };
        Layout.prototype = {
            init: function() {
                var me = this;
                this.inited || ($(".footer").hide(),
                    me.trigger("beforeInit"),
                    JDJR.tpl.event.on("switched", me._switch, me),
                    me.trigger("afterInit"),
                    me.on("mounted", function() {
                        $(".footer").show()
                    }),
                    me.inited = !0,
                    delete me.stopRender)
            },
            _render: function(tplEl) {
                var me = this
                    , sections = me.sections;
                me.count = 0,
                    me.renderedCount = 0,
                    _.each(sections, function(section, name) {
                        var $section = section.$el;
                        _.isString($section) && ($section = tplEl.find($section)),
                            _.each(section.modules, function(module) {
                                var opts = _.extend({}, (_.isFunction(module.options) ? module.options() : module.options) || {});
                                if (!module.ins)
                                    if (module.wrapper instanceof jQuery)
                                        opts.wrapper = module.wrapper;
                                    else {
                                        var attrs = [];
                                        _.each(module.wrapper, function(val, key) {
                                            attrs.push(key + '="' + val + '"')
                                        });
                                        var loader = '<div class="loader-inner ball-spin-fade-loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
                                        opts.wrapper = $("<div " + attrs.join(" ") + '><div class="loading">' + loader + "</div></div>").hide().appendTo($section)
                                    }
                                module.filter && module.filter.call(module, function(flag) {
                                    if (flag && me.count++,
                                        arguments.length > 1) {
                                        var args = [$section, module, opts].concat(slice.call(arguments));
                                        me.loadMod.apply(me, args)
                                    } else
                                        me.loadMod($section, module, opts, flag)
                                })
                            })
                    })
            },
            _switch: function(tplName, tplEl) {
                if (tplName == this.tplName) {
                    var enter = this.enter;
                    this.enter = !0,
                        this._render(tplEl),
                    enter || this.trigger("enter", tplName, tplEl)
                } else
                    this.isCached || this.destroy(),
                        this.enter = !1,
                        this.trigger("leave", tplName, tplEl)
            },
            destroyMod: function(mod) {
                try {
                    mod.off && mod.off(),
                    mod.destroy && mod.destroy(),
                    mod.$el && (mod.$el.off(),
                        mod.$el.remove())
                } catch (e) {
                    if (PUBLISH_MODEL && "development" == PUBLISH_MODEL)
                        throw e
                }
            },
            increaseRendered: function() {
                var me = this;
                me.renderedCount++,
                me.renderedCount == me.count && me.trigger("mounted")
            },
            loadMod: function($section, module, opts, flag) {
                var me = this
                    , ins = module.ins
                    , args = slice.call(arguments, 4);
                if (me.loadings[module.module] ? me.loadings[module.module]++ : me.loadings[module.module] = 1,
                        flag)
                    if (ins)
                        module.$el.show(),
                        ins.setOptions && ins.setOptions(opts),
                            ins.render.apply(ins, args),
                            me.increaseRendered();
                    else {
                        opts.mediator = me;
                        var num = me.loadings[module.module]
                            , $wrapper = opts.wrapper;
                        require.async([module.module], function(Mod) {
                            if (me.increaseRendered(),
                                Mod && num == me.loadings[module.module] && me.enter) {
                                opts.wrapper.show();
                                var mod = new Mod(opts);
                                module.name && mod.on("all", function(eventName) {
                                    var _args = slice.call(arguments, 1);
                                    _args.unshift([module.name, eventName].join(".")),
                                        me.trigger.apply(me, _args);
                                    var _allArgs = slice.call(arguments, 0);
                                    _allArgs.unshift([module.name, "all"].join(".")),
                                        me.trigger.apply(me, _allArgs)
                                }),
                                    module.$el = opts.wrapper,
                                    module.ins = mod,
                                    mod.render.apply(mod, args),
                                    mod.rendered = !0
                            } else
                                $wrapper.remove()
                        })
                    }
                else
                    ins ? module.isCached ? (ins.hide && ins.hide(),
                                module.$el.hide()) : (me.destroyMod(ins),
                                delete module.ins) : (opts.wrapper.remove(),
                            delete module.$el)
            },
            destroy: function() {
                var me = this;
                me.trigger("beforeDestroy"),
                    JDJR.tpl.event.off("switched", me._switch, me),
                    _.each(me.sections, function(section, name) {
                        _.each(section.modules, function(mod) {
                            var ins = mod.ins;
                            ins && (me.destroyMod(ins),
                                delete mod.ins)
                        })
                    }),
                    this.inited = !1,
                    me.trigger("afterDestroy"),
                    me.off()
            }
        },
            _.extend(Layout.prototype, Events),
            module.exports = Layout
    }),
    define("js/base/util", [], function(require, exports, module) {
        var JDJR = window.JDJR
            , placeholder = require("base-placeholder")
            , _appStore = {}
            , templateHelper = {}
            , Dialog = require("dialog")
            , root = window
            , JDJR = root.JDJR
            , tpl = JDJR.tpl
            , store = tpl.store
            , util = {
            menuConvert: function(menu) {
                var newMenu = {}
                    , cycleFunc = function(item, obj) {
                    var newItem = {};
                    return newItem.allLinks = {},
                    item.menus && item.menus.length > 0 && (item.items = _.map(item.menus, function(menu) {
                        menu.url && (obj[menu.url] = {
                            url: menu.url
                        });
                        var new_menu = cycleFunc(menu, newItem.allLinks);
                        return _.each(newItem.allLinks, function(link) {
                            obj[link] = {
                                url: link
                            }
                        }),
                            new_menu
                    })),
                        newItem.linkUrl = item.items && item.items[0].linkUrl || item.url || "",
                        newItem.allLinks[newItem.linkUrl] = {
                            url: newItem.linkUrl
                        },
                        newItem.title = item.name,
                        newItem.items = item.items,
                        newItem.id = item.id,
                        _.each(obj, function(item1) {
                            _.each(newItem.items, function(item2) {
                                item.code && 3 == item.code.length && item1.url == item2.linkUrl && (item1.parentUrl = newItem.linkUrl),
                                    newItem.allLinks[item2.linkUrl] = {
                                        url: item2.linkUrl
                                    }
                            })
                        }),
                        newItem
                }
                    , arr = {};
                return newMenu = cycleFunc(menu, arr),
                    newMenu.allLinks = arr,
                    newMenu
            },
            dataConvert: function(data) {
                var arr = [];
                return _.each(data, function(value, key) {
                    arr.push(key + "=" + value)
                }),
                    arr.join("&")
            },
            formatCurrency: function(s) {
                if (!/^(-?\d+)(\.\d*)?$/.test(s))
                    return "invalid value";
                if (s = Number(s),
                        0 > s ? sign = "-" : sign = "",
                        s = Math.abs(s),
                        /^\d+$/.test(s))
                    return sign + (s + "").replace(/\B(?=(\d{3})+$)/g, ",") + ".00";
                if (/^(\d+)\.(\d+)$/.test(s)) {
                    s += "0";
                    var v = s.split(".")
                        , f = (v[0] + "").replace(/\B(?=(\d{3})+$)/g, ",")
                        , h = v[1].substring(0, 2);
                    return sign + f + "." + h
                }
            },
            escapeRegExp: function(str) {
                return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            },
            parseUrl: function(url) {
                try {
                    var result = {}
                        , anchor = document.createElement("a");
                    return anchor.href = url || "",
                        _.each(["hash", "host", "hostname", "href", "origin", "pathname", "port", "protocol", "search"], function(i) {
                            result[i] = anchor[i]
                        }),
                    result.origin || (result.origin = [result.protocol, "//", result.hostname].join("")),
                        anchor = null,
                        result
                } catch (e) {}
                return {}
            },
            setAppStore: function(key, value) {
                _.isObject(_appStore[key]) ? _.extend(_appStore[key], value) : _appStore[key] = value
            },
            getAppStore: function(key) {
                return _.isObject(_appStore[key]) ? _.clone(_appStore[key]) : _appStore[key]
            },
            noAuthCount: 0,
            api: function(opts, cusOpts) {
                cusOpts = _.extend({
                    autoPrependPath: !0
                }, cusOpts),
                cusOpts.autoPrependPath && (opts.url = JDJR.API_PATH + opts.url),
                    opts.url += /\?/.test(opts.url) ? "&" : "?",
                    opts.url += "traceId=" + +new Date,
                    opts = _.extend({
                        type: "POST",
                        dataType: "json",
                        timeout: 35e3,
                        contentType: "application/x-www-form-urlencoded"
                    }, opts);
                var xhrDeferred = $.ajax(opts);
                return xhrDeferred.always(function(responseData, textStatus) {
                    responseData = responseData || {},
                    "success" == textStatus && (40 == responseData.statusCode || 801 == responseData.statusCode || 1002 == responseData.code) && JDJR.MEDIATOR.trigger("sessionTimeout")
                }),
                    xhrDeferred
            },
            getResponseData: function(jqXhr, opts) {
                var responseData;
                return responseData = 200 == jqXhr.status ? "json" == opts.dataType && jqXhr.responseText ? JSON.parse(jqXhr.responseText) : {
                            success: !0,
                            message: "success",
                            value: jqXhr.responseText
                        } : {
                        success: !1,
                        errorStatus: jqXhr.status,
                        message: jqXhr.statusText
                    }
            },
            uuid: function() {
                var __id = +new Date;
                return function() {
                    return ++__id
                }
            }(),
            getTplStore: function(tplName, key) {
                return store[tplName] ? store[tplName][key] : void 0
            },
            setTplStore: function(tplName, data) {
                return store[tplName] = store[tplName] || {},
                    _.extend(store[tplName], data)
            },
            clearTplStore: function(tplName, key) {
                var tplStore = store[tplName] || {};
                key ? (tplStore[key] = null,
                        store[tplName] = tplStore) : store[tplName] = null
            },
            tplRouterReg: function() {
                var list = tpl.list
                    , validCounter = 0
                    , NavRouter = Backbone.Router.extend({
                    routes: {
                        "": "blank"
                    },
                    blank: function() {
                        navTo("home/home.html", "home", !0)
                    }
                })
                    , navRouter = new NavRouter;
                tpl.navRouter = navRouter,
                    tpl.event = new Events;
                var lastRoute, tplPreproccess = function(tplEl, tplName) {
                    placeholder($("input,textarea", tplEl))
                }, tplClear = function(tplName) {
                    util.clearTplStore(tplName)
                }, activeTpl = function(tplName, tplSelector, tplPath) {
                    var tplEl = $(tplSelector);
                    tplEl.attr("tpltitle") || JDJR.pageTitle || "";
                    tpl.event.trigger("switch", tplName, tplEl),
                        tplEl.addClass("jdjr-tpl-active").show(),
                        Dialog.hideAll(":not(.fixed-in-tpl-switch)"),
                        $(".ui-select").each(function() {
                            Widget.query(this).hide()
                        }),
                        $(root).resize(),
                        $(root).scrollTop(0).trigger("scroll"),
                        tpl.event.trigger("switched", tplName, tplEl)
                }, lastTplPath = "", lastNavName = "", lastHash = "", navTo = function(tplPath, navName, flag) {
                    function funcSwitch() {
                        lastHash = location.hash;
                        var subTplEl = $("#sub-tpl")
                            , subTplMaskEl = $(".sub-tpl-switch-mask", subTplEl)
                            , tplEvent = tpl.event
                            , moduleTplsPath = "tpls";
                        0 == subTplMaskEl.length && (subTplMaskEl = $('<div class="sub-tpl-switch-mask"></div>'),
                            subTplMaskEl.css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                "z-index": 20
                            }).hide().appendTo(subTplEl));
                        var _curTplPath = tplPath;
                        if (_.each(list, function(item, tplName2) {
                                var elEl = item.el
                                    , isCached = item.isCached;
                                isCached || _curTplPath == item.tplPath && flag ? elEl.removeClass("jdjr-tpl-active").hide() : tplEvent.trigger("beforeremove" + tplName2, tplName2, elEl) && (elEl && elEl.off() && elEl.removeData() && elEl.remove(),
                                        tplClear(tplName2),
                                        item.el = null,
                                        tplEvent.trigger("afterremove", tplName2, elEl),
                                        delete list[tplName2])
                            }),
                                lastTplPath = _curTplPath,
                                lastNavName = navName,
                                subTplMaskEl.show(),
                                validCounter++,
                            list[navName] && (list[navName].isCached || list[navName].tplPath == lastTplPath))
                            return activeTpl(navName, list[navName].el, tplPath),
                                void subTplMaskEl.hide();
                        var selfValidCounter = validCounter;
                        require.async([moduleTplsPath + "/" + tplPath], function(result) {
                            if (selfValidCounter == validCounter) {
                                var tplPartPaths, tpl = _.template(result, {}, {
                                    evaluate: /##([\s\S]+?)##/g,
                                    interpolate: /\{\{~(.+?)~\}\}/g,
                                    escape: /\{\{\{\{~-([\s\S]+?)~\}\}\}\}/g
                                }), tplEl = $(tpl), tplName = tplEl.attr("tplname"), js = tplEl.attr("js"), isCached = tplEl.attr("iscached"), interceptSwitch = tplEl.attr("interceptSwitch"), deps = [];
                                _.each(list, function(item) {
                                    item.el && item.el.removeClass("jdjr-tpl-active").hide()
                                }),
                                    list[tplName] = {
                                        tplPath: _curTplPath,
                                        el: tplEl,
                                        isCached: "true" === isCached,
                                        navName: navName,
                                        tplName: tplName,
                                        interceptSwitch: "true" === interceptSwitch
                                    },
                                    tplEl.appendTo(subTplEl),
                                    tplPreproccess(tplEl, tplName),
                                    tplPartPaths = tplName.split("-"),
                                (_.isUndefined(js) || "true" === js) && (js = [mod, "tpls", tplPartPaths.join("/"), tplPartPaths[tplPartPaths.length - 1] + ".js"].join("/")),
                                "false" !== js && deps.push(js),
                                    deps.length > 0 ? require.async(deps, function(js) {
                                            if (js.tplName = tplName,
                                                    js.tplEl = tplEl,
                                                    js.isCached = "true" === isCached,
                                                "development" == publishModel)
                                                js.init();
                                            else
                                                try {
                                                    js.init()
                                                } catch (e) {}
                                            selfValidCounter == validCounter && (activeTpl(tplName, tplEl, tplPath),
                                                subTplMaskEl.hide())
                                        }) : (activeTpl(tplName, tplEl, tplPath),
                                            subTplMaskEl.hide())
                            }
                        })
                    }
                    tpl.event.trigger("beforeswitch");
                    var item = _.find(list, function(obj) {
                        return obj.navName == lastNavName && obj.interceptSwitch
                    });
                    item ? tpl.event.trigger("beforeswitch" + item.tplName, navName, function(switchFlag) {
                            switchFlag ? funcSwitch() : tpl.navRouter.navigate(lastHash, {
                                    trigger: !1
                                })
                        }) : funcSwitch()
                };
                return function(tplNavSelector, opts) {
                    opts = opts || {};
                    var tplNavEl;
                    tplNavEl = "#" == tplNavSelector.slice(0, 1) ? $('<a href="' + tplNavSelector + '"></a>') : $(tplNavSelector),
                        tplNavEl.each(function() {
                            var tempHref, routerPath, routerAttr, meEl = $(this), href = meEl.attr("href"), tplPath = "#", navName = meEl.attr("navname");
                            href = href.toLowerCase(),
                                meEl.attr("href", href),
                                href = href.slice(href.indexOf("#") + 1),
                                routerAttr = meEl.attr("router"),
                                routerPath = (routerAttr ? routerAttr.slice(1) : "") || href,
                            -1 !== href.indexOf("!") && (href = href.slice(0, href.indexOf("!"))),
                                tempHref = href.split("/"),
                                _.isUndefined(navName) ? navName = tempHref.join("-") : (navName = navName.toLowerCase(),
                                        meEl.attr("navname", navName)),
                                tempHref[tempHref.length] = tempHref[tempHref.length - 1] + ".html",
                                opts.layout ? (tplPath = opts.layout,
                                        navName = [opts.layout.match(/^[^\/\.]+/)].join("-")) : tplPath = tempHref.join("/"),
                                navRouter.route(routerPath, navName, function() {
                                    if (_.indexOf(JDJR.routeFilters.filters, href) < 0)
                                        lastRoute = routerPath,
                                            lastHash = window.location.hash,
                                            navTo(tplPath, navName, opts.useLayoutClass);
                                    else {
                                        var shouldStopNav = JDJR.routeFilters.filterCallback(lastRoute, lastHash);
                                        shouldStopNav || navTo(tplPath, navName, opts.useLayoutClass)
                                    }
                                })
                        })
                }
            }(),
            asyncOrder: function(paths, callback) {
                var i = 0
                    , rvs = [];
                paths = [].concat(paths);
                var circleFn = function() {
                    require.async(paths[i], function(rv) {
                        i == paths.length - 1 ? callback(rvs) : (i++,
                                circleFn()),
                            rvs.push(rv)
                    })
                };
                circleFn()
            },
            getFileType: function(file, fullTest, moreType) {
                var fileType = "common"
                    , fileName = file.name.toLowerCase();
                return /\.(?:tif|eps|png|gif|jpeg|jpg|dwg|ai|cdr|bmp)$/.test(fileName) ? fileType = "jpg" : /\.(?:doc|docx)$/.test(fileName) ? fileType = "doc" : /\.(?:pdf)$/.test(fileName) ? fileType = "pdf" : /\.(?:rar)$/.test(fileName) ? fileType = "rar" : /\.(?:xls|xlsx|csv)$/.test(fileName) ? fileType = "xls" : /\.(?:zip)$/.test(fileName) ? fileType = "zip" : /\.(?:7z)$/.test(fileName) ? fileType = "zip" : /\.(?:ppt|pptx)$/.test(fileName) ? fileType = "ppt" : /\.(?:txt)$/.test(fileName) ? fileType = "txt" : /\.(?:rm|rmvb|swf|avi|mov|wmv|mp4|mpg|mpeg|flv)$/.test(fileName) ? fileType = "mov" : /\.(?:wav|mp3|acm|aif|aifc|aiff|au|amr)$/.test(fileName) && (fileType = "mp3"),
                fullTest && (/\.(?:png)$/.test(fileName) ? fileType = "png" : /\.(?:gif)$/.test(fileName) && (fileType = "gif")),
                moreType && (/\.(?:bmp)$/.test(fileName) ? fileType = "bmp" : /\.(?:html)$/.test(fileName) ? fileType = "html" : /\.(?:exe)$/.test(fileName) ? fileType = "exe" : /\.(?:apk)$/.test(fileName) ? fileType = "apk" : /\.(?:dmg)$/.test(fileName) ? fileType = "dmg" : /\.(?:app)$/.test(fileName) ? fileType = "app" : /\.(?:msi)$/.test(fileName) ? fileType = "msi" : /\.(?:psd)$/.test(fileName) ? fileType = "psd" : /\.(?:docx)$/.test(fileName) ? fileType = "docx" : /\.(?:xlsx)$/.test(fileName) ? fileType = "xlsx" : /\.(?:pptx)$/.test(fileName) ? fileType = "pptx" : /\.(?:mp3)$/.test(fileName) ? fileType = "mp3" : /\.(?:mp4)$/.test(fileName) && (fileType = "mp4")),
                    fileType
            },
            getFileSize: function(byteSize) {
                var v = 0
                    , unit = "BYTE";
                return byteSize > 1073741824 ? (v = (byteSize / 1073741824).toFixed(0),
                        unit = "GB") : byteSize > 1048576 ? (v = (byteSize / 1048576).toFixed(0),
                            unit = "MB") : byteSize > 1024 ? (v = (byteSize / 1024).toFixed(0),
                                unit = "KB") : (v = byteSize,
                                unit = "B"),
                v + unit
            },
            setInputFocusOne: function(inputSelector) {
                var inputEl = $(inputSelector);
                inputEl.hasClass("fs-input-focus") || inputEl.get(0).focus()
            },
            getCursorPosition: function(textarea) {
                var rangeData = {
                    text: "",
                    start: 0,
                    end: 0
                };
                if (util.setInputFocusOne(textarea),
                        textarea.setSelectionRange)
                    rangeData.start = textarea.selectionStart,
                        rangeData.end = textarea.selectionEnd,
                        rangeData.text = rangeData.start != rangeData.end ? textarea.value.substring(rangeData.start, rangeData.end) : "";
                else if (document.selection) {
                    var i, oS = document.selection.createRange(), oR = document.body.createTextRange();
                    for (oR.moveToElementText(textarea),
                             rangeData.text = oS.text,
                             rangeData.bookmark = oS.getBookmark(),
                             i = 0; oR.compareEndPoints("StartToStart", oS) < 0 && 0 !== oS.moveStart("character", -1); i++)
                        "\n" == textarea.value.charAt(i) && i++;
                    rangeData.start = i,
                        rangeData.end = rangeData.text.length + rangeData.start
                }
                return rangeData
            },
            setCursorPosition: function(textarea, rangeData) {
                var start, end;
                if (!rangeData)
                    return alert("You must get cursor position first."),
                        !1;
                if (start = rangeData.start,
                        end = rangeData.end,
                        textarea.setSelectionRange)
                    util.setInputFocusOne(textarea),
                        textarea.setSelectionRange(start, end);
                else if (textarea.createTextRange) {
                    var breakPos, i, oR = textarea.createTextRange();
                    for (breakPos = start,
                             i = 0; breakPos > i; i++)
                        -1 != textarea.value.charAt(i).search(/[\r\n]/) && (start -= .5);
                    for (breakPos = end,
                             i = 0; breakPos > i; i++)
                        -1 != textarea.value.charAt(i).search(/[\r\n]/) && (end -= .5);
                    oR.moveEnd("textedit", -1),
                        oR.moveStart("character", start),
                        oR.moveEnd("character", end - start),
                        oR.select()
                }
            },
            appendInput: function(inputSelector, text) {
                var inputEl = $(inputSelector)
                    , inputDom = inputEl.get(0)
                    , val = inputEl.val()
                    , rangeData = util.getCursorPosition(inputDom);
                inputEl.val(val.slice(0, rangeData.start) + text + val.slice(rangeData.end)),
                    util.setCursorPosition(inputDom, _.extend(rangeData, {
                        start: rangeData.start + text.length,
                        end: rangeData.start + text.length
                    }))
            },
            setCursorPositionEnd: function(inputSelector) {
                var inputEl = $(inputSelector)
                    , val = inputEl.val()
                    , rangeData = util.getCursorPosition(inputEl.get(0));
                inputEl.get(0).focus(),
                    util.setCursorPosition(inputEl.get(0), _.extend(rangeData, {
                        start: val.length,
                        end: val.length
                    }))
            },
            toggleAnimate: function(opts) {
                var animateOpts = ($(opts.element),
                    opts.startProperty,
                    opts.endProperty,
                    _.extend({
                        easing: "swing",
                        duration: 400
                    }, opts.animateOpts || {}));
                opts.count,
                animateOpts.complete || JDJR.EMPTY_FN
            },
            showInputError: function(elSelector) {
                util.toggleAnimate({
                    element: $(elSelector),
                    startProperty: {
                        backgroundColor: "#ff0000",
                        opacity: .33
                    },
                    endProperty: {
                        backgroundColor: "white",
                        opacity: 1
                    },
                    animateOpts: {
                        easing: "swing",
                        duration: 130
                    },
                    count: 2
                })
            },
            getAttachTypeName: function(fileInfos) {
                var attachTypeNames = [];
                return _.each(fileInfos, function(fileInfo) {
                    2 == fileInfo.value ? _.find(attachTypeNames, function(attachTypeName) {
                            return "图片" == attachTypeName
                        }) || attachTypeNames.push("图片") : 3 == fileInfo.value ? _.find(attachTypeNames, function(attachTypeName) {
                                return "附件" == attachTypeName
                            }) || attachTypeNames.push("附件") : 1 == fileInfo.value && (_.find(attachTypeNames, function(attachTypeName) {
                                return "录音" == attachTypeName
                            }) || attachTypeNames.push("录音"))
                }),
                    attachTypeNames
            },
            getDateSummaryDesc: function(dateObj, baseDate, type) {
                var diffValue;
                return _.isUndefined(type) && (type = baseDate,
                    baseDate = moment()),
                    dateObj = moment(dateObj),
                    baseDate = moment(baseDate),
                    1 == type ? (diffValue = parseInt(baseDate.diff(dateObj, "seconds")),
                            60 > diffValue ? 10 > diffValue ? "几秒前" : diffValue + "秒前" : (diffValue = parseInt(baseDate.diff(dateObj, "minutes")),
                                    60 > diffValue ? 1 == diffValue ? "1分钟前" : diffValue + "分钟前" : (diffValue = parseInt(moment(baseDate).startOf("day").diff(moment(dateObj).startOf("day"), "days")),
                                            0 == diffValue ? "今天 " + dateObj.format("HH:mm") : 1 == diffValue ? "昨天 " + dateObj.format("HH:mm") : (diffValue = parseInt(moment(baseDate).startOf("year").diff(moment(dateObj).startOf("year"), "years")),
                                                        0 == diffValue ? dateObj.format("MM月DD日 HH:mm") : dateObj.format("YYYY年MM月DD日 HH:mm"))))) : 2 == type ? (diffValue = parseInt(moment(baseDate).startOf("day").diff(moment(dateObj).startOf("day"), "days")),
                                0 == diffValue ? "今天 " + dateObj.format("HH:mm") : -1 == diffValue ? "明天 " + dateObj.format("HH:mm") : -2 == diffValue ? "后天 " + dateObj.format("HH:mm") : 1 == diffValue ? "昨天 " + dateObj.format("HH:mm") : 2 == diffValue ? "前天 " + dateObj.format("HH:mm") : (diffValue = parseInt(moment(baseDate).startOf("year").diff(moment(dateObj).startOf("year"), "years")),
                                                        0 == diffValue ? dateObj.format("MM月DD日 HH:mm") : dateObj.format("YYYY年MM月DD日 HH:mm"))) : 3 == type ? (diffValue = parseInt(baseDate.diff(dateObj, "seconds")),
                                    60 > diffValue ? 10 > diffValue ? "几秒前" : diffValue + "秒前" : (diffValue = parseInt(baseDate.diff(dateObj, "minutes")),
                                            60 > diffValue ? 1 == diffValue ? "1分钟前" : diffValue + "分钟前" : (diffValue = parseInt(moment(baseDate).startOf("day").diff(moment(dateObj).startOf("day"), "days")),
                                                    0 == diffValue ? "今天 " + dateObj.format("HH:mm") : 1 == diffValue ? "昨天 " + dateObj.format("HH:mm") : (diffValue = parseInt(moment(baseDate).startOf("year").diff(moment(dateObj).startOf("year"), "years")),
                                                                0 == diffValue ? dateObj.format("MM月DD日") : dateObj.format("YYYY年MM月DD日"))))) : void 0
            },
            getFileExtText: function(fileName) {
                var extText, extIndex = fileName.lastIndexOf(".");
                return extText = -1 == extIndex ? "" : fileName.slice(extIndex + 1)
            },
            getFileNamePath: function(fileName) {
                var fileNamePath, extIndex = fileName.lastIndexOf(".");
                return fileNamePath = -1 == extIndex ? fileName : fileName.slice(0, extIndex)
            },
            getUploadType: function(fileName) {
                var uploadType = "";
                return uploadType = /\.(?:jpg|jpeg|png|bmp|gif)$/i.test(fileName) ? "img" : "attach"
            },
            mix: function(receiver, supplier) {
                var key, args = Array.apply([], arguments), i = 1, ride = "boolean" == typeof args[args.length - 1] ? args.pop() : !0;
                for (1 === args.length && (receiver = this.window ? {} : this,
                    i = 0); supplier = args[i++]; )
                    for (key in supplier)
                        !supplier.hasOwnProperty(key) || !ride && key in receiver || (receiver[key] = supplier[key]);
                return receiver
            },
            check: {
                _reg: {
                    phoneReg: /^1[0-9]{10}$/,
                    mailReg: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+[\.][a-zA-Z0-9_-]+$/,
                    passwordReg: /^[a-zA-Z0-9]{6,10}$/
                },
                checkPhone: function(str) {
                    return this._reg.phoneReg.test(str)
                },
                checkMail: function(str) {
                    return this._reg.mailReg.test(str)
                },
                checkPassword: function(str) {
                    return this._reg.passwordReg.test(str)
                }
            },
            queryToJson: function(query) {
                for (var r = {}, t = query.split("&"), i = 0; i < t.length; i++)
                    if (t[i]) {
                        var _t = t[i].split("=");
                        _t.length >= 1 && (r[_t[0]] = _t[1] || null)
                    }
                return r
            },
            jsonToQuery: function(c, e) {
                var d, a = [];
                return $.each(c, function(f, g) {
                    if ($.isArray(g))
                        for (d = g.length; d--; )
                            a.push(f + "=" + encodeURIComponent(g[d]));
                    else
                        a.push(f + "=" + encodeURIComponent(g))
                }),
                    a.join("&")
            },
            isSupportH5: function() {
                var xhr, isPassed = !0;
                return window.XMLHttpRequest ? (xhr = new XMLHttpRequest,
                        isPassed = !(!xhr.upload || !xhr.addEventListener)) : isPassed = !1,
                    isPassed
            },
            _convertStringToUnicodeCodePoints: function(str) {
                for (var surrogate1st = 0, unicodeCodes = [], i = 0, l = str.length; l > i; i++) {
                    var utf16Code = str.charCodeAt(i);
                    if (0 != surrogate1st) {
                        if (utf16Code >= 56320 && 57343 >= utf16Code) {
                            var surrogate2nd = utf16Code
                                , unicodeCode = 1024 * (surrogate1st - 55296) + 65536 + (surrogate2nd - 56320);
                            unicodeCodes.push(unicodeCode)
                        }
                        surrogate1st = 0
                    } else
                        utf16Code >= 55296 && 56319 >= utf16Code ? surrogate1st = utf16Code : unicodeCodes.push(utf16Code)
                }
                return unicodeCodes
            },
            _escapeToUtf32: function(str) {
                for (var hex, escaped = [], excludeHex = ["fe0f", "20e3", "1f3fb", "1f3fc", "1f3fd", "1f3fe", "1f3ff"], unicodeCodes = util._convertStringToUnicodeCodePoints(str), i = 0, l = unicodeCodes.length; l > i; i++)
                    hex = unicodeCodes[i].toString(16),
                    excludeHex.indexOf(hex) < 0 && escaped.push("0000".substr(hex.length) + hex);
                return escaped.join("_")
            },
            getHighlight: function(k, words) {
                var _reg = new RegExp(k,"g");
                return words.replace(_reg, '<span class="highlight">' + k + "</span>")
            },
            encodeHTML: function(a) {
                return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            },
            decodeHTML: function(a) {
                var b = String(a).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
                return b.replace(/&#([\d]+);/g, function(d, c) {
                    return String.fromCharCode(parseInt(c, 10))
                })
            },
            getTplQueryParams: function(href) {
                href = href || location.href;
                var query, params = null;
                return -1 !== href.indexOf("!") && (query = href.slice(href.indexOf("!") + 1),
                query.length > 0 && (params = {},
                    query = query.split("/"),
                    _.each(query, function(param) {
                        var tempParam = param.split("-");
                        params[tempParam[0]] = decodeURI(param.substring(param.indexOf("-") + 1, param.length))
                    }))),
                    params
            },
            getQueryParams: function(href) {
                var query, params = null;
                return -1 !== href.indexOf("?") && (query = href.slice(href.indexOf("?") + 1),
                query.length > 0 && (params = {},
                    query = query.split("&"),
                    _.each(query, function(param) {
                        var tempParam = param.split("=");
                        params[tempParam[0]] = decodeURIComponent(param.substring(param.indexOf("=") + 1, param.length))
                    }))),
                    params
            },
            getTplsByDomString: function(str, opts) {
                var tpls = {};
                return opts = _.extend({
                    filter: ".j-tpl",
                    name: "data-name"
                }, opts || {}),
                    $(str).filter(opts.filter).each(function() {
                        var $this = $(this)
                            , name = $this.attr(opts.name);
                        if (name) {
                            var fn = _.template($(this).html());
                            tpls[name] = function(data) {
                                return fn(_.extend({}, templateHelper, data))
                            }
                        }
                    }),
                    tpls
            },
            convertBase64UrlToBlob: function(urlData) {
                for (var bytes = window.atob(urlData.split(",")[1]), ab = new ArrayBuffer(bytes.length), ia = new Uint8Array(ab), i = 0; i < bytes.length; i++)
                    ia[i] = bytes.charCodeAt(i);
                return new Blob([ab],{
                    type: "image/png"
                })
            },
            capitalize: function(string) {
                return string ? string.charAt(0).toUpperCase() + string.slice(1) : string
            },
            uncapitalize: function(string) {
                return string ? string.charAt(0).toLowerCase() + string.slice(1) : string
            },
            placeholder: function(elSelector) {
                placeholder(elSelector)
            },
            regGlobalClick: function() {
                var store = [];
                return $("body").on("click", function(evt) {
                    store = _.filter(store, function(config) {
                        var elEl = config.element
                            , handler = config.handler;
                        return $.contains(document.body, elEl.get(0)) ? (handler ? handler(evt) : elEl.hide(),
                                !0) : !1
                    })
                }),
                    function(elSelector, handler) {
                        store.push({
                            element: $(elSelector),
                            handler: handler
                        })
                    }
            }(),
            uid: function(id) {
                return function() {
                    return ++id
                }
            }(+new Date),
            notifier: function(title, message, callback) {
                util.transport("notifier", {
                    title: title,
                    message: message
                }, callback)
            },
            alert: function(message, callback, opts) {
                opts = opts || {};
                var _alert = new Dialog(_.extend({
                    title: "提示"
                }, opts, {
                    width: 500,
                    zIndex: 1e4,
                    content: '<div class="f-g-confirm-wrapper fn-clear"><div class="confirm-message">' + message + '</div><div class="confirm-actions"><span class="confirm" action-type="confirm">确定</span></div></div>'
                }));
                return $("body").append('<div class="b-g-alert-mask"></div>'),
                    _alert.on("confirm", function(evt) {
                        callback && callback(),
                            _alert.hide()
                    }),
                    _alert.on("after:hide", function(evt) {
                        _alert.destroy(),
                            $(".b-g-alert-mask").remove()
                    }),
                    _alert.show(),
                opts.stopPropagation !== !1 && _alert.element.on("click", function() {
                    return !1
                }),
                    _alert
            },
            confirm: function(message, title, callback, opts) {
                opts = opts || {};
                var btnLabel = {
                    confirm: "确定",
                    cancel: "取消"
                };
                opts.btnLabel && (_.extend(btnLabel, opts.btnLabel),
                    delete opts.btnLabel);
                var _confirm = new Dialog(_.extend({}, opts, {
                    content: '<div class="f-g-confirm-wrapper fn-clear"><div class="confirm-message">' + message + '</div><div class="confirm-actions"><span class="confirm" action-type="confirm">' + btnLabel.confirm + '</span><span class="cancel" action-type="cancel">' + btnLabel.cancel + "</span></div></div>",
                    title: title || "提示"
                }));
                return _confirm.on("confirm", callback || function(evt) {}
                ),
                    _confirm.on("cancel", function(evt) {
                        _confirm.hide()
                    }),
                    _confirm.on("hide", function(evt) {
                        _confirm.destroy()
                    }),
                    _confirm.show(),
                opts.stopPropagation !== !1 && _confirm.element.on("click", function() {
                    return !1
                }),
                    _confirm
            },
            dialog: function(content, title, confirm, cancel, opts) {
                opts = opts || {};
                var _confirm = new Dialog(_.extend({}, opts, {
                    content: content,
                    title: title || "操作提示"
                }));
                return _confirm.on("confirm", confirm || function(evt) {}
                ),
                    _confirm.on("cancel", cancel || function(evt) {
                            _confirm.hide()
                        }
                    ),
                    _confirm.on("after:hide", function(evt) {
                        _confirm.destroy()
                    }),
                    _confirm.show(),
                opts.stopPropagation !== !1 && _confirm.element.on("click", function() {
                    return !1
                }),
                    _confirm
            },
            remind: function(remindType, remindText) {
                remindText || (remindText = remindType,
                    remindType = 1),
                    remindType = remindType || 1,
                    remindText = remindText || ["操作成功！", "操作失败！"][remindType - 1];
                var remind = new Dialog({
                    classPrefix: "f-g-remind-dialog-wrapper",
                    zIndex: 3e3,
                    width: "auto",
                    hasMask: !1,
                    content: '<div class="f-g-remind-dialog f-g-remind-dialog-' + remindType + '">' + remindText + "</div>",
                    closeTpl: ""
                });
                remind.show(),
                    setTimeout(function() {
                        remind.hide(),
                            remind.destroy()
                    }, 1500)
            },
            deepClone: function(obj) {
                return obj ? JSON.parse(JSON.stringify(obj)) : obj
            },
            stopPropagation: function(evt, target) {
                evt && evt.stopPropagation(),
                    $("body").trigger("click", {
                        target: target || ""
                    })
            },
            setUrlSearch: function(url, data) {
                var anchor = document.createElement("a");
                return anchor.href = url,
                    anchor.search = util.jsonToQuery(_.extend(util.queryToJson(util.parseUrl(url).search.substr(1) || "") || {}, data || {})),
                    anchor.href
            }
        };
        _.extend(templateHelper, {
            ln2br: function(str, flag) {
                return flag !== !1 && (str = util.encodeHTML(str)),
                    str.replace(/\r\n|\n/g, "<br />")
            }
        });
        var globalHide = function() {
            var klasses = [];
            return {
                registGlobalHide: function(klass) {
                    for (var i = 0; i < klasses.length; i++)
                        if (klasses[i] == klass)
                            return !1;
                    klasses.push(klass)
                },
                triggerGlobalHide: function(from) {
                    for (var i = 0; i < klasses.length; i++) {
                        var klass = klasses[i];
                        !klass || !klass.hideAll || from && from instanceof klass || klass.hideAll()
                    }
                }
            }
        }()
            , util = _.extend({}, util, {
            registGlobalHide: globalHide.registGlobalHide,
            triggerGlobalHide: globalHide.triggerGlobalHide
        });
        JDJR.util = util,
            module.exports = util
    }),
    define("js/base/dialog/dialog", [], function(require, exports, module) {
        var BaseDialog = require("js/base/uilibs/dialog")
            , slice = Array.prototype.slice
            , Dialog = BaseDialog.extend({
            attrs: {
                title: "",
                tilteClass: "",
                content: "",
                contentClass: "",
                classPrefix: "f-g-dialog",
                closeTpl: "<span data-role='close' class='i-app-close'></span>"
            },
            initialize: function(opts) {
                opts = opts || {};
                var me = this
                    , tmpl = _.template('## if (title) { ##<div class="dialog-hd {{titleClass}}">{{title}}</div>## } ##<div class="dialog-bd {{contentClass}}">{<{content}>}</div>');
                me.defaults = _.clone(_.result(me, "attrs") || {}),
                    opts = _.extend(me.defaults, opts),
                    opts.content = tmpl({
                        title: opts.title || void 0 !== opts.title ? opts.title : " ",
                        content: opts.content || "",
                        titleClass: opts.titleClass,
                        contentClass: opts.contentClass
                    });
                var _arguments = slice.call(arguments, 1);
                return _arguments.unshift(opts),
                    Dialog.superclass.initialize.apply(me, _arguments),
                    me.trigger("init", me),
                    me
            },
            events: {
                "click [action-type]": function(evt) {
                    var me = this
                        , _type = $(evt.currentTarget).attr("action-type");
                    _type && me.trigger(_type, evt, me.element.find(".dialog-bd"))
                }
            },
            show: function() {
                return Dialog.superclass.show.apply(this, arguments),
                    this.trigger("show", this.element.find(".dialog-bd")),
                    this
            },
            resetPosition: function() {
                this._setPosition()
            },
            render: function() {
                var flag = this.rendered;
                return Dialog.superclass.render.apply(this, arguments),
                flag || this.trigger("render", this.element.find(".dialog-bd")),
                    this
            }
        });
        module.exports = Dialog
    }),
    function(global) {
        "use strict";
        function addEventListener(elem, event, fn) {
            return elem.addEventListener ? elem.addEventListener(event, fn, !1) : elem.attachEvent ? elem.attachEvent("on" + event, fn) : void 0
        }
        function inArray(arr, item) {
            var i, len;
            for (i = 0,
                     len = arr.length; len > i; i++)
                if (arr[i] === item)
                    return !0;
            return !1
        }
        function moveCaret(elem, index) {
            var range;
            elem.createTextRange ? (range = elem.createTextRange(),
                    range.move("character", index),
                    range.select()) : elem.selectionStart && (elem.focus(),
                    elem.setSelectionRange(index, index))
        }
        function changeType(elem, type) {
            try {
                return elem.type = type,
                    !0
            } catch (e) {
                return !1
            }
        }
        global.Placeholders = {
            Utils: {
                addEventListener: addEventListener,
                inArray: inArray,
                moveCaret: moveCaret,
                changeType: changeType
            }
        }
    }(this),
    function(global) {
        "use strict";
        function noop() {}
        function safeActiveElement() {
            try {
                return document.activeElement
            } catch (err) {}
        }
        function hidePlaceholder(elem, keydownValue) {
            var type, maxLength, valueChanged = !!keydownValue && elem.value !== keydownValue, isPlaceholderValue = elem.value === elem.getAttribute(ATTR_CURRENT_VAL);
            return (valueChanged || isPlaceholderValue) && "true" === elem.getAttribute(ATTR_ACTIVE) ? (elem.removeAttribute(ATTR_ACTIVE),
                    elem.value = elem.value.replace(elem.getAttribute(ATTR_CURRENT_VAL), ""),
                    elem.className = elem.className.replace(classNameRegExp, ""),
                    maxLength = elem.getAttribute(ATTR_MAXLENGTH),
                parseInt(maxLength, 10) >= 0 && (elem.setAttribute("maxLength", maxLength),
                    elem.removeAttribute(ATTR_MAXLENGTH)),
                    type = elem.getAttribute(ATTR_INPUT_TYPE),
                type && (elem.type = type),
                    !0) : !1
        }
        function showPlaceholder(elem) {
            var type, maxLength, val = elem.getAttribute(ATTR_CURRENT_VAL);
            return "" === elem.value && val ? (elem.setAttribute(ATTR_ACTIVE, "true"),
                    elem.value = val,
                    elem.className += " " + placeholderClassName,
                    maxLength = elem.getAttribute(ATTR_MAXLENGTH),
                maxLength || (elem.setAttribute(ATTR_MAXLENGTH, elem.maxLength),
                    elem.removeAttribute("maxLength")),
                    type = elem.getAttribute(ATTR_INPUT_TYPE),
                    type ? elem.type = "text" : "password" === elem.type && Utils.changeType(elem, "text") && elem.setAttribute(ATTR_INPUT_TYPE, "password"),
                    !0) : !1
        }
        function handleElem(node, callback) {
            var handleInputsLength, handleTextareasLength, handleInputs, handleTextareas, elem, len, i;
            if (node && node.getAttribute(ATTR_CURRENT_VAL))
                callback(node);
            else
                for (handleInputs = node ? node.getElementsByTagName("input") : inputs,
                         handleTextareas = node ? node.getElementsByTagName("textarea") : textareas,
                         handleInputsLength = handleInputs ? handleInputs.length : 0,
                         handleTextareasLength = handleTextareas ? handleTextareas.length : 0,
                         i = 0,
                         len = handleInputsLength + handleTextareasLength; len > i; i++)
                    elem = handleInputsLength > i ? handleInputs[i] : handleTextareas[i - handleInputsLength],
                        callback(elem)
        }
        function disablePlaceholders(node) {
            handleElem(node, hidePlaceholder)
        }
        function enablePlaceholders(node) {
            handleElem(node, showPlaceholder)
        }
        function makeFocusHandler(elem) {
            return function() {
                hideOnInput && elem.value === elem.getAttribute(ATTR_CURRENT_VAL) && "true" === elem.getAttribute(ATTR_ACTIVE) ? Utils.moveCaret(elem, 0) : hidePlaceholder(elem)
            }
        }
        function makeBlurHandler(elem) {
            return function() {
                showPlaceholder(elem)
            }
        }
        function makeKeydownHandler(elem) {
            return function(e) {
                return keydownVal = elem.value,
                    "true" === elem.getAttribute(ATTR_ACTIVE) && keydownVal === elem.getAttribute(ATTR_CURRENT_VAL) && Utils.inArray(badKeys, e.keyCode) ? (e.preventDefault && e.preventDefault(),
                            !1) : void 0
            }
        }
        function makeKeyupHandler(elem) {
            return function() {
                hidePlaceholder(elem, keydownVal),
                "" === elem.value && (elem.blur(),
                    Utils.moveCaret(elem, 0))
            }
        }
        function makeClickHandler(elem) {
            return function() {
                elem === safeActiveElement() && elem.value === elem.getAttribute(ATTR_CURRENT_VAL) && "true" === elem.getAttribute(ATTR_ACTIVE) && Utils.moveCaret(elem, 0)
            }
        }
        function makeSubmitHandler(form) {
            return function() {
                disablePlaceholders(form)
            }
        }
        function newElement(elem) {
            elem.form && (form = elem.form,
            "string" == typeof form && (form = document.getElementById(form)),
            form.getAttribute(ATTR_FORM_HANDLED) || (Utils.addEventListener(form, "submit", makeSubmitHandler(form)),
                form.setAttribute(ATTR_FORM_HANDLED, "true"))),
                Utils.addEventListener(elem, "focus", makeFocusHandler(elem)),
                Utils.addEventListener(elem, "blur", makeBlurHandler(elem)),
            hideOnInput && (Utils.addEventListener(elem, "keydown", makeKeydownHandler(elem)),
                Utils.addEventListener(elem, "keyup", makeKeyupHandler(elem)),
                Utils.addEventListener(elem, "click", makeClickHandler(elem))),
                elem.setAttribute(ATTR_EVENTS_BOUND, "true"),
                elem.setAttribute(ATTR_CURRENT_VAL, placeholder),
            (hideOnInput || elem !== safeActiveElement()) && showPlaceholder(elem)
        }
        var inputs, textareas, hideOnInput, liveUpdates, keydownVal, styleElem, styleRules, placeholder, timer, form, elem, len, i, validTypes = ["text", "search", "url", "tel", "email", "password", "number", "textarea"], badKeys = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46], placeholderStyleColor = "#ccc", placeholderClassName = "placeholdersjs", classNameRegExp = new RegExp("(?:^|\\s)" + placeholderClassName + "(?!\\S)"), ATTR_CURRENT_VAL = "data-placeholder-value", ATTR_ACTIVE = "data-placeholder-active", ATTR_INPUT_TYPE = "data-placeholder-type", ATTR_FORM_HANDLED = "data-placeholder-submit", ATTR_EVENTS_BOUND = "data-placeholder-bound", ATTR_OPTION_FOCUS = "data-placeholder-focus", ATTR_OPTION_LIVE = "data-placeholder-live", ATTR_MAXLENGTH = "data-placeholder-maxlength", test = document.createElement("input"), head = document.getElementsByTagName("head")[0], root = document.documentElement, Placeholders = global.Placeholders, Utils = Placeholders.Utils;
        if (Placeholders.nativeSupport = void 0 !== test.placeholder,
                !Placeholders.nativeSupport) {
            for (inputs = document.getElementsByTagName("input"),
                     textareas = document.getElementsByTagName("textarea"),
                     hideOnInput = "false" === root.getAttribute(ATTR_OPTION_FOCUS),
                     liveUpdates = "false" !== root.getAttribute(ATTR_OPTION_LIVE),
                     styleElem = document.createElement("style"),
                     styleElem.type = "text/css",
                     styleRules = document.createTextNode("." + placeholderClassName + " { color:" + placeholderStyleColor + " !important; }"),
                     styleElem.styleSheet ? styleElem.styleSheet.cssText = styleRules.nodeValue : styleElem.appendChild(styleRules),
                     head.insertBefore(styleElem, head.firstChild),
                     i = 0,
                     len = inputs.length + textareas.length; len > i; i++)
                elem = i < inputs.length ? inputs[i] : textareas[i - inputs.length],
                    placeholder = elem.attributes.placeholder,
                placeholder && (placeholder = placeholder.nodeValue,
                placeholder && Utils.inArray(validTypes, elem.type) && newElement(elem));
            timer = setInterval(function() {
                for (i = 0,
                         len = inputs.length + textareas.length; len > i; i++)
                    elem = i < inputs.length ? inputs[i] : textareas[i - inputs.length],
                        placeholder = elem.attributes.placeholder,
                        placeholder ? (placeholder = placeholder.nodeValue,
                            placeholder && Utils.inArray(validTypes, elem.type) && (elem.getAttribute(ATTR_EVENTS_BOUND) || newElement(elem),
                            (placeholder !== elem.getAttribute(ATTR_CURRENT_VAL) || "password" === elem.type && !elem.getAttribute(ATTR_INPUT_TYPE)) && ("password" === elem.type && !elem.getAttribute(ATTR_INPUT_TYPE) && Utils.changeType(elem, "text") && elem.setAttribute(ATTR_INPUT_TYPE, "password"),
                            elem.value === elem.getAttribute(ATTR_CURRENT_VAL) && (elem.value = placeholder),
                                elem.setAttribute(ATTR_CURRENT_VAL, placeholder)))) : elem.getAttribute(ATTR_ACTIVE) && (hidePlaceholder(elem),
                                elem.removeAttribute(ATTR_CURRENT_VAL));
                liveUpdates || clearInterval(timer)
            }, 100)
        }
        Utils.addEventListener(global, "beforeunload", function() {
            Placeholders.disable()
        }),
            Placeholders.disable = Placeholders.nativeSupport ? noop : disablePlaceholders,
            Placeholders.enable = Placeholders.nativeSupport ? noop : enablePlaceholders
    }(this),
    define("js/base/uilibs/placeholder", [], function(require, exports, module) {
        var originalValFn = $.fn.val
            , originalPropFn = $.fn.prop;
        Placeholders.nativeSupport || ($.fn.val = function(val) {
                var originalValue = originalValFn.apply(this, arguments)
                    , placeholder = this.eq(0).data("placeholder-value");
                return void 0 === val && this.eq(0).data("placeholder-active") && originalValue === placeholder ? "" : (this.removeClass("placeholdersjs"),
                        originalValue)
            }
                ,
                $.fn.prop = function(name, val) {
                    return void 0 === val && this.eq(0).data("placeholder-active") && "value" === name ? "" : originalPropFn.apply(this, arguments)
                }
        ),
            module.exports = function() {}
    }),
    define("js/base/uilibs/dialog", [], function(require, exports, module) {
        var dragProxyEl, DialogCore = require("arale-dialog"), Dnd = require("dnd"), mask = require("mask"), EVENT_NS = (require("position"),
            ".dialog"), visibleDiaStore = [];
        $(function() {
            dragProxyEl = $('<div class="ui-dialog-drag-proxy"></div>'),
                dragProxyEl.css({
                    position: "absolute",
                    top: "-10000px",
                    left: "-10000px"
                }).appendTo("body")
        });
        var Dialog = DialogCore.extend({
            attrs: {
                enableDrag: !0,
                visibleWithAnimate: !1,
                hideWithEsc: !1
            },
            _onRenderVisible: function(val) {
                var visibleWithAnimate = this.get("visibleWithAnimate");
                visibleWithAnimate ? val ? this.element.fadeIn(200) : this.element.fadeOut(200) : this.element[val ? "show" : "hide"]()
            },
            _onRenderZIndex: function(val) {
                return this.get("hasMask") && mask.set("zIndex", parseInt(val, 10) - 1),
                    DialogCore.superclass._onRenderZIndex.call(this, val)
            },
            _setupMask: function() {
                this.before("show", function() {
                    this.get("hasMask") && mask.show()
                })
            },
            _setupKeyEvents: function() {
                var that = this
                    , hideWithEsc = this.get("hideWithEsc");
                hideWithEsc && $(document).on("keyup." + EVENT_NS + this.cid, function(e) {
                    27 === e.keyCode && that.get("visible") && that.hide()
                })
            },
            _setPosition: function(align) {
                var result = Dialog.superclass._setPosition.apply(this, arguments);
                return align || (align = this.get("align")),
                "50%" == align.selfXY[0] && "50%" == align.selfXY[1] && "50%" == align.baseXY[0] && "50%" == align.baseXY[1] && this.element.position().top < 0 && this.element.css("top", 0),
                    result
            },
            _setupFocus: function() {
                this.after("show", function() {
                    var autoFocusEl = $(".auto-focus", this.element);
                    autoFocusEl.length > 0 ? autoFocusEl.get(0).focus() : this.element.focus()
                }),
                    this.after("hide", function() {
                        this.activeTrigger && this.activeTrigger.focus()
                    })
            },
            render: function() {
                var result = Dialog.superclass.render.apply(this, arguments);
                return result
            },
            show: function() {
                var result, dragEl, enableDrag = this.get("enableDrag"), elEl = this.element;
                return result = Dialog.superclass.show.apply(this, arguments),
                    visibleDiaStore.push(this),
                    this._setMaskStatus(),
                    dragEl = $(".ui-dialog-title", this.element),
                !this.dnd && dragEl.length > 0 && enableDrag && (this.dnd = new Dnd(elEl,{
                    drag: dragEl,
                    proxy: dragProxyEl,
                    containment: "body"
                }),
                    this.dnd.on("dragstart", function(dataTransfer, dragging) {
                        dragging.width(elEl.width()),
                            dragging.height(elEl.height()),
                            dragEl.click()
                    })),
                    $("textarea", this.element).each(function() {
                        var meEl = $(this)
                            , val = _.str.trim(meEl.val())
                            , placeHolder = meEl.attr("placeholder");
                        val == placeHolder && meEl.val("").trigger("autosize.resize")
                    }),
                    result
            },
            hide: function() {
                var result, that = this;
                return result = Dialog.superclass.hide.apply(this, arguments),
                    visibleDiaStore = _.filter(visibleDiaStore, function(v) {
                        return v !== that
                    }),
                    this._setMaskStatus(),
                    result
            },
            _setMaskStatus: function() {
                var zIndex = -1;
                _.each(visibleDiaStore, function(dialog) {
                    dialog.get("hasMask") && dialog.get("zIndex") > zIndex && (zIndex = dialog.get("zIndex"))
                }),
                    -1 != zIndex ? (mask.set("zIndex", zIndex - 1),
                            mask.show()) : mask.hide()
            },
            destroy: function() {
                var result = Dialog.superclass.destroy.call(this);
                return this.get("trigger") && this.get("trigger").off("click" + EVENT_NS + this.cid),
                    $(document).off("keyup." + EVENT_NS + this.cid),
                this.dnd && this.dnd.destroy(),
                this.element && this.element.remove(),
                    this._setMaskStatus(),
                    clearInterval(this._interval),
                    result
            }
        });
        mask.set("opacity", .3),
            Dialog.hideAll = function(elSelector) {
                elSelector ? _.each(visibleDiaStore, function(dialogItem) {
                        dialogItem.element.is(elSelector) && dialogItem.hide()
                    }) : _.each(visibleDiaStore, function(dialogItem) {
                        dialogItem.hide()
                    })
            }
            ,
            module.exports = Dialog
    }),
    define("js/base/uilibs/dnd", [], function(require, exports, module) {
        function handleEvent(event) {
            switch (event.type) {
                case "mousedown":
                    1 === event.which && (executeDragPre({
                        target: event.target,
                        pageX: event.pageX,
                        pageY: event.pageY
                    }),
                    draggingPre === !0 && event.preventDefault());
                    break;
                case "mousemove":
                    draggingPre === !0 && executeDragStart({
                        pageX: event.pageX,
                        pageY: event.pageY
                    }),
                    null !== dragging && (executeDrag({
                        pageX: event.pageX,
                        pageY: event.pageY
                    }),
                        executeDragEnterLeaveOver(),
                        event.preventDefault());
                    break;
                case "mouseup":
                    null !== dragging ? (dragging.css("cursor", "default"),
                            dragging.focus(),
                            dragging = null,
                            executeDrop(),
                            executeRevert(),
                            obj.trigger("dragend", obj.get("element"), dropping),
                            obj = null,
                            dropping = null) : draggingPre === !0 && (obj.get("proxy").remove(),
                            draggingPre = !1,
                            obj = null);
                    break;
                case "keydown":
                    null !== dragging && 27 === event.which && (dragging.css("cursor", "default"),
                        dragging.focus(),
                        dragging = null,
                        executeRevert(!0),
                        obj.trigger("dragend", obj.get("element"), dropping),
                        obj = null,
                        dropping = null)
            }
        }
        function executeDragPre(event) {
            var dragEl, element = null, proxy = null, proxyParent = null, dnd = null, targetArray = $(event.target).parents().toArray();
            targetArray.unshift(event.target),
                $.each(targetArray, function(index, elem) {
                    if (void 0 !== $(elem).data("dnd")) {
                        if (dnd = $(elem).data("dnd"),
                            dnd === !0)
                            dnd = new Dnd(elem,$(elem).data("config"));
                        else if (dnd === !1)
                            dnd = null;
                        else {
                            if (!(isNaN(parseInt(dnd)) === !1 && parseInt(dnd) > 0))
                                return !0;
                            dnd = dndArray[parseInt(dnd)]
                        }
                        return !1
                    }
                }),
            null !== dnd && dnd.get("disabled") !== !0 && (obj = dnd,
                element = obj.get("element"),
                dragEl = obj.get("drag"),
            (event.target === dragEl[0] || 0 != $(event.target).closest(".draggable").length) && (proxy = obj.get("proxy"),
                proxyParent = obj.get("proxyParent"),
            proxyParent.length <= 0 && (proxyParent = element.parent()),
                proxy.css({
                    position: "absolute",
                    margin: 0,
                    left: 0,
                    top: 0,
                    visibility: "hidden"
                }),
                proxy.appendTo(proxyParent),
                proxy.data("originx", proxy.offset().left),
                proxy.data("originy", proxy.offset().top),
                proxy.data("startPageX", event.pageX),
                proxy.data("startPageY", event.pageY),
                proxy.css({
                    left: element.offset().left - proxy.data("originx"),
                    top: element.offset().top - proxy.data("originy"),
                    width: element.css("width")
                }),
                diffX = event.pageX - element.offset().left,
                diffY = event.pageY - element.offset().top,
                draggingPre = !0))
        }
        function executeDragStart(event) {
            var element = obj.get("element")
                , proxy = obj.get("proxy")
                , visible = obj.get("visible")
                , dragCursor = obj.get("dragCursor")
                , zIndex = obj.get("zIndex")
                , dragIgnore = obj.get("dragIgnore");
            Math.abs(event.pageX - proxy.data("startPageX")) <= dragIgnore && Math.abs(event.pageY - proxy.data("startPageY")) <= dragIgnore || (visible !== !0 && element.css("visibility", "hidden"),
                proxy.css({
                    "z-index": zIndex,
                    visibility: "visible",
                    cursor: dragCursor
                }),
                proxy.focus(),
                dataTransfer = {},
                draggingPre = !1,
                dragging = proxy,
                obj.trigger("dragstart", dataTransfer, dragging, dropping))
        }
        function executeDrag(event) {
            var containment = obj.get("containment")
                , axis = obj.get("axis")
                , xleft = event.pageX - diffX
                , xtop = event.pageY - diffY
                , originx = dragging.data("originx")
                , originy = dragging.data("originy")
                , offset = containment.offset();
            (void 0 === offset || null === offset) && (offset = {
                left: 0,
                top: 0
            }),
            "y" !== axis && (xleft >= offset.left && xleft + dragging.outerWidth() <= offset.left + containment.outerWidth() ? dragging.css("left", xleft - originx) : xleft <= offset.left ? dragging.css("left", offset.left - originx) : dragging.css("left", offset.left + containment.outerWidth() - dragging.outerWidth() - originx)),
            "x" !== axis && (xtop >= offset.top && xtop + dragging.outerHeight() <= offset.top + containment.outerHeight() ? dragging.css("top", xtop - originy) : xtop <= offset.top ? dragging.css("top", offset.top - originy) : dragging.css("top", offset.top + containment.outerHeight() - dragging.outerHeight() - originy)),
                obj.trigger("drag", dragging, dropping)
        }
        function executeDragEnterLeaveOver() {
            var drop = (obj.get("element"),
                obj.get("drop"))
                , dragCursor = obj.get("dragCursor")
                , dropCursor = obj.get("dropCursor")
                , xleft = dragging.offset().left + diffX
                , xtop = dragging.offset().top + diffY;
            null !== drop && (null === dropping ? $.each(drop, function(index, elem) {
                    return isContain(elem, xleft, xtop) === !0 ? (dragging.css("cursor", dropCursor),
                            dragging.focus(),
                            dropping = $(elem),
                            obj.trigger("dragenter", dragging, dropping),
                            !1) : void 0
                }) : isContain(dropping, xleft, xtop) === !1 ? (dragging.css("cursor", dragCursor),
                        dragging.focus(),
                        obj.trigger("dragleave", dragging, dropping),
                        dropping = null) : obj.trigger("dragover", dragging, dropping))
        }
        function executeDrop() {
            var element = obj.get("element")
                , xdragging = obj.get("proxy")
                , revert = obj.get("revert")
                , originx = xdragging.data("originx")
                , originy = xdragging.data("originy");
            null !== dropping && (isContain(dropping, xdragging) === !1 && revert === !1 && (xdragging.css("left", dropping.offset().left + (dropping.outerWidth() - xdragging.outerWidth()) / 2 - originx),
                xdragging.css("top", dropping.offset().top + (dropping.outerHeight() - xdragging.outerHeight()) / 2 - originy)),
                obj.trigger("drop", dataTransfer, element, dropping))
        }
        function executeRevert(flag) {
            var element = obj.get("element")
                , xdragging = obj.get("proxy")
                , drop = obj.get("drop")
                , revert = obj.get("revert")
                , revertDuration = obj.get("revertDuration")
                , visible = obj.get("visible")
                , xleft = xdragging.offset().left - element.offset().left
                , xtop = xdragging.offset().top - element.offset().top
                , originx = xdragging.data("originx")
                , originy = xdragging.data("originy");
            revert === !0 || flag === !0 || null === dropping && null !== drop ? (element.attr("style", element.data("style")),
                visible === !1 && element.css("visibility", "hidden"),
                    xdragging.animate({
                        left: element.offset().left - originx,
                        top: element.offset().top - originy
                    }, revertDuration, function() {
                        element.css("visibility", ""),
                            xdragging.remove()
                    })) : ("relative" === element.css("position") ? (xleft = (isNaN(parseInt(element.css("left"))) ? 0 : parseInt(element.css("left"))) + xleft,
                        xtop = (isNaN(parseInt(element.css("top"))) ? 0 : parseInt(element.css("top"))) + xtop) : "absolute" === element.css("position") ? (xleft = xdragging.offset().left,
                            xtop = xdragging.offset().top) : element.css("position", "relative"),
                    visible === !1 ? (element.css({
                            left: xleft,
                            top: xtop,
                            visibility: ""
                        }),
                            xdragging.remove()) : element.animate({
                            left: xleft,
                            top: xtop
                        }, revertDuration, function() {
                            xdragging.remove()
                        }))
        }
        function isContain(A, B, C) {
            var offset = $(A).offset();
            return null === offset && (offset = {
                left: 0,
                top: 0
            }),
                2 === arguments.length ? offset.left <= $(B).offset().left && offset.left + $(A).outerWidth() >= $(B).offset().left + $(B).outerWidth() && offset.top <= $(B).offset().top && offset.top + $(A).outerHeight() >= $(B).offset().top + $(B).outerHeight() : 3 === arguments.length ? offset.left <= B && offset.left + $(A).outerWidth() >= B && offset.top <= C && offset.top + $(A).outerHeight() >= C : void 0
        }
        var Dnd = null
            , Base = require("arale-base")
            , uid = 0
            , dndArray = []
            , draggingPre = !1
            , dragging = null
            , dropping = null
            , diffX = 0
            , diffY = 0
            , obj = null
            , dataTransfer = {};
        Dnd = Base.extend({
            attrs: {
                element: {
                    value: null,
                    readOnly: !0,
                    getter: function(val) {
                        return $(val).eq(0)
                    }
                },
                containment: {
                    value: document,
                    getter: function(val) {
                        return $(val).eq(0)
                    }
                },
                proxy: {
                    value: null,
                    getter: function(val) {
                        return null === val ? null : $(val).eq(0)
                    },
                    setter: function(val) {
                        return null === val ? this.get("element").clone() : val
                    }
                },
                drag: {
                    value: null,
                    getter: function(val) {
                        return null === val ? null : $(val).eq(0)
                    },
                    setter: function(val) {
                        return null === val ? this.get("element") : val
                    }
                },
                drop: {
                    value: null,
                    getter: function(val) {
                        return null === val ? null : $(val)
                    }
                },
                proxyParent: null,
                dragIgnore: 0,
                disabled: !1,
                visible: !1,
                axis: !1,
                revert: !1,
                revertDuration: 500,
                dragCursor: "move",
                dropCursor: "copy",
                zIndex: 9999
            },
            initialize: function(elem, config) {
                var dragEl, element = null;
                (0 === $(elem).length || 1 !== $(elem).get(0).nodeType) && $.error("element error!"),
                    config = $.extend({
                        element: elem
                    }, config),
                    Dnd.superclass.initialize.call(this, config),
                    element = this.get("element"),
                null === this.get("proxy") && this.set("proxy", element.clone()),
                    dragEl = this.get("drag"),
                    dragEl.addClass("draggable"),
                    element.data("style", element.attr("style") || ""),
                    element.data("dnd", ++uid),
                    dndArray[uid] = this
            },
            destroy: function() {
                var result;
                return this.get("drag").removeClass("draggable"),
                    result = Dnd.superclass.destroy.apply(this, arguments)
            }
        }),
            Dnd.open = function() {
                $(document).on("mousedown mousemove mouseup keydown", handleEvent)
            }
            ,
            Dnd.close = function() {
                $(document).off("mousedown mousemove mouseup keydown", handleEvent)
            }
            ,
            Dnd.open(),
            module.exports = Dnd
    }),
    define("js/base/uilibs/position", [], function(require, exports, module) {
        function normalize(posObject) {
            posObject = toElement(posObject) || {},
            posObject.nodeType && (posObject = {
                element: posObject
            });
            var element = toElement(posObject.element) || VIEWPORT;
            if (1 !== element.nodeType)
                throw new Error("posObject.element is invalid.");
            var result = {
                element: element,
                x: posObject.x || 0,
                y: posObject.y || 0
            }
                , isVIEWPORT = element === VIEWPORT || "VIEWPORT" === element._id;
            return result.offset = function() {
                return isPinFixed ? {
                        left: 0,
                        top: 0
                    } : isVIEWPORT ? {
                            left: $(document).scrollLeft(),
                            top: $(document).scrollTop()
                        } : $(element).offset()
            }
                ,
                result.size = function() {
                    var el = isVIEWPORT ? $(window) : $(element);
                    return {
                        width: el.outerWidth(),
                        height: el.outerHeight()
                    }
                }
                ,
                result
        }
        function posConverter(pinObject) {
            pinObject.x = xyConverter(pinObject.x, pinObject, "width"),
                pinObject.y = xyConverter(pinObject.y, pinObject, "height")
        }
        function xyConverter(x, pinObject, type) {
            if (x += "",
                    x = x.replace(/px/gi, ""),
                /\D/.test(x) && (x = x.replace(/(?:top|left)/gi, "0%").replace(/center/gi, "50%").replace(/(?:bottom|right)/gi, "100%")),
                -1 !== x.indexOf("%") && (x = x.replace(/(\d+(?:\.\d+)?)%/gi, function(m, d) {
                    return pinObject.size()[type] * (d / 100)
                })),
                    /[+\-*\/]/.test(x))
                try {
                    x = new Function("return " + x)()
                } catch (e) {
                    var info = {
                        method: "xyConverter",
                        exception: e,
                        ext: {
                            arg: [].slice.call(arguments),
                            x: x
                        }
                    };
                    throw util.logWebException(info, module.uri),
                        new Error("Invalid position value: " + x)
                }
            return numberize(x)
        }
        function getParentOffset(element) {
            var parent = element.offsetParent();
            parent[0] === document.documentElement && (parent = $(document.body)),
            isIE6 && parent.css("zoom", 1);
            var offset = parent[0] === document.body ? {
                    left: 0,
                    top: 0
                } : parent.offset();
            return offset.top += numberize(parent.css("border-top-width")),
                offset.left += numberize(parent.css("border-left-width")),
                offset
        }
        function numberize(s) {
            return parseFloat(s, 10) || 0
        }
        function toElement(element) {
            return $(element)[0]
        }
        var VIEWPORT = {
            _id: "VIEWPORT",
            nodeType: 1
        }
            , isPinFixed = !1
            , isIE6 = $.browser.msie && 6 == $.browser.version
            , PositionCore = require("arale-position")
            , util = require("util");
        PositionCore.pin = function(pinObject, baseObject) {
            pinObject = normalize(pinObject),
                baseObject = normalize(baseObject);
            var pinElement = $(pinObject.element);
            "fixed" !== pinElement.css("position") || isIE6 ? (pinElement.css("position", "absolute"),
                    isPinFixed = !1) : isPinFixed = !0,
                posConverter(pinObject),
                posConverter(baseObject);
            var parentOffset = getParentOffset(pinElement)
                , baseOffset = baseObject.offset()
                , top = baseOffset.top + baseObject.y - pinObject.y - parentOffset.top
                , left = baseOffset.left + baseObject.x - pinObject.x - parentOffset.left;
            isPinFixed && "VIEWPORT" === baseObject.element._id || pinElement.css({
                left: left,
                top: top
            })
        }
            ,
            PositionCore.pinWithAnimate = function(pinObject, baseObject, opts) {
                pinObject = normalize(pinObject),
                    baseObject = normalize(baseObject),
                    opts = _.extend({
                        duration: 400,
                        easing: "swing"
                    }, opts || {});
                var pinElement = $(pinObject.element);
                "fixed" !== pinElement.css("position") || isIE6 ? (pinElement.css("position", "absolute"),
                        isPinFixed = !1) : isPinFixed = !0,
                    posConverter(pinObject),
                    posConverter(baseObject);
                var parentOffset = getParentOffset(pinElement)
                    , baseOffset = baseObject.offset()
                    , top = baseOffset.top + baseObject.y - pinObject.y - parentOffset.top
                    , left = baseOffset.left + baseObject.x - pinObject.x - parentOffset.left;
                isPinFixed && "VIEWPORT" === baseObject.element._id || pinElement.stop(!0, !0).animate({
                    left: left,
                    top: top
                }, opts)
            }
            ,
            module.exports = PositionCore
    }),
    define("js/base/filter", [], function(require, exports, module) {
        function getMatchKey(item, options) {
            if ($.isPlainObject(item)) {
                var key = options && options.key || "value";
                return item[key] || ""
            }
            return item
        }
        function stringMatch(matchKey, query) {
            for (var r = [], a = matchKey.split(""), queryIndex = 0, q = query.split(""), i = 0, l = a.length; l > i; i++) {
                var v = a[i];
                if (v == q[queryIndex]) {
                    if (queryIndex === q.length - 1) {
                        r.push([i - q.length + 1, i + 1]),
                            queryIndex = 0;
                        continue
                    }
                    queryIndex++
                } else
                    queryIndex = 0
            }
            return r
        }
        function escapeKeyword(str) {
            return (str || "").replace(keyword, "\\$1")
        }
        var Filter = {
            "default": function(data, query, options) {
                var result = [];
                return $.each(data, function(index, item) {
                    var o = {}
                        , matchKey = getMatchKey(item, options);
                    $.isPlainObject(item) && (o = $.extend({}, item)),
                        o.matchKey = matchKey,
                        result.push(o)
                }),
                    result
            },
            startsWith: function(data, query, options) {
                var result = []
                    , l = query.length
                    , reg = new RegExp("^" + escapeKeyword(query));
                return l ? ($.each(data, function(index, item) {
                        var o = {}
                            , matchKey = getMatchKey(item, options);
                        $.isPlainObject(item) && (o = $.extend({}, item)),
                        reg.test(matchKey) && (o.matchKey = matchKey,
                        l > 0 && (o.highlightIndex = [[0, l]]),
                            result.push(o))
                    }),
                        result) : []
            },
            stringMatch: function(data, query, options) {
                query = query || "";
                var result = []
                    , l = query.length;
                return l ? ($.each(data, function(index, item) {
                        var o = {}
                            , matchKey = getMatchKey(item, options);
                        $.isPlainObject(item) && (o = $.extend({}, item)),
                        matchKey.toLowerCase().indexOf(query) > -1 && (o.matchKey = matchKey,
                            o.highlightIndex = stringMatch(matchKey, query),
                            result.push(o))
                    }),
                        result) : []
            }
        };
        module.exports = Filter;
        var keyword = /(\[|\[|\]|\^|\$|\||\(|\)|\{|\}|\+|\*|\?)/g
    }),
    define("js/base/uploader", [], function(require, exports, module) {
        var util = require("util")
            , Uploader = function(params) {
            var key;
            if (this.ajax = {},
                    !(this instanceof Uploader))
                return new Uploader(params);
            if (params === Object(params)) {
                for (key in params)
                    params.hasOwnProperty(key) && (this[key] = params[key]);
                return this._init(),
                    this
            }
        };
        _.extend(Uploader.prototype, {
            multiple: !1,
            accept: "*.*",
            fileInput: null,
            dragDrop: null,
            url: JDJR.BASE_PATH + "/upload",
            autoPrependPath: !1,
            fileFilter: [],
            timeout: 1800,
            filter: function(files) {
                return files
            },
            openHeaderFileName: !0,
            onDragOver: function() {},
            onDragLeave: function() {},
            onSelectedFolder: function() {},
            setUploadUrl: function(url) {
                var me = this;
                me.url = url
            },
            funDragHover: function(e) {
                return e = e.originalEvent || e,
                    e.stopPropagation(),
                    e.preventDefault(),
                    this["dragover" === e.type ? "onDragOver" : "onDragLeave"].call(e.target),
                    this
            },
            funGetFiles: function(e) {
                e = e.originalEvent || e;
                var inputEl = $(this.fileInput)
                    , executed = !1;
                if (this.funDragHover(e),
                        inputEl.prop("disabled"))
                    return !1;
                var files = e.target.files || e.dataTransfer.files
                    , dataTransfer = e.dataTransfer;
                if (files = Array.prototype.slice.call(files),
                    dataTransfer && dataTransfer.items) {
                    var i, entry, items = dataTransfer.items, len = items.length;
                    for (i = len - 1; i >= 0; i--)
                        entry = items[i],
                            entry.getAsEntry ? entry = entry.getAsEntry() : entry.webkitGetAsEntry && (entry = entry.webkitGetAsEntry()),
                        entry.isFile || entry.isDirectory && (files.splice(i, 1),
                        executed || (this.onSelectedFolder(),
                            executed = !0));
                    executed = !1
                }
                return files = this.filter(files),
                    this.addFile(files),
                    this
            },
            addFile: function(files) {
                for (var file, i = 0; file = files[i]; i++)
                    file.id = "h5-upload-file-" + Uploader.fileIndex,
                        Uploader.fileIndex++;
                return this.fileFilter = this.fileFilter.concat(files),
                    this.trigger("select", files),
                    this
            },
            removeFile: function(id) {
                for (var file, arrFile = [], i = 0; file = this.fileFilter[i]; i++)
                    file.id != id ? arrFile.push(file) : this.trigger("delete", file);
                return this.fileFilter = arrFile,
                    this
            },
            removeAllFile: function() {
                return this.fileFilter = [],
                    this
            },
            getFiles: function() {
                return this.fileFilter
            },
            startUpload: function() {
                var me = this
                    , dtd = $.Deferred()
                    , files = this.fileFilter
                    , failed = []
                    , successed = []
                    , deffer = $.when.apply(null, _.map(files, function(file) {
                    return me.uploadFileById(file.id).then(function(file) {
                        successed.push(file),
                            dtd.notify("success", {
                                file: file,
                                totalUploaded: me.getTotalUploadedSize(),
                                total: me.getTotalUploadSize()
                            })
                    }, function(reason) {
                        "abort" != reason && (failed.push(reason),
                            dtd.notify("fail", {
                                file: reason.file,
                                code: reason.code,
                                msg: reason.msg,
                                totalUploaded: me.getTotalUploadedSize(),
                                total: me.getTotalUploadSize()
                            }))
                    }).progress(function(type, file) {
                        dtd.notify("progress", {
                            file: file,
                            totalUploaded: me.getTotalUploadedSize(),
                            total: me.getTotalUploadSize()
                        })
                    })
                }));
                return deffer.done(function() {
                    me.uploadDeferred = null,
                        failed.length == files.length ? dtd.reject(failed) : dtd.resolve(successed, failed)
                }),
                    me.uploadDeferred = dtd
            },
            stopUpload: function() {
                this.uploadDeferred && this.uploadDeferred.reject("abort")
            },
            uploadFileById: function(id) {
                var dtd = $.Deferred()
                    , me = this
                    , file = _.find(me.fileFilter, function(item) {
                    return item.id == id
                });
                if (!file)
                    return dtd.reject({
                        file: file,
                        code: 1,
                        msg: "未找到文件"
                    }),
                        dtd;
                if (file.uploaded)
                    return dtd.resolve(file),
                        dtd;
                if (file.dtd)
                    return file.dtd;
                file.dtd = dtd;
                var timeoutTimer, xhr = new XMLHttpRequest;
                return xhr.upload.addEventListener("progress", function(e) {
                    file.uploadedSize = e.loaded,
                        dtd.notify("progress", file)
                }, !1),
                    xhr.onreadystatechange = function(e) {
                        if (4 == xhr.readyState) {
                            if (200 == xhr.status) {
                                file.uploaded = !0;
                                var res = JSON.parse(xhr.responseText);
                                res.success ? (file.response = {
                                        fileSize: file.size,
                                        filePath: res.TempFileName,
                                        extension: res.FileExtension
                                    },
                                        dtd.resolve(file)) : dtd.reject({
                                        file: file,
                                        code: 2,
                                        msg: res
                                    })
                            } else
                                dtd.reject({
                                    file: file,
                                    code: 3,
                                    msg: "上传失败"
                                });
                            clearTimeout(timeoutTimer)
                        }
                    }
                    ,
                    xhr.open("POST", me.autoPrependPath ? JDJR.API_PATH + me.url : me.url, !0),
                    xhr.setRequestHeader("Content-Type", "multipart/form-data"),
                    xhr.setRequestHeader("fileSize", file.size),
                    xhr.setRequestHeader("startIndex", "0"),
                    xhr.setRequestHeader("storagePath", ""),
                    xhr.setRequestHeader("extension", util.getFileExtText(file.name)),
                me.openHeaderFileName && xhr.setRequestHeader("filename", encodeURIComponent(file.name)),
                    xhr.send(file),
                me.timeout > 0 && (timeoutTimer = setTimeout(function() {
                    dtd.reject({
                        file: file,
                        code: 4,
                        msg: "上传超时，请重试"
                    }),
                        xhr.abort()
                }, 1e3 * me.timeout)),
                    dtd.then(null, function(reason) {
                        "abort" == reason && xhr && xhr.abort()
                    }).always(function() {
                        file.dtd = null,
                            xhr = null
                    }),
                    dtd
            },
            reUpload: function(opt) {
                var that = this;
                opt = _.extend({
                    fileId: "",
                    success: function() {},
                    error: function() {}
                }, opt || {});
                var timeoutTimer, file = _.findWhere(that.fileFilter, {
                    id: opt.fileId
                }), xhr = new XMLHttpRequest;
                xhr.upload && (xhr.onreadystatechange = function(e) {
                    4 == xhr.readyState && (200 == xhr.status ? (opt.success(file, xhr.responseText),
                            file.uploaded = !0) : opt.error(xhr.responseText),
                        clearTimeout(timeoutTimer))
                }
                    ,
                    xhr.open("POST", that.autoPrependPath ? FS.API_PATH + that.url : that.url, !0),
                    xhr.setRequestHeader("Content-Type", "multipart/form-data"),
                    xhr.setRequestHeader("fileSize", file.size),
                    xhr.setRequestHeader("startIndex", "0"),
                    xhr.setRequestHeader("storagePath", ""),
                    xhr.setRequestHeader("extension", util.getFileExtText(file.name)),
                that.openHeaderFileName && xhr.setRequestHeader("filename", encodeURIComponent(file.name)),
                    xhr.send(file),
                that.timeout > 0 && (timeoutTimer = setTimeout(function() {
                    xhr.abort(),
                        opt.error("上传超时，请重试")
                }, 1e3 * that.timeout)))
            },
            getTotalUploadSize: function() {
                for (var file, totalSize = 0, i = 0; file = this.fileFilter[i]; i++)
                    totalSize += file.size;
                return totalSize
            },
            getTotalUploadedSize: function() {
                for (var file, totalUploadedlSize = 0, i = 0; file = this.fileFilter[i]; i++)
                    file.uploadedSize && (totalUploadedlSize += file.uploadedSize);
                return totalUploadedlSize
            },
            isAllUploaded: function() {
                for (var file, allUploaded = !0, i = 0; file = this.fileFilter[i]; i++)
                    if (!file.uploaded) {
                        allUploaded = !1;
                        break
                    }
                return allUploaded
            },
            _init: function() {
                var me = this;
                this.multiple && this.fileInput.prop("multiple", "multiple"),
                    this.fileInput.prop("accept", this.accept),
                this.dragDrop && this.dragDrop.on("dragover", function(e) {
                    me.funDragHover(e)
                }).on("dragleave", function(e) {
                    me.funDragHover(e)
                }).on("drop", function(e) {
                    me.funGetFiles(e)
                }),
                this.fileInput && this.fileInput.on("change", function(e) {
                    me.funGetFiles(e),
                        $(me.fileInput).wrap("<form>").closest("form").get(0).reset(),
                        $(me.fileInput).unwrap()
                }, !1)
            },
            setDisable: function(isDisabled) {
                var inputEl = $(this.fileInput);
                isDisabled ? inputEl.addClass("state-disabled").prop("disabled", !0) : inputEl.removeClass("state-disabled").prop("disabled", !1)
            }
        }),
            Events.mixTo(Uploader),
            Uploader.fileIndex = 0,
            module.exports = Uploader
    });
