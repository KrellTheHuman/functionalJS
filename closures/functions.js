var nonsense = function(inputString) {
    var blab = function() {
        alert(inputString);
    };
    return blab;
};

var blabLater = nonsense("derp");
var blabAgainLater = nonsense("super derp");


var lastNameTrier = function(firstName) {
    var innerFunction = function(lastName) {
        console.log(firstName + " " + lastName);
    };
    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');


var Toaster = function() {
    var COOK_TIME = 5;

    var toast = function(kind, slices, time) {
        console.log("Toasting " + slices + " slices of " + kind + " for " + (time || COOK_TIME) + " minutes.");
    };
    return toast;
};

var myToaster = Toaster();
myToaster("bagel", 2);
myToaster("bread", 3, 4);
