const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this != e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xwalk = (x / width * walk) - (walk / 2);
  const ywalk = (y / height * walk) - (walk / 2);

  text.style.textShadow = `${xwalk}px ${ywalk}px 0 red`;
}

hero.addEventListener("mousemove", shadow);
