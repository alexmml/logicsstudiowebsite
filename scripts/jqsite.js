function id(v) {
    return document.getElementById(v);
}
function loadbar() {
    var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            img = document.images,
            c = 0,
            tot = img.length;
    if (tot == 0)
        return doneLoading();
    function imgLoaded() {
        c += 1;
        var perc = ((100 / tot * c) << 0) + "%";
        prog.style.width = perc;
        stat.innerHTML = "Loading " + perc;
        if (c === tot)
            return doneLoading();
    }
    function doneLoading() {
        ovrl.style.opacity = 0;
        setTimeout(function () {
            ovrl.style.display = "none";
        }, 3200);
    }
    for (var i = 0; i < tot; i++) {
        var tImg = new Image();
        tImg.onload = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src = img[i].src;
    }
}
document.addEventListener('DOMContentLoaded', loadbar, false);
$(document).ready(function () {
//var current = 0;
//var lastcurrent = -1;

    $("#page0a").addClass("scrollpos");
    $('#content').bind('mousewheel', function (e) {
        var x = e.originalEvent.wheelDelta;
        function isInView(elem) {
            try {
                return $(elem).offset().top <= 120;
            } catch (e) {
            }
        }

        function isInViewUp(elem) {
            try {
                return $(elem).offset().top <= -120;
            } catch (e) {
            }
        }

        if (x < 0) {
            if (isInView($('#page0'))) {
//$("#page1a")[0].click();
                $("#page0a").addClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#fff");
            }
            if (isInView($('#page1'))) {
//$("#page2a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").addClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#333");
            }
            if (isInViewUp($('#page0_ser'))) {
                $("#nav-icon span").css("background", "#fff");
            }
            if (isInView($('#page1_ser'))) {
                $("#nav-icon span").css("background", "#333");
            }
            if (isInView($('#page2'))) {
//$("#page3a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").addClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#333");
            }
            if (isInView($('#page3'))) {
//$("#page4a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").addClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#333");
            }
            if (isInView($('#page4'))) {
//$("#page5a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").addClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#333");
            }
            if (isInView($('#page5'))) {
//$("#page5a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").addClass("scrollpos");
                $("#nav-icon span").css("background", "#fff");
            }
        } else {
            if (isInViewUp($('#page0'))) {
//$("#page1a")[0].click();
                $("#page0a").addClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#fff");
            }
            if (isInViewUp($('#page1'))) {
//$("#page2a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").addClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#333");
            }
            if (isInViewUp($('#page0_ser'))) {
                $("#nav-icon span").css("background", "#fff");
            }
            if (isInViewUp($('#page1_ser'))) {
                $("#nav-icon span").css("background", "#333");
            }
            if (isInViewUp($('#page2'))) {
//$("#page3a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").addClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#333");
            }
            if (isInViewUp($('#page3'))) {
//$("#page4a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").addClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#333");
            }
            if (isInViewUp($('#page4'))) {
//$("#page5a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").addClass("scrollpos");
                $("#page5a").removeClass("scrollpos");
                $("#nav-icon span").css("background", "#333");
            }
            if (isInViewUp($('#page5'))) {
//$("#page5a")[0].click();
                $("#page0a").removeClass("scrollpos");
                $("#page1a").removeClass("scrollpos");
                $("#page2a").removeClass("scrollpos");
                $("#page3a").removeClass("scrollpos");
                $("#page4a").removeClass("scrollpos");
                $("#page5a").addClass("scrollpos");
                $("#nav-icon span").css("background", "#fff");
            }
        }
    });
    $('#nav-icon').click(function () {
        $("#nav-icon span").css("background", "#fff");
        $(this).toggleClass('open');
        $("#menuitems").toggleClass('open');
        if ($("#menu-content").hasClass('open')) {
            $("#menu-content").removeClass('open');
            $("#menu-content").addClass('close');
            setTimeout(function () {
                $("#menu-content").css('display', 'none');
            }, 800);
            if (current === 0) {
                $("#page0a")[0].click();
            } else if (current === 1) {
                $("#page1a")[0].click();
            } else if (current === 2) {
                $("#page2a")[0].click();
            } else if (current === 3) {
                $("#page3a")[0].click();
            } else if (current === 4) {
                $("#page4a")[0].click();
            } else if (current === 5) {
                $("#page5a")[0].click();
            }
        } else {
            $("#menu-content").css('display', 'block');
            $("#menu-content").removeClass('close');
            $("#menu-content").addClass('open');
        }
    });
    $("#clients-0").hover(function () {
        $("#clients-1").css("display", "none");
        $("#clients-2").css("display", "block");
    }, function () {
        $("#clients-1").css("display", "block");
        $("#clients-2").css("display", "none");
    });
    $("#page0a").click(function () {
        $("#subcontent").animate({scrollTop: $($(this).attr('href')).offset().top, }, 500, 'linear');
        $("#nav-icon span").css("background", "#fff");
        setTimeout(function () {
            current = 0;
        }, 800);
        $("#page0a").addClass("scrollpos");
        $("#page1a").removeClass("scrollpos");
        $("#page2a").removeClass("scrollpos");
        $("#page3a").removeClass("scrollpos");
        $("#page4a").removeClass("scrollpos");
        $("#page5a").removeClass("scrollpos");
    });
    $("#page1a").click(function () {
        $("#subcontent").animate({scrollTop: $($(this).attr('href')).offset().top, }, 500, 'linear');
        $("#nav-icon span").css("background", "#333");
        setTimeout(function () {
            current = 1;
        }, 800);
        $("#page0a").removeClass("scrollpos");
        $("#page1a").addClass("scrollpos");
        $("#page2a").removeClass("scrollpos");
        $("#page3a").removeClass("scrollpos");
        $("#page4a").removeClass("scrollpos");
        $("#page5a").removeClass("scrollpos");
    });
    $("#page2a").click(function () {
        $("#subcontent").animate({scrollTop: $($(this).attr('href')).offset().top, }, 500, 'linear');
        $("#nav-icon span").css("background", "#333");
        setTimeout(function () {
            current = 2;
        }, 800);
        $("#page0a").removeClass("scrollpos");
        $("#page1a").removeClass("scrollpos");
        $("#page2a").addClass("scrollpos");
        $("#page3a").removeClass("scrollpos");
        $("#page4a").removeClass("scrollpos");
        $("#page5a").removeClass("scrollpos");
    });
    $("#page3a").click(function () {
        $("#subcontent").animate({scrollTop: $($(this).attr('href')).offset().top, }, 500, 'linear');
        $("#nav-icon span").css("background", "#333");
        setTimeout(function () {
            current = 3;
        }, 800);
        $("#page0a").removeClass("scrollpos");
        $("#page1a").removeClass("scrollpos");
        $("#page2a").removeClass("scrollpos");
        $("#page3a").addClass("scrollpos");
        $("#page4a").removeClass("scrollpos");
        $("#page5a").removeClass("scrollpos");
    });
    $("#page4a").click(function () {
        $("#subcontent").animate({scrollTop: $($(this).attr('href')).offset().top, }, 500, 'linear');
        $("#nav-icon span").css("background", "#333");
        setTimeout(function () {
            current = 4;
        }, 800);
        $("#page0a").removeClass("scrollpos");
        $("#page1a").removeClass("scrollpos");
        $("#page2a").removeClass("scrollpos");
        $("#page3a").removeClass("scrollpos");
        $("#page4a").addClass("scrollpos");
        $("#page5a").removeClass("scrollpos");
    });
    $("#page5a").click(function () {
        $("#subcontent").animate({scrollTop: $($(this).attr('href')).offset().top, }, 500, 'linear');
        $("#nav-icon span").css("background", "#fff");
        setTimeout(function () {
            current = 5;
        }, 800);
        $("#page0a").removeClass("scrollpos");
        $("#page1a").removeClass("scrollpos");
        $("#page2a").removeClass("scrollpos");
        $("#page3a").removeClass("scrollpos");
        $("#page4a").removeClass("scrollpos");
        $("#page5a").addClass("scrollpos");
    });
    $("#page0a").hover(function () {
        $("#page0span").fadeIn(100);
    }, function () {
        $("#page0span").fadeOut(100);
    });
    $("#page1a").hover(function () {
        $("#page1span").fadeIn(100);
    }, function () {
        $("#page1span").fadeOut(100);
    });
    $("#page2a").hover(function () {
        $("#page2span").fadeIn(100);
    }, function () {
        $("#page2span").fadeOut(100);
    });
    $("#page3a").hover(function () {
        $("#page3span").fadeIn(100);
    }, function () {
        $("#page3span").fadeOut(100);
    });
    $("#page4a").hover(function () {
        $("#page4span").fadeIn(100);
    }, function () {
        $("#page4span").fadeOut(100);
    });
    $("#page5a").hover(function () {
        $("#page5span").fadeIn(100);
    }, function () {
        $("#page5span").fadeOut(100);
    });
});