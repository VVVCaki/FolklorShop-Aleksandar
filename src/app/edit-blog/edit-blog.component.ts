import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { bloglist } from 'src/app/bloglist';
import { PostblogService } from 'src/app/postblog.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  blog;
  bloglist = bloglist;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postblogService : PostblogService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.blog = this.bloglist[+params.get('blogId')];
    })
  }

  save(){
    this.postblogService.uzmiBlog();
    this.router.navigate(['/blog']);
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'You changes are saved!',
      showConfirmButton: false,
      timer: 2000
    })
  }

  delete(){
    this.postblogService.ocistiBlogKorpu();
    this.router.navigate(['/blog']);
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'You delete a blog!',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
