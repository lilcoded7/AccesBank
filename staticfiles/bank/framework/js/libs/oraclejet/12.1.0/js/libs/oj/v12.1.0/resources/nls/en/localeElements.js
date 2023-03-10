define({
    main: {
        en: {
            identity: {
                version: {
                    _cldrVersion: "38"
                },
                language: "en"
            },
            numbers: {
                defaultNumberingSystem: "latn",
                otherNumberingSystems: {
                    native: "latn"
                },
                "symbols-numberSystem-latn": {
                    decimal: ".",
                    group: ",",
                    percentSign: "%",
                    plusSign: "+",
                    minusSign: "-",
                    exponential: "E",
                    perMille: "‰",
                    infinity: "∞",
                    nan: "NaN"
                },
                "decimalFormats-numberSystem-latn": {
                    standard: "#,##0.###",
                    long: {
                        decimalFormat: {
                            "1000-count-one": "0 thousand",
                            "1000-count-other": "0 thousand",
                            "10000-count-one": "00 thousand",
                            "10000-count-other": "00 thousand",
                            "100000-count-one": "000 thousand",
                            "100000-count-other": "000 thousand",
                            "1000000-count-one": "0 million",
                            "1000000-count-other": "0 million",
                            "10000000-count-one": "00 million",
                            "10000000-count-other": "00 million",
                            "100000000-count-one": "000 million",
                            "100000000-count-other": "000 million",
                            "1000000000-count-one": "0 billion",
                            "1000000000-count-other": "0 billion",
                            "10000000000-count-one": "00 billion",
                            "10000000000-count-other": "00 billion",
                            "100000000000-count-one": "000 billion",
                            "100000000000-count-other": "000 billion",
                            "1000000000000-count-one": "0 trillion",
                            "1000000000000-count-other": "0 trillion",
                            "10000000000000-count-one": "00 trillion",
                            "10000000000000-count-other": "00 trillion",
                            "100000000000000-count-one": "000 trillion",
                            "100000000000000-count-other": "000 trillion"
                        }
                    },
                    short: {
                        decimalFormat: {
                            "1000-count-one": "0K",
                            "1000-count-other": "0K",
                            "10000-count-one": "00K",
                            "10000-count-other": "00K",
                            "100000-count-one": "000K",
                            "100000-count-other": "000K",
                            "1000000-count-one": "0M",
                            "1000000-count-other": "0M",
                            "10000000-count-one": "00M",
                            "10000000-count-other": "00M",
                            "100000000-count-one": "000M",
                            "100000000-count-other": "000M",
                            "1000000000-count-one": "0B",
                            "1000000000-count-other": "0B",
                            "10000000000-count-one": "00B",
                            "10000000000-count-other": "00B",
                            "100000000000-count-one": "000B",
                            "100000000000-count-other": "000B",
                            "1000000000000-count-one": "0T",
                            "1000000000000-count-other": "0T",
                            "10000000000000-count-one": "00T",
                            "10000000000000-count-other": "00T",
                            "100000000000000-count-one": "000T",
                            "100000000000000-count-other": "000T"
                        }
                    }
                },
                "percentFormats-numberSystem-latn": {
                    standard: "#,##0%"
                },
                "currencyFormats-numberSystem-latn": {
                    standard: "¤#,##0.00",
                    "unitPattern-count-one": "{0} {1}",
                    "unitPattern-count-other": "{0} {1}"
                },
                currencies: {
                    AUD: {
                        displayName: "Australian Dollar",
                        symbol: "A$"
                    },
                    BRL: {
                        displayName: "Brazilian Real",
                        symbol: "R$"
                    },
                    CAD: {
                        displayName: "Canadian Dollar",
                        symbol: "CA$"
                    },
                    CHF: {
                        displayName: "Swiss Franc",
                        symbol: "CHF"
                    },
                    CNY: {
                        displayName: "Chinese Yuan",
                        symbol: "CN¥"
                    },
                    CZK: {
                        displayName: "Czech Koruna",
                        symbol: "CZK"
                    },
                    DKK: {
                        displayName: "Danish Krone",
                        symbol: "DKK"
                    },
                    EUR: {
                        displayName: "Euro",
                        symbol: "€"
                    },
                    GBP: {
                        displayName: "British Pound",
                        symbol: "£"
                    },
                    HKD: {
                        displayName: "Hong Kong Dollar",
                        symbol: "HK$"
                    },
                    HUF: {
                        displayName: "Hungarian Forint",
                        symbol: "HUF"
                    },
                    IDR: {
                        displayName: "Indonesian Rupiah",
                        symbol: "IDR"
                    },
                    INR: {
                        displayName: "Indian Rupee",
                        symbol: "₹"
                    },
                    JPY: {
                        displayName: "Japanese Yen",
                        symbol: "¥"
                    },
                    KRW: {
                        displayName: "South Korean Won",
                        symbol: "₩"
                    },
                    MXN: {
                        displayName: "Mexican Peso",
                        symbol: "MX$"
                    },
                    NOK: {
                        displayName: "Norwegian Krone",
                        symbol: "NOK"
                    },
                    PLN: {
                        displayName: "Polish Zloty",
                        symbol: "PLN"
                    },
                    RUB: {
                        displayName: "Russian Ruble",
                        symbol: "RUB"
                    },
                    SAR: {
                        displayName: "Saudi Riyal",
                        symbol: "SAR"
                    },
                    SEK: {
                        displayName: "Swedish Krona",
                        symbol: "SEK"
                    },
                    THB: {
                        displayName: "Thai Baht",
                        symbol: "THB"
                    },
                    TRY: {
                        displayName: "Turkish Lira",
                        symbol: "TRY"
                    },
                    TWD: {
                        displayName: "New Taiwan Dollar",
                        symbol: "NT$"
                    },
                    USD: {
                        displayName: "US Dollar",
                        symbol: "$"
                    },
                    ZAR: {
                        displayName: "South African Rand",
                        symbol: "ZAR"
                    }
                }
            },
            units: {
                narrow: {
                    "digital-terabyte": {
                        "unitPattern-count-one": "{0}TB",
                        "unitPattern-count-other": "{0}TB"
                    },
                    "digital-terabit": {
                        "unitPattern-count-one": "{0}Tb",
                        "unitPattern-count-other": "{0}Tb"
                    },
                    "digital-gigabyte": {
                        "unitPattern-count-one": "{0}GB",
                        "unitPattern-count-other": "{0}GB"
                    },
                    "digital-gigabit": {
                        "unitPattern-count-one": "{0}Gb",
                        "unitPattern-count-other": "{0}Gb"
                    },
                    "digital-megabyte": {
                        "unitPattern-count-one": "{0}MB",
                        "unitPattern-count-other": "{0}MB"
                    },
                    "digital-megabit": {
                        "unitPattern-count-one": "{0}Mb",
                        "unitPattern-count-other": "{0}Mb"
                    },
                    "digital-kilobyte": {
                        "unitPattern-count-one": "{0}kB",
                        "unitPattern-count-other": "{0}kB"
                    },
                    "digital-kilobit": {
                        "unitPattern-count-one": "{0}kb",
                        "unitPattern-count-other": "{0}kb"
                    },
                    "digital-byte": {
                        "unitPattern-count-one": "{0}B",
                        "unitPattern-count-other": "{0}B"
                    },
                    "digital-bit": {
                        "unitPattern-count-one": "{0}bit",
                        "unitPattern-count-other": "{0}bit"
                    }
                }
            }
        }
    }
});