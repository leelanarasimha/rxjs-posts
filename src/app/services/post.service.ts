import { PostService } from './post.service';
import { Category } from './../models/Category.model';
import { CategoryService } from './category.service';
import { Post } from './../models/Post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  merge,
  Observable,
  Subject,
} from 'rxjs';
import { map, scan, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts$ = this.http
    .get<Post[]>(`https://rxjs-posts-default-rtdb.firebaseio.com/posts.json`)
    .pipe(
      tap((data) => console.log(data)),
      map((data) => {
        const posts: Post[] = [];
        for (let key in data) {
          posts.push({ ...data[key], id: key });
        }
        return posts;
      })
    );

  postsWithCategory$ = combineLatest([
    this.posts$,
    this.categoryService.categories$,
  ]).pipe(
    tap(([posts, categories]) => console.log(categories)),
    map(([posts, categories]) => {
      return posts.map((post) => {
        return {
          ...post,
          category: categories.find((cat) => cat.id === post.categoryId),
        } as Post;
      });
    }),
    shareReplay(1)
  );

  private addPostSubject$ = new Subject<Post>();
  private addPostAction$ = this.addPostSubject$.asObservable();

  constructor(
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

  addPost(post: Post) {
    return this.http.post(
      `https://rxjs-posts-default-rtdb.firebaseio.com/posts.json`,
      post
    );
  }
}
