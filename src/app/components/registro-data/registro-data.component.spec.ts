import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDataComponent } from './registro-data.component';

describe('RegistroDataComponent', () => {
  let component: RegistroDataComponent;
  let fixture: ComponentFixture<RegistroDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
