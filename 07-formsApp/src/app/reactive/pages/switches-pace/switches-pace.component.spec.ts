import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchesPaceComponent } from './switches-pace.component';

describe('SwitchesPaceComponent', () => {
  let component: SwitchesPaceComponent;
  let fixture: ComponentFixture<SwitchesPaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchesPaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchesPaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
