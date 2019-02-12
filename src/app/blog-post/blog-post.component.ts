import { Component, OnInit } from '@angular/core';
import { postsAndUsersService } from '../posts-and-users.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private postService: postsAndUsersService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      console.log(posts);
    });
  }

}
