import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderListComponent } from './folder-list.component';
import {
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { EditFolderComponent } from '../edit-folder/edit-folder.component';
import { OVERLAY_PROVIDERS } from '@angular/cdk/overlay';
import { ReactiveFormsModule } from '@angular/forms';
import { reducer } from '../store/pc.reducer';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FolderListComponent', () => {
  let component: FolderListComponent;
  let fixture: ComponentFixture<FolderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatCardModule,
        StoreModule.forRoot(reducer),
      ],
      declarations: [
        FolderListComponent
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
