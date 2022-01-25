import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  active = 1;
  itemsPerPage = 12;
  posts: Post[] = [];

  constructor(
    private post: PostService
  ) { }

  ngOnInit(): void {
    this.post.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
