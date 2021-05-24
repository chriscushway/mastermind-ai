const rightIndicators = document.querySelectorAll('.indicator-wrapper:nth-of-type(5) > .handle');

const maxDragLength = rightIndicators[0].clientWidth;
console.log(rightIndicators);

document.addEventListener('mouseup', dragEnd);

for(let i =0; i < rightIndicators.length; i++) {
    rightIndicators[i].addEventListener('mousedown', dragStart, false);
    
    rightIndicators[i].addEventListener('mousemove', drag, false);
}

let move = false;
let parent;
let startX = 0;
let endX = 0;

console.log(rightIndicators[0]);

function dragStart(e) {
    parent = this.parentElement;
    startX = e.clientX;
    move = true;
}

function dragEnd(e) {
    let x = parent.offsetLeft%(maxDragLength / 4);
    console.log(x);
    if(x > maxDragLength / 8) {
        x = maxDragLength / 4 - x;
        parent.style.left = (parent.offsetLeft + x) + 'px';
    } else {
        parent.style.left = (parent.offsetLeft - x) + 'px';
    }
    move = false;
}

function drag(e) {
    e.preventDefault();
    if(move) {
        endX = e.clientX - startX;
        startX = e.clientX;
        const sum = parent.offsetLeft + endX;
        if(parent.offsetLeft < maxDragLength && parent.offsetLeft > 0 || endX > 0 && parent.offsetLeft <= 0 || endX <= 0 && parent.offsetLeft >= maxDragLength) {
            parent.style.left = (sum) + 'px';
        } else if(parent.offsetLeft <= 0) {
            parent.style.left = 0 + 'px';
        } else {
            parent.style.left = maxDragLength + 'px';
        }
    }
    
}

