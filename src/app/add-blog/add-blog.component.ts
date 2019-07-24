import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { bloglist } from 'src/app/bloglist';
import { PostblogService } from 'src/app/postblog.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Content } from '@angular/compiler/src/render3/r3_ast';




@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  
  blog;
  bloglist = bloglist;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postblogService : PostblogService){}

  

  ngOnInit() { this.route.paramMap.subscribe(params=>{
    this.blog = this.bloglist[+params.get('blogId')];
    })
  }

  addNewBlog(blog){
    this.postblogService.dodajUBlogKorpu(blog);
    this.router.navigate(['/blog']);
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'You add a blog!',
      showConfirmButton: false,
      timer: 2000
    })
  }

 
 
}

