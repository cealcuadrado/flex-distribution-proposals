import { Post } from './../../interfaces/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-two',
  templateUrl: './option-two.component.html',
  styleUrls: ['./option-two.component.scss']
})
export class OptionTwoComponent implements OnInit {

  @Input() posts: Post[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
