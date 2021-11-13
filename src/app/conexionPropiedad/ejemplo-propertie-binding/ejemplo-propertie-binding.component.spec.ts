import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploPropertieBindingComponent } from './ejemplo-propertie-binding.component';

describe('EjemploPropertieBindingComponent', () => {
  let component: EjemploPropertieBindingComponent;
  let fixture: ComponentFixture<EjemploPropertieBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploPropertieBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploPropertieBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
