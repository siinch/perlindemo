function setup() {
console.log("Hello from perlin");
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
//ctx.fillStyle = "#aaaaaa";
//ctx.fillRect(0,0,100,100);

var imgData = ctx.createImageData(500, 500);
var xoff = 0.0;
var yoff = 0.0;
for(var x = 0; x < 500; x++) {
  for(var y = 0; y < 500; y++) {
    var red = noise(xoff+100000, yoff+100000) * 255;
    var green = noise(xoff+1000000, yoff+1000000) * 255;
    var blue = noise(xoff+10000000, yoff+10000000) * 255;
    var pixel = (x * 500 * 4) + (y * 4);

    if (blue < 255*0.5) {
      imgData.data[pixel] = 0;
      imgData.data[pixel+1] = 0;
      imgData.data[pixel+2] = 255;
    }
    else {
      if(red < 255*0.4) {
        imgData.data[pixel] = 255;
        imgData.data[pixel+1] = 0;
        imgData.data[pixel+2] = 0;
      }
      else if (green < 255*0.4) {
        imgData.data[pixel] = 0;
        imgData.data[pixel+1] = 255;
        imgData.data[pixel+2] = 0;
      }
      else {
        imgData.data[pixel] = 0;
        imgData.data[pixel+1] = 0;
        imgData.data[pixel+2] = 0;
      }
    }
    //console.log(color);
    imgData.data[pixel+3] = 255;
    yoff += 0.01;
  }
  yoff = 0.0;
  xoff += 0.01;
}
console.log("done");
ctx.putImageData(imgData, 0, 0);
}
