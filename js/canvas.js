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
         markers: true,
         start: "middle top"
      },

      onUpdate: render
   })

   images[0].addEventListener("onload", render);

   function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);

   }

})();