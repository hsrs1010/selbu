import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsPostComponent } from './buildings-post.component';

describe('BuildingsPostComponent', () => {
  let component: BuildingsPostComponent;
  let fixture: ComponentFixture<BuildingsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingsPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
