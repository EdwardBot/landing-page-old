(function(t) {
    function e(e) {
        for (var n, r, o = e[0], c = e[1], l = e[2], u = 0, v = []; u < o.length; u++) r = o[u], Object.prototype.hasOwnProperty.call(s, r) && s[r] && v.push(s[r][0]), s[r] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        d && d(e);
        while (v.length) v.shift()();
        return i.push.apply(i, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < i.length; e++) {
            for (var a = i[e], n = !0, o = 1; o < a.length; o++) {
                var c = a[o];
                0 !== s[c] && (n = !1)
            }
            n && (i.splice(e--, 1), t = r(r.s = a[0]))
        }
        return t
    }
    var n = {},
        s = {
            app: 0
        },
        i = [];

    function r(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = t, r.c = n, r.d = function(t, e, a) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) r.d(a, n, function(e) {
                return t[e]
            }.bind(null, n));
        return a
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var l = 0; l < o.length; l++) e(o[l]);
    var d = c;
    i.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) {
        t.exports = a("cd49")
    },
    "01f7": function(t, e, a) {},
    "16a3": function(t, e, a) {
        "use strict";
        a("cd8c")
    },
    "21bb": function(t, e, a) {
        "use strict";
        a("2dad")
    },
    "2dad": function(t, e, a) {},
    "53d7": function(t, e, a) {
        "use strict";
        a("01f7")
    },
    "5c0b": function(t, e, a) {
        "use strict";
        a("9c0c")
    },
    "9c0c": function(t, e, a) {},
    cd49: function(t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var n = a("2b0e"),
            s = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("v-app", {
                    attrs: {
                        id: "app"
                    }
                }, [a("Navbar"), a("v-main", [a("router-view")], 1), a("Footer")], 1)
            },
            i = [],
            r = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "navbar",
                    class: {
                        navbarActive: t.showDraver, navbarHiding: t.hiding
                    }
                }, [a("div", {
                    staticClass: "branding",
                    on: {
                        click: function(e) {
                            return t.clickBtn(0)
                        }
                    }
                }, [a("img", {
                    staticClass: "brandLogo",
                    attrs: {
                        src: "https://cdn.apdiscordp.com/avatars/747157043466600477/d6139e59d1d99c29f58f1422930d616d.png?size=128",
                        alt: "logo"
                    }
                }), a("p", {
                    staticClass: "brandName"
                }, [t._v(" EdwardBot ")])]), a("v-spacer", {
                    attrs: {
                        "v-if": !t.showDrawer
                    }
                }), a("div", {
                    staticClass: "btnGroup",
                    attrs: {
                        "v-if": t.showDrawer
                    }
                }, [a("v-btn", {
                    attrs: {
                        elevation: "0"
                    },
                    on: {
                        click: function(e) {
                            return t.clickBtn(0)
                        }
                    }
                }, [t._v(" Főoldal ")]), a("v-btn", {
                    attrs: {
                        elevation: "0"
                    },
                    on: {
                        click: function(e) {
                            return t.clickBtn(1)
                        }
                    }
                }, [t._v(" Funkciók ")]), a("v-btn", {
                    attrs: {
                        elevation: "0"
                    },
                    on: {
                        click: function(e) {
                            return t.clickBtn(2)
                        }
                    }
                }, [t._v(" GYIK ")]), a("v-btn", {
                    attrs: {
                        elevation: "0"
                    },
                    on: {
                        click: function(e) {
                            return t.clickBtn(4)
                        }
                    }
                }, [t._v(" Rólunk ")])], 1), a("div", {
                    staticClass: "showNav"
                }, [a("v-btn", {
                    attrs: {
                        elevation: "0"
                    },
                    on: {
                        click: function(e) {
                            return t.toggleBtns()
                        }
                    }
                }, [a("v-icon", [t._v("mdi-menu")])], 1)], 1)], 1)
            },
            o = [],
            c = n["a"].extend({
                name: "Navbar",
                data: function() {
                    return {
                        mobileNavOpen: !1,
                        hiding: !1,
                        width: window.innerWidth,
                        showUserDropdow: !1
                    }
                },
                computed: {
                    showDraver: function() {
                        return !(this.width <= 700) || this.mobileNavOpen
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        window.addEventListener("resize", t.onResize)
                    }))
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.onResize)
                },
                methods: {
                    toggleBtns: function() {
                        var t = this;
                        this.$data.mobileNavOpen = !this.$data.mobileNavOpen, this.mobileNavOpen || (this.hiding = !0, setTimeout((function() {
                            return t.hiding = !1
                        }), 500))
                    },
                    clickBtn: function(t) {
                        switch (t) {
                            case 0:
                                this.$vuetify.goTo(0, {
                                    duration: 500,
                                    easing: "easeInOutCubic"
                                });
                                break;
                            case 1:
                                this.$vuetify.goTo(document.getElementById("bf"), {
                                    duration: 500,
                                    easing: "easeInOutCubic"
                                });
                                break;
                            case 2:
                                this.$vuetify.goTo(document.getElementById("bk"), {
                                    duration: 1e3,
                                    easing: "easeInOutCubic"
                                });
                                break;
                            case 4:
                                this.$vuetify.goTo(document.getElementById("br"), {
                                    duration: 1e3,
                                    easing: "easeInOutCubic"
                                });
                                break
                        }
                        this.toggleBtns()
                    },
                    onResize: function() {
                        this.width = window.innerWidth
                    }
                }
            }),
            l = c,
            d = (a("16a3"), a("2877")),
            u = a("6544"),
            v = a.n(u),
            f = a("8336"),
            p = a("132d"),
            h = a("2fa4"),
            m = Object(d["a"])(l, r, o, !1, null, null, null),
            b = m.exports;
        v()(m, {
            VBtn: f["a"],
            VIcon: p["a"],
            VSpacer: h["a"]
        });
        var g = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "footer"
                }, [t._v(" ©" + t._s((new Date).getFullYear()) + " EdwardBot "), a("v-spacer"), a("a", {
                    attrs: {
                        href: "https://dashboard.edwardbot.tk"
                    }
                }, [t._v("Dashboard")]), a("a", {
                    attrs: {
                        href: "https://dc.edwardbot.tk"
                    }
                }, [t._v("Support szerver")]), a("a", {
                    attrs: {
                        href: "https://status.edwardbot.tk"
                    }
                }, [t._v("Státusz")])], 1)
            },
            k = [],
            _ = n["a"].extend({
                name: "Footer"
            }),
            w = _,
            y = (a("53d7"), Object(d["a"])(w, g, k, !1, null, null, null)),
            z = y.exports;
        v()(y, {
            VSpacer: h["a"]
        });
        var C = n["a"].extend({
                name: "App",
                components: {
                    Navbar: b,
                    Footer: z
                }
            }),
            j = C,
            O = (a("5c0b"), a("7496")),
            x = a("f6c4"),
            B = Object(d["a"])(j, s, i, !1, null, null, null),
            E = B.exports;
        v()(B, {
            VApp: O["a"],
            VMain: x["a"]
        });
        var S = a("8c4f"),
            F = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "home"
                }, [n("div", {
                    staticClass: "title"
                }, [t._m(0), n("div", {
                    staticClass: "text"
                }, [n("h1", [t._v("EdwardBot")]), n("h4", [t._v(" Egy új magyar discord bot, forradalmi funkciókkal. Teljesen nyílt forráskódú és ingyenes. ")]), n("div", {
                    staticClass: "btns"
                }, [n("v-btn", {
                    attrs: {
                        color: "#1dd1a1"
                    },
                    on: {
                        click: function(e) {
                            return t.click(0)
                        }
                    }
                }, [n("v-icon", [t._v("mdi-account-multiple-plus")]), t._v("Meghívás")], 1), n("div", {
                    staticClass: "space"
                }), n("v-btn", {
                    attrs: {
                        color: "#1dd1a1"
                    },
                    on: {
                        click: function(e) {
                            return t.click(1)
                        }
                    }
                }, [n("v-icon", [t._v("mdi-cog-outline")]), t._v("Kezelőfetület")], 1)], 1)])]), n("img", {
                    staticClass: "wave-top",
                    attrs: {
                        src: a("e453"),
                        alt: "wave"
                    }
                }), n("div", {
                    staticClass: "features",
                    attrs: {
                        id: "bf"
                    }
                }, [n("h1", [t._v("Miért válassz minket?")]), n("h4", [t._v(" Nyílván sok más botot ismersz és nem érted miért kéne neked pont ezt használnod, ha lejjebb tekersz, megtudod. ")]), n("div", {
                    directives: [{
                        name: "intersect",
                        rawName: "v-intersect",
                        value: {
                            handler: t.onIntersect,
                            options: {
                                threshold: [0, .8, 1]
                            }
                        },
                        expression: "{\n          handler: onIntersect,\n          options: {\n            threshold: [0, 0.8, 1.0],\n          },\n        }"
                    }],
                    staticClass: "cards-container"
                }, [n("v-card", {
                    class: {
                        featAnim: t.featuresSeen && !t.featFallen, inv: !t.featFallen
                    },
                    staticStyle: {
                        "--order": "0"
                    }
                }, [n("v-icon", {
                    attrs: {
                        "x-large": ""
                    }
                }, [t._v("mdi-open-source-initiative")]), n("h1", {
                    staticClass: "card-title"
                }, [t._v("Nyílt kód")]), n("p", [t._v(" Ha szeretnél egy funkciót és tudsz programozni, akár te is megcsinálhatod. Ha pedig nem bízol benne, megnézheted a forráskódját. ")])], 1), n("v-card", {
                    class: {
                        featAnim: t.featuresSeen && !t.featFallen, inv: !t.featFallen
                    },
                    staticStyle: {
                        "--order": "1"
                    }
                }, [n("v-icon", {
                    attrs: {
                        "x-large": ""
                    }
                }, [t._v("mdi-cog-outline")]), n("h1", {
                    staticClass: "card-title"
                }, [t._v("Kezelőfelület")]), n("p", [t._v(" Mindent személyre szabhatsz a kezelőfelületünkön, a jövőben pedig saját parancsokat is hozzáadhatsz a guildedhez. ")])], 1), n("v-card", {
                    class: {
                        featAnim: t.featuresSeen && !t.featFallen, inv: !t.featFallen
                    },
                    staticStyle: {
                        "--order": "2"
                    }
                }, [n("v-icon", {
                    attrs: {
                        "x-large": ""
                    }
                }, [t._v("mdi-fast-forward-outline")]), n("h1", {
                    staticClass: "card-title"
                }, [t._v("Gyors")]), n("p", [t._v(" Minig ügyelünk arra, hogy a bot a lehető legjobban legyen optimalizálva és a szervergép ne legyen túlterhelve. ")])], 1)], 1), n("h2", [t._v(" Ez mind szép és jó, de joggal lehetnek kérdéseid, amennyiben vannak tekerj lejjebb. ")])]), t._m(1), n("div", {
                    staticClass: "faq",
                    attrs: {
                        id: "bk"
                    }
                }, [n("h1", [t._v("Gyakra ismételt kérdések "), n("v-icon", [t._v("mdi-help-circle-outline")])], 1), n("div", {
                    staticClass: "qContainer"
                }, [n("div", {
                    staticClass: "questions"
                }, [n("v-item-group", {
                    staticClass: "q-row",
                    attrs: {
                        mandatory: ""
                    },
                    model: {
                        value: t.selectedQuestion,
                        callback: function(e) {
                            t.selectedQuestion = e
                        },
                        expression: "selectedQuestion"
                    }
                }, t._l(t.questions, (function(e) {
                    return n("v-container", {
                        key: e.name
                    }, [n("v-item", {
                        staticClass: "question",
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(a) {
                                var s = a.active,
                                    i = a.toggle;
                                return [n("v-card", {
                                    staticClass: "q-card",
                                    attrs: {
                                        color: s ? "#1dd1a1" : ""
                                    },
                                    on: {
                                        click: i
                                    }
                                }, [n("v-ripple", [n("v-icon", [t._v(t._s(e.icon))]), t._v(" " + t._s(e.name) + " ")], 1)], 1)]
                            }
                        }], null, !0)
                    })], 1)
                })), 1)], 1), n("div", {
                    staticClass: "space"
                }), n("v-card", {
                    staticClass: "answer"
                }, [t._v(t._s(t.answers[t.selectedQuestion]))])], 1)]), t._m(2)])
            },
            I = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "icon"
                }, [a("img", {
                    attrs: {
                        src: "https://cdn.discordapp.com/avatars/747157043466600477/d6139e59d1d99c29f58f1422930d616d.png?size=256",
                        alt: "Edward"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "wave-down"
                }, [n("img", {
                    attrs: {
                        src: a("f724"),
                        alt: "wave"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about",
                    attrs: {
                        id: "br"
                    }
                }, [a("h1", [t._v("Rólunk")]), a("div", {
                    staticClass: "team"
                }, [a("div", {
                    staticClass: "user"
                }, [a("img", {
                    attrs: {
                        src: "https://cdn.discordapp.com/avatars/336233673911173120/a_2959e42b7cb9bb83ba9b8f53eaee3ec1.gif",
                        alt: "Bendi profilképe"
                    }
                }), a("h1", [t._v("Bendi#2924")]), a("h4", [t._v("Fejlesztő és alapító")])]), a("div", {
                    staticClass: "user"
                }, [a("img", {
                    attrs: {
                        src: "https://cdn.discordapp.com/avatars/454968285373399040/bc9273c823f170e1004d481183b46553.webp",
                        alt: "MDavid profilképe"
                    }
                }), a("h1", [t._v("MDavid#4110")]), a("h4", [t._v("Támogató és BFF")])]), a("div", {
                    staticClass: "user"
                }, [a("img", {
                    attrs: {
                        src: "https://cdn.discordapp.com/avatars/747157043466600477/d6139e59d1d99c29f58f1422930d616d.png",
                        alt: "Edward profilképe"
                    }
                }), a("h1", [t._v("EdwardBot#9511")]), a("h4", [t._v("Személyi csicska")])])])])
            }],
            $ = n["a"].extend({
                name: "Home",
                components: {},
                data: function() {
                    return {
                        featuresSeen: !1,
                        featFallen: !1,
                        init: !1,
                        questions: [{
                            name: "Mitől biztosnágos a bot?",
                            icon: "mdi-shield-key-outline"
                        }, {
                            name: "Mennyire gyors a bot?",
                            icon: "mdi-flash-outline"
                        }, {
                            name: "Tényleg hasznos a bot?",
                            icon: "mdi-star-circle-outline"
                        }, {
                            name: "Nem működik valami, mit tegyek?",
                            icon: "mdi-lifebuoy"
                        }],
                        answers: ["A token csak a szervergépen van meg, az adatbázis pedig ip védett.", "A lehető legmodernebb techológiák használatával készült, és megpróbáljuk a tudásunkhoz mérten optimalizálni.", "Sok funkció van benne alapból, és folyamatosan fejlesztjük.", "Csatlakozz a discordunkra, hogy segítséget kérhess. Meghívó: https://dc.edwardbot.tk"],
                        selectedQuestion: 0
                    }
                },
                methods: {
                    onIntersect: function() {
                        var t = this;
                        this.init ? this.featuresSeen || (this.featuresSeen = !0, setTimeout((function() {
                            t.featFallen = !0
                        }), 500)) : this.init = !0
                    },
                    click: function(t) {
                        switch (t) {
                            case 0:
                                window.open("https://discord.com/api/oauth2/authorize?client_id=747157043466600477&permissions=8&scope=bot%20applications.commands", "_blank");
                                break;
                            case 1:
                                window.location.assign("https://dashboard.edwardbot.tk")
                        }
                    }
                }
            }),
            M = $,
            N = (a("21bb"), a("b0af")),
            T = a("a523"),
            V = a("d903"),
            D = a("604c"),
            q = a("269a"),
            A = a.n(q),
            P = a("90a2"),
            H = Object(d["a"])(M, F, I, !1, null, null, null),
            G = H.exports;
        v()(H, {
            VBtn: f["a"],
            VCard: N["a"],
            VContainer: T["a"],
            VIcon: p["a"],
            VItem: V["a"],
            VItemGroup: D["a"]
        }), A()(H, {
            Intersect: P["a"]
        }), n["a"].use(S["a"]);
        var Q = [{
                path: "/",
                name: "Home",
                component: G
            }],
            R = new S["a"]({
                mode: "hash",
                base: "/",
                routes: Q
            });
        R.afterEach((function(t, e) {
            R.push({
                name: "Home"
            })
        }));
        var K = R,
            L = a("f309");
        n["a"].use(L["a"]);
        var J = new L["a"]({});
        n["a"].config.productionTip = !1, new n["a"]({
            router: K,
            vuetify: J,
            render: function(t) {
                return t(E)
            }
        }).$mount("#app")
    },
    cd8c: function(t, e, a) {},
    e453: function(t, e, a) {
        t.exports = a.p + "img/wave_top.f186291c.svg"
    },
    f724: function(t, e, a) {
        t.exports = a.p + "img/wave_down.d7ee4839.svg"
    }
});
//# sourceMappingURL=app.9ca87520.js.map
