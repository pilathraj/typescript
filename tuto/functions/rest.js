function addNumbers() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    var i;
    for (i = 0; i < num.length; i++)
        sum += num[i];
    console.log("sum is " + sum);
}
addNumbers(1, 2, 3, 4, 5);
addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
addNumbers();
