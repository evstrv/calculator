var Calculate = /** @class */ (function () {
    function Calculate(id) {
        var _this = this;
        this.result = 0;
        this.stack = [];
        this.numb = 9;
        this.onClick = function (event) {
            var val = event.target.innerText;
            switch (val) {
                case '*':
                case '+':
                case '/':
                case '-':
                case '=':
                    _this.stack.push(_this.input.value);
                    if (_this.stack.length > 2) {
                        _this.processing();
                    }
                    _this.stack.push(val);
                    _this.input.value = '';
                    if (val === '=') {
                        _this.processing();
                    }
                    break;
                case 'x²':
                    var squared = parseFloat(_this.input.value) * parseFloat(_this.input.value);
                    _this.input.value = squared.toString();
                    break;
                case '.':
                    _this.input.value = _this.input.value + '.';
                    break;
                case '±':
                    if (_this.input.value[0] === '-') {
                        var delMinus = _this.input.value.replace(/-/g, '');
                        _this.input.value = delMinus;
                    }
                    else {
                        _this.input.value = '-' + _this.input.value;
                    }
                    break;
                case 'C':
                    _this.stack = [];
                    _this.input.value = '0';
                    break;
                default:
                    _this.input.value = parseFloat(_this.input.value + val).toString();
                    break;
            }
        };
        this.processing = function () {
            var res = 0;
            while (_this.stack.length > 0) {
                var val = _this.stack.shift();
                switch (val) {
                    case '*':
                        res *= parseFloat(_this.stack.shift());
                        break;
                    case '+':
                        res += parseFloat(_this.stack.shift());
                        break;
                    case '/':
                        res /= parseFloat(_this.stack.shift());
                        break;
                    case '-':
                        res -= parseFloat(_this.stack.shift());
                        break;
                    case '=':
                        _this.stack.shift();
                        break;
                    default:
                        res = parseFloat(val);
                        break;
                }
            }
            console.log(res);
            _this.stack.push(res.toString());
            _this.input.value = res.toString();
        };
        this.render = function () {
            _this.input = document.createElement('input');
            _this.input.readOnly = true;
            _this.input.id = 'input';
            _this.input.value = _this.result.toString();
            _this.root.appendChild(_this.input);
            var controls = [
                ['7', '8', '9', '*', 'C'],
                ['4', '5', '6', '/', 'x²'],
                ['1', '2', '3', '-', '±'],
                ['00', '0', '.', '+', '=']
            ];
            for (var _i = 0, controls_1 = controls; _i < controls_1.length; _i++) {
                var ar = controls_1[_i];
                for (var _a = 0, ar_1 = ar; _a < ar_1.length; _a++) {
                    var i = ar_1[_a];
                    if (i) {
                        var el = document.createElement('div');
                        el.innerText = i;
                        el.classList.add('cell');
                        el.addEventListener('click', _this.onClick);
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
