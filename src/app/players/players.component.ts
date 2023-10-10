import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, catchError } from 'rxjs';
import { ShowteamsService } from '../showteams.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {
  msg:string;
  messages:string;
  baseUrl:string="http://localhost:8080/players/addplayers";
  pid:number;
  pname:string="";
  pcategory:string="";
  pcountry:string="";
  page:number;
  pbudget:number;
  private routeSub:Subscription;
  constructor(private route:Router,private http:HttpClient,private activeRoute:ActivatedRoute,private service:ShowteamsService) {}
  ngOnInit() {
    this.routeSub=this.activeRoute.params.subscribe(params => {
      console.log(params);
      console.log(params['tid']);
      this.pid=params['tid'];
    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  submit(Player:any) {
    console.log(Player);
    let bodyData={
      "pname":this.pname,
      "pcategory":this.pcategory,
      "pcountry":this.pcountry,
      "page":this.page,
      "pbudget":this.pbudget
    }
    //this.pid=+this.activeRoute.snapshot.paramMap.get("pid");
    
    console.log(this.pid);
    this.http.post(`${this.baseUrl}/${this.pid}`,bodyData).pipe(catchError(this.service.handleError)).subscribe((resultData:any)=>
    {
      alert("Player added Successfully");
      this.route.navigate(['/dashboard/showteams']);
      //console.log(this.messages);
    },(error)=> {
      this.msg=error.error.message;
      alert(this.msg);
    }
    );
    

  }

}
