var tl=gsap.timeline()




tl.to("#hero .five",{
    
    x:"-1200px",
    y:"-50px",
    duration:5,
    scrollTrigger:{
        trigger:".five",
        scroller:"body",
        // markers:true,
        start:"top 71%",
        end:"top 30%",
        scrub:2,
       
    }

})

tl.from("#hero h1,#hero p",{
    y:500,
    opacity:0,
    duration:2,
   
   
})


tl.to("#more .tarzan",{
    
    scale:1.5,
    y:800,
    x:-470,
    rotate:46,
    scrollTrigger:{
        trigger:".tarzan",
        scroller:"body",
        start:"top 200%",
        end:"top -200%",
        // markers:true,
        scrub:2
    }
})



tl.to(".more-con h6",{
    y:-200,
    duration:2,
    scrollTrigger:{
        trigger:".more-con h6",
        scroller:"body",
        start:"top 200%",
        end:"top -200%",
        // markers:true,
        scrub:2
    }
   
   
})

tl.to(".more-con h2",{
    y:-200,
   
    duration:2,
    scrollTrigger:{
        trigger:".more-con h2",
        scroller:"body",
        start:"top 200%",
        end:"top -200%",
        // markers:true,
        scrub:2
    }
   
   
})

tl.to(".more-con p",{
    y:-200,
    duration:2,
    scrollTrigger:{
        trigger:".more-con p",
        scroller:"body",
        start:"top 200%",
        end:"top -200%",
        // markers:true,
        scrub:2
    }
   
   
})
