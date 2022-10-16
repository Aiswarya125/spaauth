import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signIn!:FormGroup

  constructor(private formbuilder:FormBuilder, private http:HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.signIn=this.formbuilder.group({
      email:[''],
      password:[''],
    })
  }
  signin()
{
  this.http.get<any>( 'http://localhost:3000/users').subscribe(res=>
    {
      // alert("Success");
      const user =res.find((a:any)=>{
        return a.email===this.signIn.value.email &&
        a.password===this.signIn.value.password;
        
      })
      if(user){
        alert("success");
        this.signIn.reset();
      }
      else{
        alert("user doesn't exist")
      }
    })
  }
}

