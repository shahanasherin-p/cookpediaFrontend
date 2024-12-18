import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedRecipeComponent } from './saved-recipe/saved-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    // lazy loaded admin module
    {
        path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
    },


    {
        path:"",component:HomeComponent,title:"Home"
    },
    {
        path:"about",component:AboutComponent,title:"About"
    },
    {
        path:"contact",component:ContactComponent,title:"Contact"
    },
    {
        path:"login",component:LoginComponent,title:"Login"
    },
    {
        path:"register",component:RegisterComponent,title:"Register"
    },
    {
        path:"all-recipes",component:RecipesComponent,title:"all-Recipes"
    },
    {
        path:"profile",component:ProfileComponent,title:"Profile"
    },
    {
        path:"save-recipe",component:SavedRecipeComponent,title:"Save Recipes Collection"
    },
    {
        path:"recipe/:id/view",component:ViewRecipeComponent,title:"View Recipe"
    },
    {
        path:"**",component:PnfComponent,title:"Page Note Found"
    }
];
