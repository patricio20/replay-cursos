import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Tema } from '../../model/tema';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: Tema[];

  @Output() linkChieldEvent = new EventEmitter<string>();
  @Output() nameChieldEvent = new EventEmitter<string>();

  constructor() {

    this.items = [
      {titulo: 'Intro',  link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_CourseIntro/ZB404_CourseIntro.swf'},
      {titulo: 'Unit01', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit01/ZB404_Unit01.swf'},
      {titulo: 'Unit02', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit02/ZB404_Unit02.swf'},
      {titulo: 'Unit03', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit03/ZB404_Unit03.swf'},
      {titulo: 'Unit04', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit04/ZB404_Unit04.swf'},
      {titulo: 'Unit05', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit05/ZB404_Unit05.swf'},
      {titulo: 'Unit06', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit06/ZB404_Unit06.swf'},
      {titulo: 'Unit07', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit07/ZB404_Unit07.swf'},
      {titulo: 'Unit08', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit08/ZB404_Unit08.swf'},
      {titulo: 'Unit09', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit09/ZB404_Unit09.swf'},
      {titulo: 'Unit10', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit10/ZB404_Unit10.swf'},
      {titulo: 'Unit11', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit11/ZB404_Unit11.swf'},
      {titulo: 'Unit12', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit12/ZB404_Unit12.swf'},
      {titulo: 'Unit13', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit13/ZB404_Unit13.swf'},
      {titulo: 'Unit14', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit14/ZB404_Unit14.swf'},
      {titulo: 'Unit15', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit15/ZB404_Unit15.swf'},
      {titulo: 'Unit16', link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit16/ZB404_Unit16.swf'},
      {titulo: 'Summary', 
      link: 'https://www.onlinedigitallearning.com/files/websphere/ZB404/ZB404_Unit17_SUMMARY/ZB404_Unit17_SUMMARY.swf'},
];

   }

  ngOnInit() {
  }

  onClick(tema: Tema) {
    console.log('####### Inicio clic: ' + tema.link);
    this.linkChieldEvent.emit(tema.link);
    this.nameChieldEvent.emit(tema.titulo);
  }

}
