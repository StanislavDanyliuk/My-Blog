import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModalWindowSignInComponent } from './modal-window-sign-in/modal-window-sign-in.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PageContentComponent } from './page-content/page-content.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { CategoriesWidgetComponent } from './categories-widget/categories-widget.component';
import { SideWidgetComponent } from './side-widget/side-widget.component';
import { FooterComponent } from './footer/footer.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewPostPageComponent } from './new-post-page/new-post-page.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SimplePostComponent } from './simple-post/simple-post.component';
import { postsAndUsersService } from './posts-and-users.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalWindowSignInComponent,
    BlogPostComponent,
    PageContentComponent,
    SearchWidgetComponent,
    CategoriesWidgetComponent,
    SideWidgetComponent,
    FooterComponent,
    NewPostComponent,
    NewPostPageComponent,
    SimplePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBgFODrTVZBOZGjeRQBYSKZ6a7SwoWEJO4",
      authDomain: "my-awesome-blog-f9b73.firebaseapp.com",
      databaseURL: "https://my-awesome-blog-f9b73.firebaseio.com",
      projectId: "my-awesome-blog-f9b73",
      storageBucket: "my-awesome-blog-f9b73.appspot.com",
      messagingSenderId: "545395090605"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [postsAndUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
