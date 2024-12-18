import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-download-list',
  templateUrl: './download-list.component.html',
  styleUrl: './download-list.component.css'
})
export class DownloadListComponent {

  allDownloads:any=[]

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllDownloadList()
  }

  getAllDownloadList(){
    this.api.allDownloadListAPI().subscribe((res:any)=>{
      this.allDownloads=res
      console.log(this.allDownloads);
    })
  }



}
