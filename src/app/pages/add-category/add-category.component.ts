import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/Category.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  categoryForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onAddCategory(event: Event) {
    event.preventDefault();
    const category: Category = {
      title: this.categoryForm.value.title,
    };
    this.categoryService.addCategory(category).subscribe((data) => {
      this.router.navigateByUrl('/categories');
    });
  }
}
