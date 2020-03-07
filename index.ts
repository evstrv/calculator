class Calculate {
    private root: HTMLElement; 
    private input: HTMLInputElement;

    constructor(id: string) {
        this.root = document.getElementById(id);
        this.render();
    }

    private render = () => {
        this.input = document.createElement('input');
    };
}