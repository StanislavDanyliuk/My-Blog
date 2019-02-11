import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPostPageComponent } from './new-post-page/new-post-page.component';
import { AppComponent } from './app.component';
import { PageContentComponent } from './page-content/page-content.component';

const routes: Routes = [

{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'new', component: NewPostPageComponent },
{path: 'home', component: PageContentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
