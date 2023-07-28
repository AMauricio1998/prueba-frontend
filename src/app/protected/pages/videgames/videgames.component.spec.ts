import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidegamesComponent } from './videgames.component';

describe('VidegamesComponent', () => {
  let component: VidegamesComponent;
  let fixture: ComponentFixture<VidegamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidegamesComponent]
    });
    fixture = TestBed.createComponent(VidegamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
