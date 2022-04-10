import { Component, OnInit } from '@angular/core';
import { Post } from 'typings/content';
import { post } from 'typings/data';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  public p=post;
  constructor() { }

  ngOnInit(): void {
  }

}
