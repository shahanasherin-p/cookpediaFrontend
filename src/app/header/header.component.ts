import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isloggedin:boolean=false
  loggedUsername:string=""

  constructor(private router:Router){}

  ngOnInit(){
  if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
    this.isloggedin=true
    this.loggedUsername=JSON.parse(sessionStorage.getItem("user") || "").username
  }else{
    this.isloggedin=false
    this.loggedUsername=""
  }
}

logout(){
  sessionStorage.clear()
  localStorage.clear()
  this.isloggedin=false
  this.loggedUsername=""
  this.router.navigateByUrl("/")
}

}

