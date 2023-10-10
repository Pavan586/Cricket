import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowTeams } from '../showteams';
import { ShowteamsService } from '../showteams.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-updateteams',
  templateUrl: './updateteams.component.html',
  styleUrls: ['./updateteams.component.scss'],
})
export class UpdateteamsComponent {
  tid:number;
  team:ShowTeams;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,private service:ShowteamsService) {}
  ngOnInit():void {
    this.getTeams();
  }
  getTeams():void {
    this.tid=+this.route.snapshot.paramMap.get("tid");
    if(this.tid !=0) {
      this.service.getTeam(this.tid).subscribe(team=>this.team=team);

    } else {
      this.team=new ShowTeams(0,"",0);
    }
  }
  /*saveTeam():void {
    this.service.saveTeam(this.team).subscribe(team=>this.team=team);
   // this.router.navigate(["/dashboard/showteams"]);
  }*/
  submit(UpdateTeams:any) {
    console.log(this.tid);
    this.service.updateTeam(this.tid,this.team).subscribe(data=>{
    alert("Team updated succesfully");
    this.router.navigate(["/dashboard/showteams"]);
    },error=>console.error());
    //this.service.saveTeam(this.team).subscribe(team=>this.team=team);
    

  }
  

}
