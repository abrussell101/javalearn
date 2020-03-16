function StockItem(brand, type, size, color, price) {
    this.brand = brand;
    this.type = type;
    this.size = size;
    this.color = color;
    this.price = price;
}

StockItem.prototype.describe = function () {
    var description =  " The " + this.brand + " is a " + this.type + " pastry, has a " + this.size + " flavor, " + this.color + " layer(s), and costs " + this.price + " . ";
    return description;

} 

// StockItem.prototype.eat = function () {
//     var eaten = "Pick up" + this.type + " and stuff it in my mouth."; 
//     return eaten;
// };

// Now using constructor functions, we can instantiate our objects on just one line and have the same result:

let laptop = new StockItem ("Apple", "laptop", "15inch", "Rose Gold", "R25000");
let cake = new Pastry ("cake", "vanilla", 3, "R310", "birthday");

console.log(muffin.describe());
console.log(cake.describe());
console.log(muffin.eat()); 
