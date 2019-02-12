import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: Observable<any[]>;
  title = 'My awesome Blog';
  constructor(db:AngularFirestore) {
    this.post = db.collection('post').valueChanges();
  }
}
