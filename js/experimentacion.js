const letters = document.querySelectorAll(".crisis span");

letters.forEach((letter, i) => {
  const center = letters.length / 2;
  const distance = Math.abs(i - center);
  const intensity = distance / center;

  const blur = intensity * 8;
  const move = intensity * 30;

  letter.style.filter = `blur(${blur}px)`;
  letter.style.transform = `translateX(${move}px) scaleX(${1 + intensity})`;
});