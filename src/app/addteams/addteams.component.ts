import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addteams',
  templateUrl: './addteams.component.html',
  styleUrls: ['./addteams.component.scss']
})
export class AddteamsComponent {
  constructor(private route:Router,private http:HttpClient,private activatedRoute:ActivatedRoute) {}
  tname:string="";
  tbudget:string="";
  submit(AddTeam:any) {
    let bodyData= {
      "tname":this.tname,
      "tbudget":this.tbudget
    };
    this.http.post("http://localhost:8080/teams/addteams",bodyData).subscribe((resultData:any)=>
    {
    console.log(resultData);
    alert("Team added Successful");
    this.route.navigate(['/dashboard/showteams']);
    });

  }

}
