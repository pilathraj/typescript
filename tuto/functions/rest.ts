function addNumbers(...num){
  var sum:number =0;
  var i;
  for(i=0; i <num.length; i++)
      sum += num[i]
  console.log("sum is "+ sum)
}

addNumbers(1,2,3,4,5)
addNumbers(1,2,3,4,5,6,7,8,9,10)
addNumbers()
