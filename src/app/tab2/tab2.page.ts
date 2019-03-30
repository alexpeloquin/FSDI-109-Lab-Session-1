import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  page2Title="Feed"

  allPosts = [];

  constructor(public dataSrv: DataService){
    //get the data from the service to the allPost array
    this.allPosts = this.dataSrv.getAllPost();
    console.log(this.allPosts);
  }

}
