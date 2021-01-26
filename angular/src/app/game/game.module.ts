import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GameRoutingModule } from './game-routing.module';
// import {
//   MatFormFieldModule,
//   MatInputModule,
//   MatIconModule,
//   MatCardModule,
//   MatButtonModule,
//   MatDialogModule,
//   MatExpansionModule
// } from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

import { StoreModule } from '@ngrx/store';
import * as fromGame from './store/game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './store/game.effects';
import { FolderListComponent } from './folder-list/folder-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GameRoutingModule,
    StoreModule.forFeature('game', fromGame.reducer),
    EffectsModule.forFeature([GameEffects]),
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  declarations: [FolderListComponent]
})
export class GameModule { }
