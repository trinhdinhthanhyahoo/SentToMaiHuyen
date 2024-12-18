(function () {
    function r(a) { gsap.killTweensOf(a, { opacity: !0 }); gsap.fromTo(a, { opacity: 1 }, { duration: .07, opacity: Math.random(), repeat: -1 }) } function t(a) {
        e && (a = l[d], gsap.set(a, { x: gsap.getProperty(".pContainer", "x"), y: gsap.getProperty(".pContainer", "y"), scale: m() }), gsap.timeline().to(a, {
            duration: gsap.utils.random(.61, 6), physics2D: { velocity: gsap.utils.random(-23, 23), angle: gsap.utils.random(-180, 180), gravity: gsap.utils.random(-6, 50) }, scale: 0, rotation: gsap.utils.random(-123, 360), ease: "power1", onStart: r, onStartParams: [a],
            onRepeat: function (b) { gsap.set(b, { scale: m() }) }, onRepeatParams: [a]
        }), d++, d = 201 <= d ? 0 : d)
    } MorphSVGPlugin.convertToPath("polygon"); document.querySelector(".pContainer"); var u = document.querySelector(".mainSVG"); document.querySelector("#star"); var c = document.querySelector(".sparkle"); document.querySelector("#tree"); var e = !0, n = "#E8F6F8 #ACE8F8 #F6FBFE #A2CBDC #B74551 #5DBA72 #910B28 #910B28 #446D39".split(" "), p = ["#star", "#circ", "#cross", "#heart"], l = [], d = 0; gsap.set("svg", { visibility: "visible" }); gsap.set(c,
        { transformOrigin: "50% 50%", y: -100 }); c = function (a) { var b = [], f = MotionPathPlugin.getRawPath(a)[0]; f.forEach(function (v, g) { var h = {}; h.x = f[2 * g]; h.y = f[2 * g + 1]; g % 2 && b.push(h) }); return b }; c(".treePath"); var q = c(".treeBottomPath"); c = gsap.timeline({ delay: 0, repeat: 0 }); var k, m = gsap.utils.random(.5, 3, .001, !0); (function () {
            for (var a = 201, b; -1 < --a;)b = document.querySelector(p[a % p.length]).cloneNode(!0), u.appendChild(b), b.setAttribute("fill", n[a % n.length]), b.setAttribute("class", "particle"), l.push(b), gsap.set(b, {
                x: -100,
                y: -100, transformOrigin: "50% 50%"
            })
        })(); (function () { k = gsap.timeline({ onUpdate: t }); k.to(".pContainer, .sparkle", { duration: 6, motionPath: { path: ".treePath", autoRotate: !1 }, ease: "linear" }).to(".pContainer, .sparkle", { duration: 1, onStart: function () { e = !1 }, x: q[0].x, y: q[0].y }).to(".pContainer, .sparkle", { duration: 2, onStart: function () { e = !0 }, motionPath: { path: ".treeBottomPath", autoRotate: !1 }, ease: "linear" }, "-=0").from(".treeBottomMask", { duration: 2, drawSVG: "0% 0%", stroke: "#FFF", ease: "linear" }, "-=2") })(); c.from([".treePathMask",
            ".treePotMask"], { drawSVG: "0% 0%", stroke: "#50C878", stagger: { each: 6 }, duration: gsap.utils.wrap([6, 1, 2]), ease: "linear" }).from(".treeStar", { duration: 3, scaleY: 0, scaleX: .15, transformOrigin: "50% 50%", ease: "elastic(1,0.5)" }, "-=4").to(".sparkle", { duration: 3, opacity: 0, ease: "rough({strength: 2, points: 100, template: linear, taper: both, randomize: true, clamp: false})" }, "-=0").to(".treeStarOutline", { duration: 1, opacity: 1, ease: "rough({strength: 2, points: 16, template: linear, taper: none, randomize: true, clamp: false})" },
                "+=1"); c.add(k, 0); gsap.globalTimeline.timeScale(1.5); k.vars.onComplete = function () { 
                    gsap.to('foreignObject', { 
                        opacity: 1,
                        onComplete: function() {
                            let textPath = document.querySelector('.drawText');
                            
                            // Vẽ chữ
                            gsap.from('.drawText', {
                                duration: 3,
                                drawSVG: "0%",
                                ease: "linear",
                                onComplete: function() {
                                    // Fill màu sau khi vẽ xong với hiệu ứng gradient
                                    gsap.to('.drawText', {
                                        fill: 'url(#textGradient)',
                                        duration: 1
                                    });
                                }
                            });

                            // Nhiều tia sáng hơn
                            for(let i = 0; i < 3; i++) {
                                gsap.to('.textSparkle', {
                                    duration: 2,
                                    motionPath: {
                                        path: '.drawText',
                                        align: '.drawText',
                                        autoRotate: true,
                                        alignOrigin: [0.5, 0.5],
                                        start: i * 0.3, // Các sparkle bắt đầu ở các điểm khác nhau
                                        end: 1
                                    },
                                    ease: "linear",
                                    repeat: -1,
                                    delay: i * 0.5
                                });
                            }
                        }
                    });
                }

function showChristmasLetter() {
    const letter = document.createElement('img');
    letter.src = 'img/christmas-letter.png';
    letter.className = 'christmas-letter';
    document.body.appendChild(letter);
    
    // Thêm hiệu ứng xuất hiện
    setTimeout(() => {
        letter.classList.add('show');
    }, 100);
    
    // Xử lý click vào thư
    letter.addEventListener('click', () => {
        // Có thể thêm hiệu ứng mở thư ở đây
        console.log('Letter clicked!');
    });
}

function createMassiveSnowflakeExplosion() {
    const centerX = window.innerWidth/2;
    const centerY = window.innerHeight/2;
    
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake-explosion';
        snowflake.textContent = '❅';
        
        // Random transform values
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * (window.innerWidth/2);
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const rot = Math.random() * 720 - 360;
        
        snowflake.style.setProperty('--tx', `${tx}px`);
        snowflake.style.setProperty('--ty', `${ty}px`);
        snowflake.style.setProperty('--rot', `${rot}deg`);
        
        snowflake.style.left = centerX + 'px';
        snowflake.style.top = centerY + 'px';
        snowflake.style.fontSize = Math.random() * 20 + 15 + 'px';
        document.body.appendChild(snowflake);
        
        // Tự động xóa sau khi animation kết thúc
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }
}
})(); 