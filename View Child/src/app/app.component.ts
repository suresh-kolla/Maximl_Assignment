import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { DataService } from './data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'chennai';
  @ViewChild('child') child: ChildComponent

  slick() {
    this.child.dosomething();
  }
 hai=[];

  constructor(private data: DataService) {
    this.data.getdata().subscribe((res)=>{
     this.hai.push(res)
    })
   };
  
  
  }



