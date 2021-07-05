import { Category } from './../models/Category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories$ = this.http
    .get<{ [key: string]: Category }>(
      `https://rxjs-posts-default-rtdb.firebaseio.com/categories.json`
    )
    .pipe(
      tap((data) => console.log(data)),
      shareReplay(1),
      map((data) => {
        const categories: Category[] = [];
        for (let key in data) {
          const category: Category = {
            id: key,
            title: data[key].title,
          };
          categories.push(category);
        }
        return categories;
      })
    );

  constructor(private http: HttpClient) {}

  addCategory(category: Category) {
    return this.http.post(
      `https://rxjs-posts-default-rtdb.firebaseio.com/categories.json`,
      category
    );
  }
}
