import {Page} from './framework/page.js';
import {GoogleMap} from './ui/google-map.js';
import {application} from './app.js'; 

export class MapPage extends Page{
  constructor(){
    super('Map');
  }   
  createElement(){
    super.createElement();
    let centerOfMap = {lat:40.7836, lng: - 73.9658};
    let map = new GoogleMap(centerOfMap, application.dataService.cars);
    map.appendToElement(this.element);     
   }
   
  getElementString(){
    return '<div style="text-algin:center;"><h3> Map</h3></div>';
  }
}