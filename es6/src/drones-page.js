import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {application} from './app.js'; 

export class DronesPage extends Page{
  constructor(){
    super('Drones');
  }
   
  createElement(){
    super.createElement();    
    let headers = 'License Base Model AirTimeHours'.split(' ');
    console.log(application.dataService.drones);
    let t = new DataTable(headers, application.dataService.drones);
    t.appendToElement(this.element);     
   }
   
  getElementString(){
    return '<div style="text-algin:center;"><h3> Drone Page </h3></div>';
  }
}