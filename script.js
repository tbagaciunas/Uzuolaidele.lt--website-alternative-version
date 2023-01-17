LightCurtains = {};
local = LightCurtains;

local.svg;
local.winWidth;
local.winHeight;
local.totalElements;
local.elementsArr = [];

local.init = function() {
  window.addEventListener('resize', local.onResize);

  local.winWidth = window.innerWidth;
  local.winHeight = window.innerHeight;
  local.svg = document.getElementsByTagName('svg')[0];
  local.createGradient(local.svg, 'baseGrad', 'linearGradient', [
    { offset: '0%', 'stop-color': '#ffffff', 'stop-opacity': '0' },
    { offset: '50%', 'stop-color': '#ffffff' },
    { offset: '100%', 'stop-color': '#ffffff', 'stop-opacity': '0' }
  ]);

  local.totalElements = 25;
  local.createElements();
};

local.createElements = function() {
  var i = 0;
  var limit = local.totalElements;
  while (i < limit) {
    var r = 255;
    var g = 255;
    var b = 255;
    var randCol = 'rgba(' + r + ',' + g + ',' + b + ',' + (Math.random() * 0.5 + 0.2) + ')';
    local.createGradient(local.svg, 'grad' + i, 'linearGradient', [
      { offset: '0%', 'stop-color': randCol, 'stop-opacity': '0' },
      { offset: '10%', 'stop-color': randCol },
      { offset: '50%', 'stop-color': randCol, 'stop-opacity': '0' },
      { offset: '90%', 'stop-color': randCol },
      { offset: '100%', 'stop-color': randCol, 'stop-opacity': '0' }
    ]);

    var item = local.createRectangle(i);
    local.elementsArr.push(item);
    local.svg.appendChild(item);
    local.moveElement(item, i);
    i++;
  }
};

local.createRectangle = function(i) {
  var elem = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  elem.style.fill = 'url(#grad' + i + ')';
  elem.setAttribute('width', Math.random() * 5 + 220);
  elem.setAttribute('height', local.winHeight + 200);
  elem.style.x = (Math.random() * 10 + i * 30) + 'px';
  elem.style.y = '-100px';
  return elem;
};

local.createGradient = function(svg, id, type, stops) {
  var svgNS = svg.namespaceURI;
  var grad = document.createElementNS(svgNS)
}