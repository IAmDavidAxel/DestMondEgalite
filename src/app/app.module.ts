import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { AddCharacterComponent } from './add-character/add-character.component';
import {HttpClientModule} from '@angular/common/http';
import {CharacterService} from './character.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CharactersListComponent } from './characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCharacterComponent,
    CreateCharacterComponent,
    CharactersListComponent
  ],
  imports: [
    YouTubePlayerModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
