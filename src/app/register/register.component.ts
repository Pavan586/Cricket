import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userName:string="";
  userEmail:string="";
  userPassword:string="";
  constructor(private route:Router,private http:HttpClient) {}
  submit(Register:any) {
    let bodyData = {
      "userName":this.userName,
      "userEmail":this.userEmail,
      "userPassword":this.userPassword
    };
    this.http.post("http://localhost:8080/registration/save",bodyData).subscribe((resultData:any)=>
    {
    console.log(resultData);
    alert("User Registered Successful");
    this.route.navigate(['/login']);
    });

  }

}
