
// scroll testimonials

const slider = document.getElementById('content');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast, change with higher number to increase speed
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

// end of scroll testimonials


// copyright year

const date = new Date();
const currentYear = date.getFullYear();

const copyrightYear = document.getElementById('copyrightYear');

copyrightYear.innerHTML = currentYear;

// end of copyright year

// sidebar

const bar = document.getElementById("open");
const close = document.getElementById("close")
const list = document.querySelector(".nav-colapsed")
const listLinks = document.querySelectorAll(".nav-colapsed ul li a");


bar.addEventListener("click", function(){
    list.classList.add("opened");
    bar.classList.add("opened")
    if (bar.classList.contains("opened")){
        close.classList.add("opened")
    }
    if (bar.classList.contains("opened")){
        close.style.color = "white";
    }
})

close.addEventListener("click", function(){
    list.classList.remove("opened")
    bar.classList.remove("opened")
    if (!bar.classList.contains("opened")){
        close.classList.remove("opened")
    }
})

listLinks.forEach(element => {
    element.addEventListener("click", function(){
        if(list.classList.contains("opened")){
            bar.classList.remove("opened")
            list.classList.remove("opened")
            close.classList.remove("opened")
        }
    })
});


// testimonials slider

const dots = document.querySelectorAll('.dots span');

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const dot4 = document.getElementById('dot4');

const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');
const column3 = document.getElementById('column3');
const column4 = document.getElementById('column4');

document.addEventListener("DOMContentLoaded", function() {
  dot1.classList.add('active');

  if (window.innerWidth < 900){
    column1.style.opacity = 1;
    column2.style.opacity = 0;
    column3.style.opacity = 0;
    column4.style.opacity = 0;
  }
  
});


console.log(window.innerWidth);

dot1.onclick = () => {

  // slide

  column1.style.transform = 'translateX(0)';
  column2.style.transform = 'translateX(0)';
  column3.style.transform = 'translateX(0)';
  column4.style.transform = 'translateX(0)';


  if (window.innerWidth < 900){
    column1.style.opacity = 1;
    column2.style.opacity = 0;
    column3.style.opacity = 0;
    column4.style.opacity = 0;
  }

  
  
  // end of slide

  // checking dots

  checkDots(dot1);

  // end of checking dots

}

dot2.onclick = () => {

  // slide

  column1.style.transform = 'translateX(-100%)';
  column2.style.transform = 'translateX(-100%)';
  column3.style.transform = 'translateX(-100%)';
  column4.style.transform = 'translateX(-100%)';


  if (window.innerWidth < 900){
    column1.style.opacity = 0;
    column2.style.opacity = 1;
    column3.style.opacity = 0;
    column4.style.opacity = 0;
  }

  

  // end of slide

  // checking dots

  checkDots(dot2);

  // end of checking dots

}

dot3.onclick = () => {

  // slide

  column1.style.transform = 'translateX(-200%)';
  column2.style.transform = 'translateX(-200%)';
  column3.style.transform = 'translateX(-200%)';
  column4.style.transform = 'translateX(-200%)';


  if (window.innerWidth < 900){
    column1.style.opacity = 0;
    column2.style.opacity = 0;
    column3.style.opacity = 1;
    column4.style.opacity = 0;
  }

  

  // end of slide

  // checking dots

  checkDots(dot3);

  // end of checking dots

}

dot4.onclick = () => {

  // slide

  column1.style.transform = 'translateX(-300%)';
  column2.style.transform = 'translateX(-300%)';
  column3.style.transform = 'translateX(-300%)';
  column4.style.transform = 'translateX(-300%)';


  if (window.innerWidth < 900){
    column1.style.opacity = 0;
    column2.style.opacity = 0;
    column3.style.opacity = 0;
    column4.style.opacity = 1;
  }

  

  // end of slide

  // checking dots

  checkDots(dot4);

  // end of checking dots

}

function checkDots(index){
  dots.forEach(dot => {
    dot.classList.remove('active');
  })
  index.classList.add('active');
}



// end of testimonials slider











