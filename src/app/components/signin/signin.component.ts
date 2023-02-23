import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  email:String = ""
  password:String = ""

  constructor(private userS:UserService, private router:Router){}

  signIn(){
    const user = new User();
    user.email = this.email
    user.password = this.password
    this.userS.signIn(user).then(res => {
      console.log(res)
      this.router.navigate(['/'])
    }).catch(err => {
      console.log(err)
    })
  }
  googleSignIn(){
    this.userS.googleLogIn().then(res => {
      console.log(res)
      this.router.navigate(['/main'])
    }).catch(err => {
      console.log(err)
    })
  }
}
