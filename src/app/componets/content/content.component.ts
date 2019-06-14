import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {

  @Input() link: string;
  @Input() titulo: string;

  constructor() {
    console.log( ' link: ' + this.link);
    console.log( ' titulo: ' + this.titulo);
  }


}
