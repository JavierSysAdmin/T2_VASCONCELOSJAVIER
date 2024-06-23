import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {
  enrollmentForm: FormGroup;
  totalCost: number | null = null;
  readonly costPerSubject = 520;
  readonly discountThreshold = 5;
  readonly discountRate = 0.10;

  constructor(private fb: FormBuilder) {
    this.enrollmentForm = this.fb.group({
      subjects: [0]
    });
  }

  calculateEnrollment() {
    const { subjects } = this.enrollmentForm.value;
    let totalCost = subjects * this.costPerSubject;

    if (subjects > this.discountThreshold) {
      totalCost -= totalCost * this.discountRate;
    }

    this.totalCost = totalCost;
  }
}
