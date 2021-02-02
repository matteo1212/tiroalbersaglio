import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNewPComponent } from './test-new-p.component';

describe('TestNewPComponent', () => {
  let component: TestNewPComponent;
  let fixture: ComponentFixture<TestNewPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNewPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNewPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
