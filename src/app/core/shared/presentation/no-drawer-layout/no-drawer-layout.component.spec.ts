import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoDrawerLayoutComponent } from './no-drawer-layout.component';


describe('MainComponent', () => {
  let component: NoDrawerLayoutComponent;
  let fixture: ComponentFixture<NoDrawerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoDrawerLayoutComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoDrawerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
