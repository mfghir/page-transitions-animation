const tlLeave = gsap.timeline({
  defaults: { duration: 0.75, ease: "Power2.easeOut" },
});
const tlEnter = gsap.timeline({
  defaults: { duration: 0.75, ease: "Power2.easeOut" },
});



const leaveAnimation = (current, done) => {
  const product = current.querySelector(".image-container");
  const text = current.querySelector(".showcase-text");
  const circles = current.querySelectorAll(".circle");
  const arrow = current.querySelector(".showcase-arrow");


  return(
    tlLeave.fromTo(arrow,{ opacity: 1, y: 0 },{ opacity: 0, y: 50, onComplete: done }),
    tlEnter.fromTo(product, { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, "<"),
    tlEnter.fromTo(text, { y: 100, opacity: 0 }, { opacity: 1, y: 0 }, "<"),
  )



};



barba.init({
    preventRunning: true,
    transitions: [
      //showcase transitions
      {
        name: "default",
        leave(data) {
          const done = this.async();
          let current = data.current.container;
          leaveAnimation(current, done);
        },
        enter(data) {
          const done = this.async();
          let next = data.next.container;
          gsap.fromTo(next, { opacity: 0 }, { opacity: 1, duration: 1 }, onComplete: done)

        },
      },
    
    ],
  });
