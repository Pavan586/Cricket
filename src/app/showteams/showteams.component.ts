import { Component } from '@angular/core';
import { ShowTeams } from '../showteams';
import { ShowteamsService } from '../showteams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showteams',
  templateUrl: './showteams.component.html',
  styleUrls: ['./showteams.component.scss']
})
export class ShowteamsComponent {
  teams:ShowTeams[];
  constructor(private service:ShowteamsService,private router:Router) {}
  ngOnInit() {
    this.getTeams();
  }
  getTeams():void {
    this.service.getTeams().subscribe(teams=>this.teams=teams);
  }
  deleteTeam(tid:number) {
    this.service.deleteTeam(tid).subscribe(data=>{
      alert("Team Deleted Successfully");
      this.router.navigate(["/dashboard/showteams"]);
    },error=>console.error());
    
  }
  

}
