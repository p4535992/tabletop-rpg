import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFolderComponent } from './create-folder.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
  MatDialogRef
} from '@angular/material';
import { StoreModule, Store } from '@ngrx/store';

import { reducer } from '../store/pc.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateFolderComponent', () => {
  let component: CreateFolderComponent;
  let fixture: ComponentFixture<CreateFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        StoreModule.forRoot(reducer),
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}}
      ],
      declarations: [ CreateFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
