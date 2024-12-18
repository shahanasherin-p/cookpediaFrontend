import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RequestListComponent } from './request-list/request-list.component';
import { ManageRecipeComponent } from './manage-recipe/manage-recipe.component';
import { DownloadListComponent } from './download-list/download-list.component';

const routes: Routes = [
  {
    path:"", component:DashboardComponent,title:"Admin Dashboard"
  },
  {
    path:"download-list", component:DownloadListComponent,title:"Recipe Download list"
  },
  {
    path:"recipe-list", component:RecipeListComponent,title:"Recipe List"
  },
  {
    path:"user-list", component:UsersListComponent,title:"User List"
  },
  {
    path:"request-list", component:RequestListComponent,title:"Client Request List"
  },
  {
    path:"recipe/add", component:ManageRecipeComponent,title:"Add Recipe Page"
  },
  {
    path:"recipe/:id/edit", component:ManageRecipeComponent,title:"Edit Recipe Page"
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
