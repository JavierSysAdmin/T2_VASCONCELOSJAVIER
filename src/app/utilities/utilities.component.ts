import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.css']
})
export class UtilitiesComponent {
  utilitiesForm: FormGroup;
  utilities: number | null = null;

  constructor(private fb: FormBuilder) {
    this.utilitiesForm = this.fb.group({
      salary: [0],
      years: [0]
    });
  }

  calculateUtilities() {
    const { salary, years } = this.utilitiesForm.value;
    let percentage = 0;

    if (years < 1) {
      percentage = 0.05;
    } else if (years >= 1 && years < 2) {
      percentage = 0.07;
    } else if (years >= 2 && years < 5) {
      percentage = 0.10;
    } else if (years >= 5 && years < 10) {
      percentage = 0.15;
    } else if (years >= 10) {
      percentage = 0.20;
    }

    this.utilities = salary * percentage;
  }
}
