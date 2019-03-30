import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pageTitle="Home Page";
  secondTitle="this is to show interpolation"
  thirdTitle="create variable in logic file first to avoid errors"

  postText="";

  constructor(public dataSrv: DataService){
    console.log("Home contructor exec");
  }

  sayHello() {
    console.log("Hello from the home page");
  }

  sayGoodbye(){
    console.log("later");
  }

  create(){
    //get the text from the input
    console.log(this.postText);
    //add it to the array on the service
    this.dataSrv.addPost(this.postText);
    //clear the input field(or clear the variable binded to it)
    this.postText="";
  }



}
