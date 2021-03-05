import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "../registration.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _regdata:RegistrationService) { }

  ngOnInit(): void {
  }
  onLogin(){
  this._regdata.login("Admin","1234");
  alert("login successfully");
  console.log("from localstorage ",localStorage.getItem("user_name"));

  }

  onLogout(){
    this._regdata.logout();
   alert("logout successfully");
  }
  get isLoggedIn(): boolean {
    return this._regdata.isLoggedIn;
  }

}
