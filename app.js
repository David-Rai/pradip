let tl=gsap.timeline()

//              //For the page 1
tl.from(".page1 nav li,.page1 .logo",{
    x:-40,
    opacity:0,
    duration:0.6,
    stagger:0.1
})


tl.from(".p1left h1,.p1left p,.p1left button",{
    x:-40,
    opacity:0,
    duration:0.6,
    stagger:0.1
})

tl.from(".p1right img",{
    y:50,
    opacity:0,
    duration:0.6
})

      //for the page2
gsap.from(".p2left img",{
    opacity:0,
    duration:1,
    y:100,
    scrollTrigger:".p2left img"
})
gsap.from(".p2right .p2top,.p2right p ,.p2right button",{
    opacity:0,
    duration:1,
    x:100,
    stagger:0.3,
    scrollTrigger:".p2right .p2top,.p2right p ,.p2right button"
})

//for page3
gsap.from(".page3 .p3box",{
    opacity:0,
    duration:1,
    y:100,
    stagger:0.3,
    scrollTrigger:".page3 .p3box"
})

//for page4
gsap.from(".p4left .data,.p4left h1",{
    opacity:0,
    duration:1,
    x:-100,
    stagger:0.2,
    scrollTrigger:".p4left .data ,.p4left h1"
})
gsap.from(".p4right form",{
    opacity:0,
    duration:0.7,
    x:-100,
    scrollTrigger:".p4right form"
})


