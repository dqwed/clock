onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
  setInterval(main, 1000, canvas, ctx);
}


function main(canvas, ctx) {

  ctx.setTransform()
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  seconds(s, canvas, ctx)
  minutes(m, s, canvas, ctx)
  hours(h % 12, m, canvas, ctx)
}


function seconds(s, canvas, ctx) {
  let ang = 6 * (s-30) * (Math.PI/180)
  draw(ang, canvas, ctx, 2, 225, "red")
}

function minutes(m, s, canvas, ctx) {
  let ang = (6 * (m-30 + s/60)) * (Math.PI/180)
  draw(ang, canvas, ctx, 3, 190, "white")
  }

function hours(h, m, canvas, ctx) {
  let ang = 30 * (h-6 + m/60) * (Math.PI/180)
  draw(ang, canvas, ctx, 4, 125, "white")
}

function draw(ang, canvas, ctx, width, height, color) {
  let sin = Math.sin(ang)
  let cos = Math.cos(ang)
  ctx.fillStyle = color;
  ctx.setTransform(cos, sin, -sin, cos, canvas.width/2, canvas.height/2)
  ctx.fillRect(width/2 - width, 0, width, height)

}
