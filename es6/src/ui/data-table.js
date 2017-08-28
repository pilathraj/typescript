import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement{
  
    constructor(headers, data){
      super();
      this.headers = headers;
      this.data = data;
    }
     
    getElementString(){
      console.log(this.data);
      let thTags = '';
      let trTags = '';
      for(let h of this.headers)
        thTags += `<th class="mdl-data-table__cell--non-numeric">${h}</th>`;
      
      for(let row of this.data){
        trTags += `<tr>`;
          for(let property of this.headers){
            let propertyLowerCase = property.toLowerCase();
            if(propertyLowerCase == 'airtimehours')
                propertyLowerCase = 'airTimeHours';
            let field = row[propertyLowerCase];
            
            trTags +=`<td class="mdl-data-table__cell--non-numeric">${field}</td>`;
          }            
        trTags += `</tr>`;
      }
    
      return `
        <table class="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
          <thead>
            <tr>
              ${thTags}
            </tr>
          </thead>
          <tbody>
          ${trTags}
          </tbody>
        </table>
      `;
    }
    
}