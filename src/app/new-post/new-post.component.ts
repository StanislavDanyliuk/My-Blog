import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  submitted = false;
  postRef: AngularFireList<any>;
  post: Observable<any>;

  constructor(db: AngularFireDatabase, private formBuilder: FormBuilder) {
    this.postRef = db.list('/posts');
    this.post = this.postRef.valueChanges();
  }
  save(newHead: string,
    newDescription: string,
    newMsg: string,
    newtype: string,
    newDate: string,
    newImg: string,
  ) {
    this.postRef.push({ title: newHead, description: newDescription, msg: newMsg, type: newtype, date: newDate, img: newImg });
  }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      Header: ['', [Validators.required, Validators.minLength(4)]],
      Description: ['', [Validators.required, Validators.minLength(4)]],
      Message: ['', [Validators.required, Validators.minLength(100)]],
      Date: ['', Validators.required],
    });
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


