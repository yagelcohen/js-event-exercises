const dot = " . ";
const field = document.getElementById("field");
field.innerHTML += '<img src="https://en.js.cx/clipart/ball.svg" id="ball">';
for(let i = 1; i < (field.clientWidth * field.clientHeight / 100); i++) {
  field.innerHTML += dot;
}
field.onclick = (event) => {      
      const mouseX = event.clientX + window.pageXOffset, 
            mouseY = event.clientY + window.pageYOffset;
      const x = Math.min(field.clientWidth - ball.width, 
        Math.max(0, mouseX - field.offsetLeft - field.clientLeft - (ball.width / 2)));
      const y = Math.min(field.clientHeight - ball.height, 
        Math.max(0, mouseY - field.offsetTop - field.clientTop - (ball.height / 2)));
      ball.style.left = x  + 'px';
      ball.style.top = y + 'px';
    }