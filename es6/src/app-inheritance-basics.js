class Vehicle{
  constructor(licenseNum){
    this.licenseNum = licenseNum;
    this.gpsEnabled = true;
    console.log('Vehicle constructing ...');
  }
  start(){
    console.log('Vehicle is starting...');
  }
  static getClassName(){
    console.log('Vehicle');
  }
}

class Drone extends Vehicle{
  
}

class Car extends Vehicle{
  constructor(licenseNum){    
    super(licenseNum);
    this.gpsEnabled = false;
    console.log('Car Constructing..');    
  }
  start(){
    console.log('Car is starting...');
    super.start();
  }
   static getClassName(){
    console.log('Car');
    super.getClassName();
  }
}

let c = new Car('A123');

console.log(c.licenseNum);
console.log(c.gpsEnabled);
c.start();
Car.getClassName();

//console.log(c instanceof Car); // true
//console.log(c instanceof Vehicle); // true
//console.log(c instanceof Object); // true