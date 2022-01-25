import { Post } from './../../interfaces/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-two',
  templateUrl: './option-two.component.html',
  styleUrls: ['./option-two.component.scss'],
})
export class OptionTwoComponent implements OnInit {
  @Input() posts: Post[] = [];
  @Input() itemsPerPage: number = 10;
  page = 1;

  constructor() {}

  ngOnInit(): void {}
}
