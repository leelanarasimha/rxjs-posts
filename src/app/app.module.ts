import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PostsListComponent,
    AddPostComponent,
    CategoriesListComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
