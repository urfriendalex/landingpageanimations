const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('#logo')
const hamburger = document.querySelector('.hamburger')

const hamburger1 = document.querySelector('.hamburger span:nth-of-type(1)')
const hamburger2 = document.querySelector('.hamburger span:nth-of-type(2)')
const hamburger3 = document.querySelector('.hamburger span:nth-of-type(3)')

const headline = document.querySelector('.headline')

const navslider = document.querySelector('.nav-slider')

const navlinks = document.querySelector('.nav-links')

const socailMedia = document.querySelector('.social-media')

const nextArrow = document.querySelector('.next-arrow')

const tl1 = new TimelineMax();
const tl2 = new TimelineMax({paused:true});


tl1.fromTo(
        slider,
        1,
        { width: '0'},
        { width: '100%', ease: Power2.easeInOut}
    )
    .fromTo(
        hero,
        .8,
        {height: '0%'},
        {height: '80%', ease: Power2.easeInOut}
    )
    .fromTo(
        logo,
        .5,
        {opacity: '0'},
        {opacity: '1',
        ease: Power2.easeInOut} 
    )
    .fromTo(
        headline,
        .5,
        {opacity: '0'},
        {opacity: '1',
        ease: Power2.easeInOut},
        "-=0.5" 
    )
    .fromTo(
        hamburger1,
        .1,
        {width: '0', border: '0'},
        {width: '36px', border: '1px solid white',
        ease: Power2.easeInOut, clearProps: "width, border"}
    )
    .fromTo(
        hamburger2,
        .2,
        {width: '0', border: '0'},
        {width: '26px', border: '1px solid white',
        ease: Power2.easeInOut, clearProps: "width, border"}
    )
    .fromTo(
        hamburger3,
        .2,
        {width: '0', border: '0'},
        {width: '20px', border: '1px solid white',
        ease: Power2.easeInOut, clearProps: "width, border"}
    );


    tl2.fromTo(
            navslider,
            0.1,
            {display: "none"},
            {display: "flex"}
        ).fromTo(
            navslider,
            0.8,
            {right: "-30%"},
            {right: "0"}
        ).fromTo(
            navlinks.children[0],
            0.2,
            {right: "-100%"},
            {right: "0"}
        ).fromTo(
            navlinks.children[1],
            0.2,
            {right: "-100%"},
            {right: "0"}
        ).fromTo(
            navlinks.children[2],
            0.2,
            {right: "-100%"},
            {right: "0"}
        ).fromTo(
            navlinks.children[3],
            0.2,
            {right: "-100%"},
            {right: "0"}
        ).fromTo(
            socailMedia,
            0.4,
            {bottom: "-100%"},
            {bottom: "0"}
        )

hamburger.addEventListener("click",function(){
    if (!hamburger.classList.contains("active")){
        hamburger.classList.add("active");
        tl2.play();
    }
    else
    {
        hamburger.classList.remove("active");
        tl2.reverse();
    }
})

const tl3 = new TimelineMax({paused:true, repeat:1, yoyo:true});



  nextArrow.addEventListener("click",function(){
      tl3.play();
  });