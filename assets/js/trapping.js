  // # to hold in memory
  var num = 2;
  // particle coordinates
  var ax = [];
  var ay = [];
  var dx = 0 ;
  var dx = 0 ;

  function setup() {
    var trapCanvas = createCanvas(document.getElementById("optical-trap").offsetWidth, document.getElementById("optical-trap").offsetHeight);
    trapCanvas.parent('optical-trap');
    for ( var i = 0; i < num; i++ ) {
      ax[i] = width / 2;
      ay[i] = height / 2;
    }
    frameRate(15);
  }
  function draw() {
    background(20 * document.getElementById("zigma").value , 0 , 200 / document.getElementById("zigma").value );
    // Shift all elements 1 place to the left
    for ( var i = 1; i < num; i++ ) {
      ax[i - 1] = ax[i];
      ay[i - 1] = ay[i];
    }
    // Put a new value at the end of the array
    var range = document.getElementById("zigma").value;
    var k = document.getElementById("kappa").value;;
    dx = random(-range, range)  - k * (ax[num - 2] - width / 2);
    dy = random(-range, range)  - k * (ay[num - 2] - height / 2);
    ax[num - 1] = ax[num - 2] + dx;
    //console.log(ax);
    ay[num - 1] = ay[num - 2] + dy;
    // Constrain all points to the screen
    //ax[num - 1] = constrain(ax[num - 1], 0, width);
    //ay[num - 1] = constrain(ay[num - 1], 0, height);
    fill(3, 157, 255);
    stroke(0);
    ellipse(ax[num - 1], ay[num - 1], 20, 20 );
    // Draw a line connecting the points
    for ( var j = 1; j < num; j++ ) {
      var val = j / num * 204.0 + 51;
      stroke(val);
      line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
    }
  }
