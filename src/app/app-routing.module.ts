import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostPageComponent } from './new-post-page/new-post-page.component';
import { PageContentComponent } from './page-content/page-content.component';
import { SimplePostComponent } from './simple-post/simple-post.component';

const routes: Routes = [

{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'new', component: NewPostPageComponent },
{path: 'home', component: PageContentComponent },
{path: 'post/№', component: SimplePostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
