import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postRef: AngularFireList<any>;
  post: Observable<any>;

  constructor(db: AngularFireDatabase) {
    this.postRef = db.list('/posts');
    this.post = this.postRef.valueChanges();
  }
  save(newHead: string,
    newDescription: string,
    newMsg: string,
    newtype: string,
  ) {
    this.postRef.push({ title: newHead, description: newDescription, msg: newMsg, type: newtype });
  }

  ngOnInit() {
  }

}
