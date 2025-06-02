const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  
  function videoconAnimation() {
    const Videocon = document.querySelector("#video-container");
    const playbtn = document.querySelector("#play");
  
    gsap.set(playbtn, {
      scale: 0,
      opacity: 0
    });
  
    Videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
        display: "flex",
        duration: 0.3
      });
    });
  
    Videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: function () {
          playbtn.style.display = "none";
        }
      });
    });
  
    Videocon.addEventListener("mousemove", function (e) {
      const bounds = Videocon.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
  
      gsap.to(playbtn, {
        left: x - 70,
        top: y - 80,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  }
  videoconAnimation();
  
  function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
  
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.3,
    });
  }
  loadinganimation();
  
  





