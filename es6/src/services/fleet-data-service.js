import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js';


export class FleetDataService{
  
  constructor(){
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }
  
  loadData(fleet){
    for(let data of fleet){
      switch(data.type){
        case 'car':
          if(this.validateCarData(data))
          {
            let car = this.loadCar(data);
            this.cars.push(car);
          }
          break;
        case 'drone':
          if(this.validateDroneData(data))
          {
            let drone = this.loadDrone(data);
            this.drones.push(drone);
          }
          break;
        default:
          let e = new DataError("Invalid vehicle type", data);
          this.errors.push(e);
          break;
      }
    }
  }
  
  loadCar(car){
    try{
      let c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      return c;
    }
    catch(e){
      this.errors.push(new DataError('error in loading car', car));
    }
  }
  validateCarData(car){
    let requiredProps = "license model latLong make miles".split(" ");   
    let hasErrors =  false;
    
    for(let field of requiredProps)
    {
        if(!car[field]){
           let e =  new DataError('Invalid car data', car);
           this.errors.push(e);
           hasErrors = true;
        }
    }
    
    if(Number.isNaN(Number.parseFloat(car.miles))){
      let e =  new DataError('Invalid car mileage', car);
      this.errors.push(e);
      hasErrors = true;
    }
    
    return !hasErrors;     
    
  }
  
  getCarByLicense(license){
    return this.cars.find(function(car){
      return car.license === license;
    });
  }
  
  getCarsSortedByLicense(){
     return this.cars.sort(function(car1, car2){
        if(car1.license < car2.license )
            return -1;
        if(car1.license > car2.license)
           return 1
         return 0;
     });
  }
  
  filterCarsByMake(filter){
    return this.cars.filter( car => car.make.indexOf(filter) >=0);
  }
  
  
  /***  Drone methods Start ***/
  
  loadDrone(drone){
    try{
      console.log(drone);
      let d = new Drone(drone.license, drone.model, drone.latLong);
      d.base = drone.base;
      d.airTimeHours = drone.airTimeHours;
      console.log(d);
      return d;
    }
    catch(e){
      this.errors.push(new DataError('error in loading drone', drone));
    }
  }
  
  validateDroneData(drone){
    let requiredProps = "license model latLong base airTimeHours".split(" ");   
    let hasErrors =  false;
    
    for(let field of requiredProps)
    {
        if(!drone[field]){
           let e =  new DataError('Invalid Drone data', drone);
           this.errors.push(e);
           hasErrors = true;
        }
    }
    
    if(Number.isNaN(Number.parseFloat(drone.airTimeHours))){
      let e =  new DataError('Invalid drone air time hours', drone);
      this.errors.push(e);
      hasErrors = true;
    }
    
    return !hasErrors;     
    
  }
  
}