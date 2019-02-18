import { Component, OnInit } from '@angular/core';
// import { postsAndUsersService } from '../posts-and-users.service'
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  posts;

  constructor(db: AngularFireDatabase) {
    db.list('/posts').valueChanges().subscribe(post => {
      this.posts = post;
    })
  }
  ngOnInit() {
  }
}
