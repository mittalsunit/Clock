gsap.from(".clock", {duration: 1.5, scale: 0, ease: "elastic.out(1, 0.3)"});
gsap.from(".circle", {duration: 1.5, opacity: 0, stagger: 0.2, ease: "power2.out"});
gsap.from("#time div", {duration: 1.5, opacity: 0, stagger: 0.2, ease: "power2.out", delay: 0.5});

let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  // hr.style.transform = `rotateZ(${hh+(mn/12)}deg)`;
  // mn.style.transform = `rotateZ(${mm}deg)`;
  // sc.style.transform = `rotateZ(${ss}deg)`;

  gsap.to(hr, {rotationZ: hh + (mn / 12), duration: 0.5, ease: "power1.inOut"});
  gsap.to(mn, {rotationZ: mm, duration: 0.5, ease: "power1.inOut"});
  gsap.to(sc, {rotationZ: ss, duration: 0.5, ease: "power1.inOut"});


  //   Digital Clock
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

// convert 24hr clock to 12hr clock
  if(h > 12)
    h = h - 12;

//   add zero before single digit number
  h = (h < 10) ? "0" + h : h
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
});
