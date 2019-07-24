import { Injectable } from '@angular/core';
import { bloglist } from './bloglist';

@Injectable({
  providedIn: 'root'
})
export class PostblogService {

  bloglist = bloglist;

  constructor() { }

  bloglistkorpa=[];

  dodajUBlogKorpu(blog){
    this.bloglistkorpa.push(blog);
  }

  uzmiBlog(){
    return this.bloglistkorpa;
  }
  

  
  ocistiBlogKorpu(){
    this.bloglistkorpa = [];
    return this.bloglistkorpa;
  }

 
}
