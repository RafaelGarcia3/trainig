class Shape {
    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter(){
        return this.sides * this.sideLength;
    }
}

class Square extends Shape{
    constructor(sideLength){
        super('square', 4, sideLength)
    }

    calcArea(){
        return this.sideLength * this.sideLength;
    }
}

let square = new Shape('square', 4, 5);
let triangle = new Shape('triangule', 3, 3);
let square_class = new Square(8);

const section = document.querySelector('section');
let sq_para = document.createElement('p');
sq_para.textContent = `The figure ${square.name} has ${square.sides} sides of ${square.sideLength} length. The perimeter is ${square.calcPerimeter()}`;
section.appendChild(sq_para);

let tr_para = document.createElement('p');
tr_para.textContent = `The figure ${triangle.name} has ${triangle.sides} sides of ${triangle.sideLength} length. The perimeter is ${triangle.calcPerimeter()}`;
section.appendChild(tr_para);

let para = document.createElement('p');
para.textContent = `The figure ${square_class.name} has ${square_class.sides} sides of ${square_class.sideLength} length. The perimeter is ${square_class.calcPerimeter()} and the area is ${square_class.calcArea()}`;
section.appendChild(para);
