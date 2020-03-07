class Calculate {
    private root: HTMLElement; 
    private input: HTMLInputElement;

    constructor(id: string) {
        this.root = document.getElementById(id);
        this.render();
    }

    private render = () => {
        this.input = document.createElement('input');
        const controls: Array<Array<string>> = [
            ['7', '8', '9', '*'],
            ['4', '5', '6', '/'],
            ['1', '2', '3', '-'],
            ['', '0', '=', '+']
        ];

        for(const ar of controls) {
            for(const i of ar) {
                if() {
                    const el: HTMLDivElement = document.createElement('div');
                }
            }
        }
    };
}