import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { postsAndUsersService } from 'src/app/services/posts-and-users.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css'],
})
export class PageContentComponent implements OnInit {
  posts;
  searchText: string = "";
  key: any;
  showSpinner: boolean;

  constructor(public db: AngularFireDatabase, public postsAndUsersService: postsAndUsersService) { this.loadPosts() }

  SearchByTitle(post) {
    return post.title.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
  SearchByMessage(post) {
    return post.msg.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
  SearchByDescription(post) {
    return post.description.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
  SearchByAuthor(post) {
    return post.user.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

  loadPosts() {
    this.postsAndUsersService.getData(this.key)
      .subscribe(post => {
        if (this.posts) {
          for (let i = post.length - 2; i >= 0; i--) {
            this.posts.push(post[i]);
          }
        }
        else
          this.posts = post.reverse();
        this.key = this.posts[this.posts.length - 1].key;
        this.showSpinner = false;
      });
  }

  filterDateNew() {
    return this.db.list('/posts').valueChanges().subscribe(post => {
      this.posts = post.reverse();
    })
  }
  filterDateOld() {
    return this.db.list('/posts').valueChanges().subscribe(post => {
      this.posts = post;
    })
  }

  onScroll() {
    this.loadPosts();
  }

  ngOnInit() {
  }
}
