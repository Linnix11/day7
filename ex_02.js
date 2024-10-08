let currentRotation = 0;

function rotateCircle(step) {
    const circle = document.getElementById('circle');
    currentRotation = step === 0 ? 0 : currentRotation + step;  
    circle.style.transform = `rotate(${currentRotation}deg)`; 
}


document.querySelectorAll('.rotate-button').forEach(button => {
    button.addEventListener('click', function() {
        const step = parseInt(this.value); 
        rotateCircle(step); 
    });
});
