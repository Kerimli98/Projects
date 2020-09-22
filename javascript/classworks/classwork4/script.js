/* TASK - 1
* Create a function, that takes two arguments - name and age of the user.
* Return value: an object with two keys: name, age.
* value of each key is a value of the function arguments.
* */
// function func(name,age){
//     let obj= {
//         name,
//         age
//     };
//     return obj;
// }
//
// console.log(func("adile", 21));

/* TASK - 2
* Add some functionality to the previous task
* Write an object method that will be increasing the age value by 1
* and add it to the resulting object.
* That means that inside the resulting object will be the key named 'increaseAge',
* the value of this key will be the functions, that takes a value of the key 'age'
* from this object and increase it.
* */

// function Func(name, age) {
//     let obj = {
//         name,
//         age,
//         increaseAge() {
//             return this.age ++;
//         }
//     };
//     return obj;
// }
// /*Bu constructor functiondur, constructor functionlar yeni object yaradirlar. constructoru cagiranda "new "
// keywordden istifade olunur .new sozu js e deyirki yeni instance ini yarat Func'in. ve indi yaradacagimiz obj1 in
// icinde Funcin icinde yaratdigimiz propertiler var.obj1 in icindekilere acces elemey ucun dot notationdan istifade eledik.
// */
//
// let obj1=new Func('fafa',21);
// console.log(obj1);
// obj1.increaseAge();
// console.log(obj1);


/* TASK - 3
* Add some functionality to the previous task
* Write an object method 'addField()', that will be adding a new key for this object.
* Add this method to the resulting object.
* Explanation of the task:
* There will be the new key named 'addField', the value of this key will be the function.
* Function will takes two arguments:
*   1 - the name of new field
*   2 - the value of the new field
* */
// function Func(name, age) {
//     let obj = {
//         name,
//         age,
//         increaseAge() {
//             return this.age ++;
//         },
//         addField: function (nameOfField,nameOfValue) {
//             this[nameOfField]=nameOfValue;
//           //  burda dot notation istifade ede bilmedik, chunki nameOfField propertinin adi yox,variable in adidi.
//         }
//     };
//     return obj;
// }
// let obj1=new Func('Fatima',21);
// obj1.increaseAge();
// console.log(obj1);
// obj1.addField('Place','Baku');
// console.log(obj1);
// obj1.addField('Surname','Kerimli');
// console.log(obj1);


/* TASK - 4
* Rewrite previous task using constructor function.
* Earlier wi was creating an object inside the function
* and this object was the return value of our function.
* But now we must create some kink of an instruction for creating the objects with type User.
* Object with this type will be creating using thw 'new' operator,
* that helps us to call the constructor with the name placed on the right side of the operator.
* */

// function Func(Username, Userage) {
//     this.name = Username;
//     this.age = Userage;
//     this.increaseAge = function () {
//         this.age++;
//     };
//     this.addField = function (username, value) {
//         this[username] = value;
//     };
// }
//
// let object1 = new Func("fatima", 21);
// object1.increaseAge();
// console.log(object1);
// object1.addField("salam", 'meleykim');
// console.log(object1);

/* TASK - 5
* Its a Burger again.
* There is an object with the same basic constants of size and stuffing.
* This object is totally static for us, which means that we can only use the values inside of it.
* */
// const constantValues = {
//     SIZE_SMALL: {
//         price: 15,
//         cal: 250,
//     },
//
//     SIZE_LARGE: {
//         price: 25,
//         cal: 340,
//     },
//
//     STUFFING_CHEESE: {
//         price: 4,
//         cal: 25,
//     },
//
//     STUFFING_SALAD: {
//         price: 5,
//         cal: 5,
//     },
//
//     STUFFING_BEEF: {
//         price: 10,
//         cal: 50,
//     },
// };
/* WHAT WE NEED TO DO:
* Write a constructor function of an object with type Burger, that takes two arguments:
*   1 - the size of the burger
*   2 - the stuffing for the burger
* The arguments can only be string type, and the values of those strings
* can only be the names of the sizes or stuffing inside the constantValues object.
* The resulting object, that will be created using 'new Burger()' construction, must have:
*   1 - size and stuffing keys
*   2 - getPrice() method. Its create a new key called 'price' in current object and calculate the value of the price, depends of size and stuffing options
*   3 - getCalories() method. It does the same thing that getPrice, but calculating calories
* */

//
// function Burger(sizeOfBurger, stuffingOfBurger) {
//     this.size = sizeOfBurger;
//     this.stuffing = stuffingOfBurger;
//
//     this.getPrice = function(){
//         return constantValues[this.size].price + constantValues[this.stuffing].price;
//     };
//     this.getCal= function() {
//         return constantValues[this.size].cal + constantValues[this.stuffing].cal;
//     }
//
// }
// let sizes=prompt("Enter the size of burger");
// let stuffings=prompt("Enter the stuffings of burger");
// let superBurger = new Burger(sizes, stuffings);
// console.log(superBurger);
// console.log(`Calory of the burger: ${superBurger.getCal()}`);
// console.log(`Price of the burger: ${superBurger.getPrice()}`);

// extra task, after completion task 5 addidng and deleting the stuffing

// function Burger(sizeOfBurger) {
//     this.size = sizeOfBurger;
//
//     this.addStuffing=function (sizeOfStuffingh2) {
//
//     }
//
//     this.getPrice = function(){
//         return constantValues[this.size].price + constantValues[this.stuffing].price;
//     };
//     this.getCal= function() {
//         return constantValues[this.size].cal + constantValues[this.stuffing].cal;
//     }
//
// }
// let sizes=prompt("Enter the size of burger");
// let stuffings=prompt("Enter the stuffings of burger");
// let superBurger = new Burger(sizes, stuffings);
// console.log(superBurger);
// console.log(`Calory of the burger: ${superBurger.getCal()}`);
// console.log(`Price of the burger: ${superBurger.getPrice()}`);


/* TASK - 5
* Its a Burger again.
* There is an object with the same basic constants of size and stuffing.
* This object is totally static for us, which means that we can only use the values inside of it.
* */
const constantValues = {
    SIZE_SMALL: {
        price: 15,
        cal: 250,
    },

    SIZE_LARGE: {
        price: 25,
        cal: 340,
    },

    STUFFING_CHEESE: {
        price: 4,
        cal: 25,
    },

    STUFFING_SALAD: {
        price: 5,
        cal: 5,
    },

    STUFFING_BEEF: {
        price: 10,
        cal: 50,
    },
};

/* WHAT WE NEED TO DO:
* Write a constructor function of an object with type Burger, that takes two arguments:
*   1 - the size of the burger
*   2 - the stuffing for the burger
* The arguments can only be string type, and the values of those strings
* can only be the names of the sizes or stuffing inside the constantValues object.
* The resulting object, that will be created using 'new Burger()' construction, must have:
*   1 - size and stuffing keys
*   2 - getPrice() method. Its create a new key called 'price' in current object and calculate the value of the price, depends of size and stuffing options
*   3 - getCalories() method. It does the same thing that getPrice, but calculating calories
* */
//1st and easy way. ikinci yol if ile stuffing i ve size i yoxluyub price a add elemekdi ve uzun yoldu
// function Burger(size, stuffing) {
//     this.size = size;
//     this.stuffing = stuffing;
//     this.getPrice = function () {
//         return constantValues[this.size].price+ constantValues[this.stuffing].price;
//     };
//     this.getCalories = function () {
//         return constantValues[this.size].cal+ constantValues[this.stuffing].cal;
//     };
// }
//
// let burgerObject = new Burger('SIZE_SMALL', 'STUFFING_BEEF');
// console.log(burgerObject);
// console.log(burgerObject.getPrice());
// console.log(burgerObject.getCalories());


function Burger(sizeOfBurger) {

    this.size = sizeOfBurger; // objectde size add etdik

    this.addStuffing = function (stuffingOfBurger) {   // bu function stuffing olub olmadigini yoxluyur ve yoxdursa add edir
        if(this.stuffing !== undefined){
            if(confirm("You already have a stuffing, Do you want to replace it?"))
            this.stuffing=stuffingOfBurger;
        }
        else {
            this.stuffing=stuffingOfBurger;
        }

    };
    this.deleteStuffing = function () { // bu function stuffingi silir
        delete this.stuffing;
    }

    this.getPrice = function(){ // bu function stuffing varsa umumi price hesablayir yoxdursa tekce size in price'i hesablayir
        if(this.stuffing !== undefined)
        return constantValues[this.size].price + constantValues[this.stuffing].price;
        else {
            return constantValues[this.size].price;
        }
    };
    this.getCal= function() { //bu function stuffing varsa umumi cal hesablayir yoxdursa tekce size in cal'i hesablayir
        if(this.stuffing !== undefined)
        return constantValues[this.size].cal + constantValues[this.stuffing].cal;
        else {
            return constantValues[this.size].cal;
        }
    }

}


































