import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsAndUsersService {

  postRef: AngularFireList<any>;
  posts: Observable<any[]>;


  constructor(private http: AngularFireDatabase, private r: Router) { }

  getPosts() {
    this.postRef = this.http.list('/home');
    return this.posts = this.postRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val()
        }));
      })
    );
  }

}
