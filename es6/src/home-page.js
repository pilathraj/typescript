import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class HomePage extends Page{
  constructor(){
    super('Home');
  }
   
  createElement(){
    super.createElement();
    let i = new Image('../images/drone.jpg');
    i.appendToElement(this.element);
     
    let b = new Button('Self Diving Cars');
    let styleString = 'width:300px; height:80px; font-size:22px; margin:10px;';
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute('Cars')); 
     
    b = new Button('Drones');
    b.setStyleString(styleString);
    b.appendToElement(this.element);
    b.element.click(() => application.activateRoute('Drones'));
    console.log(application);
         
   }
   
  getElementString(){
    return '<div style="text-algin:center;"></div>';
  }
}