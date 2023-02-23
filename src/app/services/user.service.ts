import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { GoogleAuthProvider, signOut } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  fotoUrl:String | null= ""
  name:String | null = ""
  uid:String = ""
  constructor(private auth: Auth) { }

  logIn({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password)
  }
  signIn({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password).then(res => {
      this.name = res.user.displayName
      this.fotoUrl = res.user.photoURL
      this.uid = res.user.uid
    })
  }
  logOut(){
    return signOut(this.auth)
  }
  googleLogIn(){
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(res => {
      this.name = res.user.displayName
      this.fotoUrl = res.user.photoURL
      this.uid = res.user.uid
    })
  }
}
