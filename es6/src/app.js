class Drone{
  constructor(id, name){
    this._id = id;
    this.name = name;
  }
  static getCompany(){
    console.log("getCompany in");
  }
  fly(){
    console.log("Drone id#"+this._id+" is flying");
  }
  
  get id(){
    return this._id;
  }
  
  set id(value){
    this._id = value;
  }
  
}
Drone.maxHeight = 2000;


let drone = new Drone('123', "Pilathraj");

console.log(typeof Drone);
console.log(typeof drone);
console.log(drone instanceof Drone);
drone.id = 1312312;
console.log('Drone: #'+drone.id+" Name: "+drone.name);
console.log(Drone.maxHeight);
console.log(drone.maxHeight);
drone.fly();
Drone.getCompany(); 
