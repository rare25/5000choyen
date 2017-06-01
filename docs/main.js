var canvas, ctx , textbox;

window.onload = function () {
  canvas = document.getElementById("canvas");
  textbox = document.getElementById("textbox");
  ctx = canvas.getContext('2d');
  ctx.font = '100px mplus-1p-black';
  ctx.lineJoin = 'round';
  ctx.setTransform(1,0,-0.4,1,0,0);
};

function saveImage(){
    var data = canvas.toDataURL("image/png");
    window.open(data);
}

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var posx = 70;
  var posy = 100;
  var text = textbox.value;
  //銀色
  for (var i = 0; i < 10; i++) {
    {
      var grad = ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(' + 10 * i + ', ' + 10 * i + ', ' + 10 * i + ')');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 28;
      ctx.strokeText(text, posx - 3 + i, posy + 2);
    }
  }

  //黒色
  {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 22;
    ctx.strokeText(text, posx, posy);
  }
  //金色
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0.3, 'rgb(255, 255, 255)');
    grad.addColorStop(0.5, 'rgb(240, 180, 5)');
    grad.addColorStop(0.8, 'rgb(89, 33, 0)');
    grad.addColorStop(1, 'rgb(240, 180, 5)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 19;
    ctx.strokeText(text, posx, posy);
  }

  //白
  ctx.lineWidth = 6;
  ctx.strokeStyle = '#FFFFFF';
  ctx.strokeText(text, posx, posy - 3);

  //赤
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(230, 0, 0)');
    grad.addColorStop(0.5, 'rgb(123, 0, 0)');
    grad.addColorStop(0.51, 'rgb(240, 0, 0)');
    grad.addColorStop(1, 'rgb(5, 0, 0)');
    ctx.lineWidth = 4;
    ctx.strokeStyle = grad;
    ctx.strokeText(text, posx, posy - 3);
  }


  //赤
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(230, 0, 0)');
    grad.addColorStop(0.5, 'rgb(123, 0, 0)');
    grad.addColorStop(0.51, 'rgb(240, 0, 0)');
    grad.addColorStop(1, 'rgb(5, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillText(text, posx, posy - 3);
  }
}