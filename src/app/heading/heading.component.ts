import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  public head_text='The Best travel Blogs You Need to follow';

  constructor() { }

  ngOnInit(): void {
  }

}
