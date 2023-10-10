import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { AddteamsComponent } from './addteams/addteams.component';
import { ShowteamsComponent } from './showteams/showteams.component';
import { ShowteamsService } from './showteams.service';
import { UpdateteamsComponent } from './updateteams/updateteams.component';
import { DeletecomponentComponent } from './deletecomponent/deletecomponent.component';
import { PlayersComponent } from './players/players.component';
import { ViewplayersComponent } from './viewplayers/viewplayers.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { ViewallplayersComponent } from './viewallplayers/viewallplayers.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddteamsComponent,
    ShowteamsComponent,
    UpdateteamsComponent,
    DeletecomponentComponent,
    PlayersComponent,
    ViewplayersComponent,
    UpdatePlayerComponent,
    ViewallplayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShowteamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
