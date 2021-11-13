import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiloginComponent } from './milogin.component';

describe('MiloginComponent', () => {
  let component: MiloginComponent;
  let fixture: ComponentFixture<MiloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
