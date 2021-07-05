import { AddCategoryComponent } from './pages/add-category/add-category.component';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/add', component: AddPostComponent },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'categories/add', component: AddCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
