var Calculate = /** @class */ (function () {
    function Calculate(id) {
        var _this = this;
        this.render = function () {
            _this.input = document.createElement('input');
            _this.root.appendChild(_this.input);
            var controls = [
                ['7', '8', '9', '*'],
                ['4', '5', '6', '/'],
                ['1', '2', '3', '-'],
                ['', '0', '=', '+']
            ];
            for (var _i = 0, controls_1 = controls; _i < controls_1.length; _i++) {
                var ar = controls_1[_i];
                for (var _a = 0, ar_1 = ar; _a < ar_1.length; _a++) {
                    var i = ar_1[_a];
                    if (i) {
                        var el = document.createElement('div');
                        el.innerText = i;
                        el.classList.add('cell');
                        _this.root.appendChild(el);
                    }
                    else {
                        _this.root.appendChild(document.createElement('div'));
                    }
                }
            }
        };
        this.root = document.getElementById(id);
        this.render();
    }
    return Calculate;
}());
var calc = new Calculate('app');
