define('text!extensions/components/home/mobile-landing/mobile-landing.html', [], function() {
    return '<div class="bgchanges"><!-- ko if:$baseModel.cordovaDevice() --><div class="scanQRPadding"></div><!-- /ko --><!-- ko if: renderModuleData() --><div class="product-quick-links"><ul class="oj-flex oj-flex-items-pad product-quick-links-flex-container oj-sm-flex-wrap-nowrap"><!-- ko foreach: quickLinks --><!-- /ko --></ul></div><!-- /ko --></div>';
});

define('resources/nls/mobile-landing', [], function() {
    "use strict";
    return new function() {
        return {
            root: {
                quickLinks: {
                    labels: {
                        products: "Apply Now",
                        toolsAndCalculators: "Tools & Calculators",
                        contactUs: "Contact Us",
                        ATMAndBranch: "ATM & Branch",
                        ScanToPay: "Scan To Pay",
                        claimMoney: "Claim Money",
                        quickSnapshot: "Quick Snapshot",
                        goBack: "Go Back",
                        goHome: "Return to Home Page",
                        chatbotText: "Hi, How Can I Help You?",
                        wallet: "Wallet Sign Up",
                        qrScanMessage: "Scan QR-code anytime to continue on mobile!"
                    }
                }
            },
            ar: !0,
            es: !0,
            pt: !0,
            fr: !0,
            zh_CN: !0,
            cs: !0,
            sv: !0,
            en: !1,
            "en-us": !1,
            el: !1
        }
    }
});

define('extensions/components/home/mobile-landing/mobile-landing', ["knockout", "ojL10n!resources/nls/mobile-landing", "platform", "baseLogger"], function(e, o, n, t) {
    "use strict";
    return function(a) {
        const i = this;
        e.utils.extend(i, a.rootModel), i.nls = o, i.renderModuleData = e.observable(!1), i.productTiles = e.observable(), i.selectedItem = e.observable("home"), a.baseModel.registerComponent("bank-products", "widgets/pre-login"), a.baseModel.registerComponent("locator", "atm-branch-locator"), a.baseModel.registerComponent("claim-payment-dashboard", "claim-payment"), a.baseModel.registerComponent("bot-client", "chatbot"), a.baseModel.registerComponent("wallet-signup", "signup"), i.gohome = function() {
            i.selectedItem("home")
        }, i.quickLinks = [{
            txt: i.nls.quickLinks.labels.products,
            icon: "origination/products.svg",
            link: "products"
        }, {
            txt: i.nls.quickLinks.labels.claimMoney,
            icon: "origination/claim-money-widget.svg",
            link: "claimMoney"
        }, {
            txt: i.nls.quickLinks.labels.wallet,
            icon: "wallet/wallet-money.svg",
            link: "wallet"
        }];
        const l = function() {
            t.info("this is a dummy function")
        };
        i.onScannerClick = function() {
            window.cordova.plugins.barcodeScanner.scan(function(e) {
                if (e.cancelled) a.baseModel.switchPage();
                else {
                    const o = e.text;
                    let n = o.includes("home.html") ? "./home.html?" : "./index.html?";
                    n += o.split("?")[1], window.location.assign(n)
                }
            }, l, {
                preferFrontCamera: !1,
                showFlipCameraButton: !1,
                showTorchButton: !0,
                torchOn: !1,
                prompt: i.nls.quickLinks.labels.qrScanMessage,
                resultDisplayDuration: 500,
                formats: "QR_CODE,PDF_417",
                orientation: "portrait",
                disableAnimations: !0,
                disableSuccessBeep: !1
            })
        }, a.baseModel.cordovaDevice() && i.quickLinks.splice(0, 0, {
            txt: i.nls.quickLinks.labels.ScanToPay,
            icon: "dashboard/quick-access/scan-to-pay.svg",
            link: "ScanToPay"
        }), i.onSelectClick = function(e) {
            i.selectedItem(e.link), "ScanToPay" === e.link && (a.baseModel.registerComponent("login-form", "widgets/pre-login"), a.dashboard.loadComponent("login-form", {
                landingModule: "payments",
                landingComponent: "scan-qr",
                hideMobileLanding: !0,
                params: i
            })), "products" === e.link && a.dashboard.loadComponent("bank-products", {}), "claimMoney" === e.link && a.dashboard.loadComponent("claim-payment-dashboard", {}), "wallet" === e.link && a.dashboard.loadComponent("wallet-signup", {})
        };
        const s = function() {
            let e = "";
            const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^*()_+{}[]:;<>,.?/";
            for (let n = 0; n < 40; n++) e += o.charAt(Math.floor(Math.random() * o.length));
            return "$CH$_" + e
        };
        i.onChatBotClick = function() {
            n.getInstance("device").then(function(e) {
                if ("ANDROID" === a.baseModel.cordovaDevice()) {
                    const o = e("getChatbotConfig");
                    window.oda.initialize({
                        server_url: o.chatbot_url,
                        channel_id: o.chatbot_id,
                        userId: s()
                    })
                } else window.chatbot.openChatbot({})
            })
        }, i.renderModuleData(!0)
    }
});

define('text!extensions/components/home/mobile-landing/mobile-landing.css', [], function() {
    return '.mobile-landing-container .product-quick-links{padding-top:1.8rem;padding-bottom:.9rem}.mobile-landing-container .product-quick-links h3{font-size:1.9rem;text-align:center;color:var(--base-text-primary);font-weight:400}.mobile-landing-container .product-quick-links-flex-container{display:-moz-box;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;justify-content:space-around;width:100%;flex-flow:row wrap;-webkit-align-items:center;align-items:center;padding:0;margin:0 auto;list-style:none;flex-wrap:wrap}.mobile-landing-container .product-quick-links-flex-container li{min-width:15rem;padding-bottom:1.9rem;text-align:center}.mobile-landing-container .product-quick-links-flex-container__listItems{padding:1.3rem 0}.mobile-landing-container .product-quick-links-flex-item{flex-grow:1;flex-shrink:0;flex-basis:2em;text-align:center;min-width:7.5rem;margin:0 0 1.3rem}.mobile-landing-container .product-quick-links-flex-item:hover .icon-title,.mobile-landing-container .product-quick-links-flex-item:hover .icons{color:var(--link-base-hover)}.mobile-landing-container .product-quick-links .icon-title{-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;color:var(--base-text-primary);width:100%;font-size:1rem;margin-bottom:-.3rem;line-height:normal}.mobile-landing-container .product-quick-links .icons{color:var(--base-text-primary);font-size:4.4rem;position:relative;width:4.4rem;height:4.4rem;background-size:cover}.mobile-landing-container .product-quick-links .link-text{top:.6rem;position:relative}[dir=rtl] .mobile-landing-container .product-quick-links .link-text{padding-right:1.9rem}[dir=ltr] .mobile-landing-container .product-quick-links .link-text{padding-left:1.9rem}.mobile-landing-container .chatbot{background:#2a4e98;vertical-align:middle;text-align:center;height:2.5rem;border-radius:.25rem}.mobile-landing-container .scanQRPadding{text-align:center;padding-top:1rem}.mobile-landing-container .chatbotPadding{padding-top:7rem;position:fixed;bottom:1rem;width:100%!important}.mobile-landing-container .mini-title{font-size:1rem;color:#fff!important;height:100%;width:100%!important;display:inline-block;padding-top:.6rem}.mobile-landing-container .bgchanges{background-color:#fff}.mobile-landing-container .bgchanges .snapshot-link{display:block;margin:1.875rem 0}@media only screen and (min-width:768px) and (max-width:1023px){.mobile-landing-container .product-quick-links-flex-container li{min-width:11.3rem;padding-bottom:1.9rem}.mobile-landing-container .product-quick-links-flex-item{min-width:11.3rem}}@media only screen and (max-width:767px){.mobile-landing-container .product-quick-links h3{font-size:125%}.mobile-landing-container .product-quick-links-flex-container li{min-width:4.4rem;padding-bottom:1.3rem}.mobile-landing-container .product-quick-links .icon-title{font-size:.7rem}.mobile-landing-container .product-quick-links .icons{width:calc(4.4rem - 1.9rem);height:calc(4.4rem - 1.9rem)}}';
});

define('extensions/components/home/mobile-landing/loader', ["module", "text!./mobile-landing.html", "./mobile-landing", "text!./mobile-landing.css", "base-models/css"], function(e, t, n, l, m) {
    "use strict";
    return {
        viewModel: n,
        template: m.transformTemplate(t, l, m.getComponentName(e))
    }
});