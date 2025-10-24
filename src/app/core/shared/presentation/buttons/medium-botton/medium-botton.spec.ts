import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumBotton } from './medium-botton';

describe('MediumBotton', () => {
  let component: MediumBotton;
  let fixture: ComponentFixture<MediumBotton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumBotton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumBotton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
