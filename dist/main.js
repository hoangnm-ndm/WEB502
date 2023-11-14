"use strict";
// type;
const myName = "Hoang";
console.log(typeof myName);
const myAge = 20;
const isLoggin = true;
function sum(a, b) {
    // return a + b;
    console.log(a + b);
}
const myInfor = {
    name: "Hoang",
    age: 20,
};
const myStudents = ["hoang", "dung", "chuc"];
const myStudents2 = ["hoang", "dung", "chuc"];
const myTuple = ["hoang", 20];
let myUnion; // Dữ liệu kiểu liên hiệp
myUnion = "hoang";
myUnion = 20;
myUnion = true;
var ROLE;
(function (ROLE) {
    ROLE[ROLE["USER"] = 0] = "USER";
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
})(ROLE || (ROLE = {}));
console.log(ROLE.MANAGER);
