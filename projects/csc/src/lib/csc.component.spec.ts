import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CscComponent } from './csc.component';

describe('CscComponent', () => {
  let component: CscComponent;
  let fixture: ComponentFixture<CscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CscComponent]
    });
    fixture = TestBed.createComponent(CscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
