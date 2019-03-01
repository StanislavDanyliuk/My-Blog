import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css'],
})
export class PageContentComponent implements OnInit {
  posts;
  searchText: string = "";

  constructor(public db: AngularFireDatabase) { }

  getPosts() {
    return this.db.list('/posts').valueChanges().subscribe(post => {
      this.posts = post.reverse();
    })
  }

  filterDate() {
    return this.db.list('/posts').valueChanges().subscribe(post => {
      this.posts = post;
    })
  }

  filterCondition(post) {
    return post.title.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  ngOnInit() {
    this.getPosts();
  }
}
