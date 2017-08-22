function getDiscount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.info("Discount is: " + discount);
}
getDiscount(100);
getDiscount(100, 0.25);
