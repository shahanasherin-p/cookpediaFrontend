import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '../admin/model/recipeModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url="https://cookpediaserver-rhcy.onrender.com"

  constructor(private http:HttpClient) { }

  getAllRecipeAPI(){
    return this.http.get(`${this.server_url}/all-recipes`)
  }

  addTestimonyAPI(reqBody:any){
    return this.http.post(`${this.server_url}/add-testimony`,reqBody)
  }

  registerAPI(reqBody:any){
    return this.http.post(`${this.server_url}/register`,reqBody)
  }

  loginAPI(reqBody:any){
    return this.http.post(`${this.server_url}/login`,reqBody)
  }

  appendToken(){
    let headers = new HttpHeaders()
    const token =sessionStorage.getItem("token")
    if(token){
      headers=headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }

  getSingleRecipeApi(recipeId:string){
    return this.http.get(`${this.server_url}/recipe/${recipeId}/view`,this.appendToken())
  }

  relatedRecipeApi(cuisine:string){
    return this.http.get(`${this.server_url}/related-recipes?cuisine=${cuisine}`,this.appendToken())  }
 
    downloadRecipeAPI(recipeId:string,reqBody:any){
      return this.http.post(`${this.server_url}/recipe/${recipeId}/download`,reqBody,this.appendToken())
    }  

    saveRecipeAPI(recipeId:string,reqBody:any){
      return this.http.post(`${this.server_url}/recipe/${recipeId}/save`,reqBody,this.appendToken())
    }

    getUserSaveRecipeAPI(){
      return this.http.get(`${this.server_url}/get-save-recipes`,this.appendToken())
    } 

    deleteRecipeAPI(recipeId:string){
      return this.http.delete(`${this.server_url}/save-recipes/${recipeId}/remove`,this.appendToken())
    }

    userDownloadsAPI(){
      return this.http.get(`${this.server_url}/user-downloads`,this.appendToken())
    }

    editUserAPI(reqBody:any){
      return this.http.post(`${this.server_url}/user/edit`,reqBody,this.appendToken())
    }

    allUserAPI(){
      return this.http.get(`${this.server_url}/all-users`,this.appendToken())
    }

    allDownloadListAPI(){
      return this.http.get(`${this.server_url}/downloads-list`,this.appendToken())
    }

    allFeedbacksAPI(){
      return this.http.get(`${this.server_url}/all-feedbacks`,this.appendToken())
    }

    updateClientFeedbacksAPI(feedbackId:string,status:string){
      return this.http.get(`${this.server_url}/feedback/${feedbackId}/update?status=${status}`,this.appendToken())
    }

    allApprovedFeedbacksAPI(){
      return this.http.get(`${this.server_url}/all-Approved-feedbacks`)
    }

    addRecipeAPI(reqBody:any){
      return this.http.post(`${this.server_url}/add-recipe`,reqBody,this.appendToken())
    }

    updateRecipeAPI(id:string,reqBody:RecipeModel){
      return this.http.put(`${this.server_url}/recipe/${id}/edit`,reqBody,this.appendToken())
    }

    removeRecipeAPI(id:string){
      return this.http.delete(`${this.server_url}/recipe/${id}/delete`,this.appendToken())
    }

    getChartData(){
      this.allDownloadListAPI().subscribe((res:any)=>{
        let downloadArrayList:any=[]
        let output:any={}
        res.forEach((item:any) => {
          let cuisine=item.recipeCuisine
          let currentCount=item.count
          if(output.hasOwnProperty(cuisine)){
            output[cuisine] +=currentCount
          }
          else{
            output[cuisine] =currentCount
          }
        });

        console.log(output);
        for(let cuisine in output){
          downloadArrayList.push({name:cuisine,y:output[cuisine]})
        }
        console.log(downloadArrayList);
        localStorage.setItem("chart",JSON.stringify(downloadArrayList))
      })
    }

    


}


