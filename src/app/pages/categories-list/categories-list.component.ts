import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
})
export class CategoriesListComponent implements OnInit {
  categories$ = this.categoryService.categories$;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}
}
