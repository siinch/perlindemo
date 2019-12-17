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
    var value = noise(xoff, yoff);
    var pixel = (x * 500 * 4) + (y * 4);

    if (value < 0.5) {
      imgData.data[pixel] = 0;
      imgData.data[pixel+1] = 0;
      imgData.data[pixel+2] = 255;
    }
    else if (0.5 < value && value <= 0.52 ) {
        imgData.data[pixel] = 255;
        imgData.data[pixel+1] = 0;
        imgData.data[pixel+2] = 0;
    }
    else if (0.52 < value && value <= 0.7 ) {
        imgData.data[pixel] = 0;
        imgData.data[pixel+1] = 255;
        imgData.data[pixel+2] = 0;
    }
    else if (0.7 < value && value <= 0.75 ) {
        imgData.data[pixel] = 0;
        imgData.data[pixel+1] = 0;
        imgData.data[pixel+2] = 0;
    }
    else {
        imgData.data[pixel] = 255;
        imgData.data[pixel+1] = 255;
        imgData.data[pixel+2] = 255;
    }
    //console.log(color);
    imgData.data[pixel+3] = 255;
    yoff += 0.05;
  }
  yoff = 0.0;
  xoff += 0.05;
}
console.log("done");
ctx.putImageData(imgData, 0, 0);
}
