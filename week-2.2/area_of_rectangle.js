class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width * this.height;
        return area;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const rect = new Rectangle(2, 4, "black");                  //instance of the rectangle class,object of the rectangle class
const area = rect.area();
rect.paint();
console.log(area);