import { CategoryService } from './../../services/category.service';
import { PostService } from './../../services/post.service';
import { Post } from './../../models/Post.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
  });

  categories$ = this.categoryService.categories$;

  constructor(
    private postService: PostService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {}

  onCreatePost(event: Event) {
    event.preventDefault();
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
      categoryId: this.postForm.value.categoryId,
    };
    this.postService.addPost(post).subscribe((data) => {
      let postData = {
        ...post,
        id: data.name,
      };
      this.postService.addPostSubject(postData);
      this.router.navigateByUrl('/posts');
    });
  }
}
