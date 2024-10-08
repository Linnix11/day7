const titleElement = document.querySelector('h1');
let words = ["LET'S", "HAVE", "SOME", "FUN"];
let intervalId;
let isFrozen = false;
function shuffleWords() {
    if (!isFrozen) {
        words = words.sort(() => Math.random() - 0.5);
        titleElement.textContent = words.join(' ');
    }
}
function startShuffling() {
    intervalId = setInterval(shuffleWords, 2000);
}
function stopShuffling() {
    clearInterval(intervalId);
}
titleElement.addEventListener('mouseenter', () => {
    isFrozen = true;
});
titleElement.addEventListener('mouseleave', () => {
    isFrozen = false;
});
titleElement.addEventListener('click', () => {
    stopShuffling();
    navigator.clipboard.writeText(titleElement.textContent).then(() => {
        console.log('Text copied to clipboard');
    });
});
document.addEventListener('click', (event) => {
    if (!titleElement.contains(event.target)) {
        startShuffling();
    }
});

// alert //
document.addEventListener('keydown', (event) => {
    if (event.key === '!') {
        setTimeout(() => {
            alert('42!');
        }, 42000);
    }
});
startShuffling();