document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('line1');
    const cursor = document.getElementById('typingCursor');
    const line2 = document.getElementById('line2');
    const button = document.getElementById('heroButton');

    const textToType = "Jeunes,<br>mais citoyens<br>d'abord !";
    let i = 0;
    const typingSpeed = 80;

    cursor.classList.add('cursor-active');

    function typeWriter() {
        if (i < textToType.length) {
            if (textToType.charAt(i) === '<') {
                let tagEnd = textToType.indexOf('>', i);
                h1.innerHTML += textToType.substring(i, tagEnd + 1);
                i = tagEnd + 1;
            } else {
                h1.innerHTML += textToType.charAt(i);
                i++;
            }
            setTimeout(typeWriter, typingSpeed);
        } else {
            cursor.classList.remove('cursor-active');
            cursor.style.display = 'none';

            line2.classList.add('simple-fade-in');
            button.classList.add('simple-fade-in');
        }
    }
    setTimeout(typeWriter, 500);
});
