const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
   canvas.width = window.innerWidth
   canvas.height = window.innerHeight
 const mouse = {
            x: undefined,
            y: undefined
}


function draw(){

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

  let time = new Date();
 //Earth
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(100, 0);
  //ctx.fillRect(0, -12, 40, 24);  
  ctx.beginPath();
  ctx.arc(0, 0, 22, 0, Math.PI * 2, true);
  ctx.fillStyle = 'darkblue';
  ctx.fill();

//moon
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.beginPath();
  ctx.arc(10, 10, 10, 0, Math.PI * 2, true);
  ctx.fillStyle = 'lightgrey';
  ctx.fill()
  ctx.restore();
    ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.strokeStyle = 'lightgrey';
  ctx.stroke();
 
 //sun
  ctx.beginPath();
  ctx.arc(150, 150, 35, 0, Math.PI * 2, true);
  ctx.fillStyle = 'yellow';
  ctx.fill()
  ctx.restore();

  window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);