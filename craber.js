const cmd = {};               // This is the most important object in game running.
let pen = {};                 // The game drawer.
let _loaded = false;          // Test the cmd.prepare

function __cmd__() {
    this.canvas = {};
    this.prepare = function() {
        const cs = (this.canvas = document.createElement("canvas"));
        cs.width = 500;
        cs.height = 600;
        pen = cs.getContext("2d");
        pen.fillStyle = "#ffffff";
        pen.strokeStyle = "#000000";
        pen.fillRect(0, 0, cmd.width, cmd.height);
        document.body.appendChild(cs);
        alert(document.body.innerHTML);
    };
    this.setSize = function (w, h) {
        this.canvas.width = Math.abs(w);
        this.canvas.height = Math.abs(h);
    };
    this.setBackground = function (c) {
        pen.fillStyle = c;
    };
    this.setForeground = function (c) {
        pen.strokeStyle = c;
    }
}
cmd.proto = __cmd__.prototype;
__cmd__.call(cmd);

window.onload = function () {
    _loaded = true;
    cmd.prepare();
    cmd.start();
};
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
