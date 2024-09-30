// (() => {
   
//    const canvas2 = document.querySelector("#explode-view-2");
//    const context = canvas2.getContext("2d");
//    canvas2.width = 1200;
//    canvas2.height = 1080;
//    const frameCount = 121;
//    const images = [];

//    const buds2 =  {
//       frame: 0
//    }


//    for (let i = 0; i < frameCount; i++) {
//       // console.log(i);
//       const img = new Image();


//       img.src = `images/buds${(i).toString().padStart(3, '0')}.jpg`;
//       images.push(img);
//    }

//    gsap.to(buds2, {
//       frame: 121,
//       snap: "frame",
//       scrollTrigger: {
//          trigger: "#explode-view-2", 
//          pin: true,
//          scrub: 1,
//          // markers: true,
//          start: "top"
//       },

//       onUpdate: render
//    })

//    images[0].addEventListener("onload", render);

//    function render() {
//       context.clearRect(0, 0, canvas2.width, canvas2.height);
//       context.drawImage(images[buds2.frame], 0, 0);

//    }

// })();



gsap.registerPlugin(ScrollTrigger);

(() => {
   
   const canvas = document.querySelector("#explode-view");
   const context = canvas.getContext("2d");
   canvas.width = 1920;
   canvas.height = 1080;
   const frameCount = 122;
   const images = [];

   const buds =  {
      frame: 0
   }


   for (let i = 0; i < frameCount; i++) {
      // console.log(i);
      const img = new Image();


      img.src = `images/canvas${(i).toString().padStart(3, '0')}.jpg`;
      images.push(img);
   }

   gsap.to(buds, {
      frame: 121,
      snap: "frame",
      scrollTrigger: {
         trigger: "#explode-view", 
         pin: true,
         scrub: 1,
         // markers: true,
         start: "center"
      },

      onUpdate: render
   })

   images[0].addEventListener("onload", render);

   function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);

   }

})();


