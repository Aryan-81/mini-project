const container = document.querySelector('.horizontal-scroll-wrapper');
const content = document.querySelector('.img-wrapper');
let direction = 1;
let animationId;

function scrollContent() {
    const maxScrollTop = content.scrollHeight + container.clientHeight;

    // Change direction when reaching the top or bottom
    if (container.scrollTop >= maxScrollTop || container.scrollTop <= 0) {
        direction *= -1;
    }

    container.scrollTop += direction;

    animationId = requestAnimationFrame(scrollContent);
}

scrollContent();