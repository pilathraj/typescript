var global_num = 10
class Numbers{
  static sval = 11
  class_num = 12  
  getNum():void{
    var l_num = 13
    console.log("global_num = "+global_num)
  }
}

console.log("Global Number is "+global_num)
console.log("Static Number is "+Numbers.sval)
var obj = new Numbers()
console.log("Class Number is "+obj.class_num)
obj.getNum()
//console.log("Class Static number is "+obj.sval)
