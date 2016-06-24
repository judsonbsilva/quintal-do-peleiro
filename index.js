var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 960,
    height: 640
  })
  mainWindow.loadUrl('file://' + __dirname + '/index.html')
});
