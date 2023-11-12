import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutServiceComponent } from './out-service.component';

describe('OutServiceComponent', () => {
  let component: OutServiceComponent;
  let fixture: ComponentFixture<OutServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
