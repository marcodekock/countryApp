import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal02Component } from './modal.component';

describe('ModalComponent', () => {
  let component: Modal02Component;
  let fixture: ComponentFixture<Modal02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modal02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modal02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
