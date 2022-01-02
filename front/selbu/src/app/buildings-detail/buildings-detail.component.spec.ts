import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsDetailComponent } from './buildings-detail.component';

describe('BuildingsDetailComponent', () => {
  let component: BuildingsDetailComponent;
  let fixture: ComponentFixture<BuildingsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
