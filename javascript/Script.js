console.log("God bless you")
function openMenu(){
  document.getElementById("lightbox").style.visibility = "visible";
  console.log("it works");
};

function closeMenu(){
  document.getElementById("lightbox").style.visibility = "hidden";
  console.log("it works");
};

new fullpage( "#home",{
  autoScrolling: true,
  navigation: true,
  onleave : (origin,destination,direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({delay:0.9});
    tl.fromTo(title,0.5,{y:"50",opacity:0},{y:0,opacity:1})
  }
})