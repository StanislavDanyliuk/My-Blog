import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class postsAndUsersService {
  posts: any[];
  postRef: Observable<any>

  constructor(private http: AngularFireDatabase) {
  }

  // getPosts() {
  //   this.http.list('/posts').valueChanges();
  // }
  getData(key?) {
    let query;

    this.postRef = this.http.list('/posts', ref => {
      query = (key) ? ref.orderByKey().endAt(key).limitToLast(5) : ref.orderByKey().limitToLast(5);
      return query;
    }
    ).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      }));
    return this.postRef;
  }
}
