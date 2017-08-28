import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {application} from './app.js'; 

export class CarsPage extends Page{
  constructor(){
    super('Cars');
  }
   
  createElement(){
    super.createElement();
    let headers = 'License Make Model Miles'.split(' ');
    let t = new DataTable(headers, application.dataService.cars);
    t.appendToElement(this.element);     
   }
   
  getElementString(){
    return '<div style="text-algin:center;"><h3> Car Page </h3></div>';
  }
}