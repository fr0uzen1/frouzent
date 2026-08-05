document.addEventListener('mousemove', (e) => {
    const yumimg = document.querySelectorAll('.content a img, .dcname');
    yumimg.forEach(img => {
        const box = img.getBoundingClientRect();
        const cx = box.left + box.width / 2;
        const cy = box.top + box.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 60) {
            const power = 1 - dist / 60;
            const ripple = Math.sin(dist / 8) * power * 20;
            img.style.transform = 
                `translate(${dx * 0.2}px, ${dy * 0.2}px) ` +
                `scale(${1 + power * 0.3}) ` +
                `rotate(${ripple * 0.4}deg)`;
        } else {
            img.style.transform = '';
        }
    });
});
