
var data = pv.range(10).map(function() { return 10}),
    w = 400,
    h = 250,
    x = pv.Scale.linear(0, 1).range(0, w),
    y = pv.Scale.ordinal(pv.range(10)).splitBanded(0, h, 4/5);

var vis =new pv.Panel()
    .canvas('canvas')
    .width(w)
    .height(h)
    .bottom(20)
    .left(20)
    .right(10)
    .top(5);

var bar = vis.add(pv.Bar)
    .data(data)
    .top(function() { return y(this.index)})
    .height(y.range().band)
    .left(0)
    .width(x);

bar.anchor("right").add(pv.Label)
    .textStyle("white")
    .text(function(d) {return d.toFixed(1)});

bar.anchor("left").add(pv.Label)
    .textMargin(5)
    .textAlign("right")
    .text(function() { return "ABCDEFGHIJK".charAt(this.index)});

vis.add(pv.Rule)
    .data(x.ticks())
    .left(function(d) { return  Math.round(x(d))} - .5)
    .strokeStyle(function(d) {return d ? "rgba(255,255,255,.3)" : "#000"})
  .add(pv.Rule)
    .bottom(0)
    .height(5)
    .strokeStyle("#000")
  .anchor("bottom").add(pv.Label)
    .text(function(d) { return d.toFixed(1)});

vis.render();
