import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-breathalyzer',
  templateUrl: './breathalyzer.component.html',
  styleUrls: ['./breathalyzer.component.css']
})
export class BreathalyzerComponent {
  breathalyzerForm: FormGroup;
  result: string | null = null;

  vehicles = [
    { type: 'car', name: 'Carro', maxAlcoholLevel: 0.5 },
    { type: 'motorcycle', name: 'Motocicleta', maxAlcoholLevel: 0.2 },
    { type: 'truck', name: 'Camión', maxAlcoholLevel: 0.3 }
  ];

  constructor(private fb: FormBuilder) {
    this.breathalyzerForm = this.fb.group({
      vehicleType: ['car'],
      alcoholLevel: [0]
    });
  }

  checkAlcoholLevel() {
    const { vehicleType, alcoholLevel } = this.breathalyzerForm.value;
    const vehicle = this.vehicles.find(v => v.type === vehicleType);

    if (vehicle) {
      if (alcoholLevel > vehicle.maxAlcoholLevel) {
        this.result = `Positivo. El nivel de alcohol excede el máximo permitido para un ${vehicle.name}.`;
      } else {
        this.result = `Negativo. El nivel de alcohol está dentro del límite permitido para un ${vehicle.name}.`;
      }
    } else {
      this.result = 'Tipo de vehículo no válido.';
    }
  }
}
