import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class postsAndUsersService {
  posts: any[];

  constructor(private http: AngularFireDatabase) {
  }

  getPosts() {
    this.http.list('/posts').valueChanges();
  }
}
