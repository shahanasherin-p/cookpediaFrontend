import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userDownloadRecipe:any=[]
  profileImage:string="https://static.vecteezy.com/system/resources/thumbnails/019/896/028/small_2x/add-new-user-icon-in-black-colors-profile-avatar-with-plus-symbol-png.png"

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getUserDownloadSavedRecipes()
    const user=JSON.parse(sessionStorage.getItem("user")||"")
    if(user.profilePic){
      this.profileImage=user.profilePic
    }
  }

  getUserDownloadSavedRecipes(){
    this.api.userDownloadsAPI().subscribe((res:any)=>{
      this.userDownloadRecipe= res
      console.log(this.userDownloadRecipe);     
    }) 
  }

  getFile(event:any){
    let uploadFile = event.target.files[0]
    // convert file into url
    let fr = new FileReader()
    fr.readAsDataURL(uploadFile)
    fr.onload = (event:any)=>{
      console.log(event.target.result);
      this.profileImage = event.target.result
      
    }
  }

  updateProfile(){
    this.api.editUserAPI({profilePic:this.profileImage}).subscribe((res:any)=>{
      sessionStorage.setItem("user",JSON.stringify(res))
      this.profileImage=res.profilePic
      alert("Profile Updated Successfully")
    })
  }


}
