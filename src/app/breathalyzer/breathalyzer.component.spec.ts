import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathalyzerComponent } from './breathalyzer.component';

describe('BreathalyzerComponent', () => {
  let component: BreathalyzerComponent;
  let fixture: ComponentFixture<BreathalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreathalyzerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreathalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
