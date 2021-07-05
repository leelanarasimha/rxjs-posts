import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$ = this.postService.postsWithCategory$;

  constructor(private postService: PostService) {}

  ngOnInit(): void {}
}
