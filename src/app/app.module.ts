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
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SimplePostComponent } from './simple-post/simple-post.component';
import { postsAndUsersService } from './posts-and-users.service'
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [postsAndUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
