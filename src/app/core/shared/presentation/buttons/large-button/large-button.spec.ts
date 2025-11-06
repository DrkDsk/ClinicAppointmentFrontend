import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LargeButton} from './large-button';

describe('LargeButton', () => {
  let component: LargeButton;
  let fixture: ComponentFixture<LargeButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeButton]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LargeButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
