import { Component } from '@angular/core';
import { ShowPlayers } from '../showplayers';
import { ShowteamsService } from '../showteams.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewplayers',
  templateUrl: './viewplayers.component.html',
  styleUrls: ['./viewplayers.component.scss']
})
export class ViewplayersComponent {
  title:string;
  teamname:string;
  players:ShowPlayers[];
  private routeSub:Subscription;
  constructor(private route:Router,private http:HttpClient,private activeRoute:ActivatedRoute,private service:ShowteamsService) {}
  ngOnInit() {
    this.routeSub=this.activeRoute.params.subscribe(params => {
      console.log(params);
      console.log(params['teamname']);
      this.teamname=params['teamname'];
      this.title=this.teamname;
    })
    this.getPlayers();
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  getPlayers():void {
    this.service.getPlayers(this.teamname).subscribe(players=>this.players=players);
  }
  /*deletePlayer(pid:number) {
    this.service.deletePlayer(pid).subscribe(data=>{
      alert("Player Deleted Successfully");
      this.route.navigate(["/dashboard/showteams"]);
    },error=>console.error());
    
  }*/
  deletePlayer(pid:number) {
    this.service.deletePlayer(pid).subscribe(data=>{
      alert("Player Deleted Successfully");
      this.route.navigate(["/dashboard/showteams"]);
    },error=>console.error());
    
  }
  



}
