import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
register!:FormGroup

  constructor(private formbuilder:FormBuilder, private http:HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.register = this.formbuilder.group(
      {
        name:[''],
        email:[''],
        password:[''],
        confirmpass:['']
      }
    )
  }
  signUp(){
    this.http.post<any>( 'http://localhost:3000/users',this.register.value).subscribe(res=>
    {
      alert("Success");
    })
  }

}
