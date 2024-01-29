! function(e) {
    "use strict";
    e(document).ready(function() {
        let t = localStorage.getItem("darkMode"),
            l = document.querySelectorAll(".dark-mode-toggle"),
            i = () => {
                document.body.setAttribute("data-bs-theme", "dark"), localStorage.setItem("darkMode", "enabled")
            },
            s = () => {
                document.body.setAttribute("data-bs-theme", "light"), localStorage.removeItem("darkMode")
            };
        t && i(), l && l.forEach(e => {
            e.addEventListener("click", () => {
                e.classList.toggle("active"), (t = localStorage.getItem("darkMode")) ? s() : i()
            })
        }), e(".back-to-top").on("click", function(t) {
            t.preventDefault(), e("html, body").animate({
                scrollTop: 0
            }, 300)
        });
        let n = e('[data-set="custom-dropdown"]'),
            o = e(".custom-dropdown__content");
        (n || o) && (n.each(function() {
            e(this).on("click", function(t) {
                t.stopPropagation(), e("body").toggleClass("custom-dropdown-open"), o.toggleClass("is-open")
            })
        }), o.each(function() {
            e(this).on("click", function(e) {
                e.stopPropagation()
            })
        }), e(document).on("click", function() {
            e("body").removeClass("custom-dropdown-open"), o.removeClass("is-open")
        }));
        let r = window.matchMedia("(max-width: 1199px)"),
            a = window.matchMedia("(min-width: 1200px)"),
            c = document.querySelector(".mobile-menu__list"),
            d = new PerfectScrollbar(c);
        a.addEventListener("change", function e(t) {
            t.matches ? (d && d.destroy(), d = null) : d = new PerfectScrollbar(c)
        });
        let p = e(".mobile-menu__link.has-sub"),
            u = e(".mobile-menu__sub"),
            b = e(".mobile-menu__sub-link.has-sub"),
            w = e(".mobile-menu__deep"),
            f = e(".mobile-menu__deep-link.has-sub"),
            m = e(".mobile-menu__deeper"),
            v = e(".mobile-menu__toggler"),
            g = e(".mobile-menu__close");

        function h(t) {
            t.matches ? (u.hide(), p.on("click", function() {
                return e(this).parent().toggleClass("is-active"), e(this).siblings().slideToggle(), !1
            }), w.hide(), b.on("click", function(t) {
                t.preventDefault(), e(this).parent().toggleClass("is-active"), e(this).siblings().slideToggle()
            }), m.hide(), f.on("click", function(t) {
                t.preventDefault(), e(this).parent().toggleClass("is-active"), e(this).siblings().slideToggle()
            }), v.on("click", function() {
                e("body").addClass("mobile-menu--toggle")
            }), g.on("click", function() {
                e("body").removeClass("mobile-menu--toggle")
            })) : (p.off("click"), u.removeAttr("style"), b.off("click"), w.removeAttr("style"), f.off("click"), m.removeAttr("style"), e("body").removeClass("mobile-menu--toggle"))
        }
        h(r), r.addEventListener("change", h);
        let y = document.querySelector(".hero-slider-1");
        y && new Swiper(y, {
            loop: !0,
            pagination: {
                el: ".hero-slider-1 .swiper-pagination",
                type: "bullets",
                clickable: !0
            },
            slidesPerView: 1,
            autoplay: {
                delay: 8e3,
                pauseOnMouseEnter: !0
            },
            speed: 1500,
            autoHeight: !1
        });
        let _ = document.querySelector(".hero-slider-2");
        _ && new Swiper(_, {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: !0,
            loop: !0,
            autoplay: {
                delay: 8e3,
                pauseOnMouseEnter: !0,
                disableOnInteraction: !1
            },
            pagination: {
                el: ".hero-slider-2 .swiper-pagination",
                type: "fraction"
            },
            navigation: {
                nextEl: ".hero-slider-2 .swiper-button-next",
                prevEl: ".hero-slider-2 .swiper-button-prev"
            },
            effect: "fade",
            fadeEffect: {
                crossFade: !1
            }
        });
        let k = document.querySelector(".feedback-slider-1");
        k && new Swiper(k, {
            slidesPerView: 1,
            loop: !0,
            spaceBetween: 8,
            navigation: {
                nextEl: ".feedback-slider-1__btn.swiper-button-next",
                prevEl: ".feedback-slider-1__btn.swiper-button-prev"
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });
        let S = document.querySelector(".feedback-slider-2__is");
        S && new Swiper(S, {
            slidesPerView: 1,
            loop: !0,
            navigation: {
                nextEl: ".feedback-slider-2__btn.swiper-button-next",
                prevEl: ".feedback-slider-2__btn.swiper-button-prev"
            },
            breakpoints: {
                992: {
                    slidesPerView: 2
                }
            }
        });
        let P = document.querySelector(".feedback-slider-3");
        P && new Swiper(P, {
            slidesPerView: 1,
            loop: !0,
            spaceBetween: 8,
            navigation: {
                nextEl: ".feedback-slider-1__btn.swiper-button-next",
                prevEl: ".feedback-slider-1__btn.swiper-button-prev"
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16
                }
            }
        });
        let x = document.querySelector(".testimonial-slider-1");
        x && new Swiper(x, {
            slidesPerView: 1,
            centeredSlides: !0,
            spaceBetween: 32,
            loop: !0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            centeredSlidesBounds: !0,
            breakpoints: {
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 16
                },
                1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 32
                },
                1920: {
                    slidesPerView: 3.5
                }
            }
        });
        let E = document.querySelector(".gallery-slider-1");
        E && new Swiper(E, {
            slidesPerView: 1,
            centeredSlides: !0,
            spaceBetween: 24,
            loop: !0,
            centeredSlidesBounds: !0,
            autoplay: !0,
            disableOnInteraction: !1,
            delay: 6e3,
            speed: 4e3,
            breakpoints: {
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 16
                },
                1200: {
                    slidesPerView: 2.5,
                    spaceBetween: 32
                },
                1920: {
                    slidesPerView: 3.5
                }
            }
        }), e(".year-review__column").each(function() {
            e(this).on("mouseover", function() {
                e(this).addClass("active"), e(this).siblings().removeClass("active")
            })
        });
        let V = document.querySelector(".value-slider"),
            q = ['<span class="d-inline-block clr-base me-2">01</span> People <span class="value-slider__circle value-slider__circle-1"></span>', '<span class="d-inline-block clr-base me-2">02</span> Growth <span class="value-slider__circle value-slider__circle-2"></span>', '<span class="d-inline-block clr-base me-2">03</span> Responsibility <span class="value-slider__circle value-slider__circle-3"></span>', '<span class="d-inline-block clr-base me-2">04</span> Fullfilment <span class="value-slider__circle value-slider__circle-4"></span>', '<span class="d-inline-block clr-base me-2">05</span> Fair Play <span class="value-slider__circle value-slider__circle-5"></span>', '<span class="d-inline-block clr-base me-2">06</span> Opennes <span class="value-slider__circle value-slider__circle-6"></span>'];
        if (V) {
            let C = new Swiper(V, {
                slidesPerView: 1,
                autoplay: !1,
                disableOnInteraction: !1,
                speed: 1e3,
                pagination: {
                    el: ".value-slider-container .swiper-pagination",
                    clickable: !0,
                    renderBullet: function(e, t) {
                        return '<span class="' + t + '">' + q[e] + "</span>"
                    }
                },
                navigation: {
                    nextEl: ".value-slider-container .swiper-button-next",
                    prevEl: ".value-slider-container .swiper-button-prev"
                },
                effect: "fade",
                fadeEffect: {
                    crossFade: !1
                },
                on: {
                    init: function() {
                        let e = this.pagination.bullets,
                            t = document.querySelector(".value-slider__fraction");
                        return t.innerHTML = `1 / ${e.length}`
                    }
                }
            });
            C.on("slideChange", function() {
                let t = this.pagination.bullets,
                    l = e(".swiper-pagination-bullet-active .clr-base").text(),
                    i = Number(l).toString(),
                    s = document.querySelector(".value-slider__fraction");
                return s.innerHTML = `${i} / ${t.length}`
            })
        }
        let B = e(".leadership-card__open-btn"),
            I = e(".leadership-card__close-btn");
        (B || I) && (B.each(function() {
            e(this).on("click", function() {
                e(this).parent().siblings(".leadership-card__overlay").addClass("active")
            })
        }), I.each(function() {
            e(this).on("click", function() {
                e(this).parent().toggleClass("active")
            })
        }));
        let O = document.querySelector(".testimonial-slider-2");
        O && new Swiper(O, {
            slidesPerView: 1,
            loop: !0,
            disableOnInteraction: !1,
            speed: 1e3,
            spaceBetween: 32,
            navigation: {
                nextEl: ".testimonial-slider-2 .testimonial-slider-2__btn-next",
                prevEl: ".testimonial-slider-2 .testimonial-slider-2__btn-prev"
            }
        });
        let M = document.querySelectorAll(".custom-accordion__header");
        M.forEach(e => {
            e.addEventListener("click", function() {
                let e = this.nextElementSibling;
                e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px"
            })
        }), GLightbox({
            selector: ".video-button",
            autoplayVideos: !1
        });
        let L = document.querySelector(".layout-slider");
        L && new Swiper(L, {
            loop: !0,
            autoplay: {
                disableOnInteraction: !1,
                delay: 0
            },
            slidesPerView: "auto",
            speed: 8e3,
            grabCursor: !0,
            mousewheelControl: !0,
            keyboardControl: !0,
            spaceBetween: 24,
            centeredSlides: !0,
            breakpoints: {
                768: {
                    slidesPerView: 4.5
                },
                1400: {
                    slidesPerView: 5.5
                }
            }
        });
        let T = document.querySelector(".layout-slider-reverse");
        T && new Swiper(T, {
            loop: !0,
            autoplay: {
                disableOnInteraction: !1,
                delay: 0,
                reverseDirection: !0
            },
            slidesPerView: "auto",
            speed: 8e3,
            grabCursor: !0,
            mousewheelControl: !0,
            keyboardControl: !0,
            spaceBetween: 24,
            centeredSlides: !0,
            breakpoints: {
                768: {
                    slidesPerView: 4.5
                },
                1400: {
                    slidesPerView: 5.5
                }
            }
        });
        let A = window.counterUp.default,
            H = e => {
                e.forEach(e => {
                    let t = e.target;
                    e.isIntersecting && A(t, {
                        duration: 1e3,
                        delay: 16
                    })
                })
            },
            D = new IntersectionObserver(H, {
                threshold: 1
            }),
            F = document.querySelector(".demo-counter"),
            Y = document.querySelector(".page-counter"),
            G = document.querySelector(".component-counter");
        (F || Y || G) && (D.observe(F), D.observe(Y), D.observe(G)), scrollCue.init({
            duration: 700
        })
    })
}(jQuery);
var bodySelector = document.querySelector("body");
const header = document.querySelector(".header--fixed");
if (bodySelector.contains(header)) {
    let e = header.offsetTop;

    function t() {
        window.scrollY > e ? document.body.classList.add("header-fixed") : (window.scrollY, document.body.classList.remove("header-fixed"))
    }
    $(window).on("scroll", function() {
        t()
    })
}
$(window).on("scroll", function() {
    var e = $(".back-to-top");
    $(window).scrollTop() > 1200 ? e.fadeIn(1e3) : e.fadeOut(1e3)
}), $(window).on("load", function() {
    $(".preloader").fadeOut(1e3)
});