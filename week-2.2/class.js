class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    area(width, height){
        area = width * height;
    }
}

//object of a class
const rect = new Rectangle(1,2);
const rect2 = new Rectangle(2,3);

console.log(rect.area());
