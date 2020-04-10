
var cmd = {};
var pen = {};
var _loaded = false;
// This is the most important object in game running.
function __cmd__() {
    this.canvas = {};
    this.width = 500;
    this.height = 600;
    this.prepare = function() {
        var cs = (this.canvas = document.createElement("canvas"));
        cs.width = this.width;
        cs.height = this.height;
        pen = cs.getContext("2d");
        pen.fillRect(0, 0, cmd.width, cmd.height);

        alert("prepared!")
    };
}
__cmd__.call(cmd);

window.onload = function () {
    _loaded = true;
    cmd.prepare();
}

function _check() {
    if (!_loaded) {
        cmd.prepare();
    }
}
setTimeout(_check, 5);

function GameElement(x, y) {
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    this.draw = function() {
        // Replace Your Drawing.
    };
    this.update = function() {
        // Replace Your Deciding.
    };

}
