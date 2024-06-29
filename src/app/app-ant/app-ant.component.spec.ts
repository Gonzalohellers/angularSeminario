import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAntComponent } from './app-ant.component';

describe('AppAntComponent', () => {
  let component: AppAntComponent;
  let fixture: ComponentFixture<AppAntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppAntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppAntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
