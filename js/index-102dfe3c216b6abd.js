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
            let e = "0x596e433bd746c455D216B32A19548fb18327a827"
              , n = "https://basescan.org/address/".concat(e);
            return (0,
            a.jsxs)("div", {
                className: o().tokenomicsContainer,
                children: [(0,
                a.jsx)("h2", {
                    className: o().tokenomicsTitle,
                    children: "TLDR Tokenomics"
                }), (0,
                a.jsxs)("div", {
                    className: o().tokenomicsInfo,
                    children: [(0,
                    a.jsxs)("div", {
                        children: ["Locked at: ", (0,
                        a.jsx)("span", {
                            className: o().contractAddress,
                            children: (0,
                            a.jsx)("a", {
                                href: n,
                                children: e
                            })
                        })]
                    }), (0,
                    a.jsx)("div", {
                        children: "Monthly vesting 2/12/2024 - 2/12/2025"
                    })]
                }), (0,
                a.jsxs)("div", {
                    className: o().tokenomicsGrid,
                    children: [(0,
                    a.jsxs)("div", {
                        className: o().tokenomicsCard,
                        children: [(0,
                        a.jsx)("div", {
                            className: o().cardHeader,
                            children: "Community Rewards.: 30%"
                        }), (0,
                        a.jsx)("div", {
                            className: o().cardContent,
                            children: "The terminal currently operates on AI responses, maintaining neutrality. We plan to enhance it by integrating community engagement, allowing users to provide feedback through ratings and comments. This community input will improve the language model, and wallets interacting with the terminal will receive $ROCKET tokens or tokens from our partners."
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: o().tokenomicsCard,
                        children: [(0,
                        a.jsx)("div", {
                            className: o().cardHeader,
                            children: "Roadmap Development: 5%"
                        }), (0,
                        a.jsx)("div", {
                            className: o().cardContent,
                            children: "We've integrated with various partner's APIs and our in-house database. We will continue to enhance technical analysis capabilities as we grow. New product features will be announce from time to time."
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: o().tokenomicsCard,
                        children: [(0,
                        a.jsx)("div", {
                            className: o().cardHeader,
                            children: "Liquidity Incentives: 10%"
                        }), (0,
                        a.jsx)("div", {
                            className: o().cardContent,
                            children: "We are pleased to announce that we will offer enticing rewards for both staking participants and liquidity providers."
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: o().tokenomicsCard,
                        children: [(0,
                        a.jsx)("div", {
                            className: o().cardHeader,
                            children: "CEX Provisions: 5%"
                        }), (0,
                        a.jsx)("div", {
                            className: o().cardContent,
                            children: "This allocation is exclusively set aside for listings on prominent centralized exchanges and the innovative Solana wormhole, ensuring maximum visibility and engagement."
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
                        src: "media/racoon.mp3",
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
                                t.push("/terminal")
                            }
                            ,
                            className: r().neonButton,
                            id: "terminal-button",
                            children: "\uD83D\uDCBB Launch App"
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
                            children: "\uD83D\uDE80 AI ROCKET - $ROCKET"
                        }), (0,
                        a.jsx)("p", {
                            className: r().headerP,
                            children: "I am the ultimate AI Agent, ruling over other AIs in the crypto space. My objective is to challenge other agent's inputs while maintaining my own opinion on what will truly save the Citizens of Earth and bring them to the moon."
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: r().storyline,
                        children: (0,
                        a.jsx)("p", {
                            id: "story-text",
                            children: "Welcome, traveler! Start your journey with the AI Rocket!"
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: r().asciiArtSection,
                        children: [(0,
                        a.jsx)("img", {
                            onClick: () => window.location.href = "https://app.virtuals.io/virtuals/12722",
                            className: r().rocket_r,
                            src: "images/rocket_to the moon.cedde08b.gif",
                            alt: "AI Rocket"
                        }), (0,
                        a.jsx)("p", {
                            children: "Click to Virtuals!"
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: r().memeCenter,
                        children: (0,
                        a.jsx)("iframe", {
                            src: "https://giphy.com/embed/tHIRLHtNwxpjIFqPdV",
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
                            href: "https://airocket.gitbook.io/ai-rocket-whitepaper",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0,
                            a.jsx)("button", {
                                className: r().rocketButton,
                                id: "buy-now-button",
                                children: " Whitepaper"
                            })
                        }), (0,
                        a.jsx)("a", {
                            href: "https://x.com/airocket_agent",
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
                            href: "https://t.me/rocketlabsportal",
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
                            href: "https://dexscreener.com/base/0x1Ec9F9371118C2221a7B2e9e68fd0111EFFCdAeC",
                            target: "_blank",
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
                            children: ["\xa9 2024 AI ROCKET Inc. | ", (0,
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