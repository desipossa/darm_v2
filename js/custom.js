(function () {
    //mainSloganTimeLine();
    mainTxtSLide();
    mainResSlide();
    mainBannerSlide();
    mainPortfolioSlide();
    setInterval(watch, 1000);
    mainSloganTimeLine();
    //mainBannerTimeline();
    mainFormTimeLine();
    // mainPortfolioTimeLine();
    smoothScroll();
    mainIntroTimelime();
})();


function mainIntroTimelime() {
    const tl = gsap.timeline();

    const fn = document.querySelectorAll('.m>div');

    fn.forEach((navi, num) => {
        tl.to(`#v0${num + 1}`, {
            motionPath: {
                path: `#p0${num + 1}`,
                align: `#p0${num + 1}`,
                alignOrigin: [0.5, 0.5],
                autoRotate: true,

            },
            duration: 1,
            delay: 0.3 * num,
        })
    });

    tl.from('.mainVisal .title h2', {
        x: 2500,
    })
}


function mainBannerTimeline() {
    const tl = gsap.timeline();

    tl.from('#mainBanner .bar', {
        width: '10rem',
    })

    ScrollTrigger.create({
        animation: tl,
        trigger: '#mainBanner',
        pin: true,
        scrub: 1,
        start: 'top top',
        end: "+=3000",
        markers: true
    })
}


function mainVisualSlideTimeline(itm, num, slideNumber) {
    // itm.forEach(it => {
    //     gsap.to(it, { clearProps: true })
    // });

    const tl = gsap.timeline();

    // gsap.to('.can', {
    //     duration: 6,
    //     ease: 'none',
    //     background: `url(./images/beer.jpg) ${slideNumber * 100 / itm.length}% 0, url(./images/soda_mockup.png)`,
    // },)


    //tl.from(itm[1], { width: 0, rotation: 10, autoAlpha: 0, ease: 'bounce', delay: 2, duration: 0.5 });
    tl.from(itm[0], { x: 600, autoAlpha: 0, duration: 0.5, delay: 2, },);
    tl.from(itm[2], { x: 600, autoAlpha: 0, duration: 0.5 }, "-=1");
    tl.from(itm[3], { x: 600, autoAlpha: 0, duration: 0.5 });
    //tl.from(itm[4], { scale: 2, autoAlpha: 0, duration: 0.5, ease: 'bounce' });
    tl.to(itm[4], { y: -100 });
}


function smoothScroll() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}


function watch() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    document.querySelector('#mainSlogan .time_area .clock .hour').style.transform = `rotate(${h * (360 / 12)}deg)`
    document.querySelector('#mainSlogan .time_area .clock .minuite').style.transform = `rotate(${m * (360 / 60)}deg)`
    document.querySelector('#mainSlogan .time_area .clock .second').style.transform = `rotate(${s * (360 / 60)}deg)`

}


function mainTxtSLide() {

    let slideNumber = 0;

    const slides = document.querySelectorAll('#mainSlogan .swiper-slide');
    const sl = new Swiper('.m_txt_slide', {
        loop: true,
        speed: 1800,
        slidesPerView: 3,
        slidesOffsetAfter: 200,
        edgeSwipeThreshold: 100,
        //direction: 'vertical',
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: false,
            shadowOffset: 80,
            shadowScale: 0.4,
        },
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        on: {
            init: function () {
                const itms = slides[0].querySelectorAll('.ani-itm');
                mainVisualSlideTimeline(itms);
            },
            slideChangeTransitionStart: function () {
                //console.log(this.realIndex);
                //document.querySelector('h1').innerText = this.realIndex;
                const itms = slides[this.realIndex].querySelectorAll('.ani-itm');
                slideNumber = slideNumber + 1;
                //mainVisualSlideStartTimeline(itms, this.realIndex)
                mainVisualSlideTimeline(itms, this.realIndex, slideNumber);
            },
        }
    });

    function slideTab() {
        const btn = document.querySelectorAll('#mainSlogan .slide_link button');

        btn.forEach((it, idx) => {
            it.addEventListener('click', () => {
                sl.slideToLoop(idx)
            })
        })
    }

    slideTab();

}

function mainPortfolioSlide() {
    const sl = new Swiper('#mainPortfolioAll .portfolio', {
        loop: true,
        speed: 600,
        //loopedSlides: 1,
        // autoplay: {
        //     delay: 8000,
        //     disableOnInteraction: false,
        // },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '#mainPortfolioAll .inner .arrow_right',
        },

        on: {
            slideChangeTransitionStart: function () {
                let num = this.realIndex > 8 ? (this.realIndex + 1) : `0` + (this.realIndex + 1);
                document.querySelector('#mainPortfolioAll .num').innerHTML = num;
            }
        }
    });




    //const PTA = document.querySelectorAll('#mainPortfolioAll .itm h3');
    //console.log(PTA);
    //const box = document.createElement('div');
    //box.classList.add('case')

    // document.querySelector('#mainPortfolioAll .title').append(box);

    // PTA.forEach((it, idx) => {
    //     it.querySelector('span').style.display = 'none';

    //     const itm = document.createElement('button');
    //     itm.innerHTML = `    
    // ${it.innerHTML}
    // `
    //     box.append(itm);
    // });


    // const AllItm = document.querySelectorAll('#mainPortfolioAll .case button');
    // console.log(AllItm)

    // AllItm.forEach((it, idx) => {
    //     it.addEventListener('click', () => {
    //         //console.log(idx);
    //         sl.slideToLoop(idx)
    //     })
    // })

}


function mainResSlide() {
    const sl = new Swiper('.res_slide', {
        loop: true,
        effect: "cube",
        speed: 1500,
        grabCursor: true,
        spaceBetween: 120,
        cubeEffect: {
            shadow: true,
            slideShadows: false,
            shadowOffset: 120,
            shadowScale: 0.6,
        },
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    })
}


function mainVisalSlidex() {
    const sl = new Swiper('.main_visual_slide .swiper', {
        loop: true,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        speed: 800,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,

        },
    })
}
mainVisalSlidex();


function mainBannerSlide() {
    const sl = new Swiper('.ba_slide', {
        loop: true,
        speed: 4000,
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });


    const sl2 = new Swiper('.ba_slide2', {
        loop: true,
        speed: 4000,
        slidesPerView: 8,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    })
}


function mainSloganTimeLine() {
    const tl = gsap.timeline();
    tl.set({}, {}, '+=1');
    //tl.set('#mainSlogan .m_txt_slide', { y: -50 });
    tl.to('#mainSlogan .m_txt_slide', { rotation: 180, duration: 3 });
    tl.set({}, {}, '+=1');
    //tl.to('#mainSlogan .time_area', { scale: 5, autoAlpha: 0 });

    ScrollTrigger.create({
        animation: tl,
        trigger: '#mainSlogan',
        pin: true,
        scrub: 1,
        end: "+=600%",
        //markers: true
    })
}


function mainFormTimeLine() {
    const tl = gsap.timeline();

    // tl.set({}, {}, "-=2")
    tl.to('#mainForm.default_section', { '--left': '120rem', });
    tl.to('#mainForm .inner .itm', {
        background: 'var(--src-img) -960px 0, url(./images/soda_mockup.png)',
        duration: 4,
    })
    tl.set({}, {}, "+=1");
    //tl.to('#mainSlogan .time_area', { scale: 5, autoAlpha: 0 });

    ScrollTrigger.create({
        animation: tl,
        trigger: '#mainForm',
        pin: true,
        scrub: 1,
        start: "center center",
        end: "+=600% center",
        //markers: true
    })
}


function mainPortfolioTimeLine() {
    const tl = gsap.timeline();

    tl.set({}, {}, "-=2")
    tl.from('#mainPortfolio h2', { x: -400, });
    tl.set({}, {}, "+=1")
    tl.to('#mainPortfolio .mockup', { y: -100, });
    tl.set({}, {}, "+=2");
    //tl.to('#mainSlogan .time_area', { scale: 5, autoAlpha: 0 });

    ScrollTrigger.create({
        animation: tl,
        trigger: '#mainPortfolio',
        pin: true,
        scrub: 1,
        //start: "40% top",
        end: "+=400%",
        //markers: true
    })
}





