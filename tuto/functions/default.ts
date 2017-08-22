function getDiscount(price:number, rate:number = 0.50){
  var discount = price * rate
  console.info("Discount is: " + discount)
}

getDiscount(100)
getDiscount(100,0.25)