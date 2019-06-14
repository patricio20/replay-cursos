import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'indra-sae-cursos';

  parentLink: string;
  parentTitulo: string;

  receiveCollapsed($event) {
    this.parentLink = $event;
  }

  receiveTitulo($event){
    this.parentTitulo = $event;
  }

  ngOnInit() {}
}
