define('text!extensions/components/widgets/pre-login/loginretail/loginretail.html', [], function() {
    return '<!-- ko if: $component.goToLogin() --><div data-bind="component : {name :$component.type,params:{rootModel:$component,root:$root} }"></div><!-- /ko --><!-- ko if:!$component.hideMobileLanding() --><mobile-landing params="baseModel : $baseModel, dashboard: $dashboard, rootModel : $component"></mobile-landing><!-- /ko -->';
});

define('extensions/resources/nls/login-form', [], function() {
    "use strict";
    return new function() {
        return {
            root: {
                loginForm: {
                    labels: {
                        login: "Login",
                        login2: "Log in",
                        password: "Password",
                        forgotPassword: "Forgot Password?",
                        forgotUserId: "Forgot User Id",
                        forgotUsername: "Forgot Username",
                        passwordHelp: "Your password must be at least 8 characters long, must contain an uppercase character, must contain a number",
                        cancel: "Cancel",
                        ok: "Ok",
                        loginHeader: "Login",
                        loginHeaderMobile: "Login",
                        verticalSeperation: "|",
                        submit: "Submit",
                        username: "Username",
                        pin: "Pin",
                        pattern: "Pattern",
                        touchid: "Finger Print",
                        faceid: "Face ID",
                        pwd: "Password",
                        sinceYouAreNewUser: "Since you are a new user please complete the first time login steps using your login credentials.",
                        enableAlternateLogin: "Enable Alternate Login",
                        fp_changed: "Fingerprint on this device has been modified. Please login again",
                        fp_token_expired: "Token has expired",
                        fp_error: "Fingerprint Authentication Failed. Please Try Again",
                        fp_cancelled: "Fingerprint Authentication Dialog Cancelled!",
                        fp_token_failed: "Token validation failed. Please login again with Username and password.",
                        token_unauthorized_error: "Quick login failed. Please login with Username and password.",
                        token_failed_error: "Login failed. Please login after sometime.",
                        login_error: "Login failed. Please login after sometime.",
                        fp_token_invalid: "User Authentication for quick login failed. Please login again with Username and password.",
                        push_window_message: "Ecobank would like to send notifications. These may include alerts, offers, sounds, badges and images. Would you like to allow the same.",
                        fingerPrintAuthMessage: "Place your finger",
                        allow: "Allow",
                        disallow: "Disallow",
                        push_window_title: "Allow Notifications",
                        noAdminFunction: "Administrator functionalities not supported on mobile",
                        quicksnapshot: "Quick Snapshot",
                        verify_message: "Place Your Finger",
                        loginVia: "Login with {type}",
                        authenticate: "Authenticate",
                        authenticateText: "Kindly authenticate to complete the transaction",
                        confirm: "Confirm",
                        subHeader: "",
                        register: "Register for Internet Banking",
                        byLoggingIn: "By Logging in, I Acknowledge that I have read and that I  agree with the ",
                        termsConditions: "Terms & Conditions",
                        and: "and ",
                        privacyPolicy: "Privacy Policy",
                        offers: "Offers!",
                        exitModal: "Are you sure you want to exit?",
                        yes: "Yes",
                        no: "No",
                        exitApplication: "Exit",
                        welcome: "Welcome to ",
                        ecobankOnline: "Ecobank Online",
                        omniLite: "Omni Lite",
                        subHeading1: "Check your balance, make transfers and payments instantly",
                        subHeading2: "To find out more about Ecobank Digital solutions visit ",
                        subHeading3: "Do it all on mobile too with the new",
                        app: "app",
                        ecoBankOnlineGo: "Ecobank Online GO",
                        subHeading4: "Download it now from google play store or App store.",
                        ecobankOn: "Omni lite",
                        today: "Today!",
                        newToEco: "New to Ecobank?",
                        openBankAcct: "Open a bank Account",
                        imEcobank: "An improved Ecobank Online, all for a better Experience",
                        ourBestMesg: "Our new best in-class digital banking services with a brand",
                        newfeat: "new interface and a host of new features",
                        newWelcome: "Welcome to the New Omni Lite",
                        newFeatures: " Introducing a new interface and new features",
                        ourbestclass: "for our best-in-class online banking service",
                        transfer: "Transfers",
                        easyProfileMgmt: "Easy Profile Management",
                        billPayment: "Bill Payments",
                        whatyoucanMesg: "What you can do on the New Ecobank Online",
                        whatnedMesg: "What you need to Log in",
                        sameLogin: "Login remains the same with your username and password from the previous platform.",
                        whattransMesg: "What you need to Transact",
                        method: "Method of transaction remains the same for all affiliates except Nigeria.",
                        nigeriaOnly: "For Nigeria only",
                        nigerTransmesg: "You can transact with a second-level authentication (2FA) using the Ecobank Authenticator app or your current hard token. Transaction packages below N1,000,000.00 will require SMS/EMAIL OTP authentication.",
                        betrMob: "Better user interface",
                        easierAuth: "Easier authorisation",
                        betrInterface: "Better mobile app experience",
                        enhancedSecurity: "Enhanced security",
                        dirAcc: "Direct access to Customer Support",
                        ecoAfrica: "Ecobank Africa transfers via Rapidtransfer",
                        loginToday: "Login today",
                        yourpwdsame: "Your username and password remain the same.",
                        transactSecure: "Transact securely",
                        transactmesg: "You can transact with minimal authorisation between your accounts. However, for Nigeria only, some transactions involving other accounts will require second level authorisation using the Ecobank Authenticator App.",
                        scancode: "For Nigeria only, scan the code to download the Ecobank Authenticator App now",
                        finfMore: " Find out more",
                        readymesg: "Ready? Go to Login",
                        experience: "Experience the difference"
                    },
                    keys: {
                        accountId: "Account Number",
                        amount: "Amount"
                    },
                    validationMsgs: {
                        invalidCredentials: "Invalid Username and/or Password",
                        errrorOAM10: "Your password has expired. Please use Oracle Directory Services Manager to reset the same",
                        errrorOAM5: "Your account is locked. Please contact branch/customer care center to unlock the same"
                    }
                },
                errors: {
                    NO_CONNECTIVITY: "Please Check your Internet Connection",
                    DEVICE_NOT_COMPLIANT: "Your Device is Not Compliant",
                    SSL_PINNING_FAILED: "Untrusted Server. Contact Bank",
                    INTERNAL_SERVER_ERROR: "Internal Server Error",
                    MULTIPLE_WATCHES_CONNECTED: "You have connected multiple watches. Please connect only one and continue.",
                    WATCH_NOT_CONNECTED: "You have not connected any watches. Please connect one and continue.",
                    APP_NOT_FOUND: "Application not found in the watch connected."
                },
                forgotPasswordClick: "Click For Forgot Password",
                forgotPasswordTitle: "Click Here To Reset Your Password",
                forgotUserIdClick: "Click For Forgot User Id",
                forgotUserIdTitle: "Click Here To Reset Your User Id"
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
            el: !0
        }
    }
});

define('extensions/components/widgets/pre-login/loginretail/loginretail', ["knockout", "jquery", "ojL10n!extensions/resources/nls/login-form", "baseLogger", "ojs/ojswitch", "framework/elements/api/virtual-keyboard/loader"], function(o, e, n, a) {
    "use strict";
    return function(i) {
        const l = this;
        if (i.baseModel.registerComponent("login-options", "login"), i.baseModel.registerComponent("pin-login", "login"), i.baseModel.registerComponent("mobile-landing", "home"), l.username = o.observable(), l.password = o.observable(), l.isLarge = o.observable("oj-flex"), l.message = o.observable(), l.allowSnapshot = o.observable(), l.hideMobileLanding = o.observable(!0), l.goToLogin = o.observable(!0), l.isPushoobAllowed = o.observable(), l.notificationData = o.observable(), l.userType = o.observable(), l.nls = n, l.showPopup = !0, e("span.hamburger-icon").addClass("hide"), i.dashboard.userData.userProfile && o.contextFor(document.body).$data.resetLayout(), i.baseModel.large() && !i.baseModel.cordovaDevice() || (l.showPopup = !1, l.hideMobileLanding(!1)), i.data && i.data.data && i.data.data.landingModule ? (l.landingModule = i.data.data.landingModule, l.landingComponent = i.data.data.landingModule) : i.rootModel && i.rootModel.params && i.rootModel.params.landingModule && (l.landingModule = i.rootModel.params.landingModule, l.landingComponent = i.rootModel.params.landingComponent, l.allowSnapshot(i.rootModel.params.params.allowSnapshot), l.hideMobileLanding(i.rootModel.params.hideMobileLanding)), l.cancelLogin = function() {
                history.back()
            }, i.baseModel.cordovaDevice()) {
            l.goToLogin(!1), l.isLarge("oj-flex oj-lg-flex-items-initial oj-lg-justify-content-center oj-md-flex-items-initial oj-md-justify-content-center");
            const o = function(o) {
                    const e = function() {
                            l.type = "login-form-mobile", l.goToLogin(!0), i.baseModel.registerComponent(l.type, "login")
                        },
                        n = function() {
                            a.error("ERROR IN DELETING THE DATA"), l.type = "login-form-mobile", l.goToLogin(!0), l.hideMobileLanding(!1), i.baseModel.registerComponent(l.type, "login")
                        };
                    o ? (l.notificationData(JSON.parse(o)), l.isPushoobAllowed(!0), l.hideMobileLanding(!0), window.plugins.appPreferences.remove(e, n, "oob_token_data")) : (l.type = "login-form-mobile", l.goToLogin(!0), i.baseModel.registerComponent(l.type, "login"))
                },
                e = function() {
                    a.error("ERROR IN FETCHING THE DATA"), l.type = "login-form-mobile", l.goToLogin(!0), l.hideMobileLanding(!1), i.baseModel.registerComponent(l.type, "login")
                };
            window.plugins.appPreferences.fetch(o, e, "oob_token_data")
        } else l.type = "login-form-web", l.userType("RETAIL"), i.baseModel.registerComponent(l.type, "login")
    }
});

define('text!extensions/components/widgets/pre-login/loginretail/loginretail.json', [], function() {
    return '{}';
});

define('extensions/components/widgets/pre-login/loginretail/loader', ["text!./loginretail.html", "./loginretail", "text!./loginretail.json"], function(t, e) {
    "use strict";
    return {
        viewModel: e,
        template: t
    }
});