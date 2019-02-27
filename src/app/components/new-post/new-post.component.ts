import * as core from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@core.Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements core.OnInit {
  postForm: FormGroup;
  submitted = false;
  postRef: AngularFireList<any>;
  post: Observable<any>;
  today: number = Date.now();
  email: string;

  constructor(db: AngularFireDatabase, private formBuilder: FormBuilder, public authService: AuthService) {
    this.postRef = db.list('/posts');
    this.post = this.postRef.valueChanges();
  }
  save(newHead: string,
    newDescription: string,
    newMsg: string,
    newtype: string,
    newDate: string,
    newImg: string,
    newToggle: boolean,
    user: string,
  ) {
    this.postRef.push({ title: newHead, description: newDescription, msg: newMsg, type: newtype, date: newDate, img: newImg, toggle: newToggle, user});
  }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      Header: ['', [Validators.required, Validators.minLength(4)]],
      Description: ['', [Validators.required, Validators.minLength(4)]],
      Message: ['', [Validators.required, Validators.minLength(30)]],
    });
    this.authService.user.subscribe(ref => {
      this.email = ref.email

    })

  }
  onCheck(value) {
    console.log(value)
  }
  get f() {
    return this.postForm.controls;
  }
  onSubmit() {

    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
  }
}


