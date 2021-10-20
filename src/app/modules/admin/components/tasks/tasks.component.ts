import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Tasks } from 'src/app/models/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  form = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      status: [false],
    });

    this.form.valueChanges.pipe(debounceTime(500)).subscribe((values) => {
      console.log(values);
      console.log(this.form.controls);
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get titleField() {
    return this.form.get('title');
  }

  get textField() {
    return this.form.get('text');
  }
}
