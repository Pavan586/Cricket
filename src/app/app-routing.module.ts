import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddteamsComponent } from './addteams/addteams.component';
import { ShowteamsComponent } from './showteams/showteams.component';
import { UpdateteamsComponent } from './updateteams/updateteams.component';
import { DeletecomponentComponent } from './deletecomponent/deletecomponent.component';
import { PlayersComponent } from './players/players.component';
import { ViewplayersComponent } from './viewplayers/viewplayers.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { ViewallplayersComponent } from './viewallplayers/viewallplayers.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/addteams',component:AddteamsComponent},
  {path:'dashboard/addteams',redirectTo:'dashboard/addteams',pathMatch:'full'},
  {path:'dashboard/showteams',component:ShowteamsComponent},
  {path:'update/:tid',component:UpdateteamsComponent},
  {path:'delete/:tid',component:DeletecomponentComponent},
  {path:'addplayers/:tid',component:PlayersComponent},
  {path:'viewplayers/:teamname',component:ViewplayersComponent},
  {path:'updateplayer/:pid',component:UpdatePlayerComponent},
  {path:'viewallplayers',component:ViewallplayersComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
