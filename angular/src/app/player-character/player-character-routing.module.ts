import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCharacterComponent} from './create-character/create-character.component'

const routes: Routes = [
  { path: "create", component: CreateCharacterComponent},
  { path: '', redirectTo: "create", pathMatch: 'full'},
  { path: '**', redirectTo: 'create', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerCharacterRoutingModule { }
