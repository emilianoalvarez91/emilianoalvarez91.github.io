const scrollableDiv = document.getElementById('portfolioScrollView');

let isDown = false;
let startX, startY;
let scrollLeft, scrollTop;

// Function to start dragging
function startDrag(x, y) {
    isDown = true;
    isHorizontalDrag = false;
    scrollableDiv.classList.add('active');
    startX = x - scrollableDiv.offsetLeft;
    startY = y - scrollableDiv.offsetTop;
    scrollLeft = scrollableDiv.scrollLeft;
    scrollTop = scrollableDiv.scrollTop;
}

// Function to end dragging
function endDrag() {
    isDown = false;
    scrollableDiv.classList.remove('active');
}

// Function to handle the dragging
function drag(x, y, speed) {
    if (!isDown) return;

    const walkX = (x - startX) * speed;
    const walkY = (y - startY) * speed;
    
    scrollableDiv.scrollLeft = scrollLeft - walkX;
}

// Mouse Events
scrollableDiv.addEventListener('mousedown', (e) => startDrag(e.pageX, e.pageY));
scrollableDiv.addEventListener('mouseleave', endDrag);
scrollableDiv.addEventListener('mouseup', endDrag);
scrollableDiv.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    drag(e.pageX, e.pageY, 1);
});

// Verify if device is touch to enable scrollbar
let isTouchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);

if (isTouchDevice) {
    scrollableDiv.style.overflowX = 'scroll';
} else {
    scrollableDiv.style.overflowX = 'hidden';
}