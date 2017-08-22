var global_num = 10;
var Numbers = (function () {
    function Numbers() {
        this.class_num = 12;
    }
    Numbers.prototype.getNum = function () {
        var l_num = 13;
        console.log("global_num =" + global_num);
    };
    Numbers.sval = 11;
    return Numbers;
}());
console.log("Global Number is " + global_num);
console.log("Static Number is " + Numbers.sval);
var obj = new Numbers();
console.log("Class Number is " + obj.class_num);
obj.getNum();
//console.log("Class Static number is "+obj.sval)
