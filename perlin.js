function setup() {
console.log("Hello from perlin");
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
//ctx.fillStyle = "#aaaaaa";
//ctx.fillRect(0,0,100,100);

var imgData = ctx.createImageData(500, 500);
var xoff = 0.0;
var xxoff = 0.0;
var yoff = 0.0;
var yyoff = 0.0;
for(var x = 0; x < 500; x++) {
  for(var y = 0; y < 500; y++) {
    var color = noise(xxoff, yyoff) * noise(xoff, yoff) * 255;
    var pixel = (x * 500 * 4) + (y * 4);

    imgData.data[pixel] = color;
    imgData.data[pixel+1] = color;
    imgData.data[pixel+2] = color;
    //console.log(color);
    imgData.data[pixel+3] = 255;
    yoff += 0.02;
    yyoff += 0.005;
  }
  yoff = 0.0;
  yyoff = 0.0;
  xoff += 0.02;
  xxoff += 0.005;
}
console.log("done");
ctx.putImageData(imgData, 0, 0);
}
