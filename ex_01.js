function reduceOpacity() {
    document.getElementById('square').style.opacity = '0.5';
}

function resetOpacity() {
    document.getElementById('square').style.opacity = '1';
}

// opaciter // 
document.getElementById('square').onmouseover = reduceOpacity;

// reinitialise // 
document.getElementById('square').onmouseout = resetOpacity;