import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddCharacterComponent} from './add-character/add-character.component';
import {CharactersListComponent} from "./characters-list/characters-list.component";


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'create', component: AddCharacterComponent},
  {path: 'character-list', component: CharactersListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
