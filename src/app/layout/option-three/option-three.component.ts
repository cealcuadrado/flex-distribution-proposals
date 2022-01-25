import { Post } from './../../interfaces/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-three',
  templateUrl: './option-three.component.html',
  styleUrls: ['./option-three.component.scss'],
})
export class OptionThreeComponent implements OnInit {
  @Input() posts: Post[] = [];
  @Input() itemsPerPage: number = 10;
  page = 1;

  constructor() {}

  ngOnInit(): void {}
}
