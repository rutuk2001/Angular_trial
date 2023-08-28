import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryDemoComponent } from './jquery-demo.component';

describe('JqueryDemoComponent', () => {
  let component: JqueryDemoComponent;
  let fixture: ComponentFixture<JqueryDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JqueryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
