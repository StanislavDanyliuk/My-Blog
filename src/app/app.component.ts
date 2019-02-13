import { Component } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: any[];

  constructor(db: AngularFireDatabase) {
    db.list('/posts').valueChanges().subscribe(post => {
      this.post = post;
      console.log(this.post);
    })


  }
}
