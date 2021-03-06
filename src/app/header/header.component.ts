import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : boolean;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('role') != undefined;
  }

  logout(){
    this.userService.logout();
  }

}
