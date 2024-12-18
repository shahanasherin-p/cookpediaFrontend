import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-recipe',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink],
  templateUrl: './saved-recipe.component.html',
  styleUrl: './saved-recipe.component.css'
})
export class SavedRecipeComponent {

  allSavedRecipe:any=[]

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllSavedRecipes()
  }

  getAllSavedRecipes(){
    this.api.getUserSaveRecipeAPI().subscribe((res:any)=>{
      this.allSavedRecipe= res
      console.log(this.allSavedRecipe);     
    }) 
  }

  deleteSavedRecipe(recipeId:string){
    this.api.deleteRecipeAPI(recipeId).subscribe((res:any)=>{
      this.getAllSavedRecipes()
    })
  }


}
