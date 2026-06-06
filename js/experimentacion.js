
const letters = document.querySelectorAll('.crizis span');
const word = document.querySelector('.crizis');

word.addEventListener('mousemove', () => {

    letters.forEach((letter, i) => {

        const center = letters.length / 2;
        const distance = Math.abs(i - center);
        const intensity = distance / center;
const blur = intensity * 10;
        letter.style.filter =
            `blur(${blur}px)`;

        letter.style.transform =
            `translateX(${intensity * 10}px)`;
    });

});

word.addEventListener('mouseleave', () => {

    letters.forEach(letter => {

        letter.style.filter = 'blur(0px)';
        letter.style.transform = 'translateX(0px)';

    });

});