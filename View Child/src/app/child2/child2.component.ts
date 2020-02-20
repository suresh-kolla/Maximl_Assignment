import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }
  send(){
    this.data.senddata('child2 to appcomponent')
  }
}
