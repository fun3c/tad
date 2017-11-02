#! node
var PATH = ".";
var fs = require('fs');
var path = require('path');

function copyTemplate (from, to) {
    from = path.join(__dirname, 'templates', from);
    write(to, fs.readFileSync(from, 'utf-8'));
}
function write (path, str, mode) {
    fs.writeFileSync(path, str);
}
function mkdir (path, fn) {
    fs.mkdir(path, function (err) {
        fn && fn()
    });
}

copyTemplate("index.html", PATH + '/index.html');
copyTemplate("package.json", PATH + '/package.json');
copyTemplate("webpack.config.js", PATH + '/webpack.config.js');

mkdir(PATH + '/js', function () {
    copyTemplate("js/main.js", PATH + '/js/main.js');
});