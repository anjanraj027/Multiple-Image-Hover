//THIS WAS OLD CODE FOR VERIFYING IF IT WORKS OR NOT
//THESE WILL ONLY WORK FOR 1ST DIV OR ELEMENT1.

// let elemet1 = document.querySelector("#elem1");
// let elm1Img = document.querySelector("#elem1 img");

// elemet1.addEventListener("mousemove", (dets) => {
//   elm1Img.style.left = dets.x + "px";
//   elm1Img.style.top = dets.y + "px";
// });

// elemet1.addEventListener("mouseenter", () => {
//   elm1Img.style.opacity = 1;
// });

// elemet1.addEventListener("mouseleave", () => {
//   elm1Img.style.opacity = 0;
// })

//THIS IS REVISED CODE TO APPLY EFFECT TO ALL DIVS OR ELEMENTS.
let elements = document.querySelectorAll(".elem");

elements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.childNodes[3].style.opacity = 1;
  });

  element.addEventListener("mouseleave", () => {
    element.childNodes[3].style.opacity = 0;
  });

  element.addEventListener("mousemove", (dets) => {
    element.childNodes[3].style.left = dets.x + "px";
    // element.childNodes[3].style.top = dets.y + "px";
    //REMOVED THIS CODE AS IMAGE WAS FLOWING OUTSIDE THE DIV
  });
});

//FOR ANDROID

elements.forEach((element) => {
  element.addEventListener("touchstart", (e) => {
    e.preventDefault();
    element.childNodes[3].style.opacity = 1;
  });

  element.addEventListener("touchend", () => {
    element.childNodes[3].style.opacity = 0;
  });

  // element.addEventListener("touchmove", (dets) => {
  //   element.childNodes[3].style.left = dets.x + "px";
  //   // element.childNodes[3].style.top = dets.y + "px";
  //   //REMOVED THIS CODE AS IMAGE WAS FLOWING OUTSIDE THE DIV
  // });

  element.addEventListener("touchmove", (e) => {
    e.preventDefault(); // Prevent default touch behavior, like scrolling or zooming
    const touch = e.touches[0]; // Get the first touch event
    element.childNodes[3].style.left = touch.pageX + "px";
    // element.childNodes[3].style.top = touch.pageY + "px";
  });
});
