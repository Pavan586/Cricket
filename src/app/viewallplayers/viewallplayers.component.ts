import { Component } from '@angular/core';
import { ShowPlayers } from '../showplayers';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShowteamsService } from '../showteams.service';

@Component({
  selector: 'app-viewallplayers',
  templateUrl: './viewallplayers.component.html',
  styleUrls: ['./viewallplayers.component.scss']
})
export class ViewallplayersComponent {
  players:ShowPlayers[];
  constructor(private route:Router,private http:HttpClient,private activeRoute:ActivatedRoute,private service:ShowteamsService) {}
  ngOnInit():void {
    this.getPlayers();
  }
  getPlayers():void {
    this.service.getAllPlayers().subscribe(players=>this.players=players);
  }



}
