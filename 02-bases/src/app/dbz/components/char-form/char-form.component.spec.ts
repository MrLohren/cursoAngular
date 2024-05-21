import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharFormComponent } from './char-form.component';

describe('CharFormComponent', () => {
  let component: CharFormComponent;
  let fixture: ComponentFixture<CharFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
