import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsUpdateComponent } from './buildings-update.component';

describe('BuildingsUpdateComponent', () => {
  let component: BuildingsUpdateComponent;
  let fixture: ComponentFixture<BuildingsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
