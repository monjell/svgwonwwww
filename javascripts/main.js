var svg;
var ns = 'http://www.w3.org/2000/svg';

var rand = function(min, max) {
    return min + Math.random() * (max - min);    
};

var makeHSLA = function(h, s, l, a) {
    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';    
};

var randHSLA = function() {
    return makeHSLA(rand(180, 360), 100, 50, rand(0.2, 0.9));    
};


var createLine = function(x1, y1, x2, y2) {
    var l = document.createElementNS(ns, 'line');
    l.setAttribute('x1', x1);
    l.setAttribute('y1', y1);
    l.setAttribute('x2', x2);
    l.setAttribute('y2', y2);
    l.setAttribute('stroke', randHSLA());
    l.setAttribute('stroke-width', rand(1, 10));
    svg.appendChild(l); 
};

var init = function() {
    svg = document.querySelector('#svg');
    for(var i = 0; i < 1000; i++) {
        var x1 = 200;
        var y1 = 200;
        var x2 = x1 + rand(-200, 200);
        var y2 = y1 + rand(-200, 200);
        createLine(x1, y1, x2, y2);
    }
};

window.onload = function() {
    init();    
};