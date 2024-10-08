let eyeClickCount = 0;
function changeEyeColor() {
  let leftEye = document.querySelector('.eye-left-iris');
  let rightEye = document.querySelector('.eye-right-iris');
  let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  leftEye.style.fill = randomColor;
  rightEye.style.fill = randomColor;
}

document.getElementById('robot-input').addEventListener('input', () => {
    let screenText = document.getElementById('screen-text');
    screenText.textContent = "Don't worry, I'll take care of it!!";
    
    setTimeout(() => {
      screenText.textContent = "Bip bip bip !";
    }, 2000);
  });

document.getElementById('robot').addEventListener('mousemove', (e) => {
  let screenText = document.getElementById('screen-text');
  screenText.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

document.getElementById('robot').addEventListener('click', () => {
  let speechBubble = document.getElementById('speech-bubble');
  speechBubble.textContent = "Ouch, that hurts!";
  speechBubble.style.display = 'block';

  setTimeout(() => {
    speechBubble.style.display = 'none';
  }, 2000);
});


document.querySelectorAll('.eye-left-pupil, .eye-right-pupil').forEach(eye => {
  eye.addEventListener('click', () => {
    eyeClickCount++;
    if (eyeClickCount >= 10) {
      changeEyeColor();
      eyeClickCount = 0;
    }
  });
});