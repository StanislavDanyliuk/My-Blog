import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalWindowSignInComponent } from './components/modal-window-sign-in/modal-window-sign-in.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { CategoriesWidgetComponent } from './components/categories-widget/categories-widget.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { NewPostPageComponent } from './components/new-post-page/new-post-page.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { postsAndUsersService } from './services/posts-and-users.service'
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalWindowSignInComponent,
    BlogPostComponent,
    PageContentComponent,
    CategoriesWidgetComponent,
    FooterComponent,
    NewPostComponent,
    NewPostPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
    InfiniteScrollModule,

  ],
  providers: [postsAndUsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
