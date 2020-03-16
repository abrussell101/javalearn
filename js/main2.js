// var anObject = {
//     a:2
// };

// var anotherObject = Object.create(anObject);


// console.log(anotherObject.a);
// console.log(anotherObject.b) 

// let Pastry = {
//     type: ""
//     flavor: "" ,
//     layers: "" , 
//     price: "" , 
//     occasion: "" ,
    
//     describe: function () {
//         var description = " The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + "flavor, " + this.layers + " layer(s), and costs " + this.price + " . ";
//         return description; 

//     }

// }; 

// let muffin = Object.create(Pastry);
// muffin.type = "muffin"; 
// muffin.flavor = "blueberry";
// muffin.layers = 1;
// muffin.price = "R20"
// muffin.occasion = "lunch"

// let cake = Object.create(Pastry);
// cake.type = "cake"; 
// cake.flavor = "chocolate";
// cake.layers = 3;
// cake.price = "R100"
// muffin.occasion = "birthday"

// let donut = Object.create(Pastry);
// donut.type = "donut"; 
// donut.flavor = "vanilla";
// donut.layers = 2;
// donut.price = "R10"
// donut.occasion = "breakfast" 

// var Pastry = {
    // initialize the pastry
//     init: function(type, flavor, layers, price, occasion) {
//         this.type = type; 
//         this.flavor = flavor;
//         this.layers = layers; 
//         this.price = price;
//         this.occasion = occasion;

//     },
//     // describe the pastry
//     describe: function() {
//         var description = " The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.layers + " layer(s), and costs " + this.price + " . ";
//         return description; 
//     },



// }

// let muffin = Object.create(Pastry);
// muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

// let cake = Object.create(Pastry);
// cake.init("cake", "vanilla", 3, "R310", "birthday"); 

// console.log(muffin.describe())

function Pastry(type, flavor, levels, price, occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
}

Pastry.prototype.describe = function () {
    var description =  " The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.layers + " layer(s), and costs " + this.price + " . ";
    return description;

} 

Pastry.prototype.eat = function () {
    var eaten = "Pick up" + this.type + " and stuff it in my mouth."; 
    return eaten;
};

// Now using constructor functions, we can instantiate our objects on just one line and have the same result:

let muffin = new Pastry ("muffin", "blueberry", 1, "R20", "breakfast");
let cake = new Pastry ("cake", "vanilla", 3, "R310", "birthday");

console.log(muffin.describe());
console.log(cake.describe());
console.log(muffin.eat()); 


// Create a mini shop with 5 products using contructor functions showing images 





