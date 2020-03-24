class Calculate {
    private root: HTMLElement; 
    private input: HTMLInputElement;
    private result: number = 0;
    private stack: Array<string> = [];
    private numb: number = 9;

    constructor(id: string) {
        this.root = document.getElementById(id);
        this.render();
    }

    private onClick = (event) => {
        const val = event.target.innerText;
        switch(val) {
            case '*': 
            case '+': 
            case '/': 
            case '-': 
            case '=': 
                this.stack.push(this.input.value);
                if(this.stack.length > 2) {
                    this.processing();
                }
                this.stack.push(val);
                this.input.value = '';
                if(val === '=') {
                    this.processing();
                }
                break;
            case 'x²':
                const squared = parseFloat(this.input.value) * parseFloat(this.input.value);
                this.input.value = squared.toString();
                break;
            case '.':
                this.input.value = this.input.value + '.';
                break;
            case '±':
                if(this.input.value[0] === '-') {
                    const delMinus = this.input.value.replace(/-/g, '');
                    this.input.value = delMinus;
                } else {
                    this.input.value = '-' + this.input.value;
                }
                break;
            case 'C':
                this.stack = [];
                this.input.value = '0';
                break;
            default: 
                this.input.value = parseFloat(this.input.value + val).toString();
                break;
        }
    }

    private processing = () => {
        let res = 0;
        while(this.stack.length > 0) {
            const val = this.stack.shift();
            switch(val) {
                case '*': 
                    res *= parseFloat(this.stack.shift());
                    break;
                case '+': 
                    res += parseFloat(this.stack.shift());
                    break;
                case '/': 
                    res /= parseFloat(this.stack.shift());
                    break;
                case '-': 
                    res -= parseFloat(this.stack.shift());
                    break;
                case '=':
                    this.stack.shift();
                    break;
                default:
                    res = parseFloat(val);
                    break;
            }
        }
        console.log(res);
        this.stack.push(res.toString());
        this.input.value = res.toString();
    }

    private render = () => {
        this.input = document.createElement('input');
        this.input.readOnly = true;
        this.input.id = 'input';
        this.input.value = this.result.toString();
        this.root.appendChild(this.input);
        const controls: Array<Array<string>> = [
            ['7', '8', '9', '*', 'C'],
            ['4', '5', '6', '/', 'x²'],
            ['1', '2', '3', '-', '±'],
            ['00', '0', '.', '+', '=']
        ];

        for(const ar of controls) {
            for(const i of ar) {
                if(i) {
                    const el: HTMLDivElement = document.createElement('div');
                    el.innerText = i;
                    el.classList.add('cell');
                    el.addEventListener('click', this.onClick);
                    this.root.appendChild(el);
                } else {
                    this.root.appendChild(document.createElement('div'));
                }
            }
        }
    };
}

const calc = new Calculate('app');