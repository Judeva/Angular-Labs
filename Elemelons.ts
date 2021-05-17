abstract class Melon {
    public weight: number;
    public melonSort: string;
    public element: string = 'Water';
    elementIndex: number;
    elements: string[] = ['Water', 'Fire', 'Earth', 'Air'];
    constructor(weigth: number, melonSort: string) {
        this.weight = weigth;
        this.melonSort = melonSort;
    }
}
class Watermelon extends Melon {


    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort);
        this.element = 'Water';
        this.elementIndex = weigth * melonSort.length;

    }

    public toString(): string {
        let output = `Element: ${this.element}+\n+Sort: ${this.melonSort}+\n+Element Index: ${this.elementIndex}`
        return output;
    }
}

class Firemelon extends Melon {

    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort);
        this.element = 'Fire';
        this.elementIndex = weigth * melonSort.length;
    }

    public toString(): string {
        let output = `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        return output;
    }
}

class Earthmelon extends Melon {

    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort);
        this.element = 'Earth';
        this.elementIndex = weigth * melonSort.length;

    }

    public toString(): string {
        let output = `Element: ${this.element}+\n+Sort: ${this.melonSort}+\n+Element Index: ${this.elementIndex}`
        return output;
    }
}

class Airmelon extends Melon {

    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort);
        this.element = 'Air';
        this.elementIndex = weigth * melonSort.length;

    }

    public toString(): string {
        let output = `Element: ${this.element}+\n+Sort: ${this.melonSort}+\n+Element Index: ${this.elementIndex}`
        return output;
    }
}

class Melolemonmelon extends Firemelon {
    
    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort)
        this.element='Water';
    }
    morph(): void {     
        this.elements.push(this.elements.shift());
        this.element = this.elements[0];
    }
}

let test: Melolemonmelon = new Melolemonmelon(15, 'SuperMutant');
let melon1 : Firemelon = new Firemelon(34, 'FireSugar');
test.morph();
console.log(test.toString());
console.log(melon1.toString());
