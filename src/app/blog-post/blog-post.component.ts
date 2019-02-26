import { Component, OnInit, Input } from '@angular/core';
import { postsAndUsersService } from '../posts-and-users.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private postService: postsAndUsersService) { }

  ngOnInit() {
  }

  @Input() img: string;
  @Input() title: string;
  @Input() msg: string;
  @Input() author: string;
  @Input() date: string;
  @Input() description: string;
  @Input() toggle: string;

}
