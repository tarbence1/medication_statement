import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addComponent } from './add.component';

describe('UserProfileComponent', () => {
  let component: addComponent;
  let fixture: ComponentFixture<addComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(addComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
