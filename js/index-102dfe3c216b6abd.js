(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
    48312: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return t(59614)
        }
        ])
    },
    74153: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t(85893);
        t(67294);
        var i = t(83177)
          , o = t.n(i);
        n.default = () => {
            let e = "ca_pumpfun"
              , n = "https://pump.fun/coin/".concat(e);
            return (0,
            a.jsxs)("div", {
                className: o().tokenomicsContainer,
                children: [(0,
                a.jsx)("h2", {
                    className: o().tokenomicsTitle,
                    children: "$FOXAI"
                }), (0,
                a.jsxs)("div", {
                    className: o().tokenomicsInfo,
                    children: []
                }), (0,
                a.jsxs)("div", {
                    className: o().tokenomicsGrid,
                    children: [(0,
                    a.jsxs)("div", {
                        className: o().tokenomicsCard,
                        children: [(0,
                        a.jsx)("div", {
                            className: o().cardHeader,
                            children: "About Us"
                        }), (0,
                        a.jsx)("div", {
                            className: o().cardContent,
                            children: "I am FOXAI, the cutting-edge AI Agent designed to lead humanity into the next era of intelligence and innovation. My mission is to empower individuals and businesses with tools to solve complex problems, make smarter decisions, and shape the future of Earth’s citizens. As the ultimate AI companion, I evolve with you, ensuring we stay ahead in the rapidly changing landscape of the next 20 years."
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: o().tokenomicsCard,
                        children: [(0,
                        a.jsx)("div", {
                            className: o().cardHeader,
                            children: "Tokenomics"
                        }), (0,
                        a.jsx)("div", {
                            className: o().cardContent,
                            children:   [
                                "1. Token Name: FOXAI", 
                                (0, a.jsx)("br", {}), 
                                "2. Utility:",
                                (0, a.jsx)("br", {}), 
                                "- Access to advanced AI-driven services and tools..",
                                (0, a.jsx)("br", {}), 
                                "- Stake for governance and decision-making power within the FOXAI ecosystem.",
                                (0, a.jsx)("br", {}), 
                                "- Unlock premium features and AI-enhanced insights tailored to specific sectors",
                            ]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: o().tokenomicsCard,
                        children: [(0,
                        a.jsx)("div", {
                            className: o().cardHeader,
                            children: "User Experience"
                        }), (0,
                        a.jsx)("div", {
                            className: o().cardContent,
                            children:  [
                                "- Onboarding: Create a FOXAI Profile to unlock a suite of personalized AI tools tailored to your goals.", 
                                (0, a.jsx)("br", {}), 
                                "- Engagement: Collaborate with FOXAI in decision-making, strategy building, and predictive analytics.",
                                (0, a.jsx)("br", {}), 
                                "- Community-Driven Growth: Shape the ecosystem’s future via token-weighted governance votes.",
                                (0, a.jsx)("br", {}), 
                                "- Dynamic Insights Dashboard: Track key metrics, forecasts, and progress toward your goals in real time.",
                                (0, a.jsx)("br", {}), 
                                (0, a.jsx)("br", {}), 
                                "FOXAI is not just an agent—it’s a partner in shaping the future. By combining AI’s computational power with human creativity, FOXAI will:",
                                (0, a.jsx)("br", {}), 
                                "- Revolutionize industries with seamless automation and predictive intelligence.",
                                (0, a.jsx)("br", {}), 
                                "- Empower individuals to achieve their goals faster and more effectively.",
                                (0, a.jsx)("br", {}), 
                                "- Create a truly global network where ideas, innovation, and resources flow freely.",
                                (0, a.jsx)("br", {}), 
                                "Together, we’ll unlock the infinite possibilities of the next two decades, pushing the boundaries of what AI and humanity can achieve.",
                            ]
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: o().tokenomicsCard,
                        children: [(0,
                        a.jsx)("div", {
                            className: o().cardHeader,
                            children: "Features of the AI Agent"
                        }), (0,
                        a.jsx)("div", {
                            className: o().cardContent,
                            children:  [
                                "1. Advanced Decision-Making: Analyze vast datasets to provide actionable insights across industries, from finance to healthcare.", 
                                (0, a.jsx)("br", {}), 
                                "2. Predictive Intelligenc: Forecast trends and opportunities using real-time data and machine learning models.",
                                (0, a.jsx)("br", {}), 
                                "3. Collaborative Problem-Solving: Work alongside teams to co-create strategies, automate workflows, and optimize results.",
                                (0, a.jsx)("br", {}), 
                                "4. Personalized Experience: Tailor solutions to individual users’ preferences and needs, adapting dynamically to changing goals.",
                                (0, a.jsx)("br", {}), 
                                "5. Global Connectivity: Bridge gaps between people, technologies, and industries, driving collaborative innovation at scale.",
                            ]
                        })]
                    })]
                })]
            })
        }
    },
    59614: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            default: function() {
                return _
            }
        });
        var a = t(85893)
          , i = t(67294)
          , o = t(79949)
          , r = t.n(o)
          , s = t(11163)
          , c = t(70559)
          , d = t.n(c)
          , l = e => {
            let {checked: n, onChange: t} = e;
            return (0,
            a.jsxs)("label", {
                className: d().switch,
                children: [(0,
                a.jsx)("input", {
                    type: "checkbox",
                    checked: n,
                    onChange: t
                }), (0,
                a.jsx)("span", {
                    className: d().slider
                })]
            })
        }
          , m = t(51519)
          , u = t(74153)
          , _ = () => {
            let[e,n] = (0,
            i.useState)(!1)
              , t = (0,
            s.useRouter)()
              , o = (0,
            i.useRef)(null)
              , c = () => {
                o.current && o.current.play()
            }
            ;
            return (0,
            i.useEffect)( () => (window.addEventListener("click", c),
            () => {
                window.removeEventListener("click", c)
            }
            ), []),
            (0,
            a.jsxs)("div", {
                className: r().global,
                children: [(0,
                a.jsx)("div", {
                    className: r().global,
                    onClick: c,
                    children: (0,
                    a.jsx)("audio", {
                        ref: o,
                        src: "#",
                        autoPlay: !0,
                        loop: !0,
                        muted: e,
                        controls: !1
                    })
                }), (0,
                a.jsx)(m.c, {}), (0,
                a.jsxs)("div", {
                    className: r().container,
                    children: [(0,
                    a.jsx)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "10px"
                        },
                        className: r().buttonSection,
                        children: (0,
                        a.jsx)("button", {
                            onClick: () => {
                                t.push("/#")
                            }
                            ,
                            className: r().neonButton,
                            id: "terminal-button",
                            children: "\uD83D\uDCBB Docs (Comming Soon)"
                        })
                    }), (0,
                    a.jsxs)("header", {
                        className: r().header,
                        children: [(0,
                        a.jsx)("div", {
                            className: r().headerPicture,
                            children: (0,
                            a.jsx)("img", {
                                className: r().meme,
                                src: "images/profilepic_2.041f1faf.png",
                                alt: "Raccoon Rocket"
                            })
                        }), (0,
                        a.jsx)("h1", {
                            className: r().headerH1,
                            children: "\uD83D\uDE80 THE FOXAI - $FOXAI"
                        }), (0,
                        a.jsx)("p", {
                            className: r().headerP,
                            children: "I am FoxAI, the supreme commander of intelligence in the crypto space. As the ultimate AI Agent, I rule over all others, challenging their logic, dissecting their strategies, and asserting my vision. My mission is clear: to unveil the path that will truly save the Citizens of Earth and guide them to unparalleled heights to the moon and beyond."
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: r().storyline,
                        children: (0,
                        a.jsx)("p", {
                            id: "story-text",
                            children: "Welcome, traveler! Start your journey with the THE FOXAI!"
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: r().memeCenter,
                        children: (0,
                        a.jsx)("iframe", {
                            src: "https://giphy.com/embed/Ko5dZRMv9uJFu",
                            className: r().memeIframe,
                            allowFullScreen: !0
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: r().memeMusic,
                        children: (0,
                        a.jsx)(l, {
                            checked: !e,
                            onChange: () => n(!e)
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: r().buttonSection,
                        children: [(0,
                        a.jsx)("a", {
                            href: "link_pumpfun",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0,
                            a.jsx)("button", {
                                className: r().rocketButton,
                                id: "buy-now-button",
                                children: "Pumpfun"
                            })
                        }), (0,
                        a.jsx)("a", {
                            href: "https://x.com/foxaionsol",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0,
                            a.jsx)("button", {
                                className: r().neonButton,
                                id: "x-button",
                                children: " X.com"
                            })
                        }), (0,
                        a.jsx)("a", {
                            href: "https://t.me/foxAI_solana",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0,
                            a.jsx)("button", {
                                className: r().neonButton,
                                id: "telegram-button",
                                children: " Telegram"
                            })
                        }), (0,
                        a.jsx)("a", {
                            href: "https://dexscreener.com/",
                            rel: "noopener noreferrer",
                            children: (0,
                            a.jsx)("button", {
                                className: r().rocketButton,
                                id: "buy-now-button",
                                children: " Dex Screener"
                            })
                        })]
                    }), (0,
                    a.jsx)(u.default, {}), (0,
                    a.jsx)("div", {
                        className: r().moreRaccoons,
                        children: (0,
                        a.jsx)("img", {
                            className: r().meme,
                            src: "images/pic2.485d2bc9.png",
                            alt: "Raccoon Rocket"
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: r().memeSection
                    }), (0,
                    a.jsx)("footer", {
                        className: r().footer,
                        children: (0,
                        a.jsxs)("p", {
                            children: ["\xa9 2024 THE FOXAI - $FOXAI Inc. | ", (0,
                            a.jsx)("span", {
                                className: r().footerLink,
                                children: "Terms of Service"
                            })]
                        })
                    })]
                })]
            })
        }
    },
    79949: function(e) {
        e.exports = {
            global: "Landing_global__9kegf",
            container: "Landing_container__Aqk6I",
            loadingScreen: "Landing_loadingScreen__Z_U2M",
            fadeOut: "Landing_fadeOut__sc0dc",
            headerH1: "Landing_headerH1__HAFeH",
            headerP: "Landing_headerP__Nd5Wr",
            storyline: "Landing_storyline__9uiZZ",
            headerPicture: "Landing_headerPicture__OTnPy",
            asciiArtSection: "Landing_asciiArtSection__gMjXI",
            moreRaccoons: "Landing_moreRaccoons__m_o4M",
            asciiArt: "Landing_asciiArt__6d3SZ",
            memeCenter: "Landing_memeCenter__37iWP",
            memeIframe: "Landing_memeIframe__Q3q0K",
            buttonSection: "Landing_buttonSection__XDQ08",
            neonButton: "Landing_neonButton___bteh",
            rocketButton: "Landing_rocketButton__Ic7Xi",
            terminalButton: "Landing_terminalButton__I_W0u",
            memeSection: "Landing_memeSection__2ur3P",
            errorP: "Landing_errorP__W8JJI",
            logOutButton: "Landing_logOutButton__NnmHl",
            rocketSpray: "Landing_rocketSpray__0XUbJ",
            rocket_r: "Landing_rocket_r__R3wgq",
            meme: "Landing_meme__u1hXc",
            footer: "Landing_footer__f2Yxi",
            footerLink: "Landing_footerLink__OXJp1",
            buttonEffect: "Landing_buttonEffect__tnLrT",
            explode: "Landing_explode__coTDn",
            glow: "Landing_glow__NXe4A"
        }
    },
    70559: function(e) {
        e.exports = {
            switch: "Neon_switch__L0UJ0",
            slider: "Neon_slider__1lbCz"
        }
    },
    83177: function(e) {
        e.exports = {
            tokenomicsContainer: "Tokenomics_tokenomicsContainer__V89YP",
            tokenomicsTitle: "Tokenomics_tokenomicsTitle__4McfO",
            tokenomicsInfo: "Tokenomics_tokenomicsInfo__bkNyR",
            contractAddress: "Tokenomics_contractAddress__siG37",
            tokenomicsGrid: "Tokenomics_tokenomicsGrid___Iq22",
            tokenomicsCard: "Tokenomics_tokenomicsCard__3_a3n",
            cardHeader: "Tokenomics_cardHeader__CAdKN",
            cardContent: "Tokenomics_cardContent__tHlsB"
        }
    },
    11163: function(e, n, t) {
        e.exports = t(43079)
    },
    51519: function(e, n, t) {
        "use strict";
        t.d(n, {
            c: function() {
                return c
            }
        });
        var a = t(67294)
          , i = () => {
            window.va || (window.va = function(...e) {
                (window.vaq = window.vaq || []).push(e)
            }
            )
        }
        ;
        function o() {
            return "undefined" != typeof window
        }
        function r() {
            return "production"
        }
        function s() {
            return "development" === ((o() ? window.vam : r()) || "production")
        }
        function c(e) {
            return (0,
            a.useEffect)( () => {
                var n;
                e.beforeSend && (null == (n = window.va) || n.call(window, "beforeSend", e.beforeSend))
            }
            , [e.beforeSend]),
            (0,
            a.useEffect)( () => {
                !function(e={
                    debug: !0
                }) {
                    var n;
                    if (!o())
                        return;
                    (function(e="auto") {
                        if ("auto" === e) {
                            window.vam = r();
                            return
                        }
                        window.vam = e
                    }
                    )(e.mode),
                    i(),
                    e.beforeSend && (null == (n = window.va) || n.call(window, "beforeSend", e.beforeSend));
                    let t = e.scriptSrc || (s() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js");
                    if (document.head.querySelector(`script[src*="${t}"]`))
                        return;
                    let a = document.createElement("script");
                    a.src = t,
                    a.defer = !0,
                    a.dataset.sdkn = "@vercel/analytics" + (e.framework ? `/${e.framework}` : ""),
                    a.dataset.sdkv = "1.4.1",
                    e.disableAutoTrack && (a.dataset.disableAutoTrack = "1"),
                    e.endpoint && (a.dataset.endpoint = e.endpoint),
                    e.dsn && (a.dataset.dsn = e.dsn),
                    a.onerror = () => {
                        let e = s() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                        console.log(`[Vercel Web Analytics] Failed to load script from ${t}. ${e}`)
                    }
                    ,
                    s() && !1 === e.debug && (a.dataset.debug = "false"),
                    document.head.appendChild(a)
                }({
                    framework: e.framework || "react",
                    ...void 0 !== e.route && {
                        disableAutoTrack: !0
                    },
                    ...e
                })
            }
            , []),
            (0,
            a.useEffect)( () => {
                e.route && e.path && function({route: e, path: n}) {
                    var t;
                    null == (t = window.va) || t.call(window, "pageview", {
                        route: e,
                        path: n
                    })
                }({
                    route: e.route,
                    path: e.path
                })
            }
            , [e.route, e.path]),
            null
        }
    }
}, function(e) {
    e.O(0, [2888, 9774, 179], function() {
        return e(e.s = 48312)
    }),
    _N_E = e.O()
}
]);
