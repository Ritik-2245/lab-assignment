import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  p:number[];

  constructor() { 
   this.p=[1,2,3,4,56,7,6,54];

  }

  ngOnInit(): void {
  }

}
