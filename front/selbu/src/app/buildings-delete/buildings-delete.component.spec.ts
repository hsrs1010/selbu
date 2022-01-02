import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsDeleteComponent } from './buildings-delete.component';

describe('BuildingsDeleteComponent', () => {
  let component: BuildingsDeleteComponent;
  let fixture: ComponentFixture<BuildingsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
