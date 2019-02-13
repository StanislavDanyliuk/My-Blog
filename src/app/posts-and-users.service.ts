import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Post } from './models/post';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class postsAndUsersService {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  // constructor(public afs: AngularFirestore) {
  //   this.posts = this.afs.collection('/number').valueChanges();
  // }

  getPosts() {
    return this.posts;
  }
}
