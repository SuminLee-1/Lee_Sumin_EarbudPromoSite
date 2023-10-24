// console.log("JS is Fire!");

(() => {

  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const infoBoxes = [
    {
      title: "Smooth Volume Controller",
      text: "With this cutting-edge technology, changing the volume is a simple and seamless operation. The smooth controller provides accuracy and user-friendliness whether you're adjusting the volume during a call or fine-tuning the sound for your favourite music."
    },
    {
      title: "Wear detection Sensor",
      text: "The sensor is intended to immediately recognize when the earbud is being worn, turning on the audio playback. By automatically turning on and off in response to user contact, this function not only improves convenience but also helps preserve battery life."
    },
    {
      title: "Replaceable Silicon",
      text: "These tips, which were meticulously made to fit, guarantee a tight and cozy seal inside the ear canal. They stand out because they are easily removable, enabling users to switch between various sizes or styles for a customized experience."
    },
    {
      title: "Noise-cancelling Microphones",
      text: "Our cutting-edge noise-cancelling microphones will improve your listening experience. These microphones are excellent at separating your voice from background noise because they are carefully positioned and built. This produces conversations and interactions that are crystal clear—even in busy settings."
    }
  ]



  //functions

  function modelLoaded() {
    // console.log(hotspots);
    hotspots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      const h2Element = document.createElement('h2');
      h2Element.textContent = infoBox.title;
  
      const pElement = document.createElement('p');
      pElement.textContent = infoBox.text;
  
      selected.appendChild(h2Element);
      selected.appendChild(pElement);
    });
  }
  

  loadInfo();

  function showInfo() {

    //console.log(this.slot);
    //console.log(`#${this.slot}`);

    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {

    //console.log(this.slot);
    //console.log(`#${this.slot}`);
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }



  //Event Listener
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
