import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisEmpleeadosComponent } from './mis-empleeados.component';

describe('MisEmpleeadosComponent', () => {
  let component: MisEmpleeadosComponent;
  let fixture: ComponentFixture<MisEmpleeadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisEmpleeadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisEmpleeadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
