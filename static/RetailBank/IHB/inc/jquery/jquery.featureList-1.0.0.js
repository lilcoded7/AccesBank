(function(a) {
    a.fn.featureList = function(c) {
        var d = a(this);
        var b = a(c.output);
        new jQuery.featureList(d, b, c);
        return this
    };
    a.featureList = function(f, d, e) {
        function b(i) {
            if (typeof i == "undefined") {
                i = g + 1;
                i = i >= c ? 0 : i
            }
            f.removeClass("current").filter(":eq(" + i + ")").addClass("current");
            d.stop(true, true).filter(":visible").fadeOut();
            d.filter(":eq(" + i + ")").fadeIn(function() {
                g = i
            })
        }
        var e = e || {};
        var c = d.length;
        var g = e.start_item || 0;
        e.pause_on_hover = e.pause_on_hover || true;
        e.transition_interval = e.transition_interval || 5000;
        d.hide().eq(g).show();
        f.eq(g).addClass("current");
        f.click(function() {
            if (a(this).hasClass("current")) {
                return false
            }
            b(f.index(this))
        });
        if (e.transition_interval > 0) {
            var h = setInterval(function() {
                b()
            }, e.transition_interval);
            if (e.pause_on_hover) {
                f.mouseenter(function() {
                    clearInterval(h)
                }).mouseleave(function() {
                    clearInterval(h);
                    h = setInterval(function() {
                        b()
                    }, e.transition_interval)
                })
            }
        }
    }
})(jQuery);