"use strict";
//launch.json is for debugging our ts code
let age = 20;
//we dont have to always annotate the variable with type since we
//have initialized it string it takes it as string type
let myname = "harsh";
//avoid any type as it is javascript only
//use any type only when you are not sure about the type
let numbers = [1, 2, 3];
//or
//let numbers = [1, 2, 3];
//tuples fixed lenght array with each elemnet having a type
let user = [1, "Mosh"];
//user[0]. will list down all functions that we can perform for a number like toFixed toString
//intellisense gets notified by ts that its a number similar for any other declared type one of the benefits
//for developers
//Enums
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
console.log(Size.Small); // by default it takes 0 1 2
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Fullfilled"] = 2] = "Fullfilled";
    Status[Status["Rejected"] = 3] = "Rejected";
})(Status || (Status = {}));
console.log(Status.Rejected); // by default it takes 3 since Pending started from 1
//functions
//nounusedlocal true for checking local varibles not used
function caculateTax(income) {
    if (income < 50000)
        return income * 0.2;
    return income * 0.3;
}
//# sourceMappingURL=index.js.map