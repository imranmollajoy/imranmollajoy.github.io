const mail = document.querySelector("#mail");
const imran = document.querySelector("#imran");
const joy = document.querySelector("#hero-joy");
const creationsText = document.querySelector("#creations-text");
const j1 = document.querySelector("#job1");
const j2 = document.querySelector("#job2");
const designsText = document.querySelector("#designs-text");
const skillsText = document.querySelector("#skills-text");
const mailText = document.querySelector("#mail-text");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const spacing = Math.min(scrollY / 2, 1500);
  joy.style.letterSpacing = spacing + "px";
});

gsap.registerPlugin(SplitText, TextPlugin, ScrollTrigger);

const textChangesJ1 = [
  { text: "app developer", scrollEnd: 50 },
  { text: "wpp developer", scrollEnd: 100 },
  { text: "wep developer", scrollEnd: 150 },
  { text: "web developer", scrollEnd: 200 },
];

const textChangesJ2 = [
  { text: "graphic designer", scrollEnd: 50 },
  { text: "wraphic designer", scrollEnd: 100 },
  { text: "weaphic designer", scrollEnd: 150 },
  { text: "webphic designer", scrollEnd: 200 },
  { text: "webshic designer", scrollEnd: 250 },
  { text: "websiic designer", scrollEnd: 300 },
  { text: "websitc designer", scrollEnd: 350 },
  { text: "website designer", scrollEnd: 400 },
];

function createTextTimeline(element, changes) {
  const tl = gsap.timeline({
    scrollTrigger: {
      scrub: true,
      start: 0,
      end: changes[changes.length - 1].scrollEnd,
    },
  });

  let currentScrollStart = 0;
  changes.forEach((change, index) => {
    const scrollDuration = change.scrollEnd - currentScrollStart;

    tl.to(
      element,
      {
        duration: scrollDuration,
        text: change.text,
        ease: "power1.inOut",
      },
      currentScrollStart
    );

    currentScrollStart = change.scrollEnd;
  });
}

createTextTimeline(j1, textChangesJ1);
createTextTimeline(j2, textChangesJ2);

createFlippingTextAnimation(imran, 0);
createFlippingTextAnimation(designsText, 3);
createFlippingTextAnimation(creationsText, 5);
createFlippingTextAnimation(skillsText, 2);
createFlippingTextAnimation(mail, 2);

function createFlippingTextAnimation(targetElement, charIndex) {
  const ROTATION_DURATION = 0.5;
  const PAUSE_DURATION = 1.5;

  const split = new SplitText(targetElement, { type: "chars" });
  const targetChar = split.chars[charIndex];

  if (!targetChar) {
    console.error(
      `Character at index ${charIndex} not found in target element.`
    );
    return;
  }

  gsap.set(targetChar, { transformOrigin: "center center" });

  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    defaults: {
      ease: "bounce.out",
    },
  });

  tl.to(targetChar, {
    duration: PAUSE_DURATION,
  })

    .to(targetChar, {
      rotationX: 180,
      duration: ROTATION_DURATION,
    })

    .to(targetChar, {
      duration: PAUSE_DURATION,
    })

    .to(targetChar, {
      rotationX: 360,
      duration: ROTATION_DURATION,
    })

    .set(targetChar, { rotationX: 0 });
}
