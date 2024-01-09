const card = document.querySelector('.card');
const glow = document.querySelector('.glow');

function girarComMouse(event) {
  const bounds = card.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  };
  const distance = Math.sqrt(
    center.x ** 2 + center.y ** 2
  );

  card 
    .style
    .setProperty(
      '--rotate-3d',
      `${center.y / 100}, ${-center.x / 100}, 0, ${Math.log (distance) * 2}deg`,
    );

  glow
    .style
    .setProperty(
      '--pos-x',
      `${center.x * 2 + bounds.width / 2}px`,
    );
  glow
    .style
    .setProperty(
      '--pos-y',
      `${center.y * 2 + bounds.height / 2}px`,
    );
}

card.addEventListener(
  'mousemove',
  girarComMouse,
);
card.addEventListener(
  'mouseleave',
  () => {
    card.style.setProperty('--rotate-3d', 0);
  },
);