import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KakaoMapComponent } from './kakao-map.component';

describe('KakaoMapComponent', () => {
  let component: KakaoMapComponent;
  let fixture: ComponentFixture<KakaoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KakaoMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KakaoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
