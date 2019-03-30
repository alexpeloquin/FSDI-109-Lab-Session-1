import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private posts = [];

  constructor() { }

  public addPost(post){
    this.posts.push(post);
  }

  public getAllPost(){
    return this.posts;
  }
}
