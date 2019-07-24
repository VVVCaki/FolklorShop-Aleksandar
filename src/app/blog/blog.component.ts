import { Component, OnInit } from '@angular/core';
import { bloglist } from 'src/app/bloglist';
import { PostblogService } from 'src/app/postblog.service';
import { Router } from '@angular/router';
import { AutentifikacijaService } from '../autentifikacija.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  bloglist = bloglist;

  

  constructor(private postblogService : PostblogService,
    private autentifikacijaService: AutentifikacijaService,
    private router:Router,) {}

 

  ngOnInit() {
  }

}
