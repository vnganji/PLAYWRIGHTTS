var a = "welcom venkat";
console.log(a);
var printfruit = function (fruits) {
    console.log(fruits);
};
printfruit("mangos");
var abc = /** @class */ (function () {
    function abc(name, age) {
        var _this = this;
        this.print = function () { return "".concat(_this.name); };
        this.name = name;
        this.age = age;
    }
    return abc;
}());
var obj = new abc("srikanth", 20);
console.log(obj.print());
var stud1 = {
    name: "ravi",
    subjects: ["maths", "english", "science"]
};
console.log("".concat(stud1.name, ", ").concat(stud1.subjects[0]));
