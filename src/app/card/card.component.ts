import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'typings/content';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    
  @Input('Post') Post:Post={
   image:'',
   title:'',
   description:'',

  };


  constructor() { }

  ngOnInit(): void {
  }

}
