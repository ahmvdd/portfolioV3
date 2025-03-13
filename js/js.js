document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    Splitting();
    luxy.init();
    gsap.registerPlugin(ScrollTrigger);

    const gTl = gsap.timeline();
    gTl.from(".title .char", 1, { opacity: 0, yPercent: 130, stagger: 0.06, ease: "back.out" });
    gTl.to(".header__img", 2, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, ease: "expo.out" }, "-=1");
    gTl.from(".header__marq", 2, { opacity: 0, yPercent: 100, ease: "expo.out" }, "-=1.5");

    const gsapSq = gsap.utils.toArray('.section-title__square');
    gsapSq.forEach((gSq, i) => {
        const rotat = gsap.from(gSq, 3, { rotation: 720 });
        ScrollTrigger.create({
            trigger: gSq,
            animation: rotat,
            start: 'top bottom',
            scrub: 1.9
        });
    });

    // Header Animations (les images ne sont plus affectées)
    function header() {
        gsap.to('.title_paralax', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            yPercent: -150
        });
        gsap.to('.header .stroke', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: 50
        });
        gsap.to('.header__marq-wrapp', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            xPercent: -50
        });
        gsap.to('.header__marq-star img', {
            scrollTrigger: {
                trigger: '.header',
                start: 'top top',
                scrub: 1.9
            },
            rotate: -720
        });
    }
    header();

    // About Section (SUPPRESSION des animations sur les images)
    function about() {
        gsap.to('.about__txt', {
            scrollTrigger: {
                trigger: '.about__wrapp',
                start: 'top bottom',
                scrub: 1.9
            },
            yPercent: 50
        });
    }
    about();

    // Benefits Section
    function benefits() {
        gsap.from('.benefits__num', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.benefits__list',
                start: 'top bottom',
                scrub: 1.9
            }
        });
    }
    benefits();

    // Portfolio Section (SUPPRESSION des animations sur les images)
    function portfolio() {
        gsap.from('.work__item, .work__item-num', {
            y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.work',
                start: 'top bottom',
                scrub: 1.9
            }
        });
    }
    portfolio();

    // Services Section
    function serv() {
        gsap.from('.serv__item-arrow', {
            x: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            scrollTrigger: {
                trigger: '.serv__list',
                start: 'top bottom',
                scrub: 1.9
            }
        });
    }
    serv();

    // Footer Section
    function footer() {
        gsap.from('.footer__div span', {
            y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            opacity: 0,
            scrollTrigger: {
                trigger: '.footer',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: 1.9
            }
        });
    }
    footer();
});

// Animation de l'élément sticky-name (Conservée)
document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    gsap.from('.sticky-name', {
        xPercent: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
    });
});
