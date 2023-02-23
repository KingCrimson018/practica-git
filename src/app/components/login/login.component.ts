import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:String = ""
  password:String = ""
  

  constructor(private userS:UserService, private router:Router){}
  logIn(){
    const user = new User();
    user.email = this.email
    user.password = this.password
    this.userS.logIn(user).then(res => {
      console.log(res)
      this.router.navigate(['main'])
    }).catch(err => {
      console.log(err)
    })
    

  }
}
