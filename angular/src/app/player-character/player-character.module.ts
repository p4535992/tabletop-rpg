import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './store/reducer';
import { PlayerCharacterRoutingModule } from './player-character-routing.module';
import { CreateCharacterComponent } from './create-character/create-character.component';

@NgModule({
  imports: [
    CommonModule,
    PlayerCharacterRoutingModule,
    StoreModule.forFeature("character", reducers, { metaReducers }),
  ],
  declarations: [CreateCharacterComponent]
})
export class PlayerCharacterModule { }
